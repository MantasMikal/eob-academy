const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '475px',
      xxl: '1400px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        primary: {
          light: '#ee1a93',
          DEFAULT: '#c8167c',
          dark: '#bb1473'
        },
        secondary: '#e82569',
        tertiary: {
          DEFAULT: '#fbc87c',
          dark: '#f9c876'
        },
        backgroundSecondary: '#F3F3F3'
      },
      aspectRatio: {
        landscape: '351 / 151',
        slim: '5 / 2'
      },
      scale: {
        101: '1.01',
        98: '0.98'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    }
  ]
}
