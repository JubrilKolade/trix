import fs from 'fs-extra';
import path from 'path';
import type { ProjectConfig } from '../types/config.js';

/**
 * Write a basic trix config file (trix.config.json) into the target cwd.
 * This is intentionally lightweight; templates may opt to add richer config.
 */
export async function generateConfigFile(config: ProjectConfig, cwd = process.cwd()) {
  const out = path.join(cwd, 'trix.config.json');
  await fs.writeJSON(out, config, { spaces: 2 });
  return out;
}
