import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Building2 } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const predefinedMessages = [
    "Hello! I am looking to buy a 3 BHK apartment in Vadodara.",
    "Interested in commercial office space on Vasna Road.",
    "Looking for a luxury bungalow/villa in Bhayli or Sevasi.",
    "Need home loan guidance and property valuation."
  ];

  const handleSendCustom = (text) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919173946161?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* WhatsApp Mini Popup Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-[#DCE5DD] overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-[#104D2A] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/logo.jpg" 
                  alt="Navkar Realty Logo" 
                  className="w-10 h-10 rounded-full object-contain bg-white p-0.5 border border-[#DCEBDD]"
                />
                <span className="w-3 h-3 bg-[#DCEBDD] border-2 border-[#104D2A] rounded-full absolute bottom-0 right-0"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold">Navkar Realty Support</h4>
                <p className="text-[11px] text-[#DCEBDD] flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DCEBDD] mr-1 animate-pulse"></span>
                  Online • VS Group Real Estate Desk
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#F0F6F0] space-y-3 text-xs">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-[#DCE5DD] text-[#202923] space-y-1">
              <p className="font-semibold text-[#202923]">
                Namaste! Welcome to Navkar Realty (Part of VS Group).
              </p>
              <p className="text-[#66716A]">
                How can our Vadodara real estate advisors assist you today? Select a topic or send a direct message:
              </p>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5 pt-1">
              {predefinedMessages.map((msg, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendCustom(msg)}
                  className="w-full text-left bg-white hover:bg-[#DCEBDD]/50 text-[#202923] hover:text-[#104D2A] p-2.5 rounded-xl border border-[#DCE5DD] hover:border-[#176B3A] font-medium transition-all flex items-center justify-between group shadow-sm"
                >
                  <span className="truncate pr-2">{msg}</span>
                  <Send className="w-3.5 h-3.5 text-[#176B3A] opacity-70 group-hover:opacity-100 flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="p-3 bg-white border-t border-[#DCE5DD] flex items-center justify-between">
            <span className="text-[10px] text-[#66716A] font-medium">
              Vihav Supremus 2, Vasna Road, Vadodara
            </span>
            <button
              type="button"
              onClick={() => handleSendCustom("Hello Navkar Realty, I would like to speak to an agent")}
              className="bg-[#176B3A] hover:bg-[#104D2A] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center space-x-1 shadow-sm transition-colors"
            >
              <span>Open Chat</span>
              <Send className="w-3 h-3" />
            </button>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="whatsapp-pulse bg-[#176B3A] hover:bg-[#104D2A] text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center space-x-2.5 group transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#DCEBDD]"
        aria-label="Chat with Navkar Realty on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#176B3A]" />
        <span className="hidden sm:inline-block font-bold text-sm tracking-wide pr-1">
          Chat on WhatsApp
        </span>
      </button>

    </div>
  );
}
