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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-white/10 bg-neutral-950/95 shadow-2xl shadow-purple-950/30 backdrop-blur' : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <nav className="container-page py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#D4AF37]/70 bg-purple-950/80 text-lg font-serif font-bold text-[#D4AF37]">
              AV
            </span>
            <span>
              <span className="block font-serif text-xl font-semibold leading-none text-[#D4AF37]">{brand.name}</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-purple-100/80">SAS</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition ${
                    isActive ? 'bg-[#D4AF37] text-neutral-950' : 'text-white/85 hover:bg-white/10 hover:text-[#D4AF37]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            aria-label="Abrir menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="text-2xl leading-none">{isOpen ? 'x' : '='}</span>
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 rounded-3xl border border-white/10 bg-neutral-950/95 p-3 shadow-2xl shadow-purple-950/40 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-wide ${
                    isActive ? 'bg-[#D4AF37] text-neutral-950' : 'text-white/85 hover:bg-white/10'
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
