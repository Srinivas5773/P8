/**
 * Puddle Jumper - Daily Challenge & Seeded Modifier System
 * Generates deterministic daily stages from calendar date seeds with unique gameplay modifiers.
 */

class SeededRandom {
    constructor(seed) {
        this.seed = seed % 2147483647;
        if (this.seed <= 0) this.seed += 2147483646;
    }

    next() {
        this.seed = (this.seed * 16807) % 2147483647;
        return (this.seed - 1) / 2147483646;
    }

    range(min, max) {
        return min + this.next() * (max - min);
    }

    choice(array) {
        if (!array || array.length === 0) return null;
        return array[Math.floor(this.next() * array.length)];
    }
}

class DailyChallengeSystem {
    constructor() {
        this.modifiers = [
            { id: 'low_gravity', name: 'Moon Gravity', gravity: 0.24, desc: 'Float gracefully through high leaps' },
            { id: 'super_bounce', name: 'Rubber World', bounceMult: 1.8, desc: 'Massive height on every puddle impact' },
            { id: 'ice_storm', name: 'Glacial Chill', friction: 0.985, desc: 'Ultra-low friction sliding surface' },
            { id: 'acid_rain', name: 'Toxic Tempest', hazardCount: 8, desc: 'Acid puddles and fast storm beetles' },
            { id: 'wind_gusts', name: 'Gale Force', wind: 0.85, desc: 'Intense crosswinds pushing leaps' }
        ];
    }

    getDateSeed(date = new Date()) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return parseInt(`${y}${m}${d}`, 10);
    }

    getDailyChallenge(date = new Date()) {
        const seed = this.getDateSeed(date);
        const rng = new SeededRandom(seed);
        const modifier = this.modifiers[Math.floor(rng.next() * this.modifiers.length)];
        const biomeIndex = Math.floor(rng.next() * 5);

        const platforms = [];
        const puddles = [];
        const collectibles = [];
        const hazards = [];
        const levelWidth = 2600;
        const groundY = 460;

        let currentX = 0;
        platforms.push({ x: 0, y: groundY, width: 300, height: 100 });
        puddles.push({ type: 'water', x: 80, y: groundY - 6, width: 120, height: 20 });
        currentX = 320;

        while (currentX < levelWidth - 300) {
            const gap = rng.range(80, 160);
            const platWidth = rng.range(120, 240);
            const elevation = groundY - Math.floor(rng.next() * 3) * 50;

            platforms.push({ x: currentX, y: elevation, width: platWidth, height: 80 });

            const puddleType = rng.choice(['water', 'spring', 'mud', 'bubble', 'electric', 'ice']);
            puddles.push({
                type: puddleType,
                x: currentX + 15,
                y: elevation - 6,
                width: platWidth - 30,
                height: 20
            });

            if (rng.next() > 0.4) {
                collectibles.push({
                    type: rng.next() > 0.7 ? 'pearl' : 'coin',
                    x: currentX + platWidth / 2,
                    y: elevation - 50
                });
            }

            currentX += platWidth + gap;
        }

        platforms.push({ x: levelWidth - 300, y: groundY, width: 300, height: 100 });
        puddles.push({ type: 'water', x: levelWidth - 250, y: groundY - 6, width: 140, height: 20 });

        return {
            id: 'daily_' + seed,
            date: seed,
            name: `Daily Challenge - ${modifier.name}`,
            modifier: modifier,
            biomeId: biomeIndex + 1,
            width: levelWidth,
            spawn: { x: 80, y: groundY - 60 },
            goal: { x: levelWidth - 120, y: groundY - 80 },
            platforms,
            puddles,
            collectibles,
            hazards
        };
    }
}

// Exports
if (typeof window !== 'undefined') {
    window.SeededRandom = SeededRandom;
    window.DailyChallengeSystem = DailyChallengeSystem;
    window.dailyChallenge = new DailyChallengeSystem();
}
if (typeof global !== 'undefined') {
    global.SeededRandom = SeededRandom;
    global.DailyChallengeSystem = DailyChallengeSystem;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SeededRandom, DailyChallengeSystem };
}
