import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../config/services';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl transition-all">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2.5 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 p-3 text-slate-200 hover:text-white bg-white/10 hover:bg-brand-gold-500 hover:text-brand-navy-950 rounded-full transition-all border border-white/20 shadow-lg"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 p-3 text-slate-200 hover:text-white bg-white/10 hover:bg-brand-gold-500 hover:text-brand-navy-950 rounded-full transition-all border border-white/20 shadow-lg"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center">
        <div className="relative overflow-hidden rounded-lg shadow-2xl max-h-[72vh] flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-md"
          />
        </div>

        {/* Caption bar */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="flex items-center justify-center gap-3 mb-1">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-gold-400 bg-brand-gold-500/10 px-3 py-0.5 rounded-full border border-brand-gold-500/20">
              {currentItem.category}
            </span>
            <span className="text-xs text-slate-500">
              {currentIndex + 1} of {items.length}
            </span>
          </div>
          <h4 className="font-serif text-lg sm:text-xl font-medium text-white">
            {currentItem.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
