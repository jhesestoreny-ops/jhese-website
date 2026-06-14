import { Link } from 'react-router';
import { ChevronRight, Crown } from 'lucide-react';
import { products } from '../data/products';
import heroImage from '../../imports/25fe3876-e024-45ae-abe5-acdfe5269f1b.jpg';
import worldImage1 from '../../imports/JHESE.jpeg';
import worldImage2 from '../../imports/2.jpeg';
import worldImage3 from '../../imports/ORBITAL_STAR.jpeg';
import worldImage4 from '../../imports/FUTURE_TEE.jpeg';
import worldImage5 from '../../imports/DNA_CROWN.jpeg';
import worldImage6 from '../../imports/JS_ESSENTIAL___SHIELD.jpeg';
import dnaImage from '../../imports/DNA.jpeg';

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full flex items-center justify-center" style={{
        height: '100vh',
        backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.4), rgba(11, 11, 11, 0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="text-center z-10 px-8 max-w-5xl">
          <div className="mb-12">
            <Crown className="w-24 h-24 mx-auto mb-8" style={{ color: 'var(--ivory)', strokeWidth: '1' }} />
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(4rem, 12vw, 10rem)',
            fontWeight: '300',
            letterSpacing: '0.25em',
            lineHeight: '1.1',
            marginBottom: '3rem'
          }}>
            JHESE
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            letterSpacing: '0.4em',
            fontWeight: '300',
            marginBottom: '4rem'
          }}>
            BUILT. NOT INHERITED.
          </p>
          <Link to="/shop" style={{
            backgroundColor: 'var(--ivory)',
            color: 'var(--graphite-black)',
            padding: '1.25rem 4rem',
            letterSpacing: '0.25em',
            fontWeight: '500',
            fontSize: '0.875rem',
            border: '1px solid var(--ivory)',
            display: 'inline-block',
            transition: 'all 0.4s ease'
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ivory)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--ivory)';
            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--graphite-black)';
          }}>
            SHOP COLLECTION
          </Link>
        </div>

        <div className="absolute bottom-16 right-16 opacity-50" style={{ fontFamily: 'var(--font-sans)' }}>
          <div className="text-xs tracking-[0.3em] mb-3">SCROLL</div>
          <div className="w-px h-20 mx-auto" style={{ backgroundColor: 'var(--ivory)' }}></div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-40 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between mb-20">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '300', letterSpacing: '0.1em' }}>
              NEW ARRIVALS
            </h2>
            <Link to="/shop" className="flex items-center gap-2 tracking-[0.2em] text-sm opacity-70 hover:opacity-100 transition-opacity pb-2">
              VIEW ALL <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Manifesto */}
      <section className="py-40 px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <div className="mb-8 tracking-[0.3em] text-sm opacity-50">OUR PURPOSE</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '300', lineHeight: '1.2', letterSpacing: '0.02em' }}>
              WE DON'T INHERIT THE KINGDOM.
              <br />
              WE BUILD IT.
            </h2>
          </div>
          <div style={{ fontFamily: 'var(--font-sans)', lineHeight: '2.2', color: 'var(--silver)', fontSize: '1.125rem' }}>
            <p className="mb-8">
              JHESE is not just about clothing. It's a mindset. It's about those who
              refuse to wait for permission. Those who understand that power isn't inherited — it's created.
            </p>
            <p className="mb-8">
              No one owes you power. No one will hand you the crown. You build it. Thread by thread.
              Decision by decision. Legacy by legacy.
            </p>
            <Link to="/about" style={{
              color: 'var(--ivory)',
              padding: '1.25rem 3rem',
              letterSpacing: '0.25em',
              fontWeight: '500',
              fontSize: '0.875rem',
              border: '1px solid var(--ivory)',
              marginTop: '3rem',
              backgroundColor: 'transparent',
              transition: 'all 0.4s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--ivory)';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--graphite-black)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ivory)';
            }}>
              OUR STORY
            </Link>
          </div>
        </div>
      </section>

      {/* DNA of Legacy */}
      <section className="py-40 px-8" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="aspect-square relative overflow-hidden" style={{ backgroundColor: '#050505' }}>
            <img src={dnaImage} alt="DNA of Legacy" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="mb-8 tracking-[0.3em] text-sm opacity-50">OUR ESSENCE</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: '300', lineHeight: '1.15', letterSpacing: '0.02em', marginBottom: '3rem' }}>
              THE DNA OF LEGACY
            </h2>
            <div style={{ fontFamily: 'var(--font-sans)', lineHeight: '2.2', color: 'var(--silver)', fontSize: '1.125rem' }}>
              <p className="mb-6">Every thread carries intention.</p>
              <p className="mb-6">Every stitch holds meaning.</p>
              <p className="mb-6">Every piece is crafted to last.</p>
              <p>This is legacy woven into fabric.</p>
            </div>
            <Link to="/about" style={{
              color: 'var(--ivory)',
              padding: '1.25rem 3rem',
              letterSpacing: '0.25em',
              fontWeight: '500',
              fontSize: '0.875rem',
              border: '1px solid var(--ivory)',
              marginTop: '4rem',
              backgroundColor: 'transparent',
              transition: 'all 0.4s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--ivory)';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--graphite-black)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ivory)';
            }}>
              DISCOVER MORE
            </Link>
          </div>
        </div>
      </section>

      {/* JHESE World */}
      <section className="py-40 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between mb-20">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '300', letterSpacing: '0.1em' }}>
              JHESE WORLD
            </h2>
            <a 
              href="https://www.instagram.com/jheseofficialny?igsh=OHExM3Z1a2V0OTM%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 tracking-[0.2em] text-sm opacity-70 hover:opacity-100 transition-opacity pb-2"
            >
              FOLLOW @JHESE.OFFICIAL <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[worldImage1, worldImage2, worldImage3, worldImage4, worldImage5, worldImage6].map((img, index) => (
              <div key={index} className="aspect-square relative overflow-hidden group cursor-pointer" style={{ backgroundColor: '#0a0a0a' }}>
                {img ? (
                  <img
                    src={img}
                    alt={`JHESE World ${index + 1}`}
                    className="group-hover:scale-105 transition-transform duration-700"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: index === 1 || index === 2 ? 'contain' : 'cover',
                      objectPosition: 'center',
                      padding: index === 1 || index === 2 ? '1.5rem' : '0',
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <Crown className="w-32 h-32" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ product }: { product: ReturnType<typeof products[0]['id'] extends string ? typeof products[number] : never> & { id: string; name: string; price: number; color: string; image: string | null; soldOut: boolean } }) {
  return (
    <Link to={`/product/${product.id}`} className={`group block ${product.soldOut ? 'cursor-default pointer-events-none' : 'cursor-pointer'}`}>
      <div className="aspect-[3/4] mb-6 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
        {product.image ? (
          <img src={product.image} alt={product.name} className={`w-full h-full object-cover transition-opacity duration-500 ${product.soldOut ? 'opacity-40' : ''}`} />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Crown className="w-20 h-20 opacity-10" />
          </div>
        )}
        {product.soldOut ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="px-6 py-2 border tracking-[0.3em] text-xs" style={{ borderColor: 'var(--silver)', color: 'var(--silver)', backgroundColor: 'rgba(11,11,11,0.6)', fontFamily: 'var(--font-sans)' }}>
              SOLD OUT
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: 'rgba(11, 11, 11, 0.5)' }}>
            <div className="text-sm tracking-[0.3em]">VIEW PRODUCT</div>
          </div>
        )}
      </div>
      <div style={{ fontFamily: 'var(--font-sans)' }}>
        <div className="tracking-[0.15em] mb-2 text-base group-hover:opacity-60 transition-opacity">{product.name.toUpperCase()}</div>
        <div className="text-xs opacity-50 mb-3 tracking-wider">{product.color}</div>
        <div className="flex items-center gap-3">
          <div className="tracking-wider text-sm" style={{ textDecoration: product.soldOut ? 'line-through' : 'none', opacity: product.soldOut ? 0.4 : 1 }}>
            ${product.price}.00 USD
          </div>
          {product.soldOut && <span className="text-xs tracking-[0.2em]" style={{ color: '#8B0A14' }}>SOLD OUT</span>}
        </div>
      </div>
    </Link>
  );
}