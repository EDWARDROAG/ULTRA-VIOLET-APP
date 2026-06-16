export default function PortfolioCard({ item, index, onClick }) {
  const palette = [
    'from-purple-950 via-fuchsia-800 to-amber-700',
    'from-black via-purple-900 to-pink-700',
    'from-violet-950 via-neutral-950 to-[#D4AF37]',
    'from-purple-800 via-black to-violet-950',
  ]

  return (
    <button
      type="button"
      onClick={() => onClick(item)}
      className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] text-left shadow-2xl shadow-purple-950/25 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${palette[index % palette.length]}`} />
      <div className="absolute inset-0 opacity-50">
        <div className="absolute left-6 top-8 h-24 w-24 rounded-full border border-[#D4AF37]/40" />
        <div className="absolute bottom-12 right-6 h-28 w-28 rounded-full bg-white/10 blur-xl" />
        <div className="absolute inset-x-8 top-1/2 h-px bg-[#D4AF37]/60" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition group-hover:opacity-95" />
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white transition group-hover:-translate-y-1">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">{item.category}</p>
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="mt-2 text-xs text-white/70">Ver detalle</p>
      </div>
    </button>
  )
}
