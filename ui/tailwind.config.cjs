/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#BE6AFF',
        'primary-dark': '#8F20E4',
        lbgreen: '#16A34A', // lb stands for Lyrebird
      },
    },
  },
  plugins: [],
};
