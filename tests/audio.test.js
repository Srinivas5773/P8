/**
 * Unit Tests for Web Audio Synthesizer State Management
 */

describe('Sound Engine & Synthesizer State', () => {
    let sound;

    beforeAll(() => {
        global.window = {};
        require('../js/audio.js');
        sound = window.sound;
    });

    test('SoundEngine initializes with default volumes', () => {
        expect(sound.sfxVolume).toBe(0.8);
        expect(sound.musicVolume).toBe(0.4);
        expect(sound.ambientVolume).toBe(0.5);
        expect(sound.isMuted).toBe(false);
    });

    test('setMuted toggles mute state', () => {
        sound.setMuted(true);
        expect(sound.isMuted).toBe(true);
        sound.setMuted(false);
        expect(sound.isMuted).toBe(false);
    });

    test('setSFXVolume clamps volume between 0 and 1', () => {
        sound.setSFXVolume(1.5);
        expect(sound.sfxVolume).toBe(1.0);

        sound.setSFXVolume(-0.5);
        expect(sound.sfxVolume).toBe(0.0);

        sound.setSFXVolume(0.7);
        expect(sound.sfxVolume).toBe(0.7);
    });
});
