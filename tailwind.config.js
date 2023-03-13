/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textCl: '#182C61',
        descCl: 'rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}
