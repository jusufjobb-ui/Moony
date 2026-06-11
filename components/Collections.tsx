import Link from 'next/link'

const collections = [
  {
    id: 'marmorerade',
    title: 'Marmorerade Doftljus',
    subtitle: 'Unika mönster, aldrig upprepade',
    href: '/kollektioner#doftljus',
    gradient: 'conic-gradient(from 45deg at 40% 60%, #C8A99A, #F0EAE3, #8FAE8E, #e8d5ce, #C8A99A)',
    accentColor: 'bg-brand-primary',
    items: '12 produkter',
  },
  {
    id: 'personliga',
    title: 'Personliga Presenter',
    subtitle: 'Skapa ditt eget minnesvärda ljus',
    href: '/kollektioner#personliga',
    gradient: 'radial-gradient(ellipse at 40% 50%, #8FAE8E 0%, #c2d4c1 30%, #F0EAE3 60%, #d4bfb8 100%)',
    accentColor: 'bg-brand-secondary',
    items: '5 produkter',
  },
  {
    id: 'vaxsmaltare',
    title: 'Vaxsmältare & Doftvax',
    subtitle: 'Fyll hemmet med doft',
    href: '/kollektioner#vaxsmaltare',
    gradient: 'radial-gradient(circle at 60% 40%, #d4c4bb 0%, #C8A99A 30%, #F0EAE3 60%, #8FAE8E 100%)',
    accentColor: 'bg-brand-primary',
    items: '8 produkter',
  },
  {
    id: 'friska',
    title: 'Friska dofter',
    subtitle: 'Gröna, rena och friska noter',
    href: '/kollektioner#friska',
    gradient: 'radial-gradient(ellipse at 30% 70%, #b8cbb7 0%, #8FAE8E 30%, #F0EAE3 65%, #C8A99A 100%)',
    accentColor: 'bg-brand-secondary',
    items: '6 produkter',
  },
]

export default function Collections() {
  return (
    <section className="py-20 lg:py-28 bg-brand-bg" aria-labelledby="collections-heading">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="font-sans text-xs uppercase tracking-widest text-brand-muted block mb-3">
            Utforska
          </span>
          <h2 id="collections-heading" className="section-heading mb-4">
            Våra kollektioner
          </h2>
          <p className="section-subheading max-w-lg mx-auto">
            Från unika marmorerade ljus till personliga gåvor – hitta det perfekta ljuset för ditt hem.
          </p>
        </div>

        {/* Collections grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={collection.href}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] flex flex-col justify-end hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl"
              aria-label={`${collection.title} – ${collection.subtitle}`}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: collection.gradient }}
                aria-hidden="true"
              />

              {/* Overlay for text readability */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(44,36,32,0.7) 0%, rgba(44,36,32,0.1) 50%, transparent 100%)',
                }}
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative p-6 text-white">
                <span className={`inline-block ${collection.accentColor} text-white text-xs font-sans px-2.5 py-1 rounded-full mb-3 opacity-90`}>
                  {collection.items}
                </span>
                <h3 className="font-serif text-xl md:text-2xl leading-snug mb-1">
                  {collection.title}
                </h3>
                <p className="font-sans text-sm text-white/70">{collection.subtitle}</p>
                {/* Arrow */}
                <div className="mt-4 flex items-center gap-1.5 text-white/70 group-hover:text-white transition-colors text-sm font-sans">
                  Utforska
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
