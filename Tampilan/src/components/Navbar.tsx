import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/Logo Veppo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isProductsPage = location.pathname === '/products';
  // On pages with white background (e.g. /products), always show the lilac scrolled style
  const showScrolledStyle = isScrolled || isProductsPage;

  const navItems = [
    { label: 'HOME', href: '/', path: '/' },
    { label: 'PRODUK', href: '/products', path: '/products' },
    { label: 'TENTANG KAMI', href: '/#tentang' },
    { label: 'KONTAK', href: '/#kontak' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-50 transition-all duration-500 ${
        showScrolledStyle
          ? 'py-3 md:py-4'
          : 'bg-transparent py-4 md:py-5'
      }`}
      style={showScrolledStyle ? {
        background: 'linear-gradient(135deg, rgba(245, 230, 245, 0.96) 0%, rgba(255, 235, 245, 0.96) 50%, rgba(240, 220, 250, 0.96) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 4px 24px rgba(180, 120, 200, 0.12), 0 1px 0 rgba(200, 150, 220, 0.2)'
      } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          {/* Logo - Left */}
          <a href="/" className="flex items-center gap-2 group shrink-0">
            <img src={logo} alt="Veppo Logo" className="h-12 md:h-16 w-auto object-contain" />
          </a>

          {/* Desktop Menu - Left aligned after logo */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {navItems.map((item) => {
              const isHighlight = item.path ? location.pathname === item.path : false;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm lg:text-base font-semibold tracking-wide transition-all duration-300 relative group ${
                    isHighlight
                      ? showScrolledStyle ? 'text-brand-violet' : 'text-white'
                      : showScrolledStyle
                        ? 'text-brand-text-gray hover:text-brand-violet'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      isHighlight
                        ? `w-full ${showScrolledStyle ? 'bg-brand-violet' : 'bg-white'}`
                        : `w-0 group-hover:w-full ${showScrolledStyle ? 'bg-brand-violet-soft' : 'bg-white/60'}`
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* CTA Buttons - Right side */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <a
              href="/#kontak"
              className={`px-5 py-2.5 border-2 font-semibold text-sm rounded-lg transition-all duration-300 ${
                showScrolledStyle
                  ? 'border-brand-violet text-brand-violet hover:bg-violet-pink-gradient hover:border-transparent hover:text-white'
                  : 'border-white/70 text-white hover:bg-white hover:text-brand-violet'
              }`}
            >
              DAPATKAN INFO
            </a>
            <a
              href="/products"
              className="px-5 py-2.5 bg-violet-pink-gradient text-white font-semibold text-sm rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-brand-pink/25"
            >
              BELI SEKARANG
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                showScrolledStyle
                  ? 'text-brand-text-dark hover:bg-brand-bg-light'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-brand-border shadow-xl" style={{ background: 'linear-gradient(135deg, rgba(248, 233, 248, 0.98) 0%, rgba(255, 237, 248, 0.98) 50%, rgba(243, 224, 253, 0.98) 100%)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => {
              const isHighlight = item.path ? location.pathname === item.path : false;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isHighlight
                      ? 'text-brand-pink bg-brand-pink-soft/30'
                      : 'text-brand-text-gray hover:text-brand-violet hover:bg-brand-bg-light'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3 px-4 flex flex-col gap-2">
              <a
                href="/#kontak"
                className="w-full py-3 border-2 border-brand-violet text-brand-violet font-semibold text-sm rounded-lg text-center hover:bg-violet-pink-gradient hover:border-transparent hover:text-white transition-all"
              >
                DAPATKAN INFO
              </a>
              <a
                href="/products"
                className="w-full py-3 bg-violet-pink-gradient text-white font-semibold text-sm rounded-lg text-center hover:opacity-90 transition-all shadow-lg shadow-brand-pink/25"
              >
                BELI SEKARANG
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
