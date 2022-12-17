/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./libraries/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      black: "black",
      white: "white",

      primary: "#3c3cff",
      separator: "#E1E1E1"
    },

    extend: {}
  },
  plugins: []
};