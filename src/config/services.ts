export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  whatsAppMessage: string;
  categories: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const CAR_RENTAL_SERVICE = {
  title: "THE RIGHT VEHICLE FOR EVERY JOURNEY",
  subtitle: "CAR RENTAL SERVICES",
  description: "From executive sedans to spacious premium vehicles, explore rental options that suit your travel requirements.",
  categories: [
    {
      title: "Premium Sedans",
      description: "Sophisticated styling, whisper-quiet hybrid comfort, and urban agility for executive travels.",
      vehicleExamples: "Toyota Prius",
      icon: "ShieldCheck"
    },
    {
      title: "Executive Sedans",
      description: "Spacious rear-seat luxury, acoustic glass, and refined leather seating for corporate dignitaries.",
      vehicleExamples: "Toyota Camry",
      icon: "Briefcase"
    },
    {
      title: "Luxury Sedans",
      description: "Flagship German engineering, ambient illumination, and unparalleled automotive prestige.",
      vehicleExamples: "Mercedes-Benz E-Class & S-Class",
      icon: "Crown"
    },
    {
      title: "Luxury MPVs",
      description: "First-class ottoman recliners, conference seating, and peerless passenger room.",
      vehicleExamples: "Toyota Alphard & Mercedes-Benz V-Class",
      icon: "Armchair"
    },
    {
      title: "Electric Luxury",
      description: "Pioneering zero-emission performance, whisper-quiet road glide, and minimalist high-tech cockpits.",
      vehicleExamples: "Tesla Model S & Tesla Model Y",
      icon: "Zap"
    },
    {
      title: "Luxury SUVs",
      description: "Commanding road presence, elevated vantage points, and sanctuary-level grand touring comfort.",
      vehicleExamples: "Range Rover & Tesla Model Y",
      icon: "Compass"
    },
    {
      title: "Passenger Vans",
      description: "High-roof walk-through spaciousness and individual contoured seating for group journeys.",
      vehicleExamples: "Toyota Commuter",
      icon: "Users"
    }
  ]
};

export const TICKET_BOOKING_SERVICE: ServiceDetail = {
  id: "ticket-bookings",
  title: "YOUR JOURNEY STARTS HERE",
  subtitle: "TICKET BOOKING SERVICE",
  description: "Need help planning your next trip? Contact EASE AND TRAVEL for ticket booking enquiries. We assist you with streamlined coordination across flights, premier rail journeys, and executive coach transfers.",
  image: "/assets/images/ticket_flight.jpg",
  ctaText: "ENQUIRE ABOUT TICKETS",
  whatsAppMessage: "Hello EASE AND TRAVEL, I would like assistance with ticket booking. Please contact me with the details.",
  categories: [
    {
      title: "Air Ticket Booking Enquiry",
      description: "Assistance with domestic and international flight itineraries, premium economy, business class, and corporate group travel.",
      icon: "Plane"
    },
    {
      title: "Train Ticket Booking Enquiry",
      description: "Enquiries and itinerary planning for premier train routes, executive chair cars, and scenic railway journeys.",
      icon: "Train"
    },
    {
      title: "Bus Ticket Booking Enquiry",
      description: "Coordination for comfortable intercity bus journeys, luxury sleeper coaches, and private group transfers.",
      icon: "Bus"
    }
  ]
};

export const HOTEL_BOOKING_SERVICE: ServiceDetail = {
  id: "hotel-bookings",
  title: "STAY SOMEWHERE SPECIAL",
  subtitle: "HOTEL BOOKING SERVICE",
  description: "Planning your next getaway or business trip? Get in touch with EASE AND TRAVEL for hotel booking enquiries. We help connect you with exquisite accommodations suited to your travel style.",
  image: "/assets/images/hotel_luxury.jpg",
  ctaText: "ENQUIRE ABOUT HOTELS",
  whatsAppMessage: "Hello EASE AND TRAVEL, I would like assistance with hotel booking. Please share the details.",
  categories: [
    {
      title: "Luxury Resorts & Getaways",
      description: "Scenic sanctuaries, coastal resorts, and private villas designed for peaceful retreats.",
      icon: "Palmtree"
    },
    {
      title: "Executive Business Hotels",
      description: "Central business district properties with high-speed connectivity, meeting facilities, and executive lounges.",
      icon: "Building"
    },
    {
      title: "Boutique & Heritage Stays",
      description: "Distinctive properties celebrating regional heritage, bespoke architecture, and intimate hospitality.",
      icon: "Sparkles"
    }
  ]
};

export const WHY_CHOOSE_US = [
  {
    id: "premium-fleet",
    title: "Verified Signature Fleet",
    description: "Authentic, showroom-condition executive sedans, electric flagships, luxury MPVs, and passenger coaches maintained to stringent safety protocols.",
    icon: "CarFront"
  },
  {
    id: "travel-assistance",
    title: "Flight & Rail Ticketing",
    description: "End-to-end ticketing coordination across domestic and international airlines, executive chair cars, and private coach chartering.",
    icon: "Compass"
  },
  {
    id: "hotel-reservations",
    title: "5-Star Hotel & Resort Stays",
    description: "Curated lodging reservations connecting you with premier luxury suites, central business hotels, and bespoke heritage retreats.",
    icon: "Hotel"
  },
  {
    id: "direct-support",
    title: "Direct Chauffeur Concierge",
    description: "Connect immediately with our New Delhi mobility desk via WhatsApp and phone for immediate itinerary quotes and real-time support.",
    icon: "PhoneCall"
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Luxury Sedans' | 'Executive Travel' | 'Luxury MPVs' | 'Premium SUVs' | 'Hotel Experiences' | 'Travel Experiences';
  image: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Mercedes-Benz S-Class Flagship",
    category: "Luxury Sedans",
    image: "/assets/images/sclass_ext.jpg",
    caption: "The pinnacle of executive luxury and road presence."
  },
  {
    id: "gal-2",
    title: "Toyota Alphard Royal Lounge",
    category: "Luxury MPVs",
    image: "/assets/images/alphard_ext.jpg",
    caption: "Unrivaled first-class VIP passenger travel experience."
  },
  {
    id: "gal-3",
    title: "Range Rover Luxury Touring",
    category: "Premium SUVs",
    image: "/assets/images/rangerover_ext.jpg",
    caption: "Elevated command and sanctuary-level comfort."
  },
  {
    id: "gal-4",
    title: "Mercedes-Benz E-Class Executive",
    category: "Luxury Sedans",
    image: "/assets/images/eclass_ext.jpg",
    caption: "Masterful German engineering and serene cabin atmosphere."
  },
  {
    id: "gal-5",
    title: "5-Star Luxury Resort Stays",
    category: "Hotel Experiences",
    image: "/assets/images/hotel_luxury.jpg",
    caption: "Exquisite accommodations and memorable hospitality."
  },
  {
    id: "gal-6",
    title: "Seamless Flight Journeys",
    category: "Travel Experiences",
    image: "/assets/images/ticket_flight.jpg",
    caption: "Effortless ticketing and travel coordination."
  },
  {
    id: "gal-7",
    title: "Mercedes-Benz V-Class Suite",
    category: "Luxury MPVs",
    image: "/assets/images/vclass_ext.jpg",
    caption: "Spacious executive conference and multi-passenger comfort."
  },
  {
    id: "gal-8",
    title: "Toyota Camry Executive Ride",
    category: "Executive Travel",
    image: "/assets/images/camry_ext.jpg",
    caption: "Uncompromising rear-seat tranquility and smooth ride."
  },
  {
    id: "gal-9",
    title: "Scenic Rail Journeys",
    category: "Travel Experiences",
    image: "/assets/images/ticket_train.jpg",
    caption: "Comfortable train travel assistance across picturesque routes."
  },
  {
    id: "gal-10",
    title: "Tesla Model S Electric Flagship",
    category: "Luxury Sedans",
    image: "/assets/images/teslas_ext.jpg",
    caption: "Futuristic poise and whisper-quiet electric acceleration."
  },
  {
    id: "gal-11",
    title: "Tesla Model Y Panoramic Touring",
    category: "Premium SUVs",
    image: "/assets/images/teslay_ext.jpg",
    caption: "Expansive all-glass panoramic roof and clean executive cabin."
  }
];
