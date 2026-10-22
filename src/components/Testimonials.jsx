import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#DCEBDD]/60 border border-[#DCE5DD] rounded-full px-4 py-1.5 text-xs font-bold text-[#104D2A]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#176B3A]" />
            <span>Real Vadodara Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202923] tracking-tight font-display">
            Trusted by Vadodara’s Most Discerning Families
          </h2>
          <p className="text-base text-[#66716A]">
            Read firsthand accounts from doctors, industrialists, NRIs, and homeowners who found their ideal properties through Navkar Realty under the VS Group banner.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Testimonial Card */}
          <div className="bg-[#F0F6F0]/40 border border-[#DCE5DD] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden transition-all duration-500">
            
            {/* Background Decorative Quote Mark */}
            <Quote className="absolute right-6 bottom-6 w-32 h-32 text-[#176B3A]/5 -rotate-12 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
              
              {/* Client Avatar / Portrait */}
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#176B3A] shadow-md">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#176B3A] text-white p-1 rounded-full shadow">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              {/* Text and Details */}
              <div className="flex-1 text-center md:text-left space-y-4">
                
                {/* 5-Star Rating */}
                <div className="flex items-center justify-center md:justify-start space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-[#66716A] ml-2">5.0 Verified Review</span>
                </div>

                {/* Quote Text */}
                <blockquote className="text-base sm:text-lg text-[#202923] font-medium leading-relaxed italic">
                  "{current.text}"
                </blockquote>

                {/* Author Info */}
                <div className="pt-2 border-t border-[#DCE5DD] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-extrabold text-[#202923] font-display">
                      {current.name}
                    </h4>
                    <p className="text-xs text-[#176B3A] font-semibold">
                      {current.role}
                    </p>
                  </div>
                  <div className="inline-block bg-white border border-[#DCE5DD] px-3 py-1 rounded-full text-xs font-bold text-[#202923]">
                    📍 {current.location}
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center space-x-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'w-8 bg-[#176B3A]' 
                      : 'w-2.5 bg-[#DCE5DD] hover:bg-[#66716A]/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={prevSlide}
                className="w-11 h-11 rounded-xl bg-white border border-[#DCE5DD] text-[#202923] hover:text-[#104D2A] hover:border-[#176B3A] hover:bg-[#F0F6F0] flex items-center justify-center shadow-sm transition-all focus:outline-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-11 h-11 rounded-xl bg-[#176B3A] text-white hover:bg-[#104D2A] flex items-center justify-center shadow-md shadow-[#176B3A]/20 transition-all focus:outline-none"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
