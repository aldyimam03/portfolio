import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children }) {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''))

      if (element) {
        window.setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 80)
      }

      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return (
    <div className="page-shell min-h-screen antialiased">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />

      <button className="floating-chat-button" type="button" aria-label="Open chat">
        <span className="material-symbols-outlined">chat_bubble</span>
      </button>
    </div>
  )
}

export default Layout
