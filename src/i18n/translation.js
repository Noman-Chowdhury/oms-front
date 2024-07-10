import i18n from "@/i18n"

const Trans = {
    isLocaleSupported(locale) { // <--- 1
      return Trans.supportedLocales.includes(locale)
    },
    get supportedLocales() {
      return ['en', 'bn', 'ru']
    },

    get defaultLocale() {
      return 'en'
    },

    getPersistedLocale() {
      const persistedLocale = localStorage.getItem("user-locale")
      if(Trans.isLocaleSupported(persistedLocale)) {
        return persistedLocale
      } else {
        return null
      }
    },

    guessDefaultLocale() {
      const userPersistedLocale = Trans.getPersistedLocale()
      if(userPersistedLocale) {
        return userPersistedLocale
      }
      // const userPreferredLocale = Trans.getUserLocale()
      // if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
      //   return userPreferredLocale.locale
      // }
      // if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      //   return userPreferredLocale.localeNoRegion
      // }
      
      return Trans.defaultLocale
    },

    set currentLocale(newLocale) {
      i18n.global.locale.value = newLocale
    },

    async switchLanguage(newLocale) {
      Trans.currentLocale = newLocale
      document.querySelector("html").setAttribute("lang", newLocale)
      localStorage.setItem("user-locale", newLocale)
    },

    async routeMiddleware(to, _from, next) {
      const paramLocale = to.params.locale
      if(!Trans.isLocaleSupported(paramLocale)) {
        return next(Trans.guessDefaultLocale())
      }
      await Trans.switchLanguage(paramLocale)
      return next()
    },
  }
  
  export default Trans