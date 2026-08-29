/**
 * Unit Tests for Player Controller, 8 Puddle Varieties, and Hazards
 */

describe('Entity State Machine & Puddle Interactions', () => {
    let Player, BasePuddle, SpringPuddle, MudPuddle, BubblePuddle, Collectible, RainSnail;

    beforeAll(() => {
        global.window = {
            sound: {
                playJump: jest.fn(),
                playBounce: jest.fn(),
                playSplash: jest.fn(),
                playBubblePop: jest.fn(),
                playCoin: jest.fn(),
                playGem: jest.fn(),
                playPowerup: jest.fn(),
                playHurt: jest.fn(),
                playClick: jest.fn()
            }
        };

        require('../js/physics.js');
        require('../js/entities.js');

        Player = window.Player;
        BasePuddle = window.BasePuddle;
        SpringPuddle = window.SpringPuddle;
        MudPuddle = window.MudPuddle;
        BubblePuddle = window.BubblePuddle;
        Collectible = window.Collectible;
        RainSnail = window.RainSnail;
    });

    test('Player initializes with full health and default state', () => {
        const player = new Player(100, 200);
        expect(player.health).toBe(3);
        expect(player.isGrounded).toBe(false);
        expect(player.isDead).toBe(false);
    });

    test('Player charge accumulation and release applies vertical launch velocity', () => {
        const player = new Player(100, 200);
        player.isGrounded = true;
        player.startCharge();
        expect(player.isCharging).toBe(true);

        player.chargeTime = 30;
        player.releaseJump(null);

        expect(player.isCharging).toBe(false);
        expect(player.isGrounded).toBe(false);
        expect(player.vy).toBeLessThan(-10);
    });

    test('Player takes damage and decrements health', () => {
        const player = new Player(100, 200);
        player.takeDamage(1, 1, null);
        expect(player.health).toBe(2);
        expect(player.invulnerableTimer).toBeGreaterThan(0);
    });

    test('Shield absorbs damage without losing health', () => {
        const player = new Player(100, 200);
        player.applyPowerup('shield', 300);
        expect(player.shield).toBe(true);

        player.takeDamage(1, 1, null);
        expect(player.health).toBe(3);
        expect(player.shield).toBe(false);
    });

    test('SpringPuddle has higher bounce multiplier than standard puddle', () => {
        const standard = new BasePuddle(0, 0, 100, 20, 'water');
        const spring = new SpringPuddle(0, 0, 100, 20);
        expect(spring.bounceMult).toBeGreaterThan(standard.bounceMult);
    });

    test('MudPuddle has lower friction than standard puddle', () => {
        const standard = new BasePuddle(0, 0, 100, 20, 'water');
        const mud = new MudPuddle(0, 0, 100, 20);
        expect(mud.friction).toBeLessThan(standard.friction);
    });

    test('BubblePuddle triggers player bubble floating state', () => {
        const player = new Player(100, 200);
        const bubblePuddle = new BubblePuddle(100, 200, 100, 20);
        bubblePuddle.onPlayerInteract(player, null);
        expect(player.isBubbleFloating).toBe(true);
        expect(player.bubbleTimer).toBeGreaterThan(0);
    });

    test('Collectible awards score and marks as collected', () => {
        const player = new Player(50, 50);
        const coin = new Collectible(50, 50, 'coin');
        coin.onCollect(player, null);

        expect(coin.collected).toBe(true);
        expect(player.coins).toBe(1);
        expect(player.score).toBe(50);
    });

    test('RainSnail is defeated when stomped on', () => {
        const player = new Player(100, 80);
        player.vy = 5;
        const snail = new RainSnail(100, 120, 100);
        snail.onCollide(player, null);

        expect(snail.isDead).toBe(true);
        expect(player.vy).toBeLessThan(0);
    });
});
