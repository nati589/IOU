/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderWidth: {
      '3': '2.5px',
    },
    colors: {
      'text-main': '#02115B',
      'back-main': '#ccc', 
      'primary': '#02115B',
      'secondary': '#4B1EA2',
      'accent': '#EFF4FA',
      'success': '#009487',
      'error': '#E10031',
      'high': '#FB7185',
      'mid': '#F59E0B',
      'low': '#2DD4BF',
      'black': '#000', 
      'white': '#fff',
    },
    extend: {},
  },
  plugins: [],
};
