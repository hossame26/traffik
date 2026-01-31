/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- AJOUTE CETTE LIGNE ICI
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        dark: {
          900: '#050505',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}