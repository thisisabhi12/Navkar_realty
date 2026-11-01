export const VADODARA_LOCALITIES = [
  "All Locations",
  "Vasna Road",
  "Diwalipura",
  "Sayajipura",
  "Sama-Savli",
  "New Sama",
  "Chhani",
  "Bil - Kalali",
  "Alkapuri",
  "Bhayli"
];

export const PROPERTY_TYPES = [
  "All Types",
  "2 & 3 BHK Apartments",
  "3 BHK Luxury Apartments",
  "4 BHK Premium Apartments",
  "4 BHK Luxury Villa",
  "5 BHK Luxury Villas",
  "4 BHK Tenements",
  "Commercial Space"
];

export const BUDGET_RANGES = [
  { label: "Any Budget", min: 0, max: Infinity },
  { label: "Under ₹50 Lakhs", min: 0, max: 5000000 },
  { label: "₹50 Lakhs - ₹1 Crore", min: 5000000, max: 10000000 },
  { label: "₹1 Crore - ₹2 Crore", min: 10000000, max: 20000000 },
  { label: "Above ₹2 Crore", min: 20000000, max: Infinity }
];

export const PROPERTIES_DATA = [
  {
    id: "prop-seven-vierra",
    title: "Seven Vierra",
    slug: "seven-vierra-vasna-road-vadodara",
    type: "4 BHK Premium Apartments",
    category: "buy",
    badge: "Premium Launch",
    price: 10000000,
    priceDisplay: "₹ 1 Cr*",
    location: "Vasna Road",
    fullAddress: "Off Vasna Main Road, Diwalipura Extension, Vadodara - 390007 (Office: Vasna Road, Diwalipura)",
    bhk: 4,
    bhkDisplay: "4 BHK",
    bathrooms: 4,
    balconies: 3,
    superArea: "2,450 sq.ft",
    carpetArea: "1,820 sq.ft",
    furnishing: "Designer Bare Shell / Custom Finished",
    facing: "East Facing (100% Vastu Compliant)",
    floor: "High Rise Tower",
    possession: "Under Construction (Possession 2026)",
    reraId: "PR/GJ/VADODARA/VADODARA/RAA11842/2024",
    mainImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Expansive 4 BHK layouts with separate servant room",
      "Double-height private balcony decks",
      "High-speed Mitsubishi elevators with access control",
      "Covered basement parking & EV charging stations"
    ],
    amenities: [
      "Modern Clubhouse",
      "Rooftop Swimming Pool",
      "Fitness Centre & Gym",
      "Podium Garden",
      "Children's Play Area",
      "24x7 Security & CCTV"
    ],
    nearby: [
      "Diwalipura Court (900m)",
      "D-Mart Vasna Road (1.2 km)",
      "Old Padra Road (2.5 km)",
      "Railway Station (5.5 km)"
    ],
    description: "Seven Vierra redefines luxury apartment living at the premier intersection of Vasna Road and Diwalipura. Offering generous 4 BHK configurations with magnificent open views, world-class amenities, and supreme connectivity."
  },
  {
    id: "prop-seven-sattva",
    title: "Seven Sattva",
    slug: "seven-sattva-sayajipura-ajwa-road",
    type: "5 BHK Luxury Villas",
    category: "villa",
    badge: "Signature Villas",
    price: 10000000,
    priceDisplay: "₹ 1 Cr*",
    location: "Sayajipura",
    fullAddress: "Near Sayajipura Water Tank, Ajwa Road, Vadodara - 390019",
    bhk: 5,
    bhkDisplay: "5 BHK",
    bathrooms: 5,
    balconies: 4,
    superArea: "3,200 sq.ft (Plot: 260 sq.yd)",
    carpetArea: "2,450 sq.ft",
    furnishing: "Semi-Furnished Luxury Finishes",
    facing: "East / North-East Facing",
    floor: "Ground + 2 Storey Independent Villa",
    possession: "Ready / Nearing Possession",
    reraId: "PR/GJ/VADODARA/VADODARA/RAA09871/2023",
    mainImage: "/seven-sattva.jpg",
    gallery: [
      "/seven-sattva.jpg",
      "/seven-sattva-community.jpg",
      "/seven-sattva-villas.jpg"
    ],
    features: [
      "Modern architecture with expansive 5 BHK multi-floor luxury living",
      "Secure gated community with 24x7 multi-tier security & CCTV",
      "Landscaped surroundings with lush central park and children's play turf",
      "Prime Ajwa Road location with easy access to city centers"
    ],
    amenities: [
      "Landscaped Garden",
      "Clubhouse",
      "Gymnasium",
      "Children's Play Area",
      "Senior Citizen Sit-out",
      "24x7 Security",
      "Allotted Car Parking",
      "CCTV Surveillance",
      "Well-lit Internal Roads"
    ],
    nearby: [
      "Ajwa Road Junction (800m)",
      "L&T Knowledge City (3.5 km)",
      "Sayaji Baug (6.5 km)",
      "Vadodara Airport (7.0 km)"
    ],
    description: "Seven Sattva — A Perfect Blend of Luxury, Space & Serenity in Sayajipura, Ajwa Road, Vadodara. Featuring independent 5 BHK luxury villas starting from ₹1 Cr* designed for spacious multi-generational living, modern architecture, and a complete gated lifestyle community."
  },
  {
    id: "prop-seven-imperia",
    title: "Seven Imperia",
    slug: "seven-imperia-sama-savli-vadodara",
    type: "2 & 3 BHK Apartments",
    category: "buy",
    badge: "Best Value",
    price: 3500000,
    priceDisplay: "₹ 35 Lakhs*",
    location: "Sama-Savli",
    fullAddress: "Main Sama-Savli Road, Near L&T Circle, Vadodara - 390024",
    bhk: 2,
    bhkOptions: [2, 3],
    bhkDisplay: "2 & 3 BHK",
    bathrooms: 2,
    balconies: 2,
    superArea: "800 sq.ft",
    carpetArea: "600 sq.ft",
    furnishing: "Unfurnished with Kitchen Granite Platform",
    facing: "North-East Facing",
    floor: "Mid to High Floors Available",
    possession: "Ready for Possession",
    reraId: "PR/GJ/VADODARA/VADODARA/RAA08453/2023",
    mainImage: "/seven-imperia.jpg",
    gallery: [
      "/seven-imperia.jpg",
      "/seven-imperia-building.jpg",
      "/seven-imperia-pool.jpg",
      "/seven-imperia-interior.jpg",
      "/seven-imperia-garden.jpg"
    ],
    features: [
      "Modern architecture with spacious 2 & 3 BHK living spaces",
      "800 sq.ft super built-up area in prime Sama Savli",
      "Tranquil green surroundings with gazebo garden",
      "Allotted car parking & modern high-speed elevators"
    ],
    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Multipurpose Hall",
      "Landscaped Garden",
      "Children's Play Area",
      "Allotted Car Parking",
      "24x7 Security",
      "Modern Lifts"
    ],
    nearby: [
      "Sama-Savli Main Road (Immediate)",
      "Delhi Public School (DPS) (2.0 km)",
      "L&T Knowledge City (4.0 km)",
      "Vadodara Airport (4.5 km)"
    ],
    description: "Seven Imperia — Live Beyond Ordinary in Sama Savli, Vadodara. Offering contemporary 2 & 3 BHK luxury apartments starting from ₹35 Lakhs* with 800 sq.ft super built-up area, swimming pool, gymnasium, multipurpose hall, and beautifully landscaped spaces."
  },
  {
    id: "prop-seven-symphony",
    title: "Seven Symphony",
    slug: "seven-symphony-new-sama-vadodara",
    type: "2 & 3 BHK Apartments",
    category: "buy",
    badge: "Popular Choice",
    price: 5500000,
    priceDisplay: "₹ 55 Lakhs*",
    location: "New Sama",
    fullAddress: "Abhyuday Nagar, Off New Sama Road, Vadodara - 390024",
    bhk: 3,
    bhkOptions: [2, 3],
    bhkDisplay: "2 & 3 BHK",
    bathrooms: 3,
    balconies: 2,
    superArea: "989 sq.ft",
    carpetArea: "740 sq.ft",
    furnishing: "Semi-Furnished Options Available",
    facing: "East Facing",
    floor: "7-Storey Residential Complex",
    possession: "Ready to Move",
    reraId: "PR/GJ/VADODARA/VADODARA/RAA09120/2023",
    mainImage: "/seven-symphony.jpg",
    gallery: [
      "/seven-symphony.jpg",
      "/seven-symphony-pool.jpg",
      "/seven-symphony-interior.jpg",
      "/seven-symphony-gym.jpg"
    ],
    features: [
      "Modern 2 & 3 BHK design with spacious living spaces",
      "989 sq.ft super built-up area in prime New Sama",
      "Green surroundings with dedicated children's play area",
      "Allotted car parking & modern high-speed lifts"
    ],
    amenities: [
      "Clubhouse",
      "Swimming Pool",
      "Gymnasium",
      "Landscaped Garden",
      "Children's Play Area",
      "Multipurpose Hall",
      "Allotted Car Parking",
      "24x7 Security",
      "Modern Lifts"
    ],
    nearby: [
      "New Sama Main Road (Immediate)",
      "Swaminarayan Temple New Sama (1.0 km)",
      "Bright Day School Sama (1.5 km)",
      "Karelibaug & Central Vadodara (3.0 km)"
    ],
    description: "Seven Symphony — Homes that harmonize life at New Sama, Vadodara. Featuring contemporary 2 & 3 BHK apartments starting from ₹55 Lakhs* with 989 sq.ft super built-up area, top-tier amenities including swimming pool, gymnasium, clubhouse, and lush landscaped gardens."
  },
  {
    id: "prop-seven-sky-villa",
    title: "Seven Sky Villa",
    slug: "seven-sky-villa-chhani-vadodara",
    type: "4 BHK Luxury Villa",
    category: "villa",
    badge: "Exclusive Living",
    price: 25500000,
    priceDisplay: "₹ 2.55 Cr*",
    location: "Chhani",
    fullAddress: "Near Chhani Lake & Expressway, Chaani, Vadodara - 391740",
    bhk: 4,
    bhkDisplay: "4 BHK",
    bathrooms: 4,
    balconies: 3,
    superArea: "2,500 sq.ft",
    carpetArea: "1,920 sq.ft",
    furnishing: "Bespoke Designer Furnishing Options",
    facing: "North-East Facing (Vastu Compliant)",
    floor: "Private Multi-Storey Sky Villa",
    possession: "Ready to Move / Exclusive Possession",
    reraId: "PR/GJ/VADODARA/VADODARA/RAA10543/2024",
    mainImage: "/seven-sky-villa.jpg",
    gallery: [
      "/seven-sky-villa.jpg",
      "/seven-sky-villa-building.jpg",
      "/seven-sky-villa-living.jpg",
      "/seven-sky-villa-bedroom.jpg",
      "/seven-sky-villa-garden.jpg"
    ],
    features: [
      "Modern architecture with expansive 4 BHK multi-storey private villa living",
      "2,500 sq.ft super built-up area in prime Chaani, Vadodara",
      "Private landscaped garden, portico, and scenic terrace deck",
      "Wide internal roads with 24x7 gated security infrastructure"
    ],
    amenities: [
      "Clubhouse",
      "Swimming Pool",
      "Landscaped Garden",
      "Gymnasium",
      "Children's Play Area",
      "24x7 Security",
      "Wide Internal Roads",
      "Modern Architecture"
    ],
    nearby: [
      "Chhani Bus Rapid Transit (600m)",
      "GSFC Complex (2.0 km)",
      "Vadodara-Ahmedabad Expressway (3.5 km)",
      "Vadodara Railway Station (7.0 km)"
    ],
    description: "Seven Sky Villa — Exclusive Living Beyond Ordinary in Chaani, Vadodara. Where luxury feels like home, featuring bespoke 4 BHK luxury villas starting from ₹2.55 Cr* with 2,500 sq.ft super built-up area, private garden, clubhouse, swimming pool, and gated security."
  },
  {
    id: "prop-prakruti-harmony",
    title: "Prakruti Harmony",
    slug: "prakruti-harmony-bil-kalali-vadodara",
    type: "4 BHK Tenements",
    category: "villa",
    badge: "Family Tenements",
    price: 9000000,
    priceDisplay: "₹ 90 Lakhs*",
    location: "Bil - Kalali",
    fullAddress: "Bil-Kalali Main Road, Near DPS Kalali, Vadodara - 391410",
    bhk: 4,
    bhkDisplay: "4 BHK",
    bathrooms: 4,
    balconies: 2,
    superArea: "2,250 sq.ft (Plot: 175 sq.yd)",
    carpetArea: "1,720 sq.ft",
    furnishing: "Semi-Furnished with Modular Kitchen",
    facing: "East Facing",
    floor: "Ground + 1 Storey Independent Tenement",
    possession: "Ready to Move",
    reraId: "PR/GJ/VADODARA/PADRA/RAA08119/2023",
    mainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Spacious 4 BHK independent tenement home",
      "Private front parking and cozy backyard garden",
      "Excellent cross-ventilation in serene, peaceful surroundings",
      "Immediate possession with clear legal title"
    ],
    amenities: [
      "Gated Society with Guard",
      "Children's Play Park",
      "Internal Concrete Roads",
      "Street Lighting & Underground Cabling",
      "Community Gathering Hall"
    ],
    nearby: [
      "Delhi Public School (DPS) Kalali (1.2 km)",
      "Atladra Swaminarayan Temple (3.0 km)",
      "Vasna Road D-Mart (3.8 km)",
      "Bhailal Amin Hospital (5.0 km)"
    ],
    description: "Prakruti Harmony offers peaceful 4 BHK tenements in the rapidly developing Bil-Kalali corridor. Ideal for families desiring independent ground-plus-one home living near top educational institutions."
  },
  {
    id: "prop-seven-sky",
    title: "Seven Sky",
    slug: "seven-sky-chhani-vadodara",
    type: "3 BHK Luxury Apartments",
    category: "buy",
    badge: "Premium Tower",
    price: 6000000,
    priceDisplay: "₹ 60 Lacs*",
    location: "Chhani",
    fullAddress: "TP 13 Main Arterial Road, Chhani, Vadodara - 391740",
    bhk: 3,
    bhkDisplay: "3 BHK",
    bathrooms: 3,
    balconies: 2,
    superArea: "2,190 sq.ft",
    carpetArea: "1,640 sq.ft",
    furnishing: "Unfurnished / Designer Upgrade Package",
    facing: "East Facing",
    floor: "High-Rise Tower",
    possession: "Ready for Fit-outs / Nearing Possession",
    reraId: "PR/GJ/VADODARA/VADODARA/RAA09532/2024",
    mainImage: "/seven-sky.jpg",
    gallery: [
      "/seven-sky.jpg",
      "/seven-sky-building.jpg"
    ],
    features: [
      "Spacious homes thoughtfully designed for a brighter tomorrow",
      "2,190 sq.ft super built-up area in prime Chhani, Vadodara",
      "Grand high-rise residential tower with premium commercial frontage",
      "Allotted car parking & modern high-speed elevators"
    ],
    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Multipurpose Hall",
      "Landscaped Garden",
      "Children's Play Area",
      "Allotted Car Parking",
      "24x7 Security",
      "Modern Lifts"
    ],
    nearby: [
      "Chhani Lakefront (700m)",
      "Dumad Toll Plaza / Highway (3.0 km)",
      "Fatehgunj Hub (4.5 km)",
      "Vadodara Railway Station (6.0 km)"
    ],
    description: "Seven Sky — Elevate Your Lifestyle with 3 BHK Luxury Apartments in Chhani, Vadodara. Starting from ₹60 Lacs* with 2,190 sq.ft super built-up area, swimming pool, gymnasium, multipurpose hall, landscaped garden, and 24x7 security."
  },
  {
    id: "prop-premium-commercial",
    title: "Premium Commercial Space",
    slug: "premium-commercial-space-vadodara",
    type: "Commercial Space",
    category: "commercial",
    badge: "Prime Commercial",
    price: 7500000,
    priceDisplay: "Price on Request",
    location: "Vasna Road",
    fullAddress: "High-Visibility Commercial Corridor, Vasna Road, Diwalipura, Vadodara - 390007",
    bhk: 0,
    bhkDisplay: "Commercial",
    bathrooms: 1,
    balconies: 0,
    superArea: "850 - 2,400 sq.ft",
    carpetArea: "610 - 1,720 sq.ft",
    furnishing: "Bare Shell with High Ceilings & Full Glass Facade",
    facing: "Main Arterial Road Facing",
    floor: "Ground Showrooms & 1st/2nd Floor Offices",
    possession: "Ready for Fit-outs",
    reraId: "PR/GJ/VADODARA/VADODARA/RAA11005/2024",
    mainImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Wide frontage with maximum brand visibility from main road",
      "Double-height entrance lobby & high-speed passenger elevators",
      "100% DG power backup for continuous business operations",
      "Ideal for retail showrooms, corporate offices, clinics & cafes"
    ],
    amenities: [
      "Grand Commercial Atrium",
      "Valet Visitor Parking",
      "24x7 Security & CCTV Monitoring",
      "Fire Hydrant & Smoke Detection Systems",
      "EV Charging Stations"
    ],
    nearby: [
      "Ward 11 Civic Centre (Adjacent)",
      "HDFC & Axis Bank Branches (150m)",
      "Diwalipura Old Court (1.0 km)",
      "Old Padra Road (1.5 km)"
    ],
    description: "Premium commercial showroom and corporate office spaces located on Vadodara's prime commercial arterial road. High footfall, excellent visibility, and state-of-the-art infrastructure designed to elevate your business presence."
  }
];
