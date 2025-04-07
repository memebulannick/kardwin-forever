/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        futuraRegular: ['FuturaRegular', 'sans-serif'],
        futuraMedium: ['FuturaMedium', 'sans-serif'],
        leagueScriptRegular: ['LeagueScriptRegular', 'sans-serif'],
      },
      colors: {
        'primary-pink': '#E8A7B9',
        'primary-bg': '#F7F4EB'
      }
    },
  },
  plugins: [],
}
