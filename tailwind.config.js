const theme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "white",
      transparent: "transparent",
      gray: colors.gray,
      green: {
        500: "#009999",
        600: "#006666",
        700: "#004D4D",
      },
      yellow: {
        50: "#FEFAF1",
        300: "#FFE6B3",
        500: "#FFC34D",
        600: "#E6A117",
      },
    },
    extend: {
      spacing: {
        7.5: "1.875rem", // 30px
        15: "3.75rem", // 60px
        30: "7.5rem", // 120px
        45: "11.25rem", // 180px
      },
      animation: {
        rock: "rock 5s ease-out 1",
      },
      keyframes: {
        rock: {
          "0%": { transform: "translate(5px, 0) rotate(10deg)" },
          "10%": { transform: "translate(-5px, 0) rotate(-10deg)" },
          "20%": { transform: "translate(4px, 0) rotate(8deg)" },
          "30%": { transform: "translate(-4px, 0) rotate(-8deg)" },
          "40%": { transform: "translate(3px, 0) rotate(6deg)" },
          "50%": { transform: "translate(-3px, 0) rotate(-6deg)" },
          "60%": { transform: "translate(2px, 0) rotate(4deg)" },
          "70%": { transform: "translate(-2px, 0) rotate(-4deg)" },
          "80%": { transform: "translate(1px, 0) rotate(2deg)" },
          "90%": { transform: "translate(-1px, 0) rotate(-2deg)" },
          "100%": { transform: "translate(0, 0) rorate(0deg)" },
        },
      },
    },
    screens: {
      "2xs": "360px",
      xs: "480px",
      ...theme.screens,
    },
  },
  plugins: [],
};
