import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  Award, 
  CheckCircle2, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  FileCheck2,
  Handshake
} from 'lucide-react';

export default function AboutSection({ onOpenConsultation }) {
  const trustPillars = [
    {
      icon: ShieldCheck,
      title: "GujRERA Compliant & Legal Due Diligence",
      desc: "Every listing is rigorously vetted for clear legal titles, approved building plans, and environmental clearances. Zero disputes, 100% peace of mind."
    },
    {
      icon: MapPin,
      title: "Hyperlocal Vadodara Mastery",
      desc: "Deep-seated expertise in high-demand pockets including Vasna Road, Diwalipura, Alkapuri, Sevasi, and Bhayli. We know upcoming flyovers, zoning, and price trends."
    },
    {
      icon: Handshake,
      title: "Zero Hidden Surprises & Fair Dealing",
      desc: "We stand firmly for transparent real estate transactions. Direct developer pricing, honest brokerage terms, and no last-minute hidden charges."
    },
    {
      icon: FileCheck2,
      title: "Complete End-to-End Concierge",
      desc: "From curated private site tours and home loan processing (SBI, HDFC, BoB) to final deed registration at Vadodara Sub-Registrar's office."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-[#F0F6F0] via-white to-[#F0F6F0] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Story + Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase of VS Group / Vadodara Office */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Navkar Realty and VS Group Headquarters Vadodara"
                className="w-full h-[460px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#104D2A] via-[#104D2A]/40 to-transparent transition-colors duration-500" />

              {/* Floating Badge */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg flex items-center space-x-3 border border-[#DCE5DD]">
                <div className="w-10 h-10 rounded-xl bg-brand-700 flex items-center justify-center text-white font-bold">
                  VS
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#202923] uppercase">VS Group Entity</h4>
                  <p className="text-[11px] text-brand-800 font-semibold">15+ Years Trust in Gujarat</p>
                </div>
              </div>

              {/* Bottom Office Banner */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-[#DCE5DD]">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#202923] font-display">
                      Navkar Realty Corporate Office
                    </h4>
                    <p className="text-xs text-[#66716A] mt-0.5 leading-snug">
                      207, Vihav Supremus 2, Near Ward No 11, Vasna Road, Diwalipura, Vadodara - 390007
                    </p>
                    <div className="mt-2.5 flex items-center space-x-4 text-[11px] font-bold text-brand-700">
                      <span>Mon - Sat: 9:30 AM - 7:30 PM</span>
                      <span>•</span>
                      <a href="#contact" className="hover:underline text-brand-800">Get Directions →</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Copy & Narrative */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1 text-xs font-bold text-brand-800">
              <Award className="w-3.5 h-3.5 text-brand-700" />
              <span>The Trust of VS Group</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202923] tracking-tight leading-tight font-display">
              Unrivaled Real Estate Excellence, Powered by <span className="text-brand-700">VS Group's</span> 15-Year Legacy
            </h2>

            <p className="text-base text-[#66716A] leading-relaxed">
              <strong>Navkar Realty</strong> was founded with a singular ambition: to elevate real estate advisory in Vadodara into a benchmark of transparency, sophistication, and unyielding integrity. Operating under the esteemed aegis of the <strong>VS Group</strong>, we blend regional influence with hyperlocal neighborhood wisdom.
            </p>

            <p className="text-base text-[#66716A] leading-relaxed">
              Whether you are an ambitious professional seeking a Vastu-aligned luxury apartment on Vasna Road, an NRI investing in a high-appreciation villa in Bhayli, or a corporation leasing strategic showroom space in Diwalipura, our team acts as your fiduciary partner at every stage.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#DCE5DD]">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-brand-700 block font-display">15+</span>
                <span className="text-xs text-[#66716A] font-medium">Years VS Group Standing</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-brand-700 block font-display">₹450+ Cr</span>
                <span className="text-xs text-[#66716A] font-medium">Vadodara Property Handled</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-brand-700 block font-display">1,200+</span>
                <span className="text-xs text-[#66716A] font-medium">Satisfied Families</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center space-x-2 bg-brand-700 hover:bg-brand-800 text-white text-sm font-bold px-6 py-3.5 rounded-xl shadow-md shadow-brand-700/25 transition-all group"
              >
                <span>Speak with a VS Group Property Specialist</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#202923] font-display">
              Why Vadodara Property Buyers Choose Navkar Realty
            </h3>
            <p className="text-sm text-[#66716A] mt-2">
              Built on ethics, verified data, and unmatched personal attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#DCE5DD] shadow-sm hover:shadow-luxury hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-4 group-hover:bg-brand-700 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-[#202923] mb-2 font-display">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#66716A] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#DCE5DD] flex items-center text-xs font-bold text-brand-700">
                    <span>Guaranteed by VS Group</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
