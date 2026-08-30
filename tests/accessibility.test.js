const AccessibilityManager = require('../js/accessibility.js');

describe('Accessibility & Gamepad Input Manager', () => {
    let a11y;

    beforeEach(() => {
        a11y = new AccessibilityManager();
    });

    test('initializes with default settings', () => {
        expect(a11y.highContrast).toBe(false);
        expect(a11y.reducedMotion).toBe(false);
        expect(a11y.hapticEnabled).toBe(true);
    });

    test('toggles high contrast mode', () => {
        a11y.setHighContrast(true);
        expect(a11y.highContrast).toBe(true);

        a11y.setHighContrast(false);
        expect(a11y.highContrast).toBe(false);
    });

    test('toggles reduced motion mode', () => {
        a11y.setReducedMotion(true);
        expect(a11y.reducedMotion).toBe(true);
    });

    test('remaps action keybindings and tests isActionActive', () => {
        expect(a11y.isActionActive('jump', { Space: true })).toBe(true);
        expect(a11y.isActionActive('jump', { KeyZ: true })).toBe(false);

        a11y.remapKey('jump', 'KeyZ');
        expect(a11y.isActionActive('jump', { KeyZ: true })).toBe(true);
        expect(a11y.isActionActive('jump', { Space: true })).toBe(false);
    });

    test('records accessibility announcements', () => {
        a11y.announce('Stage 1 Started');
        expect(a11y.announcements.length).toBe(1);
        expect(a11y.announcements[0].message).toBe('Stage 1 Started');
    });
});
