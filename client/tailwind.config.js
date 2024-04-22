/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "calculator": "600px"
      },
      height: {
        "calculator": "500px"
      }
    },
  },
  plugins: [],
}