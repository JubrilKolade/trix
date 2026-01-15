import { generateConfigFile } from '../../src/generators/config-generator.js';
import { generatePackageJson } from '../../src/generators/package-json-generator.js';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('Generators', () => {
  test('generateConfigFile writes trix.config.json', async () => {
    const tmp = path.join(__dirname, 'tmp-config');
    await fs.remove(tmp);
    await fs.mkdirp(tmp);

    const config = { projectType: 'frontend', projectName: 'test-app', typescript: true };
    const out = await generateConfigFile(config as any, tmp);

    expect(await fs.pathExists(out)).toBe(true);
    const content = await fs.readJSON(out);
    expect(content.projectName).toBe('test-app');

    await fs.remove(tmp);
  });

  test('generatePackageJson returns package json object', async () => {
    const config = {
      projectType: 'frontend',
      projectName: 'pkg-test',
      framework: 'react',
      styling: 'vanilla',
      uiComponents: [],
      apiClient: 'fetch',
      stateManagement: 'none',
      auth: 'none',
      typescript: true,
      packageManager: 'npm',
      git: true,
      targetDirectory: './pkg-test',
      routing: false,
      pwa: false,
      testing: false
    } as any;

    const pkg = await generatePackageJson(config);
    expect(pkg).toHaveProperty('name', 'pkg-test');
    expect(pkg).toHaveProperty('dependencies');
  });
});
