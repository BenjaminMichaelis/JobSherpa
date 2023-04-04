module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns: ["wwwroot", "node_modules", "/**/*.g.ts", "**/*.d.ts"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "vue/valid-v-slot": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "vue/no-v-text-v-html-on-component": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    'vue/multi-word-component-names': 'off',
    "no-undef": "off", // Redundant with Typescript

  }
};
