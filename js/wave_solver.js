/**
 * 2D Shallow Water Wave Equation Solver
 * Simulates fluid ripple dispersion, damping, and boundary reflections.
 */

class WaveSolver {
  constructor(gridWidth = 64, damping = 0.985) {
    this.width = gridWidth;
    this.damping = damping;
    this.current = new Float32Array(gridWidth * gridWidth);
    this.previous = new Float32Array(gridWidth * gridWidth);
  }

  addDisturbance(x, y, strength = 10.0) {
    const idx = y * this.width + x;
    if (idx >= 0 && idx < this.current.length) {
      this.current[idx] += strength;
    }
  }

  stepPhysics() {
    const w = this.width;
    for (let y = 1; y < w - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        const idx = y * w + x;
        const neighbors = this.current[idx - 1] + this.current[idx + 1] +
                          this.current[idx - w] + this.current[idx + w];
        const nextVal = (neighbors / 2 - this.previous[idx]) * this.damping;
        this.previous[idx] = this.current[idx];
        this.current[idx] = nextVal;
      }
    }
  }

  getWaveHeight(x, y) {
    const idx = y * this.width + x;
    return this.current[idx] || 0;
  }
}

module.exports = WaveSolver;
