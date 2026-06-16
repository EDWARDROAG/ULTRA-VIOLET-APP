import { Link } from 'react-router-dom'

const quickActions = [
  'Quiero un regalo personalizado',
  'Necesito diseno grafico',
  'Consulta sobre trabajos escolares',
]

export default function FloatingChat() {
  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 hidden w-[300px] flex-col items-end gap-4 lg:flex">
      <div className="pointer-events-auto overflow-hidden rounded-2xl border border-purple-200/30 bg-white text-neutral-950 shadow-2xl shadow-purple-950/40">
        <div className="bg-gradient-to-r from-purple-950 to-fuchsia-800 px-4 py-3 text-white">
          <p className="text-sm font-bold">Aura Violet Asistente</p>
          <p className="text-xs text-purple-100">En linea</p>
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

      <div className="pointer-events-auto flex gap-3">
        <Link
          to="/contacto"
          aria-label="Abrir chat"
          className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-purple-700 to-fuchsia-600 text-3xl text-white shadow-2xl shadow-purple-950/40"
        >
          x
        </Link>
        <a
          href="#"
          aria-label="WhatsApp"
          className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500 text-xl font-bold text-white shadow-2xl shadow-emerald-950/30"
        >
          WA
        </a>
      </div>
    </div>
  )
}
