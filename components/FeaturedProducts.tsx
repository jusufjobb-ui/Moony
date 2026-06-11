import Link from 'next/link'
import ProductCard from './ProductCard'
import type { Product } from './ProductCard'

const featuredProducts: Product[] = [
  {
    id: 'aurora',
    name: 'Aurora',
    price: 299,
    description: 'Citrus · Gröna noter · Jasmin. 200g, ~50h brinntid.',
    gradientClass: 'marble-gradient-1',
    image: '/images/aurora.jpeg',
    badge: 'Bestseller',
  },
  {
    id: 'orange-a-licious',
    name: 'Orange-a-licious',
    price: 299,
    description: 'Apelsin · Kryddiga blommor · Vaniljmusk. "When life needs a burst of sunshine."',
    gradientClass: 'marble-gradient-2',
    image: '/images/orange-a-licious.jpeg',
  },
  {
    id: 'whiskey-fire',
    name: 'Whiskey & Fire',
    price: 299,
    description: 'Mild whiskey · Mörkt trä · Mjuk vanilj. "For moments that ask for more."',
    gradientClass: 'marble-gradient-3',
    image: '/images/whiskey-fire.jpeg',
  },
  {
    id: 'doftljuspaket',
    name: 'Doftljuspaket 3-pack',
    price: 749,
    originalPrice: 897,
    description: 'Tre unika handgjorda doftljus till paketpris. Välj dina favoriter.',
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
