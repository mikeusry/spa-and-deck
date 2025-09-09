// HubSpot form integration for lead capture
import { INTEGRATIONS } from './constants';
import type { 
  HubSpotFormField, 
  HubSpotSubmissionData, 
  ContactFormData, 
  ServiceRequestFormData,
  FormSubmissionResponse 
} from '@/types/forms';

class HubSpotService {
  private portalId: string;
  private baseUrl: string;

  constructor() {
    this.portalId = INTEGRATIONS.hubspot.portalId || '';
    this.baseUrl = 'https://api.hsforms.com/submissions/v3/integration/submit';
    
    if (!this.portalId) {
      console.warn('HubSpot portal ID not configured. Forms will use fallback handling.');
    }
  }

  /**
   * Submit form data to HubSpot
   */
  async submitForm(
    formId: string, 
    formData: Record<string, string | number | boolean>,
    context?: {
      hutk?: string;
      pageUri?: string;
      pageName?: string;
    }
  ): Promise<FormSubmissionResponse> {
    if (!this.portalId || !formId) {
      console.error('HubSpot portal ID or form ID not configured');
      return {
        success: false,
        message: 'Form configuration error. Please contact us directly.',
        errors: [{ field: 'general', message: 'Configuration error' }]
      };
    }

    try {
      // Convert form data to HubSpot format
      const fields: HubSpotFormField[] = Object.entries(formData).map(([name, value]) => ({
        objectTypeId: '0-1', // Contact object type
        name,
        value: String(value)
      }));

      const submissionData: HubSpotSubmissionData = {
        fields,
        context: {
          hutk: this.getHubSpotCookie(),
          pageUri: context?.pageUri || (typeof window !== 'undefined' ? window.location.href : ''),
          pageName: context?.pageName || (typeof document !== 'undefined' ? document.title : ''),
          ...context
        }
      };

      const response = await fetch(
        `${this.baseUrl}/${this.portalId}/${formId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        }
      );

      if (response.ok) {
        return {
          success: true,
          message: 'Thank you for your submission! We\'ll be in touch soon.',
        };
      } else {
        const errorData = await response.json().catch(() => ({}));
        return {
          success: false,
          message: 'There was an error submitting your form. Please try again.',
          errors: errorData.errors || [{ field: 'general', message: 'Submission failed' }]
        };
      }
    } catch (error) {
      console.error('HubSpot form submission error:', error);
      return {
        success: false,
        message: 'Network error. Please check your connection and try again.',
        errors: [{ field: 'general', message: 'Network error' }]
      };
    }
  }

  /**
   * Submit contact form for general inquiries
   */
  async submitContactForm(data: ContactFormData): Promise<FormSubmissionResponse> {
    const formId = this.getFormId('general');
    
    const hubspotData = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phone: data.phone,
      company: data.company || '',
      location_preference: data.location,
      interested_in: data.interestedIn,
      message: data.message,
      preferred_contact_method: data.preferredContact,
      best_time_to_call: data.bestTimeToCall || '',
      newsletter_signup: data.newsletter || false,
    };

    return this.submitForm(formId, hubspotData, {
      pageName: 'Contact Form'
    });
  }

  /**
   * Get HubSpot tracking cookie (hutk)
   */
  private getHubSpotCookie(): string | undefined {
    if (typeof document === 'undefined') return undefined;
    
    const match = document.cookie.match(/hubspotutk=([^;]*)/);
    return match ? match[1] : undefined;
  }

  /**
   * Get form ID based on form type
   */
  private getFormId(formType: 'general' | 'blueRidge' | 'blairsville' | 'service'): string {
    const forms = INTEGRATIONS.hubspot.forms;
    
    switch (formType) {
      case 'blueRidge':
        return forms.blueRidge || '';
      case 'blairsville':
        return forms.blairsville || '';
      case 'service':
        return forms.service || '';
      case 'general':
      default:
        return forms.general || '';
    }
  }

  /**
   * Load HubSpot tracking script
   */
  loadTrackingScript(): void {
    if (!this.portalId || typeof window === 'undefined') return;

    // Check if script already loaded
    if (document.querySelector(`script[src*="js.hs-scripts.com/${this.portalId}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.src = `//js.hs-scripts.com/${this.portalId}.js`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
}

// Export singleton instance
export const hubspot = new HubSpotService();

export default hubspot;