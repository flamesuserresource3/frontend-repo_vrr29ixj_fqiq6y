import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500" />
          <span className="text-lg font-semibold text-gray-800">Vibe Starter</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a className="hover:text-gray-900 transition" href="#features">Features</a>
          <a className="hover:text-gray-900 transition" href="#about">About</a>
          <a className="hover:text-gray-900 transition" href="#contact">Contact</a>
        </nav>

        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-3 space-y-2 text-gray-700">
            <a onClick={() => setOpen(false)} className="block" href="#features">Features</a>
            <a onClick={() => setOpen(false)} className="block" href="#about">About</a>
            <a onClick={() => setOpen(false)} className="block" href="#contact">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
