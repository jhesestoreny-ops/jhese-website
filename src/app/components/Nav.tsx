import { Link, useNavigate } from 'react-router';
import { Mail, Search, User, Crown } from 'lucide-react';

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-8 flex items-center justify-between border-b" style={{
      backgroundColor: 'rgba(11, 11, 11, 0.85)',
      backdropFilter: 'blur(20px)',
      borderColor: 'rgba(201, 201, 201, 0.05)'
    }}>
      <Link to="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }} className="tracking-[0.3em] hover:opacity-80 transition-opacity">
        <Crown className="inline-block w-5 h-5 mr-3" strokeWidth="1.5" />
        JHESE
      </Link>

      <div className="flex gap-16 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
        <Link to="/shop" className="tracking-[0.2em] opacity-70 hover:opacity-100 transition-all duration-300">SHOP</Link>
        <Link to="/shop" className="tracking-[0.2em] opacity-70 hover:opacity-100 transition-all duration-300">COLLECTIONS</Link>
        <Link to="/about" className="tracking-[0.2em] opacity-70 hover:opacity-100 transition-all duration-300">ABOUT</Link>
        <Link to="/" className="tracking-[0.2em] opacity-70 hover:opacity-100 transition-all duration-300">WORLD</Link>
        <Link to="/contact" className="tracking-[0.2em] opacity-70 hover:opacity-100 transition-all duration-300">CONTACT</Link>
      </div>

      <div className="flex items-center gap-8">
        <button className="opacity-60 hover:opacity-100 transition-all duration-300" onClick={() => navigate('/shop')}>
          <Search className="w-5 h-5" strokeWidth="1.5" />
        </button>
        <button className="opacity-60 hover:opacity-100 transition-all duration-300" onClick={() => navigate('/contact')}>
          <User className="w-5 h-5" strokeWidth="1.5" />
        </button>
        <button className="opacity-60 hover:opacity-100 transition-all duration-300" onClick={() => navigate('/contact')}>
          <Mail className="w-5 h-5" strokeWidth="1.5" />
        </button>
      </div>
    </nav>
  );
}