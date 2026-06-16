import { Link } from 'react-router-dom'
import { brand } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="theme-surface-alt border-t theme-border">
      <div className="container-page py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src={brand.logo}
                alt="Aura Violet"
                className="theme-logo h-14 w-14 rounded-full object-contain p-1"
              />
              <div>
                <p className="theme-accent font-serif text-2xl">{brand.name}</p>
                <p className="theme-text-muted text-sm">{brand.tagline}</p>
              </div>
            </div>
            <p className="theme-text-soft max-w-sm text-sm leading-6">
              Detalles personalizados, diseno grafico y soluciones creativas para regalos, celebraciones,
              publicidad y proyectos escolares.
            </p>
          </div>

          <div>
            <h3 className="theme-accent mb-3 text-sm font-bold uppercase tracking-[0.25em]">Enlaces</h3>
            <div className="theme-text-soft grid gap-2 text-sm">
              <Link className="hover:text-[var(--theme-accent-text)]" to="/">Inicio</Link>
              <Link className="hover:text-[var(--theme-accent-text)]" to="/servicios">Servicios</Link>
              <Link className="hover:text-[var(--theme-accent-text)]" to="/galeria">Productos</Link>
              <Link className="hover:text-[var(--theme-accent-text)]" to="/contacto">Contacto</Link>
            </div>
          </div>

          <div>
            <h3 className="theme-accent mb-3 text-sm font-bold uppercase tracking-[0.25em]">Contacto</h3>
            <div className="theme-text-soft space-y-2 text-sm">
              <p>{brand.owner}</p>
              <p>{brand.email}</p>
              <p>{brand.whatsapp}</p>
              <p>Lunes a viernes: 8:00 a.m. - 6:00 p.m.</p>
              <div className="flex gap-3 pt-2">
                {['Facebook', 'Instagram', 'TikTok'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="rounded-full border px-3 py-1 text-xs theme-border hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-text)]"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="theme-text-soft mt-8 border-t pt-5 text-center text-xs theme-border">
          &copy; 2026 {brand.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
