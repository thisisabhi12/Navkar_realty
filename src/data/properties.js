export const VADODARA_LOCALITIES = [
  "All Locations",
  "Vasna Road",
  "Diwalipura",
  "Gotri - Ankodia",
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
    superArea: "3,202 sq.ft",
    carpetArea: "2,400 sq.ft",
    furnishing: "Designer Bare Shell / Custom Finished",
    facing: "East Facing (100% Vastu Compliant)",
    floor: "High Rise Tower",
    possession: "Under Construction (Possession 2026)",
    reraId: "PR/GJ/VADODARA/VADODARA/RAA11842/2024",
    mainImage: "/seven-vierra.jpg",
    gallery: [
      "/seven-vierra.jpg",
      "/seven-vierra-building.jpg",
      "/seven-vierra-pool.jpg",
      "/seven-vierra-living.jpg",
      "/seven-vierra-gym.jpg"
    ],
    features: [
      "Spacious 4 BHK homes with modern architecture & luxury lifestyle",
      "3,202 sq.ft super built-up area in prime Vasna Road, Diwalipura",
      "A higher standard of living with double-height illuminated balconies",
      "Covered parking, EV charging, and high-speed elevators"
    ],
    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Clubhouse",
      "Multipurpose Hall",
      "Children's Play Area",
      "Landscaped Garden",
      "Allotted Car Parking",
      "24x7 Security",
      "Modern Lifts"
    ],
    nearby: [
      "Diwalipura Court (900m)",
      "D-Mart Vasna Road (1.2 km)",
      "Old Padra Road (2.5 km)",
      "Railway Station (5.5 km)"
    ],
    description: "Seven Vierra — Luxury Living Redefined in Vadodara. A place where luxury meets a brighter tomorrow, offering grand 4 BHK premium apartments starting from ₹1 Cr* with 3,202 sq.ft super built-up area, swimming pool, gymnasium, clubhouse, and world-class society amenities."
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
    id: "prop-antica-greenwood",
    title: "Antica Greenwood",
    slug: "antica-greenwood-ankodia-gotri-vadodara",
    type: "4 BHK Luxury Villa",
    category: "villa",
    badge: "Signature Estate",
    price: 100000000,
    priceDisplay: "₹ 10 Crore*",
    location: "Gotri",
    fullAddress: "Near Ankodia Canal Road, Off Gotri Sevasi Road, Vadodara - 391101",
    bhk: 4,
    bhkDisplay: "4 BHK Villa",
    bathrooms: 5,
    balconies: 4,
    superArea: "5,800 sq.ft",
    carpetArea: "4,450 sq.ft",
    furnishing: "Bespoke Italian Marble & Luxury Designer Finishes",
    facing: "East Facing (100% Vastu Compliant)",
    floor: "Multi-Storey Private Luxury Mansion",
    possession: "Ready for Exclusive Fit-outs",
    reraId: "PR/GJ/VADODARA/VADODARA/RAA11928/2024",
    mainImage: "/antica-greenwood.jpg",
    gallery: [
      "/antica-greenwood.jpg",
      "/antica-greenwood-building.jpg",
      "/antica-greenwood-living.jpg",
      "/antica-greenwood-bedroom.jpg",
      "/antica-greenwood-terrace.jpg"
    ],
    features: [
      "Nature Meets Luxury — Where luxury lives in greenery",
      "5,800 sq.ft expansive private estate villa in prime Ankodia, Gotri",
      "Opulent double-height living areas with bespoke Italian marble",
      "Private terrace lounge, landscaped pergola garden & multi-car portico"
    ],
    amenities: [
      "Gated Community",
      "Landscaped Gardens",
      "Wide Internal Roads",
      "24x7 Security",
      "Ample Parking",
      "Peaceful Surroundings"
    ],
    nearby: [
      "Gotri Main Road (1.5 km)",
      "Sevasi Heritage Stepwell (2.2 km)",
      "Bhailal Amin Hospital (4.5 km)",
      "Vadodara Railway Station (7.5 km)"
    ],
    description: "Antica Greenwood — Nature Meets Luxury in Ankodia, Gotri, Vadodara. Where luxury lives in greenery, offering monumental 4 BHK private estate villas starting from ₹10 Crore* with 5,800 sq.ft super built-up area, private landscaped gardens, pergola terrace deck, and 24x7 gated community security."
  },
  {
    id: "prop-prakruti-harmony",
    title: "Prakruti Harmony",
    slug: "prakruti-harmony-bil-kalali-vadodara",
    type: "4 BHK Tenements",
    category: "villa",
    badge: "Nature & Luxury",
    price: 9000000,
    priceDisplay: "₹ 90 Lakhs*",
    location: "Bil - Kalali",
    fullAddress: "Bil-Kalali Main Road, Near DPS Kalali, Vadodara - 391410",
    bhk: 4,
    bhkDisplay: "4 BHK",
    bathrooms: 4,
    balconies: 2,
    superArea: "1,985 sq.ft",
    carpetArea: "1,520 sq.ft",
    furnishing: "Semi-Furnished with Modular Kitchen",
    facing: "East Facing",
    floor: "Ground + 1 Storey Independent Tenement",
    possession: "Ready to Move",
    reraId: "PR/GJ/VADODARA/PADRA/RAA08119/2023",
    mainImage: "/prakruti-harmony.jpg",
    gallery: [
      "/prakruti-harmony.jpg",
      "/prakruti-harmony-building.jpg",
      "/prakruti-harmony-living.jpg",
      "/prakruti-harmony-bedroom.jpg",
      "/prakruti-harmony-terrace.jpg"
    ],
    features: [
      "Nature, Family, Luxury in Perfect Harmony — A home that grows with you",
      "1,985 sq.ft super built-up area in greener Bil-Kalali neighborhood",
      "Spacious living areas with dedicated private terrace spaces",
      "Wide internal roads with 24x7 security and ample parking"
    ],
    amenities: [
      "Clubhouse",
      "Landscaped Garden",
      "Children's Play Area",
      "Wide Internal Roads",
      "24x7 Security",
      "Ample Parking",
      "Green Environment"
    ],
    nearby: [
      "Delhi Public School (DPS) Kalali (1.2 km)",
      "Atladra Swaminarayan Temple (3.0 km)",
      "Vasna Road D-Mart (3.8 km)",
      "Bhailal Amin Hospital (5.0 km)"
    ],
    description: "Prakruti Harmony — Nature • Family • Luxury in Perfect Harmony at Bil, Kalali, Vadodara. A home that grows with you, featuring 4 BHK tenements starting from ₹90 Lakhs* with 1,985 sq.ft super built-up area, private terrace spaces, clubhouse, landscaped garden, and serene green surroundings."
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
    badge: "Landmark Commercial",
    price: 800000000,
    priceDisplay: "₹ 80 Crore*",
    location: "Vasna Road",
    fullAddress: "High-Visibility Commercial Corridor, Vasna Road, Diwalipura, Vadodara - 390007",
    bhk: 0,
    bhkDisplay: "Commercial",
    bathrooms: 8,
    balconies: 0,
    superArea: "Commercial Floors & Retail Showrooms",
    carpetArea: "Custom Modular Floorplates",
    furnishing: "Bare Shell with High Ceilings & Full Glass Facade",
    facing: "Main Arterial Road Facing (360° Open View)",
    floor: "Multi-Storey Landmark Commercial Tower",
    possession: "Ready for Fit-outs",
    reraId: "PR/GJ/VADODARA/VADODARA/RAA11005/2024",
    mainImage: "/premium-commercial-space.jpg",
    gallery: [
      "/premium-commercial-space.jpg"
    ],
    features: [
      "For a Brighter Business Tomorrow — Landmark commercial modern architecture",
      "Prime commercial area with easy accessibility and high investment potential",
      "360° panoramic view available with high-performance glass facade & designer lattice",
      "Ample parking space with multi-vehicle visitor parking & 24x7 security",
      "Suitable for multiple businesses: corporate offices, retail showrooms, banks & institutions"
    ],
    amenities: [
      "Prime Location",
      "Modern Architecture",
      "Ample Parking Space",
      "Lift Facility",
      "360° View Available",
      "24x7 Security",
      "Easy Accessibility",
      "High Investment Potential"
    ],
    nearby: [
      "Ward 11 Civic Centre (Adjacent)",
      "HDFC & Axis Bank Branches (150m)",
      "Diwalipura Old Court (1.0 km)",
      "Old Padra Road (1.5 km)"
    ],
    description: "Premium Commercial Space — For a Brighter Business Tomorrow in Vadodara. A landmark commercial development offered at ₹80 Crore* situated in a prime commercial area with easy accessibility, modern architecture, ample parking space, high-speed lift facilities, 360° views, and 24x7 security. Suitable for multiple businesses including corporate headquarters and flagship retail showrooms."
  }
];
