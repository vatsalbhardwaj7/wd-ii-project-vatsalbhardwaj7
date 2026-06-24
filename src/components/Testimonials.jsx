// TestimonialCard receives quote, name, and role as props
function TestimonialCard({ quote, name, role, avatarInitial }) {
  return (
    <div className="group backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/5">
      {/* Quote mark */}
      <div className="text-4xl text-violet-400/40 font-serif leading-none mb-3 select-none">"</div>

      {/* The quote text */}
      <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
        {quote}
      </p>

      {/* Divider */}
      <div className="h-px bg-white/10 mb-4" />

      {/* Author info */}
      <div className="flex items-center gap-3">
        {/* Avatar — initial letter */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-bold">{avatarInitial}</span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-white/40 text-xs">{role}</p>
        </div>
        {/* Star rating */}
        <div className="ml-auto flex gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-xs">★</span>
          ))}
        </div>
      </div>
    </div>
  )
}

// Testimonial data
const testimonialsData = [
  {
    id: 1,
    quote:
      "Anti-Money completely changed how I think about spending. I saved $800 in my first month just by following the AI recommendations. I can't imagine managing finances without it.",
    name: 'Sarah Chen',
    role: 'Product Designer @ Figma',
    avatarInitial: 'S',
  },
  {
    id: 2,
    quote:
      "I've tried every budgeting app out there. Anti-Money is the first one that actually makes me feel in control. The real-time analytics are clean, fast, and genuinely useful.",
    name: 'Marcus Johnson',
    role: 'Software Engineer @ Stripe',
    avatarInitial: 'M',
  },
  {
    id: 3,
    quote:
      "We rolled this out to our entire finance team. The enterprise plan gives us exactly what we need — multi-user support, custom reports, and security that our compliance team loves.",
    name: 'Priya Mehta',
    role: 'CFO @ NovaTech Solutions',
    avatarInitial: 'P',
  },
]

function Testimonials() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loved by{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              real users
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            Don't take our word for it — here's what our community has to say.
          </p>
        </div>

        {/* 3-column testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              avatarInitial={testimonial.avatarInitial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
