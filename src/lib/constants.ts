// Business constants for Georgia Spa Company (formerly Spa and Deck Creations)
export const COMPANY = {
  name: 'Georgia Spa Company',
  formerName: 'Spa and Deck Creations',
  tagline: 'North Georgia\'s Premier Spa Dealership',
  established: '40+ years',
  description: 'Formerly Spa and Deck Creations - Same trusted team, same great service, now with enhanced capabilities as Georgia Spa Company.',
  transitionMessage: 'Important Notice: Spa and Deck Creations is now Georgia Spa Company. Your local Blue Ridge and Blairsville teams remain the same.',
} as const;

export const LOCATIONS = {
  blueRidge: {
    name: 'Blue Ridge Showroom',
    address: {
      street: '5772 Appalachian Hwy',
      city: 'Blue Ridge',
      state: 'GA',
      zip: '30513',
    },
    phone: process.env.NEXT_PUBLIC_BLUE_RIDGE_PHONE || '+1-706-632-1833',
    email: process.env.NEXT_PUBLIC_BLUE_RIDGE_EMAIL || 'sales@georgiaspacompany.com',
    hours: {
      weekday: 'Monday - Friday: 10:00 AM - 5:00 PM',
      saturday: 'Saturday: 10:00 AM - 3:00 PM',
      sunday: 'Sunday: Closed'
    },
    coordinates: {
      lat: 34.8256, // 5772 Appalachian Hwy coordinates (near 515 Appalachian Hwy reference)
      lng: -84.3587
    }
  },
  blairsville: {
    name: 'Blairsville Showroom',
    address: {
      street: '19 Hollow Hill Rd',
      city: 'Blairsville',
      state: 'GA',
      zip: '30512',
    },
    phone: process.env.NEXT_PUBLIC_BLAIRSVILLE_PHONE || '+1-706-745-0630',
    email: process.env.NEXT_PUBLIC_BLAIRSVILLE_EMAIL || 'sales@georgiaspacompany.com',
    hours: {
      weekday: 'Monday - Friday: 10:00 AM - 5:00 PM',
      saturday: 'Saturday: 10:00 AM - 3:00 PM',
      sunday: 'Sunday: Closed'
    },
    coordinates: {
      lat: 34.8782, // More accurate Blairsville area coordinates
      lng: -83.9582
    }
  }
} as const;

export const PRODUCTS = {
  hotSpring: {
    name: 'Hot Spring Spas',
    description: 'Premium hot tub collection with industry-leading energy efficiency and therapeutic benefits.',
    categories: ['Highlife Collection', 'Limelight Collection', 'Hot Spot Collection']
  },
  caldera: {
    name: 'Caldera Spas',
    description: 'Luxury wellness solutions featuring innovative design and superior performance.',
    categories: ['Utopia Series', 'Paradise Series', 'Vacanza Series', 'Salina Series']
  },
  endlessPools: {
    name: 'Endless Pools',
    description: 'Swim spas and exercise pools for year-round fitness and recreation.',
    categories: ['Swim Spas', 'Fitness Systems', 'Pool Alternatives']
  },
  saunas: {
    name: 'Saunas',
    description: 'Traditional and infrared sauna options for ultimate relaxation and health benefits.',
    categories: ['Traditional Saunas', 'Infrared Saunas', 'Outdoor Saunas']
  },
  accessories: {
    name: 'Spa Accessories',
    description: 'Complete range of chemicals, covers, and maintenance supplies.',
    categories: ['Chemicals & Water Care', 'Spa Covers', 'Steps & Accessories', 'Maintenance Supplies']
  }
} as const;

export const SERVICES = {
  sales: {
    name: 'New Spa Sales',
    description: 'Expert consultation and installation of premium hot tubs and swim spas.',
    icon: 'shopping-bag'
  },
  service: {
    name: 'Spa Service & Repair',
    description: 'Professional maintenance and repair services to keep your spa running perfectly.',
    icon: 'wrench-screwdriver'
  },
  maintenance: {
    name: 'Regular Maintenance',
    description: 'Scheduled maintenance programs to extend your spa\'s life and performance.',
    icon: 'cog-6-tooth'
  },
  chemicals: {
    name: 'Water Care & Chemicals',
    description: 'Complete water treatment solutions and chemical delivery services.',
    icon: 'beaker'
  },
  covers: {
    name: 'Spa Covers & Parts',
    description: 'Custom spa covers, replacement parts, and accessories.',
    icon: 'shield-check'
  },
  consultation: {
    name: 'Design Consultation',
    description: 'Personalized consultation for spa placement and backyard design.',
    icon: 'light-bulb'
  }
} as const;

export const SERVICE_AREAS = [
  'Blairsville',
  'Blue Ridge',
  'Hiawassee',
  'Young Harris',
  'Dahlonega',
  'Helen',
  'Cleveland',
  'Murphy, NC',
  'Hayesville, NC'
] as const;

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/GeorgiaSpaCompany',
  instagram: 'https://www.instagram.com/georgiaspacompany/',
  x: 'https://x.com/GeorgiaSpaComp',
  google: 'https://g.page/georgiaspacompany'
} as const;

export const CONTACT_INFO = {
  general: {
    email: process.env.NEXT_PUBLIC_GENERAL_EMAIL || 'sales@georgiaspacompany.com',
    phone: process.env.NEXT_PUBLIC_GENERAL_PHONE || '(678) 383-2583'
  }
} as const;

// SEO and metadata constants
export const SEO = {
  siteName: 'Georgia Spa Company',
  siteUrl: 'https://georgiaspacompany.com',
  description: 'Formerly Spa and Deck Creations - North Georgia\'s premier spa dealership serving Blue Ridge and Blairsville for over 40 years. Hot Spring Spas, Caldera Spas, Endless Pools, and complete spa services.',
  keywords: [
    'hot tubs North Georgia',
    'spas Blue Ridge',
    'spa dealer Blairsville',
    'Hot Spring Spas',
    'Caldera Spas',
    'Endless Pools',
    'spa service North Georgia',
    'hot tub maintenance',
    'spa chemicals'
  ],
  image: '/images/og-image.jpg',
  twitterHandle: '@georgiaspacompany'
} as const;

// Integration configuration
export const INTEGRATIONS = {
  hubspot: {
    portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
    forms: {
      blueRidge: process.env.NEXT_PUBLIC_HUBSPOT_BLUE_RIDGE_FORM_ID,
      blairsville: process.env.NEXT_PUBLIC_HUBSPOT_BLAIRSVILLE_FORM_ID,
      service: process.env.NEXT_PUBLIC_HUBSPOT_SERVICE_FORM_ID,
      general: process.env.NEXT_PUBLIC_HUBSPOT_GENERAL_FORM_ID
    }
  },
  analytics: {
    googleAnalytics: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },
  cloudinary: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  }
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blue Ridge', href: '/locations/blue-ridge' },
  { name: 'Blairsville', href: '/locations/blairsville' }
] as const;