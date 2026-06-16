import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service, compact = false }) {
  const { title, shortTitle, description, icon, gradient, image } = service

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="glass-card group overflow-hidden rounded-[2rem]"
    >
      <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${gradient} p-5`}>
        {image && <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110" />}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-950/55 to-black/60" />
        <div className="relative flex h-full items-center justify-between">
          <span className="grid h-16 w-16 place-items-center rounded-full border border-[#D4AF37]/70 bg-black/35 font-serif text-xl font-bold text-[#D4AF37] shadow-xl">
            {icon}
          </span>
          <span className="h-24 w-24 rounded-full bg-[#D4AF37]/20 blur-2xl transition group-hover:bg-purple-300/30" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-white">{compact ? shortTitle : title}</h3>
        <p className="text-sm leading-6 text-purple-100/75">{description}</p>
        {!compact && (
          <Link to="/contacto" className="mt-6 inline-flex text-sm font-bold uppercase tracking-wide text-[#D4AF37]">
            Consultar servicio
          </Link>
        )}
      </div>
    </motion.article>
  )
}
