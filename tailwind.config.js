/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      inter: ["inter", "sans-serif"],
    },
    colors: {
      white: "#ffffff",
      green: "#c5f82a",
      gray: {
        700: "#333333",
        800: "#1f1f1f",
        900: "#171717",
      },
    },
    extend: {},
  },
  plugins: [],
};
