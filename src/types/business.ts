// Business-related types for Spa and Deck Creations

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface BusinessHours {
  weekday: string;
  saturday: string;
  sunday: string;
}

export interface Location {
  name: string;
  address: Address;
  phone: string;
  email: string;
  hours: BusinessHours;
  coordinates: Coordinates;
}

export interface Product {
  name: string;
  description: string;
  categories: string[];
}

export interface Service {
  name: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}


export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  google?: string;
  twitter?: string;
  linkedin?: string;
}

export interface SEOData {
  siteName: string;
  siteUrl: string;
  description: string;
  keywords: string[];
  image: string;
  twitterHandle?: string;
}

export interface HubSpotConfig {
  portalId?: string;
  forms: {
    blueRidge?: string;
    blairsville?: string;
    service?: string;
    general?: string;
  };
}

export interface AnalyticsConfig {
  googleAnalytics?: string;
}

export interface CloudinaryConfig {
  cloudName?: string;
}

export interface IntegrationConfig {
  hubspot: HubSpotConfig;
  analytics: AnalyticsConfig;
  cloudinary: CloudinaryConfig;
}

export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}

// Form-related types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: 'blueRidge' | 'blairsville' | 'general';
  subject: string;
  message: string;
  serviceType?: string;
  preferredContact?: 'email' | 'phone';
}

export interface ServiceRequestData extends ContactFormData {
  serviceType: 'maintenance' | 'repair' | 'installation' | 'consultation';
  urgency: 'routine' | 'urgent';
  description: string;
}

// Page metadata types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  noindex?: boolean;
}

// Component prop types
export interface LocationCardProps {
  location: Location;
  className?: string;
  showFullDetails?: boolean;
}

export interface ProductCardProps {
  product: Product;
  className?: string;
  imageUrl?: string;
}

export interface ServiceCardProps {
  service: Service;
  className?: string;
  linkHref?: string;
}

export interface TestimonialProps {
  name: string;
  location: string;
  content: string;
  rating?: number;
  image?: string;
}