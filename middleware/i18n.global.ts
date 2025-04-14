export default defineNuxtRouteMiddleware((to) => {
  const nuxtApp = useNuxtApp()
  const i18n = nuxtApp.$i18n
  const locale = i18n.locale.value
  const defaultLocale = i18n.defaultLocale
  // 如果当前路由没有语言前缀，重定向到带语言前缀的路由
  if (!to.path.startsWith(`/${locale}`) && locale !== defaultLocale) {
    const path = `/${locale}${to.path}`
    return navigateTo(path)
  }
})