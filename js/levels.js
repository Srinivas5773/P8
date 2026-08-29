/**
 * Puddle Jumper - Level Architect & Procedural Generator
 * 50 Adventure stages across 5 Biomes, Endless procedural chunk generator, Time Attack courses, and level parser.
 */

const LevelManager = {
    // Biome definitions with thematic settings
    biomes: [
        {
            id: 1,
            name: 'Sunny Showers',
            bgGradient: ['#38bdf8', '#818cf8', '#c084fc'],
            groundColor: '#4ade80',
            weather: { intensity: 0.3, wind: 0.2 },
            musicMood: 'cheerful'
        },
        {
            id: 2,
            name: 'Muddy Meadows',
            bgGradient: ['#64748b', '#78716c', '#a8a29e'],
            groundColor: '#78350f',
            weather: { intensity: 0.6, wind: 0.5 },
            musicMood: 'earthy'
        },
        {
            id: 3,
            name: 'Neon Cyber Deluge',
            bgGradient: ['#0f172a', '#1e1b4b', '#312e81'],
            groundColor: '#0284c7',
            weather: { intensity: 0.8, wind: 0.7 },
            musicMood: 'synthwave'
        },
        {
            id: 4,
            name: 'Mystic Marshland',
            bgGradient: ['#064e3b', '#022c22', '#0f172a'],
            groundColor: '#059669',
            weather: { intensity: 0.5, wind: 0.3 },
            musicMood: 'mystic'
        },
        {
            id: 5,
            name: 'Sky-High Storm Citadel',
            bgGradient: ['#18181b', '#27272a', '#3f3f46'],
            groundColor: '#475569',
            weather: { intensity: 1.0, wind: 0.9 },
            musicMood: 'epic'
        }
    ],

    // Generate 50 Adventure Levels programmatically with hand-tuned layouts
    getAdventureLevel(levelNum) {
        const num = Math.max(1, Math.min(50, levelNum));
        const biomeIndex = Math.floor((num - 1) / 10);
        const biome = this.biomes[biomeIndex];
        const stageInBiome = ((num - 1) % 10) + 1;

        const isBossLevel = stageInBiome === 10;
        const levelWidth = isBossLevel ? 1400 : 2000 + stageInBiome * 150;

        const platforms = [];
        const puddles = [];
        const collectibles = [];
        const hazards = [];

        // Base ground platforms
        let currentX = 0;
        const groundY = 460;

        // Starting safe platform
        platforms.push({ x: 0, y: groundY, width: 300, height: 100 });
        puddles.push({ type: 'water', x: 80, y: groundY - 6, width: 100, height: 20 });
        currentX = 320;

        if (isBossLevel) {
            // Arena layout for Boss Fight
            platforms.push({ x: 340, y: groundY, width: 700, height: 100 });
            puddles.push({ type: 'spring', x: 420, y: groundY - 6, width: 100, height: 20 });
            puddles.push({ type: 'water', x: 620, y: groundY - 6, width: 120, height: 20 });
            puddles.push({ type: 'spring', x: 840, y: groundY - 6, width: 100, height: 20 });

            // Floating battle platforms
            platforms.push({ x: 450, y: 320, width: 120, height: 20 });
            platforms.push({ x: 750, y: 320, width: 120, height: 20 });

            collectibles.push({ type: 'heart', x: 500, y: 280 });
            collectibles.push({ type: 'shield', x: 800, y: 280 });

            return {
                id: num,
                name: `${biome.name} - Boss Finale`,
                biome: biome,
                width: levelWidth,
                spawn: { x: 80, y: groundY - 60 },
                goal: { x: 1200, y: groundY - 80 },
                isBoss: true,
                platforms,
                puddles,
                collectibles,
                hazards
            };
        }

        // Procedural level progression for stages 1 to 9 of each biome
        while (currentX < levelWidth - 350) {
            const gap = 80 + Math.random() * (60 + stageInBiome * 12);
            const platWidth = 140 + Math.random() * 120;
            const elevation = groundY - Math.floor(Math.random() * 3) * 50;

            platforms.push({ x: currentX, y: elevation, width: platWidth, height: 80 });

            // Add Puddle with biome-specific flavor
            let puddleType = 'water';
            if (biomeIndex === 1) puddleType = Math.random() > 0.4 ? 'mud' : 'water';
            else if (biomeIndex === 2) puddleType = Math.random() > 0.5 ? 'electric' : 'spring';
            else if (biomeIndex === 3) puddleType = Math.random() > 0.5 ? 'bubble' : 'portal';
            else if (biomeIndex === 4) puddleType = Math.random() > 0.4 ? 'ice' : 'spring';

            if (platWidth > 120) {
                puddles.push({
                    type: puddleType,
                    x: currentX + 20,
                    y: elevation - 6,
                    width: platWidth - 40,
                    height: 20
                });
            }

            // Add Collectibles
            if (Math.random() > 0.3) {
                collectibles.push({
                    type: Math.random() > 0.7 ? 'pearl' : 'coin',
                    x: currentX + platWidth / 2,
                    y: elevation - 50
                });
            }

            // Add Hazard Enemies
            if (Math.random() > 0.5 && stageInBiome > 2) {
                if (biomeIndex === 2) {
                    hazards.push(new StormBeetle(currentX + 10, elevation - 24, platWidth - 30));
                } else if (biomeIndex === 4) {
                    hazards.push(new ZapCloud(currentX + 20, elevation - 110, platWidth));
                } else {
                    hazards.push(new RainSnail(currentX + 10, elevation - 20, platWidth - 30));
                }
            }

            currentX += platWidth + gap;
        }

        // Add 3 Star Collectibles
        collectibles.push({ type: 'star', x: levelWidth * 0.3, y: groundY - 120 });
        collectibles.push({ type: 'star', x: levelWidth * 0.6, y: groundY - 140 });
        collectibles.push({ type: 'star', x: levelWidth * 0.85, y: groundY - 130 });

        // Goal Platform & Exit Flag
        platforms.push({ x: levelWidth - 300, y: groundY, width: 300, height: 100 });
        puddles.push({ type: 'water', x: levelWidth - 250, y: groundY - 6, width: 140, height: 20 });

        return {
            id: num,
            name: `${biome.name} - Stage ${stageInBiome}`,
            biome: biome,
            width: levelWidth,
            spawn: { x: 80, y: groundY - 60 },
            goal: { x: levelWidth - 120, y: groundY - 80 },
            isBoss: false,
            platforms,
            puddles,
            collectibles,
            hazards
        };
    },

    // Endless Mode Generator: Builds dynamic infinite chunks
    generateEndlessChunk(chunkIndex, startX) {
        const platforms = [];
        const puddles = [];
        const collectibles = [];
        const hazards = [];

        const chunkWidth = 1800;
        const groundY = 460;
        let currentX = startX;

        const difficulty = Math.min(10, Math.floor(chunkIndex / 2) + 1);

        while (currentX < startX + chunkWidth) {
            const gap = 90 + Math.min(140, difficulty * 12) + Math.random() * 40;
            const platWidth = Math.max(100, 200 - difficulty * 8) + Math.random() * 60;
            const elevation = groundY - Math.floor(Math.random() * 3) * 60;

            platforms.push({ x: currentX, y: elevation, width: platWidth, height: 80 });

            // Random puddle variety
            const types = ['water', 'spring', 'mud', 'ice', 'bubble', 'electric'];
            const chosenType = types[Math.floor(Math.random() * types.length)];

            puddles.push({
                type: chosenType,
                x: currentX + 15,
                y: elevation - 6,
                width: platWidth - 30,
                height: 20
            });

            // Coin arcs
            for (let c = 0; c < 3; c++) {
                collectibles.push({
                    type: Math.random() > 0.85 ? 'pearl' : 'coin',
                    x: currentX + 30 + c * 35,
                    y: elevation - 40 - Math.sin((c / 2) * Math.PI) * 30
                });
            }

            // Powerup spawning
            if (Math.random() > 0.8) {
                const powers = ['shield', 'spring_boots', 'magnet'];
                collectibles.push({
                    type: powers[Math.floor(Math.random() * powers.length)],
                    x: currentX + platWidth / 2,
                    y: elevation - 70
                });
            }

            // Hazard spawning
            if (Math.random() > 0.55 && difficulty > 2) {
                hazards.push(new RainSnail(currentX + 10, elevation - 20, platWidth - 30));
            }

            currentX += platWidth + gap;
        }

        return {
            platforms,
            puddles,
            collectibles,
            hazards,
            nextStartX: currentX
        };
    },

    // Instantiates active game objects from plain level data
    parseLevelData(levelData) {
        const puddleObjects = [];
        const portalPairs = [];

        for (const p of levelData.puddles) {
            let puddle;
            switch (p.type) {
                case 'mud':
                    puddle = new MudPuddle(p.x, p.y, p.width, p.height);
                    break;
                case 'spring':
                    puddle = new SpringPuddle(p.x, p.y, p.width, p.height);
                    break;
                case 'ice':
                    puddle = new IcePuddle(p.x, p.y, p.width, p.height);
                    break;
                case 'bubble':
                    puddle = new BubblePuddle(p.x, p.y, p.width, p.height);
                    break;
                case 'acid':
                    puddle = new AcidPuddle(p.x, p.y, p.width, p.height);
                    break;
                case 'portal':
                    puddle = new PortalPuddle(p.x, p.y, p.width, p.height);
                    portalPairs.push(puddle);
                    break;
                case 'electric':
                    puddle = new ElectricPuddle(p.x, p.y, p.width, p.height);
                    break;
                case 'water':
                default:
                    puddle = new BasePuddle(p.x, p.y, p.width, p.height, 'water');
                    break;
            }
            puddleObjects.push(puddle);
        }

        // Link portal pairs
        if (portalPairs.length >= 2) {
            for (let i = 0; i < portalPairs.length - 1; i += 2) {
                portalPairs[i].targetPuddle = portalPairs[i + 1];
                portalPairs[i + 1].targetPuddle = portalPairs[i];
            }
        }

        const collectibleObjects = levelData.collectibles.map(c => new Collectible(c.x, c.y, c.type));

        let bossObject = null;
        if (levelData.isBoss) {
            bossObject = new KingNimbusBoss(650, 160);
        }

        return {
            platforms: levelData.platforms,
            puddles: puddleObjects,
            collectibles: collectibleObjects,
            hazards: levelData.hazards || [],
            boss: bossObject,
            spawn: levelData.spawn,
            goal: levelData.goal,
            biome: levelData.biome,
            width: levelData.width,
            name: levelData.name
        };
    }
};

window.LevelManager = LevelManager;

if (typeof global !== 'undefined') {
    global.LevelManager = LevelManager;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = LevelManager;
}
