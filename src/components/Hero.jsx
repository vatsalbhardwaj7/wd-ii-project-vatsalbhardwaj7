function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-700/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge pill */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/70 text-xs font-medium tracking-wide uppercase">
            Now in Public Beta
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
          Stop Losing{' '}
          <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
            Money.
          </span>
          <br />
          Start{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Owning It.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Anti-Money is the financial command center built for people who want
          clarity, control, and confidence over every dollar they earn.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary CTA */}
          <a
            href="#pricing"
            id="hero-primary-cta"
            className="group inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-1"
          >
            Start for Free
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#features"
            id="hero-secondary-cta"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <span className="text-violet-400">▶</span>
            See How It Works
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-10 text-white/30 text-sm">
          Trusted by{' '}
          <span className="text-white/60 font-semibold">12,000+</span> users
          worldwide · No credit card required
        </p>

        {/* Floating glass card mockup */}
        <div className="mt-16 animate-float">
          <div className="relative max-w-lg mx-auto backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Total Balance</p>
                <p className="text-white text-3xl font-black">$48,291.00</p>
              </div>
              <div className="w-12 h-12 bg-violet-500/20 border border-violet-400/20 rounded-xl flex items-center justify-center">
                <span className="text-violet-400 text-xl">💰</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-white/5 rounded-xl p-3">
                <p className="text-white/40 text-xs mb-1">Income</p>
                <p className="text-green-400 text-sm font-bold">+$6,200</p>
              </div>
              <div className="flex-1 bg-white/5 rounded-xl p-3">
                <p className="text-white/40 text-xs mb-1">Expenses</p>
                <p className="text-red-400 text-sm font-bold">-$1,890</p>
              </div>
              <div className="flex-1 bg-white/5 rounded-xl p-3">
                <p className="text-white/40 text-xs mb-1">Savings</p>
                <p className="text-violet-400 text-sm font-bold">$4,310</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
