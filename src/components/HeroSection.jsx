import { Link } from 'react-router-dom'
import { heroContent } from '../data/content'

function HeroSection() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <div className="status-pill">
          <span className="material-symbols-outlined filled">bolt</span>
          {heroContent.eyebrow}
        </div>

        <h1>
          {heroContent.titlePrefix} <span>{heroContent.highlightedName}</span>!{' '}
          {heroContent.titleSuffix}
        </h1>

        <p>
          {heroContent.description.split(heroContent.emphasis)[0]}
          <strong>{heroContent.emphasis}</strong>
          {heroContent.description.split(heroContent.emphasis)[1]}
        </p>

        <div className="hero-actions">
          <Link className="button button-primary" to={heroContent.primaryCta.to}>
            {heroContent.primaryCta.label}
          </Link>
          <a className="button button-secondary" href={heroContent.secondaryCta.to}>
            {heroContent.secondaryCta.label}
          </a>
        </div>
      </div>

      <div
        className="hero-visual"
        aria-label="Developer portrait and status cards"
      >
        <div className="glow glow-primary" />
        <div className="glow glow-accent" />
        <div className="visual-grid" aria-hidden="true" />

        <div className="floating-card floating-card-top">
          <span className="material-symbols-outlined accent-react">terminal</span>
        </div>

        <div className="floating-card floating-card-mid">
          <span className="material-symbols-outlined accent-tertiary">code</span>
        </div>

        <div className="floating-card floating-card-bottom">
          <span className="material-symbols-outlined accent-secondary">database</span>
        </div>

        <div className="portrait-frame">
          <img
            src={heroContent.portrait}
            alt="Professional developer portrait in a modern studio"
          />

          <div className="sprint-card">
            <div className="status-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="eyebrow">{heroContent.sprintLabel}</p>
            <p className="sprint-title">{heroContent.sprintTitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
