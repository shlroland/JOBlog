// @ts-nocheck
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@roland/tailwindcss-config")],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
      },
      zIndex: {
        1: "1",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            code: {
              backgroundColor: theme("colors.neutral.100"),
              borderRadius: theme("borderRadius.sm"),
              paddingTop: theme("padding[1]"),
              paddingRight: theme("padding[1.5]"),
              paddingBottom: theme("padding[1]"),
              paddingLeft: theme("padding[1.5]"),
            },
            "code::before": {
              content: "normal",
            },
            "code::after": {
              content: "normal",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
  ],
}
