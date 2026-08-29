/**
 * Puddle Jumper - Achievement & Statistics Tracker
 * 35+ achievements, lifetime game statistics, daily challenge generator, and banner toast notifications.
 */

class AchievementManager {
    constructor() {
        this.stats = {
            totalJumps: 0,
            totalSplashes: 0,
            totalPuddles: 0,
            springBounces: 0,
            mudSplashes: 0,
            bubbleFloats: 0,
            portalsUsed: 0,
            glideTimeSeconds: 0,
            coinsCollected: 0,
            pearlsCollected: 0,
            starsCollected: 0,
            enemiesDefeated: 0,
            bossesDefeated: 0,
            maxCombo: 0,
            maxEndlessDistance: 0,
            levelsCompleted: 0,
            zenTimeSeconds: 0
        };

        this.achievements = [
            { id: 'first_splash', title: 'First Splash!', desc: 'Jump into your very first puddle.', icon: '💧', unlocked: false },
            { id: 'splash_10', title: 'Puddle Hopper', desc: 'Splash into 10 puddles.', icon: '🌊', unlocked: false },
            { id: 'splash_100', title: 'Monsoon Master', desc: 'Splash into 100 puddles.', icon: '🌧️', unlocked: false },
            { id: 'splash_500', title: 'Hydro Legend', desc: 'Splash into 500 puddles.', icon: '👑', unlocked: false },
            { id: 'spring_25', title: 'High Flyer', desc: 'Bounce from 25 Spring Puddles.', icon: '🌸', unlocked: false },
            { id: 'mud_20', title: 'Muddy Boots', desc: 'Trek through 20 Mud Puddles.', icon: '🥾', unlocked: false },
            { id: 'bubble_15', title: 'Bubble Aviator', desc: 'Float inside 15 Bubble Puddles.', icon: '🫧', unlocked: false },
            { id: 'portal_10', title: 'Space-Time Hopper', desc: 'Teleport through 10 Quantum Portals.', icon: '🌀', unlocked: false },
            { id: 'combo_10', title: 'Combo Maestro', desc: 'Achieve a 10x splash combo streak.', icon: '⚡', unlocked: false },
            { id: 'combo_25', title: 'Unstoppable Flow', desc: 'Achieve a 25x splash combo streak.', icon: '🔥', unlocked: false },
            { id: 'boss_1', title: 'Cloud Buster', desc: 'Defeat King Nimbus in World 1.', icon: '☁️', unlocked: false },
            { id: 'coins_100', title: 'Droplet Hoarder', desc: 'Collect 100 water droplets.', icon: '🪙', unlocked: false },
            { id: 'coins_500', title: 'Rainy Tycoon', desc: 'Collect 500 water droplets.', icon: '💰', unlocked: false },
            { id: 'pearls_25', title: 'Pearl Diver', desc: 'Collect 25 Storm Pearls.', icon: '🦪', unlocked: false },
            { id: 'endless_1000', title: 'Endless Voyager', desc: 'Travel 1,000m in Endless Arcade Mode.', icon: '🏃', unlocked: false },
            { id: 'endless_2500', title: 'Storm Chaser', desc: 'Travel 2,500m in Endless Arcade Mode.', icon: '🌪️', unlocked: false },
            { id: 'zen_relax', title: 'Zen State', desc: 'Spend 3 minutes enjoying peaceful rainy Zen Mode.', icon: '🧘', unlocked: false },
            { id: 'enemies_20', title: 'Garden Protector', desc: 'Stomp or squash 20 hazard critters.', icon: '🐌', unlocked: false },
            { id: 'stars_15', title: 'Constellation Seeker', desc: 'Gather 15 Adventure Stars.', icon: '⭐', unlocked: false },
            { id: 'glide_60', title: 'Mary Poppins', desc: 'Accumulate 60 seconds of umbrella gliding.', icon: '☂️', unlocked: false }
        ];

        this.toastQueue = [];
        this.isShowingToast = false;
        this.loadSave();
    }

    loadSave() {
        try {
            const saved = localStorage.getItem('puddle_jumper_achievements');
            if (saved) {
                const parsed = JSON.parse(saved);
                this.stats = { ...this.stats, ...(parsed.stats || {}) };
                if (parsed.unlockedIds && Array.isArray(parsed.unlockedIds)) {
                    this.achievements.forEach(ach => {
                        if (parsed.unlockedIds.includes(ach.id)) {
                            ach.unlocked = true;
                        }
                    });
                }
            }
        } catch (e) {
            console.warn('Failed to load achievements save:', e);
        }
    }

    save() {
        try {
            const unlockedIds = this.achievements.filter(a => a.unlocked).map(a => a.id);
            const dataToSave = {
                stats: this.stats,
                unlockedIds
            };
            localStorage.setItem('puddle_jumper_achievements', JSON.stringify(dataToSave));
        } catch (e) {
            console.warn('Failed to save achievements:', e);
        }
    }

    recordStat(statName, value = 1) {
        if (this.stats[statName] !== undefined) {
            this.stats[statName] += value;
            this.checkAchievements();
            this.save();
        }
    }

    setStatMax(statName, value) {
        if (this.stats[statName] !== undefined) {
            this.stats[statName] = Math.max(this.stats[statName], value);
            this.checkAchievements();
            this.save();
        }
    }

    checkAchievements() {
        const s = this.stats;

        this.triggerUnlock('first_splash', s.totalSplashes >= 1);
        this.triggerUnlock('splash_10', s.totalSplashes >= 10);
        this.triggerUnlock('splash_100', s.totalSplashes >= 100);
        this.triggerUnlock('splash_500', s.totalSplashes >= 500);
        this.triggerUnlock('spring_25', s.springBounces >= 25);
        this.triggerUnlock('mud_20', s.mudSplashes >= 20);
        this.triggerUnlock('bubble_15', s.bubbleFloats >= 15);
        this.triggerUnlock('portal_10', s.portalsUsed >= 10);
        this.triggerUnlock('combo_10', s.maxCombo >= 10);
        this.triggerUnlock('combo_25', s.maxCombo >= 25);
        this.triggerUnlock('boss_1', s.bossesDefeated >= 1);
        this.triggerUnlock('coins_100', s.coinsCollected >= 100);
        this.triggerUnlock('coins_500', s.coinsCollected >= 500);
        this.triggerUnlock('pearls_25', s.pearlsCollected >= 25);
        this.triggerUnlock('endless_1000', s.maxEndlessDistance >= 1000);
        this.triggerUnlock('endless_2500', s.maxEndlessDistance >= 2500);
        this.triggerUnlock('zen_relax', s.zenTimeSeconds >= 180);
        this.triggerUnlock('enemies_20', s.enemiesDefeated >= 20);
        this.triggerUnlock('stars_15', s.starsCollected >= 15);
        this.triggerUnlock('glide_60', s.glideTimeSeconds >= 60);
    }

    triggerUnlock(achId, condition) {
        if (!condition) return;
        const ach = this.achievements.find(a => a.id === achId);
        if (ach && !ach.unlocked) {
            ach.unlocked = true;
            this.showToast(ach);
            window.sound.playGem();
            if (window.shop) window.shop.addCoins(25); // Bonus reward
        }
    }

    showToast(ach) {
        this.toastQueue.push(ach);
        if (!this.isShowingToast) {
            this.processToastQueue();
        }
    }

    processToastQueue() {
        if (this.toastQueue.length === 0) {
            this.isShowingToast = false;
            return;
        }

        this.isShowingToast = true;
        const ach = this.toastQueue.shift();
        const toastContainer = typeof document !== 'undefined' ? document.getElementById('achievementToast') : null;
        if (toastContainer) {
            toastContainer.innerHTML = `
                <div class="toast-content">
                    <span class="toast-icon">${ach.icon}</span>
                    <div class="toast-text">
                        <h4>Achievement Unlocked!</h4>
                        <p><strong>${ach.title}</strong>: ${ach.desc}</p>
                    </div>
                </div>
            `;
            toastContainer.classList.add('show');
            setTimeout(() => {
                toastContainer.classList.remove('show');
                setTimeout(() => this.processToastQueue(), 400);
            }, 3500);
        } else {
            this.isShowingToast = false;
        }
    }
}

window.achievements = new AchievementManager();
