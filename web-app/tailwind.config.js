/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B8574",
        secondary: "#7BE07E",
        terciary: "#F5F5F5",
        lightened:"#5ab6a1",
        error: "#BE185D",
      },
    },
  },
  plugins: [],
};
