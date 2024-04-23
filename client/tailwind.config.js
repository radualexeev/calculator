/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "calculator": "600px",
        "button": "112px",
        "display": "398px"
      },
      height: {
        "calculator": "500px",
        "button": "64px",
        "display": "64px"
      }
    },
  },
  plugins: [],
}