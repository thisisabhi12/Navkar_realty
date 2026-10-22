import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedListings from './components/FeaturedListings';
import AboutSection from './components/AboutSection';
import MarketStats from './components/MarketStats';
import EmiCalculator from './components/EmiCalculator';
import Testimonials from './components/Testimonials';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PropertyModal from './components/PropertyModal';
import ConsultationModal from './components/ConsultationModal';
export default function App() {
  const [searchFilters, setSearchFilters] = useState(null);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Ensure any legacy theme storage is cleaned and unified Lacoste theme is applied
  useEffect(() => {
    localStorage.removeItem('navkar_brand_theme');
    document.documentElement.classList.remove('theme-bottle', 'theme-gotham');
    document.documentElement.classList.add('theme-lacoste');
  }, []);

  const handleHeroSearch = (filters) => {
    setSearchFilters(filters);
  };

  const handleSelectProperty = (id) => {
    setSelectedPropertyId(id);
  };

  const handleClosePropertyModal = () => {
    setSelectedPropertyId(null);
  };

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="theme-lacoste min-h-screen bg-[var(--theme-bg-page)] flex flex-col text-[var(--theme-text-main)] antialiased selection:bg-brand-700 selection:text-white">
      {/* 1. Header / Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Split-screen Hero Section */}
        <Hero 
          onSearchSubmit={handleHeroSearch} 
          onSelectProperty={handleSelectProperty} 
        />

        {/* 3. Featured Property Listings with Live Interactive Filters */}
        <FeaturedListings 
          searchFilters={searchFilters} 
          onSelectProperty={handleSelectProperty} 
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 4. About Us / VS Group Trust Indicators */}
        <AboutSection onOpenConsultation={handleOpenConsultation} />

        {/* 5. Market Stats & Vadodara Locality Pulse */}
        <MarketStats onOpenConsultation={handleOpenConsultation} />

        {/* Value Add Tool: Vadodara Home Loan EMI Calculator */}
        <EmiCalculator onOpenConsultation={handleOpenConsultation} />

        {/* 6. Testimonials Carousel */}
        <Testimonials />

        {/* 7. Lead Capture Form & Office Details */}
        <LeadCapture />
      </main>

      {/* 8. Corporate Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* 9. Floating WhatsApp Quick Connect Button */}
      <FloatingWhatsApp />

      {/* 10. Property Details Modal */}
      <PropertyModal 
        propertyId={selectedPropertyId} 
        onClose={handleClosePropertyModal} 
        onOpenConsultation={handleOpenConsultation}
      />

      {/* 11. Consultation Booking Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={handleCloseConsultation} 
      />
    </div>
  );
}
