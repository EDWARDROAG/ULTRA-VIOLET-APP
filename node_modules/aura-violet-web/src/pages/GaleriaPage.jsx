import { useState } from 'react'
import { motion } from 'framer-motion'
import PortfolioCard from '../components/PortfolioCard'
import { galleryItems } from '../data/siteData'

export default function GaleriaPage() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <main className="bg-neutral-950 pt-28">
      <section className="section-padding">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">Galeria</p>
            <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-6xl">Inspiracion Aura Violet</h1>
            <p className="mt-5 text-lg leading-8 text-purple-100/75">
              Muestras visuales preparadas como placeholders elegantes mientras se cargan fotografias reales de trabajos.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <PortfolioCard item={item} index={index} onClick={setSelectedItem} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-5 backdrop-blur" onClick={() => setSelectedItem(null)}>
          <div
            className="glass-card max-w-xl rounded-[2rem] p-6 text-center"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">{selectedItem.category}</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white">{selectedItem.title}</h2>
            <p className="mt-4 text-purple-100/75">
              Este espacio funcionara como lightbox para fotografias reales del proyecto seleccionado.
            </p>
            <button type="button" className="btn-primary mt-6" onClick={() => setSelectedItem(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
