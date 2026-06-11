'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-brand-bg"
      aria-label="Välkommen till Moony Flames"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large soft gradient blob top right */}
        <div
          className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #C8A99A 0%, #F0EAE3 40%, transparent 70%)',
          }}
        />
        {/* Soft sage accent bottom left */}
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #8FAE8E 0%, #F0EAE3 50%, transparent 70%)',
          }}
        />
      </div>

      <div className="container-max w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
          {/* Text content */}
          <div
            className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {/* Pre-headline badge */}
            <div className="inline-flex items-center gap-2 bg-brand-card rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
              <span className="font-sans text-xs uppercase tracking-widest text-brand-muted">
                Handgjort i Småland sedan 2021
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-brand-text leading-[1.05] mb-6">
              Handgjorda doftljus{' '}
              <span className="italic text-brand-primary">som aldrig upprepas</span>
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-lg text-brand-muted leading-relaxed mb-8 max-w-lg">
              Varje Moony Flames-ljus är unikt – ett konstverk skapat av veganskt sojavax och dofter som fyller ditt hem med värme och personlighet.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/kollektioner"
                className="btn-primary text-center"
                aria-label="Shoppa doftljus och vaxprodukter"
              >
                Shoppa nu
              </Link>
              <Link
                href="/om-oss"
                className="btn-secondary text-center"
                aria-label="Läs vår berättelse om Moony Flames"
              >
                Läs vår historia
              </Link>
            </div>

            {/* Social proof mini */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2" aria-hidden="true">
                {[
                  { bg: 'marble-gradient-1' },
                  { bg: 'marble-gradient-2' },
                  { bg: 'marble-gradient-3' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-white ${item.bg}`}
                  />
                ))}
              </div>
              <p className="font-sans text-sm text-brand-muted">
                <span className="font-semibold text-brand-text">500+</span> nöjda kunder
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div
            className={`relative flex items-center justify-center transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/flatlay.jpeg"
                alt="Moony Flames doftljus med citrus, blommor och kvistar"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay for blending */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5" />
            </div>

            {/* Floating badge - top left */}
            <div
              className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 animate-bounce"
              style={{ animationDuration: '3s' }}
            >
              <span className="text-xl">🌱</span>
              <div>
                <p className="text-xs font-sans font-semibold text-brand-text">100% Veganskt</p>
                <p className="text-xs font-sans text-brand-muted">Sojavax</p>
              </div>
            </div>

            {/* Floating badge - bottom right */}
            <div
              className="absolute -bottom-4 -right-4 bg-brand-primary rounded-2xl shadow-lg px-4 py-3 text-white animate-bounce"
              style={{ animationDuration: '4s', animationDelay: '1s' }}
            >
              <p className="text-xs font-sans font-semibold">Handgjort i Sverige</p>
              <p className="text-xs font-sans opacity-80">Strömby, Småland</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-muted animate-bounce"
        style={{ animationDuration: '2s' }}
        aria-hidden="true"
      >
        <span className="font-sans text-xs uppercase tracking-widest">Scrolla</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
