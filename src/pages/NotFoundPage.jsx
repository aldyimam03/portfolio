import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="not-found-page container">
      <p className="eyebrow">404</p>
      <h1>Halaman tidak ditemukan.</h1>
      <p>
        Alamat yang kamu tuju tidak tersedia. Kembali ke beranda atau lihat
        project yang sudah saya kerjakan.
      </p>

      <div className="not-found-actions">
        <Link className="button button-primary" to="/">
          Kembali ke Beranda
        </Link>
        <Link className="button button-secondary" to="/work">
          Lihat Project
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
