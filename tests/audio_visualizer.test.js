const AudioVisualizer = require('../js/audio_visualizer.js');

describe('Audio Spectrum Visualizer & Beat Detector', () => {
    let viz;

    beforeEach(() => {
        viz = new AudioVisualizer(16);
    });

    test('initializes frequency data buffers with correct bar count', () => {
        expect(viz.barCount).toBe(16);
        expect(viz.frequencyData.length).toBe(16);
        expect(viz.peakLevels.length).toBe(16);
    });

    test('pushPulse elevates frequency level and peak indicator', () => {
        viz.pushPulse(0, 0.9);
        expect(viz.frequencyData[0]).toBeCloseTo(0.9);

        viz.update();
        expect(viz.peakLevels[0]).toBeGreaterThan(0.5);
    });

    test('update decays frequency bars over time', () => {
        viz.pushPulse(5, 0.8);
        const initial = viz.frequencyData[5];
        viz.update({ musicPlaying: false });
        expect(viz.frequencyData[5]).toBeLessThan(initial);
    });
});
