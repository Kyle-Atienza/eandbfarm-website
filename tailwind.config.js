/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F9EACD",
        secondary: "#00BC89",
        tertiary: "#003135",
        base: "#3F6C4B",
      },
    },
    fontFamily: {
      gopher: ["var(--font-gopher)"],
      ranille: ["var(--font-ranille)"],
    },
    content: {
      titleShine: "url('../images/decorations/title-shine.svg')",
    },
    backgroundImage: {
      titleShine: "url('../images/decorations/title-shine.svg')",
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/line-clamp"),
  ],
};
