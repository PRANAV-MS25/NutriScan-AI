/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0d0f12',
          card: '#13161c',
          emerald: '#10b981',
          teal: '#14b8a6',
        }
      }
    },
  },
  plugins: [],
}