import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navLinks, siteConfig } from '../data/content'

function resolveNavClick(to, navigate, onClose) {
  onClose()

  if (to.includes('#')) {
    const [pathname, hash] = to.split('#')
    const routeTarget = pathname || '/'

    if (routeTarget === '/') {
      navigate(`/${hash ? `#${hash}` : ''}`)
      window.setTimeout(() => {
        const target = document.getElementById(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 80)
      return
    }
  }

  navigate(to)
}

function isLinkActive(pathname, to) {
  return pathname === to
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname, location.hash])

  return (
    <header className="topbar">
      <div className="container nav-inner">
        <Link className="brand" to="/">
          {siteConfig.brand}
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className={`nav-link-button ${isLinkActive(location.pathname, link.to) ? 'is-active' : ''}`}
              onClick={() => resolveNavClick(link.to, navigate, () => {})}
              type="button"
            >
              {link.label}
            </button>
          ))}
          <a className="button button-primary button-small" href={`mailto:${siteConfig.email}`}>
            Hire Me
          </a>
        </nav>

        <button
          className="mobile-menu"
          aria-expanded={isOpen}
          aria-label="Open menu"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      <div className={`mobile-panel ${isOpen ? 'is-open' : ''}`}>
        <nav className="mobile-panel-nav" aria-label="Mobile primary">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="mobile-panel-link"
              onClick={() => resolveNavClick(link.to, navigate, () => setIsOpen(false))}
              type="button"
            >
              {link.label}
            </button>
          ))}
          <a className="button button-primary" href={`mailto:${siteConfig.email}`}>
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
