import type { Metadata } from 'next';
import { COMPANY } from '@/lib/constants';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata: Metadata = {
  title: `About ${COMPANY.name} | 40+ Years Hot Tub Dealer North Georgia`,
  description: `Discover ${COMPANY.name}'s story - formerly ${COMPANY.formerName}. Over ${COMPANY.established} serving North Georgia with premium Hot Spring Spas, Caldera Spas, and exceptional service in Blue Ridge & Blairsville.`,
  keywords: 'about Georgia Spa Company, Spa and Deck Creations history, North Georgia hot tub dealer, Blue Ridge spa dealer, Blairsville hot tub company, 40 years experience',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/southland-organics/image/upload/c_fill,w_1920,h_600,q_auto,f_auto/Georgia%20Spa%20Company/hot-tub-lifestyle/Lifestyle_Fall')`
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About {COMPANY.name} - 40+ Years Hot Tub Dealer
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {COMPANY.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Transition Notice */}
      <Section background="primary" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Important Transition Update
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Spa and Deck Creations is now Georgia Spa Company.</strong>
              </p>
              <p className="text-gray-600 mb-6">
                While our name has changed, everything else remains the same. Your trusted Blue Ridge and Blairsville teams, 
                the personalized service you&apos;ve come to expect, and our commitment to North Georgia remain unchanged. 
                This transition allows us to serve you with enhanced capabilities while maintaining our local focus.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Same trusted local team
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Same Blue Ridge & Blairsville locations
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Same personalized service
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Enhanced capabilities & resources
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Company History */}
      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {COMPANY.established} of North Georgia Service
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  For over four decades, we have been North Georgia&apos;s trusted partner for premium spa solutions. 
                  What started as Spa and Deck Creations has grown into Georgia Spa Company, but our commitment 
                  to the North Georgia mountains remains stronger than ever.
                </p>
                <p>
                  Our deep roots in Blue Ridge and Blairsville mean we understand the unique needs of mountain 
                  living. From the challenges of North Georgia winters to making the most of beautiful summer 
                  evenings, we help our neighbors create the perfect spa experience for their mountain homes.
                </p>
                <p>
                  Our transition to Georgia Spa Company brings enhanced capabilities while preserving the 
                  personal touch that has made us a cornerstone of the North Georgia spa community.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Expertise</h4>
                    <p className="text-gray-600">Understanding North Georgia&apos;s climate and living needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Premium Brands</h4>
                    <p className="text-gray-600">Authorized dealer for industry-leading spa manufacturers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Service</h4>
                    <p className="text-gray-600">From sales to installation to ongoing maintenance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Commitment</h4>
                    <p className="text-gray-600">Deeply rooted in the North Georgia community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Team Continuity */}
      <Section background="muted" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Team Remains
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              The knowledgeable professionals you&apos;ve come to trust in Blue Ridge and Blairsville 
              are still here, ready to serve you with the same dedication and expertise you&apos;ve experienced for years.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                &quot;Our customers are our neighbors, and that will never change. Whether you&apos;ve been with us 
                for decades or you&apos;re just discovering us, you can count on the same personal service 
                and expert care that has defined our business for over 40 years.&quot;
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-gray-900">The Georgia Spa Company Team</p>
                <p className="text-gray-600">Blue Ridge & Blairsville Locations</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Customer Stories */}
      <TestimonialsSection 
        showTitle={false}
        autoplay={true}
        className="bg-white"
      />

      {/* CTA Section */}
      <Section background="primary" padding="xl">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Visit one of our North Georgia showrooms and discover why we&apos;ve been the trusted choice 
              for premium spas for over four decades.
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

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Georgia Spa Company",
            "description": "Learn about Georgia Spa Company, formerly Spa and Deck Creations, serving North Georgia for over 40 years with premium hot tubs and spas.",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Georgia Spa Company", 
              "alternateName": "Spa and Deck Creations",
              "foundingDate": "1980",
              "description": "North Georgia's premier spa dealership with over 40 years of experience serving Blue Ridge and Blairsville with Hot Spring Spas, Caldera Spas, and complete spa services.",
              "image": "https://res.cloudinary.com/southland-organics/image/upload/Georgia%20Spa%20Company/GeorgiaSpaCompany-NewLogo_vsotmk",
              "logo": "https://res.cloudinary.com/southland-organics/image/upload/Georgia%20Spa%20Company/GeorgiaSpaCompany-NewLogo_vsotmk",
              "telephone": "(678) 383-2583",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "5772 Appalachian Hwy",
                  "addressLocality": "Blue Ridge", 
                  "addressRegion": "GA",
                  "postalCode": "30513"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "19 Hollow Hill Rd",
                  "addressLocality": "Blairsville",
                  "addressRegion": "GA", 
                  "postalCode": "30512"
                }
              ],
              "areaServed": [
                "Blue Ridge, GA",
                "Blairsville, GA",
                "North Georgia Mountains",
                "Fannin County, GA",
                "Union County, GA"
              ],
              "speciality": [
                "Hot Spring Spas",
                "Caldera Spas", 
                "Endless Pools",
                "Spa Installation",
                "Hot Tub Service"
              ]
            }
          })
        }}
      />
    </>
  );
}