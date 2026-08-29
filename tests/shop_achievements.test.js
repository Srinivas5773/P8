/**
 * Unit Tests for Shop and Achievements Systems
 */

describe('Shop & Achievements State Managers', () => {
    let shop, achievements;

    beforeAll(() => {
        global.localStorage = {
            store: {},
            getItem(key) { return this.store[key] || null; },
            setItem(key, val) { this.store[key] = val.toString(); },
            clear() { this.store = {}; }
        };

        global.window = {
            sound: {
                playClick: jest.fn(),
                playPowerup: jest.fn(),
                playGem: jest.fn()
            }
        };

        require('../js/shop.js');
        require('../js/achievements.js');

        shop = window.shop;
        achievements = window.achievements;
    });

    test('ShopManager initializes with default unlocks', () => {
        expect(shop.unlockedSkins).toContain('froggy');
        expect(shop.selectedSkin).toBe('froggy');
        expect(shop.unlockedUmbrellas).toContain('classic_red');
    });

    test('ShopManager adds coins and equips skin', () => {
        shop.addCoins(100);
        expect(shop.coins).toBeGreaterThanOrEqual(100);

        const buySuccess = shop.buySkin('duckie');
        expect(buySuccess).toBe(true);
        expect(shop.unlockedSkins).toContain('duckie');
        expect(shop.selectedSkin).toBe('duckie');
    });

    test('AchievementManager records stats and triggers unlocks', () => {
        achievements.recordStat('totalSplashes', 10);
        expect(achievements.stats.totalSplashes).toBeGreaterThanOrEqual(10);

        const firstSplashAch = achievements.achievements.find(a => a.id === 'first_splash');
        expect(firstSplashAch.unlocked).toBe(true);
    });
});
