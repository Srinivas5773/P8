/**
 * Unit Tests for Fluid Physics, Spring-Mass Wave Solver, and Kinematics
 */

describe('Physics & Fluid Dynamics Engine', () => {
    let FluidPuddleSurface, MathUtils, ParticleSystem, TrajectoryProjector;

    beforeAll(() => {
        // Setup minimal browser globals
        global.window = {};
        require('../js/physics.js');
        FluidPuddleSurface = window.FluidPuddleSurface;
        MathUtils = window.MathUtils;
        ParticleSystem = window.ParticleSystem;
        TrajectoryProjector = window.TrajectoryProjector;
    });

    test('MathUtils.clamp constrains values correctly', () => {
        expect(MathUtils.clamp(15, 0, 10)).toBe(10);
        expect(MathUtils.clamp(-5, 0, 10)).toBe(0);
        expect(MathUtils.clamp(5, 0, 10)).toBe(5);
    });

    test('MathUtils.lerp performs linear interpolation', () => {
        expect(MathUtils.lerp(0, 100, 0.5)).toBe(50);
        expect(MathUtils.lerp(10, 20, 0.25)).toBe(12.5);
    });

    test('MathUtils.checkAABB detects bounding box collisions', () => {
        const boxA = { x: 10, y: 10, width: 20, height: 20 };
        const boxB = { x: 25, y: 25, width: 20, height: 20 };
        const boxC = { x: 50, y: 50, width: 20, height: 20 };

        expect(MathUtils.checkAABB(boxA, boxB)).toBe(true);
        expect(MathUtils.checkAABB(boxA, boxC)).toBe(false);
    });

    test('MathUtils.dist computes Euclidean distance accurately', () => {
        expect(MathUtils.dist(0, 0, 3, 4)).toBe(5);
        expect(MathUtils.dist(10, 10, 10, 10)).toBe(0);
    });

    test('FluidPuddleSurface initializes with correct number of spring columns', () => {
        const puddleSurface = new FluidPuddleSurface(100, 400, 120, 24, 25, 'water');
        expect(puddleSurface.columns.length).toBe(25);
        expect(puddleSurface.columns[0].targetHeight).toBe(400);
    });

    test('FluidPuddleSurface.splash creates wave displacement on columns', () => {
        const puddleSurface = new FluidPuddleSurface(0, 400, 100, 24, 10, 'water');
        puddleSurface.splash(50, 10);
        expect(puddleSurface.columns[4].speed).toBe(10);
        expect(puddleSurface.columns[5].speed).toBe(5);

        puddleSurface.update();
        expect(puddleSurface.columns[4].height).not.toBe(400);
    });

    test('ParticleSystem emits splashes and ripples', () => {
        const ps = new ParticleSystem();
        ps.emitSplash(100, 100, 10, '#38bdf8', 1.0);
        expect(ps.particles.length).toBe(10);
        expect(ps.ripples.length).toBe(1);

        ps.update(800, 600, 0.2);
        expect(ps.ripples[0].radius).toBeGreaterThan(2);
    });

    test('TrajectoryProjector updates animation offset', () => {
        const tp = new TrajectoryProjector();
        const initial = tp.animOffset;
        tp.update();
        expect(tp.animOffset).toBeGreaterThan(initial);
    });
});
