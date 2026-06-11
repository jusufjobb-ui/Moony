'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2C2420 0%, #3d302b 50%, #2C2420 100%)',
      }}
      aria-labelledby="newsletter-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #C8A99A, transparent)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #8FAE8E, transparent)',
          }}
        />
      </div>

      <div className="container-max relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Candle icon */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: 'rgba(200,169,154,0.2)' }}
            aria-hidden="true"
          >
            <span className="text-3xl">🕯️</span>
          </div>

          <h2
            id="newsletter-heading"
            className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight"
          >
            Bli en del av Moony Flames-familjen
          </h2>
          <p className="font-sans text-white/60 mb-3 leading-relaxed">
            Prenumerera på vårt nyhetsbrev och få 10% rabatt på din första beställning, plus exklusiva erbjudanden och bakom-kulisserna-innehåll.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/50 text-xs font-sans mb-8">
            <span>✓ 10% rabatt direkt</span>
            <span>✓ Nya dofter först</span>
            <span>✓ Inga spam-mail</span>
          </div>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              aria-label="Prenumerera på nyhetsbrev"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                E-postadress
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Din e-postadress"
                required
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder-white/40 font-sans text-sm focus:outline-none focus:border-brand-primary focus:bg-white/15 transition-colors"
                aria-required="true"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-brand-primary text-white px-7 py-3 rounded-full font-sans text-sm font-medium hover:bg-opacity-90 transition-all duration-200 hover:shadow-lg active:scale-95 disabled:opacity-70 whitespace-nowrap"
              >
                {loading ? 'Skickar...' : 'Prenumerera'}
              </button>
            </form>
          ) : (
            <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-6 max-w-md mx-auto">
              <span className="text-3xl block mb-3" aria-hidden="true">🌿</span>
              <p className="font-serif text-xl text-white mb-2">Välkommen till familjen!</p>
              <p className="font-sans text-white/60 text-sm">
                Din rabattkod på 10% är på väg till din inkorg.
              </p>
            </div>
          )}

          <p className="font-sans text-white/30 text-xs mt-4">
            Du kan avregistrera dig när som helst. Vi delar aldrig din information.
          </p>
        </div>
      </div>
    </section>
  )
}
