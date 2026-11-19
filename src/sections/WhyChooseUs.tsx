import React from 'react';
import { CarFront, Compass, Hotel, PhoneCall, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { WHY_CHOOSE_US } from '../config/services';

const iconMap: Record<string, React.ReactNode> = {
  CarFront: <CarFront className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  Hotel: <Hotel className="w-6 h-6" />,
  PhoneCall: <PhoneCall className="w-6 h-6" />
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF9F6] border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHY CHOOSE EASE AND TRAVEL"
          title="THE EASE IN EVERY JOURNEY"
          subtitle="A dedicated approach to mobility and travel planning built around personal comfort, reliability, and clear communication."
          align="center"
        />

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-gold-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-navy-950 text-brand-gold-400 flex items-center justify-center group-hover:bg-gold-gradient group-hover:text-brand-navy-950 transition-all">
                    {iconMap[item.icon]}
                  </div>
                  <span className="text-2xl font-serif text-slate-300 group-hover:text-brand-gold-400 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-brand-navy-950 mb-3 group-hover:text-brand-navy-800 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-brand-gold-700 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Dedicated Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
