import { defineNuxtConfig } from 'nuxt/config';
import { postcss } from '@lyrebird/configs';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/global.css'],
  postcss,
});
