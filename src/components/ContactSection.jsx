import { Link } from 'react-router-dom'
import { contactContent, siteConfig } from '../data/content'

function ContactSection() {
  return (
    <section className="contact-section container" id="contact">
      <div className="contact-card">
        <div>
          <p className="eyebrow">{contactContent.eyebrow}</p>
          <h2>{contactContent.title}</h2>
          <p>{contactContent.description}</p>
        </div>

        <div className="contact-actions">
          <a className="button button-primary" href={contactContent.primary.href}>
            <span className="material-symbols-outlined">mail</span>
            {contactContent.primary.label}
          </a>
          <Link className="button button-secondary" to="/contact">
            <span className="material-symbols-outlined">forum</span>
            Open Contact Page
          </Link>
        </div>

        <div className="contact-meta">
          <span>{siteConfig.location}</span>
          <span>{siteConfig.availability}</span>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
