import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/siteData'

export default function ServiciosPage() {
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
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">Servicios</p>
            <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-6xl">Todo para crear, regalar y comunicar</h1>
            <p className="mt-5 text-lg leading-8 text-purple-100/75">
              Cuatro lineas creativas para resolver detalles especiales, piezas graficas, proyectos escolares y
              papeleria artesanal en un solo lugar.
            </p>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
