import React from 'react';
import { Palmtree, Building, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { HOTEL_BOOKING_SERVICE } from '../config/services';
import { createWhatsAppUrl } from '../config/business';

export const HotelBooking: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(HOTEL_BOOKING_SERVICE.whatsAppMessage);

  return (
    <section id="hotel-bookings" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial & Enquiries (7 cols) */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="CURATED HOSPITALITY STAYS"
              title={HOTEL_BOOKING_SERVICE.title}
              subtitle={HOTEL_BOOKING_SERVICE.description}
              align="left"
              className="mb-8"
            />

            {/* Three Accommodation Types */}
            <div className="space-y-4 mb-8">
              {HOTEL_BOOKING_SERVICE.categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-4 hover:border-brand-gold-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-md bg-brand-navy-900 text-brand-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                    {cat.icon === "Palmtree" && <Palmtree className="w-5 h-5" />}
                    {cat.icon === "Building" && <Building className="w-5 h-5" />}
                    {cat.icon === "Sparkles" && <Sparkles className="w-5 h-5" />}
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
                  {HOTEL_BOOKING_SERVICE.ctaText}
                </Button>
              </a>

              <a
                href="#contact"
                className="text-xs font-semibold uppercase tracking-wider text-brand-navy-900 hover:text-brand-gold-700 flex items-center gap-1.5 transition-colors"
              >
                <span>Submit Hotel Reservation Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1: Luxury Resort */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] bg-slate-900 border-2 border-white">
                <img
                  src="/assets/images/hotel_luxury.jpg"
                  alt="Luxury 5-star hotel resort"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-white text-xs font-medium">
                  5-Star Luxury Resorts &amp; Sanctuaries
                </span>
              </div>

              {/* Image 2: Luxury Suite */}
              <div className="relative rounded-xl overflow-hidden shadow-md aspect-square bg-slate-900 border-2 border-white">
                <img
                  src="/assets/images/hotel_room.jpg"
                  alt="Executive suite room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 text-white text-[11px] font-medium">
                  Executive Suites
                </span>
              </div>

              {/* Image 3: Pool / Relax */}
              <div className="relative rounded-xl overflow-hidden shadow-md aspect-square bg-slate-900 border-2 border-white">
                <img
                  src="/assets/images/hotel_pool.jpg"
                  alt="Boutique resort pool and architecture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 text-white text-[11px] font-medium">
                  Boutique Stays
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
