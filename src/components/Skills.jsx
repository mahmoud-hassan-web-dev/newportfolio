import { skillGroups } from '../data/skills.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Skills() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">Skills</span>
          <h2>The toolkit behind the builds.</h2>
          <p>Front-end first, with enough back-end to ship a full product on my own.</p>
        </div>

        <div className="skills-grid reveal" ref={gridRef}>
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
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
