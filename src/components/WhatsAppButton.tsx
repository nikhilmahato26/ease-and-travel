import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { createWhatsAppUrl } from '../config/business';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = "Hello EASE AND TRAVEL, I would like to enquire about your luxury car rentals and travel booking services.";
  const url = createWhatsAppUrl(defaultMessage);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:block mr-3 bg-brand-navy-950 text-white text-xs font-medium py-1.5 px-3 rounded-md shadow-xl border border-brand-gold-500/30 whitespace-nowrap animate-fadeIn">
          <span>Chat with EASE AND TRAVEL</span>
        </div>
      )}

      {/* Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp with EASE AND TRAVEL"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />

        <MessageSquare className="w-7 h-7 relative z-10" />

        <span className="sr-only">Contact on WhatsApp</span>
      </a>
    </div>
  );
};
