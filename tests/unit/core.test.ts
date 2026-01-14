import { PACKAGE_MANAGER_CONFIGS, PackageManagerDetector } from '../../src/installers/package-manager.js';

describe('Package Manager', () => {
  test('exports configs', () => {
    expect(PACKAGE_MANAGER_CONFIGS).toBeDefined();
    expect(PACKAGE_MANAGER_CONFIGS.npm).toHaveProperty('install');
  });

  test('detector can return a value', async () => {
    const d = new PackageManagerDetector();
    const available = await d.getAvailable();
    expect(Array.isArray(available)).toBe(true);
  });
});
