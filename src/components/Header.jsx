import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header>
      <nav className="wrap">
        <a href="#top" className="logo">Mahmoud<span>.</span>dev</a>

        <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">Let's talk →</a>

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
