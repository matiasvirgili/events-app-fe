module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript/base",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/no-loop-func": "off",
    "@typescript-eslint/no-redeclare": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/space-infix-ops": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "prefer-destructuring": "off",
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "max-classes-per-file": "off",
    "no-param-reassign": "off",
    "no-restricted-syntax": "off",
    "no-continue": "off",
    "max-len": ["error", 120],
    semi: ["error", "never"],
    "@typescript-eslint/semi": ["error", "never"],
    "no-console": "off",
    "import/no-cycle": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "import/no-extraneous-dependencies": "off",
    "no-case-declarations": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "import/extensions": "off",
    "import/no-named-as-default": "off",
    "no-multi-assign": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "consistent-return": "off",
    "func-names": "off",
  },
};