'use client'

import { useState } from 'react'
import Link from 'next/link'
import Newsletter from '@/components/Newsletter'

const allProducts = [
  {
    id: 'marmorerat-doftljus',
    name: 'Marmorerat Doftljus',
    price: 299,
    originalPrice: null,
    description: 'Varje ljus är ett konstverk. Marmorerade mönster som aldrig kan upprepas.',
    gradient: 'radial-gradient(ellipse at 20% 50%, #C8A99A 0%, #F0EAE3 40%, #8FAE8E 70%, #FAF7F2 100%)',
    badge: 'Bestseller',
    category: 'doftljus',
    tags: ['veganskt', 'handgjort', 'marmorerat'],
  },
  {
    id: 'sag-det-med-ljus',
    name: 'Säg det med ett ljus',
    price: 349,
    originalPrice: null,
    description: 'Personligt doftljus med din text på etiketten. Perfekt som gåva.',
    gradient: 'radial-gradient(ellipse at 80% 20%, #8FAE8E 0%, #F0EAE3 50%, #C8A99A 100%)',
    badge: 'Personligt',
    category: 'personliga',
    tags: ['personligt', 'present', 'veganskt'],
  },
  {
    id: 'doftljuspaket',
    name: 'Doftljuspaket 3-pack',
    price: 749,
    originalPrice: 897,
    description: 'Tre unika handgjorda doftljus till paketpris.',
    gradient: 'radial-gradient(circle at 30% 60%, #e8d5ce 0%, #d4c4bb 30%, #b8cbb7 60%, #F0EAE3 100%)',
    badge: 'Spara 148 kr',
    category: 'doftljus',
    tags: ['paket', 'veganskt', 'present'],
  },
  {
    id: 'vaxsmaltare',
    name: 'Vaxsmältare',
    price: 149,
    originalPrice: null,
    description: 'Handgjord vaxsmältare i veganskt rapsvax. Lång dofttid.',
    gradient: 'conic-gradient(from 120deg at 50% 50%, #C8A99A, #FAF7F2, #8FAE8E, #F0EAE3, #C8A99A)',
    badge: null,
    category: 'vaxsmaltare',
    tags: ['veganskt', 'handgjort', 'doftvax'],
  },
  {
    id: 'vaxpraliner',
    name: 'Vaxpraliner',
    price: 129,
    originalPrice: null,
    description: 'Sex unika vaxpraliner i presentförpackning.',
    gradient: 'radial-gradient(ellipse at 60% 40%, #d4bfb8 0%, #c2d4c1 40%, #e8ddd8 70%, #FAF7F2 100%)',
    badge: 'Nyhet',
    category: 'vaxsmaltare',
    tags: ['veganskt', 'present', 'doftvax'],
  },
  {
    id: 'aromlampa',
    name: 'Aromlampa',
    price: 199,
    originalPrice: null,
    description: 'Keramisk aromlampa, handgjord i Sverige.',
    gradient: 'radial-gradient(circle at 70% 30%, #8FAE8E 0%, #F0EAE3 35%, #C8A99A 65%, #FAF7F2 100%)',
    badge: null,
    category: 'vaxsmaltare',
    tags: ['handgjort', 'keramik', 'aromterapi'],
  },
  {
    id: 'fodelsedag-ljus',
    name: 'Födelsedag – Personligt Ljus',
    price: 349,
    originalPrice: null,
    description: 'Unikt doftljus med personlig hälsning. Den perfekta födelsedagspresenten.',
    gradient: 'radial-gradient(ellipse at 40% 60%, #C8A99A, #F0EAE3, #8FAE8E)',
    badge: 'Present',
    category: 'personliga',
    tags: ['personligt', 'present', 'födelsedag'],
  },
  {
    id: 'brollop-ljus',
    name: 'Bröllop – Personligt Ljus',
    price: 399,
    originalPrice: null,
    description: 'Minnesvärd bröllopspresent med valfri text och datum.',
    gradient: 'radial-gradient(circle at 50% 50%, #e8d5ce, #C8A99A, #F0EAE3)',
    badge: 'Exklusivt',
    category: 'personliga',
    tags: ['personligt', 'bröllop', 'present'],
  },
]

const categories = [
  { id: 'alla', label: 'Alla produkter' },
  { id: 'doftljus', label: 'Doftljus' },
  { id: 'vaxsmaltare', label: 'Vaxsmältare' },
  { id: 'personliga', label: 'Personliga Presenter' },
]

const sortOptions = [
  { id: 'default', label: 'Populärast' },
  { id: 'price-asc', label: 'Pris: Lågt till Högt' },
  { id: 'price-desc', label: 'Pris: Högt till Lågt' },
]

export default function KollektionerPage() {
  const [activeCategory, setActiveCategory] = useState('alla')
  const [sortBy, setSortBy] = useState('default')
  const [addedId, setAddedId] = useState<string | null>(null)

  const filtered = allProducts
    .filter((p) => activeCategory === 'alla' || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      return 0
    })

  const handleAddToCart = (id: string) => {
    setAddedId(id)
    setTimeout(() => setAddedId(null), 2000)
  }

  return (
    <main className="bg-brand-bg">
      {/* Hero */}
      <section
        className="py-16 lg:py-24 bg-brand-card relative overflow-hidden"
        aria-labelledby="shop-heading"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse at 80% 30%, #C8A99A, transparent 50%), radial-gradient(ellipse at 20% 70%, #8FAE8E, transparent 50%)',
          }}
        />
        <div className="container-max relative">
          <div className="max-w-2xl">
            <span className="font-sans text-xs uppercase tracking-widest text-brand-muted block mb-4">
              Butik
            </span>
            <h1
              id="shop-heading"
              className="font-serif text-5xl md:text-6xl text-brand-text mb-4 leading-tight"
            >
              Våra kollektioner
            </h1>
            <p className="font-sans text-lg text-brand-muted leading-relaxed">
              Handgjorda veganska doftljus och tillbehör. Varje produkt är unik – precis som den person den ges till.
            </p>
          </div>
        </div>
      </section>

      {/* Products section */}
      <section className="py-12 lg:py-16" id="doftljus">
        <div className="container-max">
          {/* Filter & Sort bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-10">
            {/* Category tabs */}
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filtrera produkter efter kategori"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-brand-primary text-white shadow-sm'
                      : 'bg-white text-brand-text hover:bg-brand-card border border-brand-card'
                  }`}
                  id={cat.id !== 'alla' ? cat.id : undefined}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="sort-select"
                className="font-sans text-sm text-brand-muted"
              >
                Sortera:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-sm text-brand-text bg-white border border-brand-card rounded-lg px-3 py-2 focus:outline-none focus:border-brand-primary transition-colors"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <p className="font-sans text-sm text-brand-muted mb-8">
            Visar <span className="font-semibold text-brand-text">{filtered.length}</span> produkter
          </p>

          {/* Product grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            id="vaxsmaltare"
            role="list"
            aria-label="Produktlista"
          >
            {filtered.map((product) => (
              <article
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                role="listitem"
              >
                {/* Image area */}
                <div className="relative aspect-square overflow-hidden">
                  <div
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                    style={{ background: product.gradient }}
                    role="img"
                    aria-label={`${product.name} – marmorerat mönster`}
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white"
                    aria-hidden="true"
                  />
                  {/* Badge */}
                  {product.badge && (
                    <div
                      className={`absolute top-3 left-3 text-white text-xs font-sans font-semibold px-2.5 py-1 rounded-full ${
                        product.originalPrice
                          ? 'bg-brand-text'
                          : 'bg-brand-primary'
                      }`}
                    >
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="font-serif text-xl text-brand-text mb-1.5 group-hover:text-brand-primary transition-colors">
                    {product.name}
                  </h2>
                  <p className="font-sans text-sm text-brand-muted leading-relaxed flex-1 mb-4">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-xs text-brand-muted bg-brand-bg px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-baseline gap-2">
                      <span className="font-sans text-lg font-semibold text-brand-text">
                        {product.price} kr
                      </span>
                      {product.originalPrice && (
                        <span className="font-sans text-sm text-brand-muted line-through">
                          {product.originalPrice} kr
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className={`text-xs font-sans font-medium px-4 py-2 rounded-full transition-all duration-200 active:scale-95 ${
                        addedId === product.id
                          ? 'bg-brand-secondary text-white'
                          : 'bg-brand-primary text-white hover:bg-opacity-90 hover:shadow-md'
                      }`}
                      aria-label={
                        addedId === product.id
                          ? `${product.name} tillagd i kundvagnen`
                          : `Lägg ${product.name} i kundvagnen`
                      }
                    >
                      {addedId === product.id ? '✓ Tillagd' : 'Lägg i kundvagn'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <span className="text-5xl block mb-4" aria-hidden="true">
                🕯️
              </span>
              <p className="font-serif text-2xl text-brand-text mb-2">
                Inga produkter hittades
              </p>
              <p className="font-sans text-brand-muted">
                Prova en annan kategori
              </p>
            </div>
          )}
        </div>
      </section>

      {/* USP Banner */}
      <section
        className="py-12 bg-brand-card"
        id="personliga"
        aria-label="Fördelar med Moony Flames"
      >
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🌱', label: '100% Veganskt' },
              { icon: '🤲', label: 'Handgjort i Sverige' },
              { icon: '📦', label: 'Fri frakt över 500 kr' },
              { icon: '✨', label: 'Unikt varje gång' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                <span className="font-sans text-sm font-medium text-brand-text">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="py-16 bg-brand-bg">
        <div className="container-max text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-text mb-4">
            Nyfiken på historien bakom?
          </h2>
          <p className="font-sans text-brand-muted mb-8 leading-relaxed">
            Varje Moony Flames-produkt skapas med kärlek av Katrin i Strömby, Småland. Läs mer om oss och vår tillverkning.
          </p>
          <Link href="/om-oss" className="btn-secondary">
            Lär känna oss
          </Link>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
