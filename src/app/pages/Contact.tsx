import { useState } from 'react';
import { Crown } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-32 pb-40 min-h-screen">

      {/* Header */}
      <section className="px-8 py-24" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-xs tracking-[0.4em] opacity-40 mb-6">JHESE / CONTACT</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: '300', letterSpacing: '0.1em' }}>
            GET IN TOUCH
          </h1>
        </div>
      </section>

      <section className="px-8 py-32">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">

          {/* Left */}
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--silver)', lineHeight: '2.2', fontSize: '1.125rem', marginBottom: '4rem' }}>
              Whether you have a question about a product, a collaboration, or just want to connect with the JHESE world — we're here.
            </p>

            <div className="space-y-12">
              {[
                { label: 'EMAIL', value: 'info@jhese.com' },
                { label: 'INSTAGRAM', value: '@JHESE.OFFICIAL' },
                { label: 'LOCATION', value: 'NEW YORK, USA' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-xs tracking-[0.35em] opacity-40 mb-2">{label}</div>
                  <div className="tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <Crown className="w-16 h-16 mb-8 opacity-30" strokeWidth="1" />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: '300', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
                  MESSAGE SENT
                </h3>
                <p style={{ color: 'var(--silver)', fontFamily: 'var(--font-sans)', lineHeight: '2' }}>
                  We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  { id: 'name', label: 'YOUR NAME', type: 'text', value: form.name },
                  { id: 'email', label: 'EMAIL ADDRESS', type: 'email', value: form.email },
                ].map(({ id, label, type, value }) => (
                  <div key={id}>
                    <label className="block text-xs tracking-[0.35em] opacity-40 mb-3" htmlFor={id}>{label}</label>
                    <input
                      id={id}
                      type={type}
                      required
                      value={value}
                      onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
                      className="w-full bg-transparent border-b py-4 text-sm tracking-wider outline-none transition-colors duration-300"
                      style={{ borderColor: 'rgba(201,201,201,0.2)', fontFamily: 'var(--font-sans)', color: 'var(--ivory)' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--ivory)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(201,201,201,0.2)'}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs tracking-[0.35em] opacity-40 mb-3" htmlFor="message">MESSAGE</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full bg-transparent border-b py-4 text-sm tracking-wider outline-none resize-none transition-colors duration-300"
                    style={{ borderColor: 'rgba(201,201,201,0.2)', fontFamily: 'var(--font-sans)', color: 'var(--ivory)' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--ivory)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(201,201,201,0.2)'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 text-sm tracking-[0.3em] mt-8 transition-all duration-400"
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
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
