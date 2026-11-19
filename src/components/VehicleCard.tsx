import React from 'react';
import { MessageSquare, ArrowRight, CheckCircle2, Users, Briefcase } from 'lucide-react';
import { Vehicle, getVehicleWhatsAppMessage } from '../config/vehicles';
import { createWhatsAppUrl } from '../config/business';
import { Button } from './Button';

interface VehicleCardProps {
  vehicle: Vehicle;
  onOpenDetails: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onOpenDetails }) => {
  const whatsappUrl = createWhatsAppUrl(getVehicleWhatsAppMessage(vehicle.name));

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-navy-card hover:shadow-luxury transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5">
      {/* Top Image Banner */}
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer" onClick={() => onOpenDetails(vehicle)}>
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/85 via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-brand-navy-950/90 text-brand-gold-300 backdrop-blur-md border border-brand-gold-500/30">
              {vehicle.category}
            </span>
            {vehicle.badge && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-gold-500 text-brand-navy-950 shadow-sm">
                {vehicle.badge}
              </span>
            )}
          </div>

          {/* Quick interior peek button on hover */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(vehicle);
            }}
            className="absolute bottom-3 right-3 text-[11px] font-medium text-white/95 bg-brand-navy-950/85 hover:bg-brand-navy-950 px-3 py-1 rounded backdrop-blur-md opacity-90 transition-all border border-brand-gold-500/30"
          >
            Cabin &amp; Specs
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <div className="mb-2">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-gold-700 block">
              {vehicle.tag}
            </span>
            <h3 className="font-serif text-2xl font-bold text-brand-navy-950 tracking-tight mt-1 group-hover:text-brand-navy-800 transition-colors">
              {vehicle.name}
            </h3>
          </div>

          {/* Executive Capacity & Luggage Badges */}
          <div className="flex items-center gap-4 py-2 border-y border-slate-100 my-3 text-[11px] text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-brand-gold-600" />
              <span>{vehicle.capacity}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-brand-gold-600" />
              <span>{vehicle.luggage}</span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
            {vehicle.description}
          </p>

          {/* Feature Highlights */}
          <div className="space-y-1.5 mb-2">
            {vehicle.features.slice(0, 2).map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold-600 shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-2.5">
        <button
          type="button"
          onClick={() => onOpenDetails(vehicle)}
          className="text-xs uppercase tracking-wider font-semibold py-2.5 px-3 rounded-sm border border-slate-300 text-slate-700 hover:text-brand-navy-900 hover:border-brand-navy-900 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1"
        >
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            variant="primary"
            size="sm"
            fullWidth
            icon={<MessageSquare className="w-3.5 h-3.5" />}
          >
            Reserve
          </Button>
        </a>
      </div>
    </div>
  );
};
