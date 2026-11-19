import React from 'react';
import { Phone, MessageSquare, MapPin, Mail, Clock, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { EnquiryForm } from '../components/EnquiryForm';
import { BUSINESS_CONFIG, createWhatsAppUrl } from '../config/business';

interface ContactProps {
  selectedService?: string;
  selectedVehicle?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedService, selectedVehicle }) => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CONNECT WITH OUR CONCIERGE"
          title="LET'S PLAN YOUR NEXT JOURNEY"
          subtitle="Whether you need a premium rental vehicle, ticket booking assistance, or a hotel reservation, get in touch with EASE AND TRAVEL."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Business Contact Dossier (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-brand-navy-950 text-white rounded-xl p-6 sm:p-8 shadow-xl border border-brand-gold-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white p-2 rounded border border-brand-gold-500/40">
                  <img
                    src="/assets/logo/logo.jpg"
                    alt="EASE AND TRAVEL Logo"
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-wider text-white">
                    {BUSINESS_CONFIG.name}
                  </h3>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-brand-gold-400 font-medium">
                    Corporate Travel &amp; Mobility Desk
                  </span>
                </div>
              </div>

              {/* Contact Information List */}
              <div className="space-y-6 pt-4 border-t border-white/10">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-gold-500/10 text-brand-gold-400 border border-brand-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-brand-gold-400 transition-colors"
                    >
                      {BUSINESS_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">
                      WhatsApp Messaging
                    </span>
                    <a
                      href={createWhatsAppUrl("Hello EASE AND TRAVEL, I would like to make an enquiry.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Instant WhatsApp Chat</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-gold-500/10 text-brand-gold-400 border border-brand-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">
                      Headquarters Address
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light mt-0.5">
                      {BUSINESS_CONFIG.address.building},<br />
                      {BUSINESS_CONFIG.address.street}, {BUSINESS_CONFIG.address.area},<br />
                      {BUSINESS_CONFIG.address.city} – {BUSINESS_CONFIG.address.pincode}, {BUSINESS_CONFIG.address.country}
                    </p>
                  </div>
                </div>

                {/* Email Box Notice (Configurable) */}
                <div className="flex items-start gap-4 pt-2">
                  <div className="w-10 h-10 rounded-lg bg-white/5 text-brand-gold-400 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">
                      Official Mailbox
                    </span>
                    {BUSINESS_CONFIG.isEmailVerified ? (
                      <a
                        href={`mailto:${BUSINESS_CONFIG.suggestedEmail}`}
                        className="text-xs text-brand-gold-400 hover:underline"
                      >
                        {BUSINESS_CONFIG.suggestedEmail}
                      </a>
                    ) : (
                      <div className="text-xs text-slate-400 leading-relaxed mt-0.5">
                        <span className="text-slate-300 font-mono block">{BUSINESS_CONFIG.suggestedEmail}</span>
                        <span className="text-[11px] text-amber-300/80 flex items-center gap-1 mt-1">
                          <ShieldAlert className="w-3 h-3 shrink-0" />
                          Mailbox creation in progress. For immediate booking, use Phone or WhatsApp.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-white/10">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="py-3 px-4 rounded bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-navy-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={createWhatsAppUrl("Hello EASE AND TRAVEL, I am interested in inquiring about your travel services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Quick Note Card */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-brand-gold-100 text-brand-gold-800 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-brand-navy-950 block text-sm font-serif mb-1">
                  Personal Travel Assistance
                </strong>
                Direct quotes are shared promptly over WhatsApp and phone. Tell us your date, preferred vehicle, or ticketing itinerary to get an immediate reply.
              </div>
            </div>
          </div>

          {/* Right Column: React Hook Form Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm
              initialService={selectedService}
              initialVehicle={selectedVehicle}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
