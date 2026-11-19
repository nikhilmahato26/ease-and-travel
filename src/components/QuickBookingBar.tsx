import React, { useState } from 'react';
import { Car, Ticket, Hotel, ArrowRight, MapPin, Search, ShieldCheck } from 'lucide-react';
import { VEHICLES } from '../config/vehicles';
import { createWhatsAppUrl } from '../config/business';

interface QuickBookingBarProps {
  onSelectService?: (serviceName: string, vehicle?: string) => void;
}

export const QuickBookingBar: React.FC<QuickBookingBarProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'car' | 'ticket' | 'hotel'>('car');

  // Car Rental State
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[2].name); // Default Mercedes E-Class
  const [carTripType, setCarTripType] = useState('Airport Transfer (Meet & Greet)');
  const [carLocation, setCarLocation] = useState('New Delhi / IGI Airport');

  // Ticket State
  const [ticketType, setTicketType] = useState('Air Ticket (Business / Economy)');
  const [ticketOrigin, setTicketOrigin] = useState('');
  const [ticketDest, setTicketDest] = useState('');

  // Hotel State
  const [hotelCity, setHotelCity] = useState('');
  const [hotelType, setHotelType] = useState('5-Star Luxury Resort');

  const handleCarEnquiry = () => {
    let msg = `Hello EASE AND TRAVEL, I am interested in reserving the ${selectedVehicle}.`;
    msg += ` Trip Type: ${carTripType}.`;
    if (carLocation) msg += ` Location: ${carLocation}.`;
    msg += ` Please share availability, chauffeur options, and quotation.`;
    
    if (onSelectService) {
      onSelectService("Car Rental", selectedVehicle);
    }
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  const handleTicketEnquiry = () => {
    let msg = `Hello EASE AND TRAVEL, I would like assistance with ${ticketType} booking.`;
    if (ticketOrigin && ticketDest) msg += ` Route: ${ticketOrigin} to ${ticketDest}.`;
    msg += ` Kindly share available flights/trains and quotation.`;

    if (onSelectService) {
      onSelectService("Ticket Booking");
    }
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  const handleHotelEnquiry = () => {
    let msg = `Hello EASE AND TRAVEL, I would like assistance with ${hotelType} reservation.`;
    if (hotelCity) msg += ` Destination: ${hotelCity}.`;
    msg += ` Kindly share curated 5-star properties and reservation details.`;

    if (onSelectService) {
      onSelectService("Hotel Booking");
    }
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="relative z-30 max-w-5xl mx-auto px-4 -mt-10 sm:-mt-14 mb-8">
      <div className="bg-brand-navy-950/98 backdrop-blur-xl rounded-xl p-4 sm:p-6 shadow-2xl border border-brand-gold-500/30 text-white">
        {/* Service Selector Tabs */}
        <div className="flex border-b border-white/10 pb-3 mb-5 overflow-x-auto gap-2 sm:gap-4 no-scrollbar">
          <button
            onClick={() => setActiveTab('car')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
              activeTab === 'car'
                ? 'bg-brand-gold-500 text-brand-navy-950 shadow-gold-glow'
                : 'text-slate-300 hover:text-brand-gold-400 hover:bg-white/5'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Executive Chauffeur Fleet</span>
          </button>

          <button
            onClick={() => setActiveTab('ticket')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
              activeTab === 'ticket'
                ? 'bg-brand-gold-500 text-brand-navy-950 shadow-gold-glow'
                : 'text-slate-300 hover:text-brand-gold-400 hover:bg-white/5'
            }`}
          >
            <Ticket className="w-4 h-4" />
            <span>Air &amp; Rail Ticketing</span>
          </button>

          <button
            onClick={() => setActiveTab('hotel')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
              activeTab === 'hotel'
                ? 'bg-brand-gold-500 text-brand-navy-950 shadow-gold-glow'
                : 'text-slate-300 hover:text-brand-gold-400 hover:bg-white/5'
            }`}
          >
            <Hotel className="w-4 h-4" />
            <span>5-Star Hotel Stays</span>
          </button>
        </div>

        {/* Tab 1: Car Rental Enquiry */}
        {activeTab === 'car' && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-brand-gold-300 font-semibold mb-1">
                  Select Chauffeur Vehicle
                </label>
                <select
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  className="w-full bg-brand-navy-900 border border-white/20 rounded-md px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-gold-400 cursor-pointer"
                >
                  {VEHICLES.map((v) => (
                    <option key={v.id} value={v.name} className="bg-brand-navy-900 text-white">
                      {v.name} &bull; {v.category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-brand-gold-300 font-semibold mb-1">
                  Trip Requirement
                </label>
                <select
                  value={carTripType}
                  onChange={(e) => setCarTripType(e.target.value)}
                  className="w-full bg-brand-navy-900 border border-white/20 rounded-md px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-gold-400 cursor-pointer"
                >
                  <option value="Airport Transfer (Meet & Greet)" className="bg-brand-navy-900">Airport Transfer (Meet &amp; Greet)</option>
                  <option value="Local Executive Chauffeur (8h/80km)" className="bg-brand-navy-900">Local Executive Chauffeur (8h/80km)</option>
                  <option value="Intercity Outstation Journey" className="bg-brand-navy-900">Intercity Outstation Journey</option>
                  <option value="VIP Event & Wedding Mobility" className="bg-brand-navy-900">VIP Event &amp; Wedding Mobility</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-brand-gold-300 font-semibold mb-1">
                  Pickup Hub / City
                </label>
                <div className="relative flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
                  <input
                    type="text"
                    value={carLocation}
                    onChange={(e) => setCarLocation(e.target.value)}
                    placeholder="e.g. New Delhi / IGI T3"
                    className="w-full bg-brand-navy-900 border border-white/20 rounded-md pl-9 pr-3 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold-400"
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleCarEnquiry}
                  className="w-full bg-gold-gradient hover:bg-gold-gradient-hover text-brand-navy-950 font-bold uppercase tracking-wider text-xs sm:text-sm py-2.5 px-4 rounded-md shadow-gold-glow flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-400 pt-1">
              <span className="flex items-center gap-1 text-brand-gold-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Uniformed Professional Chauffeurs</span>
              </span>
              <span>&bull;</span>
              <span>Complimentary Bottled Water &amp; Chilled Air-Conditioning</span>
            </div>
          </div>
        )}

        {/* Tab 2: Ticket Booking Enquiry */}
        {activeTab === 'ticket' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-brand-gold-300 font-semibold mb-1">
                Ticketing Concierge
              </label>
              <select
                value={ticketType}
                onChange={(e) => setTicketType(e.target.value)}
                className="w-full bg-brand-navy-900 border border-white/20 rounded-md px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-gold-400 cursor-pointer"
              >
                <option value="Air Ticket (Domestic / International)" className="bg-brand-navy-900">Air Flights (Domestic / Int&apos;l)</option>
                <option value="Executive Train Ticket (Chair Car / Sleeper)" className="bg-brand-navy-900">Executive Train / Scenic Rail</option>
                <option value="Intercity Luxury Coach" className="bg-brand-navy-900">Intercity Luxury Coach</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-brand-gold-300 font-semibold mb-1">
                Departure City
              </label>
              <input
                type="text"
                value={ticketOrigin}
                onChange={(e) => setTicketOrigin(e.target.value)}
                placeholder="e.g. New Delhi (DEL)"
                className="w-full bg-brand-navy-900 border border-white/20 rounded-md px-3 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold-400"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-brand-gold-300 font-semibold mb-1">
                Destination
              </label>
              <input
                type="text"
                value={ticketDest}
                onChange={(e) => setTicketDest(e.target.value)}
                placeholder="e.g. Mumbai, Dubai, London"
                className="w-full bg-brand-navy-900 border border-white/20 rounded-md px-3 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold-400"
              />
            </div>

            <div>
              <button
                type="button"
                onClick={handleTicketEnquiry}
                className="w-full bg-gold-gradient hover:bg-gold-gradient-hover text-brand-navy-950 font-bold uppercase tracking-wider text-xs sm:text-sm py-2.5 px-4 rounded-md shadow-gold-glow flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>Request Ticketing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Hotel Booking Enquiry */}
        {activeTab === 'hotel' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-brand-gold-300 font-semibold mb-1">
                Hospitality Tier
              </label>
              <select
                value={hotelType}
                onChange={(e) => setHotelType(e.target.value)}
                className="w-full bg-brand-navy-900 border border-white/20 rounded-md px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-gold-400 cursor-pointer"
              >
                <option value="5-Star Luxury Resort" className="bg-brand-navy-900">5-Star Luxury Resort</option>
                <option value="Executive Business Hotel" className="bg-brand-navy-900">Executive Business Hotel</option>
                <option value="Heritage Palace & Boutique Villa" className="bg-brand-navy-900">Heritage Palace &amp; Villa</option>
              </select>
            </div>

            <div className="lg:col-span-2">
              <label className="block text-[11px] uppercase tracking-wider text-brand-gold-300 font-semibold mb-1">
                Destination City / Region
              </label>
              <input
                type="text"
                value={hotelCity}
                onChange={(e) => setHotelCity(e.target.value)}
                placeholder="e.g. New Delhi, Udaipur, Goa, Dubai"
                className="w-full bg-brand-navy-900 border border-white/20 rounded-md px-3 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold-400"
              />
            </div>

            <div>
              <button
                type="button"
                onClick={handleHotelEnquiry}
                className="w-full bg-gold-gradient hover:bg-gold-gradient-hover text-brand-navy-950 font-bold uppercase tracking-wider text-xs sm:text-sm py-2.5 px-4 rounded-md shadow-gold-glow flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>Request Stays</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-2.5">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Direct WhatsApp Concierge &bull; +91 8750330196
          </span>
          <a
            href="#contact"
            className="text-brand-gold-400 hover:underline flex items-center gap-1 font-medium"
          >
            <Search className="w-3 h-3" />
            <span>Open Detailed Itinerary Form</span>
          </a>
        </div>
      </div>
    </div>
  );
};
