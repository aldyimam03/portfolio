import { skillCards, skillsMeta } from '../data/content'

function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-heading centered">
          <h2>{skillsMeta.title}</h2>
          <p>{skillsMeta.description}</p>
        </div>

        <div className="skills-grid">
          {skillCards.map((card) => (
            <article
              key={card.title}
              className={`skill-card skill-card-${card.variant}`}
            >
              <div className="skill-icon">
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {card.chips ? (
                <div className="skill-chips">
                  {card.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}

          <article className="skill-card skill-card-wide">
            <div>
              <h3>{skillsMeta.deploymentTitle}</h3>
              <p>{skillsMeta.deploymentDescription}</p>
            </div>
            <div className="deployment-icons" aria-hidden="true">
              <span className="material-symbols-outlined">cloud</span>
              <span className="material-symbols-outlined">terminal</span>
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
