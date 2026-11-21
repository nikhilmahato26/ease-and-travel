import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BackToTop } from './components/BackToTop';
import { QuickBookingBar } from './components/QuickBookingBar';
import { PaymentModal } from './components/PaymentModal';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Fleet } from './sections/Fleet';
import { CarRental } from './sections/CarRental';
import { TicketBooking } from './sections/TicketBooking';
import { HotelBooking } from './sections/HotelBooking';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { GallerySection } from './sections/GallerySection';
import { Contact } from './sections/Contact';

export const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>("Car Rental");
  const [selectedVehicle, setSelectedVehicle] = useState<string | undefined>("Mercedes-Benz E-Class");
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromAnywhere = (serviceName: string, vehicleName?: string) => {
    setSelectedService(serviceName);
    if (vehicleName) {
      setSelectedVehicle(vehicleName);
    }
    scrollToSection('#contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800 font-sans selection:bg-brand-gold-500 selection:text-brand-navy-950">
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenBooking={() => scrollToSection('#contact')}
        onOpenPayment={() => setIsPaymentOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Cinematic Hero */}
        <Hero
          onExploreFleet={() => scrollToSection('#fleet')}
          onEnquireNow={() => scrollToSection('#contact')}
        />

        {/* Floating Quick Enquiry Bar (Mix of Happy Luxe + Better Holidays UI) */}
        <QuickBookingBar onSelectService={handleSelectServiceFromAnywhere} />

        {/* Brand Editorial & Services Highlight */}
        <About onSelectService={handleSelectServiceFromAnywhere} />

        {/* Signature Fleet Showcase (All Real Vehicles) */}
        <Fleet />

        {/* Car Rental Services & Category Matching */}
        <CarRental />

        {/* Ticket Booking Service */}
        <TicketBooking />

        {/* Hotel Booking Service */}
        <HotelBooking />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Asymmetric Lightbox Gallery */}
        <GallerySection />

        {/* Official Contact & Direct Booking Form & Payment QR */}
        <Contact
          selectedService={selectedService}
          selectedVehicle={selectedVehicle}
          onOpenPayment={() => setIsPaymentOpen(true)}
        />
      </main>

      {/* Premium Dark Navy Footer */}
      <Footer onOpenPayment={() => setIsPaymentOpen(true)} />

      {/* Official UPI Payment Barcode Modal */}
      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Floating Scroll to Top */}
      <BackToTop />
    </div>
  );
};

export default App;
