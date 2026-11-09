import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  Sparkles,
  Facebook,
  Instagram
} from 'lucide-react';

export default function Footer({ onOpenConsultation, onOpenLegal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#092615] text-white pt-16 pb-12 border-t border-[#176B3A]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Corporate Branding Strip */}
        <div className="pb-12 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-2 rounded-2xl shadow-lg border border-[#DCE5DD]">
                <img 
                  src="/logo.jpg" 
                  alt="Navkar Realty - The Name of Trust" 
                  className="h-14 w-auto object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white font-display">
                  NAVKAR <span className="text-[#DCEBDD] font-extrabold">REALTY</span>
                </span>
                <span className="text-xs font-semibold text-[#DCEBDD] tracking-wider uppercase block mt-0.5">
                  The Name of Trust • Vadodara
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
              Vadodara's premier real estate consultancy. Delivering transparent acquisitions, high-yield commercial investments, and luxury residences across Vasna Road, Diwalipura, and beyond.
            </p>
          </div>

          <div className="md:col-span-6 flex justify-end items-center">
            <button
              type="button"
              onClick={scrollToTop}
              className="p-3.5 rounded-xl bg-[#176B3A] hover:bg-[#104D2A] text-white transition-colors border border-[#DCEBDD]/20 shadow-md"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Middle Footer Navigation Links & Corporate Info */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Exact Corporate Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#DCEBDD] font-display">
              Corporate Headquarters
            </h4>
            
            <div className="space-y-3 text-xs text-slate-200">
              <p className="font-bold text-white text-sm">
                Navkar Realty
              </p>
              
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#DCEBDD] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  207, Vihav Supremus 2, Near Ward No 11, Vasna Road, Diwalipura, Vadodara, Gujarat - 390007
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#DCEBDD] flex-shrink-0" />
                <a href="tel:+919173946161" className="text-slate-300 hover:text-[#DCEBDD] transition-colors">
                  +91 91739 46161
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#DCEBDD] flex-shrink-0" />
                <a href="mailto:realtynavkar61@gmail.com" className="text-slate-300 hover:text-[#DCEBDD] transition-colors">
                  realtynavkar61@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#DCEBDD] font-display">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home Page</a>
              </li>
              <li>
                <a href="#listings" className="hover:text-white transition-colors">Featured Vadodara Listings</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">Home Loan EMI Calculator</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Client Reviews & Stories</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Office Location & Directions</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Localities in Vadodara */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#DCEBDD] font-display">
              Prime Vadodara Localities
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#listings" className="hover:text-white transition-colors">Vasna Road Luxury Flats</a>
              </li>
              <li>
                <a href="#listings" className="hover:text-white transition-colors">Diwalipura Court Area Homes</a>
              </li>
              <li>
                <a href="#listings" className="hover:text-white transition-colors">Alkapuri Heritage Apartments</a>
              </li>
              <li>
                <a href="#listings" className="hover:text-white transition-colors">Bhayli Modern Gated Villas</a>
              </li>
              <li>
                <a href="#listings" className="hover:text-white transition-colors">Sevasi Green Living Communities</a>
              </li>
              <li>
                <a href="#listings" className="hover:text-white transition-colors">Vihav Supremus 2 Commercial</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Navkar Realty Connect & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#DCEBDD] font-display">
              Connect With Us
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Stay updated on upcoming pre-launches, auction properties, and exclusive developer deals in Vadodara.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-1">
              <a 
                href="https://www.facebook.com/p/Navkar-Realty-61595126739279/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-lg bg-[#104D2A]/60 border border-[#176B3A]/40 text-slate-300 hover:text-white hover:bg-[#176B3A] flex items-center justify-center transition-all"
                aria-label="Follow Navkar Realty on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/navkar._.realty?srtk=YjByaW5ucDY3ajJi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-lg bg-[#104D2A]/60 border border-[#176B3A]/40 text-slate-300 hover:text-white hover:bg-[#176B3A] flex items-center justify-center transition-all"
                aria-label="Follow Navkar Realty on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full bg-[#176B3A] hover:bg-[#104D2A] text-white text-xs font-bold py-2.5 px-4 rounded-xl border border-[#DCEBDD]/20 transition-all shadow-md"
              >
                Book VIP Office Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 mt-4 border-t border-white/10 text-[11px] text-slate-400 space-y-3">
          <p className="leading-relaxed">
            <strong>Disclaimer:</strong> Navkar Realty is a premier real estate consultancy firm in Vadodara. Project particulars, floor layouts, artist impressions, and pricing displayed are for advisory guidance and subject to physical verification and official developer agreements.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center text-slate-400 gap-2">
            <p>
              © {new Date().getFullYear()} Navkar Realty. All Rights Reserved.
            </p>
            <p className="flex items-center space-x-4">
              <button 
                type="button"
                onClick={() => onOpenLegal && onOpenLegal('privacy')}
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button 
                type="button"
                onClick={() => onOpenLegal && onOpenLegal('terms')}
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Terms of Service
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => onOpenLegal && onOpenLegal('terms')}
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Legal Compliance
              </button>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
