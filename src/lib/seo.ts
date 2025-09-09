// SEO utilities and structured data helpers
import { COMPANY, SEO, LOCATIONS } from './constants';
import type { OpenGraphData, TwitterCardData, StructuredData } from '@/types';

/**
 * Generate Open Graph metadata
 */
export function generateOpenGraphData(options: {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'business.business';
}): OpenGraphData {
  return {
    title: options.title,
    description: options.description,
    image: options.image || SEO.image,
    url: options.url || SEO.siteUrl,
    type: options.type || 'website',
    siteName: SEO.siteName,
  };
}

/**
 * Generate Local Business structured data
 */
export function generateLocalBusinessStructuredData(locationKey?: 'blueRidge' | 'blairsville'): StructuredData {
  if (locationKey && LOCATIONS[locationKey]) {
    const location = LOCATIONS[locationKey];
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SEO.siteUrl}#business-${locationKey}`,
      name: `${COMPANY.name} - ${location.name}`,
      description: COMPANY.description,
      url: SEO.siteUrl,
      telephone: location.phone,
      email: location.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: location.address.street,
        addressLocality: location.address.city,
        addressRegion: location.address.state,
        postalCode: location.address.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '17:00',
        },
      ],
      priceRange: '$$',
    };
  }

  // General business structured data
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SEO.siteUrl}#business`,
    name: COMPANY.name,
    description: COMPANY.description,
    url: SEO.siteUrl,
    priceRange: '$$',
    areaServed: {
      '@type': 'State',
      name: 'North Georgia',
    },
  };
}

/**
 * Generate structured data script tag
 */
export function generateStructuredDataScript(structuredData: StructuredData | StructuredData[]): string {
  const data = Array.isArray(structuredData) ? structuredData : [structuredData];
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

export default {
  generateOpenGraphData,
  generateLocalBusinessStructuredData,
  generateStructuredDataScript,
};