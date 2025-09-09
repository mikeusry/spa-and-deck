import type { Metadata } from 'next';
import { COMPANY, LOCATIONS, CONTACT_INFO, SEO } from '@/lib/constants';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata: Metadata = {
  title: `Home | ${COMPANY.tagline}`,
  description: `Welcome to ${COMPANY.name} - ${COMPANY.description}`,
};

export default function HomePage() {
  return (
    <>
      {/* Transition Notice */}
      <Section background="primary" padding="sm">
        <Container>
          <div className="text-center">
            <p className="text-lg font-medium text-gray-900">
              📢 {COMPANY.transitionMessage}
            </p>
          </div>
        </Container>
      </Section>

      {/* Hero Section */}
      <Section padding="xl" className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/southland-organics/image/upload/c_fill,w_1920,h_800,q_auto,f_auto/Georgia%20Spa%20Company/hot-tub-lifestyle/HSS-2024-Highlife-Grandee')`
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              North Georgia&apos;s Premier Dealership for {' '}
              <div className="text-blue-400">Hot Tubs, Swim Spas, Saunas & Cold Plunge</div>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {COMPANY.description} Serving the North Georgia mountains for {COMPANY.established}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Get Your Free Quote
              </Button>
              <Button href="/locations" variant="outline" size="lg" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-blue py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Visit Our Showrooms
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Spa Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From premium hot tubs to comprehensive service, we&apos;re your trusted partner for all spa needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Hot Tub Sales</h3>
              <p className="text-gray-600">Hot Spring Spas, Caldera Spas, Endless Pools, and more from industry-leading brands.</p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional Service</h3>
              <p className="text-gray-600">Expert maintenance, repairs, and installation services to keep your spa running perfectly.</p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
              <p className="text-gray-600">Serving Blue Ridge and Blairsville with personalized service and deep community roots.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Locations */}
      <Section padding="xl" className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/southland-organics/image/upload/c_fill,w_1920,h_600,q_auto,f_auto/Georgia%20Spa%20Company/hot-tub-lifestyle/Sunset-Lifestyle')`
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Visit Our Showrooms
            </h2>
            <p className="text-xl text-gray-200">
              Two convenient locations in the heart of North Georgia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Blue Ridge Location</h3>
              <p className="text-gray-600 mb-4">Experience our full range of premium spas in our Blue Ridge showroom.</p>
              <Button href="/locations/blue-ridge" variant="outline">
                Get Directions
              </Button>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Blairsville Location</h3>
              <p className="text-gray-600 mb-4">Visit our Blairsville showroom for personalized spa consultations.</p>
              <Button href="/locations/blairsville/" variant="outline">
                Get Directions
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Video Section */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              See Our Hot Tubs in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the quality and craftsmanship that has made us North Georgia&apos;s 
              premier spa dealership for over 40 years.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-green-50 p-2">
              <div className="relative rounded-xl overflow-hidden bg-black">
                <video
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                  poster="https://res.cloudinary.com/southland-organics/video/upload/q_auto,f_auto/Georgia%20Spa%20Company/hhspgbm1c1mo6lnweztt.jpg"
                >
                  <source 
                    src="https://res.cloudinary.com/southland-organics/video/upload/q_auto,f_auto/Georgia%20Spa%20Company/hhspgbm1c1mo6lnweztt.mp4" 
                    type="video/mp4" 
                  />
                  <source 
                    src="https://res.cloudinary.com/southland-organics/video/upload/q_auto,f_webm/Georgia%20Spa%20Company/hhspgbm1c1mo6lnweztt.webm" 
                    type="video/webm" 
                  />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-blue-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-8">
              Ready to see our premium spas up close? Visit our Blue Ridge or Blairsville showrooms 
              for a hands-on experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/locations" size="lg">
                Visit Our Showrooms
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Customer Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <Section padding="xl" className="relative overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/southland-organics/image/upload/c_fill,w_1920,h_600,q_auto,f_auto/Georgia%20Spa%20Company/hot-tub-lifestyle/BBQ-Lifestyle')`
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        <Container className="relative z-10">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Find Your Perfect Spa?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let our experienced team help you discover the perfect spa solution for your North Georgia home.
            </p>
            <div className="flex justify-center">
              <Button href="/contact" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": COMPANY.name,
            "image": "https://res.cloudinary.com/southland-organics/image/upload/Georgia%20Spa%20Company/GeorgiaSpaCompany-NewLogo_vsotmk",
            "@id": `${SEO.siteUrl}#business`,
            "url": SEO.siteUrl,
            "telephone": CONTACT_INFO.general.phone,
            "email": CONTACT_INFO.general.email,
            "priceRange": "$$$$",
            "description": COMPANY.description,
            "areaServed": [
              {
                "@type": "State",
                "name": "Georgia"
              },
              {
                "@type": "City",
                "name": "Blue Ridge, GA"
              },
              {
                "@type": "City",
                "name": "Blairsville, GA"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Hot Tubs and Spa Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Hot Spring Spas",
                    "category": "Hot Tubs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product", 
                    "name": "Caldera Spas",
                    "category": "Hot Tubs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Endless Pools",
                    "category": "Swim Spas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Spa Installation and Maintenance",
                    "category": "Home Services"
                  }
                }
              ]
            },
            "location": [
              {
                "@type": "Place",
                "@id": `${SEO.siteUrl}/locations/blue-ridge`,
                "name": LOCATIONS.blueRidge.name,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": LOCATIONS.blueRidge.address.street,
                  "addressLocality": LOCATIONS.blueRidge.address.city,
                  "addressRegion": LOCATIONS.blueRidge.address.state,
                  "postalCode": LOCATIONS.blueRidge.address.zip,
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": LOCATIONS.blueRidge.coordinates.lat,
                  "longitude": LOCATIONS.blueRidge.coordinates.lng
                },
                "telephone": LOCATIONS.blueRidge.phone,
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "10:00",
                    "closes": "17:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification", 
                    "dayOfWeek": "Saturday",
                    "opens": "10:00",
                    "closes": "15:00"
                  }
                ]
              },
              {
                "@type": "Place",
                "@id": `${SEO.siteUrl}/locations/blairsville`,
                "name": LOCATIONS.blairsville.name,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": LOCATIONS.blairsville.address.street,
                  "addressLocality": LOCATIONS.blairsville.address.city,
                  "addressRegion": LOCATIONS.blairsville.address.state,
                  "postalCode": LOCATIONS.blairsville.address.zip,
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": LOCATIONS.blairsville.coordinates.lat,
                  "longitude": LOCATIONS.blairsville.coordinates.lng
                },
                "telephone": LOCATIONS.blairsville.phone,
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "10:00",
                    "closes": "17:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday", 
                    "opens": "10:00",
                    "closes": "15:00"
                  }
                ]
              }
            ],
            "sameAs": [
              "https://www.facebook.com/GeorgiaSpaCompany",
              "https://www.instagram.com/georgiaspacompany/",
              "https://x.com/GeorgiaSpaComp"
            ]
          })
        }}
      />
    </>
  );
}
