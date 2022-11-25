module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-essential', 'standard-with-typescript', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./packages/ui/tsconfig.json'],
  },
  plugins: ['vue'],
  rules: {},
};
