function Features() {
  const items = [
    {
      title: 'Fast by default',
      description: 'Ship quickly with Vite, React, Tailwind, and a production-ready layout.'
    },
    {
      title: 'Beautiful UI',
      description: 'Clean components with balanced spacing, modern typography, and subtle shadows.'
    },
    {
      title: 'Batteries included',
      description: 'Animations, icons, and 3D ready. Add depth without the complexity.'
    },
    {
      title: 'Responsive',
      description: 'Looks great on phones, tablets, and desktops with minimal effort.'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Features</h2>
          <p className="mt-3 text-gray-600">Everything you need to move from idea to launch.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
