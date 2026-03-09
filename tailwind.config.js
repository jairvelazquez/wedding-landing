/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wedding: {
          blush: '#f5e7e0',
          rose: '#a85b62',
          wine: '#5a2630',
          cream: '#fff9f5'
        }
      }
    },
  },
  plugins: [],
}

