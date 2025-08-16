/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#121212',
        'bg-card': '#1C1C1E',
        'text-light': '#FFFFFF',
        'text-gray': '#8E8E93',
        'border-color': '#3A3A3C',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      }
    },
  },
  plugins: [],
}