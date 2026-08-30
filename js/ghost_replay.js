/**
 * Puddle Jumper - Ghost Replay & Speedrun Recording System
 * Captures frame-by-frame player transform states to render competitive translucent ghosts
 * during Time Attack and Adventure speedruns.
 */

class ReplayRecorder {
    constructor() {
        this.frames = [];
        this.isRecording = false;
        this.levelId = 1;
    }

    start(levelId = 1) {
        this.frames = [];
        this.isRecording = true;
        this.levelId = levelId;
    }

    recordFrame(player) {
        if (!this.isRecording || !player) return;
        this.frames.push({
            x: Math.round(player.x * 10) / 10,
            y: Math.round(player.y * 10) / 10,
            facing: player.facing,
            squashX: Math.round(player.squashX * 100) / 100,
            squashY: Math.round(player.squashY * 100) / 100,
            isGliding: Boolean(player.isGliding),
            skin: player.skin || 'froggy'
        });
    }

    stop() {
        this.isRecording = false;
        return this.frames;
    }

    exportJSON() {
        return JSON.stringify({
            levelId: this.levelId,
            totalFrames: this.frames.length,
            data: this.frames
        });
    }

    importJSON(jsonString) {
        try {
            const parsed = JSON.parse(jsonString);
            if (parsed && Array.isArray(parsed.data)) {
                this.levelId = parsed.levelId || 1;
                this.frames = parsed.data;
                return true;
            }
        } catch (e) {
            return false;
        }
        return false;
    }
}

class GhostPlayer {
    constructor(frames = []) {
        this.frames = frames;
        this.currentFrameIndex = 0;
        this.width = 36;
        this.height = 36;
        this.isFinished = false;
    }

    reset() {
        this.currentFrameIndex = 0;
        this.isFinished = false;
    }

    update() {
        if (this.currentFrameIndex < this.frames.length - 1) {
            this.currentFrameIndex++;
        } else {
            this.isFinished = true;
        }
    }

    getCurrentState() {
        return this.frames[this.currentFrameIndex] || null;
    }

    draw(ctx, camera) {
        const state = this.getCurrentState();
        if (!state) return;

        const renderX = state.x - camera.x;
        const renderY = state.y - camera.y;

        ctx.save();
        ctx.globalAlpha = 0.4;
        ctx.translate(renderX + this.width / 2, renderY + this.height / 2);
        ctx.scale(state.facing * (state.squashX || 1), state.squashY || 1);

        // Holographic Ghost tint
        ctx.fillStyle = '#67e8f9';
        ctx.beginPath();
        ctx.ellipse(0, 2, this.width * 0.45, this.height * 0.38, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#a5f3fc';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.restore();
    }
}

// Exports
if (typeof window !== 'undefined') {
    window.ReplayRecorder = ReplayRecorder;
    window.GhostPlayer = GhostPlayer;
}
if (typeof global !== 'undefined') {
    global.ReplayRecorder = ReplayRecorder;
    global.GhostPlayer = GhostPlayer;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ReplayRecorder, GhostPlayer };
}
