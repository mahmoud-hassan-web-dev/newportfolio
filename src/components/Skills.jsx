import { skillGroups } from '../data/skills.js'
import { useReveal } from '../hooks/useReveal.js'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Skills() {
  const headRef = useReveal()
  const gridRef = useReveal()
  const { t } = useLanguage()
  const s = t.skills

  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">{s.eyebrow}</span>
          <h2>{s.heading}</h2>
          <p>{s.desc}</p>
        </div>

        <div className="skills-grid reveal" ref={gridRef}>
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{s.groupTitles[group.title] || group.title}</h3>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
