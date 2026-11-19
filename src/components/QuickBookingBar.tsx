import React, { useState } from 'react';
import { Car, Ticket, Hotel, ArrowRight, Calendar, MapPin, Search } from 'lucide-react';
import { VEHICLES } from '../config/vehicles';
import { createWhatsAppUrl } from '../config/business';

interface QuickBookingBarProps {
  onSelectService?: (serviceName: string, vehicle?: string) => void;
}

export const QuickBookingBar: React.FC<QuickBookingBarProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'car' | 'ticket' | 'hotel'>('car');

  // Car Rental State
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[2].name); // Default Mercedes E-Class
  const [carDate, setCarDate] = useState('');
  const [carLocation, setCarLocation] = useState('New Delhi');

  // Ticket State
  const [ticketType, setTicketType] = useState('Air Ticket');
  const [ticketOrigin, setTicketOrigin] = useState('');
  const [ticketDest, setTicketDest] = useState('');

  // Hotel State
  const [hotelCity, setHotelCity] = useState('');
  const [hotelType, setHotelType] = useState('Luxury Resort');

  const handleCarEnquiry = () => {
    let msg = `Hello EASE AND TRAVEL, I am interested in renting the ${selectedVehicle}.`;
    if (carLocation) msg += ` Location: ${carLocation}.`;
    if (carDate) msg += ` Date: ${carDate}.`;
    msg += ` Please share availability and rental details.`;
    
    if (onSelectService) {
      onSelectService("Car Rental", selectedVehicle);
    }
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  const handleTicketEnquiry = () => {
    let msg = `Hello EASE AND TRAVEL, I would like assistance with ${ticketType} booking.`;
    if (ticketOrigin && ticketDest) msg += ` Route: ${ticketOrigin} to ${ticketDest}.`;
    msg += ` Please contact me with details.`;

    if (onSelectService) {
      onSelectService("Ticket Booking");
    }
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  const handleHotelEnquiry = () => {
    let msg = `Hello EASE AND TRAVEL, I would like assistance with ${hotelType} reservation.`;
    if (hotelCity) msg += ` Destination: ${hotelCity}.`;
    msg += ` Please share available options and details.`;

    if (onSelectService) {
      onSelectService("Hotel Booking");
    }
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="relative z-30 max-w-5xl mx-auto px-4 -mt-10 sm:-mt-14 mb-8">
      <div className="bg-brand-navy-950/95 backdrop-blur-xl rounded-xl p-4 sm:p-6 shadow-2xl border border-brand-gold-500/30 text-white">
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
            <span>Luxury Car Rentals</span>
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
            <span>Ticket Bookings</span>
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
            <span>Hotel Bookings</span>
          </button>
        </div>

        {/* Tab 1: Car Rental Enquiry */}
        {activeTab === 'car' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-brand-gold-300 font-semibold mb-1">
                Select Vehicle
              </label>
              <div className="relative">
                <select
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  className="w-full bg-brand-navy-900 border border-white/20 rounded-md px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-gold-400 cursor-pointer"
                >
                  {VEHICLES.map((v) => (
                    <option key={v.id} value={v.name} className="bg-brand-navy-900 text-white">
                      {v.name} ({v.category})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-brand-gold-300 font-semibold mb-1">
                City / Pickup Location
              </label>
              <div className="relative flex items-center">
                <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  value={carLocation}
                  onChange={(e) => setCarLocation(e.target.value)}
                  placeholder="e.g. New Delhi / Airport"
                  className="w-full bg-brand-navy-900 border border-white/20 rounded-md pl-9 pr-3 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-brand-gold-300 font-semibold mb-1">
                Travel Date (Optional)
              </label>
              <div className="relative flex items-center">
                <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="date"
                  value={carDate}
                  onChange={(e) => setCarDate(e.target.value)}
                  className="w-full bg-brand-navy-900 border border-white/20 rounded-md pl-9 pr-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-gold-400"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleCarEnquiry}
                className="w-full bg-gold-gradient hover:bg-gold-gradient-hover text-brand-navy-950 font-bold uppercase tracking-wider text-xs sm:text-sm py-2.5 px-4 rounded-md shadow-gold-glow flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>Check &amp; Enquire</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Ticket Booking Enquiry */}
        {activeTab === 'ticket' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-brand-gold-300 font-semibold mb-1">
                Ticketing Type
              </label>
              <select
                value={ticketType}
                onChange={(e) => setTicketType(e.target.value)}
                className="w-full bg-brand-navy-900 border border-white/20 rounded-md px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-gold-400 cursor-pointer"
              >
                <option value="Air Ticket" className="bg-brand-navy-900">Air Flights (Domestic / Int&apos;l)</option>
                <option value="Train Ticket" className="bg-brand-navy-900">Train / Scenic Rail</option>
                <option value="Bus Ticket" className="bg-brand-navy-900">Executive Intercity Bus</option>
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
                placeholder="e.g. Mumbai, Goa, London"
                className="w-full bg-brand-navy-900 border border-white/20 rounded-md px-3 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold-400"
              />
            </div>

            <div>
              <button
                type="button"
                onClick={handleTicketEnquiry}
                className="w-full bg-gold-gradient hover:bg-gold-gradient-hover text-brand-navy-950 font-bold uppercase tracking-wider text-xs sm:text-sm py-2.5 px-4 rounded-md shadow-gold-glow flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>Enquire Tickets</span>
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
                Accommodation Style
              </label>
              <select
                value={hotelType}
                onChange={(e) => setHotelType(e.target.value)}
                className="w-full bg-brand-navy-900 border border-white/20 rounded-md px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-gold-400 cursor-pointer"
              >
                <option value="5-Star Luxury Resort" className="bg-brand-navy-900">5-Star Luxury Resort</option>
                <option value="Executive Business Hotel" className="bg-brand-navy-900">Executive Business Hotel</option>
                <option value="Boutique & Heritage Villa" className="bg-brand-navy-900">Boutique &amp; Heritage Villa</option>
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
                placeholder="e.g. New Delhi, Udaipur, Dubai, Bali"
                className="w-full bg-brand-navy-900 border border-white/20 rounded-md px-3 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold-400"
              />
            </div>

            <div>
              <button
                type="button"
                onClick={handleHotelEnquiry}
                className="w-full bg-gold-gradient hover:bg-gold-gradient-hover text-brand-navy-950 font-bold uppercase tracking-wider text-xs sm:text-sm py-2.5 px-4 rounded-md shadow-gold-glow flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>Enquire Hotels</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-2.5">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Direct WhatsApp Response &bull; +91 8750330196
          </span>
          <a
            href="#contact"
            className="text-brand-gold-400 hover:underline flex items-center gap-1 font-medium"
          >
            <Search className="w-3 h-3" />
            <span>Open Detailed Booking Form</span>
          </a>
        </div>
      </div>
    </div>
  );
};
