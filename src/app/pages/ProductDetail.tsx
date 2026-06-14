import { useParams, Link } from 'react-router';
import { Crown, ChevronLeft, Mail } from 'lucide-react';
import { products } from '../data/products';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <Crown className="w-16 h-16 mx-auto mb-8 opacity-20" />
          <p className="tracking-[0.3em] opacity-40 mb-8">PRODUCT NOT FOUND</p>
          <Link to="/shop" className="text-sm tracking-[0.2em] opacity-70 hover:opacity-100 transition-opacity border-b pb-1" style={{ borderColor: 'var(--ivory)' }}>
            BACK TO SHOP
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-40 px-8 min-h-screen">
      <div className="max-w-[1400px] mx-auto">

        {/* Breadcrumb */}
        <Link to="/shop" className="flex items-center gap-2 text-xs tracking-[0.25em] opacity-40 hover:opacity-100 transition-opacity mb-20">
          <ChevronLeft className="w-4 h-4" /> BACK TO SHOP
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          {/* Image */}
          <div className="aspect-[3/4] relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
            {product.image ? (
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Crown className="w-32 h-32 opacity-10" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="lg:pt-8">
            <div className="text-xs tracking-[0.35em] opacity-40 mb-4">{product.category}</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '300', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
              {product.name.toUpperCase()}
            </h1>
            <div className="text-sm tracking-wider opacity-50 mb-8">{product.color}</div>

            <div className="flex items-center gap-4 mb-16">
              <div className="text-xl tracking-wider" style={{ textDecoration: product.soldOut ? 'line-through' : 'none', opacity: product.soldOut ? 0.4 : 1 }}>
                ${product.price}.00 USD
              </div>
              {product.soldOut && (
                <span className="text-sm tracking-[0.2em]" style={{ color: '#8B0A14' }}>SOLD OUT</span>
              )}
            </div>

            <div style={{ color: 'var(--silver)', lineHeight: '2', fontSize: '1rem', marginBottom: '3rem' }}>
              {product.description}
            </div>

            {!product.soldOut && (
              <>
                {/* Size selector */}
                <div className="mb-10">
                  <div className="text-xs tracking-[0.3em] opacity-50 mb-6">AVAILABLE SIZES</div>
                  <div className="flex gap-3 flex-wrap">
                    {sizes.map((size) => (
                      <div
                        key={size}
                        className="w-14 h-14 border text-xs tracking-widest flex items-center justify-center"
                        style={{ borderColor: 'rgba(201,201,201,0.3)', fontFamily: 'var(--font-sans)' }}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inquire button */}
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-4 py-5 text-sm tracking-[0.3em] transition-all duration-400"
                  style={{ backgroundColor: 'var(--ivory)', color: 'var(--graphite-black)', border: '1px solid var(--ivory)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--ivory)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--ivory)';
                    e.currentTarget.style.color = 'var(--graphite-black)';
                  }}
                >
                  <Mail className="w-5 h-5" strokeWidth="1.5" />
                  INQUIRE FOR AVAILABILITY
                </Link>
              </>
            )}

            {/* Details */}
            <div className="mt-16 pt-12 border-t space-y-6" style={{ borderColor: 'rgba(201,201,201,0.08)' }}>
              {[
                ['MATERIAL', '100% Premium Heavyweight Cotton'],
                ['FIT', 'Oversized / Relaxed'],
                ['CARE', 'Cold wash, hang dry'],
                ['ORIGIN', 'New York, USA'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between text-sm">
                  <span className="tracking-[0.2em] opacity-40">{label}</span>
                  <span className="opacity-70 tracking-wider">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}