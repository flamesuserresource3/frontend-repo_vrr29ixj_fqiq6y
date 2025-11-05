function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Hello, world — build beautiful apps faster
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A clean starting point with thoughtful components, modern styling, and sensible defaults. Ship your idea without the boilerplate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700">
                Get Started
              </a>
              <a href="#about" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                Learn More
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              No sign up required. Fully open and customizable.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-white shadow-lg border border-gray-200 p-6">
              <div className="h-full w-full grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 opacity-90" />
                <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 opacity-90" />
                <div className="rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 opacity-90" />
                <div className="rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 opacity-90" />
                <div className="rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 opacity-90" />
                <div className="rounded-lg bg-gradient-to-br from-fuchsia-500 to-rose-500 opacity-90" />
                <div className="rounded-lg bg-gradient-to-br from-slate-500 to-gray-700 opacity-90" />
                <div className="rounded-lg bg-gradient-to-br from-lime-400 to-green-500 opacity-90" />
                <div className="rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/60" />
    </section>
  )
}

export default Hero
