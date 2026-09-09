import { useLanguage } from '../context/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()
  return <footer>{t.footer.text}</footer>
}
