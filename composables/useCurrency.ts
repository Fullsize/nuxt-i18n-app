// composables/useCurrency.ts
import { useI18n } from 'vue-i18n'

const currencyMap: Record<string, string> = {
  en: 'USD',
  fr: 'EUR',
  ja: 'JPY',
  zh: 'CNY',
  'zh-CN': 'CNY',
  'zh-TW': 'TWD',
  de: 'EUR',
  ko: 'KRW',
  // 可按需添加其他 locale → currency 对应关系
}

export function useCurrency() {
  const { locale } = useI18n()

  function formatCurrency(value: number, currencyOverride?: string): string {
    const currentLocale = locale.value
    const currency = currencyOverride || currencyMap[currentLocale] || 'USD'

    return new Intl.NumberFormat(currentLocale, {
      style: 'currency',
      currency,
    }).format(value)
  }

  return {
    formatCurrency,
  }
}
