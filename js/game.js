/**
 * Puddle Jumper - Main Game Controller & Game Engine Loop
 * Orchestrates rendering pipeline, input handling (keyboard, touch, gamepad), state machine, and HUD.
 */

class GameEngine {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');

        // High DPI canvas setup
        this.resize();
        window.addEventListener('resize', () => this.resize());

        // State Machine
        this.state = 'MENU'; // 'MENU', 'ADVENTURE', 'ENDLESS', 'TIME_ATTACK', 'ZEN', 'EDITOR', 'EDITOR_PLAY', 'PAUSED', 'GAMEOVER', 'VICTORY'
        this.currentLevelNum = 1;
        this.activeLevel = null;

        // Subsystems
        this.particleSys = new ParticleSystem();
        this.particleSys.initRain(this.canvas.width, this.canvas.height);
        this.trajectory = new TrajectoryProjector();
        this.editor = new LevelEditor(this.canvas, this.ctx);

        // Entities
        this.player = new Player(100, 350);
        this.camera = { x: 0, y: 0, shake: 0 };

        // Endless mode tracking
        this.endlessChunkIndex = 0;
        this.endlessNextX = 0;
        this.endlessDistance = 0;
        this.highScore = parseInt(localStorage.getItem('puddle_jumper_high_score') || '0', 10);

        // Time Attack tracking
        this.timeAttackTimer = 0;

        // Input Management
        this.keys = {};
        this.touchInput = { left: false, right: false, charge: false, glide: false, stomp: false };
        this.setupInputs();

        // Floating Text Effects
        this.floatingTexts = [];

        // Game Loop
        this.lastTime = 0;
        this.accumulator = 0;
        this.fixedDelta = 1000 / 60; // 60 FPS fixed physics step
        requestAnimationFrame((t) => this.loop(t));
    }

    resize() {
        const container = document.getElementById('canvasContainer');
        const dpr = window.devicePixelRatio || 1;
        const width = container ? container.clientWidth : 960;
        const height = container ? container.clientHeight : 540;

        this.canvas.width = width * dpr;
        this.canvas.height = height * dpr;
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';

        this.ctx.scale(dpr, dpr);
        this.viewWidth = width;
        this.viewHeight = height;

        if (this.particleSys) {
            this.particleSys.initRain(width, height);
        }
    }

    setupInputs() {
        // Keyboard
        window.addEventListener('keydown', (e) => {
            if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
                e.preventDefault();
            }
            this.keys[e.code] = true;

            if (e.code === 'KeyP' || e.code === 'Escape') {
                this.togglePause();
            }
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });

        // Mouse / Touch aiming on canvas
        this.canvas.addEventListener('mousedown', (e) => {
            if (this.state === 'EDITOR') {
                this.editor.handleMouseDown(e);
            } else if (this.state === 'ADVENTURE' || this.state === 'ENDLESS' || this.state === 'ZEN' || this.state === 'TIME_ATTACK' || this.state === 'EDITOR_PLAY') {
                if (e.button === 0) {
                    this.player.startCharge();
                }
            }
        });

        this.canvas.addEventListener('mousemove', (e) => {
            if (this.state === 'EDITOR') {
                this.editor.handleMouseMove(e);
            }
        });

        this.canvas.addEventListener('mouseup', (e) => {
            if (this.state === 'EDITOR') {
                this.editor.handleMouseUp(e);
            } else if (this.state === 'ADVENTURE' || this.state === 'ENDLESS' || this.state === 'ZEN' || this.state === 'TIME_ATTACK' || this.state === 'EDITOR_PLAY') {
                if (e.button === 0) {
                    this.player.releaseJump(this.particleSys);
                }
            }
        });

        // Touch buttons
        this.wireTouchButton('btnTouchLeft', (val) => { this.touchInput.left = val; });
        this.wireTouchButton('btnTouchRight', (val) => { this.touchInput.right = val; });
        this.wireTouchButton('btnTouchJump', (val) => {
            if (val) this.player.startCharge();
            else this.player.releaseJump(this.particleSys);
        });
        this.wireTouchButton('btnTouchGlide', (val) => { this.player.toggleGlide(val); });
        this.wireTouchButton('btnTouchStomp', (val) => { if (val) this.player.stomp(); });
    }

    wireTouchButton(id, callback) {
        const btn = document.getElementById(id);
        if (!btn) return;
        btn.addEventListener('touchstart', (e) => { e.preventDefault(); callback(true); });
        btn.addEventListener('touchend', (e) => { e.preventDefault(); callback(false); });
        btn.addEventListener('mousedown', (e) => { e.preventDefault(); callback(true); });
        btn.addEventListener('mouseup', (e) => { e.preventDefault(); callback(false); });
    }

    pollGamepad() {
        const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
        if (!gamepads || !gamepads[0]) return;
        const gp = gamepads[0];

        // Stick or D-Pad
        const axisX = gp.axes[0] || 0;
        if (axisX < -0.3 || gp.buttons[14]?.pressed) this.keys['ArrowLeft'] = true;
        else if (axisX > 0.3 || gp.buttons[15]?.pressed) this.keys['ArrowRight'] = true;

        // Button A (Jump Charge/Release)
        if (gp.buttons[0]?.pressed) {
            this.player.startCharge();
        } else if (this.player.isCharging) {
            this.player.releaseJump(this.particleSys);
        }

        // Button B (Stomp)
        if (gp.buttons[1]?.pressed) {
            this.player.stomp();
        }

        // Triggers / Bumpers (Glide)
        if (gp.buttons[4]?.pressed || gp.buttons[5]?.pressed || gp.buttons[6]?.pressed || gp.buttons[7]?.pressed) {
            this.player.toggleGlide(true);
        } else if (!this.keys['ShiftLeft'] && !this.keys['ShiftRight']) {
            this.player.toggleGlide(false);
        }
    }

    startAdventureMode(levelNum = 1) {
        this.currentLevelNum = levelNum;
        this.state = 'ADVENTURE';
        const levelData = LevelManager.getAdventureLevel(levelNum);
        this.activeLevel = LevelManager.parseLevelData(levelData);

        this.player.skin = window.shop.selectedSkin;
        this.player.umbrellaSkin = window.shop.selectedUmbrella;
        this.player.trailEffect = window.shop.selectedTrail;
        this.player.maxHealth = 3 + (window.shop.upgrades.maxHealth || 0);
        this.player.reset(this.activeLevel.spawn.x, this.activeLevel.spawn.y);

        this.camera.x = 0;
        this.camera.y = 0;

        window.sound.setWeatherIntensity(this.activeLevel.biome.weather.intensity, this.activeLevel.biome.weather.wind);
        window.sound.startMusic();
        this.updateHUD();
        this.showScreen('gameHUD');
    }

    startEndlessMode() {
        this.state = 'ENDLESS';
        this.endlessChunkIndex = 0;
        this.endlessDistance = 0;

        const firstChunk = LevelManager.generateEndlessChunk(0, 0);
        this.activeLevel = {
            platforms: [{ x: 0, y: 460, width: 400, height: 100 }, ...firstChunk.platforms],
            puddles: [new BasePuddle(100, 454, 120, 20, 'water'), ...LevelManager.parseLevelData({ puddles: firstChunk.puddles, collectibles: [] }).puddles],
            collectibles: LevelManager.parseLevelData({ puddles: [], collectibles: firstChunk.collectibles }).collectibles,
            hazards: firstChunk.hazards,
            boss: null,
            biome: LevelManager.biomes[0],
            width: 100000
        };
        this.endlessNextX = firstChunk.nextStartX;

        this.player.skin = window.shop.selectedSkin;
        this.player.umbrellaSkin = window.shop.selectedUmbrella;
        this.player.trailEffect = window.shop.selectedTrail;
        this.player.maxHealth = 3 + (window.shop.upgrades.maxHealth || 0);
        this.player.reset(100, 400);

        window.sound.setWeatherIntensity(0.5, 0.4);
        window.sound.startMusic();
        this.updateHUD();
        this.showScreen('gameHUD');
    }

    startZenMode() {
        this.state = 'ZEN';
        this.startEndlessMode();
        this.state = 'ZEN'; // Override state back to ZEN
        this.player.health = 999;
        window.sound.setWeatherIntensity(0.3, 0.1);
        window.sound.startMusic();
    }

    startTimeAttackMode() {
        this.state = 'TIME_ATTACK';
        this.timeAttackTimer = 0;
        this.startAdventureMode(3); // Fast paced stage 3
        this.state = 'TIME_ATTACK';
    }

    startEditor() {
        this.state = 'EDITOR';
        this.editor.start();
        this.showScreen('editorUI');
        window.sound.stopMusic();
    }

    playCustomLevel() {
        this.state = 'EDITOR_PLAY';
        this.activeLevel = this.editor.getPlayableLevel();
        this.player.reset(this.activeLevel.spawn.x, this.activeLevel.spawn.y);
        this.showScreen('gameHUD');
    }

    addFloatingText(text, x, y, color = '#60a5fa') {
        this.floatingTexts.push({
            text,
            x,
            y,
            color,
            alpha: 1.0,
            vy: -1.2,
            life: 60
        });
    }

    togglePause() {
        if (this.state === 'ADVENTURE' || this.state === 'ENDLESS' || this.state === 'ZEN' || this.state === 'TIME_ATTACK') {
            this.state = 'PAUSED';
            document.getElementById('pauseModal').classList.remove('hidden');
        } else if (this.state === 'PAUSED') {
            this.state = 'ADVENTURE'; // Or previous state
            document.getElementById('pauseModal').classList.add('hidden');
        }
    }

    update() {
        this.pollGamepad();

        if (this.state === 'EDITOR') {
            return;
        }

        if (['ADVENTURE', 'ENDLESS', 'TIME_ATTACK', 'ZEN', 'EDITOR_PLAY'].includes(this.state)) {
            // Handle Horizontal Controls
            const isLeft = this.keys['ArrowLeft'] || this.keys['KeyA'] || this.touchInput.left;
            const isRight = this.keys['ArrowRight'] || this.keys['KeyD'] || this.touchInput.right;

            if (isLeft) {
                this.player.facing = -1;
                this.player.vx -= this.player.isGrounded ? 0.6 : 0.35;
            }
            if (isRight) {
                this.player.facing = 1;
                this.player.vx += this.player.isGrounded ? 0.6 : 0.35;
            }

            // Handle Jump Charging
            if (this.keys['Space'] || this.keys['ArrowUp'] || this.keys['KeyW']) {
                this.player.startCharge();
            } else if (this.player.isCharging) {
                this.player.releaseJump(this.particleSys);
            }

            // Glide & Stomp Controls
            const isGlidingKey = this.keys['ShiftLeft'] || this.keys['ShiftRight'] || this.touchInput.glide;
            this.player.toggleGlide(isGlidingKey);

            if (this.keys['ArrowDown'] || this.keys['KeyS'] || this.touchInput.stomp) {
                this.player.stomp();
            }

            // Physics Update
            const gravity = 0.42;
            const wind = this.activeLevel.biome ? this.activeLevel.biome.weather.wind : 0.3;

            this.player.update(
                gravity,
                wind,
                this.activeLevel.platforms,
                this.activeLevel.puddles,
                this.activeLevel.hazards,
                this.particleSys
            );

            // Update Puddles
            for (const puddle of this.activeLevel.puddles) {
                puddle.update();
            }

            // Update Collectibles
            for (let i = this.activeLevel.collectibles.length - 1; i >= 0; i--) {
                const c = this.activeLevel.collectibles[i];
                c.update(this.player, this.particleSys);
                if (c.collected) {
                    if (c.type === 'coin') {
                        window.shop.addCoins(1);
                        window.achievements.recordStat('coinsCollected', 1);
                    } else if (c.type === 'pearl') {
                        window.shop.addCoins(5);
                        window.achievements.recordStat('pearlsCollected', 1);
                    } else if (c.type === 'star') {
                        window.achievements.recordStat('starsCollected', 1);
                    }
                    this.activeLevel.collectibles.splice(i, 1);
                }
            }

            // Update Enemies & Hazards
            for (const h of this.activeLevel.hazards) {
                h.update();
            }

            // Update Boss if present
            if (this.activeLevel.boss) {
                this.activeLevel.boss.update(this.player, this.particleSys);
                if (this.activeLevel.boss.isDead) {
                    window.achievements.recordStat('bossesDefeated', 1);
                    setTimeout(() => this.onLevelComplete(), 1500);
                }
            }

            // Update Particles & Weather
            this.particleSys.update(this.viewWidth, this.viewHeight, wind);
            this.trajectory.update();

            // Camera Tracking
            const targetCamX = this.player.x - this.viewWidth * 0.35;
            this.camera.x = MathUtils.lerp(this.camera.x, Math.max(0, targetCamX), 0.1);

            // Floating Text Animation
            for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
                const ft = this.floatingTexts[i];
                ft.y += ft.vy;
                ft.life--;
                ft.alpha = ft.life / 60;
                if (ft.life <= 0) this.floatingTexts.splice(i, 1);
            }

            // Check Endless Mode Chunks Spawning
            if (this.state === 'ENDLESS' || this.state === 'ZEN') {
                this.endlessDistance = Math.floor(this.player.x / 10);
                window.achievements.setStatMax('maxEndlessDistance', this.endlessDistance);

                if (this.player.x + this.viewWidth * 1.5 > this.endlessNextX) {
                    this.endlessChunkIndex++;
                    const newChunk = LevelManager.generateEndlessChunk(this.endlessChunkIndex, this.endlessNextX);
                    this.activeLevel.platforms.push(...newChunk.platforms);
                    this.activeLevel.puddles.push(...LevelManager.parseLevelData({ puddles: newChunk.puddles, collectibles: [] }).puddles);
                    this.activeLevel.collectibles.push(...LevelManager.parseLevelData({ puddles: [], collectibles: newChunk.collectibles }).collectibles);
                    this.activeLevel.hazards.push(...newChunk.hazards);
                    this.endlessNextX = newChunk.nextStartX;
                }
            }

            // Time Attack Timer
            if (this.state === 'TIME_ATTACK') {
                this.timeAttackTimer++;
            }

            // Check Goal Platform Reach
            if (this.state === 'ADVENTURE' && this.activeLevel.goal) {
                if (Math.abs(this.player.x - this.activeLevel.goal.x) < 40 && Math.abs(this.player.y - this.activeLevel.goal.y) < 60) {
                    this.onLevelComplete();
                }
            }

            // Check Fall Off Screen or Death
            if ((this.player.y > this.viewHeight + 100 || this.player.isDead) && this.state !== 'ZEN') {
                this.onGameOver();
            } else if (this.state === 'ZEN' && this.player.y > this.viewHeight + 100) {
                this.player.y = 100;
                this.player.vy = 0;
            }

            this.updateHUD();
        }
    }

    onLevelComplete() {
        window.sound.playLevelClear();
        window.achievements.recordStat('levelsCompleted', 1);
        document.getElementById('victoryModal').classList.remove('hidden');
        document.getElementById('victoryScore').innerText = `Score: ${this.player.score}`;
    }

    onGameOver() {
        window.sound.playHurt();
        if (this.player.score > this.highScore) {
            this.highScore = this.player.score;
            localStorage.setItem('puddle_jumper_high_score', this.highScore.toString());
        }
        document.getElementById('gameOverModal').classList.remove('hidden');
        document.getElementById('finalScoreText').innerText = `Final Score: ${this.player.score}`;
    }

    updateHUD() {
        // Health Hearts
        const heartsContainer = document.getElementById('hudHearts');
        if (heartsContainer) {
            let heartsHtml = '';
            for (let i = 0; i < this.player.maxHealth; i++) {
                heartsHtml += `<span class="heart ${i < this.player.health ? 'full' : 'empty'}">❤️</span>`;
            }
            heartsContainer.innerHTML = heartsHtml;
        }

        // Coins & Score
        const scoreElem = document.getElementById('hudScore');
        const coinsElem = document.getElementById('hudCoins');
        if (scoreElem) scoreElem.innerText = `Score: ${this.player.score}`;
        if (coinsElem) coinsElem.innerText = `💧 ${window.shop.coins}`;

        // Combo Counter
        const comboElem = document.getElementById('hudCombo');
        if (comboElem) {
            if (this.player.combo > 1) {
                comboElem.innerText = `${this.player.combo}x COMBO!`;
                comboElem.style.opacity = '1';
            } else {
                comboElem.style.opacity = '0';
            }
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen-overlay').forEach(el => el.classList.add('hidden'));
        const target = document.getElementById(screenId);
        if (target) target.classList.remove('hidden');
    }

    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.viewWidth, this.viewHeight);

        if (this.state === 'EDITOR') {
            this.editor.draw();
            return;
        }

        ctx.save();

        // Parallax Background Gradient
        const biome = this.activeLevel?.biome || LevelManager.biomes[0];
        const bgGrad = ctx.createLinearGradient(0, 0, 0, this.viewHeight);
        bgGrad.addColorStop(0, biome.bgGradient[0]);
        bgGrad.addColorStop(0.5, biome.bgGradient[1]);
        bgGrad.addColorStop(1, biome.bgGradient[2]);
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, this.viewWidth, this.viewHeight);

        // Background Rain Layer
        this.particleSys.draw(ctx, this.camera, 'background');

        // Draw Platforms
        ctx.fillStyle = biome.groundColor;
        for (const plat of this.activeLevel.platforms) {
            if (plat.x + plat.width > this.camera.x && plat.x < this.camera.x + this.viewWidth) {
                ctx.fillRect(plat.x - this.camera.x, plat.y - this.camera.y, plat.width, plat.height);
                // Top grass edge highlight
                ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
                ctx.fillRect(plat.x - this.camera.x, plat.y - this.camera.y, plat.width, 4);
                ctx.fillStyle = biome.groundColor;
            }
        }

        // Draw Puddles
        for (const puddle of this.activeLevel.puddles) {
            puddle.draw(ctx, this.camera);
        }

        // Draw Collectibles
        for (const c of this.activeLevel.collectibles) {
            c.draw(ctx, this.camera);
        }

        // Draw Hazards
        for (const h of this.activeLevel.hazards) {
            h.draw(ctx, this.camera);
        }

        // Draw Boss
        if (this.activeLevel.boss) {
            this.activeLevel.boss.draw(ctx, this.camera);
        }

        // Draw Exit Goal Flag
        if (this.activeLevel.goal) {
            const gx = this.activeLevel.goal.x - this.camera.x;
            const gy = this.activeLevel.goal.y - this.camera.y;
            ctx.fillStyle = '#64748b';
            ctx.fillRect(gx, gy, 6, 60);
            ctx.fillStyle = '#22c55e';
            ctx.beginPath();
            ctx.moveTo(gx + 6, gy);
            ctx.lineTo(gx + 34, gy + 15);
            ctx.lineTo(gx + 6, gy + 30);
            ctx.closePath();
            ctx.fill();
        }

        // Draw Jump Trajectory Preview if charging
        if (this.player.isCharging) {
            const chargeRatio = Math.min(1.0, this.player.chargeTime / this.player.maxChargeTime);
            const baseJumpForce = -7.5 - chargeRatio * 8.5;
            const jumpMult = this.player.springBoots ? 1.4 : (this.player.groundPuddle ? this.player.groundPuddle.bounceMult : 1.0);
            const initialVx = this.player.facing * (4.5 + chargeRatio * 4.5);
            const initialVy = baseJumpForce * jumpMult;

            this.trajectory.draw(
                ctx,
                this.player.x + this.player.width / 2,
                this.player.y + this.player.height,
                initialVx,
                initialVy,
                0.42,
                this.camera
            );
        }

        // Draw Player
        this.player.draw(ctx, this.camera);

        // Foreground Rain Layer & Particles
        this.particleSys.draw(ctx, this.camera, 'foreground');

        // Draw Floating Text Popups
        for (const ft of this.floatingTexts) {
            ctx.save();
            ctx.globalAlpha = Math.max(0, ft.alpha);
            ctx.fillStyle = ft.color;
            ctx.font = 'bold 16px sans-serif';
            ctx.fillText(ft.text, ft.x - this.camera.x, ft.y - this.camera.y);
            ctx.restore();
        }

        ctx.restore();
    }

    loop(timestamp) {
        if (!this.lastTime) this.lastTime = timestamp;
        const delta = timestamp - this.lastTime;
        this.lastTime = timestamp;

        this.accumulator += delta;
        while (this.accumulator >= this.fixedDelta) {
            this.update();
            this.accumulator -= this.fixedDelta;
        }

        this.draw();
        requestAnimationFrame((t) => this.loop(t));
    }
}

// Instantiate engine when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    window.game = new GameEngine();
});
