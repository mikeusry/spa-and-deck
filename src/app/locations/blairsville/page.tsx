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
  title: 'Blairsville Hot Tub & Spa Dealership | Georgia Spa Company',
  description: 'Visit Georgia Spa Company in Blairsville, GA for premium hot tubs, spas, and professional service. Located at 19 Hollow Hill Rd, serving Union County and North Georgia mountains.',
  keywords: 'hot tubs Blairsville GA, spa dealer Union County, hot tub sales Blairsville Georgia, spa service North Georgia, Blairsville hot tub showroom',
};

const location = LOCATIONS.blairsville;

export default function BlairsvillePage() {
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
              {COMPANY.name} - Blairsville Showroom
            </h1>
            <p className="text-xl text-gray-200 mb-4 leading-relaxed">
              Your trusted hot tub and spa destination in the heart of Union County, Georgia
            </p>
            
            {/* Key Business Info */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 mt-8 text-gray-900">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <MapPinIcon className="w-4 h-4 text-blue-600" />
                  <span>19 Hollow Hill Rd, Blairsville, GA 30512</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <PhoneIcon className="w-4 h-4 text-blue-600" />
                  <span>{location.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <ClockIcon className="w-4 h-4 text-blue-600" />
                  <span>Mon-Fri: 10AM-5PM, Sat: 10AM-3PM</span>
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
                Serving Union County & North Georgia Mountains
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Located in the scenic town of Blairsville, our showroom serves hot tub enthusiasts throughout 
                  Union County, Towns County, and the surrounding North Georgia mountains. We're perfectly positioned 
                  near Brasstown Bald, Vogel State Park, and Lake Nottely to serve mountain residents and cabin owners.
                </p>
                <p>
                  Our Blairsville location specializes in mountain-climate hot tub solutions, understanding the unique 
                  challenges of North Georgia winters and the joy of year-round outdoor relaxation in the mountains.
                </p>
              </div>
              
              {/* Service Area List */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Areas We Serve:</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span>Blairsville</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span>Hiawassee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span>Young Harris</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span>Hayesville, NC</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span>Murphy, NC</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span>Lake Nottely Area</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Blairsville Location Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mountain Climate Expertise</h4>
                    <p className="text-gray-600">Specialized knowledge for North Georgia weather conditions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cabin Owner Specialists</h4>
                    <p className="text-gray-600">Custom solutions for mountain cabins and vacation rentals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Service Team</h4>
                    <p className="text-gray-600">Union County residents providing personalized service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Winter Preparation Services</h4>
                    <p className="text-gray-600">Expert winterization and mountain weather protection</p>
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
              Premium Spa Solutions in Blairsville
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our complete selection of hot tubs, swim spas, and wellness solutions designed for North Georgia mountain living.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card hover className="text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Hot Spring Spas</h3>
                <p className="text-gray-600 mb-4">Energy-efficient hot tubs perfect for mountain climate use with advanced insulation systems.</p>
              </div>
            </Card>
            
            <Card hover className="text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Caldera Wellness</h3>
                <p className="text-gray-600 mb-4">Luxury spa experiences with therapeutic benefits for mountain lifestyle wellness.</p>
              </div>
            </Card>
            
            <Card hover className="text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Service & Maintenance</h3>
                <p className="text-gray-600 mb-4">Complete service solutions including winterization and mountain weather preparation.</p>
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
              Visit Our Blairsville Showroom
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located near downtown Blairsville, just minutes from Brasstown Bald and Lake Nottely
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
                      <p className="text-gray-600">19 Hollow Hill Rd<br />Blairsville, GA 30512</p>
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
                        <p>Monday - Friday: 10:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 3:00 PM</p>
                        <p className="text-red-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Nearby Landmarks:</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• 2 miles from downtown Blairsville</p>
                    <p>• 15 minutes from Brasstown Bald</p>
                    <p>• 10 minutes from Lake Nottely</p>
                    <p>• 5 minutes from Union County High School</p>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <Button href={`tel:${location.phone}`} size="sm" className="flex-1">
                    Call Now
                  </Button>
                  <Button 
                    href="https://maps.google.com/?q=19+Hollow+Hill+Rd,+Blairsville,+GA+30512"
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
                Schedule Your Blairsville Visit
              </h2>
              <p className="text-xl text-gray-600">
                Ready to experience our premium spa collection? Schedule a personalized consultation at our Blairsville showroom.
              </p>
            </div>

            <Card>
              <div className="p-8">
                <HubSpotForm
                  portalId={process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || '2107798'}
                  formId={process.env.NEXT_PUBLIC_HUBSPOT_BLAIRSVILLE_FORM_ID || '9d940bb5-1307-4b57-94c0-f93ad7dd2940'}
                  className="hubspot-form"
                />
                
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Questions? Contact our Blairsville team directly:
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
              Frequently Asked Questions - Blairsville Location
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Do you deliver to mountain cabins?</h3>
                  <p className="text-gray-600">
                    Yes! We specialize in mountain cabin installations and understand the unique challenges of North Georgia terrain. Our experienced delivery team can navigate mountain roads safely.
                  </p>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3">What about winter weather service?</h3>
                  <p className="text-gray-600">
                    We offer comprehensive winterization services and seasonal repairs throughout Union County. Our team understands mountain weather challenges and provides year-round maintenance.
                  </p>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Do you service vacation rental properties?</h3>
                  <p className="text-gray-600">
                    Absolutely! We provide maintenance services for vacation rental hot tubs throughout the Blairsville area, including regular service schedules and guest-ready preparations.
                  </p>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3">What's your service radius from Blairsville?</h3>
                  <p className="text-gray-600">
                    We serve a 50-mile radius from our Blairsville location, including Union County, Towns County, and parts of North Carolina. Call us to confirm service in your specific area.
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
              <Button href="/locations/blue-ridge" variant="outline" size="sm">Blue Ridge Location</Button>
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
            "name": "Georgia Spa Company - Blairsville",
            "image": "https://res.cloudinary.com/southland-organics/image/upload/Georgia%20Spa%20Company/GeorgiaSpaCompany-NewLogo_vsotmk",
            "@id": "https://georgiaspacompany.com/locations/blairsville",
            "url": "https://georgiaspacompany.com/locations/blairsville",
            "telephone": location.phone,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "19 Hollow Hill Rd",
              "addressLocality": "Blairsville",
              "addressRegion": "GA",
              "postalCode": "30512",
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
                "name": "Blairsville, GA"
              },
              {
                "@type": "City", 
                "name": "Hiawassee, GA"
              },
              {
                "@type": "City",
                "name": "Young Harris, GA"
              }
            ]
          })
        }}
      />
    </>
  );
}