import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '@/components/Logo';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Offers', href: '#offers' },
  { label: 'Flights', href: '#flights' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navLinks.map((l) => l.href.substring(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a1a35]/95 backdrop-blur-xl shadow-2xl shadow-blue-950/30 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="group cursor-pointer"
          >
            <Logo size={40} />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-blue-100/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-400 ${
                      isActive ? 'w-2/3 opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+18005559200"
              className="flex items-center gap-2 text-blue-100/80 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>1-800-555-9200</span>
            </a>
            <button
              onClick={() => handleNavClick('#offers')}
              className="btn-shine relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
            >
              Book Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-[#0a1a35]/98 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div className={`relative flex flex-col items-center justify-center min-h-screen gap-2 transition-transform duration-500 ${mobileOpen ? 'translate-y-0' : '-translate-y-10'}`}>
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-white text-2xl font-bold py-3 transition-all duration-300 hover:text-blue-400"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+18005559200"
            className="flex items-center gap-2 text-blue-300 text-lg font-medium mt-6"
          >
            <Phone className="w-5 h-5" />
            1-800-555-9200
          </a>
          <button
            onClick={() => handleNavClick('#offers')}
            className="mt-4 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold shadow-lg shadow-blue-600/30"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
