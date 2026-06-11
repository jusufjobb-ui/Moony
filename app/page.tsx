'use client'

import { useState } from 'react'
import Link from 'next/link'

// ── Hero — full-screen mörk ───────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/whiskey-fire.jpeg"
        alt="Whiskey & Fire – Moony Flames"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Mörk overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Innehåll */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-white/60 mb-4">
          Handgjort i Strömby, Småland
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl text-white leading-[1.0] mb-6 max-w-3xl">
          Ljus som<br />
          <em className="not-italic text-brand-primary">berättar något</em>
        </h1>
        <p className="font-sans text-base text-white/70 mb-8 max-w-md leading-relaxed">
          Varje ljus är gjort för hand av Katrin — med veganskt sojavax, dofter utan gifter och ett marmorerat mönster som aldrig upprepas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/kollektioner" className="btn-primary">
            Utforska ljusen
          </Link>
          <Link href="/om-oss" className="inline-flex items-center gap-2 font-sans text-sm text-white/80 hover:text-white transition-colors py-3">
            Katrins berättelse →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Strip ─────────────────────────────────────────────────────────────────────

function Strip() {
  return (
    <div className="bg-brand-ink py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8">
        {['🌱 Veganskt sojavax', '✦ Ftalatfria dofter', '🤲 Handgjort i Sverige', '✦ Inga två ljus är likadana'].map(item => (
          <span key={item} className="font-sans text-xs uppercase tracking-[0.2em] text-white/50 whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Produkter ─────────────────────────────────────────────────────────────────

function Products() {
  return (
    <section className="bg-brand-bg py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        <div className="mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-brand-muted mb-3">Kollektionen</p>
          <h2 className="font-serif text-5xl lg:text-6xl text-brand-text">
            Välj din stund
          </h2>
        </div>

        {/* Aurora — bred */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
          <Link href="/kollektioner" className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/aurora.jpeg" alt="Aurora" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-serif text-white/70 text-sm italic mb-1">"For moments that matter."</p>
              <h3 className="font-serif text-white text-3xl">Aurora</h3>
              <p className="font-sans text-white/60 text-xs mt-1 uppercase tracking-wider">Citrus · Gröna noter · Jasmin</p>
            </div>
            <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
              <span className="font-sans text-white text-xs">299 kr</span>
            </div>
          </Link>

          {/* Orange-a-licious */}
          <Link href="/kollektioner" className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/orange-a-licious.jpeg" alt="Orange-a-licious" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-serif text-white/70 text-sm italic mb-1">"When life needs a burst of sunshine."</p>
              <h3 className="font-serif text-white text-3xl">Orange-a-licious</h3>
              <p className="font-sans text-white/60 text-xs mt-1 uppercase tracking-wider">Apelsin · Kryddiga blommor · Vaniljmusk</p>
            </div>
            <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5">
              <span className="font-sans text-white text-xs">299 kr</span>
            </div>
          </Link>
        </div>

        {/* Whiskey & Fire — full bredd */}
        <Link href="/kollektioner" className="group relative overflow-hidden rounded-2xl block mb-12" style={{ height: '420px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/whiskey-fire.jpeg" alt="Whiskey & Fire" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="font-serif text-white/70 text-base italic mb-2">"For moments that ask for more."</p>
            <h3 className="font-serif text-white text-5xl mb-2">Whiskey & Fire</h3>
            <p className="font-sans text-white/60 text-sm uppercase tracking-wider">Mild whiskey · Mörkt trä · Mjuk vanilj</p>
          </div>
          <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2">
            <span className="font-sans text-white text-sm">299 kr</span>
          </div>
        </Link>

        <div className="flex justify-center">
          <Link href="/kollektioner" className="btn-secondary">
            Se hela sortimentet
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Från Katrin — mörk ────────────────────────────────────────────────────────

function FromKatrin() {
  return (
    <section className="bg-brand-ink py-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-brand-primary mb-6">
            Från grundaren
          </p>
          <blockquote className="font-serif text-3xl lg:text-4xl text-white leading-[1.3] mb-8">
            "Jag vill att du ska tända ljuset och känna att just den här stunden är din."
          </blockquote>
          <p className="font-sans text-base text-white/60 leading-relaxed mb-8">
            Moony Flames startade i mitt kök i Strömby. Varje ljus görs fortfarande för hand av mig, i liten skala, med ingredienser jag kan stå för. Inget massproduceras. Aldrig.
          </p>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="font-serif text-lg text-brand-primary">K</span>
            </div>
            <div>
              <p className="font-sans text-sm text-white font-medium">Katrin</p>
              <p className="font-sans text-xs text-white/40">Grundare · Strömby, Småland</p>
            </div>
          </div>
          <Link href="/om-oss" className="inline-flex items-center gap-2 font-sans text-sm text-brand-primary hover:underline">
            Läs min historia →
          </Link>
        </div>

        {/* Flatlay-bild */}
        <div className="relative rounded-2xl overflow-hidden aspect-square">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/flatlay.jpeg" alt="Moony Flames ingredienser" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-ink/20" />
        </div>
      </div>
    </section>
  )
}

// ── Personligt ljus ───────────────────────────────────────────────────────────

function Personalized() {
  return (
    <section className="bg-brand-card py-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Etikett-mockup */}
        <div className="bg-brand-ink rounded-2xl p-10 flex items-center justify-center aspect-square">
          <div className="bg-white rounded-xl p-8 shadow-2xl text-center max-w-[220px] rotate-1">
            <p className="font-sans text-[10px] uppercase tracking-widest text-brand-muted mb-1">Moony Flames</p>
            <p className="font-sans text-[10px] text-brand-muted/60 mb-4">For moments that matter</p>
            <p className="font-serif text-2xl italic text-brand-text leading-snug mb-4">
              Tack för allt,<br />Mamma
            </p>
            <div className="w-6 h-px bg-brand-primary mx-auto mb-3" />
            <p className="font-sans text-[10px] text-brand-muted uppercase tracking-wider">Vanilj · Rosenträ · Sandelträ</p>
          </div>
        </div>

        <div>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-brand-muted mb-4">
            Personlig present
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-brand-text mb-6">
            Säg det med ett ljus
          </h2>
          <p className="font-sans text-base text-brand-muted leading-relaxed mb-3">
            Välj en doft. Skriv ditt meddelande. Jag skriver det på etiketten — för hand.
          </p>
          <p className="font-sans text-base text-brand-muted leading-relaxed mb-8">
            Perfekt till bröllop, födelsedag, eller bara för att visa att du tänker på någon.
          </p>
          <Link href="/kollektioner" className="btn-primary">
            Beställ personligt ljus — 349 kr
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── 3-pack erbjudande ─────────────────────────────────────────────────────────

function Bundle() {
  return (
    <section className="bg-brand-bg py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-ink rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-brand-primary mb-4">Bästa värdet</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-4">
              Välj tre.<br />Spara 148 kr.
            </h2>
            <p className="font-sans text-base text-white/60 leading-relaxed mb-8">
              Kan du inte välja? Ta tre. Perfekt för att fylla hemmet — eller ge bort något som faktiskt känns som något.
            </p>
            <div>
              <Link href="/kollektioner" className="btn-primary">
                Köp 3-pack för 749 kr
              </Link>
              <p className="font-sans text-xs text-white/30 mt-3">Ordinarie pris: 897 kr</p>
            </div>
          </div>
          <div className="aspect-square lg:aspect-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/flatlay.jpeg" alt="Doftljus-paket" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

const faqs = [
  { q: 'Är ljusen verkligen veganska?', a: 'Ja. Veganskt sojavax, ftalatfria och parabenfriya dofter, inga animaliska ingredienser.' },
  { q: 'Hur länge brinner ett ljus?', a: 'Ca 40–50 timmar för ett 200g-ljus. Klipp veken till 5 mm inför varje tändning.' },
  { q: 'Kan jag beställa med eget meddelande?', a: 'Absolut — välj "Säg det med ett ljus" och skriv din text. Jag tar hand om resten.' },
  { q: 'Hur lång är leveranstiden?', a: 'Vanligtvis 1–3 arbetsdagar. Personliga ljus tar 7–10 dagar.' },
  { q: 'Kostar frakten?', a: '69 kr under 500 kr. Fri frakt på allt över 500 kr.' },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="bg-brand-card py-24 px-6 sm:px-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl text-brand-text mb-12">Vanliga frågor</h2>
        <div className="divide-y divide-brand-muted/20">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-serif text-xl text-brand-text">{faq.q}</span>
                <span className={`text-brand-primary text-2xl flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <p className="font-sans text-base text-brand-muted pb-5 leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/fragor" className="font-sans text-sm text-brand-primary hover:underline">
            Se alla frågor →
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
    <section className="bg-brand-ink py-24 px-6 sm:px-12">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif text-4xl text-white mb-3">Nya dofter. Först till dig.</h2>
        <p className="font-sans text-base text-white/50 mb-8">Få 10% på din första beställning.</p>
        {done ? (
          <p className="font-serif text-2xl text-brand-primary italic">Tack! Kolla din inkorg.</p>
        ) : (
          <form onSubmit={e => { e.preventDefault(); if (email) setDone(true) }} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email" required value={email} onChange={e => setEmail(e.target.value)}
              placeholder="din@email.se"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 font-sans text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-primary"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">Ja tack</button>
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
      <Bundle />
      <FAQ />
      <Newsletter />
    </>
  )
}
