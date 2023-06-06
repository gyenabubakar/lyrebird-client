import { defineNuxtConfig } from 'nuxt/config';
import postcss from './postcss.config.cjs';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/global.css'],
  postcss,
  imports: {
    autoImport: false,
  },
  alias: {
    '~': __dirname,
  },
});
