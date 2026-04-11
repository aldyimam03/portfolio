import {
  backendSkills,
  frontendSkillBubbles,
  glassStackCards,
  skillsPageContent,
  toolPills,
} from '../data/content'

function SkillsDivider({ title, tone = 'primary', reverse = false }) {
  return (
    <div className={`skills-divider ${reverse ? 'is-reverse' : ''}`}>
      <div className="skills-divider-line is-flex" />
      <h3 className={`skills-divider-title is-${tone}`}>{title}</h3>
      <div className="skills-divider-line is-short" />
    </div>
  )
}

function SkillsPageSection() {
  return (
    <section className="skills-page container">
      <header className="skills-page-hero">
        <h1>
          {skillsPageContent.title} <span>{skillsPageContent.highlight}</span>
        </h1>
        <p>{skillsPageContent.description}</p>
      </header>

      <section className="skills-profile">
        <div className="skills-profile-visual">
          <div className="skills-profile-image-wrap">
            <img
              src={skillsPageContent.profileImage}
              alt="Potret developer di studio modern dengan pencahayaan terang"
            />
          </div>
          <div className="skills-profile-glow" aria-hidden="true" />
        </div>

        <div className="skills-profile-copy">
          <h2>
            <span className="material-symbols-outlined">face</span>
            {skillsPageContent.profileTitle}
          </h2>

          <div className="skills-profile-text">
            {skillsPageContent.profileDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="skills-profile-facts">
            {skillsPageContent.profileFacts.map((fact) => (
              <div key={fact.label} className="skills-fact-pill">
                <span className="material-symbols-outlined">{fact.icon}</span>
                {fact.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-groups">
        <div className="skills-group">
          <SkillsDivider title="Integrasi Frontend" tone="primary-dim" />
          <div className="frontend-bubbles">
            {frontendSkillBubbles.map((bubble) => (
              <article key={bubble.label} className="frontend-bubble">
                <span className={`material-symbols-outlined ${bubble.colorClass}`}>
                  {bubble.icon}
                </span>
                <span>{bubble.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="skills-group">
          <SkillsDivider title="Fondasi Backend" tone="secondary" reverse />
          <div className="backend-skill-grid">
            {backendSkills.map((skill) => (
              <article key={skill.label} className="backend-skill-card">
                <span>{skill.label}</span>
                <span className="material-symbols-outlined">{skill.icon}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="skills-group">
          <SkillsDivider title="Tools Yang Saya Pakai" tone="tertiary" />
          <div className="tool-pill-grid">
            {toolPills.map((tool) => (
              <span key={tool} className="tool-pill">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="glass-stack-section">
        <div className="glass-stack-ambient" aria-hidden="true">
          <div className="glass-stack-glow is-left" />
          <div className="glass-stack-glow is-right" />
        </div>

        <div className="glass-stack-stage">
          {glassStackCards.map((card) => (
            <article key={card.title} className={`glass-stack-card ${card.className}`}>
              <span className={`material-symbols-outlined accent-${card.accent}`}>
                {card.icon}
              </span>
              <div>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="glass-stack-footer">
          <p>Fondasi Kerja Fullstack Saya</p>
        </div>
      </section>
    </section>
  )
}

export default SkillsPageSection
