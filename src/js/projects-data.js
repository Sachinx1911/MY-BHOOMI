/* ==========================================
   MY BHOOMI GROUP - STRUCTURED PROJECTS DATABASE (6 Flagship Assets)
   ========================================== */
export const projects = [
  {
    id: 'dhanraj-hills',
    title: 'Dhanraj Hills',
    category: 'investment-lands',
    location: 'Khed-Shivapur, Pune South',
    roi: '18% Expected ROI',
    price: '₹18 Lakhs',
    priceRaw: 1800000,
    priceSqFt: '₹900/sq.ft.',
    size: '2,000 - 5,000 sq.ft.',
    rera: 'MahaRERA-P52100054321',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    description: 'Scenic high-appreciation NA plots positioned along the rapid expansion corridor of Pune-Bangalore Highway. Engineered with grid internal tar roads, landscaping, and instant elevation views.',
    connectivity: [
      { name: 'Pune-Bangalore Highway (NH-48)', time: '10 Mins' },
      { name: 'Katraj Bypass Tunnel', time: '18 Mins' },
      { name: 'Upcoming Pune Ring Road Junction', time: '8 Mins' },
      { name: 'Baneshwar National Sanctuary', time: '12 Mins' }
    ],
    amenities: [
      { title: '30ft Tar Roads', icon: '🛣️', desc: 'Premium internal wide asphalt roads' },
      { title: 'Water Connection', icon: '🚰', desc: 'Direct supply to individual plot boundaries' },
      { title: 'Electrical Feeders', icon: '⚡', desc: 'Underground high-tension cables' },
      { title: '24/7 Gated Guarding', icon: '🛡️', desc: 'Perimeter fence with bullet security cabin' }
    ]
  },
  {
    id: 'dhanraj-farms',
    title: 'Dhanraj Farms',
    category: 'farm-plots',
    location: 'Kurunji, Pune Region',
    roi: '15% Expected ROI',
    price: '₹35 Lakhs',
    priceRaw: 3500000,
    priceSqFt: '₹600/sq.ft.',
    size: '10,890 sq.ft. (1/4 Acre)',
    rera: 'Legally Demarcated Agricultural Land',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
    description: 'Luxury organic farm layouts meticulously cleared and set up with drip irrigation systems, rich soil indexing, and perimeter fencing. Ideal for generational farming or cabin investment.',
    connectivity: [
      { name: 'Khed-Shivapur Toll Plaza', time: '20 Mins' },
      { name: 'Pune Metropolitan Boundary', time: '40 Mins' },
      { name: 'Bhor Historical Valley', time: '15 Mins' },
      { name: 'Shirin International Club', time: '25 Mins' }
    ],
    amenities: [
      { title: 'Organic Soil Prep', icon: '🌱', desc: 'Enriched soil bed ready for plantations' },
      { title: 'Drip Irrigation', icon: '💦', desc: 'Fully automated water conservation grid' },
      { title: 'Premium Fruit Trees', icon: '🍎', desc: 'Planted Mango, Coconut, and Chikoo trees' },
      { title: 'Designer Gateways', icon: '⛩️', desc: 'Traditional styled farm entry portals' }
    ]
  },
  {
    id: 'mdy-farms',
    title: 'MDY Farms',
    category: 'weekend-homes',
    location: 'Ketkavane, Pune Highway',
    roi: '22% Expected ROI',
    price: '₹25 Lakhs',
    priceRaw: 2500000,
    priceSqFt: '₹1,250/sq.ft.',
    size: '2,000 - 4,000 sq.ft.',
    rera: 'MahaRERA-P52100067890',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
    description: 'Prestige weekend home estates sitting immediately adjacent to the sacred Baneshwar temple. Built for family retreats with shared premium amenities, concrete roads, and high appreciating density.',
    connectivity: [
      { name: 'Baneshwar Ancient Temple', time: '2 Mins' },
      { name: 'NH-48 Highway Access', time: '5 Mins' },
      { name: 'Katraj Metro Hub', time: '22 Mins' },
      { name: 'Proposed Purandar Airport', time: '35 Mins' }
    ],
    amenities: [
      { title: 'Clubhouse Access', icon: '🏡', desc: 'Community center with indoor sports lounge' },
      { title: 'Concrete Internal Roads', icon: '🛣️', desc: 'Ultra-durable pathways with drainage channels' },
      { title: 'LED Street Lighting', icon: '💡', desc: 'Modern solar powered street illumination' },
      { title: 'Children Play Zones', icon: '🏞️', desc: 'Eco-friendly parks and active landscape lawns' }
    ]
  },
  {
    id: 'mdy-hills',
    title: 'MDY Hills',
    category: 'investment-lands',
    location: 'Kanjale, Pune South',
    roi: '17% Expected ROI',
    price: '₹16 Lakhs',
    priceRaw: 1600000,
    priceSqFt: '₹800/sq.ft.',
    size: '2,000 - 4,500 sq.ft.',
    rera: 'MahaRERA-P52100055555',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop',
    description: 'Scenic hill-facing residential plots in Kanjale, offering pristine air indexes and dynamic appreciation yields. Secured inside an engineering-grade perimeter wall.',
    connectivity: [
      { name: 'Khed-Shivapur Toll Plaza', time: '12 Mins' },
      { name: 'NH-48 Highway Access', time: '8 Mins' },
      { name: 'Bhor Valley Road', time: '10 Mins' },
      { name: 'Katraj Metro Junction', time: '25 Mins' }
    ],
    amenities: [
      { title: 'Designer Portal', icon: '⛩️', desc: 'Grand entry archway with security barriers' },
      { title: 'Solar Street Lights', icon: '☀️', desc: 'Eco-friendly, round-the-clock street lighting' },
      { title: 'Plot Fencing', icon: '🪟', desc: 'Individual brick boundary walls' },
      { title: 'Electricity Feeder', icon: '⚡', desc: 'Underground high-tension connection grid' }
    ]
  },
  {
    id: 'baneshwar-greens',
    title: 'Baneshwar Greens',
    category: 'investment-lands',
    location: 'Degaon, Pune Corridor',
    roi: '19% Expected ROI',
    price: '₹21 Lakhs',
    priceRaw: 2100000,
    priceSqFt: '₹1,050/sq.ft.',
    size: '2,000 - 5,000 sq.ft.',
    rera: 'MahaRERA-P52100077777',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format&fit=crop',
    description: 'Premium NA residential plotting developments in Degaon, positioned perfectly adjacent to lush forest zones, delivering the ultimate blend of investment return and lifestyle.',
    connectivity: [
      { name: 'Baneshwar Sanctuary Gate', time: '5 Mins' },
      { name: 'NH-48 highway corridor', time: '8 Mins' },
      { name: 'Katraj Bypass Tunnel', time: '20 Mins' },
      { name: 'Proposed Ring Road Intersection', time: '10 Mins' }
    ],
    amenities: [
      { title: 'Storm-Water Drains', icon: '🌧️', desc: 'Institutional grade concrete drainage grids' },
      { title: 'Direct Water pipeline', icon: '🚰', desc: 'Pre-fitted direct tap feeds on every plot' },
      { title: '30ft Wide Roads', icon: '🛣️', desc: 'Wide tar internal road network' },
      { title: 'Tree Plantation', icon: '🌳', desc: 'Pre-planted ornamental trees on pathways' }
    ]
  },
  {
    id: 'balaji-solace',
    title: 'Balaji Solace',
    category: 'farm-plots',
    location: 'Male, Pune Region',
    roi: '16% Expected ROI',
    price: '₹39 Lakhs',
    priceRaw: 3900000,
    priceSqFt: '₹650/sq.ft.',
    size: '21,780 sq.ft. (1/2 Acre)',
    rera: 'Clear-Title Demarcated Agricultural Land',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    description: 'Exclusive estate-sized agricultural farm layouts in Male. Configured with rich soil indexing, individual water source access, and pre-developed fruit orchards.',
    connectivity: [
      { name: 'Nasrapur Toll Junction', time: '15 Mins' },
      { name: 'Katraj Metro Hub', time: '30 Mins' },
      { name: 'Bhor Historic Valley', time: '12 Mins' },
      { name: 'Proposed Ring Road', time: '18 Mins' }
    ],
    amenities: [
      { title: 'Fitted Drip Grids', icon: '💦', desc: 'Fully automated organic watering setup' },
      { title: '100+ Plantation Beds', icon: '🥭', desc: 'Mango, Cashew, and Sandalwood plantation' },
      { title: 'Traditional Entry Gate', icon: '⛩️', desc: 'Elegantly carved wood-and-stone gateways' },
      { title: '24/7 Patrol Guarding', icon: '🛡️', desc: 'Mobile patrolling and security perimeter' }
    ]
  }
];

export const getProjectById = (id) => projects.find(p => p.id === id);
