import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { brand } from '../data/siteData'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/galeria', label: 'Productos' },
  { to: '/acerca-de', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 theme-border ${
        isScrolled ? 'backdrop-blur shadow-2xl shadow-purple-950/20' : 'border-transparent'
      }`}
      style={{ background: isScrolled ? 'var(--theme-header-bg)' : 'var(--theme-header-top)' }}
    >
      <nav className="container-page py-3">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <img
              src={brand.logo}
              alt="Aura Violet"
              className="theme-logo h-11 w-11 rounded-full object-contain p-1"
            />
            <span>
              <span className="theme-accent block font-serif text-xl font-semibold leading-none">{brand.name}</span>
              <span className="theme-text-muted text-[11px] uppercase tracking-[0.2em]">{brand.tagline}</span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition ${
                    isActive
                      ? 'bg-[var(--theme-btn-primary-bg)] text-[var(--theme-btn-primary-text)]'
                      : 'theme-text hover:bg-[var(--theme-card-bg)] hover:text-[var(--theme-accent-text)]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Abrir menu"
              className="theme-text inline-flex h-11 w-11 items-center justify-center rounded-full border theme-border"
              onClick={() => setIsOpen((value) => !value)}
            >
              <span className="text-2xl leading-none">{isOpen ? 'x' : '='}</span>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="theme-surface mt-4 rounded-3xl border p-3 shadow-2xl shadow-purple-950/20 theme-border md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-wide ${
                    isActive
                      ? 'bg-[var(--theme-btn-primary-bg)] text-[var(--theme-btn-primary-text)]'
                      : 'theme-text hover:bg-[var(--theme-card-bg)]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
