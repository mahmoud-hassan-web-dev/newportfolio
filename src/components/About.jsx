import { timeline } from '../data/timeline.js'
import { useReveal } from '../hooks/useReveal.js'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function About() {
  const textRef = useReveal()
  const timelineRef = useReveal()
  const { t } = useLanguage()
  const a = t.about

  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="reveal" ref={textRef}>
          <div className="about-photo">
            <img src="/photo/me/me.jpeg" alt={a.photoAlt} />
          </div>

          <span className="eyebrow">{a.eyebrow}</span>
          <h2 style={{ marginTop: 14, fontSize: 'clamp(1.9rem,3.4vw,2.6rem)' }}>
            {a.heading}
          </h2>
          <div className="about-text" style={{ marginTop: 22 }}>
            {a.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>

        <div className="reveal" ref={timelineRef}>
          <div className="timeline">
            {timeline.map((item, i) => {
              const tr = t.timeline[item.title] || { title: item.title, detail: item.detail }
              return (
                <div className="tl-item" key={item.title}>
                  <div className="tl-dot">{String(i + 1).padStart(2, '0')}</div>
                  <div className="tl-content">
                    <span className="tl-date">{item.date}</span>
                    <h3>{tr.title}</h3>
                    <p>{tr.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
