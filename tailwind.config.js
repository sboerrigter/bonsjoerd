/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: "#009999",
          600: "#006666",
          700: "#004D4D",
        },
        yellow: {
          50: "#FEFAF1",
          500: "#FFC34D",
        },
      },
      spacing: {
        15: "3.75rem",
        30: "7.5rem",
        45: "11.25rem",
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
  },
  plugins: [],
};
