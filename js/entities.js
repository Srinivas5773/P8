/**
 * Puddle Jumper - Game Entities & Boss AI Engine
 * Full player controller, 8 puddle physics varieties, collectibles, enemy hazards, and multi-phase bosses.
 */

class Player {
    constructor(x, y) {
        this.startX = x;
        this.startY = y;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.width = 36;
        this.height = 36;

        // Physics & Jump
        this.isGrounded = false;
        this.groundPuddle = null;
        this.isCharging = false;
        this.chargeTime = 0;
        this.maxChargeTime = 40;
        this.facing = 1; // 1 = right, -1 = left
        this.isGliding = false;
        this.isStomping = false;
        this.squashX = 1.0;
        this.squashY = 1.0;

        // Health & Stats
        this.health = 3;
        this.maxHealth = 3;
        this.invulnerableTimer = 0;
        this.shield = false;
        this.isDead = false;

        // Combos & Multipliers
        this.combo = 0;
        this.comboTimer = 0;
        this.score = 0;
        this.coins = 0;

        // Special States
        this.isBubbleFloating = false;
        this.bubbleTimer = 0;
        this.activePowerup = null;
        this.powerupTimer = 0;
        this.springBoots = false;
        this.magnetActive = false;
        this.turboActive = false;

        // Cosmetics
        this.skin = 'froggy'; // 'froggy', 'duckie', 'boots_kid', 'raincat', 'axolotl', 'cyber_rover', 'storm_mage'
        this.umbrellaSkin = 'classic_red';
        this.trailEffect = 'rainbow';

        // Animation
        this.animTick = 0;
        this.blinkTimer = 100;
        this.isBlinking = false;
    }

    reset(x = this.startX, y = this.startY) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.health = this.maxHealth;
        this.isDead = false;
        this.isGrounded = false;
        this.isCharging = false;
        this.chargeTime = 0;
        this.isGliding = false;
        this.isStomping = false;
        this.isBubbleFloating = false;
        this.bubbleTimer = 0;
        this.activePowerup = null;
        this.powerupTimer = 0;
        this.shield = false;
        this.springBoots = false;
        this.magnetActive = false;
        this.turboActive = false;
        this.combo = 0;
        this.comboTimer = 0;
        this.invulnerableTimer = 60;
    }

    startCharge() {
        if (this.isGrounded && !this.isCharging) {
            this.isCharging = true;
            this.chargeTime = 0;
        }
    }

    releaseJump(particleSys) {
        if (!this.isCharging || !this.isGrounded) {
            this.isCharging = false;
            return;
        }

        const chargeRatio = Math.min(1.0, this.chargeTime / this.maxChargeTime);
        const baseJumpForce = -7.5 - chargeRatio * 8.5;
        const jumpMultiplier = this.springBoots ? 1.4 : (this.groundPuddle ? this.groundPuddle.bounceMult : 1.0);

        this.vy = baseJumpForce * jumpMultiplier;
        this.vx = this.facing * (4.5 + chargeRatio * 4.5);
        this.isGrounded = false;
        this.isCharging = false;

        // Visual squash & audio
        this.squashX = 0.65;
        this.squashY = 1.45;
        window.sound.playJump(chargeRatio);

        if (particleSys) {
            particleSys.emitPuff(this.x + this.width / 2, this.y + this.height, 12);
            if (this.groundPuddle) {
                this.groundPuddle.onPlayerJump(this, particleSys, chargeRatio);
            }
        }
    }

    stomp() {
        if (!this.isGrounded && !this.isStomping) {
            this.isStomping = true;
            this.vy = 16.0;
            this.vx *= 0.2;
            window.sound.playClick();
        }
    }

    toggleGlide(state) {
        if (!this.isGrounded && state) {
            this.isGliding = true;
        } else {
            this.isGliding = false;
        }
    }

    takeDamage(amount = 1, knockbackDir = 0, particleSys) {
        if (this.invulnerableTimer > 0 || this.isDead) return;

        if (this.shield) {
            this.shield = false;
            this.invulnerableTimer = 60;
            window.sound.playBubblePop();
            if (particleSys) particleSys.emitSparks(this.x + this.width / 2, this.y + this.height / 2, 20, '#60a5fa');
            return;
        }

        if (this.isBubbleFloating) {
            this.popBubble(particleSys);
            this.invulnerableTimer = 30;
            return;
        }

        this.health -= amount;
        this.invulnerableTimer = 90;
        this.vy = -6;
        this.vx = knockbackDir * 5;
        this.combo = 0;
        this.comboTimer = 0;
        window.sound.playHurt();

        if (particleSys) {
            particleSys.emitSparks(this.x + this.width / 2, this.y + this.height / 2, 25, '#ef4444');
        }

        if (this.health <= 0) {
            this.health = 0;
            this.isDead = true;
        }
    }

    heal(amount = 1) {
        this.health = Math.min(this.maxHealth, this.health + amount);
        window.sound.playGem();
    }

    applyPowerup(type, duration = 600) {
        this.activePowerup = type;
        this.powerupTimer = duration;

        this.shield = type === 'shield';
        this.springBoots = type === 'spring_boots';
        this.magnetActive = type === 'magnet';
        this.turboActive = type === 'turbo';

        window.sound.playPowerup();
    }

    popBubble(particleSys) {
        if (this.isBubbleFloating) {
            this.isBubbleFloating = false;
            this.bubbleTimer = 0;
            window.sound.playBubblePop();
            if (particleSys) {
                particleSys.emitBubbles(this.x + this.width / 2, this.y + this.height / 2, 16);
            }
        }
    }

    addCombo(points = 100) {
        this.combo++;
        this.comboTimer = 180; // 3 seconds at 60fps
        const multiplier = Math.min(5, 1 + Math.floor(this.combo / 3));
        const totalEarned = points * multiplier;
        this.score += totalEarned;
        return { combo: this.combo, multiplier, totalEarned };
    }

    update(gravity, wind, platforms, puddles, hazards, particleSys) {
        this.animTick++;

        // Eye blinking
        this.blinkTimer--;
        if (this.blinkTimer <= 0) {
            this.isBlinking = true;
            if (this.blinkTimer <= -8) {
                this.isBlinking = false;
                this.blinkTimer = 120 + Math.random() * 160;
            }
        }

        // Squash & stretch recovery
        this.squashX = MathUtils.lerp(this.squashX, 1.0, 0.12);
        this.squashY = MathUtils.lerp(this.squashY, 1.0, 0.12);

        // Invulnerability countdown
        if (this.invulnerableTimer > 0) this.invulnerableTimer--;

        // Combo timer countdown
        if (this.comboTimer > 0) {
            this.comboTimer--;
            if (this.comboTimer <= 0) {
                this.combo = 0;
            }
        }

        // Powerup timer
        if (this.powerupTimer > 0) {
            this.powerupTimer--;
            if (this.powerupTimer <= 0) {
                this.activePowerup = null;
                this.shield = false;
                this.springBoots = false;
                this.magnetActive = false;
                this.turboActive = false;
            }
        }

        // Bubble floating mechanics
        if (this.isBubbleFloating) {
            this.bubbleTimer--;
            this.vy = MathUtils.lerp(this.vy, -1.2, 0.08);
            this.vx += wind * 0.15;
            this.vx *= 0.94;

            if (this.bubbleTimer <= 0) {
                this.popBubble(particleSys);
            }
        } else {
            // Standard physics gravity & air resistance
            let effectiveGravity = gravity;
            if (this.isGliding && this.vy > 0) {
                effectiveGravity = 0.07;
                this.vy = Math.min(this.vy, 1.8);
                this.vx += (this.facing * 0.3) + wind * 0.2;
            }

            this.vy += effectiveGravity;
            this.vx *= this.isGrounded ? (this.groundPuddle ? this.groundPuddle.friction : 0.86) : 0.96;
        }

        // Handle Jump Charging
        if (this.isCharging) {
            this.chargeTime = Math.min(this.maxChargeTime, this.chargeTime + 1);
            const ratio = this.chargeTime / this.maxChargeTime;
            this.squashX = 1.0 + ratio * 0.35;
            this.squashY = 1.0 - ratio * 0.35;
            this.vx *= 0.5;
        }

        // Emit trail particles when airborne or dashing
        if (particleSys && (Math.abs(this.vx) > 3.0 || Math.abs(this.vy) > 4.0 || this.isGliding)) {
            if (this.animTick % 3 === 0) {
                let trailColor = '#60a5fa';
                if (this.trailEffect === 'rainbow') {
                    const colors = ['#f87171', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa'];
                    trailColor = colors[Math.floor(this.animTick / 3) % colors.length];
                } else if (this.trailEffect === 'firefly') {
                    trailColor = '#facc15';
                } else if (this.trailEffect === 'starlight') {
                    trailColor = '#e879f9';
                }
                particleSys.emitSplash(this.x + this.width / 2, this.y + this.height / 2, 2, trailColor, 0.4);
            }
        }

        // Movement Step X
        this.x += this.vx;
        this.handlePlatformCollisions(platforms, true);

        // Movement Step Y
        this.y += this.vy;
        this.isGrounded = false;
        this.groundPuddle = null;
        this.handlePlatformCollisions(platforms, false);

        // Check Puddle Collisions
        for (const puddle of puddles) {
            if (puddle.checkPlayerOverlap(this)) {
                puddle.onPlayerInteract(this, particleSys);
            }
        }

        // Check Hazard Collisions
        if (hazards) {
            for (const hazard of hazards) {
                if (MathUtils.checkAABB(this, hazard)) {
                    hazard.onCollide(this, particleSys);
                }
            }
        }
    }

    handlePlatformCollisions(platforms, isHorizontal) {
        for (const plat of platforms) {
            if (MathUtils.checkAABB(this, plat)) {
                if (isHorizontal) {
                    if (this.vx > 0) {
                        this.x = plat.x - this.width;
                    } else if (this.vx < 0) {
                        this.x = plat.x + plat.width;
                    }
                    this.vx = 0;
                } else {
                    if (this.vy > 0) {
                        this.y = plat.y - this.height;
                        this.vy = 0;
                        this.isGrounded = true;
                        this.isGliding = false;
                        if (this.isStomping) {
                            this.isStomping = false;
                            this.squashX = 1.4;
                            this.squashY = 0.6;
                        }
                    } else if (this.vy < 0) {
                        this.y = plat.y + plat.height;
                        this.vy = 0;
                    }
                }
            }
        }
    }

    draw(ctx, camera) {
        const renderX = this.x - camera.x;
        const renderY = this.y - camera.y;

        ctx.save();
        ctx.translate(renderX + this.width / 2, renderY + this.height / 2);
        ctx.scale(this.facing * this.squashX, this.squashY);

        // Invulnerability flicker
        if (this.invulnerableTimer > 0 && Math.floor(this.invulnerableTimer / 4) % 2 === 0) {
            ctx.globalAlpha = 0.45;
        }

        // Draw active Shield Bubble
        if (this.shield) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(0, 0, this.width * 0.8, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
            ctx.fill();
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2.5;
            ctx.stroke();
            ctx.restore();
        }

        // Draw Floating Puddle Bubble
        if (this.isBubbleFloating) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(0, 0, this.width * 0.9, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(167, 139, 250, 0.35)';
            ctx.fill();
            ctx.strokeStyle = '#a78bfa';
            ctx.lineWidth = 2.0;
            ctx.stroke();
            // Highlight
            ctx.beginPath();
            ctx.arc(-this.width * 0.35, -this.height * 0.35, 4, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fill();
            ctx.restore();
        }

        // Draw Umbrella if Gliding
        if (this.isGliding) {
            ctx.save();
            ctx.translate(0, -this.height * 0.7);
            ctx.beginPath();
            ctx.arc(0, 0, 24, Math.PI, 0);
            ctx.fillStyle = this.umbrellaSkin === 'rainbow' ? '#ec4899' : '#ef4444';
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Umbrella Handle
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, 16);
            ctx.strokeStyle = '#713f12';
            ctx.lineWidth = 2.5;
            ctx.stroke();
            ctx.restore();
        }

        // Draw Character Body based on skin
        this.renderCharacterSkin(ctx);

        ctx.restore();
    }

    renderCharacterSkin(ctx) {
        const w = this.width;
        const h = this.height;

        switch (this.skin) {
            case 'duckie':
                // Yellow Rubber Duck
                ctx.fillStyle = '#fde047';
                ctx.beginPath();
                ctx.ellipse(0, 2, w * 0.45, h * 0.4, 0, 0, Math.PI * 2);
                ctx.fill();
                // Duck Head
                ctx.beginPath();
                ctx.arc(w * 0.2, -h * 0.2, w * 0.25, 0, Math.PI * 2);
                ctx.fill();
                // Orange Beak
                ctx.fillStyle = '#f97316';
                ctx.beginPath();
                ctx.moveTo(w * 0.35, -h * 0.2);
                ctx.lineTo(w * 0.65, -h * 0.15);
                ctx.lineTo(w * 0.35, -h * 0.1);
                ctx.closePath();
                ctx.fill();
                // Eye
                if (!this.isBlinking) {
                    ctx.fillStyle = '#1e293b';
                    ctx.beginPath();
                    ctx.arc(w * 0.25, -h * 0.25, 3, 0, Math.PI * 2);
                    ctx.fill();
                }
                break;

            case 'boots_kid':
                // Raincoat Yellow Jacket & Boots
                ctx.fillStyle = '#facc15';
                ctx.fillRect(-w * 0.35, -h * 0.3, w * 0.7, h * 0.6);
                // Hood
                ctx.beginPath();
                ctx.arc(0, -h * 0.3, w * 0.35, Math.PI, 0);
                ctx.fill();
                // Face
                ctx.fillStyle = '#fed7aa';
                ctx.beginPath();
                ctx.arc(0, -h * 0.15, w * 0.2, 0, Math.PI * 2);
                ctx.fill();
                // Rain Boots
                ctx.fillStyle = '#dc2626';
                ctx.fillRect(-w * 0.3, h * 0.25, 8, 10);
                ctx.fillRect(w * 0.1, h * 0.25, 8, 10);
                // Eyes
                if (!this.isBlinking) {
                    ctx.fillStyle = '#0f172a';
                    ctx.fillRect(-2, -h * 0.18, 3, 3);
                    ctx.fillRect(4, -h * 0.18, 3, 3);
                }
                break;

            case 'raincat':
                // Gray/White Cat with blue raincoat
                ctx.fillStyle = '#94a3b8';
                ctx.beginPath();
                ctx.ellipse(0, 0, w * 0.45, h * 0.4, 0, 0, Math.PI * 2);
                ctx.fill();
                // Cat ears
                ctx.beginPath();
                ctx.moveTo(-w * 0.3, -h * 0.3);
                ctx.lineTo(-w * 0.4, -h * 0.6);
                ctx.lineTo(-w * 0.15, -h * 0.35);
                ctx.closePath();
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(w * 0.15, -h * 0.35);
                ctx.lineTo(w * 0.4, -h * 0.6);
                ctx.lineTo(w * 0.3, -h * 0.3);
                ctx.closePath();
                ctx.fill();

                // Blue rain cape
                ctx.fillStyle = '#38bdf8';
                ctx.beginPath();
                ctx.arc(0, 0, w * 0.4, 0.2, Math.PI - 0.2);
                ctx.fill();

                // Eyes
                if (!this.isBlinking) {
                    ctx.fillStyle = '#22c55e';
                    ctx.beginPath();
                    ctx.arc(4, -4, 3.5, 0, Math.PI * 2);
                    ctx.fill();
                }
                break;

            case 'axolotl':
                // Pink Axolotl with glowing gills
                ctx.fillStyle = '#f472b6';
                ctx.beginPath();
                ctx.ellipse(0, 2, w * 0.44, h * 0.38, 0, 0, Math.PI * 2);
                ctx.fill();

                // Axolotl External Gills
                ctx.fillStyle = '#fb7185';
                for (let g = -1; g <= 1; g++) {
                    ctx.beginPath();
                    ctx.ellipse(-w * 0.45, g * 8, 8, 4, -0.3, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(w * 0.45, g * 8, 8, 4, 0.3, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Eyes
                if (!this.isBlinking) {
                    ctx.fillStyle = '#0f172a';
                    ctx.beginPath();
                    ctx.arc(-w * 0.18, -2, 3.5, 0, Math.PI * 2);
                    ctx.arc(w * 0.18, -2, 3.5, 0, Math.PI * 2);
                    ctx.fill();
                }
                // Cute mouth
                ctx.strokeStyle = '#e11d48';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(0, 4, 5, 0.2, Math.PI - 0.2);
                ctx.stroke();
                break;

            case 'cyber_rover':
                // Neon Cyber Rover Bot
                ctx.fillStyle = '#0ea5e9';
                ctx.beginPath();
                ctx.roundRect(-w * 0.38, -h * 0.35, w * 0.76, h * 0.7, 8);
                ctx.fill();

                // Cyber Visor
                ctx.fillStyle = '#38bdf8';
                ctx.beginPath();
                ctx.roundRect(-w * 0.28, -h * 0.15, w * 0.56, 12, 4);
                ctx.fill();

                // Glowing Antenna
                ctx.strokeStyle = '#0284c7';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(0, -h * 0.35);
                ctx.lineTo(0, -h * 0.55);
                ctx.stroke();
                ctx.fillStyle = '#22d3ee';
                ctx.beginPath();
                ctx.arc(0, -h * 0.55, 4, 0, Math.PI * 2);
                ctx.fill();
                break;

            case 'storm_mage':
                // Mystic Storm Mage Hood
                ctx.fillStyle = '#7c3aed';
                ctx.beginPath();
                ctx.moveTo(0, -h * 0.65);
                ctx.lineTo(-w * 0.45, h * 0.35);
                ctx.lineTo(w * 0.45, h * 0.35);
                ctx.closePath();
                ctx.fill();

                // Glowing Magic Eyes
                ctx.fillStyle = '#c084fc';
                ctx.beginPath();
                ctx.arc(-6, -2, 3, 0, Math.PI * 2);
                ctx.arc(6, -2, 3, 0, Math.PI * 2);
                ctx.fill();
                break;

            case 'froggy':
            default:
                // Emerald Green Froggy
                ctx.fillStyle = '#22c55e';
                ctx.beginPath();
                ctx.ellipse(0, 2, w * 0.45, h * 0.38, 0, 0, Math.PI * 2);
                ctx.fill();

                // Big Froggy Eye Bumps
                ctx.beginPath();
                ctx.arc(-w * 0.2, -h * 0.3, 7, 0, Math.PI * 2);
                ctx.arc(w * 0.2, -h * 0.3, 7, 0, Math.PI * 2);
                ctx.fill();

                // Eyes & pupils
                if (!this.isBlinking) {
                    ctx.fillStyle = '#ffffff';
                    ctx.beginPath();
                    ctx.arc(-w * 0.2, -h * 0.3, 5, 0, Math.PI * 2);
                    ctx.arc(w * 0.2, -h * 0.3, 5, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.fillStyle = '#0f172a';
                    ctx.beginPath();
                    ctx.arc(-w * 0.18 + 1, -h * 0.3, 2.5, 0, Math.PI * 2);
                    ctx.arc(w * 0.22 + 1, -h * 0.3, 2.5, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    ctx.strokeStyle = '#15803d';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(-w * 0.3, -h * 0.3);
                    ctx.lineTo(-w * 0.1, -h * 0.3);
                    ctx.moveTo(w * 0.1, -h * 0.3);
                    ctx.lineTo(w * 0.3, -h * 0.3);
                    ctx.stroke();
                }

                // Cheeks
                ctx.fillStyle = '#f472b6';
                ctx.beginPath();
                ctx.arc(-w * 0.3, 2, 3, 0, Math.PI * 2);
                ctx.arc(w * 0.3, 2, 3, 0, Math.PI * 2);
                ctx.fill();

                // Froggy Smile
                ctx.strokeStyle = '#15803d';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(0, 4, 6, 0.1, Math.PI - 0.1);
                ctx.stroke();
                break;
        }
    }
}

/**
 * Puddle Class & 8 Specific Puddle Types
 */
class BasePuddle {
    constructor(x, y, width = 110, height = 24, type = 'water') {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = type;
        this.bounceMult = 1.15;
        this.friction = 0.85;
        this.surface = new FluidPuddleSurface(x, y, width, height, 26, type);
    }

    checkPlayerOverlap(player) {
        return (
            player.x + player.width > this.x &&
            player.x < this.x + this.width &&
            player.y + player.height >= this.y - 6 &&
            player.y + player.height <= this.y + this.height + 8 &&
            player.vy >= 0
        );
    }

    onPlayerInteract(player, particleSys) {
        const wasAirborne = !player.isGrounded;
        const relativeX = (player.x + player.width / 2) - this.x;

        if (wasAirborne) {
            player.y = this.y - player.height + 2;
            player.isGrounded = true;
            player.groundPuddle = this;

            const impactForce = Math.min(18, Math.max(4, player.vy * 1.8));
            this.surface.splash(relativeX, impactForce);

            this.triggerSplashEffects(player, particleSys, impactForce);
            player.vy = 0;
            player.addCombo(50);
        } else {
            player.isGrounded = true;
            player.groundPuddle = this;
        }
    }

    onPlayerJump(player, particleSys, chargeRatio) {
        const relativeX = (player.x + player.width / 2) - this.x;
        this.surface.splash(relativeX, -8 - chargeRatio * 10);
    }

    triggerSplashEffects(player, particleSys, force) {
        window.sound.playSplash(force > 10 ? 1.4 : 0.9);
        if (particleSys) {
            particleSys.emitSplash(player.x + player.width / 2, this.y, Math.floor(force * 2.5), '#60a5fa', force * 0.1);
        }
    }

    update() {
        this.surface.update();
    }

    draw(ctx, camera) {
        this.surface.draw(ctx, camera);
    }
}

class MudPuddle extends BasePuddle {
    constructor(x, y, width, height) {
        super(x, y, width, height, 'mud');
        this.bounceMult = 0.75;
        this.friction = 0.55; // Sticky!
    }

    triggerSplashEffects(player, particleSys, force) {
        window.sound.playSplash(0.6);
        if (particleSys) {
            particleSys.emitMudSplat(player.x + player.width / 2, this.y, 14);
        }
    }
}

class SpringPuddle extends BasePuddle {
    constructor(x, y, width, height) {
        super(x, y, width, height, 'spring');
        this.bounceMult = 1.75; // Super High Launch!
        this.friction = 0.88;
    }

    triggerSplashEffects(player, particleSys, force) {
        window.sound.playBounce(true);
        if (particleSys) {
            particleSys.emitSplash(player.x + player.width / 2, this.y, 25, '#f472b6', 1.8);
            particleSys.emitSparks(player.x + player.width / 2, this.y, 10, '#ec4899');
        }
    }
}

class IcePuddle extends BasePuddle {
    constructor(x, y, width, height) {
        super(x, y, width, height, 'ice');
        this.bounceMult = 1.1;
        this.friction = 0.985; // Hyper slippery!
    }

    triggerSplashEffects(player, particleSys, force) {
        window.sound.playSplash(0.8);
        if (particleSys) {
            particleSys.emitSparks(player.x + player.width / 2, this.y, 15, '#e0f2fe');
        }
    }
}

class BubblePuddle extends BasePuddle {
    constructor(x, y, width, height) {
        super(x, y, width, height, 'bubble');
        this.bounceMult = 1.0;
        this.friction = 0.8;
    }

    onPlayerInteract(player, particleSys) {
        super.onPlayerInteract(player, particleSys);
        if (!player.isBubbleFloating) {
            player.isBubbleFloating = true;
            player.bubbleTimer = 240; // 4 seconds float
            player.vy = -3.5;
            window.sound.playBubblePop();
            if (particleSys) {
                particleSys.emitBubbles(player.x + player.width / 2, this.y, 16);
            }
        }
    }
}

class AcidPuddle extends BasePuddle {
    constructor(x, y, width, height) {
        super(x, y, width, height, 'acid');
        this.bounceMult = 1.0;
    }

    onPlayerInteract(player, particleSys) {
        super.onPlayerInteract(player, particleSys);
        player.takeDamage(1, player.facing * -1, particleSys);
    }
}

class PortalPuddle extends BasePuddle {
    constructor(x, y, width, height, targetPuddle = null) {
        super(x, y, width, height, 'portal');
        this.targetPuddle = targetPuddle;
        this.cooldown = 0;
    }

    onPlayerInteract(player, particleSys) {
        super.onPlayerInteract(player, particleSys);
        if (this.targetPuddle && this.cooldown <= 0) {
            this.cooldown = 60;
            this.targetPuddle.cooldown = 60;

            player.x = this.targetPuddle.x + this.targetPuddle.width / 2 - player.width / 2;
            player.y = this.targetPuddle.y - player.height - 4;
            player.vy = -8.0;

            window.sound.playPortal();
            if (particleSys) {
                particleSys.emitSparks(this.x + this.width / 2, this.y, 20, '#c084fc');
                particleSys.emitSparks(this.targetPuddle.x + this.targetPuddle.width / 2, this.targetPuddle.y, 20, '#c084fc');
            }
        }
    }

    update() {
        super.update();
        if (this.cooldown > 0) this.cooldown--;
    }
}

class ElectricPuddle extends BasePuddle {
    constructor(x, y, width, height) {
        super(x, y, width, height, 'electric');
        this.shockTimer = 0;
        this.isShocking = false;
    }

    update() {
        super.update();
        this.shockTimer = (this.shockTimer + 1) % 180;
        this.isShocking = this.shockTimer > 120; // Active for 1 second every 3 seconds
    }

    onPlayerInteract(player, particleSys) {
        super.onPlayerInteract(player, particleSys);
        if (this.isShocking) {
            player.takeDamage(1, player.facing * -1, particleSys);
        } else {
            // Speed charge
            player.vx *= 1.35;
        }
    }

    draw(ctx, camera) {
        super.draw(ctx, camera);
        if (this.isShocking) {
            ctx.save();
            ctx.strokeStyle = '#fde047';
            ctx.lineWidth = 2.0;
            ctx.beginPath();
            ctx.moveTo(this.x - camera.x + 10, this.y - camera.y);
            ctx.lineTo(this.x - camera.x + this.width / 2, this.y - camera.y - 12 + Math.random() * 6);
            ctx.lineTo(this.x - camera.x + this.width - 10, this.y - camera.y);
            ctx.stroke();
            ctx.restore();
        }
    }
}

/**
 * Collectibles: Coins, Pearls, Stars, Hearts, Powerups
 */
class Collectible {
    constructor(x, y, type = 'coin') {
        this.x = x;
        this.y = y;
        this.type = type; // 'coin', 'pearl', 'star', 'heart', 'shield', 'spring_boots', 'magnet'
        this.width = 22;
        this.height = 22;
        this.collected = false;
        this.floatOffset = Math.random() * Math.PI * 2;
    }

    update(player, particleSys) {
        this.floatOffset += 0.06;

        // Magnet attraction
        if (player.magnetActive && (this.type === 'coin' || this.type === 'pearl')) {
            const dist = MathUtils.dist(this.x, this.y, player.x + player.width / 2, player.y + player.height / 2);
            if (dist < 180) {
                const angle = Math.atan2(player.y + player.height / 2 - this.y, player.x + player.width / 2 - this.x);
                this.x += Math.cos(angle) * 6;
                this.y += Math.sin(angle) * 6;
            }
        }

        // Collection check
        if (!this.collected && MathUtils.checkAABB(player, this)) {
            this.collected = true;
            this.onCollect(player, particleSys);
        }
    }

    onCollect(player, particleSys) {
        this.collected = true;
        switch (this.type) {
            case 'pearl':
                player.coins += 5;
                player.score += 250;
                window.sound.playGem();
                if (particleSys) particleSys.emitSparks(this.x, this.y, 16, '#38bdf8');
                break;
            case 'star':
                player.score += 1000;
                window.sound.playGem();
                if (particleSys) particleSys.emitSparks(this.x, this.y, 25, '#fbbf24');
                break;
            case 'heart':
                player.heal(1);
                if (particleSys) particleSys.emitSparks(this.x, this.y, 15, '#f43f5e');
                break;
            case 'shield':
            case 'spring_boots':
            case 'magnet':
                player.applyPowerup(this.type, 600);
                if (particleSys) particleSys.emitSparks(this.x, this.y, 20, '#a855f7');
                break;
            case 'coin':
            default:
                player.coins += 1;
                player.score += 50;
                window.sound.playCoin();
                if (particleSys) particleSys.emitSparks(this.x, this.y, 10, '#facc15');
                break;
        }
    }

    draw(ctx, camera) {
        if (this.collected) return;
        const renderX = this.x - camera.x;
        const renderY = this.y - camera.y + Math.sin(this.floatOffset) * 4;

        ctx.save();
        ctx.translate(renderX + this.width / 2, renderY + this.height / 2);

        if (this.type === 'coin') {
            ctx.fillStyle = '#facc15';
            ctx.beginPath();
            ctx.arc(0, 0, 9, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#eab308';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        } else if (this.type === 'pearl') {
            ctx.fillStyle = '#38bdf8';
            ctx.beginPath();
            ctx.arc(0, 0, 11, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#bae6fd';
            ctx.lineWidth = 2;
            ctx.stroke();
        } else if (this.type === 'star') {
            ctx.fillStyle = '#f59e0b';
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                ctx.lineTo(Math.cos((18 + i * 72) * 0.01745) * 12, -Math.sin((18 + i * 72) * 0.01745) * 12);
                ctx.lineTo(Math.cos((54 + i * 72) * 0.01745) * 6, -Math.sin((54 + i * 72) * 0.01745) * 6);
            }
            ctx.closePath();
            ctx.fill();
        } else if (this.type === 'heart') {
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(-4, -4, 5, Math.PI, 0);
            ctx.arc(4, -4, 5, Math.PI, 0);
            ctx.lineTo(0, 8);
            ctx.closePath();
            ctx.fill();
        } else {
            // Powerup bubble icon
            ctx.fillStyle = '#9333ea';
            ctx.beginPath();
            ctx.arc(0, 0, 12, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#d8b4fe';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        ctx.restore();
    }
}

/**
 * Hazards & Enemies
 */
class RainSnail {
    constructor(x, y, range = 120) {
        this.startX = x;
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 20;
        this.range = range;
        this.speed = 0.8;
        this.dir = 1;
        this.isDead = false;
    }

    update() {
        if (this.isDead) return;
        this.x += this.speed * this.dir;
        if (this.x > this.startX + this.range) this.dir = -1;
        if (this.x < this.startX) this.dir = 1;
    }

    onCollide(player, particleSys) {
        if (this.isDead) return;
        // If player stomps or lands on top
        if (player.vy > 0 && player.y + player.height - player.vy <= this.y + 10) {
            this.isDead = true;
            player.vy = -7.5;
            player.addCombo(150);
            window.sound.playClick();
            if (particleSys) particleSys.emitMudSplat(this.x + this.width / 2, this.y, 15);
        } else {
            player.takeDamage(1, this.dir, particleSys);
        }
    }

    draw(ctx, camera) {
        if (this.isDead) return;
        const renderX = this.x - camera.x;
        const renderY = this.y - camera.y;

        ctx.save();
        ctx.fillStyle = '#64748b';
        // Snail Shell
        ctx.beginPath();
        ctx.arc(renderX + 18, renderY + 8, 10, 0, Math.PI * 2);
        ctx.fill();
        // Snail Body
        ctx.fillStyle = '#a3e635';
        ctx.beginPath();
        ctx.ellipse(renderX + 14, renderY + 14, 14, 6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

class StormBeetle {
    constructor(x, y, range = 160) {
        this.startX = x;
        this.x = x;
        this.y = y;
        this.width = 36;
        this.height = 24;
        this.range = range;
        this.speed = 2.2;
        this.dir = -1;
        this.isDead = false;
    }

    update() {
        if (this.isDead) return;
        this.x += this.speed * this.dir;
        if (this.x > this.startX + this.range) this.dir = -1;
        if (this.x < this.startX) this.dir = 1;
    }

    onCollide(player, particleSys) {
        if (this.isDead) return;
        if (player.vy > 0 && player.y + player.height - player.vy <= this.y + 12) {
            this.isDead = true;
            player.vy = -8.0;
            player.addCombo(200);
            window.sound.playBounce(false);
            if (particleSys) particleSys.emitSparks(this.x + this.width / 2, this.y, 16, '#38bdf8');
        } else {
            player.takeDamage(1, this.dir, particleSys);
        }
    }

    draw(ctx, camera) {
        if (this.isDead) return;
        const renderX = this.x - camera.x;
        const renderY = this.y - camera.y;

        ctx.save();
        ctx.fillStyle = '#0284c7';
        ctx.beginPath();
        ctx.ellipse(renderX + 18, renderY + 12, 16, 10, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#e0f2fe';
        ctx.fillRect(renderX + (this.dir === 1 ? 26 : 4), renderY + 6, 4, 4);
        ctx.restore();
    }
}

class ZapCloud {
    constructor(x, y, range = 140) {
        this.startX = x;
        this.x = x;
        this.y = y;
        this.width = 44;
        this.height = 26;
        this.range = range;
        this.speed = 1.0;
        this.dir = 1;
        this.zapTimer = 0;
        this.isZapping = false;
    }

    update() {
        this.x += this.speed * this.dir;
        if (this.x > this.startX + this.range) this.dir = -1;
        if (this.x < this.startX) this.dir = 1;

        this.zapTimer = (this.zapTimer + 1) % 150;
        this.isZapping = this.zapTimer > 100;
    }

    onCollide(player, particleSys) {
        player.takeDamage(1, this.dir, particleSys);
    }

    draw(ctx, camera) {
        const renderX = this.x - camera.x;
        const renderY = this.y - camera.y;

        ctx.save();
        // Cloud body
        ctx.fillStyle = this.isZapping ? '#334155' : '#64748b';
        ctx.beginPath();
        ctx.arc(renderX + 14, renderY + 16, 12, 0, Math.PI * 2);
        ctx.arc(renderX + 30, renderY + 16, 12, 0, Math.PI * 2);
        ctx.arc(renderX + 22, renderY + 8, 14, 0, Math.PI * 2);
        ctx.fill();

        // Lightning bolt beam downwards
        if (this.isZapping) {
            ctx.strokeStyle = '#facc15';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(renderX + 22, renderY + 22);
            ctx.lineTo(renderX + 18, renderY + 45);
            ctx.lineTo(renderX + 26, renderY + 65);
            ctx.lineTo(renderX + 22, renderY + 95);
            ctx.stroke();
        }

        ctx.restore();
    }
}

/**
 * Boss AI Engine: King Nimbus (World 1 Boss)
 */
class KingNimbusBoss {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 120;
        this.height = 70;
        this.health = 8;
        this.maxHealth = 8;
        this.phase = 1;
        this.timer = 0;
        this.isDead = false;
        this.invulnerable = 0;
        this.lightningBolts = [];
    }

    update(player, particleSys) {
        if (this.isDead) return;
        this.timer++;
        if (this.invulnerable > 0) this.invulnerable--;

        // Hover sine movement
        this.x += Math.sin(this.timer * 0.03) * 2.5;
        this.y = 120 + Math.cos(this.timer * 0.04) * 20;

        // Attack cycle
        if (this.timer % 120 === 0) {
            // Summon lightning bolt
            this.lightningBolts.push({
                x: player.x + player.width / 2,
                y: this.y + 40,
                targetY: 480,
                life: 35
            });
            window.sound.playThunder();
        }

        // Update bolts
        for (let i = this.lightningBolts.length - 1; i >= 0; i--) {
            const bolt = this.lightningBolts[i];
            bolt.life--;
            if (bolt.life === 15) {
                // Damage check
                if (Math.abs(player.x + player.width / 2 - bolt.x) < 30) {
                    player.takeDamage(1, 0, particleSys);
                }
                if (particleSys) particleSys.emitSparks(bolt.x, bolt.targetY, 25, '#facc15');
            }
            if (bolt.life <= 0) {
                this.lightningBolts.splice(i, 1);
            }
        }

        // Collision with player jump
        if (this.invulnerable <= 0 && MathUtils.checkAABB(player, this)) {
            if (player.vy > 0 && player.y < this.y + 20) {
                this.health--;
                this.invulnerable = 40;
                player.vy = -12;
                window.sound.playBounce(true);
                if (particleSys) particleSys.emitSparks(this.x + this.width / 2, this.y + this.height / 2, 30, '#38bdf8');
                if (this.health <= 0) {
                    this.isDead = true;
                    window.sound.playLevelClear();
                }
            } else {
                player.takeDamage(1, player.x < this.x ? -1 : 1, particleSys);
            }
        }
    }

    draw(ctx, camera) {
        if (this.isDead) return;
        const renderX = this.x - camera.x;
        const renderY = this.y - camera.y;

        ctx.save();
        ctx.fillStyle = this.health < 4 ? '#1e293b' : '#475569';
        // Big cloud arcs
        ctx.beginPath();
        ctx.arc(renderX + 30, renderY + 40, 28, 0, Math.PI * 2);
        ctx.arc(renderX + 60, renderY + 30, 34, 0, Math.PI * 2);
        ctx.arc(renderX + 90, renderY + 40, 28, 0, Math.PI * 2);
        ctx.fill();

        // Crown
        ctx.fillStyle = '#facc15';
        ctx.beginPath();
        ctx.moveTo(renderX + 45, renderY + 5);
        ctx.lineTo(renderX + 50, renderY - 12);
        ctx.lineTo(renderX + 60, renderY - 4);
        ctx.lineTo(renderX + 70, renderY - 12);
        ctx.lineTo(renderX + 75, renderY + 5);
        ctx.closePath();
        ctx.fill();

        // Glowing Red Eyes
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(renderX + 45, renderY + 35, 5, 0, Math.PI * 2);
        ctx.arc(renderX + 75, renderY + 35, 5, 0, Math.PI * 2);
        ctx.fill();

        // Draw lightning bolts
        for (const bolt of this.lightningBolts) {
            ctx.strokeStyle = bolt.life < 16 ? '#facc15' : 'rgba(250, 204, 21, 0.3)';
            ctx.lineWidth = bolt.life < 16 ? 4 : 1.5;
            ctx.beginPath();
            ctx.moveTo(bolt.x - camera.x, bolt.y - camera.y);
            ctx.lineTo(bolt.x - camera.x, bolt.targetY - camera.y);
            ctx.stroke();
        }

        ctx.restore();
    }
}

// Export classes
window.Player = Player;
window.BasePuddle = BasePuddle;
window.MudPuddle = MudPuddle;
window.SpringPuddle = SpringPuddle;
window.IcePuddle = IcePuddle;
window.BubblePuddle = BubblePuddle;
window.AcidPuddle = AcidPuddle;
window.PortalPuddle = PortalPuddle;
window.ElectricPuddle = ElectricPuddle;
window.Collectible = Collectible;
window.RainSnail = RainSnail;
window.StormBeetle = StormBeetle;
window.ZapCloud = ZapCloud;
window.KingNimbusBoss = KingNimbusBoss;

if (typeof global !== 'undefined') {
    global.Player = Player;
    global.BasePuddle = BasePuddle;
    global.MudPuddle = MudPuddle;
    global.SpringPuddle = SpringPuddle;
    global.IcePuddle = IcePuddle;
    global.BubblePuddle = BubblePuddle;
    global.AcidPuddle = AcidPuddle;
    global.PortalPuddle = PortalPuddle;
    global.ElectricPuddle = ElectricPuddle;
    global.Collectible = Collectible;
    global.RainSnail = RainSnail;
    global.StormBeetle = StormBeetle;
    global.ZapCloud = ZapCloud;
    global.KingNimbusBoss = KingNimbusBoss;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Player, BasePuddle, MudPuddle, SpringPuddle, IcePuddle, BubblePuddle,
        AcidPuddle, PortalPuddle, ElectricPuddle, Collectible, RainSnail, StormBeetle,
        ZapCloud, KingNimbusBoss
    };
}
