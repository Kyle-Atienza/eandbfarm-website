/** @type {import('tailwindcss').Config} */
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
  },
  plugins: [],
};
