import React, { useRef, useEffect, useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  Send,
  AlertCircle
} from 'lucide-react';
import { submitInquiry } from '../services/api';

export default function ConsultationModal({ isOpen, onClose, initialContext }) {
  const dialogRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'Morning (10:30 AM - 1:00 PM)',
    meetingType: 'Office Meeting (207 Vihav Supremus 2)',
    interest: '3 BHK Residential Flat'
  });

  useEffect(() => {
    if (isOpen && initialContext) {
      if (initialContext.interest) {
        setFormData(prev => ({ ...prev, interest: initialContext.interest }));
      }
    }
  }, [isOpen, initialContext]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      setSubmitted(false);
      setErrorMessage('');
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }

    // Modern Web Guidance: Fallback for browsers that do not yet support closedby="any"
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    const formType = initialContext?.formType || (initialContext?.property ? 'Site Visit Request' : 'VIP Consultation Booking');

    const result = await submitInquiry({
      formType,
      fullName: formData.name,
      phone: formData.phone,
      email: formData.email,
      date: formData.date,
      timeSlot: formData.timeSlot,
      meetingType: formData.meetingType,
      interest: formData.interest,
      property: initialContext?.property || null,
      message: initialContext?.message || '',
      website_hp: honeypot
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setErrorMessage(result.message || 'Unable to confirm appointment right now. Please try again or reach us on WhatsApp.');
    }
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      id="consultation-modal-dialog"
      closedby="any"
      aria-labelledby="consultation-dialog-title"
      className="m-auto rounded-3xl p-0 max-w-lg w-[92vw] bg-white shadow-2xl border border-[#DCE5DD] overflow-hidden focus:outline-none"
    >
      <div className="flex flex-col">
        
        {/* Header */}
        <div className="bg-[#104D2A] text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-1 rounded-xl shadow-md flex-shrink-0">
              <img src="/logo.jpg" alt="Navkar Realty Logo" className="w-10 h-10 object-contain rounded-lg" />
            </div>
            <div>
              <h3 id="consultation-dialog-title" className="text-base font-extrabold font-display">
                {initialContext?.property ? 'Schedule Site Visit' : 'Book VIP Property Consultation'}
              </h3>
              <p className="text-[11px] text-[#DCEBDD] font-medium">
                {initialContext?.property ? `${initialContext.property.title} • ${initialContext.property.location}` : 'Navkar Realty • Backed by VS Group'}
              </p>
            </div>
          </div>
          <button
            type="button"
            id="close-consultation-modal-btn"
            onClick={onClose}
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-[#DCEBDD] text-[#176B3A] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-[#202923] font-display">
                {initialContext?.property ? 'Site Visit Requested!' : 'Consultation Confirmed!'}
              </h4>
              <p className="text-xs text-[#66716A] leading-relaxed max-w-xs mx-auto">
                Thank you, <strong>{formData.name}</strong>. A dedicated VS Group property advisor has received your request for <strong>{formData.date || 'your chosen date'}</strong> ({formData.timeSlot}).
              </p>
              {initialContext?.property && (
                <div className="p-2.5 bg-[#DCEBDD]/50 border border-[#DCE5DD] rounded-xl text-center text-xs text-[#104D2A] font-bold">
                  Property: {initialContext.property.title} ({initialContext.property.location})
                </div>
              )}
              <div className="p-3 bg-[#F0F6F0] border border-[#DCE5DD] rounded-xl text-left text-xs text-[#202923] space-y-1">
                <p><strong>Venue:</strong> {formData.meetingType}</p>
                <p><strong>Address:</strong> 207, Vihav Supremus 2, Vasna Road, Diwalipura, Vadodara</p>
                <p><strong>Direct Desk:</strong> +91 91739 46161</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-full mt-4 bg-[#176B3A] hover:bg-[#104D2A] text-white text-xs font-bold py-2.5 rounded-xl transition-colors shadow-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Associated Property Banner if clicked from property modal */}
              {initialContext?.property && (
                <div className="p-3 bg-[#F0F6F0] border border-[#DCE5DD] rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#104D2A] block">{initialContext.property.title}</span>
                    <span className="text-[#66716A]">{initialContext.property.type} &bull; {initialContext.property.location}</span>
                  </div>
                  <span className="font-black text-[#176B3A]">{initialContext.property.priceDisplay}</span>
                </div>
              )}

              {/* Honeypot field for bot protection */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="website_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Error Notice */}
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-xl flex items-start space-x-2 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#202923] block">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyesh Shah"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#F0F6F0]/60 border border-[#DCE5DD] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#202923] focus:outline-none focus:ring-2 focus:ring-[#176B3A] focus:border-[#176B3A] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#202923] block">
                    Contact Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 91739 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F0F6F0]/60 border border-[#DCE5DD] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#202923] focus:outline-none focus:ring-2 focus:ring-[#176B3A] focus:border-[#176B3A] focus:bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#202923] block">
                    Email Address <span className="text-[#66716A] text-[10px] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F0F6F0]/60 border border-[#DCE5DD] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#202923] focus:outline-none focus:ring-2 focus:ring-[#176B3A] focus:border-[#176B3A] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#202923] block">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#F0F6F0]/60 border border-[#DCE5DD] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#202923] focus:outline-none focus:ring-2 focus:ring-[#176B3A] focus:border-[#176B3A] focus:bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#202923] block">
                    Time Window
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[#F0F6F0]/60 border border-[#DCE5DD] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#202923] focus:outline-none focus:ring-2 focus:ring-[#176B3A] focus:border-[#176B3A] focus:bg-white cursor-pointer"
                  >
                    <option value="Morning (10:30 AM - 1:00 PM)">Morning (10:30 AM - 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#202923] block">
                  Consultation Mode
                </label>
                <select
                  value={formData.meetingType}
                  onChange={(e) => setFormData({ ...formData, meetingType: e.target.value })}
                  className="w-full bg-[#F0F6F0]/60 border border-[#DCE5DD] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#202923] focus:outline-none focus:ring-2 focus:ring-[#176B3A] focus:border-[#176B3A] focus:bg-white cursor-pointer"
                >
                  <option value="Office Meeting (207 Vihav Supremus 2)">In-Person at Navkar Realty Office (Vasna Road)</option>
                  <option value="Direct Site Tour in Vadodara">Direct Site Visit / Property Tour</option>
                  <option value="Video Call / WhatsApp Conference">Video Call / WhatsApp Conference (For NRIs)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#202923] block">
                  Property Interest in Vadodara
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-[#F0F6F0]/60 border border-[#DCE5DD] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#202923] focus:outline-none focus:ring-2 focus:ring-[#176B3A] focus:border-[#176B3A] focus:bg-white cursor-pointer"
                >
                  <option value="Vasna Road 3 BHK">Vasna Road 3 BHK Luxury Apartment</option>
                  <option value="Diwalipura 4 BHK Sky Villa">Diwalipura 4 BHK Sky Villa</option>
                  <option value="Bhayli Luxury Bungalow">Bhayli / Sevasi Signature Villa</option>
                  <option value="Vihav Supremus Commercial">Commercial Office / Showroom</option>
                  <option value="Alkapuri Executive Rental">Alkapuri Executive Rental Flat</option>
                  <option value="Portfolio Advisory">General Portfolio Advisory</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="confirm-booking-btn"
                  className="w-full bg-[#176B3A] hover:bg-[#104D2A] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 text-sm disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Request...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#DCEBDD]" />
                      <span>{initialContext?.property ? 'Confirm Site Visit Request' : 'Confirm Free Consultation Appointment'}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-1 text-[11px] text-[#66716A]">
                <span>Free consultation • 100% confidential • Zero obligation</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </dialog>
  );
}
