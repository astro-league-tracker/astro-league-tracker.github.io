// @ts-check
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
    // This must be the last item in this array. It will disable all rules that conflict with Prettier.
    eslintPluginPrettierRecommended,
);
