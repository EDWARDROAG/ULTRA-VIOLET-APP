import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function ContactoPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
