import { useState } from 'react'

// Logo mark icon for brand
function LogoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="14" fill="url(#logoGrad)" />
      <text x="14" y="19" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Inter">₳</text>
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7c3aed" />
          <stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Hamburger / Close icon
function HamburgerIcon({ isOpen }) {
  return (
    <div className="flex flex-col gap-1.5 cursor-pointer">
      <span
        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      />
    </div>
  )
}

function Navbar() {
  // useState for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      {/* Glass navbar container */}
      <div className="max-w-6xl mx-auto flex items-center justify-between backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
        
        {/* Logo — left side */}
        <a href="#" className="flex items-center gap-2 group" id="navbar-logo">
          <LogoIcon />
          <span className="text-white font-bold text-lg tracking-tight group-hover:text-purple-400 transition-colors duration-200">
            Anti-Money
          </span>
        </a>

        {/* Nav links — center (desktop) */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-purple-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Get Started button — right (desktop) */}
        <a
          href="#pricing"
          id="navbar-get-started"
          className="hidden md:inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
        >
          Get Started
          <span className="text-xs">→</span>
        </a>

        {/* Hamburger — mobile only */}
        <button
          id="navbar-hamburger"
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon isOpen={menuOpen} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm font-medium block transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Get Started →
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
