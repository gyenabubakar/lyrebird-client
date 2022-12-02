const { tailwind } = require("@lyrebird/configs");

/** @type {import("tailwindcss").Config} */
module.exports = {
  ...tailwind,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ]
};
