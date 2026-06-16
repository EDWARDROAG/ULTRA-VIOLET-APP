import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import HomePage from './pages/HomePage'
import ServiciosPage from './pages/ServiciosPage'
import GaleriaPage from './pages/GaleriaPage'
import AcercaDePage from './pages/AcercaDePage'
import ContactoPage from './pages/ContactoPage'

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/acerca-de" element={<AcercaDePage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
    </Router>
  )
}

export default App
