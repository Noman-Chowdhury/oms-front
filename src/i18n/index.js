import { createI18n } from "vue-i18n";
import en from "./locales/en.json"
import bn from "./locales/bn.json"
import ru from "./locales/ru.json"

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages: {
    en,
    bn,
    ru
  },
  silentFallbackWarn: true
})