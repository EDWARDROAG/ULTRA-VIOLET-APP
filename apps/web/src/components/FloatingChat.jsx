import { useState } from 'react'
import { Link } from 'react-router-dom'
import { brand } from '../data/siteData'

const quickActions = [
  'Quiero un regalo personalizado',
  'Necesito diseno grafico',
  'Consulta sobre trabajos escolares',
]

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappUrl = 'https://wa.me/?text=Hola%20Aura%20Violet,%20quiero%20informacion%20sobre%20sus%20servicios'

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 flex w-[calc(100vw-2.5rem)] max-w-[320px] flex-col items-end gap-4">
      {isOpen && (
        <div className="pointer-events-auto overflow-hidden rounded-2xl border border-purple-200/30 bg-white text-neutral-950 shadow-2xl shadow-purple-950/40">
          <div className="flex items-center justify-between bg-gradient-to-r from-purple-950 to-fuchsia-800 px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <img src={brand.logo} alt="Aura Violet" className="h-9 w-9 rounded-full bg-white object-cover" />
              <div>
                <p className="text-sm font-bold">Aura Violet Asistente</p>
                <p className="text-xs text-purple-100">En linea</p>
              </div>
            </div>
            <button type="button" aria-label="Cerrar chat" className="text-lg font-bold" onClick={() => setIsOpen(false)}>
              x
            </button>
          </div>
          <div className="space-y-3 p-4 text-sm">
            <p>Hola!</p>
            <p>En que podemos ayudarte hoy?</p>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <Link
                  key={action}
                  to="/contacto"
                  className="block rounded-xl bg-purple-50 px-3 py-2 text-right text-xs font-semibold text-purple-950 transition hover:bg-purple-100"
                >
                  {action}
                </Link>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2 text-xs text-neutral-400">
              <span className="flex-1">Escribe tu mensaje...</span>
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-purple-800 text-white">›</span>
            </div>
          </div>
        </div>
      )}

      <div className="pointer-events-auto flex gap-3">
        <button
          type="button"
          aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
          className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-purple-700 to-fuchsia-600 text-3xl text-white shadow-2xl shadow-purple-950/40"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? 'x' : <img src={brand.logo} alt="" className="h-12 w-12 rounded-full bg-white object-cover" />}
        </button>
        <a
          href={whatsappUrl}
          aria-label="WhatsApp"
          target="_blank"
          rel="noreferrer"
          className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500 text-xl font-bold text-white shadow-2xl shadow-emerald-950/30"
        >
          <span className="rounded-full border-2 border-white px-2 py-1 text-sm">WA</span>
        </a>
      </div>
    </div>
  )
}
