/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/components/**/*.jsx", "./src/views/**/*.jsx" ,"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgWhite: '#FDFDFD',
        darkGreen: '#2C6E49',
        lightGreen: '#97C680',
        lightPink: '#FFC9B9'
      },
      fontFamily: {
        'paragraphy': ['Paragraphy', 'sans-serif'],
        'flighty': ['Flighty', 'sans-serif'],
        'Manifestly': ['Manifestly', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
        'RobotoLight': ['RobotoLight', 'sans-serif']
      },
      flexGrow:{
        2: '2'
      },
      margin:{
        '0-auto': '0 auto'
      }
    },
  },
  plugins: [],
}

