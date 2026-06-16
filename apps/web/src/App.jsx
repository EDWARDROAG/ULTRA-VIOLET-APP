import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ThemeProvider } from './context/ThemeContext'
import HomePage from './pages/HomePage'
import ServiciosPage from './pages/ServiciosPage'
import GaleriaPage from './pages/GaleriaPage'
import AcercaDePage from './pages/AcercaDePage'
import ContactoPage from './pages/ContactoPage'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingChat from './components/FloatingChat'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="theme-page min-h-screen">
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
          <ThemeToggle />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
