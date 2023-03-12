// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

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
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
