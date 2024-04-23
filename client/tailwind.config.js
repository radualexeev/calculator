/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "calculator": "600px",
        "button": "112px"
      },
      height: {
        "calculator": "500px",
        "button": "64px"
      }
    },
  },
  plugins: [],
}