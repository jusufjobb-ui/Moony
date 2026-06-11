import Link from 'next/link'

export default function BrandStory() {
  return (
    <section
      className="py-20 lg:py-28 bg-brand-card overflow-hidden"
      aria-labelledby="brand-story-heading"
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual side */}
          <div className="relative order-2 lg:order-1" aria-hidden="true">
            <div className="relative">
              {/* Large marble circle */}
              <div
                className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full mx-auto relative overflow-hidden shadow-2xl"
                style={{
                  background: 'conic-gradient(from 200deg at 45% 55%, #C8A99A 0%, #F0EAE3 20%, #8FAE8E 40%, #e8d5ce 60%, #d4c4bb 75%, #C8A99A 100%)',
                }}
              >
                {/* Interior texture layers */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse at 35% 35%, rgba(255,255,255,0.35) 0%, transparent 60%)',
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse at 70% 70%, rgba(143,174,142,0.3) 0%, transparent 50%)',
                  }}
                />
              </div>

              {/* Decorative small circle top right */}
              <div
                className="absolute top-0 right-0 md:right-8 w-20 h-20 rounded-full opacity-70"
                style={{
                  background: 'radial-gradient(circle, #8FAE8E, #F0EAE3)',
                }}
              />

              {/* Floating quote card */}
              <div className="absolute bottom-4 -right-4 lg:bottom-8 lg:-right-8 bg-white rounded-2xl shadow-xl px-5 py-4 max-w-[180px]">
                <p className="font-serif text-sm italic text-brand-text leading-snug">
                  "Skapad med händerna, inspirerad av naturen."
                </p>
                <p className="font-sans text-xs text-brand-muted mt-2">– Katrin, grundare</p>
              </div>

              {/* Location badge */}
              <div className="absolute top-4 -left-2 lg:-left-6 bg-brand-primary text-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                <span className="text-lg" aria-hidden="true">📍</span>
                <div>
                  <p className="text-xs font-sans font-semibold">Strömby</p>
                  <p className="text-xs font-sans opacity-80">Kalmar, Småland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="font-sans text-xs uppercase tracking-widest text-brand-muted block mb-4">
              Vår berättelse
            </span>
            <h2 id="brand-story-heading" className="section-heading mb-6">
              Bakom varje ljus finns en berättelse
            </h2>
            <div className="space-y-4 font-sans text-base text-brand-muted leading-relaxed">
              <p>
                Moony Flames skapades av Katrin i ett litet ateljé i Strömby, Småland. Det startade som en passion – ett sätt att skapa något vackert och meningsfullt med händerna.
              </p>
              <p>
                Idag tillverkas varje doftljus i små batcher med kärlek och noggrannhet. Vi använder svenskt sojavax, veganska ingredienser och noga utvalda dofter – för att du ska kunna njuta av ett ljus som är bra för dig och omvärlden.
              </p>
              <p>
                Det magiska med marmorerade ljus är att varje stycke är unikt. Färgerna smälter samman på sitt eget sätt – ett fenomen som aldrig kan planeras och aldrig kan upprepas exakt.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 my-8 py-8 border-y border-brand-primary/20">
              <div>
                <p className="font-serif text-3xl text-brand-primary">500+</p>
                <p className="font-sans text-xs text-brand-muted mt-1">Nöjda kunder</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-brand-primary">100%</p>
                <p className="font-sans text-xs text-brand-muted mt-1">Veganskt</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-brand-primary">Varje</p>
                <p className="font-sans text-xs text-brand-muted mt-1">Ljus är unikt</p>
              </div>
            </div>

            <Link href="/om-oss" className="btn-primary inline-flex items-center gap-2">
              Lär känna oss
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
