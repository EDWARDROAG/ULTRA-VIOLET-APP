import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-purple-700">Bienvenidos a Aura Violet</h1>
      </main>
      <Footer />
    </div>
  )
}
