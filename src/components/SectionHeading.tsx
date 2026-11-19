import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-semibold tracking-[0.25em] uppercase rounded-full ${
          isDark 
            ? 'text-brand-gold-400 bg-brand-gold-500/10 border border-brand-gold-500/20' 
            : 'text-brand-navy-900 bg-brand-navy-100/60 border border-brand-navy-100'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500"></span>
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight ${
        isDark ? 'text-white' : 'text-brand-navy-900'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}

      <div className={`mt-5 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[2px] w-12 bg-brand-gold-500"></div>
        <div className="h-[2px] w-3 bg-brand-gold-400/50"></div>
      </div>
    </div>
  );
};
