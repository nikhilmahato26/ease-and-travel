import React from 'react';
import { Plane, Train, Bus, MessageSquare, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { TICKET_BOOKING_SERVICE } from '../config/services';
import { createWhatsAppUrl } from '../config/business';

export const TicketBooking: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(TICKET_BOOKING_SERVICE.whatsAppMessage);

  return (
    <section id="ticket-bookings" className="py-20 md:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="space-y-4">
              {/* Main Flight Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] bg-slate-900 border-2 border-white">
                <img
                  src="/assets/images/ticket_flight.jpg"
                  alt="Aviation and air ticket booking assistance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-brand-gold-400 font-semibold block">
                    Air Travel Assistance
                  </span>
                  <span className="font-serif text-base font-medium">
                    Domestic &amp; International Flights
                  </span>
                </div>
              </div>

              {/* Dual Secondary Images: Train and Coach */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3] bg-slate-900 border-2 border-white">
                  <img
                    src="/assets/images/ticket_train.jpg"
                    alt="Scenic train travel"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-white text-xs font-medium">
                    Scenic Rail Journeys
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3] bg-slate-900 border-2 border-white">
                  <img
                    src="/assets/images/ticket_bus.jpg"
                    alt="Modern executive coach travel"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-white text-xs font-medium">
                    Executive Coach Travel
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Service Description & Enquiries (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              eyebrow="SEAMLESS TICKETING COORDINATION"
              title={TICKET_BOOKING_SERVICE.title}
              subtitle={TICKET_BOOKING_SERVICE.description}
              align="left"
              className="mb-8"
            />

            {/* Three Ticketing Pillars */}
            <div className="space-y-4 mb-8">
              {TICKET_BOOKING_SERVICE.categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg bg-white border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-brand-gold-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-md bg-brand-navy-900 text-brand-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                    {cat.icon === "Plane" && <Plane className="w-5 h-5" />}
                    {cat.icon === "Train" && <Train className="w-5 h-5" />}
                    {cat.icon === "Bus" && <Bus className="w-5 h-5" />}
                  </div>

                  <div>
                    <h4 className="font-serif text-lg font-bold text-brand-navy-950 mb-1">
                      {cat.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="md"
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  {TICKET_BOOKING_SERVICE.ctaText}
                </Button>
              </a>

              <a
                href="#contact"
                className="text-xs font-semibold uppercase tracking-wider text-brand-navy-900 hover:text-brand-gold-700 flex items-center gap-1.5 transition-colors"
              >
                <span>Submit Ticket Requirements Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
