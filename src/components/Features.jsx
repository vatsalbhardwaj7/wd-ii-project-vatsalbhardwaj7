// FeatureCard is a reusable card component — receives props from Features
function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
      {/* Icon container */}
      <div className="w-12 h-12 bg-violet-500/15 border border-violet-400/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-500/25 transition-colors duration-300">
        <span className="text-2xl">{icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed">{description}</p>

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

// Feature data — easy to expand
const featuresData = [
  {
    id: 1,
    icon: '📊',
    title: 'Real-Time Analytics',
    description:
      'See exactly where your money goes with live dashboards, spending breakdowns, and trend visualizations that make sense at a glance.',
  },
  {
    id: 2,
    icon: '🛡️',
    title: 'Bank-Grade Security',
    description:
      'Your data is encrypted end-to-end with 256-bit AES encryption. We follow strict compliance standards so you never have to worry.',
  },
  {
    id: 3,
    icon: '🤖',
    title: 'AI Budget Advisor',
    description:
      'Our smart AI analyzes your habits and gives you personalized recommendations to cut waste, save more, and reach your goals faster.',
  },
]

function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              win financially
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Powerful tools that work together so you can stop guessing and start
            growing.
          </p>
        </div>

        {/* 3-column feature card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
