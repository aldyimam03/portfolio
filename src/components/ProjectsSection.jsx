import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/content'

function ProjectsSection() {
  return (
    <section className="projects-section container" id="work">
      <div className="section-heading section-heading-inline">
        <div>
          <h2>Featured Creations</h2>
          <p>A selection of recent fullstack projects.</p>
        </div>
        <Link className="archive-link" to="/work">
          View Archive
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.alt} />
            </div>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link className="project-link" to={`/projects/${project.slug}`}>
              Read Case Study
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
