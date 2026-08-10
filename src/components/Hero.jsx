import { heroTags } from '../data/skills.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Available for new roles</span>
          <h1>Mahmoud Hassan builds <em>fast, real</em> interfaces.</h1>
          <p className="lede">
            Front-End Web Developer focused on React, JavaScript and Tailwind CSS —
            turning designs into responsive, production-ready web apps, from
            e-commerce carts to full-stack platforms.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-solid">View projects</a>
            <a href="#contact" className="btn btn-outline">Get in touch</a>
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
            <span className="mock-url">myportfolio.dev</span>
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
