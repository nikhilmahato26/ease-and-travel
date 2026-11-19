export interface BusinessConfig {
  name: string;
  tagline: string;
  eyebrow: string;
  subheading: string;
  phone: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsAppNumber: string;
  suggestedEmail: string;
  isEmailVerified: boolean;
  address: {
    building: string;
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullFormatted: string;
  };
  services: {
    id: string;
    name: string;
    shortDesc: string;
    icon: string;
  }[];
  navLinks: {
    label: string;
    href: string;
  }[];
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "EASE AND TRAVEL",
  tagline: "Travel in Comfort. Arrive in Style.",
  eyebrow: "PREMIUM MOBILITY & TRAVEL EXPERIENCES",
  subheading: "Experience seamless journeys with EASE AND TRAVEL. From premium car rentals to ticket and hotel bookings, we make every journey effortless.",
  phone: "+91 8750330196",
  phoneDisplay: "+91 8750330196",
  phoneRaw: "918750330196",
  whatsAppNumber: "918750330196",
  suggestedEmail: "easeandtravel@gmail.com",
  isEmailVerified: false, // Configurable: true only once verified by owner
  address: {
    building: "381, 1st Floor, PNB Building",
    street: "Hansapuri Road",
    area: "Trinagar",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110035",
    country: "India",
    fullFormatted: "381, 1st Floor, PNB Building, Hansapuri Road, Trinagar, New Delhi – 110035, India."
  },
  services: [
    {
      id: "car-rentals",
      name: "Car Rentals",
      shortDesc: "Executive sedans, luxury flagship cars, premium MPVs, and spacious passenger vans.",
      icon: "Car"
    },
    {
      id: "ticket-bookings",
      name: "Ticket Bookings",
      shortDesc: "End-to-end ticketing assistance for domestic & international flights, scenic trains, and modern buses.",
      icon: "Ticket"
    },
    {
      id: "hotel-bookings",
      name: "Hotel Bookings",
      shortDesc: "Curated stays, luxury resort reservations, and premier boutique hotels tailored to your schedule.",
      icon: "Building2"
    }
  ],
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Our Fleet", href: "#fleet" },
    { label: "Car Rentals", href: "#car-rentals" },
    { label: "Ticket Bookings", href: "#ticket-bookings" },
    { label: "Hotel Bookings", href: "#hotel-bookings" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ]
};

export const createWhatsAppUrl = (message: string) => {
  return `https://wa.me/${BUSINESS_CONFIG.whatsAppNumber}?text=${encodeURIComponent(message)}`;
};
