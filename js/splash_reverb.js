/**
 * Adaptive Audio Reverb and Dynamic Frequency Filter
 * Synthesizes dynamic acoustic reverberation based on puddle depth.
 */

class SplashReverbProcessor {
  constructor() {
    this.decayTimes = { shallow: 0.15, medium: 0.45, deep: 1.1 };
  }

  getReverbParameters(puddleDepth) {
    let type = 'shallow';
    if (puddleDepth > 20) type = 'deep';
    else if (puddleDepth > 8) type = 'medium';

    return {
      type,
      decay: this.decayTimes[type],
      wetGain: type === 'deep' ? 0.8 : 0.4,
      lowpassFreq: type === 'deep' ? 1200 : 3500
    };
  }
}

module.exports = new SplashReverbProcessor();
