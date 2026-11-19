import React from 'react';
import { ArrowRight, ShieldCheck, Briefcase, Crown, Armchair, Compass, Users, Zap } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { CAR_RENTAL_SERVICE } from '../config/services';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Crown: <Crown className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Armchair: <Armchair className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />
};

export const CarRental: React.FC = () => {
  const scrollToFleet = () => {
    const el = document.querySelector('#fleet');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="car-rentals" className="py-20 md:py-28 bg-brand-navy-950 text-white relative overflow-hidden">
      {/* Decorative ambient gold glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="TAILORED MOBILITY SOLUTIONS"
          title={CAR_RENTAL_SERVICE.title}
          subtitle={CAR_RENTAL_SERVICE.description}
          align="center"
          theme="dark"
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CAR_RENTAL_SERVICE.categories.map((cat, index) => (
            <div
              key={index}
              className="bg-brand-navy-900/80 border border-white/10 hover:border-brand-gold-500/40 rounded-lg p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-brand-navy-950 border border-brand-gold-500/30 text-brand-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {iconMap[cat.icon]}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-brand-gold-300 transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                    Featured Models:
                  </span>
                  <span className="text-xs font-semibold text-brand-gold-400">
                    {cat.vehicleExamples}
                  </span>
                </div>

                <button
                  onClick={scrollToFleet}
                  className="p-2 rounded-full bg-white/5 text-slate-300 group-hover:text-brand-navy-950 group-hover:bg-brand-gold-500 transition-all"
                  aria-label={`View ${cat.title} vehicles`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Fleet */}
        <div className="mt-14 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToFleet}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Find Your Vehicle
          </Button>
        </div>
      </div>
    </section>
  );
};
