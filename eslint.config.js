import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginSonarjs from "eslint-plugin-sonarjs";
import pluginI18next from "eslint-plugin-i18next";

export default [
  {
    // Ignore patterns to skip certain files and directories
    ignorePatterns: [
      "**/akamai_cache/**",
      "webpack*.js",
      "**/dist/**",
      "**/node_modules/**",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/function-component-definition": "off",
      "react/require-default-props": "off",
      "react/forbid-prop-types": "off",
      "object-curly-newline": "off",
      "react/jsx-props-no-spreading": "off",
      "arrow-body-style": "off",
      "react/jsx-one-expression-per-line": "off",
      "no-restricted-syntax": "off",
      "react/no-danger": "off",
      "no-underscore-dangle": "off",
      "max-len": [
        "error",
        {
          code: 120,
        },
      ],
      "import/no-unresolved": ["error", { ignore: ["^skyplus-design-system-app/"] }],
      "no-console": "error",
    },
  },
  // Extend the recommended configurations
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginSonarjs.configs.recommended,
  pluginI18next.configs.recommended,
];
