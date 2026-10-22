export const VADODARA_LOCALITIES = [
  "All Locations",
  "Vasna Road",
  "Diwalipura",
  "Alkapuri",
  "Bhayli",
  "Sevasi",
  "Gotri",
  "Old Padra Road"
];

export const PROPERTY_TYPES = [
  "All Types",
  "2 BHK Apartment",
  "3 BHK Luxury Apartment",
  "4 BHK Sky Villa",
  "Commercial Showroom & Office",
  "Signature Bunglow / Villa"
];

export const BUDGET_RANGES = [
  { label: "Any Budget", min: 0, max: Infinity },
  { label: "Under ₹50 Lakh", min: 0, max: 5000000 },
  { label: "₹50 Lakh - ₹1 Crore", min: 5000000, max: 10000000 },
  { label: "₹1 Crore - ₹2 Crore", min: 10000000, max: 20000000 },
  { label: "Above ₹2 Crore", min: 20000000, max: Infinity }
];

export const PROPERTIES_DATA = [
  {
    id: "prop-1",
    title: "Supremus Grandeur Residency",
    slug: "supremus-grandeur-residency-vasna-road",
    type: "3 BHK Luxury Apartment",
    category: "buy",
    badge: "VS Group Verified",
    price: 9800000,
    priceDisplay: "₹98 Lakhs",
    location: "Vasna Road",
    fullAddress: "Near Ward No 11, Off Vasna Main Road, Diwalipura Extension, Vadodara - 390007",
    bhk: 3,
    bathrooms: 3,
    balconies: 2,
    superArea: "1,850 sq.ft",
    carpetArea: "1,390 sq.ft",
    furnishing: "Semi-Furnished (Modular Kitchen & Wardrobes)",
    facing: "East Facing (100% Vastu Compliant)",
    floor: "7th of 14 Floors",
    possession: "Ready to Move",
    reraId: "PR/GJ/VADODARA/VADODARA/RAA09412/120224",
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Designer Italian marble in living room",
      "High-speed Mitsubishi elevators",
      "Dedicated 2 covered basement parking slots",
      "24x7 treated water supply & solar water heating"
    ],
    amenities: [
      "Clubhouse & Banquet",
      "Infinity Swimming Pool",
      "Full Gymnasium",
      "Landscaped Podium Garden",
      "EV Car Charging Station",
      "Children's Play Turf",
      "24x7 CCTV Surveillance"
    ],
    nearby: [
      "D-Mart Vasna Road (600m)",
      "DPS Kalali (2.4 km)",
      "Bhailal Amin General Hospital (3.8 km)",
      "Vadodara Railway Station (5.5 km)"
    ],
    description: "Experience the epitome of refined urban living on prestigious Vasna Road. Supremus Grandeur offers generous cross-ventilation, triple balconies overlooking landscaped green belts, and premium finishes backed by VS Group's rigorous structural warranty."
  },
  {
    id: "prop-2",
    title: "Nilamber Serene Palms",
    slug: "nilamber-serene-palms-diwalipura",
    type: "4 BHK Sky Villa",
    category: "buy",
    badge: "Exclusive Launch",
    price: 16500000,
    priceDisplay: "₹1.65 Crore",
    location: "Diwalipura",
    fullAddress: "Opposite High Court Complex Road, Diwalipura, Vadodara - 390007",
    bhk: 4,
    bathrooms: 4,
    balconies: 3,
    superArea: "2,680 sq.ft",
    carpetArea: "2,010 sq.ft",
    furnishing: "Unfurnished (Bare Shell Designer Ready)",
    facing: "North-East Facing",
    floor: "11th of 12 Floors (Private Elevator Lobby)",
    possession: "Possession in Dec 2026",
    reraId: "PR/GJ/VADODARA/VADODARA/RAA11029/080524",
    mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Double-height ceiling living room",
      "Wrap-around wooden deck balcony",
      "Private foyer access card system",
      "German Schuco soundproof windows"
    ],
    amenities: [
      "Rooftop Sky Lounge",
      "Heated Plunge Pool",
      "Yoga & Aerobics Studio",
      "Library & Business Center",
      "Concierge Desk",
      "24x7 3-Tier Security",
      "High-speed Fiber Optic Backbone"
    ],
    nearby: [
      "Diwalipura Old Court (400m)",
      "Inox Multiplex Race Course (2.1 km)",
      "Sterling Hospital (3.2 km)",
      "Alkapuri Commercial Hub (3.5 km)"
    ],
    description: "Diwalipura's most coveted sky villa collection. Designed for visionary families who desire bungalow-sized living with penthouse exclusivity. Sweeping skyline views of Vadodara's green canopy."
  },
  {
    id: "prop-3",
    title: "Greenwood Signature Eco-Villa",
    slug: "greenwood-signature-eco-villa-bhayli",
    type: "Signature Bunglow / Villa",
    category: "villa",
    badge: "Luxury Estate",
    price: 24500000,
    priceDisplay: "₹2.45 Crore",
    location: "Bhayli",
    fullAddress: "Near Navrachana International School, Bhayli Canal Road, Vadodara - 391410",
    bhk: 5,
    bathrooms: 5,
    balconies: 4,
    superArea: "3,800 sq.ft (Plot: 310 sq.yd)",
    carpetArea: "2,950 sq.ft",
    furnishing: "Fully Furnished with Custom Teakwood Joinery",
    facing: "East Facing",
    floor: "Ground + 2 Storey Private Bungalow",
    possession: "Ready to Move",
    reraId: "PR/GJ/VADODARA/PADRA/RAA07890/150123",
    mainImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Private temperature-controlled splash pool",
      "Lush landscaped lawn with gazebo",
      "Solar rooftop grid connected (Zero power bills)",
      "Automated sensor lighting & smart locks"
    ],
    amenities: [
      "Private Lawn Garden",
      "Home Theatre Room",
      "Private Swimming Pool",
      "Covered 3-car Portico",
      "Gated Community Security",
      "Clubhouse with Tennis Court",
      "Jogging Trail"
    ],
    nearby: [
      "Navrachana University / School (1.2 km)",
      "Bhayli D-Mart (1.8 km)",
      "Bansal Mall (3.5 km)",
      "Vadodara Airport (14 km)"
    ],
    description: "An elite sanctuary in Vadodara's fastest appreciating western corridor. Built with eco-conscious bricks, private plunge pool, and expansive green lawns for a life of serenity and prestige."
  },
  {
    id: "prop-4",
    title: "Vihav Supremus Corporate Suites",
    slug: "vihav-supremus-corporate-suites-vasna-road",
    type: "Commercial Showroom & Office",
    category: "commercial",
    badge: "High ROI Asset",
    price: 6200000,
    priceDisplay: "₹62 Lakhs",
    location: "Vasna Road",
    fullAddress: "Vihav Supremus 2, Near Ward No 11, Vasna Road, Diwalipura, Vadodara - 390007",
    bhk: 0,
    bathrooms: 1,
    balconies: 0,
    superArea: "820 sq.ft",
    carpetArea: "590 sq.ft",
    furnishing: "Bare Shell with High Ceilings & Glass Facade",
    facing: "Main Road Facing (Supreme Visibility)",
    floor: "2nd Floor",
    possession: "Ready for Fit-outs",
    reraId: "PR/GJ/VADODARA/VADODARA/RAA06541/190822",
    mainImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Floor-to-ceiling double-glazed solar reflective glass",
      "High footfall commercial arterial road",
      "100% DG power backup for essential loads",
      "Expected rental yield: 7.8% p.a."
    ],
    amenities: [
      "Grand Corporate Atrium",
      "3 High Speed Stretcher Elevators",
      "Valet Visitor Parking",
      "24x7 Security & Boom Barriers",
      "Dedicated Cafeteria Zone",
      "EV Charging Stations",
      "Fire Hydrant & Sprinkler Systems"
    ],
    nearby: [
      "Ward 11 Civic Centre (Adjacent)",
      "ICICI & HDFC Bank Branches (100m)",
      "Old Padra Road Junction (1.5 km)",
      "Express Highway Access (10 min)"
    ],
    description: "Located within the iconic Vihav Supremus 2 complex — home to Navkar Realty and premier corporate enterprises. Ideal for doctor clinics, legal consultancies, tech companies, and retail boutiques."
  },
  {
    id: "prop-5",
    title: "Alkapuri Royal Heights",
    slug: "alkapuri-royal-heights",
    type: "3 BHK Luxury Apartment",
    category: "rent",
    badge: "Premium Rental",
    price: 36000,
    priceDisplay: "₹36,000 / month",
    location: "Alkapuri",
    fullAddress: "Opp. Circuit House, RC Dutt Road, Alkapuri, Vadodara - 390007",
    bhk: 3,
    bathrooms: 3,
    balconies: 2,
    superArea: "1,920 sq.ft",
    carpetArea: "1,440 sq.ft",
    furnishing: "Fully Furnished (ACs, Refrigerator, Sofa, Beds, TV)",
    facing: "North Facing",
    floor: "5th of 10 Floors",
    possession: "Immediate Lease",
    reraId: "PR/GJ/VADODARA/VADODARA/RAA03290/110121",
    mainImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Designer interiors with Daikin Inverter ACs",
      "Piped Natural Gas (VGL) connection",
      "Master bedroom with walk-in wardrobe",
      "Walking distance to Alkapuri Club & Central Mall"
    ],
    amenities: [
      "Covered Stilt Parking",
      "Elevator with Power Backup",
      "Security Guard & Intercom",
      "Terrace Garden",
      "Water Softener Plant"
    ],
    nearby: [
      "Vadodara Railway Station (1.2 km)",
      "Sayaji Garden (Kamati Baug) (2.0 km)",
      "Vadodara Central (800m)",
      "Grand Mercure Hotel (600m)"
    ],
    description: "Centrally positioned in Vadodara's historic prime core of Alkapuri. Perfect for senior corporate executives, doctors, and relocated families seeking hassle-free turnkey luxury."
  },
  {
    id: "prop-6",
    title: "Sevasi Serene Woods",
    slug: "sevasi-serene-woods-vadodara",
    type: "2 BHK Apartment",
    category: "buy",
    badge: "Great Value",
    price: 4850000,
    priceDisplay: "₹48.5 Lakhs",
    location: "Sevasi",
    fullAddress: "Near Sevasi Heritage Stepwell, Sevasi-Canal Road, Vadodara - 391101",
    bhk: 2,
    bathrooms: 2,
    balconies: 1,
    superArea: "1,220 sq.ft",
    carpetArea: "915 sq.ft",
    furnishing: "Unfurnished with Kitchen Platform",
    facing: "East Facing",
    floor: "3rd of 8 Floors",
    possession: "Ready to Move",
    reraId: "PR/GJ/VADODARA/VADODARA/RAA09918/300424",
    mainImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Efficient floorplan with zero space wastage",
      "Vitrified 2x2 double charged tiles",
      "Abundant natural light and cross ventilation",
      "PMAY Subsidy and bank loan assistance available"
    ],
    amenities: [
      "Landscaped Garden",
      "Jogging Track",
      "Community Hall",
      "Children's Play Area",
      "24x7 Security & CCTV"
    ],
    nearby: [
      "Sevasi Stepwell (500m)",
      "Gotri Hospital (3.2 km)",
      "Collabera Vadodara (4.1 km)",
      "Bright Day School (2.0 km)"
    ],
    description: "An exceptional entry into smart home ownership in pristine Sevasi. Low maintenance, high peace of mind, and swift access to Gotri and Vasna Road."
  }
];
