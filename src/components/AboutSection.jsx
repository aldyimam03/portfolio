import { aboutContent } from '../data/content'

function AboutSection() {
  return (
    <section className="about-section container" id="about">
      <div className="about-card">
        <p className="eyebrow">{aboutContent.eyebrow}</p>
        <h2>{aboutContent.title}</h2>
        <p>{aboutContent.description}</p>
      </div>
    </section>
  )
}

export default AboutSection
