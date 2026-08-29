/**
 * Unit Tests for Level Manager and Procedural Chunk Generation
 */

describe('Level Manager & Procedural Generator', () => {
    let LevelManager;

    beforeAll(() => {
        global.window = {};
        require('../js/physics.js');
        require('../js/entities.js');
        require('../js/levels.js');

        LevelManager = window.LevelManager;
    });

    test('LevelManager loads adventure levels correctly', () => {
        const level1 = LevelManager.getAdventureLevel(1);
        expect(level1.id).toBe(1);
        expect(level1.platforms.length).toBeGreaterThan(0);
        expect(level1.puddles.length).toBeGreaterThan(0);
        expect(level1.spawn).toBeDefined();
        expect(level1.goal).toBeDefined();
    });

    test('Stage 10 generates a Boss encounter level layout', () => {
        const bossLevel = LevelManager.getAdventureLevel(10);
        expect(bossLevel.isBoss).toBe(true);
        expect(bossLevel.name).toContain('Boss Finale');
    });

    test('LevelManager generates procedural endless chunks', () => {
        const chunk = LevelManager.generateEndlessChunk(0, 0);
        expect(chunk.platforms.length).toBeGreaterThan(0);
        expect(chunk.puddles.length).toBeGreaterThan(0);
        expect(chunk.nextStartX).toBeGreaterThan(0);
    });

    test('LevelManager.parseLevelData converts plain data to active entity instances', () => {
        const rawLevel = LevelManager.getAdventureLevel(1);
        const parsed = LevelManager.parseLevelData(rawLevel);

        expect(parsed.puddles[0]).toBeInstanceOf(window.BasePuddle);
        expect(parsed.collectibles[0]).toBeInstanceOf(window.Collectible);
    });
});
