'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    question: 'Är era doftljus veganska?',
    answer:
      'Ja! Alla våra produkter är 100% veganska. Vi använder sojavax av växtbaserade råvaror och dofter som aldrig testats på djur.',
  },
  {
    question: 'Hur länge brinner ett doftljus?',
    answer:
      'Våra stora doftljus (200g) brinner i ca 40–50 timmar. Kom ihåg att trimma veken till ca 5mm innan varje tänd för bäst resultat.',
  },
  {
    question: 'Kan jag beställa ett personligt ljus?',
    answer:
      'Absolut! Vi erbjuder personliga doftljus med valfri text på etiketten. Leveranstid för personliga ljus är 7–10 arbetsdagar.',
  },
  {
    question: 'Hur lång är leveranstiden?',
    answer:
      'Produkter i lager skickas inom 1–3 arbetsdagar. Personliga ljus tar 7–10 arbetsdagar att tillverka.',
  },
  {
    question: 'Vad kostar frakten?',
    answer:
      'Frakt kostar 69 kr för beställningar under 500 kr. Vid beställningar över 500 kr är frakten alltid fri.',
  },
  {
    question: 'Vilka dofter finns tillgängliga?',
    answer:
      'Vi har dofter som Pain au Chocolat, friska gröna noter, vanilj och mer. Sortimentet uppdateras regelbundet – kolla in vår butik för aktuellt utbud.',
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div className="border-b border-brand-card last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between gap-4 text-left group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="font-sans text-base font-medium text-brand-text group-hover:text-brand-primary transition-colors">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-brand-primary text-white rotate-180' : 'bg-brand-card text-brand-muted'
          }`}
          aria-hidden="true"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="font-sans text-sm text-brand-muted leading-relaxed pb-5">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-28 bg-brand-bg" aria-labelledby="faq-heading">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: heading */}
          <div className="lg:col-span-1">
            <span className="font-sans text-xs uppercase tracking-widest text-brand-muted block mb-3">
              Vanliga frågor
            </span>
            <h2 id="faq-heading" className="section-heading mb-4">
              Har du frågor?
            </h2>
            <p className="font-sans text-brand-muted text-base leading-relaxed mb-8">
              Vi försöker svara på de vanligaste frågorna. Hittar du inte svaret? Kontakta oss gärna!
            </p>
            <Link href="/fragor" className="btn-secondary text-sm">
              Se alla frågor
            </Link>

            {/* Contact teaser */}
            <div className="mt-8 p-5 bg-brand-card rounded-2xl">
              <p className="font-sans text-sm font-medium text-brand-text mb-1">Kontakta oss</p>
              <p className="font-sans text-xs text-brand-muted mb-3">
                Vi svarar normalt inom 24 timmar på vardagar.
              </p>
              <a
                href="mailto:hej@moonyflames.se"
                className="font-sans text-sm text-brand-primary hover:underline"
              >
                hej@moonyflames.se
              </a>
            </div>
          </div>

          {/* Right: FAQ accordion */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-sm" role="list">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
