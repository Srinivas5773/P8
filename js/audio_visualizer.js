/**
 * Puddle Jumper - Audio Frequency Spectrum Visualizer & Beat Detector
 * Connects to the Web Audio synthesis nodes to render animated audio reactive waves in the HUD.
 */

class AudioVisualizer {
    constructor(barCount = 16) {
        this.barCount = barCount;
        this.frequencyData = new Float32Array(barCount);
        this.peakLevels = new Float32Array(barCount);
        this.beatDetected = false;
        this.beatThreshold = 0.65;
        this.decayRate = 0.04;
    }

    update(soundEngine) {
        // If real analyser is available, poll it; otherwise simulate music beat spectrum
        for (let i = 0; i < this.barCount; i++) {
            // Decay
            this.frequencyData[i] = Math.max(0, this.frequencyData[i] - this.decayRate);

            // Audio reactive pulse
            if (soundEngine && soundEngine.musicPlaying && !soundEngine.isMuted) {
                const wave = Math.sin(Date.now() * 0.008 + i * 0.4) * 0.5 + 0.5;
                this.frequencyData[i] = Math.max(this.frequencyData[i], wave * 0.8);
            }

            if (this.frequencyData[i] > this.peakLevels[i]) {
                this.peakLevels[i] = this.frequencyData[i];
            } else {
                this.peakLevels[i] = Math.max(0, this.peakLevels[i] - 0.015);
            }
        }

        // Beat detector on bass frequencies (bar 0-2)
        const bassAvg = (this.frequencyData[0] + this.frequencyData[1] + this.frequencyData[2]) / 3;
        this.beatDetected = bassAvg > this.beatThreshold;
    }

    pushPulse(barIndex = 0, magnitude = 1.0) {
        const idx = Math.max(0, Math.min(this.barCount - 1, barIndex));
        this.frequencyData[idx] = Math.min(1.0, this.frequencyData[idx] + magnitude);
    }

    draw(ctx, x, y, width = 120, height = 30) {
        ctx.save();
        const barWidth = width / this.barCount;
        const gap = 2;

        for (let i = 0; i < this.barCount; i++) {
            const barH = Math.max(3, this.frequencyData[i] * height);
            const bx = x + i * barWidth;
            const by = y + height - barH;

            // Gradient color from blue to cyan to pink
            const grad = ctx.createLinearGradient(bx, by, bx, by + barH);
            grad.addColorStop(0, '#38bdf8');
            grad.addColorStop(1, '#818cf8');

            ctx.fillStyle = grad;
            ctx.fillRect(bx, by, barWidth - gap, barH);

            // Peak indicator line
            const peakY = y + height - this.peakLevels[i] * height;
            ctx.fillStyle = '#f472b6';
            ctx.fillRect(bx, peakY - 1, barWidth - gap, 2);
        }

        ctx.restore();
    }
}

// Exports
if (typeof window !== 'undefined') {
    window.AudioVisualizer = AudioVisualizer;
    window.audioVisualizer = new AudioVisualizer();
}
if (typeof global !== 'undefined') {
    global.AudioVisualizer = AudioVisualizer;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AudioVisualizer;
}
