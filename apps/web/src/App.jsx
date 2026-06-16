import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import HomePage from './pages/HomePage'
import ServiciosPage from './pages/ServiciosPage'
import GaleriaPage from './pages/GaleriaPage'
import AcercaDePage from './pages/AcercaDePage'
import ContactoPage from './pages/ContactoPage'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingChat from './components/FloatingChat'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-950 text-white">
        <Header />
        <Toaster richColors position="top-right" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/acerca-de" element={<AcercaDePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
        <FloatingChat />
        <Footer />
      </div>
    </Router>
  )
}

export default App
