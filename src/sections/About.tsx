import React from 'react';
import { Car, Ticket, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

interface AboutProps {
  onSelectService: (service: string) => void;
}

export const About: React.FC<AboutProps> = ({ onSelectService }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story (7 cols) */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="ABOUT EASE AND TRAVEL"
              title="TRAVEL MADE EFFORTLESS"
              subtitle="Where international executive standards meet seamless ground mobility and bespoke travel concierge."
              align="left"
              className="mb-8"
            />

            <div className="space-y-5 text-slate-700 text-base md:text-lg leading-relaxed font-normal">
              <p>
                At <strong className="text-brand-navy-950 font-semibold">EASE AND TRAVEL</strong>, we believe every journey should be comfortable, convenient, and memorable. We unite a premier collection of authentic luxury vehicles with essential travel booking services to make planning your next itinerary completely effortless.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Whether you require an executive chauffeur for high-level corporate mobility, punctual airport transfers, or dedicated assistance with flight and luxury hotel reservations, EASE AND TRAVEL delivers discreet, personalized attention tailored to your exact schedule.
              </p>
            </div>

            {/* Three Service Highlights */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Service 1 */}
              <div
                onClick={() => onSelectService('Car Rental')}
                className="p-5 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-gold-500/40 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-md bg-brand-navy-900 text-brand-gold-400 flex items-center justify-center mb-3 group-hover:bg-gold-gradient group-hover:text-brand-navy-950 transition-all">
                  <Car className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-navy-950 mb-1">
                  Chauffeur Fleet
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Real executive saloons, electric flagships, luxury MPVs &amp; coaches.
                </p>
                <span className="mt-3 inline-flex items-center text-xs font-semibold text-brand-gold-700 group-hover:text-brand-gold-600 gap-1">
                  <span>Explore Fleet</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

              {/* Service 2 */}
              <div
                onClick={() => onSelectService('Ticket Booking')}
                className="p-5 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-gold-500/40 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-md bg-brand-navy-900 text-brand-gold-400 flex items-center justify-center mb-3 group-hover:bg-gold-gradient group-hover:text-brand-navy-950 transition-all">
                  <Ticket className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-navy-950 mb-1">
                  Ticket Bookings
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Domestic &amp; international flights, scenic rail &amp; modern intercity coaches.
                </p>
                <span className="mt-3 inline-flex items-center text-xs font-semibold text-brand-gold-700 group-hover:text-brand-gold-600 gap-1">
                  <span>Enquire Tickets</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

              {/* Service 3 */}
              <div
                onClick={() => onSelectService('Hotel Booking')}
                className="p-5 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-gold-500/40 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-md bg-brand-navy-900 text-brand-gold-400 flex items-center justify-center mb-3 group-hover:bg-gold-gradient group-hover:text-brand-navy-950 transition-all">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-navy-950 mb-1">
                  Hotel Bookings
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  5-star luxury resorts, executive business hotels &amp; boutique retreats.
                </p>
                <span className="mt-3 inline-flex items-center text-xs font-semibold text-brand-gold-700 group-hover:text-brand-gold-600 gap-1">
                  <span>Discover Stays</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>

            {/* Core Values checklist */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-x-8 gap-y-3">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-600" />
                <span>Verified Real Vehicles</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-600" />
                <span>Uniformed Professional Chauffeurs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-600" />
                <span>Delhi Central Mobility Concierge</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-brand-navy-950">
                <img
                  src="/assets/images/about_travel.jpg"
                  alt="Luxury executive travel experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-gold-400 block mb-1">
                    Premium Mobility &amp; Travel
                  </span>
                  <p className="font-serif text-lg leading-snug">
                    Uniting executive transportation with bespoke travel bookings.
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-brand-navy-950 text-white p-5 rounded-xl shadow-2xl border border-brand-gold-500/40 max-w-[220px]">
                <div className="text-2xl font-serif font-bold text-brand-gold-400">
                  10+ Real Models
                </div>
                <div className="text-xs text-slate-300 mt-0.5 leading-snug">
                  From executive sedans to electric flagships and luxury VIP MPVs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
