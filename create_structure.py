import os

def create_directory_structure():
    """Genera la estructura completa del proyecto Aura Violet con archivos base"""

    # Estructura de archivos con contenido básico
    structure = {
        # ========== ARCHIVOS RAIZ ==========
        "README.md": "# Aura Violet\n\nEstudio creativo digital",
        "pnpm-workspace.yaml": "packages:\n  - 'apps/*'\n",
        "package.json": """{
  "name": "aura-violet-monorepo",
  "private": true,
  "workspaces": ["apps/*"]
}
""",
        # ========== FRONTEND - APPS/WEB ==========
        "apps/web/package.json": """{
  "name": "aura-violet-web",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.16.0",
    "framer-motion": "^10.16.4",
    "react-hook-form": "^7.47.0",
    "zod": "^3.22.4",
    "sonner": "^1.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.2",
    "vite": "^5.0.0"
  }
}
""",
        "apps/web/vite.config.js": """import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
""",
        "apps/web/tailwind.config.js": """/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
""",
        "apps/web/.gitignore": """node_modules
dist
.env.local
.DS_Store
""",
        "apps/web/index.html": """<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aura Violet</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
""",
        # ========== SRC FRONTEND ==========
        "apps/web/src/main.jsx": """import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
""",
        "apps/web/src/App.jsx": """import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
""",
        "apps/web/src/index.css": """:root {
  --color-primary: #6B21A5;
  --color-primary-dark: #581C87;
  --color-primary-light: #9333EA;
  --color-secondary: #0EA5E9;
  --color-accent: #F59E0B;
  --color-background: #F8FAFC;
  --color-text: #1E293B;
  --color-text-light: #64748B;
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--color-text);
  background-color: var(--color-background);
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #E2E8F0;
}

::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 4px;
}
""",
        # ========== COMPONENTES ==========
        "apps/web/src/components/Header.jsx": """import { useState } from 'react'
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
""",
        "apps/web/src/components/Footer.jsx": """export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2024 Aura Violet. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
""",
        "apps/web/src/components/ServiceCard.jsx": """export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
""",
        "apps/web/src/components/PortfolioCard.jsx": """export default function PortfolioCard({ title, image, category }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-70 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{category}</p>
      </div>
    </div>
  )
}
""",
        "apps/web/src/components/ContactForm.jsx": """import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'

const contactSchema = z.object({
  name: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensaje muy corto')
})

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data) => {
    toast.success('Mensaje enviado correctamente')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('name')} placeholder="Nombre" className="w-full p-2 border rounded" />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      <input {...register('email')} placeholder="Email" className="w-full p-2 border rounded" />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      <textarea {...register('message')} placeholder="Mensaje" className="w-full p-2 border rounded" rows="4"></textarea>
      {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors">
        Enviar
      </button>
    </form>
  )
}
""",
        # ========== PÁGINAS ==========
        "apps/web/src/pages/HomePage.jsx": """import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-purple-700">Bienvenidos a Aura Violet</h1>
      </main>
      <Footer />
    </div>
  )
}
""",
        "apps/web/src/pages/ServiciosPage.jsx": """import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ServiciosPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Nuestros Servicios</h1>
      </main>
      <Footer />
    </div>
  )
}
""",
        "apps/web/src/pages/GaleriaPage.jsx": """import Header from '../components/Header'
import Footer from '../components/Footer'

export default function GaleriaPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Galería de Trabajos</h1>
      </main>
      <Footer />
    </div>
  )
}
""",
        "apps/web/src/pages/AcercaDePage.jsx": """import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AcercaDePage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Acerca de Nosotros</h1>
      </main>
      <Footer />
    </div>
  )
}
""",
        "apps/web/src/pages/ContactoPage.jsx": """import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function ContactoPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
""",
        # ========== HOOKS ==========
        "apps/web/src/hooks/useScrollAnimation.js": """import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export function useScrollAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.classList.add('visible')
    }
  }, [isInView])

  return { ref, isInView }
}
""",
        # ========== API ==========
        "apps/api/package.json": """{
  "name": "aura-violet-api",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "node --watch src/server.js",
    "start": "node src/server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  }
}
""",
        "apps/api/.env.example": "PORT=3000\nEMAIL_USER=correo@gmail.com\nEMAIL_PASS=contraseña\n",
        "apps/api/src/app.js": """import express from 'express'
import cors from 'cors'
import contactRoutes from './routes/contact.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/contact', contactRoutes)
export default app
""",
        "apps/api/src/server.js": """import app from './app.js'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`API en puerto ${PORT}`))
""",
        "apps/api/src/routes/contact.js": """import express from 'express'
const router = express.Router()
router.post('/', (req, res) => {
  res.json({ success: true, message: 'Mensaje recibido' })
})
export default router
""",
        # ========== DOCS ==========
        "docs/ESTRUCTURA.md": "# Estructura del proyecto\n\nFrontend y backend separados en monorepo.",
        "docs/COLORES.md": "# Colores\nPrimario: #6B21A5\nSecundario: #0EA5E9\nAcento: #F59E0B",
        "docs/COMPONENTES.md": "# Componentes\nHeader, Footer, ServiceCard, PortfolioCard, ContactForm",
        "docs/RUTAS.md": "# Rutas\n/ | /servicios | /galeria | /acerca-de | /contacto"
    }

    # Crear carpetas
    folders = [
        "apps",
        "apps/web",
        "apps/web/src",
        "apps/web/src/components",
        "apps/web/src/pages",
        "apps/web/src/hooks",
        "apps/api",
        "apps/api/src",
        "apps/api/src/routes",
        "docs"
    ]

    for folder in folders:
        os.makedirs(folder, exist_ok=True)
        print(f"📁 Carpeta: {folder}")

    # Crear archivos
    for filepath, content in structure.items():
        dir_name = os.path.dirname(filepath)
        if dir_name:
            os.makedirs(dir_name, exist_ok=True)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"📄 Archivo: {filepath}")

    print("\n✅ Estructura generada con éxito.")
    print("👉 Luego ejecuta:\n   cd apps/web && npm install && npm run dev")

if __name__ == "__main__":
    create_directory_structure()