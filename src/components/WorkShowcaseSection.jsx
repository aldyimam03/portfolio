import { Link } from 'react-router-dom'
import {
  featuredExperiment,
  workShowcaseProjects,
  siteConfig,
  worksPageContent,
  worksCta,
} from '../data/content'

function ProjectShowcaseCard({ project }) {
  return (
    <article className="showcase-card">
      <div className="showcase-card-media">
        <img src={project.image} alt={project.alt} />
        {project.badge ? <span className="showcase-badge">{project.badge}</span> : null}
      </div>

      <div className="showcase-card-body">
        <div className="showcase-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="showcase-card-actions">
          <Link to={`/projects/${project.slug}`}>
            Lihat Project
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <a
            className="showcase-icon-link"
            href={siteConfig.socialLinks.github}
            aria-label={`Lihat kode untuk ${project.title}`}
          >
            <span className="material-symbols-outlined">code</span>
          </a>
        </div>
      </div>
    </article>
  )
}

function FeaturedExperimentCard() {
  return (
    <article className="showcase-feature-card">
      <div className="showcase-feature-top">
        <div className="showcase-feature-icon">
          <span className="material-symbols-outlined">{featuredExperiment.icon}</span>
        </div>
        <h3>{featuredExperiment.title}</h3>
        <p>{featuredExperiment.description}</p>
      </div>

      <div className="showcase-feature-bottom">
        <div className="showcase-progress-track" aria-hidden="true">
          <div
            className="showcase-progress-value"
            style={{ width: `${featuredExperiment.progress}%` }}
          />
        </div>
        <span>{featuredExperiment.status}</span>
        <button className="showcase-notify-button" type="button">
          {featuredExperiment.cta}
        </button>
      </div>
    </article>
  )
}

function WorkShowcaseSection() {
  return (
    <section className="work-showcase-section container">
      <header className="work-showcase-header">
        <div className="showcase-blur" aria-hidden="true" />
        <h2>
          {worksPageContent.title.split(worksPageContent.highlight)[0]}
          <span> {worksPageContent.highlight}</span> {worksPageContent.titleSuffix}{' '}
        </h2>
        <p>{worksPageContent.description}</p>
        <div className="work-showcase-meta">
          <span className="showcase-role-pill">
            <span className="material-symbols-outlined">terminal</span>
            {worksPageContent.role}
          </span>
          <span className="showcase-scroll-note">
            {worksPageContent.scrollLabel}
            <span className="material-symbols-outlined">south</span>
          </span>
        </div>
      </header>

      <div className="work-showcase-grid">
        <ProjectShowcaseCard project={workShowcaseProjects[0]} />
        <ProjectShowcaseCard project={workShowcaseProjects[1]} />
        <FeaturedExperimentCard />
        <ProjectShowcaseCard project={workShowcaseProjects[2]} />
        <ProjectShowcaseCard project={workShowcaseProjects[3]} />
        <ProjectShowcaseCard project={workShowcaseProjects[4]} />
      </div>

      <section className="works-cta-section">
        <div className="works-cta-arrow" aria-hidden="true">
          <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
        </div>

        <div className="works-cta-card">
          <h3>{worksCta.title}</h3>
          <p>{worksCta.description}</p>

          <div className="works-cta-actions">
            <a className="button button-primary" href={siteConfig.socialLinks.github}>
              <span className="material-symbols-outlined">terminal</span>
              {worksCta.primary}
            </a>
            <a
              className="button button-secondary works-secondary-button"
              href={`mailto:${siteConfig.email}`}
            >
              <span className="material-symbols-outlined">mail</span>
              {worksCta.secondary}
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}

export default WorkShowcaseSection
