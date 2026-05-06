import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const WA_LINK = 'https://wa.me/5521976834322';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a1f3c] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <img
              src="/Gemini_Generated_Image_iwx9leiwx9leiwx9.png"
              alt="CredHouse"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/80 hover:text-[#f0b429] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5c] text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Phone size={15} />
              WhatsApp
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1f3c] border-t border-white/10 px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-[#f0b429] py-2 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#25d366] text-white font-semibold py-2 rounded-full mt-2"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
