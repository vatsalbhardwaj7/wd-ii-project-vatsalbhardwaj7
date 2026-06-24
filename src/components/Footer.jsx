// Footer logo SVG (reused inline)
function FooterLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="url(#footerLogoGrad)" />
        <text x="14" y="19" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Inter">₳</text>
        <defs>
          <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7c3aed" />
            <stop offset="1" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-white font-bold text-base tracking-tight">Anti-Money</span>
    </div>
  )
}

// Footer link data — easy to add more
const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Contact Us', href: '#' },
]

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo + copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <FooterLogo />
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Anti-Money Inc. All rights reserved.
          </p>
        </div>

        {/* Footer links */}
        <nav className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-white/40 hover:text-white text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Made with love note */}
        <p className="text-white/20 text-xs hidden md:block">
          Built with ♥ for financial freedom
        </p>
      </div>
    </footer>
  )
}

export default Footer
