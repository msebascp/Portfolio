const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // DarkTheme
        "dark-primary-1": "#121212",
        "dark-primary-2": "#1E1E1E",
        "dark-hover": "#3498db",
        // LightTheme
        "light-primary-1": "rgb(214 211 209)",
        "light-primary-2": "rgb(231 229 228)",
        "light-hover": "rgb(249 115 22)"
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
