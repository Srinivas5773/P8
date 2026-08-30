/**
 * Procedural Biome and Level Grid Generator
 * Constructs themed platform tiles and puddle hazards for stage creation.
 */

class BiomeGenerator {
  constructor() {
    this.biomes = {
      rainforest: { friction: 0.92, puddleFrequency: 0.4, themeColor: '#2ecc71' },
      urbanStreets: { friction: 0.98, puddleFrequency: 0.25, themeColor: '#95a5a6' },
      stormyMountain: { friction: 0.85, puddleFrequency: 0.55, themeColor: '#34495e' }
    };
  }

  generateStageTiles(biomeName, length = 20) {
    const biome = this.biomes[biomeName] || this.biomes.rainforest;
    const tiles = [];

    for (let i = 0; i < length; i++) {
      const isPuddle = Math.random() < biome.puddleFrequency;
      tiles.push({
        index: i,
        type: isPuddle ? 'puddle' : 'platform',
        friction: biome.friction,
        depth: isPuddle ? Math.floor(Math.random() * 25) + 5 : 0
      });
    }

    return { biome: biomeName, totalTiles: length, tiles };
  }
}

module.exports = new BiomeGenerator();
