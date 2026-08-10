import { timeline } from '../data/timeline.js'
import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const textRef = useReveal()
  const timelineRef = useReveal()

  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="reveal" ref={textRef}>
          <span className="eyebrow">About</span>
          <h2 style={{ marginTop: 14, fontSize: 'clamp(1.9rem,3.4vw,2.6rem)' }}>
            Learning fast, shipping faster.
          </h2>
          <div className="about-text" style={{ marginTop: 22 }}>
            <p>
              I'm a <strong>Front-End Web Developer</strong> with a solid foundation in
              modern web technologies — React, JavaScript, HTML5 and CSS3 — and a
              growing set of back-end skills in Node.js, Express and MongoDB.
            </p>
            <p>
              Most of my hands-on work has been building{' '}
              <strong>responsive e-commerce platforms</strong>: product grids, shopping
              carts, filtering, and authentication flows. I care about interfaces that
              feel quick and behave predictably on any screen.
            </p>
            <p>
              I'm currently studying for a <strong>Bachelor of Engineering</strong> and
              keep stacking focused, practical training on top of it — bootcamps,
              specialized courses, and real project work.
            </p>
          </div>
        </div>

        <div className="reveal" ref={timelineRef}>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div className="tl-item" key={item.title}>
                <div className="tl-dot">{String(i + 1).padStart(2, '0')}</div>
                <div className="tl-content">
                  <span className="tl-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
