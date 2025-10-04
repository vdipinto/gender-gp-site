import js from "@eslint/js";
import pluginImport from "eslint-plugin-import";

export default [
  {
    files: ["../wp-content/themes/**/*.js"],
    ignores: ["**/node_modules/**", "**/dist/**"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        wp: "readonly",
        jQuery: "readonly",
      },
    },
    plugins: { import: pluginImport },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          alphabetize: { order: "asc", caseInsensitive: true }
        }
      ]
    },
  },
];
