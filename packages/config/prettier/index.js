/** @type {import("prettier").Config} */
const config = {
    arrowParens: "always",
    printWidth: 80,
    singleQuote: false,
    jsxSingleQuote: false,
    semi: false,
    trailingComma: "all",
    tabWidth: 2,
    plugins: [
      "@ianvs/prettier-plugin-sort-imports",
      "prettier-plugin-tailwindcss",
    ],
    tailwindConfig: "./packages/config/tailwindcss",
    importOrder: [
      "^(react/(.*)$)|^(react$)|^(react-native(.*)$)",
      "^(next/(.*)$)|^(next$)",
      "^(expo(.*)$)|^(expo$)",
      "<THIRD_PARTY_MODULES>",
      "",
      "^@roland/(.*)$",
      "",
      "^~/utils/(.*)$",
      "^~/components/(.*)$",
      "^~/styles/(.*)$",
      "^~/(.*)$",
      "^[./]",
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    importOrderBuiltinModulesToTop: true,
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
  };

  module.exports = config;