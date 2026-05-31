import { useState, useEffect } from 'react';
import { Smartphone, Menu, X, Shield, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                <Smartphone className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-cyan-500 to-emerald-500 rounded-xl blur-sm opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">
                Smart<span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Rx</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#booking"
                onClick={(e) => handleScrollTo(e, '#booking')}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-xl group bg-gradient-to-br from-cyan-500 to-emerald-500 group-hover:from-cyan-500 group-hover:to-emerald-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-800 transition-all duration-300"
              >
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-slate-950 rounded-lg group-hover:bg-opacity-0">
                  Book a Repair
                </span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] bg-slate-900/95 backdrop-blur-lg border-b border-slate-800/80 transition-all duration-300 transform origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="block px-3 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800/50 px-3">
            <a
              href="#booking"
              onClick={(e) => handleScrollTo(e, '#booking')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-emerald-400 transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4" />
              Book a Repair
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
