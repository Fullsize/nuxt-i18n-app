import tailwindcss from "@tailwindcss/vite";
import i18nConfig from "./i18n.config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/transitions.css'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  router: {
    options: {
      linkActiveClass: 'active-link',
      linkExactActiveClass: 'exact-active-link'
    }
  },
  modules: ['@nuxtjs/i18n'],

  i18n: i18nConfig,
})
