/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
}
