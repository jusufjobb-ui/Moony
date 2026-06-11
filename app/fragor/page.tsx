'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Newsletter from '@/components/Newsletter'

const faqCategories = [
  {
    id: 'produkter',
    label: 'Produkter',
    icon: '🕯️',
    faqs: [
      {
        question: 'Är era doftljus veganska?',
        answer:
          'Ja! Alla våra produkter är 100% veganska. Vi använder sojavax av växtbaserade råvaror och dofter som aldrig testats på djur. Vi är stolta över att vara ett helt veganskt märke utan kompromisser.',
      },
      {
        question: 'Hur länge brinner ett doftljus?',
        answer:
          'Våra stora doftljus (200g) brinner i ca 40–50 timmar. Kom ihåg att trimma veken till ca 5mm innan varje tänd för bäst resultat. Låt också ljuset brinna tills hela ytan blivit flytande vid första användningen för att undvika tunnelbildning.',
      },
      {
        question: 'Vilka dofter finns tillgängliga?',
        answer:
          'Vi har dofter som Pain au Chocolat, friska gröna noter, vanilj och mer. Sortimentet uppdateras regelbundet – kolla in vår butik för aktuellt utbud. Vi lanserar också säsongsdofter under året.',
      },
      {
        question: 'Vad är sojavax och varför använder ni det?',
        answer:
          'Sojavax är ett naturligt alternativ till paraffin (som är en petroleumbiprodukt). Det är växtbaserat, förnybart och brinner renare med mindre sot. Dessutom binder sojavax dofter bättre, vilket ger en mer intensiv och jämn doftupplevelse.',
      },
      {
        question: 'Innehåller ljusen ftalater och parabener?',
        answer:
          'Nej! Vi är noga med att alla våra doftoljor är fria från ftalater och parabener – ämnen som kan vara skadliga vid inandning. Din hälsa och din innemiljö är viktig för oss.',
      },
      {
        question: 'Hur ska jag ta hand om mitt doftljus?',
        answer:
          'Trimma veken till 5mm före varje tänd. Låt ljuset brinna tills hela ytan smält vid första användning. Tänd aldrig ett ljus mer än 4 timmar åt gången. Placera aldrig ett tänt ljus nära brännbart material. Förvara ljuset svalt och mörkt när det inte används.',
      },
    ],
  },
  {
    id: 'bestallning',
    label: 'Beställning',
    icon: '📦',
    faqs: [
      {
        question: 'Hur lång är leveranstiden?',
        answer:
          'Produkter i lager skickas inom 1–3 arbetsdagar. Personliga ljus tar 7–10 arbetsdagar att tillverka eftersom varje ljus görs specifikt för din beställning.',
      },
      {
        question: 'Vad kostar frakten?',
        answer:
          'Frakt kostar 69 kr för beställningar under 500 kr. Vid beställningar över 500 kr är frakten alltid fri. Vi skickar med PostNord eller DHL och du får alltid ett spårningsnummer.',
      },
      {
        question: 'Kan jag beställa ett personligt ljus?',
        answer:
          'Absolut! Vi erbjuder personliga doftljus med valfri text på etiketten. Perfekt som present till födelsedag, bröllop, baby shower eller bara för att visa att du bryr dig. Leveranstid för personliga ljus är 7–10 arbetsdagar.',
      },
      {
        question: 'Kan jag ändra eller avbryta min beställning?',
        answer:
          'Om du behöver ändra eller avbryta din beställning, kontakta oss snarast möjligt på hej@moonyflames.se. Vi kan ändra beställningar som inte ännu börjat tillverkas. Personliga ljus kan inte avbrytas efter att tillverkningen startat.',
      },
    ],
  },
  {
    id: 'returer',
    label: 'Returer & Byten',
    icon: '↩️',
    faqs: [
      {
        question: 'Kan jag returnera en produkt?',
        answer:
          'Ja, vi accepterar returer inom 14 dagar om produkten är oanvänd och i originalförpackning. Personliga/skräddarsydda produkter kan inte returneras. Kontakta oss på hej@moonyflames.se för att starta en retur.',
      },
      {
        question: 'Vad gör jag om min beställning kom skadad?',
        answer:
          'Det beklagar vi! Kontakta oss inom 48 timmar med bilder på skadan på hej@moonyflames.se så löser vi det så snabbt som möjligt. Vi skickar alltid en ersättning utan extra kostnad.',
      },
    ],
  },
  {
    id: 'hallbarhet',
    label: 'Hållbarhet',
    icon: '🌿',
    faqs: [
      {
        question: 'Hur är era förpackningar?',
        answer:
          'Vi strävar efter att använda återvinningsbara och minimala förpackningar. Kartonger och fyllnadsmaterial är av återvunnet material. Vi arbetar kontinuerligt med att minska vår miljöpåverkan.',
      },
      {
        question: 'Vad kan jag göra med glaset när ljuset är slut?',
        answer:
          'Glaset kan återanvändas på många sätt! Häll kokande vatten i det så smälter resterna av vax och du kan hälla ut dem. Sedan kan du använda glaset som blomkruka, pennhållare, sticklingsvas eller bara som ett vackert förvaringskärl.',
      },
    ],
  },
]

function FAQAccordion({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className="border border-brand-card rounded-2xl overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between px-6 py-4 text-left group"
            aria-expanded={openIndex === index}
            aria-controls={`faq-${index}`}
          >
            <span className="font-sans text-sm font-medium text-brand-text group-hover:text-brand-primary transition-colors pr-4">
              {faq.question}
            </span>
            <span
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                openIndex === index
                  ? 'bg-brand-primary text-white rotate-180'
                  : 'bg-brand-bg text-brand-muted'
              }`}
              aria-hidden="true"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          <div
            id={`faq-${index}`}
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="font-sans text-sm text-brand-muted leading-relaxed px-6 pb-5">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('produkter')

  const active = faqCategories.find((c) => c.id === activeCategory)

  return (
    <main className="bg-brand-bg">
      {/* Hero */}
      <section
        className="py-20 lg:py-28 bg-brand-card relative overflow-hidden"
        aria-labelledby="faq-page-heading"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse at 70% 50%, #C8A99A, transparent 60%), radial-gradient(ellipse at 30% 50%, #8FAE8E, transparent 60%)',
          }}
        />
        <div className="container-max relative text-center max-w-2xl">
          <span className="font-sans text-xs uppercase tracking-widest text-brand-muted block mb-4">
            Hjälp & support
          </span>
          <h1
            id="faq-page-heading"
            className="font-serif text-5xl md:text-6xl text-brand-text mb-6 leading-tight"
          >
            Vanliga frågor
          </h1>
          <p className="font-sans text-lg text-brand-muted leading-relaxed">
            Hittar du inte svaret? Skicka ett mail till{' '}
            <a
              href="mailto:hej@moonyflames.se"
              className="text-brand-primary hover:underline"
            >
              hej@moonyflames.se
            </a>{' '}
            – vi svarar inom 24 timmar.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24" id="frakt">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Category nav */}
            <nav
              className="lg:col-span-1"
              aria-label="FAQ-kategorier"
            >
              <ul className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {faqCategories.map((cat) => (
                  <li key={cat.id} className="flex-shrink-0 lg:flex-shrink">
                    <button
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 font-sans text-sm ${
                        activeCategory === cat.id
                          ? 'bg-brand-primary text-white shadow-sm'
                          : 'bg-white text-brand-text hover:bg-brand-card'
                      }`}
                      aria-current={activeCategory === cat.id ? 'true' : undefined}
                    >
                      <span aria-hidden="true">{cat.icon}</span>
                      <span className="font-medium whitespace-nowrap lg:whitespace-normal">
                        {cat.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Contact card */}
              <div className="hidden lg:block mt-8 bg-brand-card rounded-2xl p-5">
                <h3 className="font-sans text-sm font-semibold text-brand-text mb-2">
                  Behöver du mer hjälp?
                </h3>
                <p className="font-sans text-xs text-brand-muted mb-4 leading-relaxed">
                  Vi svarar normalt inom 24 timmar på vardagar.
                </p>
                <a
                  href="mailto:hej@moonyflames.se"
                  className="font-sans text-xs text-brand-primary hover:underline block"
                >
                  hej@moonyflames.se
                </a>
              </div>
            </nav>

            {/* FAQ list */}
            <div className="lg:col-span-3">
              {active && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl" aria-hidden="true">
                      {active.icon}
                    </span>
                    <h2 className="font-serif text-3xl text-brand-text">
                      {active.label}
                    </h2>
                  </div>
                  <FAQAccordion faqs={active.faqs} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-brand-card" id="returer">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <span className="text-4xl block mb-3" aria-hidden="true">
                ✉️
              </span>
              <h3 className="font-serif text-xl text-brand-text mb-2">E-post</h3>
              <p className="font-sans text-sm text-brand-muted mb-4">
                Skicka ett mail och vi svarar inom 24 timmar.
              </p>
              <a
                href="mailto:hej@moonyflames.se"
                className="font-sans text-sm text-brand-primary hover:underline"
              >
                hej@moonyflames.se
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <span className="text-4xl block mb-3" aria-hidden="true">
                📱
              </span>
              <h3 className="font-serif text-xl text-brand-text mb-2">Instagram</h3>
              <p className="font-sans text-sm text-brand-muted mb-4">
                Skicka ett DM till oss på Instagram.
              </p>
              <a
                href="https://instagram.com/moonyflames"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-brand-primary hover:underline"
              >
                @moonyflames
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <span className="text-4xl block mb-3" aria-hidden="true">
                📚
              </span>
              <h3 className="font-serif text-xl text-brand-text mb-2">Köpvillkor</h3>
              <p className="font-sans text-sm text-brand-muted mb-4">
                Läs våra villkor för köp och leverans.
              </p>
              <Link
                href="/kopvillkor"
                className="font-sans text-sm text-brand-primary hover:underline"
              >
                Läs mer →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
