const LightingEngine = require('../js/lighting.js');

describe('Lighting & Atmospheric Effects Engine', () => {
    let lighting;

    beforeEach(() => {
        lighting = new LightingEngine(960, 540);
    });

    test('initializes with default dimensions and full ambient light', () => {
        expect(lighting.viewWidth).toBe(960);
        expect(lighting.viewHeight).toBe(540);
        expect(lighting.ambientLight).toBe(1.0);
        expect(lighting.flashIntensity).toBe(0);
    });

    test('triggerLightningFlash sets intensity within valid clamped range', () => {
        lighting.triggerLightningFlash(0.85);
        expect(lighting.flashIntensity).toBe(0.85);

        lighting.triggerLightningFlash(5.0);
        expect(lighting.flashIntensity).toBe(1.0);
    });

    test('update decays lightning flash over time', () => {
        lighting.triggerLightningFlash(0.5);
        lighting.update({ id: 1 });
        expect(lighting.flashIntensity).toBeLessThan(0.5);
    });

    test('update adjusts ambient light based on storm biomes', () => {
        lighting.update({ id: 5 }); // Storm Citadel
        expect(lighting.ambientLight).toBeLessThan(0.5);

        lighting.update({ id: 1 }); // Sunny Showers
        expect(lighting.ambientLight).toBe(0.9);
    });

    test('resize updates view boundaries', () => {
        lighting.resize(1280, 720);
        expect(lighting.viewWidth).toBe(1280);
        expect(lighting.viewHeight).toBe(720);
    });
});
