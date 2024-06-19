module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      spacing: {
        px: '1px',
        '1/2': '50%',
        '3/4': '75%',
        '9/16': '56.25%',
        '1/5': '20%',
        full: '100%',
        screen: '100vw',
        '-px': '-1px',
        '-1/2': '-50%',
        '-3/4': '-75%',
        '-9/16': '-56.25%',
        '-1/5': '-20%',
        '-full': '-100%',
        '-screen': '-100vw'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  
  plugins: [],
}
