import { useEffect, useState } from 'react'
import { heroTags } from '../data/skills.js'
import { useLanguage } from '../context/LanguageContext.jsx'

const heroPhotos = [
  '/photo/me/me1.jpeg',
  '/photo/me/me2.jpeg',
  '/photo/me/me3.jpeg',
  '/photo/me/me4.jpeg',
]

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero
  const [activePhoto, setActivePhoto] = useState(0)

  // Cycle to the next photo every 4s; the CSS handles the fade between them.
  useEffect(() => {
    const id = setInterval(() => {
      setActivePhoto((i) => (i + 1) % heroPhotos.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">{h.eyebrow}</span>
          <h1>
            {h.titleStart} <em>{h.titleEm}</em> {h.titleEnd}
          </h1>
          <p className="lede">{h.lede}</p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-solid">{h.viewProjects}</a>
            <a href="#contact" className="btn btn-outline">{h.getInTouch}</a>
          </div>
          <div className="hero-tags">
            {heroTags.map((tag, i) => (
              <span
                key={tag}
                className="tag-chip"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mock">
          <div className="mock-bar">
            <span className="mock-dot"></span>
            <span className="mock-dot"></span>
            <span className="mock-dot"></span>
            <span className="mock-url">{h.mockUrl}</span>
          </div>
          <div className="mock-body">
            <div className="mock-block tall mock-photo" style={{ animationDelay: '.05s' }}>
              {heroPhotos.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={h.mockPhotoAlt}
                  className={i === activePhoto ? 'mock-photo-active' : ''}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}