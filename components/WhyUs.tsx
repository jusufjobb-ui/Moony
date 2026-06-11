const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Aldrig samma två gånger',
    description: 'Marmorerade mönster skapas när färger smälter samman – ett fenomen som aldrig kan upprepas exakt. Varje ljus är ett unikt konstverk.',
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Veganskt & hållbart',
    description: 'Sojavax av svenska råvaror, dofter utan ftalater och parabener. Bra för dig och planeten.',
    color: 'text-brand-secondary',
    bg: 'bg-brand-secondary/10',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Handgjort med kärlek',
    description: 'Varje ljus tillverkas för hand i liten skala i vår ateljé i Småland. Aldrig massproducerat, alltid med omsorg.',
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: 'Personlig service',
    description: 'Skapa ett minnesvärdt doftljus med din egen text – perfekt som gåva till någon du tycker om.',
    color: 'text-brand-secondary',
    bg: 'bg-brand-secondary/10',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="why-us-heading">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="font-sans text-xs uppercase tracking-widest text-brand-muted block mb-3">
            Varför välja oss
          </span>
          <h2 id="why-us-heading" className="section-heading mb-4">
            Mer än bara ett ljus
          </h2>
          <p className="section-subheading max-w-lg mx-auto">
            Vi tror att varje detalj spelar roll – från råvaror till slutprodukt.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center flex flex-col items-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon circle */}
              <div
                className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-5 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              <h3 className="font-serif text-xl text-brand-text mb-3 group-hover:text-brand-primary transition-colors">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-brand-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-brand-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 20% 50%, #C8A99A 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, #8FAE8E 0%, transparent 50%)',
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h3 className="font-serif text-3xl md:text-4xl text-brand-text mb-4">
              Redo att hitta ditt unika ljus?
            </h3>
            <p className="font-sans text-brand-muted mb-8 max-w-md mx-auto">
              Varje beställning är unik. Varje leverans är en liten överraskning.
            </p>
            <a href="/kollektioner" className="btn-primary">
              Shoppa nu – Fri frakt över 500 kr
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
