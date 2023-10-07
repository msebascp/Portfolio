const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-dark-1": "#2a2a2a",
        "blue-dark-2": "#202020",
        "color-secondary-1": "#6D5D6E",
        "color-secondary-2": "#F4EEE0"
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-balance": {
          "text-wrap": "balance"
        }
      });
    })
  ]
};
