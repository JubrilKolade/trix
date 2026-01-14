import { ConfigurationBuilder } from "../core/config-builder.js";
import type { ProjectConfig } from "../types/config.js";

/**
 * Generate a package.json object for a given ProjectConfig by delegating
 * to the existing ConfigurationBuilder. This keeps logic centralized and
 * avoids duplication.
 */
export async function generatePackageJson(config: ProjectConfig) {
  const builder = new ConfigurationBuilder();
  const resolved = await builder.buildConfiguration(config);
  return resolved.mergedPackageJson;
}
