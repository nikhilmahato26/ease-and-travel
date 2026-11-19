import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MessageSquare, CheckCircle, AlertCircle, Loader2, Sparkles, ShieldCheck } from 'lucide-react';
import { enquiryFormSchema, EnquiryFormData, serviceOptions, vehicleOptions, tripTypeOptions } from '../types';
import { BUSINESS_CONFIG, createWhatsAppUrl } from '../config/business';
import { Button } from './Button';

interface EnquiryFormProps {
  initialService?: string;
  initialVehicle?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialService = "Car Rental",
  initialVehicle,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      serviceRequired: (initialService as any) || "Car Rental",
      tripType: "Airport Transfer (Meet & Greet)",
      vehicleSelection: initialVehicle || "Mercedes-Benz E-Class",
      travelDate: "",
      pickupLocation: "",
      destination: "",
      message: ""
    }
  });

  const selectedService = watch("serviceRequired");

  useEffect(() => {
    if (initialService) {
      setValue("serviceRequired", initialService as any);
    }
    if (initialVehicle) {
      setValue("vehicleSelection", initialVehicle);
    }
  }, [initialService, initialVehicle, setValue]);

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);

    // Simulate brief preparation delay
    await new Promise((resolve) => setTimeout(resolve, 400));

    // Construct structured WhatsApp message
    let lines = [
      `*OFFICIAL RESERVATION ENQUIRY - EASE AND TRAVEL*`,
      `------------------------------------------------`,
      `*Client Name:* ${data.fullName}`,
      `*Contact:* ${data.phone}`,
    ];

    if (data.email) {
      lines.push(`*Email:* ${data.email}`);
    }

    lines.push(`*Service Category:* ${data.serviceRequired}`);

    if (data.tripType) {
      lines.push(`*Trip Requirement:* ${data.tripType}`);
    }

    if (data.serviceRequired === "Car Rental" && data.vehicleSelection && data.vehicleSelection !== "Not Applicable") {
      lines.push(`*Requested Fleet Model:* ${data.vehicleSelection}`);
    }

    if (data.travelDate) {
      lines.push(`*Scheduled Date:* ${data.travelDate}`);
    }

    if (data.pickupLocation) {
      lines.push(`*Origin / Pickup Hub:* ${data.pickupLocation}`);
    }

    if (data.destination) {
      lines.push(`*Destination / Drop:* ${data.destination}`);
    }

    if (data.message) {
      lines.push(`*Specific Requirements:* ${data.message}`);
    }

    lines.push(`------------------------------------------------`);
    lines.push(`_Kindly confirm vehicle availability, chauffeur assignment, and quotation._`);

    const finalMessage = lines.join('\n');
    const whatsappUrl = createWhatsAppUrl(finalMessage);

    setIsSubmitting(false);
    setSubmissionSuccess("Your enquiry is formatted and ready. Continue in WhatsApp to receive your official quotation.");

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-luxury border border-slate-200/90 p-6 sm:p-10 relative overflow-hidden">
      {/* Subtle top gold accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient" />

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-gold-500"></span>
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-gold-700 block">
            Executive Concierge Desk
          </span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-navy-950">
          Request an Official Travel Quotation
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          Submit your travel requirements below. Our concierge desk will review vehicle availability and provide immediate confirmation via WhatsApp and telephone.
        </p>
      </div>

      {submissionSuccess && (
        <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start gap-3 animate-fadeIn">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-semibold">{submissionSuccess}</p>
            <p className="text-emerald-700 mt-1">
              If WhatsApp did not launch automatically,{' '}
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                className="underline font-bold text-emerald-900 hover:text-emerald-950"
              >
                click here to open WhatsApp directly
              </button>.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Full Name & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5">
              Full Name <span className="text-brand-gold-600">*</span>
            </label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="e.g. Vikramaditya Singhania"
              className={`w-full px-4 py-3 rounded-md text-sm border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold-400 transition-all ${
                errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.fullName.message}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5">
              Phone Number <span className="text-brand-gold-600">*</span>
            </label>
            <input
              type="tel"
              {...register("phone")}
              placeholder="e.g. +91 98765 43210"
              className={`w-full px-4 py-3 rounded-md text-sm border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold-400 transition-all ${
                errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.phone.message}</span>
              </p>
            )}
          </div>
        </div>

        {/* Email Address & Service Required */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5">
              Email Address <span className="text-slate-400 text-[10px] lowercase">(optional)</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="e.g. corporate@company.com"
              className={`w-full px-4 py-3 rounded-md text-sm border bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold-400 transition-all ${
                errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.email.message}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5">
              Service Category <span className="text-brand-gold-600">*</span>
            </label>
            <select
              {...register("serviceRequired")}
              className="w-full px-4 py-3 rounded-md text-sm border border-slate-300 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold-400 transition-all cursor-pointer"
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Trip Type Selector */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5">
            Trip Type / Requirement
          </label>
          <select
            {...register("tripType")}
            className="w-full px-4 py-3 rounded-md text-sm border border-slate-300 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold-400 transition-all cursor-pointer"
          >
            {tripTypeOptions.map((tt) => (
              <option key={tt} value={tt}>
                {tt}
              </option>
            ))}
          </select>
        </div>

        {/* CONDITIONAL: Vehicle Selection (Only when Car Rental is selected) */}
        {selectedService === "Car Rental" && (
          <div className="p-4 rounded-lg bg-brand-gold-50/60 border border-brand-gold-200 transition-all animate-fadeIn">
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy-950 mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-gold-600" />
              <span>Select Real Fleet Vehicle</span>
            </label>
            <select
              {...register("vehicleSelection")}
              className="w-full px-4 py-3 rounded-md text-sm border border-brand-gold-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-gold-500 cursor-pointer shadow-sm"
            >
              {vehicleOptions.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
            <div className="flex items-center gap-2 mt-2 text-[11px] text-brand-navy-900">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold-600" />
              <span>Chauffeur-driven &bull; Fully insured &bull; Sanitized before every dispatch</span>
            </div>
          </div>
        )}

        {/* Travel Date & Pickup / Destination */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5">
              Travel Date <span className="text-slate-400 text-[10px] lowercase">(optional)</span>
            </label>
            <input
              type="date"
              {...register("travelDate")}
              className="w-full px-4 py-3 rounded-md text-sm border border-slate-300 bg-slate-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold-400 transition-all cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5">
              Pickup / Origin Hub
            </label>
            <input
              type="text"
              {...register("pickupLocation")}
              placeholder="e.g. New Delhi IGI T3 / Aerocity"
              className="w-full px-4 py-3 rounded-md text-sm border border-slate-300 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5">
              Destination / Route
            </label>
            <input
              type="text"
              {...register("destination")}
              placeholder="e.g. Agra, Jaipur, Gurgaon, Hotel"
              className="w-full px-4 py-3 rounded-md text-sm border border-slate-300 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold-400 transition-all"
            />
          </div>
        </div>

        {/* Custom Message */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5">
            Bespoke Specifications / Itinerary Notes
          </label>
          <textarea
            {...register("message")}
            rows={3}
            placeholder="Please mention flight numbers, timing preferences, passenger count, luggage size, or specific VIP arrangements..."
            className="w-full px-4 py-3 rounded-md text-sm border border-slate-300 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold-400 transition-all resize-y"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
            icon={isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <MessageSquare className="w-5 h-5" />}
          >
            {isSubmitting ? "Formatting Itinerary..." : "Continue Reservation in WhatsApp"}
          </Button>

          <p className="text-center text-xs text-slate-500 mt-3">
            Clicking will format your complete itinerary into a direct WhatsApp message to <span className="font-semibold text-brand-navy-950">{BUSINESS_CONFIG.phoneDisplay}</span>.
          </p>
        </div>
      </form>
    </div>
  );
};
