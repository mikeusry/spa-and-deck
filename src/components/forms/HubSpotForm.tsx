'use client';

import { useEffect } from 'react';

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  className?: string;
  onFormSubmit?: () => void;
}

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormSubmit?: () => void;
        }) => void;
      };
    };
  }
}

export default function HubSpotForm({ 
  portalId, 
  formId, 
  region = 'na1',
  className = '',
  onFormSubmit 
}: HubSpotFormProps) {
  useEffect(() => {
    let retryIntervalId: NodeJS.Timeout | null = null;
    let timeoutIntervalId: NodeJS.Timeout | null = null;

    function createForm() {
      const target = `#hubspot-form-${formId}`;
      const targetElement = document.querySelector(target);
      
      // Enhanced duplicate prevention - check for any form element or HubSpot-specific classes
      if (targetElement && 
          window.hbspt?.forms && 
          !targetElement.querySelector('form') &&
          !targetElement.querySelector('.hs-form') &&
          !targetElement.querySelector('[data-hs-forms-root]') &&
          !targetElement.hasAttribute('data-hs-form-created')) {
        
        // Mark as being created
        targetElement.setAttribute('data-hs-form-created', 'true');
        
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target,
          onFormSubmit: onFormSubmit
        });
      }
    }

    // Load HubSpot script if not already loaded
    if (typeof window !== 'undefined' && !window.hbspt) {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.hbspt) {
          createForm();
        }
      };
    } else if (window.hbspt) {
      // Small delay to ensure DOM is ready
      setTimeout(createForm, 100);
    }

    // Retry form creation if HubSpot takes time to load
    retryIntervalId = setInterval(() => {
      const targetElement = document.querySelector(`#hubspot-form-${formId}`);
      if (window.hbspt?.forms && targetElement && !targetElement.querySelector('form')) {
        createForm();
        if (retryIntervalId) clearInterval(retryIntervalId);
      }
    }, 500);

    // Clean up interval after 10 seconds
    timeoutIntervalId = setTimeout(() => {
      if (retryIntervalId) clearInterval(retryIntervalId);
    }, 10000);

    return () => {
      if (retryIntervalId) clearInterval(retryIntervalId);
      if (timeoutIntervalId) clearTimeout(timeoutIntervalId);
    };
  }, [portalId, formId, region, onFormSubmit]);

  return (
    <div 
      id={`hubspot-form-${formId}`} 
      className={className}
      style={{
        // Custom HubSpot form styling
        '--hs-form-color-primary': '#2563eb',
        '--hs-form-color-primary-hover': '#1d4ed8',
        '--hs-form-border-radius': '0.5rem',
        '--hs-form-font-family': 'Inter, system-ui, sans-serif'
      } as React.CSSProperties}
    />
  );
}