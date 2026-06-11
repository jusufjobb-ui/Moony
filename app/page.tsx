'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative bg-brand-bg overflow-hidden">
      <div className="container-max grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] items-center gap-0">

        {/* Text */}
        <div className="py-24 lg:py-0 pr-0 lg:pr-16 order-2 lg:order-1">
          <p className="font-sans text-xs uppercase tracking-widest text-brand-muted mb-6">
            Handgjort i Strömby, Småland
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-brand-text leading-[1.05] mb-7">
            Ljus för stunder<br />
            <em className="text-brand-primary not-italic">som räknas</em>
          </h1>
          <p className="font-sans text-lg text-brand-muted leading-relaxed mb-10 max-w-md">
            Varje ljus är gjort för hand av mig, Katrin — i liten skala, med veganskt sojavax och dofter som ska få dig att stanna upp och andas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/kollektioner" className="btn-primary text-center">
              Se alla ljus
            </Link>
            <Link href="/om-oss" className="btn-secondary text-center">
              Min berättelse
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2 h-[55vw] lg:h-screen max-h-[700px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/aurora.jpeg"
            alt="Aurora – handgjort doftljus av Moony Flames"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-transparent to-transparent lg:from-transparent" />
          {/* Candle label overlay */}
          <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-xl max-w-[200px]">
            <p className="font-serif text-base italic text-brand-text leading-snug">
              "For moments that matter."
            </p>
            <p className="font-sans text-xs text-brand-muted mt-1.5">— Aurora</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Ingredient strip ──────────────────────────────────────────────────────────

function Strip() {
  return (
    <div className="bg-brand-primary/10 border-y border-brand-primary/20 py-4 overflow-hidden">
      <div className="flex items-center justify-center gap-10 flex-wrap px-6 text-center">
        {['Veganskt sojavax', 'Ftalatfria dofter', 'Handgjort i Sverige', 'Inga två ljus är likadana'].map(item => (
          <span key={item} className="font-sans text-xs uppercase tracking-widest text-brand-muted whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Products ──────────────────────────────────────────────────────────────────

const products = [
  {
    id: 'aurora',
    name: 'Aurora',
    tagline: 'For moments that matter.',
    scents: 'Citrus · Gröna noter · Jasmin',
    price: 299,
    image: '/images/aurora.jpeg',
    href: '/kollektioner',
  },
  {
    id: 'orange-a-licious',
    name: 'Orange-a-licious',
    tagline: 'When life needs a burst of sunshine.',
    scents: 'Apelsin · Kryddiga blommor · Vaniljmusk',
    price: 299,
    image: '/images/orange-a-licious.jpeg',
    href: '/kollektioner',
  },
  {
    id: 'whiskey-fire',
    name: 'Whiskey & Fire',
    tagline: 'For moments that ask for more.',
    scents: 'Mild whiskey · Mörkt trä · Mjuk vanilj',
    price: 299,
    image: '/images/whiskey-fire.jpeg',
    href: '/kollektioner',
  },
]

function Products() {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="container-max">
        <div className="mb-14">
          <h2 className="font-serif text-4xl lg:text-5xl text-brand-text mb-3">
            Välj din stund
          </h2>
          <p className="font-sans text-base text-brand-muted max-w-md">
            Varje doft är skapad för ett humör, en kväll, ett ögonblick. Vilket är ditt?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="group block"
              aria-label={p.name}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-serif text-white text-sm italic leading-snug opacity-90">
                    "{p.tagline}"
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-2xl text-brand-text group-hover:text-brand-primary transition-colors">
                    {p.name}
                  </h3>
                  <span className="font-sans text-sm text-brand-muted pt-1.5 whitespace-nowrap">{p.price} kr</span>
                </div>
                <p className="font-sans text-sm text-brand-muted mt-1">{p.scents}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Package deal */}
        <div className="mt-16 bg-brand-card rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1">
            <p className="font-sans text-xs uppercase tracking-widest text-brand-primary mb-3">Bästa värdet</p>
            <h3 className="font-serif text-3xl lg:text-4xl text-brand-text mb-4">
              Välj tre. Spara 148 kr.
            </h3>
            <p className="font-sans text-base text-brand-muted leading-relaxed mb-6 max-w-md">
              Kan du inte välja? Ta tre. Perfekt som present eller för att fylla hemmet med dofter som passar varje stämning.
            </p>
            <Link href="/kollektioner" className="btn-primary inline-block">
              Köp 3-pack för 749 kr
            </Link>
          </div>
          <div className="w-full lg:w-72 aspect-square rounded-2xl overflow-hidden flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/flatlay.jpeg"
              alt="Moony Flames doftljus med ingredienser"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/kollektioner" className="btn-secondary">
            Se hela sortimentet
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── From Katrin ───────────────────────────────────────────────────────────────

function FromKatrin() {
  return (
    <section className="py-24 bg-[#2C2420] text-white">
      <div className="container-max max-w-3xl text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-brand-primary mb-8">
          Från grundaren
        </p>
        <blockquote className="font-serif text-3xl lg:text-4xl leading-relaxed mb-10 text-white/90">
          "Jag startade Moony Flames för att jag ville att varje ljus skulle kännas som något — inte bara dofta som något. Varje batch görs för hand, i liten skala, i min ateljé. Inget massproduceras. Aldrig."
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-primary/30 flex items-center justify-center">
            <span className="font-serif text-lg text-brand-primary">K</span>
          </div>
          <div className="text-left">
            <p className="font-sans text-sm font-medium text-white">Katrin</p>
            <p className="font-sans text-xs text-white/50">Grundare, Moony Flames · Strömby, Småland</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Personalized ──────────────────────────────────────────────────────────────

function Personalized() {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-brand-muted mb-4">
            Personlig present
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-brand-text mb-6">
            Säg det med ett ljus
          </h2>
          <p className="font-sans text-base text-brand-muted leading-relaxed mb-4">
            Välj en doft. Skriv ditt meddelande. Jag skriver det på etiketten för hand. Klart.
          </p>
          <p className="font-sans text-base text-brand-muted leading-relaxed mb-8">
            Perfekt till födelsedag, bröllop, eller bara för att säga att du tänker på någon.
          </p>
          <Link href="/kollektioner" className="btn-primary inline-block">
            Beställ personligt ljus — 349 kr
          </Link>
        </div>
        <div
          className="aspect-square rounded-3xl overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at 30% 40%, #C8A99A 0%, #F0EAE3 50%, #8FAE8E 100%)',
          }}
        >
          <div className="w-full h-full flex items-center justify-center p-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center max-w-xs">
              <div className="font-sans text-xs uppercase tracking-widest text-brand-muted mb-2">Moony Flames</div>
              <div className="font-sans text-xs text-brand-muted mb-4">For moments that matter</div>
              <div className="font-serif text-3xl italic text-brand-text mb-3">Tack för allt, Mamma</div>
              <div className="w-8 h-px bg-brand-primary mx-auto mb-3" />
              <div className="font-sans text-xs text-brand-muted">Vanilj · Sandelträ · Rosenträ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'Är ljusen verkligen veganska?',
    a: 'Ja. Sojavax, ftalatfria och parabenfriya dofter, inga animaliska ingredienser. Certifierat veganskt.',
  },
  {
    q: 'Hur länge brinner ett ljus?',
    a: 'Ca 40–50 timmar för ett 200g-ljus. Klipp veken till 5 mm innan varje tändning för bäst resultat.',
  },
  {
    q: 'Kan jag beställa med personligt meddelande?',
    a: 'Absolut — välj "Säg det med ett ljus" och skriv in din text. Jag tar hand om resten.',
  },
  {
    q: 'Hur lång är leveranstiden?',
    a: 'Vanligtvis 1–3 arbetsdagar. Personliga ljus tar 7–10 dagar.',
  },
  {
    q: 'Kostar frakten?',
    a: '69 kr under 500 kr. Fri frakt på allt över 500 kr.',
  },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 bg-brand-card">
      <div className="container-max max-w-2xl">
        <h2 className="font-serif text-4xl text-brand-text mb-12">
          Vanliga frågor
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-brand-primary/15 last:border-0">
              <button
                className="w-full flex items-center justify-between py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-serif text-xl text-brand-text">{faq.q}</span>
                <span className={`text-brand-primary transition-transform duration-300 ml-4 flex-shrink-0 text-xl ${open === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {open === i && (
                <p className="font-sans text-base text-brand-muted pb-5 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/fragor" className="font-sans text-sm text-brand-primary hover:underline">
            Se alla frågor och svar →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Newsletter ────────────────────────────────────────────────────────────────

function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <section className="py-24 bg-brand-bg">
      <div className="container-max max-w-xl text-center">
        <h2 className="font-serif text-4xl text-brand-text mb-4">
          Nya dofter. Först till dig.
        </h2>
        <p className="font-sans text-base text-brand-muted mb-8">
          Få 10% på din första beställning och bli den första att höra om nya ljus.
        </p>
        {done ? (
          <p className="font-serif text-2xl text-brand-primary italic">Tack! Kolla din inkorg.</p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setDone(true) }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="din@email.se"
              className="flex-1 bg-brand-card border border-brand-primary/30 rounded-full px-6 py-3 font-sans text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:border-brand-primary"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Ja tack
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Hero />
      <Strip />
      <Products />
      <FromKatrin />
      <Personalized />
      <FAQ />
      <Newsletter />
    </>
  )
}
