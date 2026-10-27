import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Home, 
  BadgeIndianRupee, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  CheckCircle2,
  KeyRound
} from 'lucide-react';
import { VADODARA_LOCALITIES, PROPERTY_TYPES, BUDGET_RANGES } from '../data/properties';

export default function Hero({ onSearchSubmit, onSelectProperty }) {
  const [activeTab, setActiveTab] = useState('buy'); // 'buy', 'rent', 'commercial', 'villa'
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedBudgetIndex, setSelectedBudgetIndex] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit({
        category: activeTab,
        location: selectedLocation,
        type: selectedType,
        budget: BUDGET_RANGES[selectedBudgetIndex]
      });
    }
    // Smooth scroll down to listings
    const listingsElement = document.getElementById('listings');
    if (listingsElement) {
      listingsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[var(--theme-hero-from)] via-[var(--theme-hero-via)] to-[var(--theme-hero-to)] transition-colors duration-300">
      {/* Decorative luxury background shapes */}
      <div 
        className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-colors duration-500" 
        style={{ backgroundColor: 'var(--theme-glow-1)' }}
      />
      <div 
        className="absolute bottom-10 left-10 -ml-24 w-80 h-80 rounded-full blur-2xl pointer-events-none transition-colors duration-500" 
        style={{ backgroundColor: 'var(--theme-glow-2)' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Trust & Quick Search */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Heritage / Trust Pill */}
            <div className="inline-flex items-center space-x-2 bg-white border border-brand-200 shadow-sm rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-900 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-brand-700 animate-pulse"></span>
              <span className="text-brand-800 font-bold">VS Group Legacy</span>
              <span className="text-[#DCE5DD]">|</span>
              <span className="text-[#66716A]">Vadodara's Premier Property Advisory</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#202923] tracking-tight leading-[1.15] font-display">
              Find Your Dream Property in <span className="text-brand-700 underline decoration-brand-400 decoration-wavy decoration-2 underline-offset-8">Vadodara</span> with Navkar Realty
            </h1>

            {/* Supportive Subheadline */}
            <p className="text-base sm:text-lg text-[#66716A] font-normal leading-relaxed max-w-2xl">
              Backed by the unwavering trust and distinguished legacy of the <strong className="text-[#202923] font-semibold">VS Group</strong>. Discover curated luxury apartments, tranquil villas, and high-yield commercial showrooms across <span className="text-brand-800 font-medium">Vasna Road, Diwalipura, Alkapuri</span>, and prime growth corridors.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-1 border-t border-[#DCE5DD] max-w-xl">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-brand-700 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#202923]">100% RERA Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-brand-700 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#202923]">Zero Hidden Brokerage</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-brand-700 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#202923]">End-to-End Legal Help</span>
              </div>
            </div>

            {/* Quick Interactive Search Bar */}
            <div className="bg-white rounded-2xl shadow-luxury border border-[#DCE5DD] p-4 sm:p-5 mt-6 transition-all">
              
              {/* Category Tabs: Buy / Rent / Commercial / Villa */}
              <div className="flex flex-wrap gap-2 mb-4 border-b border-[#DCE5DD] pb-3">
                {[
                  { id: 'buy', label: 'Buy Property' },
                  { id: 'rent', label: 'Rent' },
                  { id: 'commercial', label: 'Commercial' },
                  { id: 'villa', label: 'Luxury Villas' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      activeTab === tab.id
                        ? 'bg-brand-700 text-white shadow-sm'
                        : 'bg-brand-50/70 text-[#66716A] hover:bg-brand-100/70 hover:text-brand-800 border border-brand-100/80'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Form Controls */}
              <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Location Picker */}
                <div className="space-y-1">
                  <label htmlFor="hero-location-select" className="text-[11px] font-bold uppercase tracking-wider text-[#66716A] flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-brand-700" />
                    Locality / Area
                  </label>
                  <select
                    id="hero-location-select"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-white border border-[#DCE5DD] rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-[#202923] focus:outline-none focus:ring-2 focus:ring-brand-700 focus:border-brand-700 transition-all cursor-pointer"
                  >
                    {VADODARA_LOCALITIES.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                {/* Property Type */}
                <div className="space-y-1">
                  <label htmlFor="hero-type-select" className="text-[11px] font-bold uppercase tracking-wider text-[#66716A] flex items-center">
                    <Home className="w-3.5 h-3.5 mr-1 text-brand-700" />
                    Property Type
                  </label>
                  <select
                    id="hero-type-select"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-white border border-[#DCE5DD] rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-[#202923] focus:outline-none focus:ring-2 focus:ring-brand-700 focus:border-brand-700 transition-all cursor-pointer"
                  >
                    {PROPERTY_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div className="space-y-1">
                  <label htmlFor="hero-budget-select" className="text-[11px] font-bold uppercase tracking-wider text-[#66716A] flex items-center">
                    <BadgeIndianRupee className="w-3.5 h-3.5 mr-1 text-brand-700" />
                    Budget Range
                  </label>
                  <select
                    id="hero-budget-select"
                    value={selectedBudgetIndex}
                    onChange={(e) => setSelectedBudgetIndex(Number(e.target.value))}
                    className="w-full bg-white border border-[#DCE5DD] rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-[#202923] focus:outline-none focus:ring-2 focus:ring-brand-700 focus:border-brand-700 transition-all cursor-pointer"
                  >
                    {BUDGET_RANGES.map((b, idx) => (
                      <option key={b.label} value={idx}>{b.label}</option>
                    ))}
                  </select>
                </div>

                {/* Submit Search CTA */}
                <div className="sm:col-span-3 pt-2">
                  <button
                    type="submit"
                    id="hero-search-properties-btn"
                    className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-brand-700/25 hover:shadow-lg transition-all flex items-center justify-center space-x-2 text-sm sm:text-base group"
                  >
                    <Search className="w-4 h-4 text-brand-100" />
                    <span>Search Available Properties in Vadodara</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </form>
            </div>

          </div>

          {/* Right Column: High-Resolution Visual Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Visual Image Card with Glassmorphism Overlay */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Navkar Realty Premium Real Estate Project in Vasna Road, Vadodara"
                className="w-full h-[450px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              
              {/* Dark subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>

              {/* Top status badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-brand-700/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-md">
                  <Sparkles className="w-3.5 h-3.5 mr-1 text-brand-100" />
                  Spotlight Listing
                </span>
                <span className="bg-white/95 backdrop-blur-md text-[#202923] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                  Vasna Road, Vadodara
                </span>
              </div>

              {/* Bottom Spotlight Card Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg border border-[#DCE5DD]">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[11px] font-bold text-brand-800 uppercase tracking-wider">
                      VS Group Featured Collection
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#202923] mt-0.5 font-display">
                      Supremus Grandeur Residency
                    </h3>
                    <p className="text-xs text-[#66716A] flex items-center mt-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-700 mr-1" />
                      Vasna Road, Near Ward No 11, Vadodara
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#66716A] font-medium block">Starting from</span>
                    <span className="text-lg sm:text-xl font-black text-brand-700 font-display">
                      ₹98 Lakhs
                    </span>
                  </div>
                </div>

                {/* Mini specs */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-[#DCE5DD] text-center">
                  <div className="bg-brand-50/70 border border-brand-100/60 py-1.5 rounded-lg">
                    <span className="text-xs font-bold text-[#202923] block">3 BHK</span>
                    <span className="text-[10px] text-[#66716A]">Luxury Layout</span>
                  </div>
                  <div className="bg-brand-50/70 border border-brand-100/60 py-1.5 rounded-lg">
                    <span className="text-xs font-bold text-[#202923] block">1,850 sq.ft</span>
                    <span className="text-[10px] text-[#66716A]">Super Area</span>
                  </div>
                  <div className="bg-brand-50/70 border border-brand-100/60 py-1.5 rounded-lg">
                    <span className="text-xs font-bold text-brand-700 block">Ready</span>
                    <span className="text-[10px] text-[#66716A]">To Move In</span>
                  </div>
                </div>

                {/* Quick Trigger Button */}
                <button
                  type="button"
                  onClick={() => onSelectProperty && onSelectProperty('prop-1')}
                  className="w-full mt-3 bg-brand-700 hover:bg-brand-800 text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>Explore Supremus Grandeur</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
