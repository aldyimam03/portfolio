import { useEffect, useRef, useState } from 'react'
import PlatformIcon from './PlatformIcon'
import { contactPageContent, siteConfig } from '../data/content'

function CustomSelect({ id, label, options, defaultValue }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(defaultValue)
  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div className="field-group">
      <label htmlFor={id}>{label}</label>
      <div
        ref={wrapperRef}
        className={`custom-select ${isOpen ? 'is-open' : ''}`}
      >
        <button
          id={id}
          className="custom-select-trigger"
          type="button"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span>{selected}</span>
          <span className="select-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="m7 10 5 5 5-5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </span>
        </button>

        <input type="hidden" name={id} value={selected} />

        {isOpen ? (
          <div className="custom-select-menu" role="listbox" aria-labelledby={id}>
            {options.map((option) => (
              <button
                key={option}
                className={`custom-select-option ${selected === option ? 'is-selected' : ''}`}
                type="button"
                role="option"
                aria-selected={selected === option}
                onClick={() => {
                  setSelected(option)
                  setIsOpen(false)
                }}
              >
                {option}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

function ContactPageSection() {
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const fullName = formData.get('fullName')
    const emailAddress = formData.get('emailAddress')
    const helpTopic = formData.get('helpTopic')
    const message = formData.get('message')

    setSubmitStatus('sending')
    setSubmitMessage('')

    if (formEndpoint) {
      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('Contact form request failed')
        }

        event.currentTarget.reset()
        setSubmitStatus('success')
        setSubmitMessage(contactPageContent.form.success)
        return
      } catch {
        setSubmitStatus('error')
        setSubmitMessage(contactPageContent.form.error)
        return
      }
    }

    const subject = encodeURIComponent(`[Portfolio] ${helpTopic}`)
    const body = encodeURIComponent(
      `Nama: ${fullName}\nEmail: ${emailAddress}\nKeperluan: ${helpTopic}\n\nPesan:\n${message}`,
    )

    window.location.href = `${siteConfig.socialLinks.email}?subject=${subject}&body=${body}`
    setSubmitStatus('fallback')
    setSubmitMessage(contactPageContent.form.fallback)
  }

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
                    <PlatformIcon name={item.icon} className={`platform-icon accent-${item.tone}`} />
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

                <a
                  className="button button-primary resume-button"
                  href={contactPageContent.resume.href}
                  download={contactPageContent.resume.fileName}
                >
                  <span className="material-symbols-outlined">download</span>
                  {contactPageContent.resume.cta}
                </a>
              </div>
            </div>
          </div>

          <div className="contact-page-main">
            <div className="contact-form-shell">
              <form className="contact-form-grid" onSubmit={handleSubmit}>
                <div className="contact-form-two-up">
                  <div className="field-group">
                    <label htmlFor="fullName">
                      {contactPageContent.form.fields.name}
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      placeholder={contactPageContent.form.placeholder.name}
                      required
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
                      required
                      type="email"
                    />
                  </div>
                </div>

                <CustomSelect
                  id="helpTopic"
                  label={contactPageContent.form.fields.subject}
                  options={contactPageContent.form.options}
                  defaultValue={contactPageContent.form.options[0]}
                />

                <div className="field-group">
                  <label htmlFor="message">
                    {contactPageContent.form.fields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={contactPageContent.form.placeholder.message}
                    required
                    rows="6"
                  />
                </div>

                {submitMessage ? (
                  <p className={`form-status form-status-${submitStatus}`} role="status">
                    {submitMessage}
                  </p>
                ) : null}

                <button
                  className="button button-primary contact-submit"
                  disabled={submitStatus === 'sending'}
                  type="submit"
                >
                  <span>
                    {submitStatus === 'sending'
                      ? contactPageContent.form.sending
                      : contactPageContent.form.submit}
                  </span>
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPageSection
