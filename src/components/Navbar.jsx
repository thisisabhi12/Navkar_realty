import React, { useState, useEffect } from 'react';
import { Building2, Phone, Menu, X, ArrowRight, Sparkles, Calendar } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Listings', href: '#listings' },
    { name: 'About VS Group', href: '#about' },
    { name: 'EMI Calculator', href: '#calculator' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top micro-bar */}
      <div className="bg-[var(--theme-navbar-top-bg)] text-white/90 text-xs py-2 px-4 border-b border-[var(--theme-navbar-top-border)] hidden md:block transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white/80">
              Vadodara Hub: Vasna Road & Diwalipura
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+919173946161" 
              className="flex items-center hover:text-[var(--theme-navbar-accent)] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[var(--theme-navbar-accent)]" />
              +91 91739 46161
            </a>
            <span className="text-white/40">|</span>
            <span className="text-[var(--theme-navbar-accent)] flex items-center font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-[var(--theme-navbar-accent)]" />
              A Proud Part of VS Group
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[var(--theme-navbar-bg)] backdrop-blur-md shadow-md py-3' 
            : 'bg-[var(--theme-navbar-bg)] backdrop-blur-sm py-4 border-b border-[var(--theme-border)]'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Brand Logo & Tagline */}
            <a href="#home" className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-brand-700 rounded-xl p-1">
              <div className="h-12 sm:h-14 py-0.5 flex items-center">
                <img 
                  src="/logo.jpg" 
                  alt="Navkar Realty - The Name of Trust (Part of VS Group)" 
                  className="h-full w-auto object-contain rounded-md group-hover:scale-105 transition-transform" 
                />
              </div>
              <div className="flex flex-col justify-center border-l border-[#DCE5DD] pl-3">
                <span className="text-xs sm:text-sm font-extrabold tracking-tight text-[#202923] font-display">
                  NAVKAR <span className="text-brand-700">REALTY</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-brand-800 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-700 mr-1.5"></span>
                  Part of VS Group
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-[#66716A] hover:text-brand-700 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-700 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="https://wa.me/919173946161?text=Hello%20Navkar%20Realty,%20I%20am%20interested%20in%20properties%20in%20Vadodara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold text-brand-800 bg-brand-50 hover:bg-brand-100 border border-brand-200 px-3.5 py-2.5 rounded-lg transition-colors flex items-center"
              >
                <span className="w-2 h-2 rounded-full bg-brand-600 animate-ping mr-2"></span>
                Quick WhatsApp
              </a>

              <button
                type="button"
                id="navbar-book-consultation-btn"
                onClick={onOpenConsultation}
                className="bg-brand-700 hover:bg-brand-800 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-brand-700/20 hover:shadow-lg hover:shadow-brand-700/35 transition-all flex items-center space-x-2 group"
              >
                <Calendar className="w-4 h-4 text-brand-100" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Burger Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                type="button"
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#202923] hover:text-brand-700 hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-700"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#DCE5DD] px-4 pt-3 pb-6 space-y-3 shadow-xl transition-all">
            <div className="py-2 px-3 bg-brand-50 rounded-lg border border-brand-200 flex items-center justify-between text-xs font-medium text-brand-900">
              <span className="flex items-center">
                <Sparkles className="w-4 h-4 mr-1.5 text-brand-700" />
                A Proud Part of VS Group
              </span>
              <a href="tel:+919173946161" className="text-brand-700 font-bold underline">
                Call Us
              </a>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-[#202923] hover:text-brand-700 hover:bg-brand-50/80 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#DCE5DD] space-y-2">
              <button
                type="button"
                id="mobile-book-consultation-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-brand-700 hover:bg-brand-800 text-white text-sm font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Consultation</span>
              </button>

              <a
                href="https://wa.me/919173946161?text=Hello%20Navkar%20Realty,%20I%20am%20interested%20in%20Vadodara%20properties"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-50 border border-brand-200 text-brand-800 text-sm font-bold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
