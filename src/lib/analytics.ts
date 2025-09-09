// Google Analytics 4 integration
import { INTEGRATIONS } from './constants';

export interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface GAPageView {
  page_title: string;
  page_location: string;
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'js' | 'config' | 'event' | 'consent' | 'get',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: Array<Record<string, unknown>>;
  }
}

class AnalyticsService {
  private measurementId: string;
  private isInitialized: boolean = false;

  constructor() {
    this.measurementId = INTEGRATIONS.analytics.googleAnalytics || '';
    
    if (typeof window !== 'undefined' && this.measurementId) {
      this.initialize();
    }
  }

  /**
   * Initialize Google Analytics
   */
  private initialize(): void {
    if (this.isInitialized || !this.measurementId) return;

    // Create gtag script
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
    document.head.appendChild(gtagScript);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments as unknown as Record<string, unknown>);
    };

    // Configure GA4
    window.gtag('js', new Date());
    window.gtag('config', this.measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    this.isInitialized = true;
  }

  /**
   * Track page view
   */
  pageView(url: string): void {
    if (!this.isInitialized) return;

    window.gtag('config', this.measurementId, {
      page_path: url,
    });
  }

  /**
   * Track custom event
   */
  event(eventName: string, parameters: Record<string, unknown> = {}): void {
    if (!this.isInitialized) return;

    window.gtag('event', eventName, parameters);
  }

  /**
   * Track conversion event
   */
  conversion(eventName: string, parameters: Record<string, unknown> = {}): void {
    this.event(eventName, {
      send_to: this.measurementId,
      ...parameters,
    });
  }

  /**
   * Common spa business events
   */
  trackQuoteRequest(location: string, serviceType: string): void {
    this.event('generate_lead', {
      event_category: 'engagement',
      event_label: 'quote_request',
      location,
      service_type: serviceType,
      value: 1,
    });
  }

  trackShowroomVisit(location: string): void {
    this.event('schedule_appointment', {
      event_category: 'engagement',
      event_label: 'showroom_visit',
      location,
    });
  }

  trackPhoneCall(location: string): void {
    this.event('phone_call', {
      event_category: 'engagement',
      event_label: 'phone_contact',
      location,
    });
  }

  trackEmailContact(location: string): void {
    this.event('email_contact', {
      event_category: 'engagement',
      event_label: 'email_contact',
      location,
    });
  }

  trackFormSubmission(formType: string, location: string): void {
    this.event('form_submit', {
      event_category: 'engagement',
      event_label: formType,
      location,
    });
  }

  trackProductInterest(productType: string, brand: string): void {
    this.event('view_item', {
      event_category: 'products',
      item_category: productType,
      item_brand: brand,
    });
  }

  trackServiceRequest(serviceType: string, urgency: string): void {
    this.event('service_request', {
      event_category: 'services',
      event_label: serviceType,
      urgency,
    });
  }
}

// Export singleton instance
export const analytics = new AnalyticsService();

// React hook for analytics (optional, for convenience)
export const useAnalytics = () => {
  return {
    trackEvent: (eventName: string, parameters?: Record<string, unknown>) => 
      analytics.event(eventName, parameters),
    trackPageView: (url: string) => analytics.pageView(url),
    trackQuoteRequest: (location: string, serviceType: string) => 
      analytics.trackQuoteRequest(location, serviceType),
    trackShowroomVisit: (location: string) => analytics.trackShowroomVisit(location),
    trackPhoneCall: (location: string) => analytics.trackPhoneCall(location),
    trackEmailContact: (location: string) => analytics.trackEmailContact(location),
    trackFormSubmission: (formType: string, location: string) => 
      analytics.trackFormSubmission(formType, location),
  };
};

export default analytics;