/**
 * Puddle Jumper - Accessibility & Advanced Input Manager
 * Handles High-Contrast graphics, Reduced Motion filters, Screen-reader announcements,
 * Custom Keybinding mapper, and Gamepad Haptic Vibration Feedback.
 */

class AccessibilityManager {
    constructor() {
        this.highContrast = false;
        this.reducedMotion = false;
        this.announcements = [];
        this.keybindings = {
            moveLeft: ['ArrowLeft', 'KeyA'],
            moveRight: ['ArrowRight', 'KeyD'],
            jump: ['Space', 'ArrowUp', 'KeyW'],
            glide: ['ShiftLeft', 'ShiftRight'],
            stomp: ['ArrowDown', 'KeyS'],
            pause: ['KeyP', 'Escape']
        };
        this.hapticEnabled = true;
    }

    setHighContrast(enabled) {
        this.highContrast = Boolean(enabled);
        if (typeof document !== 'undefined') {
            if (this.highContrast) {
                document.body.classList.add('high-contrast');
            } else {
                document.body.classList.remove('high-contrast');
            }
        }
    }

    setReducedMotion(enabled) {
        this.reducedMotion = Boolean(enabled);
    }

    setHapticEnabled(enabled) {
        this.hapticEnabled = Boolean(enabled);
    }

    remapKey(action, keyCode) {
        if (this.keybindings[action]) {
            this.keybindings[action] = [keyCode];
            return true;
        }
        return false;
    }

    isActionActive(action, pressedKeys) {
        if (!this.keybindings[action] || !pressedKeys) return false;
        return this.keybindings[action].some(k => Boolean(pressedKeys[k]));
    }

    announce(message) {
        this.announcements.push({ message, timestamp: Date.now() });
        if (typeof document !== 'undefined') {
            const liveRegion = document.getElementById('srLiveRegion');
            if (liveRegion) {
                liveRegion.innerText = message;
            }
        }
    }

    triggerHaptic(duration = 100, strongMagnitude = 0.5, weakMagnitude = 0.5) {
        if (!this.hapticEnabled || typeof navigator === 'undefined' || !navigator.getGamepads) {
            return false;
        }
        const gamepads = navigator.getGamepads();
        if (gamepads && gamepads[0] && gamepads[0].vibrationActuator) {
            gamepads[0].vibrationActuator.playEffect('dual-rumble', {
                startDelay: 0,
                duration: duration,
                weakMagnitude: weakMagnitude,
                strongMagnitude: strongMagnitude
            }).catch(() => {});
            return true;
        }
        return false;
    }
}

// Exports
if (typeof window !== 'undefined') {
    window.AccessibilityManager = AccessibilityManager;
    window.a11y = new AccessibilityManager();
}
if (typeof global !== 'undefined') {
    global.AccessibilityManager = AccessibilityManager;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AccessibilityManager;
}
