/**
 * Puddle Jumper - Fluid Physics & Particle Engine
 * Advanced 1D/2D spring-mass water ripple solver, splash particle system, rain simulator, and trajectory projector.
 */

class WaterColumn {
    constructor(x, targetHeight, k = 0.035, d = 0.025) {
        this.x = x;
        this.targetHeight = targetHeight;
        this.height = targetHeight;
        this.speed = 0;
        this.k = k; // Spring constant
        this.d = d; // Damping
    }

    update() {
        const displacement = this.targetHeight - this.height;
        this.speed += this.k * displacement - this.speed * this.d;
        this.height += this.speed;
    }
}

class FluidPuddleSurface {
    constructor(x, y, width, height, numColumns = 30, colorTheme = 'water') {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.numColumns = numColumns;
        this.colorTheme = colorTheme; // 'water', 'mud', 'spring', 'ice', 'acid', 'bubble', 'portal', 'electric'
        this.columns = [];
        this.spread = 0.22; // Wave propagation factor

        const columnWidth = this.width / (this.numColumns - 1);
        for (let i = 0; i < this.numColumns; i++) {
            this.columns.push(new WaterColumn(this.x + i * columnWidth, this.y, 0.04, 0.03));
        }
    }

    splash(relativeX, force) {
        // Find closest column
        const colWidth = this.width / (this.numColumns - 1);
        const index = Math.max(0, Math.min(this.numColumns - 1, Math.floor(relativeX / colWidth)));
        if (this.columns[index]) {
            this.columns[index].speed = force;
            // Distribute force to adjacent columns
            if (index > 0) this.columns[index - 1].speed += force * 0.5;
            if (index < this.numColumns - 1) this.columns[index + 1].speed += force * 0.5;
        }
    }

    update() {
        // Update column springs
        for (let i = 0; i < this.numColumns; i++) {
            this.columns[i].update();
        }

        // Propagate waves to left and right across columns
        const leftDeltas = new Array(this.numColumns).fill(0);
        const rightDeltas = new Array(this.numColumns).fill(0);

        // Perform 8 wave passes for smooth dispersion
        for (let pass = 0; pass < 8; pass++) {
            for (let i = 0; i < this.numColumns; i++) {
                if (i > 0) {
                    leftDeltas[i] = this.spread * (this.columns[i].height - this.columns[i - 1].height);
                    this.columns[i - 1].speed += leftDeltas[i];
                }
                if (i < this.numColumns - 1) {
                    rightDeltas[i] = this.spread * (this.columns[i].height - this.columns[i + 1].height);
                    this.columns[i + 1].speed += rightDeltas[i];
                }
            }

            for (let i = 0; i < this.numColumns; i++) {
                if (i > 0) this.columns[i - 1].height += leftDeltas[i];
                if (i < this.numColumns - 1) this.columns[i + 1].height += rightDeltas[i];
            }
        }
    }

    draw(ctx, camera) {
        const renderX = this.x - camera.x;
        const renderY = this.y - camera.y;

        ctx.save();

        // Color palettes based on puddle type
        let fillGrad = ctx.createLinearGradient(renderX, renderY, renderX, renderY + this.height);
        let surfaceStroke = '#60a5fa';

        switch (this.colorTheme) {
            case 'mud':
                fillGrad.addColorStop(0, 'rgba(120, 75, 40, 0.85)');
                fillGrad.addColorStop(1, 'rgba(65, 38, 18, 0.95)');
                surfaceStroke = '#a27b5c';
                break;
            case 'spring':
                fillGrad.addColorStop(0, 'rgba(244, 114, 182, 0.75)');
                fillGrad.addColorStop(1, 'rgba(219, 39, 119, 0.9)');
                surfaceStroke = '#f472b6';
                break;
            case 'ice':
                fillGrad.addColorStop(0, 'rgba(186, 230, 253, 0.85)');
                fillGrad.addColorStop(1, 'rgba(125, 211, 252, 0.95)');
                surfaceStroke = '#e0f2fe';
                break;
            case 'acid':
                fillGrad.addColorStop(0, 'rgba(74, 222, 128, 0.8)');
                fillGrad.addColorStop(1, 'rgba(22, 163, 74, 0.95)');
                surfaceStroke = '#86efac';
                break;
            case 'bubble':
                fillGrad.addColorStop(0, 'rgba(167, 139, 250, 0.75)');
                fillGrad.addColorStop(1, 'rgba(139, 92, 246, 0.9)');
                surfaceStroke = '#c4b5fd';
                break;
            case 'portal':
                fillGrad.addColorStop(0, 'rgba(192, 132, 252, 0.85)');
                fillGrad.addColorStop(1, 'rgba(126, 34, 206, 0.95)');
                surfaceStroke = '#e879f9';
                break;
            case 'electric':
                fillGrad.addColorStop(0, 'rgba(250, 204, 21, 0.85)');
                fillGrad.addColorStop(1, 'rgba(202, 138, 4, 0.95)');
                surfaceStroke = '#fef08a';
                break;
            case 'water':
            default:
                fillGrad.addColorStop(0, 'rgba(56, 189, 248, 0.75)');
                fillGrad.addColorStop(1, 'rgba(3, 105, 161, 0.9)');
                surfaceStroke = '#93c5fd';
                break;
        }

        // Draw body of water
        ctx.beginPath();
        ctx.moveTo(this.columns[0].x - camera.x, this.columns[0].height - camera.y);

        for (let i = 1; i < this.numColumns; i++) {
            const prevCol = this.columns[i - 1];
            const currentCol = this.columns[i];
            const midX = (prevCol.x + currentCol.x) / 2 - camera.x;
            const midY = (prevCol.height + currentCol.height) / 2 - camera.y;
            ctx.quadraticCurveTo(prevCol.x - camera.x, prevCol.height - camera.y, midX, midY);
        }

        const lastCol = this.columns[this.numColumns - 1];
        ctx.lineTo(lastCol.x - camera.x, lastCol.height - camera.y);
        ctx.lineTo(lastCol.x - camera.x, renderY + this.height);
        ctx.lineTo(renderX, renderY + this.height);
        ctx.closePath();

        ctx.fillStyle = fillGrad;
        ctx.fill();

        // Draw surface ripple line with highlight glow
        ctx.beginPath();
        ctx.moveTo(this.columns[0].x - camera.x, this.columns[0].height - camera.y);
        for (let i = 1; i < this.numColumns; i++) {
            const prevCol = this.columns[i - 1];
            const currentCol = this.columns[i];
            const midX = (prevCol.x + currentCol.x) / 2 - camera.x;
            const midY = (prevCol.height + currentCol.height) / 2 - camera.y;
            ctx.quadraticCurveTo(prevCol.x - camera.x, prevCol.height - camera.y, midX, midY);
        }
        ctx.lineTo(lastCol.x - camera.x, lastCol.height - camera.y);

        ctx.strokeStyle = surfaceStroke;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.restore();
    }
}

class ParticleSystem {
    constructor() {
        this.particles = [];
        this.rainDrops = [];
        this.ripples = [];
        this.maxParticles = 600;
        this.maxRain = 400;
        this.windX = 0.5;
        this.weatherIntensity = 0.5; // 0 (clear) to 1 (monsoon)
    }

    initRain(screenWidth, screenHeight) {
        this.rainDrops = [];
        const count = Math.floor(this.maxRain * this.weatherIntensity);
        for (let i = 0; i < count; i++) {
            this.rainDrops.push({
                x: Math.random() * screenWidth * 1.5 - screenWidth * 0.25,
                y: Math.random() * screenHeight,
                speed: 12 + Math.random() * 8,
                length: 14 + Math.random() * 10,
                layer: Math.random() > 0.6 ? 2 : 1, // 1: background, 2: foreground
                opacity: 0.3 + Math.random() * 0.4
            });
        }
    }

    emitSplash(x, y, count = 25, color = '#60a5fa', speedMult = 1.0) {
        for (let i = 0; i < count; i++) {
            if (this.particles.length >= this.maxParticles) {
                this.particles.shift();
            }
            const angle = -Math.PI * (0.15 + Math.random() * 0.7); // upward arc
            const speed = (2.5 + Math.random() * 6.5) * speedMult;
            this.particles.push({
                x: x + (Math.random() - 0.5) * 16,
                y: y - 2,
                vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 1.5,
                vy: Math.sin(angle) * speed,
                gravity: 0.22,
                size: 2 + Math.random() * 3.5,
                color: color,
                alpha: 1.0,
                decay: 0.02 + Math.random() * 0.02,
                type: 'water'
            });
        }

        // Add expanding ground ripple
        this.ripples.push({
            x: x,
            y: y,
            radius: 2,
            maxRadius: 24 + speedMult * 12,
            color: color,
            alpha: 0.8,
            speed: 1.8 + speedMult * 0.8
        });
    }

    emitBubbles(x, y, count = 8, color = '#a78bfa') {
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: x + (Math.random() - 0.5) * 20,
                y: y + Math.random() * 10,
                vx: (Math.random() - 0.5) * 1.2,
                vy: -(1.2 + Math.random() * 2.2),
                wobblePhase: Math.random() * Math.PI * 2,
                wobbleSpeed: 0.1 + Math.random() * 0.15,
                gravity: -0.02,
                size: 3 + Math.random() * 4,
                color: color,
                alpha: 0.85,
                decay: 0.015,
                type: 'bubble'
            });
        }
    }

    emitSparks(x, y, count = 15, color = '#facc15') {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 2 + Math.random() * 5;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                gravity: 0.1,
                size: 2 + Math.random() * 3,
                color: color,
                alpha: 1.0,
                decay: 0.035,
                type: 'spark'
            });
        }
    }

    emitMudSplat(x, y, count = 16) {
        for (let i = 0; i < count; i++) {
            const angle = -Math.PI * (0.1 + Math.random() * 0.8);
            const speed = 1.5 + Math.random() * 4;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                gravity: 0.28,
                size: 3.5 + Math.random() * 4.5,
                color: Math.random() > 0.5 ? '#784b28' : '#543310',
                alpha: 0.95,
                decay: 0.018,
                type: 'mud'
            });
        }
    }

    emitPuff(x, y, count = 10, color = 'rgba(255, 255, 255, 0.6)') {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 0.5 + Math.random() * 2;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 0.5,
                gravity: -0.02,
                size: 4 + Math.random() * 6,
                color: color,
                alpha: 0.6,
                decay: 0.03,
                type: 'puff'
            });
        }
    }

    update(screenWidth, screenHeight, wind = 0.5) {
        this.windX = wind;

        // Update rain streaks
        for (let i = 0; i < this.rainDrops.length; i++) {
            const drop = this.rainDrops[i];
            drop.x += this.windX * drop.speed * 0.3;
            drop.y += drop.speed;

            if (drop.y > screenHeight + 20) {
                drop.y = -20;
                drop.x = Math.random() * screenWidth * 1.5 - screenWidth * 0.25;
            }
            if (drop.x > screenWidth * 1.3) {
                drop.x = -screenWidth * 0.2;
            } else if (drop.x < -screenWidth * 0.2) {
                drop.x = screenWidth * 1.2;
            }
        }

        // Update active particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.alpha -= p.decay;

            if (p.type === 'bubble') {
                p.wobblePhase += p.wobbleSpeed;
                p.x += Math.sin(p.wobblePhase) * 0.8;
            }

            if (p.alpha <= 0) {
                this.particles.splice(i, 1);
            }
        }

        // Update ground ripples
        for (let i = this.ripples.length - 1; i >= 0; i--) {
            const r = this.ripples[i];
            r.radius += r.speed;
            r.alpha -= 0.025;
            if (r.alpha <= 0 || r.radius >= r.maxRadius) {
                this.ripples.splice(i, 1);
            }
        }
    }

    draw(ctx, camera, layer = 'foreground') {
        ctx.save();

        // Draw ground ripples
        if (layer === 'foreground') {
            for (const r of this.ripples) {
                ctx.beginPath();
                ctx.ellipse(r.x - camera.x, r.y - camera.y, r.radius, r.radius * 0.35, 0, 0, Math.PI * 2);
                ctx.strokeStyle = r.color;
                ctx.globalAlpha = Math.max(0, r.alpha);
                ctx.lineWidth = 1.8;
                ctx.stroke();
            }
        }

        // Draw rain streaks
        const targetLayer = layer === 'foreground' ? 2 : 1;
        ctx.lineWidth = 1.2;
        for (const drop of this.rainDrops) {
            if (drop.layer === targetLayer) {
                ctx.beginPath();
                ctx.moveTo(drop.x, drop.y);
                ctx.lineTo(drop.x + this.windX * drop.length * 0.4, drop.y + drop.length);
                ctx.strokeStyle = 'rgba(219, 234, 254, ' + drop.opacity + ')';
                ctx.stroke();
            }
        }

        // Draw particles
        if (layer === 'foreground') {
            for (const p of this.particles) {
                ctx.save();
                ctx.globalAlpha = Math.max(0, p.alpha);
                ctx.fillStyle = p.color;

                if (p.type === 'bubble') {
                    ctx.beginPath();
                    ctx.arc(p.x - camera.x, p.y - camera.y, p.size, 0, Math.PI * 2);
                    ctx.strokeStyle = p.color;
                    ctx.lineWidth = 1.2;
                    ctx.stroke();
                    // Bubble highlight
                    ctx.beginPath();
                    ctx.arc(p.x - camera.x - p.size * 0.3, p.y - camera.y - p.size * 0.3, p.size * 0.25, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                    ctx.fill();
                } else if (p.type === 'spark') {
                    ctx.beginPath();
                    ctx.arc(p.x - camera.x, p.y - camera.y, p.size, 0, Math.PI * 2);
                    ctx.shadowColor = p.color;
                    ctx.shadowBlur = 6;
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    ctx.arc(p.x - camera.x, p.y - camera.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();
            }
        }

        ctx.restore();
    }
}

class TrajectoryProjector {
    constructor() {
        this.stepSize = 1.8;
        this.maxSteps = 45;
        this.animOffset = 0;
    }

    update() {
        this.animOffset = (this.animOffset + 0.35) % 12;
    }

    draw(ctx, startX, startY, vx, vy, gravity, camera, color = '#60a5fa') {
        ctx.save();
        let curX = startX;
        let curY = startY;
        let curVx = vx;
        let curVy = vy;

        ctx.beginPath();
        ctx.setLineDash([6, 6]);
        ctx.lineDashOffset = -this.animOffset;
        ctx.moveTo(curX - camera.x, curY - camera.y);

        for (let i = 0; i < this.maxSteps; i++) {
            curX += curVx;
            curY += curVy;
            curVy += gravity;
            ctx.lineTo(curX - camera.x, curY - camera.y);
        }

        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Draw target endpoint dot
        ctx.beginPath();
        ctx.arc(curX - camera.x, curY - camera.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        ctx.restore();
    }
}

// Math and Vector helper functions
const MathUtils = {
    clamp(val, min, max) {
        return Math.max(min, Math.min(max, val));
    },
    lerp(start, end, amt) {
        return (1 - amt) * start + amt * end;
    },
    checkAABB(a, b) {
        return (
            a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
        );
    },
    dist(x1, y1, x2, y2) {
        return Math.hypot(x2 - x1, y2 - y1);
    }
};

window.FluidPuddleSurface = FluidPuddleSurface;
window.ParticleSystem = ParticleSystem;
window.TrajectoryProjector = TrajectoryProjector;
window.MathUtils = MathUtils;

if (typeof global !== 'undefined') {
    global.FluidPuddleSurface = FluidPuddleSurface;
    global.ParticleSystem = ParticleSystem;
    global.TrajectoryProjector = TrajectoryProjector;
    global.MathUtils = MathUtils;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FluidPuddleSurface, ParticleSystem, TrajectoryProjector, MathUtils };
}
