/**
 * Puddle Jumper - Dynamic 2D Lighting & Atmospheric Weather Effects
 * Handles ambient daylight/night transitions, storm flashes, light halos, and specular water reflections.
 */

class LightingEngine {
    constructor(viewWidth = 960, viewHeight = 540) {
        this.viewWidth = viewWidth;
        this.viewHeight = viewHeight;
        this.ambientLight = 1.0; // 1.0 = full bright, 0.2 = dark storm
        this.flashIntensity = 0;
        this.flashDecay = 0.08;
        this.lights = [];
        this.weatherTurbulence = 0;
    }

    resize(width, height) {
        this.viewWidth = width;
        this.viewHeight = height;
    }

    triggerLightningFlash(intensity = 1.0) {
        this.flashIntensity = Math.min(1.0, Math.max(0.2, intensity));
    }

    addLightSource(x, y, radius = 80, color = 'rgba(255, 255, 255, 0.4)') {
        this.lights.push({ x, y, radius, color });
    }

    clearLights() {
        this.lights = [];
    }

    update(biome) {
        // Flash decay
        if (this.flashIntensity > 0) {
            this.flashIntensity = Math.max(0, this.flashIntensity - this.flashDecay);
        }

        // Biome-specific ambient lighting
        if (biome && biome.id === 5) {
            // Storm citadel is dark
            this.ambientLight = 0.35 + Math.sin(Date.now() * 0.002) * 0.05;
        } else if (biome && biome.id === 3) {
            // Cyber deluge is night
            this.ambientLight = 0.45;
        } else {
            this.ambientLight = 0.9;
        }

        this.weatherTurbulence = Math.sin(Date.now() * 0.005) * 0.5 + 0.5;
    }

    draw(ctx, camera, player) {
        if (this.ambientLight >= 0.85 && this.flashIntensity <= 0) {
            return; // Skip drawing darkness overlay if fully lit
        }

        ctx.save();
        
        // Draw Dark Ambient Screen Overlay with composite 'destination-out' for lights
        if (this.ambientLight < 0.85) {
            const darkAlpha = (1.0 - this.ambientLight) * (1.0 - this.flashIntensity);
            ctx.fillStyle = `rgba(10, 15, 30, ${darkAlpha.toFixed(2)})`;
            ctx.fillRect(0, 0, this.viewWidth, this.viewHeight);
        }

        // Draw Player Light Halo
        if (player && this.ambientLight < 0.75) {
            const px = player.x + player.width / 2 - camera.x;
            const py = player.y + player.height / 2 - camera.y;
            const haloGrad = ctx.createRadialGradient(px, py, 10, px, py, 140);
            haloGrad.addColorStop(0, 'rgba(56, 189, 248, 0.25)');
            haloGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.08)');
            haloGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');

            ctx.fillStyle = haloGrad;
            ctx.beginPath();
            ctx.arc(px, py, 140, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw Lightning Flash Overlay
        if (this.flashIntensity > 0) {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.flashIntensity.toFixed(2)})`;
            ctx.fillRect(0, 0, this.viewWidth, this.viewHeight);
        }

        ctx.restore();
    }
}

// Exports
if (typeof window !== 'undefined') {
    window.LightingEngine = LightingEngine;
}
if (typeof global !== 'undefined') {
    global.LightingEngine = LightingEngine;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LightingEngine;
}
