import { Link } from 'react-router-dom'
import { brand } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container-page py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/images/logo/aura-violet-logo.svg"
                alt="Aura Violet"
                className="h-14 w-14 rounded-full border border-[#D4AF37]/70 bg-white object-cover"
              />
              <div>
                <p className="font-serif text-2xl text-[#D4AF37]">{brand.name}</p>
                <p className="text-sm text-purple-100/75">{brand.tagline}</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/70">
              Detalles personalizados, diseno grafico y soluciones creativas para regalos, celebraciones,
              publicidad y proyectos escolares.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Enlaces</h3>
            <div className="grid gap-2 text-sm text-white/70">
              <Link className="hover:text-[#D4AF37]" to="/">Inicio</Link>
              <Link className="hover:text-[#D4AF37]" to="/servicios">Servicios</Link>
              <Link className="hover:text-[#D4AF37]" to="/galeria">Productos</Link>
              <Link className="hover:text-[#D4AF37]" to="/contacto">Contacto</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Contacto</h3>
            <div className="space-y-2 text-sm text-white/70">
              <p>{brand.owner}</p>
              <p>{brand.email}</p>
              <p>{brand.whatsapp}</p>
              <p>Lunes a viernes: 8:00 a.m. - 6:00 p.m.</p>
              <div className="flex gap-3 pt-2">
                {['Facebook', 'Instagram', 'TikTok'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="rounded-full border border-white/10 px-3 py-1 text-xs hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-white/50">
          &copy; 2026 {brand.legalName}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
