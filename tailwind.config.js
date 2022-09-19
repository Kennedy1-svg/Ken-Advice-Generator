/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundColor : {
        'neon-green' : ' hsl(150, 100%, 66%)',
        'grey-blue' : 'hsl(217, 19%, 24%)',
        'dark-grey': 'hsl(218, 23%, 16%)'


      }, 
      textColor  : {
        'light-cyan' : "hsl(193, 38%, 86%)",
        'neon-green' : ' hsl(150, 100%, 66%)'
      }, 
      fontFamily : {
        'manrope' :  'Manrope, sans-serif',
      }
    },
  },
  plugins: [],
}
