import type { Metadata } from 'next';
import { COMPANY, LOCATIONS } from '@/lib/constants';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import HubSpotForm from '@/components/forms/HubSpotForm';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import MapComponent from '@/components/ui/MapComponent';
import { 
  MapPinIcon, 
  PhoneIcon, 
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Blue Ridge Hot Tub & Spa Dealership | Georgia Spa Company',
  description: 'Visit Georgia Spa Company in Blue Ridge, GA for premium hot tubs, spas, and professional service. Located at 5772 Appalachian Hwy, serving Fannin County and North Georgia.',
  keywords: 'hot tubs Blue Ridge GA, spa dealer Fannin County, hot tub sales Blue Ridge Georgia, spa service North Georgia, Blue Ridge hot tub showroom',
};

const location = LOCATIONS.blueRidge;

export default function BlueRidgePage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/southland-organics/image/upload/c_fill,w_1920,h_600,q_auto,f_auto/Georgia%20Spa%20Company/hot-tub-lifestyle/HSS-2024-Highlife-Grandee')`
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {COMPANY.name} - Blue Ridge Showroom
            </h1>
            <p className="text-xl text-gray-200 mb-4 leading-relaxed">
              North Georgia&apos;s premier spa destination in the heart of the Blue Ridge Mountains
            </p>
            
            {/* Key Business Info */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 mt-8 text-gray-900">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <MapPinIcon className="w-4 h-4 text-blue-600" />
                  <span>5772 Appalachian Hwy, Blue Ridge, GA 30513</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <PhoneIcon className="w-4 h-4 text-blue-600" />
                  <span>{location.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <ClockIcon className="w-4 h-4 text-blue-600" />
                  <span>Mon-Fri: 9AM-6PM, Sat: 9AM-5PM</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button href="#contact-form" size="lg">
                Reserve Your Visit
              </Button>
              <Button href={`tel:${location.phone}`} variant="outline" size="lg" className="border-white hover:text-gray-900">
                Call {location.phone}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Area & Local Focus */}
      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Serving Fannin County & Blue Ridge Mountains
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Nestled in the beautiful Blue Ridge Mountains along the scenic Appalachian Highway, our flagship 
                  showroom has been serving Fannin County and surrounding areas for over four decades. We&apos;re 
                  conveniently located near Blue Ridge Lake, the Toccoa River, and the famous Blue Ridge Scenic Railway.
                </p>
                <p>
                  Our Blue Ridge location is the original home of what is now Georgia Spa Company, with deep roots 
                  in the community and unmatched expertise in mountain living spa solutions. We understand the unique 
                  needs of Blue Ridge residents, from lake house installations to mountain cabin retreats.
                </p>
              </div>
              
              {/* Service Area List */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Areas We Serve:</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span>Blue Ridge</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span>McCaysville</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span>Copperhill, TN</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span>Morganton</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span>Ellijay</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span>Blue Ridge Lake Area</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Blue Ridge Location Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Largest Showroom Display</h4>
                    <p className="text-gray-600">Extensive collection of premium spas and wellness products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lake House Specialists</h4>
                    <p className="text-gray-600">Expert installations for Blue Ridge Lake properties</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">40+ Years Experience</h4>
                    <p className="text-gray-600">Original location with decades of North Georgia expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tourism Industry Partners</h4>
                    <p className="text-gray-600">Serving Blue Ridge&apos;s vacation rental and hospitality sector</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Products & Services */}
      <Section background="muted" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Complete Spa Solutions in Blue Ridge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our flagship Blue Ridge location, explore the most comprehensive selection of hot tubs, swim spas, 
              and wellness equipment in North Georgia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hover className="text-center">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Hot Spring Spas</h3>
                <p className="text-gray-600 text-sm">Premium efficiency and therapeutic benefits</p>
              </div>
            </Card>
            
            <Card hover className="text-center">
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Caldera Spas</h3>
                <p className="text-gray-600 text-sm">Luxury wellness and innovative design</p>
              </div>
            </Card>
            
            <Card hover className="text-center">
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1.586a1 1 0 01-.293.707L12 12.293V15a2 2 0 01-2 2H9m0-7V6a2 2 0 012-2h2a2 2 0 012 2v1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Endless Pools</h3>
                <p className="text-gray-600 text-sm">Swim spas and fitness systems</p>
              </div>
            </Card>
            
            <Card hover className="text-center">
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Saunas</h3>
                <p className="text-gray-600 text-sm">Traditional and infrared wellness</p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Google Map Section */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Visit Our Blue Ridge Flagship Showroom
            </h2>
            <p className="text-xl text-gray-600">
              Located on the scenic Appalachian Highway, minutes from downtown Blue Ridge and the famous Scenic Railway
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Interactive Map */}
              <MapComponent
                latitude={location.coordinates.lat}
                longitude={location.coordinates.lng}
                address={`${location.address.street}, ${location.address.city}, ${location.address.state} ${location.address.zip}`}
                title={location.name}
                className="h-96 lg:h-full"
              />
              
              {/* Location Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Location Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">5772 Appalachian Hwy<br />Blue Ridge, GA 30513</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href={`tel:${location.phone}`} className="text-blue-600 hover:text-blue-700">
                        {location.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <ClockIcon className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="font-semibold">Hours</p>
                      <div className="text-gray-600 text-sm">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 5:00 PM</p>
                        <p className="text-red-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Nearby Landmarks:</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• 3 miles from downtown Blue Ridge</p>
                    <p>• 5 minutes from Blue Ridge Scenic Railway</p>
                    <p>• 10 minutes from Blue Ridge Lake</p>
                    <p>• 15 minutes from Toccoa River rafting</p>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <Button href={`tel:${location.phone}`} size="sm" className="flex-1">
                    Call Now
                  </Button>
                  <Button 
                    href="https://maps.google.com/?q=5772+Appalachian+Hwy,+Blue+Ridge,+GA+30513"
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                    external
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section background="primary" padding="xl" id="contact-form">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Schedule Your Blue Ridge Visit
              </h2>
              <p className="text-xl text-gray-600">
                Experience North Georgia&apos;s largest spa showroom. Schedule a personalized consultation with our Blue Ridge experts.
              </p>
            </div>

            <Card>
              <div className="p-8">
                <HubSpotForm
                  portalId={process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || '2107798'}
                  formId={process.env.NEXT_PUBLIC_HUBSPOT_BLUE_RIDGE_FORM_ID || '9580c9ee-c255-4fe3-9d37-3f22ea92a95a'}
                  className="hubspot-form"
                />
                
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Questions? Contact our Blue Ridge team directly:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button href={`tel:${location.phone}`}>
                      Call {location.phone}
                    </Button>
                    <Button href={`mailto:${location.email}`} variant="outline">
                      Email Us
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Customer Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <Section background="muted" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions - Blue Ridge Location
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Do you service Blue Ridge Lake properties?</h3>
                  <p className="text-gray-600">
                    Absolutely! We have extensive experience with lake house installations and understand the unique requirements of waterfront properties around Blue Ridge Lake.
                  </p>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3">What financing options do you offer?</h3>
                  <p className="text-gray-600">
                    We offer competitive financing options to make your spa purchase affordable. Our team can discuss various payment plans and financing terms during your visit.
                  </p>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Can I see spas operating before purchase?</h3>
                  <p className="text-gray-600">
                    Yes! Our Blue Ridge showroom features multiple working display models where you can experience the jets, lighting, and features firsthand before making your decision.
                  </p>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Do you provide installation services?</h3>
                  <p className="text-gray-600">
                    We provide complete installation services throughout Fannin County and surrounding areas, including site preparation, electrical setup, and spa placement.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Internal Links */}
      <Section padding="lg">
        <Container>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Explore More</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/" variant="outline" size="sm">Homepage</Button>
              <Button href="/locations/blairsville" variant="outline" size="sm">Blairsville Location</Button>
              <Button href="/services" variant="outline" size="sm">Our Services</Button>
              <Button href="/about" variant="outline" size="sm">About Us</Button>
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
            "@type": "LocalBusiness",
            "name": "Georgia Spa Company - Blue Ridge",
            "image": "https://res.cloudinary.com/southland-organics/image/upload/Georgia%20Spa%20Company/GeorgiaSpaCompany-NewLogo_vsotmk",
            "@id": "https://georgiaspacompany.com/locations/blue-ridge",
            "url": "https://georgiaspacompany.com/locations/blue-ridge",
            "telephone": location.phone,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5772 Appalachian Hwy",
              "addressLocality": "Blue Ridge",
              "addressRegion": "GA",
              "postalCode": "30513",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": location.coordinates.lat,
              "longitude": location.coordinates.lng
            },
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
            ],
            "sameAs": [
              "https://www.facebook.com/GeorgiaSpaCompany",
              "https://www.instagram.com/georgiaspacompany/",
              "https://x.com/GeorgiaSpaComp"
            ],
            "priceRange": "$$$$",
            "servedCuisine": "Hot Tubs, Spas, Wellness Equipment",
            "areaServed": [
              {
                "@type": "City",
                "name": "Blue Ridge, GA"
              },
              {
                "@type": "City", 
                "name": "McCaysville, GA"
              },
              {
                "@type": "City",
                "name": "Morganton, GA"
              },
              {
                "@type": "City",
                "name": "Ellijay, GA"
              }
            ]
          })
        }}
      />
    </>
  );
}