/**
 * Skin Bundle Manager and Coin Ledger
 * Validates player coin balance, inventory transactions, and unlock statuses.
 */

class SkinBundleManager {
  constructor() {
    this.bundles = {
      neonFrog: { id: 'neonFrog', name: 'Neon Frog Skin', price: 250, unlocked: false },
      goldenBoots: { id: 'goldenBoots', name: 'Golden Rainboots', price: 500, unlocked: false },
      rainCloak: { id: 'rainCloak', name: 'Holographic Cloak', price: 350, unlocked: false }
    };
  }

  purchaseBundle(bundleId, currentCoins) {
    const bundle = this.bundles[bundleId];
    if (!bundle) return { success: false, reason: 'BUNDLE_NOT_FOUND' };
    if (bundle.unlocked) return { success: false, reason: 'ALREADY_OWNED' };
    if (currentCoins < bundle.price) return { success: false, reason: 'INSUFFICIENT_COINS' };

    bundle.unlocked = true;
    return {
      success: true,
      remainingCoins: currentCoins - bundle.price,
      bundle
    };
  }

  listBundles() {
    return Object.values(this.bundles);
  }
}

module.exports = new SkinBundleManager();
