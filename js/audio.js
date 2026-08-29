/**
 * Puddle Jumper - Web Audio Synthesizer Engine
 * Pure procedural sound effects, ambient rain soundscape, and generative background music.
 * Zero external audio assets required.
 */

class SoundEngine {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
        this.sfxVolume = 0.8;
        this.musicVolume = 0.4;
        this.ambientVolume = 0.5;
        this.initialized = false;

        // Node references
        this.masterGain = null;
        this.sfxGain = null;
        this.musicGain = null;
        this.ambientGain = null;

        // Ambient generators
        this.rainSource = null;
        this.rainGain = null;
        this.windSource = null;
        this.windGain = null;
        this.windFilter = null;

        // Generative Music Engine
        this.musicTimer = null;
        this.musicStep = 0;
        this.musicScale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25]; // C major pentatonic / diatonic notes
        this.chordRoots = [130.81, 164.81, 174.61, 196.00]; // C3, E3, F3, G3
        this.currentChord = 0;
        this.isMusicPlaying = false;
    }

    init() {
        if (this.initialized) return;
        try {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContextClass();

            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
            this.masterGain.connect(this.ctx.destination);

            this.sfxGain = this.ctx.createGain();
            this.sfxGain.gain.setValueAtTime(this.sfxVolume, this.ctx.currentTime);
            this.sfxGain.connect(this.masterGain);

            this.musicGain = this.ctx.createGain();
            this.musicGain.gain.setValueAtTime(this.musicVolume, this.ctx.currentTime);
            this.musicGain.connect(this.masterGain);

            this.ambientGain = this.ctx.createGain();
            this.ambientGain.gain.setValueAtTime(this.ambientVolume, this.ctx.currentTime);
            this.ambientGain.connect(this.masterGain);

            this.initAmbientRain();
            this.initialized = true;
        } catch (e) {
            console.warn('Web Audio API not supported or blocked:', e);
        }
    }

    resume() {
        if (!this.ctx) this.init();
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    setMuted(muted) {
        this.isMuted = muted;
        if (this.masterGain && this.ctx) {
            this.masterGain.gain.setTargetAtTime(muted ? 0 : 1.0, this.ctx.currentTime, 0.05);
        }
    }

    setSFXVolume(val) {
        this.sfxVolume = Math.max(0, Math.min(1, val));
        if (this.sfxGain && this.ctx) {
            this.sfxGain.gain.setTargetAtTime(this.sfxVolume, this.ctx.currentTime, 0.05);
        }
    }

    setMusicVolume(val) {
        this.musicVolume = Math.max(0, Math.min(1, val));
        if (this.musicGain && this.ctx) {
            this.musicGain.gain.setTargetAtTime(this.musicVolume, this.ctx.currentTime, 0.05);
        }
    }

    setAmbientVolume(val) {
        this.ambientVolume = Math.max(0, Math.min(1, val));
        if (this.ambientGain && this.ctx) {
            this.ambientGain.gain.setTargetAtTime(this.ambientVolume, this.ctx.currentTime, 0.05);
        }
    }

    // --- Procedural Ambient Rain & Wind Generators ---
    initAmbientRain() {
        if (!this.ctx) return;
        const bufferSize = this.ctx.sampleRate * 2;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }

        // Rain Noise Node
        this.rainSource = this.ctx.createBufferSource();
        this.rainSource.buffer = noiseBuffer;
        this.rainSource.loop = true;

        const rainFilter = this.ctx.createBiquadFilter();
        rainFilter.type = 'lowpass';
        rainFilter.frequency.setValueAtTime(1400, this.ctx.currentTime);

        const rainHighPass = this.ctx.createBiquadFilter();
        rainHighPass.type = 'highpass';
        rainHighPass.frequency.setValueAtTime(250, this.ctx.currentTime);

        this.rainGain = this.ctx.createGain();
        this.rainGain.gain.setValueAtTime(0.15, this.ctx.currentTime);

        this.rainSource.connect(rainFilter);
        rainFilter.connect(rainHighPass);
        rainHighPass.connect(this.rainGain);
        this.rainGain.connect(this.ambientGain);

        this.rainSource.start(0);

        // Wind Noise Node
        this.windSource = this.ctx.createBufferSource();
        this.windSource.buffer = noiseBuffer;
        this.windSource.loop = true;

        this.windFilter = this.ctx.createBiquadFilter();
        this.windFilter.type = 'bandpass';
        this.windFilter.frequency.setValueAtTime(320, this.ctx.currentTime);
        this.windFilter.Q.setValueAtTime(3.0, this.ctx.currentTime);

        this.windGain = this.ctx.createGain();
        this.windGain.gain.setValueAtTime(0.05, this.ctx.currentTime);

        this.windSource.connect(this.windFilter);
        this.windFilter.connect(this.windGain);
        this.windGain.connect(this.ambientGain);

        this.windSource.start(0);
    }

    setWeatherIntensity(intensity = 0.5, windPower = 0.2) {
        if (!this.ctx || !this.rainGain || !this.windGain) return;
        const targetRain = Math.max(0.02, intensity * 0.4);
        const targetWind = Math.max(0.02, windPower * 0.35);
        this.rainGain.gain.setTargetAtTime(targetRain, this.ctx.currentTime, 0.2);
        this.windGain.gain.setTargetAtTime(targetWind, this.ctx.currentTime, 0.2);
        if (this.windFilter) {
            this.windFilter.frequency.setTargetAtTime(200 + windPower * 400, this.ctx.currentTime, 0.3);
        }
    }

    // --- Sound Effects Synthesis ---
    playJump(chargeFactor = 0.5) {
        if (!this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        const startFreq = 180 + chargeFactor * 120;
        const endFreq = 420 + chargeFactor * 300;
        const duration = 0.16 + chargeFactor * 0.08;

        osc.frequency.setValueAtTime(startFreq, t);
        osc.frequency.exponentialRampToValueAtTime(endFreq, t + duration);

        gain.gain.setValueAtTime(0.35, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(t);
        osc.stop(t + duration);
    }

    playBounce(superBounce = false) {
        if (!this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        const startFreq = superBounce ? 220 : 160;
        const peakFreq = superBounce ? 750 : 480;
        const endFreq = superBounce ? 350 : 220;
        const dur = superBounce ? 0.28 : 0.18;

        osc.frequency.setValueAtTime(startFreq, t);
        osc.frequency.exponentialRampToValueAtTime(peakFreq, t + dur * 0.4);
        osc.frequency.exponentialRampToValueAtTime(endFreq, t + dur);

        gain.gain.setValueAtTime(0.4, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(t);
        osc.stop(t + dur);
    }

    playSplash(size = 1.0) {
        if (!this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;
        const dur = 0.18 * size;

        // White noise splash burst
        const bufferSize = Math.floor(this.ctx.sampleRate * dur);
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1100 + Math.random() * 400, t);
        filter.Q.setValueAtTime(2.2, t);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.45 * Math.min(1.5, size), t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

        // Water droplet bubble pop
        const bubble = this.ctx.createOscillator();
        const bGain = this.ctx.createGain();
        bubble.type = 'sine';
        bubble.frequency.setValueAtTime(450 + Math.random() * 200, t);
        bubble.frequency.exponentialRampToValueAtTime(1100 + Math.random() * 400, t + dur * 0.7);

        bGain.gain.setValueAtTime(0.25 * size, t);
        bGain.gain.exponentialRampToValueAtTime(0.001, t + dur);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.sfxGain);

        bubble.connect(bGain);
        bGain.connect(this.sfxGain);

        noise.start(t);
        noise.stop(t + dur);
        bubble.start(t);
        bubble.stop(t + dur);
    }

    playCoin() {
        if (!this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(987.77, t); // B5
        osc.frequency.setValueAtTime(1318.51, t + 0.08); // E6

        gain.gain.setValueAtTime(0.3, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(t);
        osc.stop(t + 0.3);
    }

    playGem() {
        if (!this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, t + i * 0.05);

            gain.gain.setValueAtTime(0.22, t + i * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.05 + 0.25);

            osc.connect(gain);
            gain.connect(this.sfxGain);

            osc.start(t + i * 0.05);
            osc.stop(t + i * 0.05 + 0.25);
        });
    }

    playPowerup() {
        if (!this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;
        const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
        notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, t + idx * 0.06);

            gain.gain.setValueAtTime(0.3, t + idx * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.06 + 0.2);

            osc.connect(gain);
            gain.connect(this.sfxGain);

            osc.start(t + idx * 0.06);
            osc.stop(t + idx * 0.06 + 0.2);
        });
    }

    playBubblePop() {
        if (!this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, t);
        osc.frequency.exponentialRampToValueAtTime(1200, t + 0.09);

        gain.gain.setValueAtTime(0.35, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(t);
        osc.stop(t + 0.09);
    }

    playPortal() {
        if (!this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(800, t);
        osc.frequency.exponentialRampToValueAtTime(200, t + 0.25);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2000, t);
        filter.frequency.exponentialRampToValueAtTime(400, t + 0.25);

        gain.gain.setValueAtTime(0.3, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(t);
        osc.stop(t + 0.25);
    }

    playHurt() {
        if (!this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(280, t);
        osc.frequency.exponentialRampToValueAtTime(80, t + 0.22);

        gain.gain.setValueAtTime(0.4, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(t);
        osc.stop(t + 0.22);
    }

    playThunder() {
        if (!this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;
        const dur = 1.4;

        // Sub bass crack
        const sub = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        sub.type = 'sawtooth';
        sub.frequency.setValueAtTime(90, t);
        sub.frequency.exponentialRampToValueAtTime(30, t + dur);

        subGain.gain.setValueAtTime(0.45, t);
        subGain.gain.exponentialRampToValueAtTime(0.001, t + dur);

        // Lowpass rumble noise
        const bufferSize = Math.floor(this.ctx.sampleRate * dur);
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 1.8);
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(350, t);

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.5, t);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, t + dur);

        sub.connect(subGain);
        subGain.connect(this.sfxGain);
        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(this.sfxGain);

        sub.start(t);
        sub.stop(t + dur);
        noise.start(t);
        noise.stop(t + dur);
    }

    playLevelClear() {
        if (!this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;
        const chord = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
        chord.forEach((note, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(note, t + idx * 0.07);

            gain.gain.setValueAtTime(0.28, t + idx * 0.07);
            gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.07 + 0.6);

            osc.connect(gain);
            gain.connect(this.sfxGain);

            osc.start(t + idx * 0.07);
            osc.stop(t + idx * 0.07 + 0.6);
        });
    }

    playClick() {
        if (!this.ctx || this.isMuted) return;
        this.resume();
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, t);
        osc.frequency.exponentialRampToValueAtTime(400, t + 0.04);

        gain.gain.setValueAtTime(0.2, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.start(t);
        osc.stop(t + 0.04);
    }

    // --- Procedural Generative Background Music ---
    startMusic() {
        if (this.isMusicPlaying) return;
        this.isMusicPlaying = true;
        this.resume();
        this.tickMusic();
    }

    stopMusic() {
        this.isMusicPlaying = false;
        if (this.musicTimer) {
            clearTimeout(this.musicTimer);
            this.musicTimer = null;
        }
    }

    tickMusic() {
        if (!this.isMusicPlaying || !this.ctx) return;
        if (!this.isMuted) {
            const t = this.ctx.currentTime;
            // Play a soft bell/kalimba-like melodic note
            if (Math.random() > 0.2) {
                const noteIndex = Math.floor(Math.random() * this.musicScale.length);
                const freq = this.musicScale[noteIndex];
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = Math.random() > 0.5 ? 'sine' : 'triangle';
                osc.frequency.setValueAtTime(freq, t);

                gain.gain.setValueAtTime(0.18, t);
                gain.gain.exponentialRampToValueAtTime(0.001, t + 0.8 + Math.random() * 0.6);

                osc.connect(gain);
                gain.connect(this.musicGain);

                osc.start(t);
                osc.stop(t + 1.5);
            }

            // Warm sub bass chord every 4 steps
            if (this.musicStep % 4 === 0) {
                const rootFreq = this.chordRoots[this.currentChord % this.chordRoots.length];
                this.currentChord++;
                const bassOsc = this.ctx.createOscillator();
                const bassGain = this.ctx.createGain();
                bassOsc.type = 'sine';
                bassOsc.frequency.setValueAtTime(rootFreq, t);

                bassGain.gain.setValueAtTime(0.15, t);
                bassGain.gain.exponentialRampToValueAtTime(0.001, t + 2.0);

                bassOsc.connect(bassGain);
                bassGain.connect(this.musicGain);

                bassOsc.start(t);
                bassOsc.stop(t + 2.0);
            }
            this.musicStep++;
        }

        const nextInterval = (0.35 + Math.random() * 0.25) * 1000;
        this.musicTimer = setTimeout(() => this.tickMusic(), nextInterval);
    }
}

// Global sound manager instance
window.sound = new SoundEngine();
