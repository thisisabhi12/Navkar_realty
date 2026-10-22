import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle,
  Building,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { VADODARA_LOCALITIES } from '../data/properties';

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredLocality: 'Vasna Road',
    propertyType: 'Buy 3 BHK',
    needLoanAssistance: true,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift server response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#DCEBDD]/60 border border-[#DCE5DD] rounded-full px-4 py-1.5 text-xs font-bold text-[#104D2A]">
            <Sparkles className="w-3.5 h-3.5 text-[#176B3A]" />
            <span>Connect with Local Experts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202923] tracking-tight font-display">
            Begin Your Vadodara Real Estate Journey
          </h2>
          <p className="text-base text-[#66716A]">
            Visit our corporate office at Vihav Supremus 2 on Vasna Road, or request a personalized portfolio consultation with a senior VS Group property consultant.
          </p>
        </div>

        {/* 2-Column Layout: Form & Office Hub Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#F0F6F0]/40 border border-[#DCE5DD] rounded-3xl p-6 sm:p-10 shadow-sm relative">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#DCEBDD] text-[#176B3A] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#202923] font-display">
                  Thank You, {formData.fullName || 'Valued Client'}!
                </h3>
                <p className="text-sm text-[#66716A] max-w-md mx-auto">
                  Your inquiry has been received by our senior property desk at Navkar Realty. Our consultant will contact you at <strong className="text-[#104D2A]">{formData.phone || '+91 ...'}</strong> within 2 business hours.
                </p>
                <div className="pt-4 flex justify-center space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        preferredLocality: 'Vasna Road',
                        propertyType: 'Buy 3 BHK',
                        needLoanAssistance: true,
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 bg-white border border-[#DCE5DD] hover:bg-[#F0F6F0] text-[#202923] rounded-xl text-xs font-bold transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href="https://wa.me/919173946161?text=Hello%20Navkar%20Realty,%20I%20just%20submitted%20an%20inquiry%20online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#176B3A] hover:bg-[#104D2A] text-white rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 shadow-md shadow-[#176B3A]/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Us Now</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <h3 className="text-xl font-bold text-[#202923] font-display">
                    Schedule a Consultation / Site Tour
                  </h3>
                  <p className="text-xs text-[#66716A] mt-0.5">
                    100% confidential. No spam, ever.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label htmlFor="lead-name" className="text-xs font-bold text-[#202923] block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lead-name"
                      required
                      placeholder="e.g. Rajesh Patel"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-[#DCE5DD] rounded-xl px-4 py-2.5 text-sm text-[#202923] placeholder-[#66716A]/60 focus:outline-none focus:ring-2 focus:ring-[#176B3A] focus:border-[#176B3A] transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="lead-phone" className="text-xs font-bold text-[#202923] block">
                      Phone Number (WhatsApp) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="lead-phone"
                      required
                      placeholder="+91 91739 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#DCE5DD] rounded-xl px-4 py-2.5 text-sm text-[#202923] placeholder-[#66716A]/60 focus:outline-none focus:ring-2 focus:ring-[#176B3A] focus:border-[#176B3A] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="lead-email" className="text-xs font-bold text-[#202923] block">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="lead-email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#DCE5DD] rounded-xl px-4 py-2.5 text-sm text-[#202923] placeholder-[#66716A]/60 focus:outline-none focus:ring-2 focus:ring-[#176B3A] focus:border-[#176B3A] transition-all"
                    />
                  </div>

                  {/* Preferred Locality */}
                  <div className="space-y-1">
                    <label htmlFor="lead-locality" className="text-xs font-bold text-[#202923] block">
                      Preferred Vadodara Locality
                    </label>
                    <select
                      id="lead-locality"
                      value={formData.preferredLocality}
                      onChange={(e) => setFormData({ ...formData, preferredLocality: e.target.value })}
                      className="w-full bg-white border border-[#DCE5DD] rounded-xl px-4 py-2.5 text-sm text-[#202923] focus:outline-none focus:ring-2 focus:ring-[#176B3A] focus:border-[#176B3A] transition-all cursor-pointer"
                    >
                      {VADODARA_LOCALITIES.filter(l => l !== 'All Locations').map((l) => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Property Type Radio / Select */}
                <div className="space-y-1">
                  <label htmlFor="lead-type" className="text-xs font-bold text-[#202923] block">
                    Property Requirement
                  </label>
                  <select
                    id="lead-type"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-white border border-[#DCE5DD] rounded-xl px-4 py-2.5 text-sm text-[#202923] focus:outline-none focus:ring-2 focus:ring-[#176B3A] focus:border-[#176B3A] transition-all cursor-pointer"
                  >
                    <option value="Buy 2 BHK">Buy 2 BHK Apartment</option>
                    <option value="Buy 3 BHK">Buy 3 BHK Luxury Flat</option>
                    <option value="Buy 4 BHK">Buy 4 BHK Sky Villa</option>
                    <option value="Buy Villa">Buy Signature Bungalow (Bhayli / Sevasi)</option>
                    <option value="Commercial">Buy / Lease Commercial Showroom & Office</option>
                    <option value="Rental">Looking for Premium Rental Home</option>
                    <option value="General Advisory">Investment / Portfolio Consultation</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="lead-message" className="text-xs font-bold text-[#202923] block">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    id="lead-message"
                    rows="3"
                    placeholder="Tell us about your preferred budget, Vastu requirements, or ready possession dates..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-[#DCE5DD] rounded-xl px-4 py-2.5 text-sm text-[#202923] placeholder-[#66716A]/60 focus:outline-none focus:ring-2 focus:ring-[#176B3A] focus:border-[#176B3A] transition-all"
                  ></textarea>
                </div>

                {/* Loan Assistance Checkbox */}
                <div className="flex items-center space-x-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="lead-loan-assist"
                    checked={formData.needLoanAssistance}
                    onChange={(e) => setFormData({ ...formData, needLoanAssistance: e.target.checked })}
                    className="w-4 h-4 text-[#176B3A] bg-white border-[#DCE5DD] rounded focus:ring-[#176B3A]"
                  />
                  <label htmlFor="lead-loan-assist" className="text-xs font-medium text-[#202923] cursor-pointer">
                    I would like free Home Loan eligibility & interest rate assistance (SBI / HDFC / ICICI)
                  </label>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-lead-form-btn"
                    className="w-full bg-[#176B3A] hover:bg-[#104D2A] text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-[#176B3A]/20 transition-all flex items-center justify-center space-x-2 group disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#DCEBDD]" />
                        <span>Request Priority Consultation</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center pt-1">
                  <span className="text-[11px] text-[#66716A] flex items-center justify-center">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#176B3A]" />
                    Backed by the ethics and transparency of the VS Group
                  </span>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Corporate Location & Instant WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Card */}
            <div className="bg-[#092615] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#176B3A]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 bg-[#176B3A]/25 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center space-x-3.5 mb-6">
                <div className="bg-white p-2 rounded-xl shadow-md flex-shrink-0">
                  <img src="/logo.jpg" alt="Navkar Realty Logo" className="w-12 h-12 object-contain rounded-md" />
                </div>
                <div>
                  <h3 className="text-lg font-black font-display text-white">
                    Navkar Realty Corporate Desk
                  </h3>
                  <span className="text-xs font-semibold text-[#DCEBDD]">
                    A Part of VS Group • The Name of Trust
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-200">
                
                {/* Exact Corporate Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#DCEBDD] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Office Address:</strong>
                    <span className="text-slate-300">207, Vihav Supremus 2, Near Ward No 11, Vasna Road, Diwalipura, Vadodara, Gujarat - 390007</span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#DCEBDD] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Direct Hotline:</strong>
                    <a href="tel:+919173946161" className="text-slate-300 hover:text-[#DCEBDD] transition-colors">
                      +91 91739 46161
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#DCEBDD] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Inquiries Email:</strong>
                    <a href="mailto:realtynavkar61@gmail.com" className="text-slate-300 hover:text-[#DCEBDD] transition-colors">
                      realtynavkar61@gmail.com
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#DCEBDD] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Visiting Hours:</strong>
                    <span className="text-slate-300">Monday – Saturday: 9:30 AM – 7:30 PM</span>
                    <span className="block text-xs text-slate-400">Sunday: Private Visits by Prior Appointment</span>
                  </div>
                </div>

              </div>

              {/* Instant WhatsApp Quick Callout */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href="https://wa.me/919173946161?text=Hello%20Navkar%20Realty,%20I%20would%20like%20to%20inquire%20about%20properties%20in%20Vadodara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#176B3A] hover:bg-[#104D2A] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>

            </div>

            {/* Stylized Vadodara Location Map Card */}
            <div className="bg-[#F0F6F0]/50 border border-[#DCE5DD] rounded-3xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#176B3A]" />
                  <span className="text-xs font-bold text-[#202923] uppercase">Hyperlocal Hub Preview</span>
                </div>
                <a 
                  href="https://maps.google.com/?q=Vihav+Supremus+2+Vasna+Road+Diwalipura+Vadodara" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#176B3A] hover:text-[#104D2A] hover:underline"
                >
                  Open in Google Maps ↗
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[#DCE5DD] h-44 relative bg-slate-200 group">
                {/* Visual Map Representation */}
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Navkar Realty Vadodara Location Map"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#092615]/50 backdrop-blur-[1px] flex items-center justify-center">
                  <div className="bg-white/95 rounded-xl px-4 py-2.5 shadow-lg border border-[#DCE5DD] text-center">
                    <span className="w-3 h-3 rounded-full bg-[#176B3A] inline-block animate-ping mr-1.5 align-middle" />
                    <span className="text-xs font-extrabold text-[#202923]">Vihav Supremus 2, Vasna Road</span>
                    <span className="text-[10px] text-[#66716A] block mt-0.5">Near Ward No 11, Diwalipura</span>
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
