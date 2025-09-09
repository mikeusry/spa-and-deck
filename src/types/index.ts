// Main type exports for Spa and Deck Creations

// Business types
export type {
  Address,
  Coordinates,
  BusinessHours,
  Location,
  Product,
  Service,
  ContactInfo,
  SocialLinks,
  SEOData,
  HubSpotConfig,
  AnalyticsConfig,
  CloudinaryConfig,
  IntegrationConfig,
  NavigationItem,
  PageMetadata,
  LocationCardProps,
  ProductCardProps,
  ServiceCardProps,
  TestimonialProps,
  ContactFormData as BusinessContactFormData,
  ServiceRequestData
} from './business';

// Form types
export type {
  BaseFormField,
  TextFormField,
  TextareaFormField,
  SelectFormField,
  CheckboxFormField,
  RadioFormField,
  FormField,
  FormConfig,
  HubSpotFormField,
  HubSpotSubmissionData,
  ContactFormData,
  ServiceRequestFormData,
  NewsletterFormData,
  QuoteRequestFormData,
  ValidationRule,
  FieldValidation,
  FormValidation,
  FormError,
  FormState,
  FormSubmissionResponse,
  HubSpotResponse
} from './forms';

// Component types
export type {
  ButtonVariant,
  ButtonSize,
  CardVariant,
  LoadingState,
  AlertType,
  ModalProps,
  DropdownOption
} from './components';

// Utility types
export type LocationKey = 'blueRidge' | 'blairsville';
export type ServiceType = 'maintenance' | 'repair' | 'installation' | 'consultation';
export type ProductCategory = 'hot-tubs' | 'swim-spas' | 'saunas' | 'accessories';
export type ContactMethod = 'email' | 'phone' | 'form';
export type UrgencyLevel = 'routine' | 'asap';

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface ValidationError extends AppError {
  field: string;
}

// SEO and metadata types
export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface OpenGraphData {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: 'website' | 'article' | 'business.business';
  siteName?: string;
}

export interface TwitterCardData {
  card: 'summary' | 'summary_large_image';
  site?: string;
  creator?: string;
  title: string;
  description: string;
  image: string;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: string | number | boolean | object;
}