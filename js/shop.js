/**
 * Puddle Jumper - Shop, Cosmetics & Economy System
 * Character skins, umbrella gliders, splash particle trails, permanent ability upgrades, and LocalStorage persistence.
 */

class ShopManager {
    constructor() {
        this.coins = 0;
        this.selectedSkin = 'froggy';
        this.selectedUmbrella = 'classic_red';
        this.selectedTrail = 'classic';

        // Unlocks storage
        this.unlockedSkins = ['froggy'];
        this.unlockedUmbrellas = ['classic_red'];
        this.unlockedTrails = ['classic'];

        // Permanent Upgrades
        this.upgrades = {
            maxHealth: 0, // max 2 extra hearts
            springDuration: 0, // max 3 tiers
            magnetRadius: 0, // max 3 tiers
            coinMagnet: 0
        };

        // Inventory catalog
        this.skinCatalog = [
            { id: 'froggy', name: 'Emerald Froggy', price: 0, desc: 'Nimble & loves big rain splashes.' },
            { id: 'duckie', name: 'Rubber Duckie', price: 60, desc: 'Buoyant yellow pal with extra squeak.' },
            { id: 'boots_kid', name: 'Raincoat Kid', price: 140, desc: 'Classic yellow slicker and stompy red boots.' },
            { id: 'raincat', name: 'Rainy Kitty', price: 250, desc: 'Cozy feline with a waterproof rain cape.' },
            { id: 'axolotl', name: 'Axolotl Diver', price: 400, desc: 'Cute amphibious master of marshland ripples.' },
            { id: 'cyber_rover', name: 'Cyber Rover', price: 650, desc: 'Futuristic puddle jumper with neon thrusters.' },
            { id: 'storm_mage', name: 'Storm Sorcerer', price: 900, desc: 'Commands lightning and torrential winds.' }
        ];

        this.umbrellaCatalog = [
            { id: 'classic_red', name: 'Classic Crimson', price: 0, desc: 'Sturdy wind-resistant canopy.' },
            { id: 'rainbow', name: 'Rainbow Swirl', price: 100, desc: 'Dazzling spectral glide trail.' },
            { id: 'bubble_dome', name: 'Bubble Dome', price: 220, desc: 'Spherical transparent glider.' },
            { id: 'cyber_grid', name: 'Cyber Grid', price: 450, desc: 'Holographic matrix parasol.' },
            { id: 'golden_sun', name: 'Golden Sunburst', price: 800, desc: 'Radiant parasol fit for royalty.' }
        ];

        this.trailCatalog = [
            { id: 'classic', name: 'Clear Droplets', price: 0, desc: 'Crisp water splash particles.' },
            { id: 'rainbow', name: 'Rainbow Burst', price: 120, desc: 'Prismatic droplet arcs.' },
            { id: 'firefly', name: 'Firefly Sparkles', price: 240, desc: 'Warm glowing embers.' },
            { id: 'starlight', name: 'Starlight Glitter', price: 480, desc: 'Cosmic violet stardust trail.' }
        ];

        this.upgradeCatalog = [
            { id: 'maxHealth', name: 'Extra Heart Container', maxTier: 2, prices: [200, 500], desc: 'Increases maximum health hearts.' },
            { id: 'springDuration', name: 'Spring Boots Booster', maxTier: 3, prices: [150, 300, 600], desc: 'Extends Spring Boots power-up duration.' },
            { id: 'magnetRadius', name: 'Droplet Magnet Field', maxTier: 3, prices: [120, 250, 500], desc: 'Increases coin suction distance.' }
        ];

        this.loadSave();
    }

    loadSave() {
        try {
            const savedData = localStorage.getItem('puddle_jumper_save');
            if (savedData) {
                const parsed = JSON.parse(savedData);
                this.coins = parsed.coins || 0;
                this.selectedSkin = parsed.selectedSkin || 'froggy';
                this.selectedUmbrella = parsed.selectedUmbrella || 'classic_red';
                this.selectedTrail = parsed.selectedTrail || 'classic';
                this.unlockedSkins = parsed.unlockedSkins || ['froggy'];
                this.unlockedUmbrellas = parsed.unlockedUmbrellas || ['classic_red'];
                this.unlockedTrails = parsed.unlockedTrails || ['classic'];
                this.upgrades = parsed.upgrades || { maxHealth: 0, springDuration: 0, magnetRadius: 0 };
            }
        } catch (e) {
            console.warn('Failed to load save data:', e);
        }
    }

    save() {
        try {
            const dataToSave = {
                coins: this.coins,
                selectedSkin: this.selectedSkin,
                selectedUmbrella: this.selectedUmbrella,
                selectedTrail: this.selectedTrail,
                unlockedSkins: this.unlockedSkins,
                unlockedUmbrellas: this.unlockedUmbrellas,
                unlockedTrails: this.unlockedTrails,
                upgrades: this.upgrades
            };
            localStorage.setItem('puddle_jumper_save', JSON.stringify(dataToSave));
        } catch (e) {
            console.warn('Failed to save data:', e);
        }
    }

    addCoins(amount) {
        this.coins += amount;
        this.save();
    }

    buySkin(skinId) {
        const item = this.skinCatalog.find(s => s.id === skinId);
        if (!item || this.unlockedSkins.includes(skinId)) return false;
        if (this.coins >= item.price) {
            this.coins -= item.price;
            this.unlockedSkins.push(skinId);
            this.selectedSkin = skinId;
            this.save();
            window.sound.playPowerup();
            return true;
        }
        return false;
    }

    equipSkin(skinId) {
        if (this.unlockedSkins.includes(skinId)) {
            this.selectedSkin = skinId;
            this.save();
            window.sound.playClick();
            return true;
        }
        return false;
    }

    buyUmbrella(umbrellaId) {
        const item = this.umbrellaCatalog.find(u => u.id === umbrellaId);
        if (!item || this.unlockedUmbrellas.includes(umbrellaId)) return false;
        if (this.coins >= item.price) {
            this.coins -= item.price;
            this.unlockedUmbrellas.push(umbrellaId);
            this.selectedUmbrella = umbrellaId;
            this.save();
            window.sound.playPowerup();
            return true;
        }
        return false;
    }

    equipUmbrella(umbrellaId) {
        if (this.unlockedUmbrellas.includes(umbrellaId)) {
            this.selectedUmbrella = umbrellaId;
            this.save();
            window.sound.playClick();
            return true;
        }
        return false;
    }

    buyTrail(trailId) {
        const item = this.trailCatalog.find(t => t.id === trailId);
        if (!item || this.unlockedTrails.includes(trailId)) return false;
        if (this.coins >= item.price) {
            this.coins -= item.price;
            this.unlockedTrails.push(trailId);
            this.selectedTrail = trailId;
            this.save();
            window.sound.playPowerup();
            return true;
        }
        return false;
    }

    equipTrail(trailId) {
        if (this.unlockedTrails.includes(trailId)) {
            this.selectedTrail = trailId;
            this.save();
            window.sound.playClick();
            return true;
        }
        return false;
    }

    buyUpgrade(upgradeId) {
        const item = this.upgradeCatalog.find(u => u.id === upgradeId);
        if (!item) return false;
        const curTier = this.upgrades[upgradeId] || 0;
        if (curTier >= item.maxTier) return false;

        const cost = item.prices[curTier];
        if (this.coins >= cost) {
            this.coins -= cost;
            this.upgrades[upgradeId] = curTier + 1;
            this.save();
            window.sound.playGem();
            return true;
        }
        return false;
    }
}

window.shop = new ShopManager();
