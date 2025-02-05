/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        firstColor: '#1d8443',
        secondColor: '#065129',
        thirdColor: '#1d8443',
        fourColor: '#065129',
        btnBorder: '#fff',
        backgroundColor: '#131821'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle,#1d8443 10%,#065129)',
      },
      animation: {
        typing: 'typing 2s steps(30) 1s forwards',
        blinkCaret: 'blinkCaret 0.75s step-end infinite',
        textGlow: 'textGlow 1.5s ease-in-out infinite',
        fadeInLetters: 'fadeInLetters 3s ease-out forwards',
        slideUpText: 'slideUpText 1s ease-out forwards',
        bouncing: 'bouncing 1s ease infinite',
        fadeInOutBounce: 'fadeInOutBounce 2s ease infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blinkCaret: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
          '100%': { borderColor: 'transparent' },
        },
        textGlow: {
          '0%': { textShadow: '0 0 10px #FFC500, 0 0 20px #FFC500' },
          '50%': { textShadow: '0 0 20px #FF6347, 0 0 30px #FF6347' },
          '100%': { textShadow: '0 0 10px #FFC500, 0 0 20px #FFC500' },
        },
        fadeInLetters: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUpText: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bouncing: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInOutBounce: {
          '0%, 100%': { opacity: '0.5', transform: 'translateY(0)' },
          '25%': { opacity: '1', transform: 'translateY(-10px)' },
          '50%': { opacity: '0.5', transform: 'translateY(0)' },
          '75%': { opacity: '1', transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}