import React, { useRef, useEffect, useState } from 'react';
import { 
  X, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize, 
  ShieldCheck, 
  CheckCircle2, 
  Compass, 
  Building, 
  PhoneCall, 
  Calendar,
  Share2,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PROPERTIES_DATA } from '../data/properties';

export default function PropertyModal({ propertyId, onClose, onOpenConsultation }) {
  const dialogRef = useRef(null);
  const property = PROPERTIES_DATA.find((p) => p.id === propertyId);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (property) {
      if (!dialog.open) {
        dialog.showModal();
      }
      setSelectedImageIndex(0);
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }

    // Modern Web Guidance: Mandatory fallback for browsers that do not yet support closedby="any"
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
  }, [property, onClose]);

  if (!property) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <dialog
      ref={dialogRef}
      id="property-details-dialog"
      closedby="any"
      aria-labelledby="property-dialog-title"
      className="m-auto rounded-3xl p-0 max-w-4xl w-[92vw] max-h-[90vh] bg-white shadow-2xl border border-[#DCE5DD] overflow-hidden focus:outline-none"
    >
      <div className="flex flex-col max-h-[90vh]">
        
        {/* Modal Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCE5DD] bg-white sticky top-0 z-20">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#176B3A]"></span>
            <span className="text-xs font-bold text-[#104D2A] tracking-wider uppercase">
              Navkar Realty • VS Group Exclusive
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={handleShare}
              className="text-xs font-semibold text-[#202923] hover:text-[#104D2A] bg-[#F0F6F0] hover:bg-[#DCEBDD]/50 border border-[#DCE5DD] px-3 py-1.5 rounded-lg flex items-center space-x-1 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              type="button"
              id="close-property-dialog-btn"
              onClick={onClose}
              className="p-1.5 text-[#66716A] hover:text-[#202923] hover:bg-[#F0F6F0] rounded-full transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Main Gallery Display */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 shadow-md">
              <img
                src={property.gallery[selectedImageIndex] || property.mainImage}
                alt={`${property.title} view ${selectedImageIndex + 1}`}
                className={`w-full h-full transition-all duration-300 ${
                  (property.gallery[selectedImageIndex] || property.mainImage).match(/(seven-(imperia|symphony|sattva|sky|sky-villa|vierra)|prakruti-harmony|antica-greenwood)\.jpg/)
                    ? 'object-contain'
                    : 'object-cover'
                }`}
              />
              <div className="absolute top-3 left-3 bg-[#104D2A]/90 text-white text-xs font-bold px-3 py-1 rounded-md shadow">
                {property.badge}
              </div>

              <div className="absolute top-3 right-3 flex items-center space-x-2">
                <a
                  href={property.gallery[selectedImageIndex] || property.mainImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md flex items-center space-x-1 transition-colors shadow"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Full View</span>
                </a>
              </div>

              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                Image {selectedImageIndex + 1} of {property.gallery.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-2">
              {property.gallery.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImageIndex === idx 
                      ? 'border-[#176B3A] scale-95 shadow-md' 
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Core Info & Price Banner */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-[#F0F6F0] p-5 rounded-2xl border border-[#DCE5DD] gap-4">
            <div>
              <div className="flex items-center text-xs font-bold text-[#176B3A] mb-1">
                <MapPin className="w-4 h-4 mr-1 text-[#176B3A]" />
                <span>{property.location}, Vadodara</span>
              </div>
              <h2 id="property-dialog-title" className="text-2xl font-black text-[#202923] font-display">
                {property.title}
              </h2>
              <p className="text-xs text-[#66716A] mt-1 max-w-lg">
                {property.fullAddress}
              </p>
            </div>

            <div className="sm:text-right">
              <span className="text-xs font-bold text-[#66716A] uppercase tracking-wider block">
                {property.category === 'rent' ? 'Monthly Lease' : 'Total Investment'}
              </span>
              <span className="text-2xl sm:text-3xl font-black text-[#176B3A] font-display">
                {property.priceDisplay}
              </span>
              <span className="text-xs font-medium text-[#104D2A] block mt-0.5">
                GujRERA Approved & Clear Title
              </span>
            </div>
          </div>

          {/* Quick Specifications Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white p-3.5 rounded-xl border border-[#DCE5DD]">
              <span className="text-[11px] font-bold text-[#66716A] uppercase tracking-wider block">Configuration</span>
              <p className="text-sm font-extrabold text-[#202923] mt-0.5 flex items-center">
                <Bed className="w-4 h-4 mr-1.5 text-[#176B3A]" />
                {property.bhk > 0 ? (property.bhkDisplay || `${property.bhk} BHK`) : 'Commercial'}
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#DCE5DD]">
              <span className="text-[11px] font-bold text-[#66716A] uppercase tracking-wider block">Super Built-up</span>
              <p className="text-sm font-extrabold text-[#202923] mt-0.5 flex items-center">
                <Maximize className="w-4 h-4 mr-1.5 text-[#176B3A]" />
                {property.superArea}
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#DCE5DD]">
              <span className="text-[11px] font-bold text-[#66716A] uppercase tracking-wider block">Vastu & Facing</span>
              <p className="text-sm font-extrabold text-[#202923] mt-0.5 flex items-center">
                <Compass className="w-4 h-4 mr-1.5 text-[#176B3A]" />
                {property.facing.split('(')[0]}
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#DCE5DD]">
              <span className="text-[11px] font-bold text-[#66716A] uppercase tracking-wider block">Possession</span>
              <p className="text-sm font-extrabold text-[#202923] mt-0.5 flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#176B3A]" />
                {property.possession}
              </p>
            </div>
          </div>

          {/* Overview Description */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#66716A] mb-2">
              Property Overview & VS Group Guarantee
            </h4>
            <p className="text-sm text-[#202923] leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Premium Features List */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#66716A] mb-3">
              Key Architectural Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-[#202923]">
                  <CheckCircle2 className="w-4 h-4 text-[#176B3A] flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Amenities */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#66716A] mb-3">
              Society Amenities
            </h4>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity, idx) => (
                <span
                  key={idx}
                  className="bg-[#DCEBDD]/40 text-[#104D2A] border border-[#DCE5DD] text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center"
                >
                  <Sparkles className="w-3 h-3 text-[#176B3A] mr-1.5" />
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Nearby Vadodara Landmarks */}
          <div className="bg-[#F0F6F0] p-4 rounded-2xl border border-[#DCE5DD]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#66716A] mb-2.5">
              Vadodara Locality Connectivity & Distances
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {property.nearby.map((place, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-medium text-[#202923]">
                  <MapPin className="w-3.5 h-3.5 text-[#176B3A]" />
                  <span>{place}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RERA Compliance Badge */}
          <div className="p-3 bg-[#DCEBDD]/50 border border-[#DCE5DD] rounded-xl flex items-center space-x-3 text-xs text-[#104D2A]">
            <ShieldCheck className="w-5 h-5 text-[#176B3A] flex-shrink-0" />
            <div>
              <p className="font-bold">Gujarat RERA Registered Property</p>
              <p className="text-[11px] font-mono text-[#176B3A]">Registration No: {property.reraId}</p>
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#DCE5DD] flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              if (onOpenConsultation) onOpenConsultation(property);
            }}
            className="flex-1 bg-[#176B3A] hover:bg-[#104D2A] text-white text-sm font-bold py-3 px-5 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Site Visit with Navkar Realty</span>
          </button>

          <a
            href={`https://wa.me/919173946161?text=Hello%20Navkar%20Realty,%20I%20am%20interested%20in%20arranging%20a%20site%20visit%20for%20${encodeURIComponent(property.title)}%20(${encodeURIComponent(property.location)},%20Vadodara)`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#104D2A] hover:bg-[#092615] text-white text-sm font-bold py-3 px-5 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Instant WhatsApp Connect</span>
          </a>
        </div>

      </div>
    </dialog>
  );
}
