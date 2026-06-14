import { Outlet } from 'react-router';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Root() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--graphite-black)', color: 'var(--ivory)', fontFamily: 'var(--font-sans)' }}>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
