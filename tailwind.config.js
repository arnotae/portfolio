require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: "'Press Start 2P', sans-serif",
        subtitle: "'Montserrat', sans-serif",
      },
      borderWidth: {
        50: '50px',
      },
      spacing: {
        50: '50px',
      },
      fontSize: {
        xss: '.55rem',
        tiny: '.95rem',
      },
      colors: {
        white: '#FFF',
        carnation: {
          100: '#FFEEEF',
          200: '#FFD5D6',
          300: '#FEBBBE',
          400: '#FE898D',
          500: '#FD565C',
          600: '#E44D53',
          700: '#983437',
          800: '#722729',
          900: '#4C1A1C',
        },
        'dark-blue': {
          100: '#EAE6FB',
          200: '#CABFF5',
          300: '#A999EF',
          400: '#694DE4',
          500: '#2900D8',
          600: '#2500C2',
          700: '#190082',
          800: '#120061',
          900: '#0C0041',
        },
      },
      inset: {
        m1: '-1px',
        m2: '-2px',
        m3: '-3px',
        m45: '-45px',
      },
    },
  },
  variants: {},
  plugins: [
    // eslint-disable-next-line global-require
    require('tailwindcss-theming')({
      strategy: 'data-theme-attribute',
    }),
  ],
};
