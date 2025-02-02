/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E65D24',    // Orange from image
        secondary: '#F2A649',  // Golden tone
        accent: '#4A6741',     // Sage green
        background: '#FDF6E9', // Light cream background
      },
      fontFamily: {
        bright: ['bright'],
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};