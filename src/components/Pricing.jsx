// PlanCard is a reusable card for each pricing tier — receives props from Pricing
function PlanCard({ name, price, description, features, ctaLabel, isHighlighted }) {
  return (
    <div
      className={`relative flex flex-col backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        isHighlighted
          ? 'bg-violet-600/20 border-violet-400/40 hover:shadow-violet-500/20 scale-105'
          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
      }`}
    >
      {/* "Most Popular" badge — only on highlighted plan */}
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
          ✦ Most Popular
        </div>
      )}

      {/* Plan name */}
      <h3
        className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
          isHighlighted ? 'text-violet-300' : 'text-white/60'
        }`}
      >
        {name}
      </h3>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-4xl font-black text-white">{price}</span>
        {price !== 'Custom' && (
          <span className="text-white/40 text-sm">/month</span>
        )}
      </div>

      {/* Description */}
      <p className="text-white/50 text-sm mb-6">{description}</p>

      {/* Divider */}
      <div className="h-px bg-white/10 mb-6" />

      {/* Feature list */}
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm">
            <span
              className={`w-4 h-4 flex items-center justify-center rounded-full text-xs font-bold flex-shrink-0 ${
                isHighlighted
                  ? 'bg-violet-500/30 text-violet-300'
                  : 'bg-white/10 text-white/60'
              }`}
            >
              ✓
            </span>
            <span className="text-white/70">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="#"
        id={`pricing-cta-${name.toLowerCase()}`}
        className={`block text-center font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
          isHighlighted
            ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40'
            : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/20'
        }`}
      >
        {ctaLabel}
      </a>
    </div>
  )
}

// Pricing plans data
const plansData = [
  {
    id: 1,
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started with personal finance basics.',
    features: [
      'Up to 2 connected accounts',
      'Monthly spending summary',
      'Basic budget categories',
      'Mobile app access',
    ],
    ctaLabel: 'Get Started Free',
    isHighlighted: false,
  },
  {
    id: 2,
    name: 'Pro',
    price: '$12',
    description: 'For serious budgeters who want full control and insights.',
    features: [
      'Unlimited connected accounts',
      'Real-time analytics & reports',
      'AI Budget Advisor',
      'Custom budget categories',
      'Priority customer support',
      'Export to CSV / PDF',
    ],
    ctaLabel: 'Start Pro Trial',
    isHighlighted: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams and companies managing complex finances at scale.',
    features: [
      'Everything in Pro',
      'Multi-user team workspace',
      'Dedicated account manager',
      'Custom integrations & API',
      'SSO & advanced security',
    ],
    ctaLabel: 'Contact Sales',
    isHighlighted: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple,{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              transparent
            </span>{' '}
            pricing
          </h2>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            No hidden fees. No surprises. Cancel any time.
          </p>
        </div>

        {/* 3-column pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plansData.map((plan) => (
            <PlanCard
              key={plan.id}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              ctaLabel={plan.ctaLabel}
              isHighlighted={plan.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
