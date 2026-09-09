import { heroTags } from '../data/skills.js'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

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
            <div className="mock-block tall b1" style={{ animationDelay: '.05s' }}></div>
            <div className="mock-row">
              <div className="mock-block b2" style={{ animationDelay: '.15s' }}></div>
              <div className="mock-block b3" style={{ animationDelay: '.25s' }}></div>
              <div className="mock-block b4" style={{ animationDelay: '.35s' }}></div>
            </div>
            <div className="mock-row">
              <div className="mock-block b5" style={{ animationDelay: '.45s' }}></div>
              <div className="mock-block b5" style={{ animationDelay: '.55s' }}></div>
              <div className="mock-block b2" style={{ animationDelay: '.65s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
