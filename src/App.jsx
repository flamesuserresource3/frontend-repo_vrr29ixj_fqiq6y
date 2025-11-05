import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold">About this starter</h2>
            <p className="mt-4 text-gray-600 text-lg">
              This page gives you a polished starting point. It includes a responsive header, a compelling hero, a clear feature grid, and a simple footer. Use it to kick off landing pages, dashboards, or apps.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
