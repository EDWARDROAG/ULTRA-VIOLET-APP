import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { brand, featuredProducts, services } from '../data/siteData'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: 'easeOut' },
}

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-t-4 border-[#D4AF37] bg-neutral-950 pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_26%,rgba(168,85,247,0.56),transparent_32%),radial-gradient(circle_at_18%_18%,rgba(212,175,55,0.26),transparent_24%),linear-gradient(135deg,#08010f_0%,#2c0345_48%,#050505_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />
        <div className="absolute left-10 top-28 hidden h-60 w-60 rounded-full border border-[#D4AF37]/45 lg:block" />
        <div className="absolute right-1/4 top-28 hidden h-px w-56 rotate-[-18deg] bg-[#D4AF37]/60 lg:block" />

        <div className="container-page grid min-h-[640px] items-center gap-12 pb-16 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div {...fadeUp}>
            <div className="mb-10 inline-flex items-center gap-4">
              <span className="grid h-20 w-20 place-items-center rounded-full border border-[#D4AF37]/80 bg-black/40 font-serif text-3xl font-bold text-[#D4AF37]">
                AV
              </span>
              <div>
                <p className="font-serif text-4xl italic leading-none text-[#D4AF37]">{brand.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.6em] text-white/80">SAS</p>
                <p className="mt-2 text-sm text-[#D4AF37]/90">{brand.tagline}</p>
              </div>
            </div>
            <h1 className="max-w-3xl font-serif text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
              Creamos momentos <span className="gold-text block text-5xl italic normal-case sm:text-6xl">Inolvidables</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-purple-100/80">
              Detalles personalizados, diseno grafico y soluciones creativas para celebraciones, regalos,
              publicidad y proyectos escolares.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/servicios" className="btn-primary">Conoce servicios</Link>
              <Link to="/contacto" className="btn-secondary">Solicita una idea</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto h-[480px] max-w-[650px]">
              <div className="absolute right-8 top-8 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
              <div className="absolute right-12 top-10 h-80 w-80 overflow-hidden rounded-[3rem] border border-[#D4AF37]/50 bg-black shadow-2xl shadow-fuchsia-950/40">
                <img
                  src="/images/productos/ramo-personalizado.jpg"
                  alt="Ramo personalizado Aura Violet"
                  className="h-full w-full object-cover opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-purple-950/25" />
              </div>
              <div className="absolute bottom-8 left-6 w-72 rounded-3xl border border-[#D4AF37]/60 bg-black p-8 shadow-2xl">
                <p className="font-serif text-3xl italic text-[#D4AF37]">Aura Violet</p>
                <p className="mt-2 text-sm text-purple-100">Empaques, mugs, tarjetas y detalles personalizados.</p>
              </div>
              <div className="absolute bottom-0 right-6 rounded-3xl bg-white p-5 text-center text-neutral-950 shadow-2xl">
                <p className="font-serif text-3xl font-bold">Tu <span className="text-purple-800">♥</span></p>
                <p className="text-2xl font-bold leading-none">Diseno<br />Aqui</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#D4AF37]/25 bg-[#070707] py-12">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xl uppercase tracking-wide text-white">Nuestros</p>
            <h2 className="font-serif text-4xl font-bold uppercase text-[#D4AF37]">Servicios</h2>
            <div className="mt-3 h-px w-28 bg-[#D4AF37]" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.id} className="text-center">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-[#D4AF37]/70 bg-purple-950 text-2xl font-serif font-bold text-[#D4AF37] shadow-lg shadow-purple-900/30">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-sm font-bold uppercase text-white">{service.shortTitle}</h3>
                <p className="mt-2 text-xs leading-5 text-white/65">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[linear-gradient(135deg,#ffffff_0%,#f7f1ff_46%,#ffffff_100%)] text-neutral-950">
        <div className="container-page">
          <motion.div {...fadeUp} className="mb-10 text-center">
            <h2 className="font-serif text-4xl font-bold uppercase text-neutral-950">
              Productos <span className="text-[#D4AF37]">destacados</span>
            </h2>
            <p className="mt-3 text-purple-900">Detalles visuales listos para inspirar pedidos personalizados.</p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <article key={product.title} className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-xl shadow-purple-950/10">
                <img src={product.image} alt={product.title} className="h-48 w-full object-cover" />
                <div className="p-5 text-center">
                  <h3 className="font-bold text-neutral-950">{product.title}</h3>
                  <p className="mt-2 min-h-12 text-sm text-neutral-600">{product.description}</p>
                  <span className="mt-4 inline-flex rounded-full bg-purple-900 px-5 py-2 text-xs font-bold text-white">
                    {product.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080808] py-14">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="hidden min-h-80 rounded-r-[3rem] bg-[radial-gradient(circle_at_45%_30%,rgba(168,85,247,0.5),transparent_34%),linear-gradient(135deg,#090011,#111111)] lg:block" />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">Somos Aura Violet SAS</p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-white">Un emprendimiento creativo que transforma ideas en detalles inolvidables.</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-serif text-2xl text-[#D4AF37]">Mision</h3>
                <p className="mt-3 text-sm leading-6 text-purple-100/75">
                  Crear experiencias memorables mediante detalles personalizados, disenos creativos y trabajos de calidad.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-serif text-2xl text-[#D4AF37]">Vision</h3>
                <p className="mt-3 text-sm leading-6 text-purple-100/75">
                  Ser una marca reconocida por creatividad, calidad y originalidad para cada cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
