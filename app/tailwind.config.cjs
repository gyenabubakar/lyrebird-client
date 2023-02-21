/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    '../ui/**/*.{js,vue,ts}',
  ],
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
