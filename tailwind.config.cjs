/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0d0221",
        secondary: "#b8b8d1",
        tertiary: "#1a0b2e",
        "black-100": "#16213e",
        "black-200": "#0f0e17",
        "white-100": "#fffffe",
      },
      boxShadow: {
        card: "0px 20px 100px -10px #7209b7, 0px 10px 50px -5px #3a0ca3",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
