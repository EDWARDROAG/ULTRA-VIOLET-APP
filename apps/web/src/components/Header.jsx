import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-purple-700">Aura Violet</Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/galeria">Galería</Link>
            <Link to="/acerca-de">Acerca de</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
