import { useState } from 'react'
import {
  backendSkills,
  frontendSkillBubbles,
  glassStackCards,
  skillsPageContent,
  toolPills,
} from '../data/content'
import PlatformIcon from './PlatformIcon'

function SkillsDivider({ title, tone = 'primary', reverse = false }) {
  return (
    <div className={`skills-divider ${reverse ? 'is-reverse' : ''}`}>
      <div className="skills-divider-line is-flex" />
      <h3 className={`skills-divider-title is-${tone}`}>{title}</h3>
      <div className="skills-divider-line is-short" />
    </div>
  )
}

function getStackPosition(index, activeIndex, totalCards) {
  const position = (index - activeIndex + totalCards) % totalCards

  if (position === 0) return 'front'
  if (position === 1) return 'middle'
  return 'back'
}

function SkillsPageSection() {
  const [activeStackCard, setActiveStackCard] = useState(0)

  function showPreviousCard() {
    setActiveStackCard((current) =>
      current === 0 ? glassStackCards.length - 1 : current - 1,
    )
  }

  function showNextCard() {
    setActiveStackCard((current) => (current + 1) % glassStackCards.length)
  }

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
                <PlatformIcon name={bubble.icon} className={`tech-icon ${bubble.colorClass}`} />
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
                <PlatformIcon name={skill.icon} className="tech-icon" />
              </article>
            ))}
          </div>
        </div>

        <div className="skills-group">
          <SkillsDivider title="Tools Yang Saya Pakai" tone="tertiary" />
          <div className="tool-pill-grid">
            {toolPills.map((tool) => (
              <span key={tool.label} className="tool-pill">
                <PlatformIcon name={tool.icon} className="tech-icon" />
                {tool.label}
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
          {glassStackCards.map((card, index) => {
            const stackPosition = getStackPosition(
              index,
              activeStackCard,
              glassStackCards.length,
            )
            const isActive = stackPosition === 'front'

            return (
              <button
                key={card.title}
                className={`glass-stack-card is-${stackPosition}`}
                type="button"
                aria-label={`Lihat ${card.title}`}
                aria-pressed={isActive}
                onClick={() => setActiveStackCard(index)}
              >
                <span className={`material-symbols-outlined accent-${card.accent}`}>
                  {card.icon}
                </span>
                <span>
                  <span className="glass-stack-card-title">{card.title}</span>
                  <span className="glass-stack-card-description">{card.description}</span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="glass-stack-controls" aria-label="Navigasi fondasi kerja fullstack">
          <button type="button" onClick={showPreviousCard} aria-label="Lihat kartu sebelumnya">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>

          <div className="glass-stack-dots" aria-hidden="true">
            {glassStackCards.map((card, index) => (
              <span
                key={card.title}
                className={activeStackCard === index ? 'is-active' : ''}
              />
            ))}
          </div>

          <button type="button" onClick={showNextCard} aria-label="Lihat kartu berikutnya">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="glass-stack-footer">
          <p>Fondasi Kerja Fullstack Saya</p>
        </div>
      </section>
    </section>
  )
}

export default SkillsPageSection
