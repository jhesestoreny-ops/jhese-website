import { useState } from 'react';
import { Link } from 'react-router';
import { Crown } from 'lucide-react';
import { products } from '../data/products';

const categories = ['ALL', 'T-SHIRTS', 'OUTERWEAR'];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filtered = activeCategory === 'ALL'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-40 px-8 min-h-screen">
      <div className="max-w-[1600px] mx-auto">

        {/* Header */}
        <div className="mb-20 border-b pb-16" style={{ borderColor: 'rgba(201,201,201,0.08)' }}>
          <div className="text-xs tracking-[0.4em] opacity-40 mb-6">JHESE / SHOP</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: '300', letterSpacing: '0.1em' }}>
            COLLECTION
          </h1>
        </div>

        {/* Filter */}
        <div className="flex gap-12 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="text-sm tracking-[0.25em] transition-all duration-300 pb-1"
              style={{
                opacity: activeCategory === cat ? 1 : 0.4,
                borderBottom: activeCategory === cat ? '1px solid var(--ivory)' : '1px solid transparent',
                fontFamily: 'var(--font-sans)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {filtered.map((product) => (
            <Link
              key={product.id}
              to={product.soldOut ? '#' : `/product/${product.id}`}
              className={`group block ${product.soldOut ? 'cursor-default pointer-events-none' : 'cursor-pointer'}`}
            >
              <div className="aspect-[3/4] mb-6 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
                {product.image ? (
                  <img src={product.image} alt={product.name} className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${product.soldOut ? 'opacity-40' : ''}`} />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Crown className="w-20 h-20 opacity-10" />
                  </div>
                )}
                {product.soldOut ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-6 py-2 border tracking-[0.3em] text-xs" style={{ borderColor: 'var(--silver)', color: 'var(--silver)', backgroundColor: 'rgba(11,11,11,0.6)' }}>
                      SOLD OUT
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: 'rgba(11,11,11,0.5)' }}>
                    <div className="text-sm tracking-[0.3em]">VIEW PRODUCT</div>
                  </div>
                )}
              </div>
              <div style={{ fontFamily: 'var(--font-sans)' }}>
                <div className="tracking-[0.15em] mb-2 text-base">{product.name.toUpperCase()}</div>
                <div className="text-xs opacity-50 mb-3 tracking-wider">{product.color}</div>
                <div className="flex items-center gap-3">
                  <div className="tracking-wider text-sm" style={{ textDecoration: product.soldOut ? 'line-through' : 'none', opacity: product.soldOut ? 0.4 : 1 }}>
                    ${product.price}.00 USD
                  </div>
                  {product.soldOut && <span className="text-xs tracking-[0.2em]" style={{ color: '#8B0A14' }}>SOLD OUT</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
