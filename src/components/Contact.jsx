import { useReveal } from '../hooks/useReveal.js'

export default function Contact() {
  const ref = useReveal()

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-inner reveal" ref={ref}>
        <span className="eyebrow">Contact</span>
        <h2>Let's build something real.</h2>
        <p>
          Open to front-end roles, freelance projects, and teams that want fast,
          clean interfaces. Reach out any way that works for you.
        </p>
        <div className="contact-cta">
          <a href="mailto:m71787660@gmail.com" className="btn btn-solid">Email me</a>
          <a href="tel:+201006827266" className="btn btn-outline">Call me</a>
        </div>
        <div className="contact-list">
          <a href="mailto:m71787660@gmail.com">
            <span className="label">Email</span>m71787660@gmail.com
          </a>
          <a href="tel:+201006827266">
            <span className="label">Phone</span>01006827266
          </a>
          <a href="https://linkedin.com/in/mahmoud-hassan-353560416" target="_blank" rel="noopener noreferrer">
            <span className="label">LinkedIn</span>mahmoud-hassan-353560416
          </a>
          <a href="https://github.com/m71787660-tech" target="_blank" rel="noopener noreferrer">
            <span className="label">GitHub</span>m71787660-tech
          </a>
        </div>
      </div>
    </section>
  )
}
