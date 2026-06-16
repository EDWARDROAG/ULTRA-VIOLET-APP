import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import { brand } from '../data/siteData'

export default function ContactoPage() {
  return (
    <main className="bg-neutral-950 pt-28">
      <section className="section-padding">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">Contacto</p>
            <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-6xl">Cuéntanos tu idea</h1>
            <p className="mt-5 text-lg leading-8 text-purple-100/75">
              Completa el formulario y simularemos el envio con una notificacion. No se recarga la pagina ni se conecta
              a backend.
            </p>

            <div className="mt-8 space-y-4">
              {[
                ['Correo', brand.email],
                ['Contacto', brand.owner],
                ['WhatsApp', brand.whatsapp],
                ['Horario', 'Lunes a viernes 8:00 a.m. - 6:00 p.m. / Sabados 9:00 a.m. - 2:00 p.m.'],
              ].map(([label, value]) => (
                <div key={label} className="glass-card rounded-2xl p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">{label}</p>
                  <p className="mt-2 text-purple-100">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  )
}
