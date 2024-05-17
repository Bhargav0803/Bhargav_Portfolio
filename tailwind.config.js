/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#276880',
        'secondary': '',
        'light': 'F5F5F1',
        'dark': '#221F1F',
      },
      fontFamily: {
        body: ['Anton']
      }
    },
  },
  plugins: [],
}

