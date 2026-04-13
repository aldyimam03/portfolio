import { Link } from 'react-router-dom'
import PlatformIcon from './PlatformIcon'
import { featuredProjects } from '../data/content'

function ProjectsSection() {
  return (
    <section className="projects-section container" id="work">
      <div className="section-heading section-heading-inline">
        <div>
          <h2>Project Unggulan</h2>
          <p>Pilihan project yang paling mewakili pengalaman dan kemampuan teknis saya.</p>
        </div>
        <Link className="archive-link" to="/work">
          Lihat Semua
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.alt} />
              {project.badge ? <span className="showcase-badge">{project.badge}</span> : null}
            </div>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-card-actions">
              <Link className="project-link" to={`/projects/${project.slug}`}>
                Lihat Detail
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              {project.repoUrl ? (
                <a
                  className="showcase-icon-link"
                  href={project.repoUrl}
                  aria-label={`Lihat repository ${project.title}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PlatformIcon name="github" className="platform-icon" />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
