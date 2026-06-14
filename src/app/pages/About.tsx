import { Link } from 'react-router';
import { Crown } from 'lucide-react';
import dnaImage from '../../imports/DNA-1.jpeg';

export default function About() {
  return (
    <div className="pt-32 pb-40 min-h-screen">

      {/* Hero */}
      <section className="px-8 py-32" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-[1200px] mx-auto text-center">
          <Crown className="w-16 h-16 mx-auto mb-12 opacity-30" strokeWidth="1" />
          <div className="text-xs tracking-[0.4em] opacity-40 mb-8">EST. NEW YORK</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 8vw, 8rem)', fontWeight: '300', letterSpacing: '0.15em', lineHeight: '1.05', marginBottom: '3rem' }}>
            THE STORY
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1rem, 2vw, 1.375rem)', letterSpacing: '0.35em', fontWeight: '300', opacity: 0.5 }}>
            BUILT. NOT INHERITED.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-8 py-40">
        <div className="max-w-[900px] mx-auto">
          <div className="text-xs tracking-[0.4em] opacity-40 mb-16">OUR PURPOSE</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: '300', lineHeight: '1.6', letterSpacing: '0.02em', color: 'var(--ivory)' }}>
            <p className="mb-12">
              JHESE is not just about clothing. It's a mindset. It's about those who refuse to wait for permission.
            </p>
            <p className="mb-12" style={{ color: 'var(--silver)' }}>
              Those who understand that power isn't inherited — it's created. Piece by piece. Decision by decision.
            </p>
            <p>
              No one owes you power. No one will hand you the crown. You build it.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-8 py-32" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-xs tracking-[0.4em] opacity-40 mb-20">WHAT WE STAND FOR</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'LEGACY', body: 'Every piece is built to outlast trends. We design for the generation that comes after — the ones who will inherit what you build.' },
              { title: 'INTENTION', body: 'Nothing is accidental. Every stitch, every silhouette, every detail carries meaning. We craft with purpose.' },
              { title: 'IDENTITY', body: 'JHESE is a declaration. You wear it to announce who you are, not to blend in. Clothes for those with something to say.' },
            ].map(({ title, body }) => (
              <div key={title}>
                <div className="w-px h-20 mb-12" style={{ backgroundColor: 'rgba(201,201,201,0.15)' }}></div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: '300', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
                  {title}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--silver)', lineHeight: '2', fontSize: '1rem' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DNA Section */}
      <section className="px-8 py-40">
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32 text-center" style={{ backgroundColor: '#0a0a0a' }}>
        <Crown className="w-12 h-12 mx-auto mb-12 opacity-20" strokeWidth="1" />
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '300', letterSpacing: '0.1em', marginBottom: '3rem' }}>
          READY TO BUILD YOUR LEGACY?
        </h2>
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
      </section>
    </div>
  );
}