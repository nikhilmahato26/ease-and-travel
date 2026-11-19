import React, { useState } from 'react';
import { Clock, UserCheck, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { VehicleCard } from '../components/VehicleCard';
import { VehicleModal } from '../components/VehicleModal';
import { VEHICLES, VEHICLE_CATEGORIES, Vehicle } from '../config/vehicles';

export const Fleet: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalVehicle, setActiveModalVehicle] = useState<Vehicle | null>(null);

  const filteredVehicles = selectedCategory === 'all'
    ? VEHICLES
    : VEHICLES.filter((v) => v.filterCategories.includes(selectedCategory as any));

  return (
    <section id="fleet" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="AUTHENTIC SIGNATURE FLEET"
          title="CHOOSE YOUR WAY TO TRAVEL"
          subtitle="Explore our verified fleet of executive saloons, pure-electric grand tourers, VIP luxury MPVs, and passenger coaches. Every vehicle is maintained to impeccable cleanliness and mechanical standards."
          align="center"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
          {VEHICLE_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-brand-navy-950 text-white shadow-md border border-brand-navy-950 font-bold'
                  : 'bg-slate-100 text-slate-600 hover:text-brand-navy-950 hover:bg-slate-200 border border-transparent'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onOpenDetails={(v) => setActiveModalVehicle(v)}
            />
          ))}
        </div>

        {/* Fleet Chauffeur Standards Bar */}
        <div className="mt-14 p-6 rounded-xl bg-slate-50 border border-slate-200 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="flex items-start gap-2.5">
            <UserCheck className="w-4 h-4 text-brand-gold-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-brand-navy-950 block font-semibold">Uniformed Chauffeurs</strong>
              Experienced, background-verified professionals with city route mastery.
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-brand-gold-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-brand-navy-950 block font-semibold">Live Flight Monitoring</strong>
              Complimentary wait time and automated adjustment for airport arrivals.
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-brand-gold-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-brand-navy-950 block font-semibold">Executive Amenities</strong>
              Chilled mineral water, sanitized leather cabin, and mobile charging ports.
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Detail Modal */}
      <VehicleModal
        vehicle={activeModalVehicle}
        isOpen={!!activeModalVehicle}
        onClose={() => setActiveModalVehicle(null)}
      />
    </section>
  );
};
