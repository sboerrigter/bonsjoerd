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
    },
  },
  plugins: [],
};
