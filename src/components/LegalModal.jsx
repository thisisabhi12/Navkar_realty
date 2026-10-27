import React, { useRef, useEffect, useState, useMemo } from 'react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  Printer, 
  Search, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight,
  Scale,
  Building,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { LEGAL_META, PRIVACY_POLICY, TERMS_OF_SERVICE } from '../data/legalData';

export default function LegalModal({ isOpen, initialTab = 'privacy', onClose }) {
  const dialogRef = useRef(null);
  const contentContainerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSectionId, setActiveSectionId] = useState('');

  // Synchronize initialTab when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setSearchQuery('');
    }
  }, [isOpen, initialTab]);

  // Dialog handling
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }

    const handleBackdropClick = (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isDialogContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isDialogContent) {
        onClose();
      }
    };

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener('click', handleBackdropClick);
    }

    const handleCancel = (e) => {
      e.preventDefault();
      onClose();
    };
    dialog.addEventListener('cancel', handleCancel);

    return () => {
      if (!('closedBy' in HTMLDialogElement.prototype)) {
        dialog.removeEventListener('click', handleBackdropClick);
      }
      dialog.removeEventListener('cancel', handleCancel);
    };
  }, [isOpen, onClose]);

  const currentDoc = activeTab === 'privacy' ? PRIVACY_POLICY : TERMS_OF_SERVICE;

  // Search filtering
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return currentDoc.sections;
    const q = searchQuery.toLowerCase();
    return currentDoc.sections.filter(sec => {
      const matchTitle = sec.title.toLowerCase().includes(q);
      const matchPara = sec.paragraphs?.some(p => p.toLowerCase().includes(q));
      const matchBullets = sec.bullets?.some(b => b.toLowerCase().includes(q));
      const matchGroups = sec.groups?.some(g => 
        g.heading.toLowerCase().includes(q) || 
        g.bullets.some(b => b.toLowerCase().includes(q))
      );
      const matchCallouts = sec.callouts?.some(c => 
        c.label.toLowerCase().includes(q) || c.text.toLowerCase().includes(q)
      );
      return matchTitle || matchPara || matchBullets || matchGroups || matchCallouts;
    });
  }, [currentDoc, searchQuery]);

  const scrollToSection = (id) => {
    setActiveSectionId(id);
    const el = document.getElementById(`legal-sec-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      id="legal-document-modal"
      closedby="any"
      aria-labelledby="legal-dialog-title"
      className="m-auto rounded-3xl p-0 max-w-4xl w-[94vw] bg-white shadow-2xl border border-[#DCE5DD] overflow-hidden focus:outline-none max-h-[92vh] flex flex-col"
    >
      {/* 1. Header Bar */}
      <div className="bg-[#0B371E] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#176B3A]/40 gap-3 flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md flex-shrink-0">
            <img src="/logo.jpg" alt="Navkar Realty" className="w-full h-full object-contain rounded" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 id="legal-dialog-title" className="text-base sm:text-lg font-black font-display text-white tracking-wide">
                Navkar Realty Legal Portal
              </h2>
              <span className="text-[10px] font-bold bg-[#176B3A] text-[#DCEBDD] px-2 py-0.5 rounded-full uppercase tracking-wider hidden sm:inline-block">
                GujRERA & IT Act
              </span>
            </div>
            <p className="text-xs text-slate-300">
              A Part of VS Group • Official Compliance & Trust Documents
            </p>
          </div>
        </div>

        {/* Action icons & close */}
        <div className="flex items-center space-x-2 self-end sm:self-center">
          <button
            type="button"
            onClick={handlePrint}
            title="Print Document"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-all text-xs font-semibold flex items-center space-x-1.5"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden md:inline">Print / Save</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-red-500/80 text-white transition-all ml-1"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 2. Navigation Tabs & Quick Search */}
      <div className="bg-[#F0F6F0] px-6 py-3 border-b border-[#DCE5DD] flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
        {/* Tab Switcher */}
        <div className="flex items-center bg-[#DCEBDD]/60 p-1 rounded-xl w-full sm:w-auto border border-[#BED8C0]/50">
          <button
            type="button"
            onClick={() => { setActiveTab('privacy'); setSearchQuery(''); }}
            className={`flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'privacy'
                ? 'bg-[#176B3A] text-white shadow-sm'
                : 'text-[#202923] hover:text-[#176B3A] hover:bg-white/60'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 ml-1">14</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('terms'); setSearchQuery(''); }}
            className={`flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'terms'
                ? 'bg-[#176B3A] text-white shadow-sm'
                : 'text-[#202923] hover:text-[#176B3A] hover:bg-white/60'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Terms of Service</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 ml-1">17</span>
          </button>
        </div>

        {/* Search within document */}
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#66716A]" />
          <input
            type="text"
            placeholder={`Search ${activeTab === 'privacy' ? 'Privacy' : 'Terms'} (e.g. lease, fees, grievance)...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#BED8C0] rounded-xl pl-9 pr-3 py-1.5 text-xs text-[#202923] placeholder-[#66716A]/70 focus:outline-none focus:ring-2 focus:ring-[#176B3A] focus:border-[#176B3A] transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#66716A] hover:text-black font-bold"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* 3. Document Body (Scrollable) */}
      <div 
        ref={contentContainerRef}
        className="flex-1 overflow-y-auto px-6 sm:px-10 py-6 space-y-6 text-[#202923] bg-white"
      >
        {/* Document Header Card */}
        <div className="bg-[#F0F6F0]/80 rounded-2xl p-5 border border-[#DCE5DD] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#176B3A] bg-[#DCEBDD] px-2.5 py-0.5 rounded-md">
                Official Document
              </span>
              <span className="text-xs text-[#66716A]">
                India Real Estate Brokerage & Leasing
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black font-display text-[#092615]">
              NAVKAR REALTY | {currentDoc.title.toUpperCase()}
            </h1>
            <p className="text-xs text-[#4C9B68] font-semibold mt-0.5">
              {currentDoc.subtitle}
            </p>
          </div>

          <div className="text-xs text-[#445048] space-y-1 bg-white p-3 rounded-xl border border-[#DCE5DD] self-start md:self-auto min-w-[220px]">
            <div className="flex justify-between">
              <span className="text-[#66716A]">Effective Date:</span>
              <span className="font-bold text-[#092615]">{currentDoc.effectiveDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#66716A]">Last Updated:</span>
              <span className="font-bold text-[#092615]">{currentDoc.lastUpdated}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#66716A]">Scope:</span>
              <span className="font-semibold text-right text-[#176B3A] truncate max-w-[130px]">Sales & Leasing</span>
            </div>
          </div>
        </div>

        {/* Quick Jump Pills */}
        {!searchQuery && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-[11px] font-bold text-[#66716A] whitespace-nowrap mr-1">
              Jump to:
            </span>
            {currentDoc.sections.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className="whitespace-nowrap px-2.5 py-1 bg-[#F0F6F0] hover:bg-[#DCEBDD] text-[#202923] hover:text-[#176B3A] border border-[#DCE5DD] rounded-lg transition-colors text-[11px] font-medium"
              >
                {sec.number}. {sec.title}
              </button>
            ))}
          </div>
        )}

        {/* Search Results Summary */}
        {searchQuery && (
          <div className="bg-[#DCEBDD]/50 border border-[#BED8C0] rounded-xl px-4 py-2.5 text-xs text-[#092615] flex items-center justify-between">
            <span>
              Found <strong>{filteredSections.length}</strong> section(s) matching "<em>{searchQuery}</em>"
            </span>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-[#176B3A] font-bold underline ml-2"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Sections Listing */}
        <div className="space-y-8 divide-y divide-[#DCE5DD]/60">
          {filteredSections.map((sec) => (
            <article 
              key={sec.id} 
              id={`legal-sec-${sec.id}`}
              className="pt-6 first:pt-0 scroll-mt-6"
            >
              {/* Section Header */}
              <div className="flex items-baseline space-x-2.5 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#176B3A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {sec.number}
                </span>
                <h3 className="text-base sm:text-lg font-black font-display text-[#092615]">
                  {sec.title}
                </h3>
              </div>

              {/* Section Intro if present */}
              {sec.intro && (
                <p className="text-xs sm:text-sm text-[#445048] mb-2 font-medium">
                  {sec.intro}
                </p>
              )}

              {/* Paragraphs */}
              {sec.paragraphs && sec.paragraphs.length > 0 && (
                <div className="space-y-2.5 text-xs sm:text-sm text-[#445048] leading-relaxed">
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              )}

              {/* Bullet Points */}
              {sec.bullets && sec.bullets.length > 0 && (
                <ul className="space-y-1.5 mt-3 text-xs sm:text-sm text-[#445048] leading-relaxed pl-1">
                  {sec.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#176B3A] mt-2 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Sub-groups (e.g. Section 2 of Privacy Policy) */}
              {sec.groups && (
                <div className="space-y-3 mt-3">
                  {sec.groups.map((group, gIdx) => (
                    <div key={gIdx} className="bg-[#F0F6F0]/60 p-3.5 rounded-xl border border-[#DCE5DD]/80">
                      <h4 className="text-xs font-bold text-[#092615] uppercase tracking-wide mb-1.5 flex items-center">
                        <ChevronRight className="w-3.5 h-3.5 text-[#176B3A] mr-1" />
                        {group.heading}
                      </h4>
                      <ul className="space-y-1 text-xs text-[#445048] pl-2">
                        {group.bullets.map((gb, gbIdx) => (
                          <li key={gbIdx} className="flex items-start space-x-2">
                            <span className="w-1 h-1 rounded-full bg-[#176B3A] mt-1.5 flex-shrink-0" />
                            <span>{gb}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Callouts (e.g. Consent templates in Section 6) */}
              {sec.callouts && (
                <div className="space-y-3 mt-3">
                  {sec.callouts.map((call, cIdx) => (
                    <div key={cIdx} className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5">
                      <strong className="text-xs font-bold text-amber-900 block mb-1">
                        {call.label}:
                      </strong>
                      <p className="text-xs text-amber-950/80 italic font-serif leading-relaxed">
                        {call.text}
                      </p>
                    </div>
                  ))}
                  {sec.note && (
                    <p className="text-[11px] text-[#66716A] italic mt-1">
                      {sec.note}
                    </p>
                  )}
                </div>
              )}

              {/* Grievance / Contact Card (Section 13 of Privacy Policy & Section 16 of Terms) */}
              {sec.contactCard && (
                <div className="mt-4 bg-[#092615] text-white p-5 rounded-2xl border border-[#176B3A]/40 shadow-md">
                  <div className="flex items-center space-x-2.5 mb-3">
                    <Building className="w-4 h-4 text-[#DCEBDD]" />
                    <h4 className="text-sm font-bold text-white">
                      {sec.contactCard.company}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200">
                    {sec.contactCard.officer && (
                      <div className="md:col-span-2 pb-2 border-b border-white/10">
                        <span className="text-slate-400 block text-[11px]">Officer In Charge:</span>
                        <strong className="text-white text-xs sm:text-sm font-bold">
                          {sec.contactCard.officer}
                        </strong>
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-[#DCEBDD] flex-shrink-0" />
                      <a href={`mailto:${sec.contactCard.email}`} className="hover:underline text-slate-300">
                        {sec.contactCard.email}
                      </a>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-[#DCEBDD] flex-shrink-0" />
                      <a href={`tel:+91${sec.contactCard.phone}`} className="hover:underline text-slate-300">
                        +91 {sec.contactCard.phone}
                      </a>
                    </div>

                    <div className="md:col-span-2 flex items-start space-x-2 pt-1 border-t border-white/10">
                      <MapPin className="w-4 h-4 text-[#DCEBDD] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-[11px] leading-relaxed">
                        {sec.contactCard.address}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom Official Disclaimer / Copyright Notice */}
        <div className="bg-[#F0F6F0] p-4 rounded-2xl border border-[#DCE5DD] text-center space-y-1.5 mt-8">
          <p className="text-xs font-bold text-[#092615]">
            © {new Date().getFullYear()} NAVKAR REALTY (A Part of VS Group). ALL RIGHTS RESERVED.
          </p>
          <p className="text-[11px] text-[#66716A]">
            Registered & Operating under Gujarat Real Estate Regulatory Authority (GujRERA) and Indian Jurisdiction.
          </p>
        </div>
      </div>

      {/* 4. Footer Action Bar */}
      <div className="bg-[#F0F6F0] px-6 py-3.5 border-t border-[#DCE5DD] flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
        <div className="flex items-center space-x-2 text-xs text-[#445048]">
          <CheckCircle2 className="w-4 h-4 text-[#176B3A]" />
          <span>Legally grounded and fully applicable for India</span>
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'privacy' ? 'terms' : 'privacy')}
            className="px-4 py-2 rounded-xl text-xs font-bold text-[#176B3A] bg-white border border-[#DCE5DD] hover:bg-[#DCEBDD]/50 transition-colors"
          >
            Switch to {activeTab === 'privacy' ? 'Terms of Service' : 'Privacy Policy'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#176B3A] hover:bg-[#104D2A] transition-colors shadow-sm"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </dialog>
  );
}
