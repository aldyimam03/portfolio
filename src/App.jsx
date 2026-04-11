import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import SkillsPage from './pages/SkillsPage'
import WorkPage from './pages/WorkPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </Layout>
  )
}

export default App
