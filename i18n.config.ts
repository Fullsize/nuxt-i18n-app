import type { NuxtI18nOptions } from '@nuxtjs/i18n';
const i18nConfig: NuxtI18nOptions = {
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
  lazy: true,
}

export default i18nConfig