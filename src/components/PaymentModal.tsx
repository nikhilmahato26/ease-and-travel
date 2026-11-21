import React, { useEffect, useCallback } from 'react';
import { X, QrCode, ShieldCheck, Download, MessageSquare, Copy, Check } from 'lucide-react';
import { createWhatsAppUrl } from '../config/business';
import { Button } from './Button';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen) return null;

  const paymentWhatsappUrl = createWhatsAppUrl(
    "Hello EASE AND TRAVEL, I have completed the advance payment via PhonePe QR for my booking. Here is my transaction screenshot."
  );

  const handleCopyUpi = () => {
    navigator.clipboard.writeText("8750330196@ybl");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-brand-navy-950 border border-brand-gold-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-white">
        {/* Top Gold Accent */}
        <div className="h-1.5 w-full bg-gold-gradient" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/10"
          aria-label="Close Payment Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-500/10 border border-brand-gold-500/30 text-brand-gold-300 text-xs font-semibold tracking-widest uppercase mb-3">
              <QrCode className="w-3.5 h-3.5" />
              <span>Official UPI Payment Desk</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Scan &amp; Pay via UPI
            </h3>
            <p className="text-xs text-slate-300 mt-1.5 max-w-sm mx-auto">
              Scan using PhonePe, Google Pay, Paytm, or any UPI banking app to secure your reservation.
            </p>
          </div>

          {/* QR Code Container */}
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-2xl max-w-xs mx-auto border-2 border-brand-gold-500/40 relative group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/assets/payment/phonepe-qr.jpg"
                alt="PhonePe Payment Barcode QR - ABHISHEK BASOYA"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>

            {/* Verified Account Banner */}
            <div className="mt-3 pt-3 border-t border-slate-100 text-center">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 block font-medium">
                Verified Account Holder
              </span>
              <strong className="text-sm font-bold text-slate-900 tracking-wide block">
                ABHISHEK BASOYA
              </strong>
              <button
                type="button"
                onClick={handleCopyUpi}
                className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-mono transition-colors"
                title="Click to copy UPI ID"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-500" />}
                <span>{copied ? "UPI ID Copied!" : "8750330196@ybl"}</span>
              </button>
            </div>
          </div>

          {/* Accepted payment logos text */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-300">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">PhonePe</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Google Pay</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Paytm</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">BHIM UPI</span>
          </div>

          {/* 3 Step Instructions */}
          <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 space-y-2 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-brand-gold-500 text-brand-navy-950 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                1
              </span>
              <span>Scan QR code with PhonePe or any UPI application.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-brand-gold-500 text-brand-navy-950 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                2
              </span>
              <span>Enter the confirmed reservation token or advance amount.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-brand-gold-500 text-brand-navy-950 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                3
              </span>
              <span>Share screenshot on WhatsApp (+91 8750330196) for instant booking receipt.</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="/assets/payment/phonepe-qr-full.jpg"
              download="PhonePe-QR-EaseAndTravel.jpg"
              className="flex-1 py-3 px-4 rounded bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-white/20"
            >
              <Download className="w-4 h-4 text-brand-gold-400" />
              <span>Save QR Code</span>
            </a>

            <a
              href={paymentWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="primary"
                size="md"
                fullWidth
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Send Receipt
              </Button>
            </a>
          </div>

          {/* Security guarantee note */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Secure Official Business UPI Transaction</span>
          </div>
        </div>
      </div>
    </div>
  );
};
