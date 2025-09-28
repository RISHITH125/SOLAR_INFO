/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Audiowide: ['Audiowide', 'sans-serif'],
        Rajdhani: ['Rajdhani', 'sans-serif'],
        ZenDots: ['ZenDots', 'sans-serif'],
      }

    },
  },
  plugins: [],
}

