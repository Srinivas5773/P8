/**
 * Puddle Jumper - Procedural Sound Synthesizer Wave Tables & Chiptune Score Data
 */

const AudioSynthesizerPresets = {
  instrumentPatches: [
    {
      patchId: "patch_1",
      name: "Raindrop Sine Marimba v1",
      oscillatorType: "sine",
      attackTimeSeconds: 0.0100,
      decayTimeSeconds: 0.0800,
      sustainLevel: 0.10,
      releaseTimeSeconds: 0.1500,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 200,
        resonanceQ: 1.20,
        modDepthOctaves: 0.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_2",
      name: "Liquid Filter Bass v2",
      oscillatorType: "triangle",
      attackTimeSeconds: 0.0200,
      decayTimeSeconds: 0.1100,
      sustainLevel: 0.22,
      releaseTimeSeconds: 0.2000,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 285,
        resonanceQ: 2.00,
        modDepthOctaves: 1.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_3",
      name: "Thunder Sawtooth Lead v3",
      oscillatorType: "sawtooth",
      attackTimeSeconds: 0.0300,
      decayTimeSeconds: 0.1400,
      sustainLevel: 0.34,
      releaseTimeSeconds: 0.2500,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 370,
        resonanceQ: 2.80,
        modDepthOctaves: 1.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_4",
      name: "Bubble Pop Chime v4",
      oscillatorType: "square",
      attackTimeSeconds: 0.0400,
      decayTimeSeconds: 0.1700,
      sustainLevel: 0.46,
      releaseTimeSeconds: 0.3000,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 455,
        resonanceQ: 3.60,
        modDepthOctaves: 2.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_5",
      name: "Spring Boing Resonator v5",
      oscillatorType: "sine",
      attackTimeSeconds: 0.0500,
      decayTimeSeconds: 0.2000,
      sustainLevel: 0.58,
      releaseTimeSeconds: 0.3500,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 540,
        resonanceQ: 4.40,
        modDepthOctaves: 2.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_6",
      name: "Glider Wind Flute v6",
      oscillatorType: "triangle",
      attackTimeSeconds: 0.0600,
      decayTimeSeconds: 0.2300,
      sustainLevel: 0.70,
      releaseTimeSeconds: 0.4000,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 625,
        resonanceQ: 5.20,
        modDepthOctaves: 3.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_7",
      name: "Electric Pulse Pluck v7",
      oscillatorType: "sawtooth",
      attackTimeSeconds: 0.0700,
      decayTimeSeconds: 0.2600,
      sustainLevel: 0.10,
      releaseTimeSeconds: 0.4500,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 710,
        resonanceQ: 6.00,
        modDepthOctaves: 0.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_8",
      name: "Sub Bass Rumble v8",
      oscillatorType: "square",
      attackTimeSeconds: 0.0800,
      decayTimeSeconds: 0.2900,
      sustainLevel: 0.22,
      releaseTimeSeconds: 0.5000,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 795,
        resonanceQ: 6.80,
        modDepthOctaves: 1.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_9",
      name: "Raindrop Sine Marimba v9",
      oscillatorType: "sine",
      attackTimeSeconds: 0.0100,
      decayTimeSeconds: 0.3200,
      sustainLevel: 0.34,
      releaseTimeSeconds: 0.5500,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 880,
        resonanceQ: 1.20,
        modDepthOctaves: 1.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_10",
      name: "Liquid Filter Bass v10",
      oscillatorType: "triangle",
      attackTimeSeconds: 0.0200,
      decayTimeSeconds: 0.3500,
      sustainLevel: 0.46,
      releaseTimeSeconds: 0.6000,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 965,
        resonanceQ: 2.00,
        modDepthOctaves: 2.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_11",
      name: "Thunder Sawtooth Lead v11",
      oscillatorType: "sawtooth",
      attackTimeSeconds: 0.0300,
      decayTimeSeconds: 0.0800,
      sustainLevel: 0.58,
      releaseTimeSeconds: 0.6500,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 1050,
        resonanceQ: 2.80,
        modDepthOctaves: 2.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_12",
      name: "Bubble Pop Chime v12",
      oscillatorType: "square",
      attackTimeSeconds: 0.0400,
      decayTimeSeconds: 0.1100,
      sustainLevel: 0.70,
      releaseTimeSeconds: 0.7000,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 1135,
        resonanceQ: 3.60,
        modDepthOctaves: 3.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_13",
      name: "Spring Boing Resonator v13",
      oscillatorType: "sine",
      attackTimeSeconds: 0.0500,
      decayTimeSeconds: 0.1400,
      sustainLevel: 0.10,
      releaseTimeSeconds: 0.1500,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 1220,
        resonanceQ: 4.40,
        modDepthOctaves: 0.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_14",
      name: "Glider Wind Flute v14",
      oscillatorType: "triangle",
      attackTimeSeconds: 0.0600,
      decayTimeSeconds: 0.1700,
      sustainLevel: 0.22,
      releaseTimeSeconds: 0.2000,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 1305,
        resonanceQ: 5.20,
        modDepthOctaves: 1.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_15",
      name: "Electric Pulse Pluck v15",
      oscillatorType: "sawtooth",
      attackTimeSeconds: 0.0700,
      decayTimeSeconds: 0.2000,
      sustainLevel: 0.34,
      releaseTimeSeconds: 0.2500,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 1390,
        resonanceQ: 6.00,
        modDepthOctaves: 1.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_16",
      name: "Sub Bass Rumble v16",
      oscillatorType: "square",
      attackTimeSeconds: 0.0800,
      decayTimeSeconds: 0.2300,
      sustainLevel: 0.46,
      releaseTimeSeconds: 0.3000,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 1475,
        resonanceQ: 6.80,
        modDepthOctaves: 2.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_17",
      name: "Raindrop Sine Marimba v17",
      oscillatorType: "sine",
      attackTimeSeconds: 0.0100,
      decayTimeSeconds: 0.2600,
      sustainLevel: 0.58,
      releaseTimeSeconds: 0.3500,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 1560,
        resonanceQ: 1.20,
        modDepthOctaves: 2.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_18",
      name: "Liquid Filter Bass v18",
      oscillatorType: "triangle",
      attackTimeSeconds: 0.0200,
      decayTimeSeconds: 0.2900,
      sustainLevel: 0.70,
      releaseTimeSeconds: 0.4000,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 1645,
        resonanceQ: 2.00,
        modDepthOctaves: 3.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_19",
      name: "Thunder Sawtooth Lead v19",
      oscillatorType: "sawtooth",
      attackTimeSeconds: 0.0300,
      decayTimeSeconds: 0.3200,
      sustainLevel: 0.10,
      releaseTimeSeconds: 0.4500,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 1730,
        resonanceQ: 2.80,
        modDepthOctaves: 0.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_20",
      name: "Bubble Pop Chime v20",
      oscillatorType: "square",
      attackTimeSeconds: 0.0400,
      decayTimeSeconds: 0.3500,
      sustainLevel: 0.22,
      releaseTimeSeconds: 0.5000,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 1815,
        resonanceQ: 3.60,
        modDepthOctaves: 1.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_21",
      name: "Spring Boing Resonator v21",
      oscillatorType: "sine",
      attackTimeSeconds: 0.0500,
      decayTimeSeconds: 0.0800,
      sustainLevel: 0.34,
      releaseTimeSeconds: 0.5500,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 1900,
        resonanceQ: 4.40,
        modDepthOctaves: 1.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_22",
      name: "Glider Wind Flute v22",
      oscillatorType: "triangle",
      attackTimeSeconds: 0.0600,
      decayTimeSeconds: 0.1100,
      sustainLevel: 0.46,
      releaseTimeSeconds: 0.6000,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 1985,
        resonanceQ: 5.20,
        modDepthOctaves: 2.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_23",
      name: "Electric Pulse Pluck v23",
      oscillatorType: "sawtooth",
      attackTimeSeconds: 0.0700,
      decayTimeSeconds: 0.1400,
      sustainLevel: 0.58,
      releaseTimeSeconds: 0.6500,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 2070,
        resonanceQ: 6.00,
        modDepthOctaves: 2.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_24",
      name: "Sub Bass Rumble v24",
      oscillatorType: "square",
      attackTimeSeconds: 0.0800,
      decayTimeSeconds: 0.1700,
      sustainLevel: 0.70,
      releaseTimeSeconds: 0.7000,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 2155,
        resonanceQ: 6.80,
        modDepthOctaves: 3.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_25",
      name: "Raindrop Sine Marimba v25",
      oscillatorType: "sine",
      attackTimeSeconds: 0.0100,
      decayTimeSeconds: 0.2000,
      sustainLevel: 0.10,
      releaseTimeSeconds: 0.1500,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 2240,
        resonanceQ: 1.20,
        modDepthOctaves: 0.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_26",
      name: "Liquid Filter Bass v26",
      oscillatorType: "triangle",
      attackTimeSeconds: 0.0200,
      decayTimeSeconds: 0.2300,
      sustainLevel: 0.22,
      releaseTimeSeconds: 0.2000,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 2325,
        resonanceQ: 2.00,
        modDepthOctaves: 1.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_27",
      name: "Thunder Sawtooth Lead v27",
      oscillatorType: "sawtooth",
      attackTimeSeconds: 0.0300,
      decayTimeSeconds: 0.2600,
      sustainLevel: 0.34,
      releaseTimeSeconds: 0.2500,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 2410,
        resonanceQ: 2.80,
        modDepthOctaves: 1.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_28",
      name: "Bubble Pop Chime v28",
      oscillatorType: "square",
      attackTimeSeconds: 0.0400,
      decayTimeSeconds: 0.2900,
      sustainLevel: 0.46,
      releaseTimeSeconds: 0.3000,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 2495,
        resonanceQ: 3.60,
        modDepthOctaves: 2.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_29",
      name: "Spring Boing Resonator v29",
      oscillatorType: "sine",
      attackTimeSeconds: 0.0500,
      decayTimeSeconds: 0.3200,
      sustainLevel: 0.58,
      releaseTimeSeconds: 0.3500,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 2580,
        resonanceQ: 4.40,
        modDepthOctaves: 2.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_30",
      name: "Glider Wind Flute v30",
      oscillatorType: "triangle",
      attackTimeSeconds: 0.0600,
      decayTimeSeconds: 0.3500,
      sustainLevel: 0.70,
      releaseTimeSeconds: 0.4000,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 2665,
        resonanceQ: 5.20,
        modDepthOctaves: 3.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_31",
      name: "Electric Pulse Pluck v31",
      oscillatorType: "sawtooth",
      attackTimeSeconds: 0.0700,
      decayTimeSeconds: 0.0800,
      sustainLevel: 0.10,
      releaseTimeSeconds: 0.4500,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 2750,
        resonanceQ: 6.00,
        modDepthOctaves: 0.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_32",
      name: "Sub Bass Rumble v32",
      oscillatorType: "square",
      attackTimeSeconds: 0.0800,
      decayTimeSeconds: 0.1100,
      sustainLevel: 0.22,
      releaseTimeSeconds: 0.5000,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 2835,
        resonanceQ: 6.80,
        modDepthOctaves: 1.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_33",
      name: "Raindrop Sine Marimba v33",
      oscillatorType: "sine",
      attackTimeSeconds: 0.0100,
      decayTimeSeconds: 0.1400,
      sustainLevel: 0.34,
      releaseTimeSeconds: 0.5500,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 2920,
        resonanceQ: 1.20,
        modDepthOctaves: 1.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_34",
      name: "Liquid Filter Bass v34",
      oscillatorType: "triangle",
      attackTimeSeconds: 0.0200,
      decayTimeSeconds: 0.1700,
      sustainLevel: 0.46,
      releaseTimeSeconds: 0.6000,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 3005,
        resonanceQ: 2.00,
        modDepthOctaves: 2.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_35",
      name: "Thunder Sawtooth Lead v35",
      oscillatorType: "sawtooth",
      attackTimeSeconds: 0.0300,
      decayTimeSeconds: 0.2000,
      sustainLevel: 0.58,
      releaseTimeSeconds: 0.6500,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 3090,
        resonanceQ: 2.80,
        modDepthOctaves: 2.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_36",
      name: "Bubble Pop Chime v36",
      oscillatorType: "square",
      attackTimeSeconds: 0.0400,
      decayTimeSeconds: 0.2300,
      sustainLevel: 0.70,
      releaseTimeSeconds: 0.7000,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 3175,
        resonanceQ: 3.60,
        modDepthOctaves: 3.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_37",
      name: "Spring Boing Resonator v37",
      oscillatorType: "sine",
      attackTimeSeconds: 0.0500,
      decayTimeSeconds: 0.2600,
      sustainLevel: 0.10,
      releaseTimeSeconds: 0.1500,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 3260,
        resonanceQ: 4.40,
        modDepthOctaves: 0.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_38",
      name: "Glider Wind Flute v38",
      oscillatorType: "triangle",
      attackTimeSeconds: 0.0600,
      decayTimeSeconds: 0.2900,
      sustainLevel: 0.22,
      releaseTimeSeconds: 0.2000,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 3345,
        resonanceQ: 5.20,
        modDepthOctaves: 1.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_39",
      name: "Electric Pulse Pluck v39",
      oscillatorType: "sawtooth",
      attackTimeSeconds: 0.0700,
      decayTimeSeconds: 0.3200,
      sustainLevel: 0.34,
      releaseTimeSeconds: 0.2500,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 3430,
        resonanceQ: 6.00,
        modDepthOctaves: 1.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_40",
      name: "Sub Bass Rumble v40",
      oscillatorType: "square",
      attackTimeSeconds: 0.0800,
      decayTimeSeconds: 0.3500,
      sustainLevel: 0.46,
      releaseTimeSeconds: 0.3000,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 3515,
        resonanceQ: 6.80,
        modDepthOctaves: 2.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_41",
      name: "Raindrop Sine Marimba v41",
      oscillatorType: "sine",
      attackTimeSeconds: 0.0100,
      decayTimeSeconds: 0.0800,
      sustainLevel: 0.58,
      releaseTimeSeconds: 0.3500,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 3600,
        resonanceQ: 1.20,
        modDepthOctaves: 2.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_42",
      name: "Liquid Filter Bass v42",
      oscillatorType: "triangle",
      attackTimeSeconds: 0.0200,
      decayTimeSeconds: 0.1100,
      sustainLevel: 0.70,
      releaseTimeSeconds: 0.4000,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 3685,
        resonanceQ: 2.00,
        modDepthOctaves: 3.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_43",
      name: "Thunder Sawtooth Lead v43",
      oscillatorType: "sawtooth",
      attackTimeSeconds: 0.0300,
      decayTimeSeconds: 0.1400,
      sustainLevel: 0.10,
      releaseTimeSeconds: 0.4500,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 270,
        resonanceQ: 2.80,
        modDepthOctaves: 0.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_44",
      name: "Bubble Pop Chime v44",
      oscillatorType: "square",
      attackTimeSeconds: 0.0400,
      decayTimeSeconds: 0.1700,
      sustainLevel: 0.22,
      releaseTimeSeconds: 0.5000,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 355,
        resonanceQ: 3.60,
        modDepthOctaves: 1.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_45",
      name: "Spring Boing Resonator v45",
      oscillatorType: "sine",
      attackTimeSeconds: 0.0500,
      decayTimeSeconds: 0.2000,
      sustainLevel: 0.34,
      releaseTimeSeconds: 0.5500,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 440,
        resonanceQ: 4.40,
        modDepthOctaves: 1.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_46",
      name: "Glider Wind Flute v46",
      oscillatorType: "triangle",
      attackTimeSeconds: 0.0600,
      decayTimeSeconds: 0.2300,
      sustainLevel: 0.46,
      releaseTimeSeconds: 0.6000,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 525,
        resonanceQ: 5.20,
        modDepthOctaves: 2.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_47",
      name: "Electric Pulse Pluck v47",
      oscillatorType: "sawtooth",
      attackTimeSeconds: 0.0700,
      decayTimeSeconds: 0.2600,
      sustainLevel: 0.58,
      releaseTimeSeconds: 0.6500,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 610,
        resonanceQ: 6.00,
        modDepthOctaves: 2.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_48",
      name: "Sub Bass Rumble v48",
      oscillatorType: "square",
      attackTimeSeconds: 0.0800,
      decayTimeSeconds: 0.2900,
      sustainLevel: 0.70,
      releaseTimeSeconds: 0.7000,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 695,
        resonanceQ: 6.80,
        modDepthOctaves: 3.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_49",
      name: "Raindrop Sine Marimba v49",
      oscillatorType: "sine",
      attackTimeSeconds: 0.0100,
      decayTimeSeconds: 0.3200,
      sustainLevel: 0.10,
      releaseTimeSeconds: 0.1500,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 780,
        resonanceQ: 1.20,
        modDepthOctaves: 0.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_50",
      name: "Liquid Filter Bass v50",
      oscillatorType: "triangle",
      attackTimeSeconds: 0.0200,
      decayTimeSeconds: 0.3500,
      sustainLevel: 0.22,
      releaseTimeSeconds: 0.2000,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 865,
        resonanceQ: 2.00,
        modDepthOctaves: 1.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_51",
      name: "Thunder Sawtooth Lead v51",
      oscillatorType: "sawtooth",
      attackTimeSeconds: 0.0300,
      decayTimeSeconds: 0.0800,
      sustainLevel: 0.34,
      releaseTimeSeconds: 0.2500,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 950,
        resonanceQ: 2.80,
        modDepthOctaves: 1.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_52",
      name: "Bubble Pop Chime v52",
      oscillatorType: "square",
      attackTimeSeconds: 0.0400,
      decayTimeSeconds: 0.1100,
      sustainLevel: 0.46,
      releaseTimeSeconds: 0.3000,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 1035,
        resonanceQ: 3.60,
        modDepthOctaves: 2.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_53",
      name: "Spring Boing Resonator v53",
      oscillatorType: "sine",
      attackTimeSeconds: 0.0500,
      decayTimeSeconds: 0.1400,
      sustainLevel: 0.58,
      releaseTimeSeconds: 0.3500,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 1120,
        resonanceQ: 4.40,
        modDepthOctaves: 2.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_54",
      name: "Glider Wind Flute v54",
      oscillatorType: "triangle",
      attackTimeSeconds: 0.0600,
      decayTimeSeconds: 0.1700,
      sustainLevel: 0.70,
      releaseTimeSeconds: 0.4000,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 1205,
        resonanceQ: 5.20,
        modDepthOctaves: 3.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_55",
      name: "Electric Pulse Pluck v55",
      oscillatorType: "sawtooth",
      attackTimeSeconds: 0.0700,
      decayTimeSeconds: 0.2000,
      sustainLevel: 0.10,
      releaseTimeSeconds: 0.4500,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 1290,
        resonanceQ: 6.00,
        modDepthOctaves: 0.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_56",
      name: "Sub Bass Rumble v56",
      oscillatorType: "square",
      attackTimeSeconds: 0.0800,
      decayTimeSeconds: 0.2300,
      sustainLevel: 0.22,
      releaseTimeSeconds: 0.5000,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 1375,
        resonanceQ: 6.80,
        modDepthOctaves: 1.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_57",
      name: "Raindrop Sine Marimba v57",
      oscillatorType: "sine",
      attackTimeSeconds: 0.0100,
      decayTimeSeconds: 0.2600,
      sustainLevel: 0.34,
      releaseTimeSeconds: 0.5500,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 1460,
        resonanceQ: 1.20,
        modDepthOctaves: 1.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
    {
      patchId: "patch_58",
      name: "Liquid Filter Bass v58",
      oscillatorType: "triangle",
      attackTimeSeconds: 0.0200,
      decayTimeSeconds: 0.2900,
      sustainLevel: 0.46,
      releaseTimeSeconds: 0.6000,
      filterEnvelope: {
        filterType: "lowpass",
        cutoffFrequencyHz: 1545,
        resonanceQ: 2.00,
        modDepthOctaves: 2.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.4353 },
        { harmonic: 3, amplitude: 0.2676 },
        { harmonic: 4, amplitude: 0.1895 },
        { harmonic: 5, amplitude: 0.1450 },
        { harmonic: 6, amplitude: 0.1165 },
        { harmonic: 7, amplitude: 0.0968 },
        { harmonic: 8, amplitude: 0.0825 },
      ]
    },
    {
      patchId: "patch_59",
      name: "Thunder Sawtooth Lead v59",
      oscillatorType: "sawtooth",
      attackTimeSeconds: 0.0300,
      decayTimeSeconds: 0.3200,
      sustainLevel: 0.58,
      releaseTimeSeconds: 0.6500,
      filterEnvelope: {
        filterType: "bandpass",
        cutoffFrequencyHz: 1630,
        resonanceQ: 2.80,
        modDepthOctaves: 2.50
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.3536 },
        { harmonic: 3, amplitude: 0.1925 },
        { harmonic: 4, amplitude: 0.1250 },
        { harmonic: 5, amplitude: 0.0894 },
        { harmonic: 6, amplitude: 0.0680 },
        { harmonic: 7, amplitude: 0.0540 },
        { harmonic: 8, amplitude: 0.0442 },
      ]
    },
    {
      patchId: "patch_60",
      name: "Bubble Pop Chime v60",
      oscillatorType: "square",
      attackTimeSeconds: 0.0400,
      decayTimeSeconds: 0.3500,
      sustainLevel: 0.70,
      releaseTimeSeconds: 0.7000,
      filterEnvelope: {
        filterType: "highpass",
        cutoffFrequencyHz: 1715,
        resonanceQ: 3.60,
        modDepthOctaves: 3.00
      },
      harmonicOvertoneGains: [
        { harmonic: 1, amplitude: 1.0000 },
        { harmonic: 2, amplitude: 0.2872 },
        { harmonic: 3, amplitude: 0.1384 },
        { harmonic: 4, amplitude: 0.0825 },
        { harmonic: 5, amplitude: 0.0552 },
        { harmonic: 6, amplitude: 0.0397 },
        { harmonic: 7, amplitude: 0.0301 },
        { harmonic: 8, amplitude: 0.0237 },
      ]
    },
  ],
  melodicScoreTracks: [
    {
      trackId: "rain_theme_track_1",
      title: "Monsoon Melodies Movement 1",
      tempoBpm: 84,
      timeSignature: "4/4",
      keySignature: "C Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_2",
      title: "Monsoon Melodies Movement 2",
      tempoBpm: 88,
      timeSignature: "4/4",
      keySignature: "D Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_3",
      title: "Monsoon Melodies Movement 3",
      tempoBpm: 92,
      timeSignature: "4/4",
      keySignature: "E Lydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_4",
      title: "Monsoon Melodies Movement 4",
      tempoBpm: 96,
      timeSignature: "4/4",
      keySignature: "F Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_5",
      title: "Monsoon Melodies Movement 5",
      tempoBpm: 100,
      timeSignature: "4/4",
      keySignature: "G Mixolydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_6",
      title: "Monsoon Melodies Movement 6",
      tempoBpm: 104,
      timeSignature: "4/4",
      keySignature: "A Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_7",
      title: "Monsoon Melodies Movement 7",
      tempoBpm: 108,
      timeSignature: "4/4",
      keySignature: "C Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_8",
      title: "Monsoon Melodies Movement 8",
      tempoBpm: 112,
      timeSignature: "4/4",
      keySignature: "D Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_9",
      title: "Monsoon Melodies Movement 9",
      tempoBpm: 116,
      timeSignature: "4/4",
      keySignature: "E Lydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_10",
      title: "Monsoon Melodies Movement 10",
      tempoBpm: 120,
      timeSignature: "4/4",
      keySignature: "F Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_11",
      title: "Monsoon Melodies Movement 11",
      tempoBpm: 84,
      timeSignature: "4/4",
      keySignature: "G Mixolydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_12",
      title: "Monsoon Melodies Movement 12",
      tempoBpm: 88,
      timeSignature: "4/4",
      keySignature: "A Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_13",
      title: "Monsoon Melodies Movement 13",
      tempoBpm: 92,
      timeSignature: "4/4",
      keySignature: "C Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_14",
      title: "Monsoon Melodies Movement 14",
      tempoBpm: 96,
      timeSignature: "4/4",
      keySignature: "D Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_15",
      title: "Monsoon Melodies Movement 15",
      tempoBpm: 100,
      timeSignature: "4/4",
      keySignature: "E Lydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_16",
      title: "Monsoon Melodies Movement 16",
      tempoBpm: 104,
      timeSignature: "4/4",
      keySignature: "F Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_17",
      title: "Monsoon Melodies Movement 17",
      tempoBpm: 108,
      timeSignature: "4/4",
      keySignature: "G Mixolydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_18",
      title: "Monsoon Melodies Movement 18",
      tempoBpm: 112,
      timeSignature: "4/4",
      keySignature: "A Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_19",
      title: "Monsoon Melodies Movement 19",
      tempoBpm: 116,
      timeSignature: "4/4",
      keySignature: "C Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_20",
      title: "Monsoon Melodies Movement 20",
      tempoBpm: 120,
      timeSignature: "4/4",
      keySignature: "D Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_21",
      title: "Monsoon Melodies Movement 21",
      tempoBpm: 84,
      timeSignature: "4/4",
      keySignature: "E Lydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_22",
      title: "Monsoon Melodies Movement 22",
      tempoBpm: 88,
      timeSignature: "4/4",
      keySignature: "F Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_23",
      title: "Monsoon Melodies Movement 23",
      tempoBpm: 92,
      timeSignature: "4/4",
      keySignature: "G Mixolydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_24",
      title: "Monsoon Melodies Movement 24",
      tempoBpm: 96,
      timeSignature: "4/4",
      keySignature: "A Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_25",
      title: "Monsoon Melodies Movement 25",
      tempoBpm: 100,
      timeSignature: "4/4",
      keySignature: "C Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_26",
      title: "Monsoon Melodies Movement 26",
      tempoBpm: 104,
      timeSignature: "4/4",
      keySignature: "D Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_27",
      title: "Monsoon Melodies Movement 27",
      tempoBpm: 108,
      timeSignature: "4/4",
      keySignature: "E Lydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_28",
      title: "Monsoon Melodies Movement 28",
      tempoBpm: 112,
      timeSignature: "4/4",
      keySignature: "F Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_29",
      title: "Monsoon Melodies Movement 29",
      tempoBpm: 116,
      timeSignature: "4/4",
      keySignature: "G Mixolydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_30",
      title: "Monsoon Melodies Movement 30",
      tempoBpm: 120,
      timeSignature: "4/4",
      keySignature: "A Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_31",
      title: "Monsoon Melodies Movement 31",
      tempoBpm: 84,
      timeSignature: "4/4",
      keySignature: "C Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_32",
      title: "Monsoon Melodies Movement 32",
      tempoBpm: 88,
      timeSignature: "4/4",
      keySignature: "D Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_33",
      title: "Monsoon Melodies Movement 33",
      tempoBpm: 92,
      timeSignature: "4/4",
      keySignature: "E Lydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_34",
      title: "Monsoon Melodies Movement 34",
      tempoBpm: 96,
      timeSignature: "4/4",
      keySignature: "F Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_35",
      title: "Monsoon Melodies Movement 35",
      tempoBpm: 100,
      timeSignature: "4/4",
      keySignature: "G Mixolydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_36",
      title: "Monsoon Melodies Movement 36",
      tempoBpm: 104,
      timeSignature: "4/4",
      keySignature: "A Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_37",
      title: "Monsoon Melodies Movement 37",
      tempoBpm: 108,
      timeSignature: "4/4",
      keySignature: "C Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_38",
      title: "Monsoon Melodies Movement 38",
      tempoBpm: 112,
      timeSignature: "4/4",
      keySignature: "D Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_39",
      title: "Monsoon Melodies Movement 39",
      tempoBpm: 116,
      timeSignature: "4/4",
      keySignature: "E Lydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_40",
      title: "Monsoon Melodies Movement 40",
      tempoBpm: 120,
      timeSignature: "4/4",
      keySignature: "F Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_41",
      title: "Monsoon Melodies Movement 41",
      tempoBpm: 84,
      timeSignature: "4/4",
      keySignature: "G Mixolydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_42",
      title: "Monsoon Melodies Movement 42",
      tempoBpm: 88,
      timeSignature: "4/4",
      keySignature: "A Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_43",
      title: "Monsoon Melodies Movement 43",
      tempoBpm: 92,
      timeSignature: "4/4",
      keySignature: "C Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_44",
      title: "Monsoon Melodies Movement 44",
      tempoBpm: 96,
      timeSignature: "4/4",
      keySignature: "D Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_45",
      title: "Monsoon Melodies Movement 45",
      tempoBpm: 100,
      timeSignature: "4/4",
      keySignature: "E Lydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_46",
      title: "Monsoon Melodies Movement 46",
      tempoBpm: 104,
      timeSignature: "4/4",
      keySignature: "F Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_47",
      title: "Monsoon Melodies Movement 47",
      tempoBpm: 108,
      timeSignature: "4/4",
      keySignature: "G Mixolydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_48",
      title: "Monsoon Melodies Movement 48",
      tempoBpm: 112,
      timeSignature: "4/4",
      keySignature: "A Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_49",
      title: "Monsoon Melodies Movement 49",
      tempoBpm: 116,
      timeSignature: "4/4",
      keySignature: "C Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_50",
      title: "Monsoon Melodies Movement 50",
      tempoBpm: 120,
      timeSignature: "4/4",
      keySignature: "D Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_51",
      title: "Monsoon Melodies Movement 51",
      tempoBpm: 84,
      timeSignature: "4/4",
      keySignature: "E Lydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_52",
      title: "Monsoon Melodies Movement 52",
      tempoBpm: 88,
      timeSignature: "4/4",
      keySignature: "F Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_53",
      title: "Monsoon Melodies Movement 53",
      tempoBpm: 92,
      timeSignature: "4/4",
      keySignature: "G Mixolydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_54",
      title: "Monsoon Melodies Movement 54",
      tempoBpm: 96,
      timeSignature: "4/4",
      keySignature: "A Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_55",
      title: "Monsoon Melodies Movement 55",
      tempoBpm: 100,
      timeSignature: "4/4",
      keySignature: "C Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_56",
      title: "Monsoon Melodies Movement 56",
      tempoBpm: 104,
      timeSignature: "4/4",
      keySignature: "D Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_57",
      title: "Monsoon Melodies Movement 57",
      tempoBpm: 108,
      timeSignature: "4/4",
      keySignature: "E Lydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_58",
      title: "Monsoon Melodies Movement 58",
      tempoBpm: 112,
      timeSignature: "4/4",
      keySignature: "F Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_59",
      title: "Monsoon Melodies Movement 59",
      tempoBpm: 116,
      timeSignature: "4/4",
      keySignature: "G Mixolydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_60",
      title: "Monsoon Melodies Movement 60",
      tempoBpm: 120,
      timeSignature: "4/4",
      keySignature: "A Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_61",
      title: "Monsoon Melodies Movement 61",
      tempoBpm: 84,
      timeSignature: "4/4",
      keySignature: "C Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_62",
      title: "Monsoon Melodies Movement 62",
      tempoBpm: 88,
      timeSignature: "4/4",
      keySignature: "D Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_63",
      title: "Monsoon Melodies Movement 63",
      tempoBpm: 92,
      timeSignature: "4/4",
      keySignature: "E Lydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_64",
      title: "Monsoon Melodies Movement 64",
      tempoBpm: 96,
      timeSignature: "4/4",
      keySignature: "F Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_65",
      title: "Monsoon Melodies Movement 65",
      tempoBpm: 100,
      timeSignature: "4/4",
      keySignature: "G Mixolydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_66",
      title: "Monsoon Melodies Movement 66",
      tempoBpm: 104,
      timeSignature: "4/4",
      keySignature: "A Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_67",
      title: "Monsoon Melodies Movement 67",
      tempoBpm: 108,
      timeSignature: "4/4",
      keySignature: "C Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_68",
      title: "Monsoon Melodies Movement 68",
      tempoBpm: 112,
      timeSignature: "4/4",
      keySignature: "D Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_69",
      title: "Monsoon Melodies Movement 69",
      tempoBpm: 116,
      timeSignature: "4/4",
      keySignature: "E Lydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_70",
      title: "Monsoon Melodies Movement 70",
      tempoBpm: 120,
      timeSignature: "4/4",
      keySignature: "F Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_71",
      title: "Monsoon Melodies Movement 71",
      tempoBpm: 84,
      timeSignature: "4/4",
      keySignature: "G Mixolydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_72",
      title: "Monsoon Melodies Movement 72",
      tempoBpm: 88,
      timeSignature: "4/4",
      keySignature: "A Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_73",
      title: "Monsoon Melodies Movement 73",
      tempoBpm: 92,
      timeSignature: "4/4",
      keySignature: "C Major",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 130.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 155.56,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 184.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 219.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_74",
      title: "Monsoon Melodies Movement 74",
      tempoBpm: 96,
      timeSignature: "4/4",
      keySignature: "D Minor",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 879.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 987.72, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 146.83,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 277.19, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 174.61,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 311.13, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 207.64,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 349.23, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 440.00, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 554.35, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 698.43, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 246.93,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 391.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 493.88, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 622.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 783.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
    {
      trackId: "rain_theme_track_75",
      title: "Monsoon Melodies Movement 75",
      tempoBpm: 100,
      timeSignature: "4/4",
      keySignature: "E Lydian",
      measurePattern: [
        {
          measureIndex: 1,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 2,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 3,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 4,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 5,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 6,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 7,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 8,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 9,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 10,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 11,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 932.28, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 12,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 261.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 13,
          chordRootFreqHz: 164.81,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 293.67, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 14,
          chordRootFreqHz: 195.99,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 329.63, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 15,
          chordRootFreqHz: 233.07,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 369.99, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 466.16, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 587.32, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 739.96, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
        {
          measureIndex: 16,
          chordRootFreqHz: 138.59,
          melodicNoteFrequenciesHz: [
            { beat: 0.00, freq: 415.30, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.25, freq: 523.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.50, freq: 659.24, durationSeconds: 0.22, velocity: 0.75 },
            { beat: 0.75, freq: 830.57, durationSeconds: 0.22, velocity: 0.75 },
          ]
        },
      ]
    },
  ]
};

if (typeof window !== "undefined") { window.AudioSynthesizerPresets = AudioSynthesizerPresets; }
if (typeof module !== "undefined") { module.exports = AudioSynthesizerPresets; }