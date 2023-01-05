module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  useTabs: false,
  tailwindConfig: './packages/configs/tailwind.config.js',
  plugins: [require('prettier-plugin-tailwindcss')],
  vueIndentScriptAndStyle: true,
  bracketSpacing: true,
};
