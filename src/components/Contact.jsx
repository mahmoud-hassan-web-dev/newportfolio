import { useReveal } from '../hooks/useReveal.js'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Contact() {
  const ref = useReveal()
  const { t } = useLanguage()
  const c = t.contact

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-inner reveal" ref={ref}>
        <span className="eyebrow">{c.eyebrow}</span>
        <h2>{c.heading}</h2>
        <p>{c.desc}</p>
        <div className="contact-cta">
          <a href="mailto:m71787660@gmail.com" className="btn btn-solid">{c.emailMe}</a>
          <a href="tel:+201006827266" className="btn btn-outline">{c.callMe}</a>
        </div>
        <div className="contact-list">
          <a href="mailto:m71787660@gmail.com">
            <span className="label">{c.labels.email}</span>m71787660@gmail.com
          </a>
          <a href="tel:+201006827266">
            <span className="label">{c.labels.phone}</span>01006827266
          </a>
          <a href="https://linkedin.com/in/mahmoud-hassan-web-dev" target="_blank" rel="noopener noreferrer">
            <span className="label">{c.labels.linkedin}</span>Mahmoud Hassan
          </a>
          <a href="https://github.com/mahmoud-hassan-web-dev" target="_blank" rel="noopener noreferrer">
            <span className="label">{c.labels.github}</span>Mahmoud.Dev
          </a>
        </div>
      </div>
    </section>
  )
}
