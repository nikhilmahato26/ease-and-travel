import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Lightbox } from '../components/Lightbox';
import { GALLERY_ITEMS, GalleryItem } from '../config/services';

const GALLERY_CATEGORIES = [
  'All',
  'Luxury Sedans',
  'Executive Travel',
  'Luxury MPVs',
  'Premium SUVs',
  'Hotel Experiences',
  'Travel Experiences'
] as const;

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-brand-navy-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="VISUAL SHOWCASE"
          title="EXPERIENCES IN FOCUS"
          subtitle="A glimpse into the luxury automotive fleet, travel environments, and accommodation styles curated by EASE AND TRAVEL."
          align="center"
          theme="dark"
        />

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 overflow-x-auto pb-2">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-brand-gold-500 text-brand-navy-950 font-bold shadow-gold-glow'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-brand-navy-900 border border-white/10 cursor-pointer shadow-lg hover:border-brand-gold-500/50 transition-all duration-500 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/90 via-brand-navy-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded bg-black/50 text-brand-gold-400 border border-brand-gold-500/20 backdrop-blur-sm">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-brand-gold-400" />
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-brand-gold-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-500 mt-10">
          * Representative visual imagery illustrating fleet category styling and travel services.
        </p>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
};
