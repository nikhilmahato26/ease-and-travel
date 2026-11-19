import React, { useState } from 'react';
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
          eyebrow="SIGNATURE FLEET COLLECTION"
          title="CHOOSE YOUR WAY TO TRAVEL"
          subtitle="Discover our selection of premium vehicles designed for different travel preferences and experiences."
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
                  ? 'bg-brand-navy-950 text-white shadow-md border border-brand-navy-950'
                  : 'bg-slate-100 text-slate-600 hover:text-brand-navy-950 hover:bg-slate-200 border border-transparent'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onOpenDetails={(v) => setActiveModalVehicle(v)}
            />
          ))}
        </div>

        {/* Fleet Section Note */}
        <div className="mt-14 p-5 rounded-lg bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            All vehicles are maintained to premier cleanliness and mechanical standards. Availability, rental durations, and bespoke itineraries are confirmed directly upon enquiry with the EASE AND TRAVEL desk.
          </p>
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
