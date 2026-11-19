import React from 'react';
import { Phone, MapPin, MessageSquare, Mail, ShieldAlert } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppUrl } from '../config/business';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy-950 text-slate-300 border-t border-brand-gold-500/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-md shadow-sm border border-brand-gold-500/30">
                <img
                  src="/assets/logo/logo.jpg"
                  alt="EASE AND TRAVEL Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-white block">
                  EASE AND TRAVEL
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-brand-gold-400 font-semibold">
                  Luxury Mobility &amp; Travel
                </span>
              </div>
            </div>

            <p className="font-serif italic text-brand-gold-300 text-lg leading-snug">
              &ldquo;{BUSINESS_CONFIG.tagline}&rdquo;
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Curating refined travel experiences with a signature fleet of executive sedans, luxury MPVs, and dedicated ticketing and hotel reservation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider">
              {BUSINESS_CONFIG.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-brand-gold-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-brand-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500"></span>
              Our Services
            </h4>
            <ul className="space-y-3 text-xs tracking-wider">
              <li>
                <a href="#car-rentals" className="text-slate-300 hover:text-brand-gold-400 font-medium block">
                  Car Rentals
                </a>
                <span className="text-slate-500 text-[11px] block mt-0.5">
                  Executive Sedans, Luxury MPVs &amp; Passenger Vans
                </span>
              </li>
              <li>
                <a href="#ticket-bookings" className="text-slate-300 hover:text-brand-gold-400 font-medium block">
                  Ticket Bookings
                </a>
                <span className="text-slate-500 text-[11px] block mt-0.5">
                  Air, Scenic Railway &amp; Modern Intercity Bus
                </span>
              </li>
              <li>
                <a href="#hotel-bookings" className="text-slate-300 hover:text-brand-gold-400 font-medium block">
                  Hotel Bookings
                </a>
                <span className="text-slate-500 text-[11px] block mt-0.5">
                  Luxury Resorts, City Business Hotels &amp; Boutique Stays
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500"></span>
              Official Contact
            </h4>
            <div className="space-y-3.5 text-xs leading-relaxed text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.address.fullFormatted}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="hover:text-brand-gold-400 transition-colors font-medium text-white"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-brand-gold-400 shrink-0" />
                <a
                  href={createWhatsAppUrl("Hello EASE AND TRAVEL, I would like to inquire about your services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold-400 hover:underline font-medium"
                >
                  WhatsApp Instant Enquiry
                </a>
              </div>

              {/* Email Notice (Configurable) */}
              <div className="pt-2 text-[11px] text-slate-400 bg-white/5 p-2.5 rounded border border-white/10">
                <div className="flex items-center gap-1.5 font-medium text-slate-300 mb-1">
                  <Mail className="w-3.5 h-3.5 text-brand-gold-400" />
                  <span>Enquiry Mailbox:</span>
                </div>
                {BUSINESS_CONFIG.isEmailVerified ? (
                  <a href={`mailto:${BUSINESS_CONFIG.suggestedEmail}`} className="text-brand-gold-400 hover:underline">
                    {BUSINESS_CONFIG.suggestedEmail}
                  </a>
                ) : (
                  <div className="flex items-start gap-1 text-slate-400">
                    <ShieldAlert className="w-3 h-3 text-brand-gold-400 shrink-0 mt-0.5" />
                    <span>
                      Suggested: <span className="text-slate-300 font-mono">{BUSINESS_CONFIG.suggestedEmail}</span> (Pending mailbox verification; kindly reach via Phone/WhatsApp).
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 {BUSINESS_CONFIG.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">New Delhi – 110035, India</span>
            <span className="text-slate-600">|</span>
            <a href="#hero" className="hover:text-brand-gold-400 transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
