import { contactPageContent, siteConfig } from '../data/content'

function ContactPageSection() {
  return (
    <section className="contact-page">
      <div className="contact-pattern" aria-hidden="true" />

      <div className="container contact-page-inner">
        <div className="contact-page-grid">
          <div className="contact-page-sidebar">
            <header className="contact-page-header">
              <h1>
                {contactPageContent.title} <span>{contactPageContent.highlight}</span>{' '}
                {contactPageContent.suffix}
              </h1>
              <p>{contactPageContent.description}</p>
            </header>

            <div className="contact-page-sidebar-content">
              <div className="contact-page-links">
                {contactPageContent.socialLinks.map((item) => (
                  <a key={item.label} className="contact-social-card" href={item.href}>
                    <span className={`material-symbols-outlined accent-${item.tone}`}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>

              <div className="resume-card">
                <div className="resume-icon">
                  <span className="material-symbols-outlined">description</span>
                </div>

                <div>
                  <h3>{contactPageContent.resume.title}</h3>
                  <p>{contactPageContent.resume.updated}</p>
                </div>

                <button className="button button-primary resume-button" type="button">
                  <span className="material-symbols-outlined">download</span>
                  {contactPageContent.resume.cta}
                </button>
              </div>
            </div>
          </div>

          <div className="contact-page-main">
            <div className="contact-form-shell">
              <form className="contact-form-grid">
                <div className="contact-form-two-up">
                  <div className="field-group">
                    <label htmlFor="fullName">
                      {contactPageContent.form.fields.name}
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      placeholder={contactPageContent.form.placeholder.name}
                      type="text"
                    />
                  </div>

                  <div className="field-group">
                    <label htmlFor="emailAddress">
                      {contactPageContent.form.fields.email}
                    </label>
                    <input
                      id="emailAddress"
                      name="emailAddress"
                      placeholder={contactPageContent.form.placeholder.email}
                      type="email"
                    />
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="helpTopic">
                    {contactPageContent.form.fields.subject}
                  </label>
                  <select id="helpTopic" name="helpTopic" defaultValue={contactPageContent.form.options[0]}>
                    {contactPageContent.form.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field-group">
                  <label htmlFor="message">
                    {contactPageContent.form.fields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={contactPageContent.form.placeholder.message}
                    rows="6"
                  />
                </div>

                <button className="button button-primary contact-submit" type="submit">
                  <span>{contactPageContent.form.submit}</span>
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>

            <div className="response-chip">
              <div className="response-chip-bubble">
                <span className="material-symbols-outlined">schedule</span>
                <span>{contactPageContent.responseNote}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-page-footer-note">
          <div className="contact-footer-branding">
            <span className="brand brand-footer">{siteConfig.brand}</span>
            <p className="footer-copy">
              © 2026 {siteConfig.owner}. {siteConfig.footerNote}
            </p>
          </div>

          <div className="contact-page-badge">
            <span className="material-symbols-outlined filled">favorite</span>
            <span>{contactPageContent.footerBadge}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPageSection
