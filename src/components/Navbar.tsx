import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { Button } from './Button';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingClick = () => {
    setMobileMenuOpen(false);
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-navy-950/95 backdrop-blur-md shadow-luxury py-3 border-b border-brand-gold-500/20'
          : 'bg-gradient-to-b from-brand-navy-950/90 via-brand-navy-950/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="EASE AND TRAVEL - Home"
          >
            <div className="relative overflow-hidden rounded-md bg-white p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105 border border-brand-gold-500/30">
              <img
                src="/assets/logo/logo.jpg"
                alt="EASE AND TRAVEL Logo"
                className="h-9 sm:h-11 md:h-12 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-brand-gold-300 transition-colors">
                EASE AND TRAVEL
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-brand-gold-400 font-medium">
                Luxury Mobility
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {BUSINESS_CONFIG.navLinks.slice(0, 5).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-xs xl:text-sm font-medium tracking-wider text-slate-200 hover:text-brand-gold-400 uppercase transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="px-3 py-2 text-xs xl:text-sm font-medium tracking-wider text-slate-200 hover:text-brand-gold-400 uppercase transition-colors duration-200 relative group"
            >
              Contact
            </a>
          </nav>

          {/* Actions: Phone & Book CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="flex items-center gap-2 text-slate-200 hover:text-brand-gold-400 transition-colors text-xs font-semibold tracking-wider group"
              title="Call EASE AND TRAVEL"
            >
              <div className="w-8 h-8 rounded-full bg-brand-gold-500/10 border border-brand-gold-500/30 flex items-center justify-center text-brand-gold-400 group-hover:bg-brand-gold-500 group-hover:text-brand-navy-950 transition-all">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="hidden xl:inline">{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>

            <Button
              variant="primary"
              size="sm"
              onClick={handleBookingClick}
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Book Your Ride
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="p-2 text-brand-gold-400 rounded-md hover:bg-white/10"
              aria-label="Call EASE AND TRAVEL"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-md hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-brand-navy-950/98 border-b border-brand-gold-500/20 backdrop-blur-xl ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="flex flex-col space-y-3 pt-2">
            {BUSINESS_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-medium tracking-wider text-slate-200 hover:text-brand-gold-400 uppercase py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-brand-gold-500/20 flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="flex items-center gap-3 text-slate-200 text-sm font-medium"
            >
              <div className="w-8 h-8 rounded-full bg-brand-gold-500/20 text-brand-gold-400 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span>{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>

            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={handleBookingClick}
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Book Your Ride
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
