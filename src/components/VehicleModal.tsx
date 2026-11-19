import React, { useState } from 'react';
import { X, MessageSquare, Check, Sparkles, Image as ImageIcon, Users, Briefcase, ShieldCheck } from 'lucide-react';
import { Vehicle, getVehicleWhatsAppMessage } from '../config/vehicles';
import { createWhatsAppUrl } from '../config/business';
import { Button } from './Button';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VehicleModal: React.FC<VehicleModalProps> = ({ vehicle, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'exterior' | 'interior'>('exterior');

  if (!isOpen || !vehicle) return null;

  const currentImage = activeTab === 'exterior' ? vehicle.image : vehicle.interiorImage;
  const whatsappUrl = createWhatsAppUrl(getVehicleWhatsAppMessage(vehicle.name));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-brand-navy-950 border border-brand-gold-500/30 rounded-lg shadow-2xl overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 bg-brand-navy-900 flex flex-col justify-between p-6 border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold-400 bg-brand-gold-500/10 px-3 py-1 rounded-full border border-brand-gold-500/20">
                  {vehicle.category}
                </span>

                {/* View Switcher: Exterior vs Interior */}
                <div className="flex bg-black/50 p-1 rounded-md border border-white/10 text-xs">
                  <button
                    onClick={() => setActiveTab('exterior')}
                    className={`px-3 py-1 rounded transition-colors font-medium flex items-center gap-1.5 ${
                      activeTab === 'exterior'
                        ? 'bg-brand-gold-500 text-brand-navy-950 shadow-sm font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Real Exterior</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('interior')}
                    className={`px-3 py-1 rounded transition-colors font-medium flex items-center gap-1.5 ${
                      activeTab === 'interior'
                        ? 'bg-brand-gold-500 text-brand-navy-950 shadow-sm font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Executive Cabin</span>
                  </button>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-black/60 border border-white/10 group">
                <img
                  src={currentImage}
                  alt={`${vehicle.name} - ${activeTab === 'exterior' ? 'Exterior Profile' : 'Executive Cabin'}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm px-3 py-1 rounded text-[11px] text-slate-200 border border-white/10">
                  {activeTab === 'exterior' ? 'Official Exterior Profile' : 'Authentic Executive Seating & Cockpit'}
                </div>
              </div>
            </div>

            {/* Chauffeur Service Standard Guarantee in Modal */}
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5 text-brand-gold-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Sanitized &bull; Flight-Tracked &bull; Chauffeur-Driven</span>
              </div>
              <span className="text-slate-500">New Delhi Mobility Desk</span>
            </div>
          </div>

          {/* Details & CTA (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-brand-navy-950">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                {vehicle.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-brand-gold-400 font-medium mb-3">
                {vehicle.tag}
              </p>

              {/* Seating & Luggage specs */}
              <div className="flex items-center gap-4 py-2.5 px-3 rounded bg-white/5 border border-white/10 mb-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-brand-gold-400" />
                  <span>{vehicle.capacity}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-brand-gold-400" />
                  <span>{vehicle.luggage}</span>
                </div>
              </div>

              <div className="h-[1px] w-12 bg-brand-gold-500/50 mb-4" />

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {vehicle.description}
              </p>

              {/* Key Highlights */}
              <div className="mb-5">
                <h4 className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold mb-2.5">
                  Executive Cabin Amenities
                </h4>
                <div className="space-y-2">
                  {vehicle.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-brand-gold-500/20 text-brand-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Experience */}
              <div className="p-3 rounded bg-white/5 border border-white/10 mb-6">
                <div className="text-[10px] uppercase tracking-wider text-brand-gold-400 font-semibold mb-1">
                  Ideal Itinerary
                </div>
                <div className="text-xs text-slate-300">
                  {vehicle.idealFor}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Reserve on WhatsApp
                </Button>
              </a>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Direct quotation from the EASE AND TRAVEL desk (+91 8750330196)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
