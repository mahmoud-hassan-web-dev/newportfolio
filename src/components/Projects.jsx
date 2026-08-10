import { projects } from '../data/projects.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Projects() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="projects" id="work">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">Selected work</span>
          <h2>Five builds, all shipped.</h2>
          <p>Mostly e-commerce and product UI — carts, filtering, auth, and clean responsive layouts.</p>
        </div>

        <div className="project-grid reveal" ref={gridRef}>
          {projects.map((p) => (
            <div className="project-card" key={p.name}>
              <div className="project-top" style={{ background: p.accent }}></div>
              <div className="project-body">
                <div className="project-head">
                  <h3>{p.name}</h3>
                  {p.badge && <span className="badge">{p.badge}</span>}
                </div>
                <p className="desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
                {(p.live || p.github) && (
                  <div className="project-links">
                    {p.live && (
                      <a className="primary" href={p.live} target="_blank" rel="noopener noreferrer">
                        Live site
                      </a>
                    )}
                    {p.github && (
                      <a className="secondary" href={p.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
