/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "calculator": "550px",
        "button": "112px",
        "display": "374px"
      },
      height: {
        "calculator": "430px",
        "button": "70px",
        "display": "70px"
      }
    },
  },
  plugins: [],
}