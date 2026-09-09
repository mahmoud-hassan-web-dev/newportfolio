import { projects } from '../data/projects.js'
import { useReveal } from '../hooks/useReveal.js'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Projects() {
  const headRef = useReveal()
  const gridRef = useReveal()
  const { t } = useLanguage()
  const p = t.projects

  const countPhrase = p.countPhrases[projects.length] || `${projects.length}`

  return (
    <section className="projects" id="work">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">{p.eyebrow}</span>
          <h2>{countPhrase}{p.headingSuffix}</h2>
          <p>{p.desc}</p>
        </div>

        <div className="project-grid reveal" ref={gridRef}>
          {projects.map((proj) => {
            const desc = p.items[proj.name] || proj.desc
            const badge = proj.badge ? (p.badges[proj.badge] || proj.badge) : null

            return (
              <div className="project-card" key={proj.name}>
                <div className="project-top" style={{ background: proj.accent }}></div>

                {proj.img && (
                  <div className="project-image">
                    <a href={proj.live} target="_blank" rel="noopener noreferrer">
                      <img src={proj.img} alt={`Preview of ${proj.name}`} />
                    </a>
                  </div>
                )}

                <div className="project-body">
                  <div className="project-head">
                    <h3>{proj.name}</h3>
                    {badge && <span className="badge">{badge}</span>}
                  </div>
                  <p className="desc">{desc}</p>
                  <div className="project-stack">
                    {proj.stack.map((s) => <span key={s}>{s}</span>)}
                  </div>
                  {(proj.live || proj.github) && (
                    <div className="project-links">
                      {proj.live && (
                        <a className="primary" href={proj.live} target="_blank" rel="noopener noreferrer">
                          {p.liveSite}
                        </a>
                      )}
                      {proj.github && (
                        <a className="secondary" href={proj.github} target="_blank" rel="noopener noreferrer">
                          {p.github}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
