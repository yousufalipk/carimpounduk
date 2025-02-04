/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        firstColor: '#5d3eff',
        secondColor: '#5522c9',
        thirdColor: '#38cb89',
        fourColor: '#12b26a',
        btnBorder: '#4e5d78',
        backgroundColor: '#edf1fd'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle,#5522c9e6 10%,#0a1f44e6)',
      },
    },
  },
  plugins: [],
}