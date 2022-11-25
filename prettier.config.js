module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 80,
  useTabs: false,
  tailwindConfig: './packages/configs/tailwind.config.js',
  plugins: [require('prettier-plugin-tailwindcss')],
  vueIndentScriptAndStyle: true,
};
