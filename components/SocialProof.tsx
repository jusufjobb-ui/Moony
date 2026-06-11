const reviews = [
  {
    name: 'Sofia L.',
    location: 'Stockholm',
    text: 'Absolut vackraste ljusen jag ägt! Marmoreffekten är magisk och doften (Pain au Chocolat) är underbar. Köpte tre stycken och gav bort som julklappar – alla blev glada!',
    rating: 5,
    product: 'Marmorerat Doftljus',
    gradient: 'radial-gradient(ellipse at 30% 50%, #C8A99A, #F0EAE3, #8FAE8E)',
  },
  {
    name: 'Emma K.',
    location: 'Göteborg',
    text: 'Beställde ett personligt ljus till min mamma med en liten hälsning på etiketten. Hon grät av rörelse. Leveransen gick supersnabbt och paketeringen var så fin!',
    rating: 5,
    product: 'Säg det med ett ljus',
    gradient: 'radial-gradient(ellipse at 70% 30%, #8FAE8E, #F0EAE3, #C8A99A)',
  },
  {
    name: 'Anna M.',
    location: 'Malmö',
    text: 'Vaxsmältaren luktar fantastiskt och räcker jättelänge. Toppen kvalitet på det veganska vaxet – ingen sot och jämn doft. Beställer alltid från Moony Flames nu!',
    rating: 5,
    product: 'Vaxsmältare',
    gradient: 'radial-gradient(circle at 50% 50%, #d4c4bb, #C8A99A, #8FAE8E)',
  },
]

const instagramPosts = [
  { gradient: 'radial-gradient(circle at 30% 40%, #C8A99A, #F0EAE3, #8FAE8E)', likes: 234 },
  { gradient: 'conic-gradient(from 90deg, #8FAE8E, #F0EAE3, #C8A99A, #8FAE8E)', likes: 189 },
  { gradient: 'radial-gradient(ellipse at 60% 60%, #e8d5ce, #C8A99A, #F0EAE3)', likes: 312 },
  { gradient: 'radial-gradient(circle at 40% 30%, #b8cbb7, #8FAE8E, #F0EAE3)', likes: 267 },
  { gradient: 'conic-gradient(from 180deg, #C8A99A, #FAF7F2, #8FAE8E, #e8d5ce)', likes: 198 },
  { gradient: 'radial-gradient(ellipse at 70% 40%, #d4bfb8, #F0EAE3, #8FAE8E)', likes: 145 },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} av 5 stjärnor`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function SocialProof() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="social-proof-heading">
      <div className="container-max">
        {/* Reviews */}
        <div className="text-center mb-14">
          <span className="font-sans text-xs uppercase tracking-widest text-brand-muted block mb-3">
            Kundrecensioner
          </span>
          <h2 id="social-proof-heading" className="section-heading mb-2">
            Vad våra kunder säger
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-sans text-sm font-semibold text-brand-text">4.9/5</span>
            <span className="font-sans text-sm text-brand-muted">baserat på 127 recensioner</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {reviews.map((review) => (
            <article key={review.name} className="bg-brand-bg rounded-3xl p-6 relative">
              {/* Quote mark */}
              <span className="absolute top-6 right-6 font-serif text-5xl text-brand-primary/20 leading-none select-none" aria-hidden="true">
                "
              </span>

              <StarRating rating={review.rating} />

              <p className="font-sans text-sm text-brand-text leading-relaxed mt-3 mb-5">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar gradient */}
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0"
                  style={{ background: review.gradient }}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-sans text-sm font-semibold text-brand-text">{review.name}</p>
                  <p className="font-sans text-xs text-brand-muted">{review.location} · {review.product}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Instagram grid */}
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl text-brand-text mb-2">Följ oss på Instagram</h3>
          <a
            href="https://instagram.com/moonyflames"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-brand-muted hover:text-brand-primary transition-colors"
            aria-label="Besök Moony Flames på Instagram"
          >
            @moonyflames
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3" aria-label="Instagram-bilder">
          {instagramPosts.map((post, i) => (
            <a
              key={i}
              href="https://instagram.com/moonyflames"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-2xl overflow-hidden group"
              aria-label={`Visa Instagram-post ${i + 1} – ${post.likes} gilla-markeringar`}
            >
              <div
                className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                style={{ background: post.gradient }}
                aria-hidden="true"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center" aria-hidden="true">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <svg className="w-5 h-5 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="font-sans text-xs">{post.likes}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
