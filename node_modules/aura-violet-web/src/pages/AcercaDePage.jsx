import { motion } from 'framer-motion'
import { audiences, brand, values } from '../data/siteData'

export default function AcercaDePage() {
  return (
    <main className="bg-neutral-950 pt-28">
      <section className="section-padding">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-[2.5rem] p-7"
            >
              <div className="grid aspect-square place-items-center rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.25),transparent_28%),linear-gradient(145deg,#16001f,#3b0764,#050505)]">
                <div className="text-center">
                  <div className="mx-auto grid h-32 w-32 place-items-center rounded-full border border-[#D4AF37]/70 font-serif text-5xl font-bold text-[#D4AF37]">
                    AV
                  </div>
                  <p className="mt-6 text-sm uppercase tracking-[0.35em] text-purple-100">Alexandra Lopez</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">Nosotros</p>
              <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-6xl">{brand.legalName}</h1>
              <p className="mt-6 text-lg leading-8 text-purple-100/75">
                Un emprendimiento creativo dedicado al diseno, elaboracion y personalizacion de detalles especiales
                para toda ocasion. Combinamos creatividad, diseno grafico y trabajos manuales para crear productos
                unicos y soluciones personalizadas.
              </p>
            </motion.div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: 'Mision',
                text: 'Crear experiencias memorables mediante detalles personalizados, disenos creativos y trabajos de calidad que transmitan emociones.',
              },
              {
                title: 'Vision',
                text: 'Ser una marca reconocida por creatividad, calidad y originalidad, convirtiendonos en una opcion confiable para nuestros clientes.',
              },
              {
                title: 'Valor diferencial',
                text: 'En un solo lugar encuentras detalles personalizados, diseno grafico profesional, trabajos escolares y papeleria artesanal.',
              },
            ].map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-[2rem] p-7"
              >
                <h2 className="font-serif text-2xl font-bold text-[#D4AF37]">{card.title}</h2>
                <p className="mt-4 text-sm leading-6 text-purple-100/75">{card.text}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 grid gap-8 rounded-[2.5rem] bg-white p-7 text-neutral-950 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#6B21A8]">Publico objetivo</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {audiences.map((audience) => (
                  <span key={audience} className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-950">
                    {audience}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#6B21A8]">Valores</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {values.map((value) => (
                  <span key={value} className="rounded-full bg-[#D4AF37]/20 px-4 py-2 text-sm font-semibold text-neutral-800">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
