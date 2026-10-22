import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Award, 
  ShieldCheck, 
  MapPin, 
  Building2, 
  ArrowUpRight, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  BadgePercent, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { MARKET_STATS } from '../data/testimonials';

const LOCALITY_PULSE_DATA = [
  {
    id: 'vasna-road',
    name: 'Vasna Road',
    tag: 'Flagship Core Hub',
    avgRate: '₹5,650',
    range: '₹4,800 - ₹6,500 / sq.ft',
    appreciation: '+14.2%',
    appreciationValue: 14.2,
    rentalYield: '4.8% p.a.',
    demandScore: 96,
    summary: 'Vadodara’s most coveted residential avenue for high-rise luxury apartments, combining upscale lifestyle infrastructure with unparalleled connectivity.',
    highlights: [
      'Home to prestigious complexes like Vihav Supremus 2 and Ward 11 administrative convenience',
      'Wide 30-meter town planning roads with dedicated landscaped median dividers',
      'High rental demand from corporate executives, doctors, and senior professionals',
      'Direct 5-minute link to Diwalipura and Old Padra Road arterial junctions'
    ],
    advisorNote: 'Vasna Road remains our top recommendation for end-users seeking 3 & 4 BHK apartments with steady capital gains and reliable long-term liquidity.'
  },
  {
    id: 'diwalipura',
    name: 'Diwalipura',
    tag: 'Prestigious Residential Enclave',
    avgRate: '₹6,150',
    range: '₹5,200 - ₹7,200 / sq.ft',
    appreciation: '+11.8%',
    appreciationValue: 11.8,
    rentalYield: '4.5% p.a.',
    demandScore: 92,
    summary: 'A mature, verdant neighborhood characterized by established high-net-worth families, elite academic institutions, and superior social fabric.',
    highlights: [
      'Proximity to Court complex, prestigious schools, and premier healthcare centers',
      'High redevelopment potential with premium boutique residential offerings',
      'Extremely low vacant supply ensuring strong capital value defense',
      'Tranquil, peaceful streets buffered from industrial transit corridors'
    ],
    advisorNote: 'Ideal for multi-generational families valuing quiet community surroundings, established social circles, and timeless neighborhood prestige.'
  },
  {
    id: 'alkapuri',
    name: 'Alkapuri',
    tag: 'Vadodara CBD & Luxury Apex',
    avgRate: '₹8,400',
    range: '₹7,000 - ₹9,800 / sq.ft',
    appreciation: '+9.5%',
    appreciationValue: 9.5,
    rentalYield: '5.2% p.a.',
    demandScore: 95,
    summary: 'The historic and undisputed Central Business District of Vadodara, featuring high-street commercial storefronts and premier signature apartments.',
    highlights: [
      'Highest commercial lease yields in Vadodara with prime corporate tenants',
      'Immediate access to Vadodara Railway Station, five-star hospitality, and luxury retail',
      'Ultra-exclusive inventory; rare entry point for commercial showroom investors',
      'Consistently high tenant retention and blue-chip corporate covenants'
    ],
    advisorNote: 'Alkapuri is tailored for high-ticket commercial acquisitions, showroom frontages, and heritage real estate where capital preservation is paramount.'
  },
  {
    id: 'bhayli-sevasi',
    name: 'Bhayli & Sevasi',
    tag: 'Fastest Growth Western Corridor',
    avgRate: '₹4,600',
    range: '₹3,800 - ₹5,400 / sq.ft',
    appreciation: '+16.8%',
    appreciationValue: 16.8,
    rentalYield: '4.2% p.a.',
    demandScore: 98,
    summary: 'Vadodara’s prime urban expansion zone under TP-1 and TP-2, experiencing unprecedented development in gated lifestyle villas and modern clubhouses.',
    highlights: [
      'Epicenter of sprawling gated villa townships and lifestyle clubhouses',
      'Highest 3-year capital appreciation projection driven by infrastructure rollout',
      'Direct connectivity to Vadodara Ring Road, Gotri, and Mumbai-Ahmedabad expressway',
      'Favored destination for NRI investors and buyers prioritizing green open space'
    ],
    advisorNote: 'A premier growth play for investors seeking 15%+ annualized capital appreciation over a 3-5 year horizon, especially in duplex bungalows.'
  },
  {
    id: 'gotri-oproad',
    name: 'Gotri & Old Padra Rd',
    tag: 'Healthcare & Commercial Corridor',
    avgRate: '₹5,350',
    range: '₹4,400 - ₹6,300 / sq.ft',
    appreciation: '+12.4%',
    appreciationValue: 12.4,
    rentalYield: '4.6% p.a.',
    demandScore: 90,
    summary: 'A vibrant medical and high-street shopping belt anchoring western Vadodara with hospitals, lifestyle showrooms, and established residential complexes.',
    highlights: [
      'Anchored by world-class hospitals including Bhailal Amin, Sterling, and GMERS',
      'Strong retail footfall with national lifestyle brands and financial branches',
      'Continuous demand from medical specialists and senior corporate management',
      'Stable rental yields with near-zero residential vacancy rates'
    ],
    advisorNote: 'Offers a resilient combination of steady rental yields and consistent resale demand, particularly for ready 2 & 3 BHK properties.'
  }
];

export default function MarketStats({ onOpenConsultation }) {
  const [selectedLocalityId, setSelectedLocalityId] = useState(LOCALITY_PULSE_DATA[0].id);

  const activeLocality = LOCALITY_PULSE_DATA.find((loc) => loc.id === selectedLocalityId) || LOCALITY_PULSE_DATA[0];

  const statIcons = [Users, TrendingUp, Award, ShieldCheck];
  const statBadgeTags = ['+18% YoY', 'Vadodara Volume', 'Est. 2011', '100% Legal'];

  return (
    <section id="market-stats" className="py-16 sm:py-24 bg-[#F0F6F0] relative overflow-hidden transition-colors duration-300">
      {/* Decorative Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#176B3A_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1 text-xs font-bold text-brand-800 shadow-sm">
            <BarChart3 className="w-3.5 h-3.5 text-brand-700" />
            <span>Vadodara Micro-Market Intelligence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202923] tracking-tight font-display">
            Real Estate Market Pulse & Performance Trends
          </h2>

          <p className="text-base text-[#66716A] leading-relaxed">
            Real-time insights and verifiable transactional benchmarks across Vadodara's prime property corridors, powered by the VS Group's 15-year real estate advisory legacy.
          </p>
        </div>

        {/* Top 4 Performance Benchmark Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {MARKET_STATS.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            const badgeTag = statBadgeTags[idx % statBadgeTags.length];

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#DCE5DD] shadow-sm hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 rounded-bl-full pointer-events-none group-hover:bg-brand-500/10 transition-colors duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center group-hover:bg-brand-700 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-brand-800 bg-brand-50 border border-brand-200/80 rounded-full px-2.5 py-0.5">
                      {badgeTag}
                    </span>
                  </div>

                  <span className="text-3xl sm:text-4xl font-black text-[#202923] block font-display tracking-tight">
                    {stat.value}
                  </span>

                  <h4 className="text-sm font-bold text-[#202923] mt-2 font-display">
                    {stat.label}
                  </h4>
                </div>

                <p className="text-xs text-[#66716A] mt-3 pt-3 border-t border-[#DCE5DD] font-medium">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Locality Pulse Showcase */}
        <div className="bg-white rounded-3xl border border-[#DCE5DD] shadow-luxury overflow-hidden">
          
          {/* Card Title Bar */}
          <div className="p-6 sm:p-8 border-b border-[#DCE5DD] bg-gradient-to-r from-brand-50/70 via-white to-transparent">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 text-xs font-bold text-brand-800 uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-700" />
                  <span>Interactive Micro-Market Explorer</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202923] font-display">
                  Vadodara Locality Pulse (2025 – 2026)
                </h3>
              </div>

              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#66716A] bg-white border border-[#DCE5DD] px-3 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
                <span>Updated Q1 2026 Transaction Data</span>
              </div>
            </div>

            {/* Locality Selector Tabs */}
            <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2 scrollbar-none">
              {LOCALITY_PULSE_DATA.map((loc) => {
                const isActive = loc.id === selectedLocalityId;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setSelectedLocalityId(loc.id)}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 focus:outline-none ${
                      isActive
                        ? 'bg-brand-700 text-white shadow-md shadow-brand-700/20'
                        : 'bg-white text-[#202923] hover:bg-brand-50 hover:text-brand-800 border border-[#DCE5DD]'
                    }`}
                  >
                    <Building2 className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-700'}`} />
                    <span>{loc.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-800'
                    }`}>
                      {loc.appreciation}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Locality Details & Comparative Analysis */}
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Metrics & Highlights */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Header info */}
                <div>
                  <div className="inline-block bg-brand-100 text-brand-900 font-bold text-xs px-3 py-1 rounded-full mb-2">
                    {activeLocality.tag}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#202923] font-display">
                    {activeLocality.name} Locality Overview
                  </h4>
                  <p className="text-sm text-[#66716A] mt-1.5 leading-relaxed">
                    {activeLocality.summary}
                  </p>
                </div>

                {/* 4 Stat Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <div className="bg-brand-50/60 border border-brand-100 rounded-xl p-3.5 text-center">
                    <span className="text-[11px] font-bold text-[#66716A] block uppercase">Avg Capital Rate</span>
                    <span className="text-lg sm:text-xl font-black text-brand-800 mt-1 block font-display">
                      {activeLocality.avgRate}
                    </span>
                    <span className="text-[10px] text-[#66716A]">per sq.ft</span>
                  </div>

                  <div className="bg-brand-50 border border-brand-200 rounded-xl p-3.5 text-center">
                    <span className="text-[11px] font-bold text-brand-800 block uppercase">YoY Growth</span>
                    <span className="text-lg sm:text-xl font-black text-brand-800 mt-1 flex items-center justify-center font-display">
                      <ArrowUpRight className="w-4 h-4 mr-0.5 text-brand-700" />
                      {activeLocality.appreciation}
                    </span>
                    <span className="text-[10px] text-brand-700 font-medium">1-Year Capital</span>
                  </div>

                  <div className="bg-brand-50/60 border border-brand-100 rounded-xl p-3.5 text-center">
                    <span className="text-[11px] font-bold text-[#66716A] block uppercase">Rental Yield</span>
                    <span className="text-lg sm:text-xl font-black text-[#202923] mt-1 block font-display">
                      {activeLocality.rentalYield}
                    </span>
                    <span className="text-[10px] text-[#66716A]">Gross annual</span>
                  </div>

                  <div className="bg-brand-50/60 border border-brand-100 rounded-xl p-3.5 text-center">
                    <span className="text-[11px] font-bold text-[#66716A] block uppercase">Demand Index</span>
                    <span className="text-lg sm:text-xl font-black text-brand-800 mt-1 block font-display">
                      {activeLocality.demandScore}<span className="text-xs text-[#66716A] font-normal">/100</span>
                    </span>
                    <span className="text-[10px] text-brand-700 font-semibold">High Activity</span>
                  </div>
                </div>

                {/* Key Corridor Advantages */}
                <div className="bg-brand-50/40 rounded-2xl p-5 border border-brand-100/70">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#202923] mb-3 flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-brand-700 mr-2" />
                    Key Infrastructure & Corridor Drivers
                  </h5>
                  <ul className="space-y-2.5">
                    {activeLocality.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-[#202923]">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-700 mt-2 mr-2.5 flex-shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Advisor Note */}
                <div className="bg-brand-50 border border-brand-200 rounded-2xl p-4.5 flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-700 text-white flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
                    VS
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-brand-900 uppercase tracking-wide">
                      VS Group Advisory Recommendation
                    </h5>
                    <p className="text-xs sm:text-sm text-brand-800 mt-1 leading-relaxed">
                      {activeLocality.advisorNote}
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column: Comparative Growth Chart & Action Box */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Comparative Appreciation Chart */}
                <div className="bg-white border border-[#DCE5DD] rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-sm font-bold text-[#202923] font-display flex items-center">
                      <TrendingUp className="w-4 h-4 text-brand-700 mr-2" />
                      YoY Appreciation Comparison
                    </h5>
                    <span className="text-[11px] font-semibold text-[#66716A]">Vadodara Micro-Markets</span>
                  </div>

                  <div className="space-y-3.5">
                    {LOCALITY_PULSE_DATA.map((loc) => {
                      const isCurrent = loc.id === selectedLocalityId;
                      const percentage = Math.round((loc.appreciationValue / 20) * 100);

                      return (
                        <div 
                          key={loc.id} 
                          className={`p-2.5 rounded-xl transition-colors duration-200 cursor-pointer ${
                            isCurrent ? 'bg-brand-50/80 border border-brand-200' : 'hover:bg-brand-50/30'
                          }`}
                          onClick={() => setSelectedLocalityId(loc.id)}
                        >
                          <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                            <span className={isCurrent ? 'text-brand-900 font-extrabold' : 'text-[#202923]'}>
                              {loc.name}
                            </span>
                            <span className={isCurrent ? 'text-brand-800 font-extrabold' : 'text-[#66716A]'}>
                              {loc.appreciation}
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full h-2 bg-brand-50 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-500 ${
                                isCurrent ? 'bg-brand-700' : 'bg-slate-300'
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>

                          <div className="flex justify-between items-center text-[10px] text-[#66716A] mt-1">
                            <span>Range: {loc.range}</span>
                            <span>Yield: {loc.rentalYield}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Consultation & Report Call to Action */}
                <div className="bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex items-center space-x-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-0.5 text-[11px] font-semibold text-brand-200">
                      <Sparkles className="w-3 h-3 text-brand-200" />
                      <span>Hyperlocal Advisory</span>
                    </div>

                    <h4 className="text-lg font-bold font-display text-white leading-snug">
                      Looking for Off-Market Properties in {activeLocality.name}?
                    </h4>

                    <p className="text-xs text-brand-100/90 leading-relaxed">
                      Navkar Realty maintains an exclusive inventory of vetted builder-floor apartments, commercial units, and private residential listings on Vasna Road and Diwalipura.
                    </p>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={onOpenConsultation}
                        className="w-full inline-flex items-center justify-center space-x-2 bg-white hover:bg-brand-50 text-brand-900 text-xs sm:text-sm font-bold px-4 py-3 rounded-xl shadow-md transition-all group"
                      >
                        <span>Schedule a Consultation for {activeLocality.name}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-brand-700" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}