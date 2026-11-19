import React from 'react';
import { ArrowDown, MessageSquare, Compass, Shield } from 'lucide-react';
import { Button } from '../components/Button';
import { BUSINESS_CONFIG } from '../config/business';

interface HeroProps {
  onExploreFleet: () => void;
  onEnquireNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreFleet, onEnquireNow }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-brand-navy-950 pt-20">
      {/* Background Image with Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero_chauffeur.jpg"
          alt="Luxury chauffeur and premium executive mobility"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Layered overlays for flawless luxury contrast */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-brand-navy-950/60 backdrop-brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-transparent to-brand-navy-950/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center sm:text-left flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold-500/10 border border-brand-gold-500/30 text-brand-gold-300 text-xs font-semibold tracking-[0.25em] uppercase mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-400"></span>
            <span>{BUSINESS_CONFIG.eyebrow}</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.08] mb-6">
            TRAVEL IN COMFORT.<br />
            <span className="text-transparent bg-clip-text bg-gold-gradient font-medium italic">
              ARRIVE IN STYLE.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl font-light mb-8">
            {BUSINESS_CONFIG.subheading}
          </p>

          {/* Supporting Brand Label */}
          <div className="flex items-center gap-2 mb-8 text-xs tracking-[0.2em] uppercase font-semibold text-brand-gold-400">
            <Shield className="w-4 h-4 text-brand-gold-400" />
            <span>YOUR JOURNEY, OUR PRIORITY.</span>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onExploreFleet}
              icon={<Compass className="w-4 h-4" />}
            >
              Explore Our Fleet
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={onEnquireNow}
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Enquire Now
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex items-center gap-3 text-slate-400 text-xs tracking-widest uppercase mt-16">
          <button
            onClick={onExploreFleet}
            className="flex items-center gap-2 hover:text-brand-gold-400 transition-colors"
          >
            <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
              <ArrowDown className="w-3.5 h-3.5 text-brand-gold-400" />
            </div>
            <span>Scroll to Discover</span>
          </button>
        </div>
      </div>
    </section>
  );
};
