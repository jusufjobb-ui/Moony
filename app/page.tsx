'use client'

import { useState } from 'react'
import Link from 'next/link'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'

// ── Featured Products ─────────────────────────────────────────────────────────

const products = [
  {
    id: 1,
    name: 'Marmorerat Doftljus',
    description: 'Unikt handformat ljus i veganskt sojavax med swirling marmorerat mönster.',
    price: 299,
    originalPrice: null,
    badge: 'Bästsäljare',
    gradient: 'radial-gradient(circle at 30% 40%, #C8A99A 0%, #F0EAE3 40%, #8FAE8E 70%, #D4C4B8 100%)',
    href: '/kollektioner#doftljus',
  },
  {
    id: 2,
    name: 'Säg det med ett ljus',
    description: 'Personaliserat doftljus – välj doft och låt oss skriva ditt meddelande.',
    price: 349,
    originalPrice: null,
    badge: 'Personligt',
    gradient: 'radial-gradient(ellipse at 60% 30%, #8FAE8E 0%, #F0EAE3 45%, #C8A99A 80%, #FAF7F2 100%)',
    href: '/kollektioner#personliga',
  },
  {
    id: 3,
    name: 'Doftljuspaket 3-pack',
    description: 'Tre unika marmorerade ljus i ett snyggt presentpaket.',
    price: 749,
    originalPrice: 897,
    badge: 'Spara 148 kr',
    gradient: 'conic-gradient(from 120deg at 50% 50%, #C8A99A, #FAF7F2, #8FAE8E, #F0EAE3, #C8A99A)',
    href: '/kollektioner#paket',
  },
  {
    id: 4,
    name: 'Vaxsmältare',
    description: 'Elegant keramisk vaxsmältare för dina vaxpraliner. Stilren design.',
    price: 149,
    originalPrice: null,
    badge: null,
    gradient: 'radial-gradient(circle at 70% 30%, #8FAE8E 0%, #F0EAE3 35%, #C8A99A 65%, #FAF7F2 100%)',
    href: '/kollektioner#vaxsmaltare',
  },
  {
    id: 5,
    name: 'Vaxpraliner',
    description: 'Doftande vaxpraliner i handsytt marmorerat mönster. Passar alla smältare.',
    price: 129,
    originalPrice: null,
    badge: 'Nyhet',
    gradient: 'radial-gradient(ellipse at 20% 70%, #C8A99A 0%, #e8d5ce 35%, #c2d4c1 65%, #F0EAE3 100%)',
    href: '/kollektioner#vaxsmaltare',
  },
  {
    id: 6,
    name: 'Aromlampa',
    description: 'Handgjord aromlampa i terrakotta för vaxpraliner och eteriska oljor.',
    price: 199,
    originalPrice: null,
    badge: null,
    gradient: 'radial-gradient(ellipse at 80% 20%, #d4bfb8 0%, #c2d4c1 40%, #e8ddd8 70%, #FAF7F2 100%)',
    href: '/kollektioner#aromaterapy',
  },
]

function FeaturedProducts() {
  return (
    <section className="py-20 bg-brand-bg" aria-labelledby="products-heading">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-brand-primary mb-3">
            Våra produkter
          </p>
          <h2 id="products-heading" className="section-heading mb-4">
            Populära kollektioner
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            Varje ljus är handgjort och unikt – inga två är exakt lika. Utforska våra dofter och hitta ditt favoritljus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group bg-brand-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              aria-label={`${product.name} – ${product.price} kr`}
            >
              {/* Image placeholder */}
              <div className="relative overflow-hidden">
                <div
                  style={{ background: product.gradient }}
                  className="w-full aspect-square"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-white text-brand-text text-xs font-sans font-medium px-3 py-1.5 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product info */}
              <div className="p-5">
                <h3 className="font-serif text-xl text-brand-text mb-1 group-hover:text-brand-primary transition-colors">
                  {product.name}
                </h3>
                <p className="font-sans text-sm text-brand-muted mb-3 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans font-semibold text-brand-text text-lg">
                      {product.price} kr
                    </span>
                    {product.originalPrice && (
                      <span className="font-sans text-sm text-brand-muted line-through">
                        {product.originalPrice} kr
                      </span>
                    )}
                  </div>
                  <span className="font-sans text-xs text-brand-primary uppercase tracking-widest group-hover:underline">
                    Välj →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/kollektioner" className="btn-secondary">
            Se alla produkter
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Brand Story ───────────────────────────────────────────────────────────────

function BrandStory() {
  return (
    <section className="py-20 bg-brand-card" aria-labelledby="story-heading">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1" aria-hidden="true">
            <div
              className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background:
                  'radial-gradient(ellipse at 30% 30%, #C8A99A 0%, #F0EAE3 40%, #8FAE8E 70%, #FAF7F2 100%)',
              }}
            />
            {/* Floating accent */}
            <div
              className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full opacity-70"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, #8FAE8E 0%, #F0EAE3 60%, transparent 80%)',
              }}
            />
            <div
              className="absolute -top-6 -left-6 w-28 h-28 rounded-full opacity-60"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, #C8A99A 0%, #F0EAE3 60%, transparent 80%)',
              }}
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <p className="font-sans text-xs uppercase tracking-widest text-brand-primary">
              Vår berättelse
            </p>
            <h2 id="story-heading" className="section-heading">
              Bakom varje ljus finns en berättelse
            </h2>
            <p className="font-sans text-base text-brand-muted leading-relaxed">
              Mitt namn är Katrin och jag bor i lilla Strömby i hjärtat av Småland. Det hela började som ett experiment i mitt kök – en dröm om att skapa något vackert och meningsfullt med händerna.
            </p>
            <p className="font-sans text-base text-brand-muted leading-relaxed">
              Varje Moony Flames-ljus är handgjort av mig, med veganskt sojavax och noggrant utvalda dofter som är fria från parabener och ftalater. Det marmorerade mönstret skapas för hand – ett konstverk som aldrig upprepas.
            </p>
            <p className="font-sans text-base text-brand-muted leading-relaxed">
              Jag tror på att småskaligt hantverk kan göra en stor skillnad – för miljön, för hemmet, och för känslan av att ge eller ta emot något genuint unikt.
            </p>
            <Link href="/om-oss" className="btn-primary inline-block mt-2">
              Läs mer om oss
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Why Us ────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: '✨',
    title: 'Aldrig samma två gånger',
    description:
      'Det marmorerade mönstret skapas för hand varje gång. Du köper ett original – garanterat.',
  },
  {
    icon: '🌱',
    title: 'Veganskt & hållbart',
    description:
      'Veganskt sojavax, ftalatfria dofter och återvinningsbart förpackningsmaterial. Bra för dig och planeten.',
  },
  {
    icon: '🤲',
    title: 'Handgjort med kärlek',
    description:
      'Varje ljus hälls, färgas och formas av Katrin i Småland. Inget massproducerat – aldrig.',
  },
  {
    icon: '💌',
    title: 'Personlig service',
    description:
      'Vill du ha ett personligt meddelande eller en specialbeställning? Kontakta oss – vi fixar det.',
  },
]

function WhyUs() {
  return (
    <section className="py-20 bg-brand-bg" aria-labelledby="whyus-heading">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-brand-primary mb-3">
            Varför Moony Flames
          </p>
          <h2 id="whyus-heading" className="section-heading mb-4">
            Mer än bara ett ljus
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-brand-card rounded-2xl p-7 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-4xl block mb-4" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="font-serif text-xl text-brand-text mb-3">{feature.title}</h3>
              <p className="font-sans text-sm text-brand-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────

const faqs = [
  {
    question: 'Är ljusen verkligen veganska?',
    answer:
      'Ja! Vi använder 100% veganskt sojavax och dofter som är fria från animaliska ingredienser. Vi testar inte heller på djur. Certifierat veganskt.',
  },
  {
    question: 'Hur länge brinner ett Moony Flames-ljus?',
    answer:
      'Våra standardljus (200g) brinner i ca 40–50 timmar med rätt skötsel. Klipp veken till 5 mm innan varje tändning och låt ljuset brinna tills hela ytan smält vid första användningen.',
  },
  {
    question: 'Kan jag beställa ett personaliserat ljus?',
    answer:
      'Absolut! Vi erbjuder personaliserade ljus med valfritt meddelande, namn eller datum. Välj produkt "Säg det med ett ljus" i kollektionen eller kontakta oss direkt för specialbeställningar.',
  },
  {
    question: 'Hur lång är leveranstiden?',
    answer:
      'Standardleverans är 3–5 arbetsdagar inom Sverige. Eftersom varje ljus görs för hand kan det ta 1–2 extra dagar för personaliseringar. Vi skickar alltid spårningsnummer via e-post.',
  },
  {
    question: 'Är frakten fri?',
    answer:
      'Ja! Fri frakt på alla beställningar över 500 kr inom Sverige. För order under 500 kr tillkommer en fraktavgift på 49 kr.',
  },
  {
    question: 'Vilka dofter finns det?',
    answer:
      'Vi erbjuder ett roterande sortiment av dofter inspirerade av natur och årstider – t.ex. Vinterskog, Regnig dag, Vildblommor, Salthavet och Vanilj & Sandelträ. Se alltid aktuellt sortiment i kollektionen.',
  },
]

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-brand-card" aria-labelledby="faq-heading">
      <div className="container-max max-w-3xl">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-brand-primary mb-3">
            Vanliga frågor
          </p>
          <h2 id="faq-heading" className="section-heading mb-4">
            Har du frågor?
          </h2>
          <p className="section-subheading">
            Här hittar du svar på de vanligaste frågorna. Hittar du inte svaret?{' '}
            <Link href="/kontakt" className="text-brand-primary hover:underline">
              Kontakta oss
            </Link>
            .
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between px-7 py-5 text-left font-serif text-lg text-brand-text hover:text-brand-primary transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                role="region"
              >
                <p className="font-sans text-base text-brand-muted leading-relaxed px-7 pb-5">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/fragor" className="btn-secondary">
            Se alla frågor & svar
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Newsletter ────────────────────────────────────────────────────────────────

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-20 bg-brand-bg" aria-labelledby="newsletter-heading">
      <div className="container-max max-w-2xl text-center">
        <span className="text-4xl block mb-4" aria-hidden="true">🕯️</span>
        <h2 id="newsletter-heading" className="section-heading mb-4">
          Bli en del av Moony-familjen
        </h2>
        <p className="section-subheading mb-8">
          Prenumerera på vårt nyhetsbrev och få 10% rabatt på din första beställning. Plus tips om ljusvård, nyheter och exklusiva erbjudanden.
        </p>

        {submitted ? (
          <div className="bg-brand-card rounded-2xl px-8 py-6 text-center animate-fade-in">
            <p className="font-serif text-2xl text-brand-text mb-1">Tack!</p>
            <p className="font-sans text-brand-muted">
              Du är nu anmäld. Kolla din inkorg för din rabattkod!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            aria-label="Prenumerera på nyhetsbrevet"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              E-postadress
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="din@email.se"
              className="flex-1 bg-brand-card border border-brand-primary/30 rounded-full px-6 py-3 font-sans text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:border-brand-primary transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Prenumerera
            </button>
          </form>
        )}

        <p className="font-sans text-xs text-brand-muted mt-4">
          Inga spam. Avregistrera när som helst. Vi delar aldrig din data.
        </p>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <FeaturedProducts />
      <BrandStory />
      <WhyUs />
      <FAQAccordion />
      <Newsletter />
    </>
  )
}
