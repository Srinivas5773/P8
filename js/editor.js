/**
 * Puddle Jumper - Custom Level Editor & Sandbox
 * Interactive canvas level builder, tile/puddle placer, live sandbox tester, and JSON export/import system.
 */

class LevelEditor {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.active = false;
        this.selectedTool = 'platform'; // 'platform', 'water_puddle', 'spring_puddle', 'mud_puddle', 'ice_puddle', 'bubble_puddle', 'acid_puddle', 'portal_puddle', 'electric_puddle', 'coin', 'pearl', 'star', 'snail', 'beetle', 'zapcloud', 'spawn', 'goal', 'eraser'
        this.gridSize = 30;
        this.showGrid = true;

        this.camera = { x: 0, y: 0 };
        this.isPanning = false;
        this.panStart = { x: 0, y: 0 };

        // Level construction state
        this.levelData = {
            name: 'My Custom Stage',
            biomeIndex: 0,
            width: 2400,
            spawn: { x: 100, y: 380 },
            goal: { x: 2200, y: 380 },
            platforms: [
                { x: 0, y: 440, width: 350, height: 100 },
                { x: 2050, y: 440, width: 350, height: 100 }
            ],
            puddles: [
                { type: 'water', x: 120, y: 434, width: 120, height: 20 }
            ],
            collectibles: [
                { type: 'star', x: 1100, y: 250 }
            ],
            hazards: []
        };

        // Drag placement
        this.isPlacing = false;
        this.placeStart = { x: 0, y: 0 };
        this.currentMouse = { x: 0, y: 0 };
    }

    start() {
        this.active = true;
        this.camera.x = 0;
        this.camera.y = 0;
    }

    stop() {
        this.active = false;
    }

    snapToGrid(val) {
        return Math.round(val / this.gridSize) * this.gridSize;
    }

    handleMouseDown(e) {
        if (!this.active) return;
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        if (e.button === 1 || e.shiftKey) {
            // Pan camera
            this.isPanning = true;
            this.panStart.x = mouseX + this.camera.x;
            this.panStart.y = mouseY + this.camera.y;
            return;
        }

        if (e.button === 0) {
            // Left click - tool action
            const worldX = mouseX + this.camera.x;
            const worldY = mouseY + this.camera.y;

            if (this.selectedTool === 'eraser') {
                this.eraseAt(worldX, worldY);
                return;
            }

            if (this.selectedTool === 'spawn') {
                this.levelData.spawn = { x: this.snapToGrid(worldX), y: this.snapToGrid(worldY) };
                return;
            }

            if (this.selectedTool === 'goal') {
                this.levelData.goal = { x: this.snapToGrid(worldX), y: this.snapToGrid(worldY) };
                return;
            }

            if (['coin', 'pearl', 'star'].includes(this.selectedTool)) {
                this.levelData.collectibles.push({
                    type: this.selectedTool,
                    x: this.snapToGrid(worldX),
                    y: this.snapToGrid(worldY)
                });
                return;
            }

            if (['snail', 'beetle', 'zapcloud'].includes(this.selectedTool)) {
                this.levelData.hazards.push({
                    type: this.selectedTool,
                    x: this.snapToGrid(worldX),
                    y: this.snapToGrid(worldY),
                    range: 120
                });
                return;
            }

            // Drag to size platforms or puddles
            this.isPlacing = true;
            this.placeStart = { x: this.snapToGrid(worldX), y: this.snapToGrid(worldY) };
            this.currentMouse = { x: worldX, y: worldY };
        }
    }

    handleMouseMove(e) {
        if (!this.active) return;
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        if (this.isPanning) {
            this.camera.x = this.panStart.x - mouseX;
            this.camera.y = this.panStart.y - mouseY;
            this.camera.x = Math.max(0, Math.min(this.levelData.width - this.canvas.width, this.camera.x));
            return;
        }

        if (this.isPlacing) {
            this.currentMouse = { x: mouseX + this.camera.x, y: mouseY + this.camera.y };
        }
    }

    handleMouseUp(e) {
        if (!this.active) return;
        if (this.isPanning) {
            this.isPanning = false;
        }

        if (this.isPlacing) {
            this.isPlacing = false;
            const endX = this.snapToGrid(this.currentMouse.x);
            const endY = this.snapToGrid(this.currentMouse.y);

            const x = Math.min(this.placeStart.x, endX);
            const y = Math.min(this.placeStart.y, endY);
            const width = Math.max(60, Math.abs(endX - this.placeStart.x));
            const height = this.selectedTool.includes('puddle') ? 20 : Math.max(30, Math.abs(endY - this.placeStart.y));

            if (this.selectedTool === 'platform') {
                this.levelData.platforms.push({ x, y, width, height });
            } else if (this.selectedTool.endsWith('_puddle')) {
                const type = this.selectedTool.replace('_puddle', '');
                this.levelData.puddles.push({ type, x, y, width, height: 20 });
            }
        }
    }

    eraseAt(worldX, worldY) {
        // Erase platform
        this.levelData.platforms = this.levelData.platforms.filter(p =>
            !(worldX >= p.x && worldX <= p.x + p.width && worldY >= p.y && worldY <= p.y + p.height)
        );

        // Erase puddle
        this.levelData.puddles = this.levelData.puddles.filter(p =>
            !(worldX >= p.x && worldX <= p.x + p.width && worldY >= p.y && worldY <= p.y + p.height)
        );

        // Erase collectible
        this.levelData.collectibles = this.levelData.collectibles.filter(c =>
            Math.hypot(c.x - worldX, c.y - worldY) > 25
        );

        // Erase hazard
        this.levelData.hazards = this.levelData.hazards.filter(h =>
            Math.hypot(h.x - worldX, h.y - worldY) > 30
        );
    }

    exportJSON() {
        return JSON.stringify(this.levelData, null, 2);
    }

    importJSON(jsonString) {
        try {
            const parsed = JSON.parse(jsonString);
            if (parsed.platforms && parsed.puddles) {
                this.levelData = parsed;
                return true;
            }
        } catch (e) {
            console.error('Invalid level JSON', e);
        }
        return false;
    }

    getPlayableLevel() {
        const biome = LevelManager.biomes[this.levelData.biomeIndex || 0];
        const instantiatedHazards = (this.levelData.hazards || []).map(h => {
            if (h.type === 'beetle') return new StormBeetle(h.x, h.y, h.range || 120);
            if (h.type === 'zapcloud') return new ZapCloud(h.x, h.y, h.range || 120);
            return new RainSnail(h.x, h.y, h.range || 120);
        });

        return LevelManager.parseLevelData({
            ...this.levelData,
            biome: biome,
            hazards: instantiatedHazards
        });
    }

    draw() {
        if (!this.active) return;
        const ctx = this.ctx;
        const camera = this.camera;

        ctx.save();
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw Grid
        if (this.showGrid) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
            ctx.lineWidth = 1;
            const startX = -(camera.x % this.gridSize);
            const startY = -(camera.y % this.gridSize);

            for (let x = startX; x < this.canvas.width; x += this.gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, this.canvas.height);
                ctx.stroke();
            }

            for (let y = startY; y < this.canvas.height; y += this.gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(this.canvas.width, y);
                ctx.stroke();
            }
        }

        // Draw Platforms
        ctx.fillStyle = '#475569';
        for (const p of this.levelData.platforms) {
            ctx.fillRect(p.x - camera.x, p.y - camera.y, p.width, p.height);
            ctx.strokeStyle = '#94a3b8';
            ctx.strokeRect(p.x - camera.x, p.y - camera.y, p.width, p.height);
        }

        // Draw Puddles
        for (const p of this.levelData.puddles) {
            ctx.fillStyle = p.type === 'mud' ? '#78350f' : (p.type === 'spring' ? '#ec4899' : '#38bdf8');
            ctx.fillRect(p.x - camera.x, p.y - camera.y, p.width, p.height);
            ctx.strokeStyle = '#ffffff';
            ctx.strokeRect(p.x - camera.x, p.y - camera.y, p.width, p.height);
        }

        // Draw Collectibles
        for (const c of this.levelData.collectibles) {
            ctx.fillStyle = c.type === 'star' ? '#facc15' : (c.type === 'pearl' ? '#38bdf8' : '#eab308');
            ctx.beginPath();
            ctx.arc(c.x - camera.x, c.y - camera.y, 8, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw Hazards
        ctx.fillStyle = '#ef4444';
        for (const h of this.levelData.hazards) {
            ctx.fillRect(h.x - camera.x - 10, h.y - camera.y - 10, 20, 20);
        }

        // Draw Spawn & Goal
        ctx.fillStyle = '#22c55e';
        ctx.fillRect(this.levelData.spawn.x - camera.x, this.levelData.spawn.y - camera.y, 24, 24);
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(this.levelData.goal.x - camera.x, this.levelData.goal.y - camera.y, 24, 36);

        // Draw Drag Preview
        if (this.isPlacing) {
            const endX = this.snapToGrid(this.currentMouse.x);
            const endY = this.snapToGrid(this.currentMouse.y);
            const x = Math.min(this.placeStart.x, endX) - camera.x;
            const y = Math.min(this.placeStart.y, endY) - camera.y;
            const w = Math.max(60, Math.abs(endX - this.placeStart.x));
            const h = this.selectedTool.includes('puddle') ? 20 : Math.max(30, Math.abs(endY - this.placeStart.y));

            ctx.strokeStyle = '#38bdf8';
            ctx.setLineDash([4, 4]);
            ctx.strokeRect(x, y, w, h);
            ctx.setLineDash([]);
        }

        ctx.restore();
    }
}

window.LevelEditor = LevelEditor;
