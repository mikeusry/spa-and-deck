// Form-related types for HubSpot integration and form handling

export interface BaseFormField {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

export interface TextFormField extends BaseFormField {
  type: 'text' | 'email' | 'tel' | 'url';
  maxLength?: number;
  minLength?: number;
}

export interface TextareaFormField extends BaseFormField {
  type: 'textarea';
  rows?: number;
  maxLength?: number;
}

export interface SelectFormField extends BaseFormField {
  type: 'select';
  options: Array<{
    value: string;
    label: string;
  }>;
  multiple?: boolean;
}

export interface CheckboxFormField extends BaseFormField {
  type: 'checkbox';
  checked?: boolean;
}

export interface RadioFormField extends BaseFormField {
  type: 'radio';
  options: Array<{
    value: string;
    label: string;
  }>;
}

export type FormField = 
  | TextFormField 
  | TextareaFormField 
  | SelectFormField 
  | CheckboxFormField 
  | RadioFormField;

export interface FormConfig {
  fields: FormField[];
  submitButtonText?: string;
  successMessage?: string;
  errorMessage?: string;
  className?: string;
}

// HubSpot specific types
export interface HubSpotFormField {
  objectTypeId: string;
  name: string;
  value: string;
}

export interface HubSpotSubmissionData {
  fields: HubSpotFormField[];
  context?: {
    hutk?: string;
    pageUri: string;
    pageName: string;
  };
  legalConsentOptions?: {
    consent: {
      consentToProcess: boolean;
      text: string;
      communications?: Array<{
        value: boolean;
        subscriptionTypeId: number;
        text: string;
      }>;
    };
  };
}

// Specific form data types
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  location: 'blueRidge' | 'blairsville' | 'both' | 'other';
  interestedIn: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'either';
  bestTimeToCall?: string;
  newsletter?: boolean;
}

export interface ServiceRequestFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  serviceType: 'maintenance' | 'repair' | 'warranty' | 'installation' | 'consultation';
  urgency: 'routine' | 'asap';
  spaModel?: string;
  issueDescription: string;
  preferredServiceDate?: string;
  additionalNotes?: string;
}

export interface NewsletterFormData {
  email: string;
  firstName?: string;
  location?: string;
  interests?: string[];
}

export interface QuoteRequestFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  productType: 'hot-tub' | 'swim-spa' | 'sauna' | 'accessories' | 'unsure';
  budgetRange: 'under-10k' | '10k-20k' | '20k-30k' | '30k-plus' | 'flexible';
  timeframe: 'immediate' | 'within-month' | 'within-quarter' | 'just-browsing';
  currentSpa?: boolean;
  installationNeeds?: string;
  additionalInfo?: string;
}

// Form validation types
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
}

export interface FieldValidation {
  [fieldName: string]: ValidationRule;
}

export interface FormValidation {
  fields: FieldValidation;
  customValidation?: (data: Record<string, unknown>) => Record<string, string>;
}

export interface FormError {
  field: string;
  message: string;
}

export interface FormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  errors: FormError[];
  success?: string;
}

// Form submission response types
export interface FormSubmissionResponse {
  success: boolean;
  message?: string;
  errors?: FormError[];
  redirectUrl?: string;
}

export interface HubSpotResponse {
  inlineMessage: string;
  redirectUrl?: string;
  errors?: Array<{
    message: string;
    errorType: string;
  }>;
}