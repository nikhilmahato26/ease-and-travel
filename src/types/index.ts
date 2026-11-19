import { z } from 'zod';

export const serviceOptions = [
  "Car Rental",
  "Ticket Booking",
  "Hotel Booking",
  "General Enquiry"
] as const;

export const vehicleOptions = [
  "Toyota Prius",
  "Toyota Camry",
  "Mercedes-Benz E-Class",
  "Mercedes-Benz V-Class",
  "Mercedes-Benz S-Class",
  "Range Rover",
  "Tesla Model Y",
  "Tesla Model S",
  "Toyota Commuter",
  "Toyota Alphard",
  "Not Applicable"
] as const;

export const enquiryFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name (minimum 2 characters)"),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number").regex(/^[0-9+\s\-()]{10,16}$/, "Invalid phone format"),
  email: z.string().email("Please enter a valid email address").or(z.literal("")),
  serviceRequired: z.enum(serviceOptions, {
    errorMap: () => ({ message: "Please select a service" })
  }),
  vehicleSelection: z.string().optional(),
  travelDate: z.string().optional(),
  pickupLocation: z.string().optional(),
  destination: z.string().optional(),
  message: z.string().optional()
});

export type EnquiryFormData = z.infer<typeof enquiryFormSchema>;
