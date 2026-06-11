import Link from 'next/link'
import ProductCard from './ProductCard'
import type { Product } from './ProductCard'

const featuredProducts: Product[] = [
  {
    id: 'marmorerat-doftljus',
    name: 'Marmorerat Doftljus',
    price: 299,
    description: 'Varje ljus är ett konstverk. Marmorerade mönster som aldrig kan upprepas.',
    gradientClass: 'marble-gradient-1',
    badge: 'Bestseller',
  },
  {
    id: 'sag-det-med-ljus',
    name: 'Säg det med ett ljus',
    price: 349,
    description: 'Personligt doftljus med din text på etiketten. Perfekt som gåva.',
    gradientClass: 'marble-gradient-2',
    badge: 'Personligt',
  },
  {
    id: 'doftljuspaket',
    name: 'Doftljuspaket 3-pack',
    price: 749,
    originalPrice: 897,
    description: 'Tre unika handgjorda doftljus till paketpris.',
    gradientClass: 'marble-gradient-3',
  },
  {
    id: 'vaxsmaltare',
    name: 'Vaxsmältare',
    price: 149,
    description: 'Handgjord vaxsmältare i veganskt rapsvax. Lång dofttid.',
    gradientClass: 'marble-gradient-4',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-28 bg-brand-bg" aria-labelledby="featured-products-heading">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="font-sans text-xs uppercase tracking-widest text-brand-muted block mb-3">
            Populärast just nu
          </span>
          <h2 id="featured-products-heading" className="section-heading mb-4">
            Utvalda favoriter
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            Handgjorda med kärlek – varje produkt är unik och tillverkad i vår lilla ateljé i Strömby.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/kollektioner" className="btn-secondary">
            Se alla produkter
          </Link>
        </div>
      </div>
    </section>
  )
}
