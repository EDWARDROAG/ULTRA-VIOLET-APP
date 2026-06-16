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
      <section className="theme-page relative isolate overflow-hidden border-t-4 border-[var(--theme-accent)] pt-24">
        <div className="theme-hero-overlay absolute inset-0 -z-10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[var(--theme-bg)] to-transparent" />
        <div className="theme-decor-line absolute right-1/4 top-28 hidden h-px w-56 rotate-[-18deg] bg-[var(--theme-accent)]/60 lg:block" />

        <div className="container-page grid min-h-[640px] items-center gap-12 pb-16 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div {...fadeUp}>
            <div className="mb-10 inline-flex items-center gap-4">
              <img
                src={brand.logo}
                alt={brand.name}
                className="theme-logo h-20 w-20 rounded-full object-contain p-1.5"
              />
              <div>
                <p className="theme-accent font-serif text-4xl italic leading-none">{brand.name}</p>
                <p className="theme-text-muted mt-2 text-sm">{brand.tagline}</p>
              </div>
            </div>
            <h1 className="theme-text max-w-3xl font-serif text-4xl font-bold uppercase leading-tight sm:text-5xl">
              Creamos momentos <span className="gold-text block text-5xl italic normal-case sm:text-6xl">Inolvidables</span>
            </h1>
            <p className="theme-text-muted mt-6 max-w-xl text-lg leading-8">
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
            <div className="relative mx-auto max-w-[650px] overflow-hidden rounded-[2rem] border border-[var(--theme-accent)]/50 shadow-2xl shadow-purple-950/20">
              <img src={brand.hero} alt="Hero Aura Violet" className="h-auto w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="theme-surface border-y py-12 theme-border">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="theme-text text-xl uppercase tracking-wide">Nuestros</p>
            <h2 className="theme-accent font-serif text-4xl font-bold uppercase">Servicios</h2>
            <div className="mt-3 h-px w-28 bg-[var(--theme-accent)]" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.id} className="text-center">
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-[var(--theme-accent)] shadow-lg shadow-purple-900/20">
                  <img src={service.image} alt={service.shortTitle} className="h-full w-full object-cover" />
                </div>
                <h3 className="theme-text mt-4 text-sm font-bold uppercase">{service.shortTitle}</h3>
                <p className="theme-text-soft mt-2 text-xs leading-5">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-products-section section-padding">
        <div className="container-page">
          <motion.div {...fadeUp} className="mb-10 text-center">
            <h2 className="font-serif text-4xl font-bold uppercase" style={{ color: 'var(--theme-products-text)' }}>
              Productos <span className="theme-accent">destacados</span>
            </h2>
            <p className="mt-3" style={{ color: 'var(--theme-products-muted)' }}>
              Detalles visuales listos para inspirar pedidos personalizados.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <article key={product.title} className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-xl shadow-purple-950/10">
                <img src={product.image} alt={product.title} className="h-48 w-full object-cover" />
                <div className="p-5 text-center">
                  <h3 className="font-bold text-purple-950">{product.title}</h3>
                  <p className="mt-2 min-h-12 text-sm text-purple-800/80">{product.description}</p>
                  <span className="mt-4 inline-flex rounded-full bg-purple-900 px-5 py-2 text-xs font-bold text-white">
                    {product.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-surface-alt py-14">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="hidden min-h-80 place-items-center rounded-r-[3rem] border p-10 theme-border lg:grid" style={{ background: 'var(--theme-card-bg)' }}>
            <img
              src={brand.logo}
              alt="Logo Aura Violet"
              className="theme-logo max-h-56 w-full max-w-xs rounded-[2rem] object-contain p-4 shadow-2xl shadow-purple-950/20"
            />
          </div>
          <div>
            <p className="theme-accent text-sm font-bold uppercase tracking-[0.35em]">Somos Aura Violet</p>
            <h2 className="theme-text mt-3 font-serif text-4xl font-bold">
              Un emprendimiento creativo que transforma ideas en detalles inolvidables.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="theme-accent font-serif text-2xl">Mision</h3>
                <p className="theme-text-muted mt-3 text-sm leading-6">
                  Crear experiencias memorables mediante detalles personalizados, disenos creativos y trabajos de calidad.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="theme-accent font-serif text-2xl">Vision</h3>
                <p className="theme-text-muted mt-3 text-sm leading-6">
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
