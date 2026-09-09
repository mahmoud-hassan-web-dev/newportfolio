import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../data/translations.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'ar') {
      setLang(saved)
      return
    }
    // Fall back to the browser's language if it's Arabic, otherwise English.
    const browserLang = navigator.language?.slice(0, 2)
    setLang(browserLang === 'ar' ? 'ar' : 'en')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'en' ? 'ar' : 'en'))
  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
