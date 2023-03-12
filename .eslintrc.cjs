/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ["roland"], // uses the config in `packages/config/eslint`
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    project: [
      "./tsconfig.json",
      "./packages/*/tsconfig.json",
    ],
  },
  settings: {
    next: {
      rootDir: ["packages/nextjs"],
    },
  },
  rules: {
    "@typescript-eslint/no-unsafe-assignment": 'off'
  }
};

module.exports = config;