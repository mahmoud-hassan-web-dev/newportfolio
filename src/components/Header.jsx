import { useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.6A9 9 0 1 1 11.4 3a7 7 0 0 0 9.6 9.6Z" />
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { t, toggleLang } = useLanguage()

  return (
    <header>
      <nav className="wrap">
        <a href="#top" className="logo">Mahmoud<span>.</span>dev</a>

        <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          {t.header.nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            aria-label={theme === 'light' ? t.header.themeToDark : t.header.themeToLight}
            onClick={toggleTheme}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>

          <button
            type="button"
            className="lang-btn"
            aria-label={t.header.langAria}
            onClick={toggleLang}
          >
            {t.header.langButton}
          </button>

          <a href="#contact" className="nav-cta">{t.header.cta}</a>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
        </button>
      </nav>
    </header>
  )
}
