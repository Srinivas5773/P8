# 🌧️ Puddle Jumper

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/Language-Vanilla%20JS%20ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](#license)
[![Tests](https://img.shields.io/badge/Tests-Passing-brightgreen.svg)](#testing)

A high-performance, standalone HTML5 Canvas arcade platformer featuring real-time fluid ripple dynamics, a custom Web Audio API synthesizer, 50+ adventure stages, an infinite procedural storm runner, and an in-game sandbox level editor.

---

## 📖 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [System Architecture](#system-architecture)
- [Installation](#installation)
- [Build](#build)
- [Run](#run)
- [Testing](#testing)
- [Dependencies](#dependencies)
- [Usage & Controls](#usage--controls)
- [License](#license)

---

## 🌟 Overview

**Puddle Jumper** challenges players to navigate stormy environments, timing parabolic leaps between dynamic water bodies with varying physical and magical properties (clear water, sticky mud, elastic trampolines, slip-and-slide ice, floating bubbles, and quantum portals).

The project is built with **zero external libraries**, implementing its own fluid wave solver, particle cascade system, sound synthesizer, and state machine.

---

## ⚡ Key Features

- **8 Puddle Varieties**: Water, Mud, Spring, Ice, Bubble, Portal, Acid, and Electric Shock puddles.
- **Pure Web Audio Synthesizer**: Procedural sound effects, dynamic rain/wind soundscapes, and generative background melodies without audio assets.
- **1D/2D Spring-Mass Wave Solver**: Real-time fluid surface wave dispersion on the canvas.
- **5 Game Modes**:
  - *Adventure World Tour* (50 progressive stages across 5 biomes)
  - *Endless Storm Runner* (procedural infinite chunks with escalating weather)
  - *Time Attack / Splash Dash* (precision speedrunning)
  - *Zen Rain Mode* (relaxing ambient rain mode with zero damage)
  - *Custom Level Editor* (in-game level creator with JSON import/export)
- **7 Playable Characters & Wardrobe**: Froggy, Rubber Duckie, Raincoat Kid, Rainy Cat, Axolotl Diver, Cyber Rover, Storm Sorcerer.
- **Multi-Phase Bosses**: Boss encounters including *King Nimbus* with dynamic attack cycles.
- **Achievements & Stats**: 35+ badges and lifetime stats saved via `LocalStorage`.

---

## 🏗️ System Architecture

```
puddle_jumper/
├── index.html                   # HTML5 Canvas container, HUD, and modal UI
├── server.js                    # Native Node.js HTTP server entrypoint
├── package.json                 # Dependency manifest and execution scripts
├── Dockerfile                   # Production container definition
├── jest.config.js               # Unit test and coverage configuration
├── css/
│   └── style.css                # Glassmorphic arcade styling and responsive layout
├── js/
│   ├── audio.js                 # Web Audio API sound synthesizer
│   ├── physics.js               # Spring-mass wave solver, particle system
│   ├── entities.js              # Player, 8 puddle classes, hazards, Boss AI
│   ├── levels.js                # 50 Adventure levels and endless generator
│   ├── editor.js                # In-game stage builder and JSON serializer
│   ├── shop.js                  # Wardrobe catalog, cosmetics, and upgrades
│   ├── achievements.js          # Achievement tracker and toast alerts
│   ├── game.js                  # 60 FPS fixed-timestep game engine
│   └── data/                    # Campaign level packs, sound presets, lore
└── tests/                       # Unit tests and automated test suites
```

---

## 📦 Installation

Clone the repository and install dev dependencies:

```bash
# Clone repository
git clone https://github.com/Srinivas5773/P8.git
cd P8

# Install dependencies
npm install
```

---

## 🔨 Build

To run validation checks and build verification:

```bash
npm run build
```

---

## 🚀 Run

Start the local development and production server:

```bash
npm start
```

Once started, open [http://localhost:3000](http://localhost:3000) in your web browser.

Alternatively, you can open `index.html` directly in any modern browser without a server.

---

## 🧪 Testing

Execute the comprehensive automated test suite and generate coverage reports:

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm run test:watch
```

Coverage artifacts will be generated in the `coverage/` directory (`coverage/lcov.info` and `coverage/coverage-final.json`).

---

## 📚 Dependencies

- **Runtime**: Zero external runtime dependencies (uses native Node.js `http` and Web standard APIs).
- **Development**:
  - `jest` (`^29.7.0`) — Automated testing framework
  - `serve-handler` (`^6.1.6`) — Static file serving

---

## 🎮 Usage & Controls

| Action | Keyboard | Touch / Mobile | Gamepad |
| :--- | :--- | :--- | :--- |
| **Move Left / Right** | `A` / `D` or `←` / `→` | Left / Right Buttons | D-Pad / Left Stick |
| **Charge & Jump** | Hold & Release `Space` / `W` / `↑` | Jump Button | `A` / `Cross` |
| **Umbrella Glide** | `Shift` | Glide Button | `L1` / `R1` / Triggers |
| **Splash Stomp** | `S` / `↓` | Stomp Button | `B` / `Circle` |
| **Pause Game** | `P` / `Escape` | Pause Button | `Start` / `Menu` |

---

## 📄 License

**Proprietary & Confidential.**  
All rights reserved © 2026 Srinivas5773. Unauthorized copying, distribution, or modification is strictly prohibited.
