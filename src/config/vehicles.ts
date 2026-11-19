export type FilterCategory = 'all' | 'electric' | 'sedans' | 'luxury-sedans' | 'mpvs' | 'suvs' | 'vans';

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  filterCategories: FilterCategory[];
  tag: string;
  description: string;
  image: string;
  interiorImage: string;
  features: string[];
  idealFor: string;
  badge?: string;
}

export const VEHICLE_CATEGORIES = [
  { id: 'all', label: 'All Fleet' },
  { id: 'electric', label: 'Electric Luxury' },
  { id: 'luxury-sedans', label: 'Luxury Flagship' },
  { id: 'sedans', label: 'Premium Sedans' },
  { id: 'suvs', label: 'Luxury SUVs' },
  { id: 'mpvs', label: 'Luxury MPVs' },
  { id: 'vans', label: 'Passenger Vans' },
] as const;

export const VEHICLES: Vehicle[] = [
  {
    id: "toyota-prius",
    name: "Toyota Prius",
    category: "Premium Sedan",
    filterCategories: ["sedans"],
    tag: "Hybrid Efficiency & Modern Comfort",
    description: "Renowned for whisper-quiet hybrid glide, sleek aerodynamics, and refined modern comfort. An exceptional choice for eco-conscious urban commutes and airport transfers.",
    image: "/assets/images/prius_ext.jpg",
    interiorImage: "/assets/images/prius_int.jpg",
    features: [
      "Aerodynamic Hybrid Performance",
      "Automatic Multi-Zone Climate Control",
      "Ergonomically Sculpted Seating",
      "Refined Urban Suspension"
    ],
    idealFor: "Executive city commutes, airport transfers & quiet corporate journeys"
  },
  {
    id: "toyota-camry",
    name: "Toyota Camry",
    category: "Executive Sedan",
    filterCategories: ["sedans"],
    tag: "Executive Chauffeur Distinction",
    description: "Generous rear-seat legroom, premium acoustic soundproofing, and peerless ride comfort. The premier standard for business leaders and high-level corporate itineraries.",
    image: "/assets/images/camry_ext.jpg",
    interiorImage: "/assets/images/camry_int.jpg",
    features: [
      "Expansive Rear Executive Legroom",
      "Acoustic Noise Dampening Glass",
      "Rear Armrest Climate & Audio Controls",
      "Plush Leather Appointments"
    ],
    idealFor: "Corporate delegates, executive travel & diplomatic itineraries",
    badge: "Executive Favorite"
  },
  {
    id: "mercedes-benz-e-class",
    name: "Mercedes-Benz E-Class",
    category: "Luxury Executive Sedan",
    filterCategories: ["luxury-sedans"],
    tag: "The World Standard for Executive Prestige",
    description: "The global benchmark for luxury executive travel. Masterful craftsmanship featuring multi-color ambient lighting, supple Nappa leather, and serene sound isolation.",
    image: "/assets/images/eclass_ext.jpg",
    interiorImage: "/assets/images/eclass_int.jpg",
    features: [
      "64-Color Ambient Lounge Lighting",
      "Handcrafted Nappa Leather Trim",
      "Rear Vanity Mirrors & Sunblinds",
      "Precision German Dynamic Ride"
    ],
    idealFor: "Business summits, VIP transfers & luxury city travel",
    badge: "Luxury Chauffeur"
  },
  {
    id: "tesla-model-s",
    name: "Tesla Model S",
    category: "Electric Flagship Sedan",
    filterCategories: ["electric", "luxury-sedans"],
    tag: "The Benchmark for Electric Performance & Luxury",
    description: "Pioneering electric flagship sedan offering sanctuary-level acoustic insulation, sculpted executive seating, and effortless high-speed poise. Futuristic prestige paired with silent power.",
    image: "/assets/images/teslas_ext.jpg",
    interiorImage: "/assets/images/teslas_int.jpg",
    features: [
      "Sanctuary Active Noise Cancellation",
      "Minimalist High-Tech Executive Cockpit",
      "Whisper-Quiet Pure Electric Glide",
      "Ultra-Low Center of Gravity Smooth Ride"
    ],
    idealFor: "High-profile executive travel, futuristic luxury arrivals & corporate green mobility",
    badge: "Electric Flagship"
  },
  {
    id: "mercedes-benz-s-class",
    name: "Mercedes-Benz S-Class",
    category: "Luxury Flagship Sedan",
    filterCategories: ["luxury-sedans"],
    tag: "The Pinnacle of Flagship Automotive Luxury",
    description: "Uncompromised automotive prestige and sovereign comfort. First-class rear lounge seating, whisper-quiet acoustic shielding, and an unmistakably regal road presence.",
    image: "/assets/images/sclass_ext.jpg",
    interiorImage: "/assets/images/sclass_int.jpg",
    features: [
      "Executive Rear Reclining Lounge",
      "Burmester 3D High-End Surround Sound",
      "Airmatic Dynamic Air Suspension",
      "Active Acoustic Road Cancellation"
    ],
    idealFor: "Royal arrivals, CEO transportation & red carpet occasions",
    badge: "Flagship Luxury"
  },
  {
    id: "tesla-model-y",
    name: "Tesla Model Y",
    category: "Electric Luxury SUV",
    filterCategories: ["electric", "suvs"],
    tag: "Silent Electric Innovation & Panoramic Solitude",
    description: "Modern electric crossover SUV blending instant, silent acceleration, zero-tailpipe emissions, and an expansive all-glass panoramic roof that fills the cabin with natural ambiance.",
    image: "/assets/images/teslay_ext.jpg",
    interiorImage: "/assets/images/teslay_int.jpg",
    features: [
      "Expansive All-Glass Panoramic Sunroof",
      "Whisper-Quiet Pure Electric Drive",
      "Spacious Elevated Seating Vantage",
      "Clean Minimalist Executive Interior"
    ],
    idealFor: "Eco-conscious executive travel, scenic airport transfers & modern luxury touring",
    badge: "100% Electric"
  },
  {
    id: "range-rover",
    name: "Range Rover",
    category: "Luxury SUV",
    filterCategories: ["suvs"],
    tag: "Peerless Luxury & Commanding Presence",
    description: "Sanctuary-level interior serenity paired with elevated, authoritative road presence. Hand-stitched premium leather, panoramic vistas, and effortless grand-touring composure.",
    image: "/assets/images/rangerover_ext.jpg",
    interiorImage: "/assets/images/rangerover_int.jpg",
    features: [
      "Commanding Elevated Panoramic Vantage",
      "Semi-Aniline Luxury Leather Upholstery",
      "Adaptive Electronic Air Suspension",
      "Sanctuary Acoustic Shielding"
    ],
    idealFor: "Luxury getaways, destination weddings & VIP presence",
    badge: "Luxury SUV"
  },
  {
    id: "mercedes-benz-v-class",
    name: "Mercedes-Benz V-Class",
    category: "Luxury MPV",
    filterCategories: ["mpvs"],
    tag: "First-Class Multi-Passenger Sanctuary",
    description: "First-class cabin comfort in a commanding multi-passenger architecture. Luxurious individual captain seats, face-to-face conference capability, and vast luggage capacity.",
    image: "/assets/images/vclass_ext.jpg",
    interiorImage: "/assets/images/vclass_int.jpg",
    features: [
      "Lavish Individual Captain Recliners",
      "Conference-Style Face-to-Face Seating",
      "Expansive Executive Luggage Hold",
      "Independent Triple-Zone Climate Precision"
    ],
    idealFor: "Executive delegations, family vacations & VIP touring",
    badge: "First Class MPV"
  },
  {
    id: "toyota-alphard",
    name: "Toyota Alphard",
    category: "Luxury MPV",
    filterCategories: ["mpvs"],
    tag: "Royal Executive Lounge on Wheels",
    description: "The undisputed royal icon of Asian and international VIP mobility. Sculpted power ottoman recliner seats with footrests, privacy sunshades, and ambient starlight illumination.",
    image: "/assets/images/alphard_ext.jpg",
    interiorImage: "/assets/images/alphard_int.jpg",
    features: [
      "Power Ottoman Recliner Captain Seats",
      "Rear Executive Privacy Curtains",
      "Starlight Ceiling Ambient Illumination",
      "Ultra-Smooth VIP Comfort Suspension"
    ],
    idealFor: "Celebrity travel, VIP delegation & supreme luxury transfers",
    badge: "VIP Royal Suite"
  },
  {
    id: "toyota-commuter",
    name: "Toyota Commuter",
    category: "Passenger Van",
    filterCategories: ["vans"],
    tag: "Generous Group Comfort & Spacious Travel",
    description: "Engineered specifically for expansive passenger groups. High-roof walk-through ceiling height, contoured individual high-back seating, and dedicated overhead air conditioning.",
    image: "/assets/images/commuter_ext.jpg",
    interiorImage: "/assets/images/commuter_int.jpg",
    features: [
      "High-Roof Walkway Architecture",
      "Individual High-Back Contoured Seats",
      "Dedicated Multi-Vent Overhead Air Conditioning",
      "Generous Luggage & Travel Capability"
    ],
    idealFor: "Group expeditions, family tours & corporate team transport"
  }
];

export const getVehicleWhatsAppMessage = (vehicleName: string) => {
  return `Hello EASE AND TRAVEL, I am interested in renting the ${vehicleName}. Please share the availability and rental details.`;
};
