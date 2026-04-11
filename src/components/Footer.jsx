import { Link } from 'react-router-dom'
import { siteConfig, socialIcons } from '../data/content'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link className="brand brand-footer" to="/">
            {siteConfig.brand}
          </Link>
          <p className="footer-copy">
            © 2026 {siteConfig.owner}. {siteConfig.footerNote}
          </p>
        </div>

        <div className="footer-socials" aria-label="Tautan sosial">
          {socialIcons.map((item) => (
            <a key={item.icon} href={item.href} aria-label={item.label}>
              <span className="material-symbols-outlined">{item.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
