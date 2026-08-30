const { SeededRandom, DailyChallengeSystem } = require('../js/daily_challenge.js');

describe('Daily Challenge & Seeded Random System', () => {
    test('SeededRandom produces deterministic reproducible sequences', () => {
        const rng1 = new SeededRandom(20260830);
        const rng2 = new SeededRandom(20260830);

        expect(rng1.next()).toBe(rng2.next());
        expect(rng1.range(10, 50)).toBe(rng2.range(10, 50));
        expect(rng1.choice(['a', 'b', 'c'])).toBe(rng2.choice(['a', 'b', 'c']));
    });

    test('DailyChallengeSystem generates valid challenge level for fixed date', () => {
        const system = new DailyChallengeSystem();
        const testDate = new Date(2026, 7, 30); // Aug 30, 2026
        const challenge = system.getDailyChallenge(testDate);

        expect(challenge).toBeDefined();
        expect(challenge.date).toBe(20260830);
        expect(challenge.platforms.length).toBeGreaterThan(5);
        expect(challenge.puddles.length).toBeGreaterThan(5);
        expect(challenge.modifier).toBeDefined();
        expect(challenge.modifier.name).toBeDefined();
    });

    test('same date seed generates exact identical level layout', () => {
        const system = new DailyChallengeSystem();
        const testDate = new Date(2026, 7, 30);
        const c1 = system.getDailyChallenge(testDate);
        const c2 = system.getDailyChallenge(testDate);

        expect(c1.platforms.length).toBe(c2.platforms.length);
        expect(c1.puddles[0].x).toBe(c2.puddles[0].x);
        expect(c1.modifier.id).toBe(c2.modifier.id);
    });
});
