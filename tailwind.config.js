/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        newColor: '#928543',
        secondColor: '#990000'
      }
    },
  },
  plugins: [],
}
