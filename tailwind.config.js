/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'almost-white': '#E6E5EA',
        'very-dark-grey': '#18171F',
        'neon-green': '#A4FFAF',
        'dark-grey': '#24232C',
        grey: '#817D92',
        yellow: '#F8CD65',
        orange: '#FB7C58',
        red: '#F64A4A',
      },
      fontSize: {
        'heading-l': [
          '2rem',
          {
            lineHeight: '2.6875rem', // Converted 43px to rem
            fontWeight: 'bold',
          },
        ],
        'heading-m': [
          '1.5rem',
          {
            lineHeight: '1.9375rem', // Converted 31px to rem
            fontWeight: 'bold',
          },
        ],
        body: [
          '1.125rem',
          {
            lineHeight: '1.4375rem',
          },
        ],
        'body-sm': [
          '1 rem',
          {
            lineHeight: '1.3125rem',
          },
        ],
      },
    },
  },
  plugins: [],
}
