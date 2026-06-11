import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Om oss',
  description:
    'Lär känna Katrin och historien bakom Moony Flames – handgjorda veganska doftljus tillverkade med kärlek i Strömby, Småland.',
}

const values = [
  {
    icon: '🌱',
    title: '100% Veganskt',
    description:
      'Vi använder sojavax av växtbaserade råvaror och doftoljor som aldrig testats på djur. Certifierat veganskt – utan kompromisser.',
  },
  {
    icon: '✋',
    title: 'Handgjort i liten skala',
    description:
      'Varje ljus hälls, färgas och formas för hand av Katrin. Inga maskiner, inga löpande band – bara hängivna händer och kärlek till hantverket.',
  },
  {
    icon: '🌿',
    title: 'Fritt från skadliga ämnen',
    description:
      'Dofterna i Moony Flames-ljus är fria från parabener och ftalater. Vad du andas in är lika viktigt som hur det luktar.',
  },
  {
    icon: '♻️',
    title: 'Hållbara val',
    description:
      'Vi strävar efter minsta möjliga miljöpåverkan – återvinningsbara förpackningar, lokala råvaror där det är möjligt och ingen onödig plast.',
  },
]

export default function OmOssPage() {
  return (
    <div className="bg-brand-bg">
      {/* Hero */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        aria-labelledby="om-oss-heading"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, #C8A99A 0%, #F0EAE3 40%, transparent 70%)',
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full opacity-25"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, #8FAE8E 0%, #F0EAE3 50%, transparent 70%)',
            }}
          />
        </div>

        <div className="container-max relative z-10 text-center max-w-3xl">
          <span className="font-sans text-xs uppercase tracking-widest text-brand-muted block mb-4">
            Vår berättelse
          </span>
          <h1
            id="om-oss-heading"
            className="font-serif text-5xl sm:text-6xl md:text-7xl text-brand-text leading-tight mb-6"
          >
            Handgjort i Småland,{' '}
            <span className="italic text-brand-primary">med hjärtat</span>
          </h1>
          <p className="font-sans text-lg text-brand-muted leading-relaxed">
            Moony Flames är mer än ett märke – det är en passion för hantverk, natur och skönhet som tar form i varje unikt ljus.
          </p>
        </div>
      </section>

      {/* Main story section */}
      <section
        className="py-20 bg-brand-card"
        aria-labelledby="katrin-heading"
      >
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Photo area */}
            <div className="relative" aria-hidden="true">
              {/* Main portrait gradient */}
              <div
                className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background:
                    'conic-gradient(from 160deg at 45% 55%, #C8A99A 0%, #F0EAE3 25%, #8FAE8E 50%, #e8d5ce 70%, #d4c4bb 85%, #C8A99A 100%)',
                }}
              >
                {/* Texture overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(ellipse at 35% 30%, rgba(255,255,255,0.3) 0%, transparent 55%), radial-gradient(ellipse at 65% 70%, rgba(143,174,142,0.25) 0%, transparent 50%)',
                  }}
                />
              </div>

              {/* Floating quote */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl px-5 py-4 max-w-[200px]">
                <p className="font-serif text-sm italic text-brand-text leading-snug">
                  "Varje ljus bär ett stycke av mitt hjärta."
                </p>
                <p className="font-sans text-xs text-brand-muted mt-2">
                  – Katrin, grundare
                </p>
              </div>

              {/* Location badge */}
              <div className="absolute top-5 -left-4 bg-brand-primary text-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                <span className="text-lg" aria-hidden="true">
                  📍
                </span>
                <div>
                  <p className="text-xs font-sans font-semibold">Strömby</p>
                  <p className="text-xs font-sans opacity-80">Kalmar, Småland</p>
                </div>
              </div>
            </div>

            {/* Story text */}
            <div id="katrin-heading" className="space-y-6">
              <span className="font-sans text-xs uppercase tracking-widest text-brand-muted block">
                Grundaren Katrin
              </span>
              <h2 className="section-heading">
                Bakom varje ljus finns en berättelse
              </h2>
              <div className="space-y-4 font-sans text-base text-brand-muted leading-relaxed">
                <p>
                  Det startade i köket i Strömby. Katrin experimenterade med sojavax, dofter och färgpigment – och råkade av en slump skapa ett mönster som tog andan ur henne. Lila och grönt smälte samman som marmor, svängde och stelnade i en formation som aldrig mer kunde återskapas.
                </p>
                <p>
                  Det var 2021. Det som började som ett kvällsintresse på fritiden har växt till Moony Flames – ett litet men älskat märke som säljer handgjorda doftljus till hundratals hem i Sverige.
                </p>
                <p>
                  Idag tillverkas varje ljus fortfarande av Katrin, i liten skala, med tid och omsorg. Veganskt sojavax, noggrant utvalda doftoljor fria från parabener och ftalater, och det marmorerade mönstret som gör varje stycke unikt – det är Moony Flames.
                </p>
                <p>
                  Småland med sin rika tradition av hantverksskicklighet och noggrannhet är inte bara ett geografiskt ursprung – det är en del av märkets DNA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-brand-bg" aria-label="Moony Flames i siffror">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '2021', label: 'Grundat' },
              { number: '500+', label: 'Nöjda kunder' },
              { number: '100%', label: 'Veganskt' },
              { number: '∞', label: 'Unika mönster' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl md:text-5xl text-brand-primary mb-2">
                  {stat.number}
                </p>
                <p className="font-sans text-sm text-brand-muted uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values section */}
      <section
        className="py-20 bg-brand-card"
        aria-labelledby="values-heading"
        id="hallbarhet"
      >
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="font-sans text-xs uppercase tracking-widest text-brand-muted block mb-3">
              Det vi tror på
            </span>
            <h2 id="values-heading" className="section-heading mb-4">
              Våra värderingar
            </h2>
            <p className="section-subheading max-w-xl mx-auto">
              Moony Flames grundar sig i fyra principer som genomsyrar allt vi gör – från råvara till dörr.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-7 flex gap-5 hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-3xl flex-shrink-0" aria-hidden="true">
                  {value.icon}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-brand-text mb-2">
                    {value.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft process */}
      <section
        className="py-20 bg-brand-bg"
        aria-labelledby="process-heading"
        id="hantverk"
      >
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <span className="font-sans text-xs uppercase tracking-widest text-brand-muted block mb-3">
              Hantverket
            </span>
            <h2 id="process-heading" className="section-heading mb-4">
              Hur ett Moony Flames-ljus skapas
            </h2>
          </div>

          <ol className="space-y-8" aria-label="Tillverkningsprocess">
            {[
              {
                step: '01',
                title: 'Vaxet smälts',
                desc: 'Veganskt sojavax smälts varsamt i ett vattenbad. Vi kontrollerar temperaturen noggrant för bästa resultat.',
              },
              {
                step: '02',
                title: 'Doft och färg tillsätts',
                desc: 'Ftalatfria doftoljor och naturliga pigment rörs in i exakt rätt proportioner.',
              },
              {
                step: '03',
                title: 'Marmoreringen skapas',
                desc: 'Här händer magin. Vaxet hälls i lager och mönstret skapas med handgjorda rörelser – ett fenomen som aldrig upprepas exakt.',
              },
              {
                step: '04',
                title: 'Stelning och kvalitetskontroll',
                desc: 'Varje ljus stelnar i rumstemperatur och kontrolleras sedan noggrant för form, doft och utseende.',
              },
              {
                step: '05',
                title: 'Förpackning och leverans',
                desc: 'Det färdiga ljuset förpackas med omsorg i återvinningsmaterial och skickas direkt till dig.',
              },
            ].map((item, i) => (
              <li
                key={item.step}
                className="flex gap-6 items-start"
              >
                <span
                  className="font-serif text-4xl text-brand-primary/30 flex-shrink-0 leading-none"
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-brand-text mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-base text-brand-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-card" aria-label="Handla nu">
        <div className="container-max max-w-2xl text-center">
          <div
            className="w-24 h-24 rounded-full mx-auto mb-8"
            style={{
              background:
                'conic-gradient(from 0deg at 50% 50%, #C8A99A, #F0EAE3, #8FAE8E, #C8A99A)',
            }}
            aria-hidden="true"
          />
          <h2 className="section-heading mb-4">
            Redo att uppleva skillnaden?
          </h2>
          <p className="section-subheading mb-8">
            Varje beställning är unik. Hitta ditt personliga doftljus i vår kollektion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kollektioner" className="btn-primary">
              Se kollektionen
            </Link>
            <Link href="/fragor" className="btn-secondary">
              Vanliga frågor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
