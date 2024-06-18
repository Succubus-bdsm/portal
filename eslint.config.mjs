import pluginAstro from "eslint-plugin-astro";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  pluginAstro.configs.recommended,
  pluginPrettier.configs.recommended,
];
