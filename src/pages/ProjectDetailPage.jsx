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
        Kembali ke project
      </Link>

      <div className="project-detail-hero">
        <div className="project-detail-copy">
          <p className="eyebrow">Detail Project</p>
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
          <p className="eyebrow">Tantangan</p>
          <h2>Masalah yang ingin diselesaikan</h2>
          <p>{project.problem}</p>
        </article>

        <article className="project-detail-card">
          <p className="eyebrow">Solusi</p>
          <h2>Pendekatan yang saya lakukan</h2>
          <p>{project.solution}</p>
        </article>

        <article className="project-detail-card project-detail-card-wide">
          <p className="eyebrow">Stack</p>
          <h2>Teknologi yang digunakan</h2>
          <div className="project-detail-stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>

        <article className="project-detail-card project-detail-card-wide">
          <p className="eyebrow">Hasil</p>
          <h2>Dampak project</h2>
          <p>{project.impact}</p>
        </article>
      </div>
    </section>
  )
}

export default ProjectDetailPage
