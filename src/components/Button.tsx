import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'navy' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-sm cursor-pointer select-none active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 uppercase tracking-wider gap-1.5",
    md: "text-sm px-6 py-3 uppercase tracking-wider gap-2",
    lg: "text-base px-8 py-4 uppercase tracking-widest gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary: "bg-gold-gradient text-brand-navy-950 font-semibold shadow-gold-glow hover:bg-gold-gradient-hover hover:shadow-gold-glow-lg hover:-translate-y-0.5",
    secondary: "bg-brand-navy-900 text-white border border-brand-gold-500/30 hover:border-brand-gold-400 hover:bg-brand-navy-850 hover:shadow-lg hover:-translate-y-0.5",
    outline: "bg-transparent text-brand-gold-400 border border-brand-gold-500/60 hover:bg-brand-gold-500/10 hover:border-brand-gold-400 hover:-translate-y-0.5",
    navy: "bg-brand-navy-900 text-white hover:bg-brand-navy-800 shadow-md",
    ghost: "bg-transparent text-slate-700 hover:text-brand-navy-900 hover:bg-slate-100",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
