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
  capacity: string;
  luggage: string;
  features: string[];
  idealFor: string;
  badge?: string;
}

export const VEHICLE_CATEGORIES = [
  { id: 'all', label: 'All Fleet' },
  { id: 'electric', label: 'Electric Luxury' },
  { id: 'luxury-sedans', label: 'Luxury Flagship' },
  { id: 'sedans', label: 'Executive Sedans' },
  { id: 'suvs', label: 'Luxury SUVs' },
  { id: 'mpvs', label: 'Luxury MPVs' },
  { id: 'vans', label: 'Passenger Vans' },
] as const;

export const VEHICLES: Vehicle[] = [
  {
    id: "toyota-prius",
    name: "Toyota Prius",
    category: "Premium Hybrid Sedan",
    filterCategories: ["sedans"],
    tag: "Acoustic Silence & Eco-Executive Agility",
    description: "Engineered with whisper-quiet fifth-generation hybrid architecture, aerodynamic grace, and refined urban suspension. An exemplary, carbon-conscious choice for smooth city transfers, corporate commutes, and punctual airport arrivals.",
    image: "/assets/images/prius_ext.jpg",
    interiorImage: "/assets/images/prius_int.jpg",
    capacity: "Up to 3 Executive Passengers",
    luggage: "2 Medium Luggage Bags",
    features: [
      "Ultra-Quiet Hybrid Powertrain",
      "Dual-Zone Automated Climate Control",
      "Ergonomic Sculpted Comfort Seats",
      "Chilled Water & Mobile Fast-Charging"
    ],
    idealFor: "Eco-conscious corporate commutes, punctual airport transfers & quiet city meetings"
  },
  {
    id: "toyota-camry",
    name: "Toyota Camry",
    category: "Executive Chauffeur Sedan",
    filterCategories: ["sedans"],
    tag: "The Benchmark of Corporate Rear-Seat Comfort",
    description: "The global gold standard for executive chauffeur travel. Features generous rear-seat knee room, acoustic double-glazed noise dampening, and sovereign suspension tuning designed specifically for working or relaxing en route.",
    image: "/assets/images/camry_ext.jpg",
    interiorImage: "/assets/images/camry_int.jpg",
    capacity: "Up to 3 Executive Passengers",
    luggage: "3 Large Luggage Bags",
    features: [
      "Generous Rear Executive Legroom",
      "Acoustic Noise-Insulated Glass",
      "Dedicated Rear Armrest Climate & Audio Controls",
      "Supple Perforated Leather Appointments"
    ],
    idealFor: "Corporate leaders, visiting delegates, diplomatic mobility & business summits",
    badge: "Executive Favorite"
  },
  {
    id: "mercedes-benz-e-class",
    name: "Mercedes-Benz E-Class",
    category: "Luxury Executive Sedan",
    filterCategories: ["luxury-sedans"],
    tag: "The World Standard for Executive Prestige",
    description: "Masterful German craftsmanship embodying modern business elegance. Featuring multi-hue ambient lounge illumination, hand-stitched Artico leather, rear privacy sunblinds, and peerless high-speed poise on highways and urban boulevards.",
    image: "/assets/images/eclass_ext.jpg",
    interiorImage: "/assets/images/eclass_int.jpg",
    capacity: "Up to 3 Executive Passengers",
    luggage: "3 Large Luggage Bags",
    features: [
      "64-Color Ambient Executive Lounge",
      "Handcrafted Nappa Leather Trim",
      "Rear Vanity Mirrors & Power Sunblinds",
      "Agility Control Adaptive Ride Comfort"
    ],
    idealFor: "Executive delegations, C-suite transfers, black-tie galas & luxury airport travel",
    badge: "Luxury Chauffeur"
  },
  {
    id: "tesla-model-s",
    name: "Tesla Model S",
    category: "Electric Flagship Sedan",
    filterCategories: ["electric", "luxury-sedans"],
    tag: "The Pinnacle of High-Performance Electric Poise",
    description: "Futuristic automotive luxury paired with effortless, silent acceleration. Features sanctuary-grade active cabin road noise cancellation, expansive glass canopy, and sculpted executive seating that redefines green mobility.",
    image: "/assets/images/teslas_ext.jpg",
    interiorImage: "/assets/images/teslas_int.jpg",
    capacity: "Up to 3 Executive Passengers",
    luggage: "3 Large Luggage Bags + Front Trunk",
    features: [
      "Active Road Noise Cancellation Audio",
      "Minimalist High-Tech Executive Cockpit",
      "Whisper-Quiet Dual-Motor Electric Glide",
      "Zero-Emission Corporate Travel Credentials"
    ],
    idealFor: "High-profile VIPs, tech industry summits, red carpet arrivals & modern eco-luxury",
    badge: "Electric Flagship"
  },
  {
    id: "mercedes-benz-s-class",
    name: "Mercedes-Benz S-Class",
    category: "Flagship Luxury Saloon",
    filterCategories: ["luxury-sedans"],
    tag: "The Sovereign Benchmark of Automotive Prestige",
    description: "The unrivaled global symbol of sovereign automotive luxury. First-class rear executive lounge seating with memory recline, Burmester 3D surround acoustics, magic air suspension, and whisper-quiet serenity for heads of state and industry titans.",
    image: "/assets/images/sclass_ext.jpg",
    interiorImage: "/assets/images/sclass_int.jpg",
    capacity: "Up to 3 Executive Passengers",
    luggage: "3 Large Luggage Bags",
    features: [
      "First-Class Executive Rear Lounge Recline",
      "Burmester 3D High-End Surround Acoustics",
      "Airmatic Self-Leveling Air Suspension",
      "Laminated Acoustic Safety Glass"
    ],
    idealFor: "Royal protocol, CEO & Board transfers, red carpet galas & supreme wedding mobility",
    badge: "Flagship Luxury"
  },
  {
    id: "tesla-model-y",
    name: "Tesla Model Y",
    category: "Electric Luxury Crossover",
    filterCategories: ["electric", "suvs"],
    tag: "Panoramic Solitude & Sustainable Innovation",
    description: "An elevated pure-electric grand tourer combining expansive panoramic all-glass roof views with instantaneous dual-motor propulsion. Elevated seating, clean cabin air filtration, and zero-emission prestige for contemporary executives.",
    image: "/assets/images/teslay_ext.jpg",
    interiorImage: "/assets/images/teslay_int.jpg",
    capacity: "Up to 4 Passengers",
    luggage: "4 Large Luggage Bags + Frunk",
    features: [
      "Expansive All-Glass Panoramic Sunroof",
      "HEPA Hospital-Grade Cabin Air Filtration",
      "Whisper-Quiet Pure Electric Ride",
      "Elevated Command Seating Vantage"
    ],
    idealFor: "Modern family retreats, executive touring, scenic airport runs & high-tech travel",
    badge: "100% Electric"
  },
  {
    id: "range-rover",
    name: "Range Rover",
    category: "Flagship Luxury SUV",
    filterCategories: ["suvs"],
    tag: "Peerless Grand Touring & Authoritative Presence",
    description: "Sanctuary-level interior serenity paired with elevated, authoritative road presence. Hand-finished semi-aniline leather, electronic air suspension that glides over any terrain, and panoramic commanding vistas for high-profile clients.",
    image: "/assets/images/rangerover_ext.jpg",
    interiorImage: "/assets/images/rangerover_int.jpg",
    capacity: "Up to 4 Executive Passengers",
    luggage: "4 Large Luggage Bags",
    features: [
      "Commanding Elevated Panoramic Vantage",
      "Semi-Aniline Luxury Leather Upholstery",
      "Electronic Air Suspension with Dynamic Response",
      "Meridian 3D Signature Sound Architecture"
    ],
    idealFor: "Destination weddings, royal convoys, outstation luxury getaways & VIP security escorts",
    badge: "Luxury SUV"
  },
  {
    id: "mercedes-benz-v-class",
    name: "Mercedes-Benz V-Class",
    category: "First-Class Executive MPV",
    filterCategories: ["mpvs"],
    tag: "The Mobile Executive Boardroom",
    description: "First-class cabin comfort in an expansive multi-passenger configuration. Features lavish individual captain chairs, conference-style face-to-face seating, dedicated rear climate controls, and immense luggage capacity for corporate delegations.",
    image: "/assets/images/vclass_ext.jpg",
    interiorImage: "/assets/images/vclass_int.jpg",
    capacity: "Up to 6 Executive Passengers",
    luggage: "6 Large Luggage Bags",
    features: [
      "Lavish Individual Captain Reclining Chairs",
      "Face-to-Face Executive Conference Seating",
      "Independent Triple-Zone Passenger Climate Control",
      "Expansive Luggage Hold for Overseas Delegations"
    ],
    idealFor: "Corporate delegations, multi-generational family tours, VIP airport meet & greet",
    badge: "First Class MPV"
  },
  {
    id: "toyota-alphard",
    name: "Toyota Alphard",
    category: "Royal VIP Lounge MPV",
    filterCategories: ["mpvs"],
    tag: "The Asian Royal Suite on Wheels",
    description: "The undisputed royal icon of Asian and international VIP mobility. Sculpted ottoman power recliner seats with footrests, power privacy curtains, starlight ceiling illumination, and ultra-smooth isolation from road vibrations.",
    image: "/assets/images/alphard_ext.jpg",
    interiorImage: "/assets/images/alphard_int.jpg",
    capacity: "Up to 5 VIP Passengers",
    luggage: "4 Large Luggage Bags",
    features: [
      "Power Ottoman Recliner Captain Seats with Footrests",
      "Executive Privacy Curtains & Sunshades",
      "Ambient Multi-Color Starlight Ceiling Moods",
      "Whisper-Smooth VIP Comfort Suspension"
    ],
    idealFor: "Celebrity entourages, embassy dignitaries, royal families & supreme luxury hospitality",
    badge: "VIP Royal Suite"
  },
  {
    id: "toyota-commuter",
    name: "Toyota HiAce Commuter",
    category: "Executive Passenger Van",
    filterCategories: ["vans"],
    tag: "Expansive Group Travel & Corporate Delegations",
    description: "Engineered specifically for generous passenger groups requiring uncompromised space. High-roof walk-through ceiling height, contoured individual high-back reclining seats, dedicated overhead air-conditioning vents, and abundant baggage capacity.",
    image: "/assets/images/commuter_ext.jpg",
    interiorImage: "/assets/images/commuter_int.jpg",
    capacity: "Up to 11 Passengers",
    luggage: "8-10 Large Luggage Bags",
    features: [
      "High-Roof Walkway Standing Architecture",
      "Individual High-Back Contoured Seats",
      "Dedicated Multi-Vent Overhead Air Conditioning",
      "Generous Luggage Capacity for Group Tours"
    ],
    idealFor: "Corporate event transfers, family wedding groups, airport delegations & intercity expeditions"
  }
];

export const getVehicleWhatsAppMessage = (vehicleName: string) => {
  return `Hello EASE AND TRAVEL, I am interested in reserving the ${vehicleName} for an upcoming journey. Kindly share availability, chauffeur options, and customized quotation details.`;
};
