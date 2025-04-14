// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  router: {
    options: {
      linkActiveClass: 'active-link',
      linkExactActiveClass: 'exact-active-link'
    }
  },
  modules: ['@nuxtjs/i18n'],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/transitions.css'
  ],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'zh',
    restructureDir: './',
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.json',
        dir: 'ltr'
      },
      {
        code: 'zh',
        name: '中文',
        iso: 'zh-CN',
        file: 'zh.json',
        dir: 'ltr'
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true
    },

    pages: {
      about: {
        en: '/about',
        zh: '/about'
      },
      'users/[id]': {
        en: '/users/:id',
        zh: '/users/:id'
      }
    }
  },
})
