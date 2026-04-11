import { Link, Navigate, useParams } from 'react-router-dom'
import { allProjects } from '../data/content'

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = allProjects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/work" replace />
  }

  return (
    <section className="project-detail-page container">
      <Link className="back-link" to="/work">
        <span className="material-symbols-outlined">arrow_back</span>
        Back to work
      </Link>

      <div className="project-detail-hero">
        <div className="project-detail-copy">
          <p className="eyebrow">Project Detail</p>
          <h1>{project.title}</h1>
          <p className="project-detail-summary">{project.summary}</p>

          <div className="project-detail-meta">
            <span>{project.year}</span>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="project-detail-image">
          <img src={project.image} alt={project.alt} />
        </div>
      </div>

      <div className="project-detail-grid">
        <article className="project-detail-card">
          <p className="eyebrow">Problem</p>
          <h2>What needed solving</h2>
          <p>{project.problem}</p>
        </article>

        <article className="project-detail-card">
          <p className="eyebrow">Solution</p>
          <h2>How I approached it</h2>
          <p>{project.solution}</p>
        </article>

        <article className="project-detail-card project-detail-card-wide">
          <p className="eyebrow">Stack</p>
          <h2>Tools used</h2>
          <div className="project-detail-stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>

        <article className="project-detail-card project-detail-card-wide">
          <p className="eyebrow">Impact</p>
          <h2>Outcome</h2>
          <p>{project.impact}</p>
        </article>
      </div>
    </section>
  )
}

export default ProjectDetailPage
