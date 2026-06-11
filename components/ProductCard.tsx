import Link from 'next/link'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  gradientClass: string
  badge?: string
  href?: string
}

interface ProductCardProps {
  product: Product
}

const gradientStyles: Record<string, string> = {
  'marble-gradient-1': 'radial-gradient(ellipse at 20% 50%, #C8A99A 0%, #F0EAE3 40%, #8FAE8E 70%, #FAF7F2 100%)',
  'marble-gradient-2': 'radial-gradient(ellipse at 80% 20%, #8FAE8E 0%, #F0EAE3 50%, #C8A99A 100%)',
  'marble-gradient-3': 'radial-gradient(circle at 30% 60%, #e8d5ce 0%, #d4c4bb 30%, #b8cbb7 60%, #F0EAE3 100%)',
  'marble-gradient-4': 'conic-gradient(from 120deg at 50% 50%, #C8A99A, #FAF7F2, #8FAE8E, #F0EAE3, #C8A99A)',
  'marble-gradient-5': 'radial-gradient(ellipse at 60% 40%, #d4bfb8 0%, #c2d4c1 40%, #e8ddd8 70%, #FAF7F2 100%)',
  'marble-gradient-6': 'radial-gradient(circle at 70% 30%, #8FAE8E 0%, #F0EAE3 35%, #C8A99A 65%, #FAF7F2 100%)',
}

export default function ProductCard({ product }: ProductCardProps) {
  const gradientStyle = gradientStyles[product.gradientClass] || gradientStyles['marble-gradient-1']
  const href = product.href || '/kollektioner'

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image area */}
      <div className="relative aspect-square overflow-hidden">
        {/* Gradient placeholder representing marble candle */}
        <div
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
          style={{ background: gradientStyle }}
          role="img"
          aria-label={`${product.name} – dekorativ bild`}
        />

        {/* Overlay swirl effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        {/* Sale badge */}
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-brand-text text-white text-xs font-sans font-semibold px-2.5 py-1 rounded-full">
            Spara {product.originalPrice - product.price} kr
          </div>
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3 bg-brand-primary text-white text-xs font-sans font-semibold px-2.5 py-1 rounded-full">
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-xl text-brand-text mb-1.5 group-hover:text-brand-primary transition-colors">
          <Link href={href} className="stretched-link">
            {product.name}
          </Link>
        </h3>
        <p className="font-sans text-sm text-brand-muted leading-relaxed flex-1 mb-4">
          {product.description}
        </p>

        {/* Price row */}
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
            className="bg-brand-primary text-white text-xs font-sans font-medium px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-200 hover:shadow-md active:scale-95"
            aria-label={`Lägg ${product.name} i kundvagnen`}
          >
            Lägg i kundvagn
          </button>
        </div>
      </div>
    </article>
  )
}

export type { Product }
