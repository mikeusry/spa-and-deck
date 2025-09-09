import type { Metadata } from 'next';
import { COMPANY, LOCATIONS } from '@/lib/constants';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Our Locations',
  description: `Visit ${COMPANY.name} showrooms in Blue Ridge and Blairsville, North Georgia. See our premium spa collection and meet our expert team.`,
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Visit Our North Georgia Showrooms
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Experience our premium spa collection in person at our Blue Ridge and Blairsville locations. 
              Our knowledgeable team is ready to help you find the perfect spa for your North Georgia home.
            </p>
          </div>
        </Container>
      </Section>

      {/* Location Cards */}
      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {Object.entries(LOCATIONS).map(([key, location]) => (
              <Card key={key} className="h-full">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BuildingStorefrontIcon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{location.name}</h2>
                  <p className="text-blue-600 font-semibold">Now {COMPANY.name}</p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <MapPinIcon className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <div className="text-gray-600">
                        <div>{location.address.street}</div>
                        <div>{location.address.city}, {location.address.state} {location.address.zip}</div>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <PhoneIcon className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a 
                        href={`tel:${location.phone}`}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <EnvelopeIcon className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a 
                        href={`mailto:${location.email}`}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {location.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <ClockIcon className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <div>{location.hours.weekday}</div>
                        <div>{location.hours.saturday}</div>
                        <div className="text-red-600">{location.hours.sunday}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
                  <Button 
                    href={`/locations/${key === 'blueRidge' ? 'blue-ridge' : 'blairsville'}`} 
                    className="w-full"
                  >
                    Visit {location.name}
                  </Button>
                  <div className="flex gap-4">
                    <Button href="/contact" variant="outline" size="sm" className="flex-1">
                      Schedule Visit
                    </Button>
                    <Button 
                      href={`https://maps.google.com/?q=${encodeURIComponent(`${location.address.street}, ${location.address.city}, ${location.address.state} ${location.address.zip}`)}`}
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                      external
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* What to Expect */}
      <Section background="muted" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What to Expect at Our Showrooms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Both locations feature fully operational spa displays, knowledgeable staff, 
              and a comfortable environment to explore your options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">See & Touch</h3>
              <p className="text-gray-600">Experience our spas with fully operational displays</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Work with our knowledgeable spa specialists</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Pressure</h3>
              <p className="text-gray-600">Comfortable, pressure-free environment to explore</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Transparent pricing and financing options available</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Area Map */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              We Serve All of North Georgia
            </h2>
            <p className="text-xl text-gray-600">
              With locations in Blue Ridge and Blairsville, we provide convenient access 
              to premium spa services throughout the North Georgia mountains.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Area Includes:</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-700">
                  <div>• Blairsville</div>
                  <div>• Blue Ridge</div>
                  <div>• Hiawassee</div>
                  <div>• Young Harris</div>
                  <div>• Dahlonega</div>
                  <div>• Helen</div>
                  <div>• Cleveland</div>
                  <div>• Hayesville, NC</div>
                  <div>• Murphy, NC</div>
                  <div>• And surrounding areas</div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-600">
                    <strong>Service Radius:</strong> We provide delivery, installation, and service 
                    within a 50-mile radius of both our Blue Ridge and Blairsville locations.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Ready to Visit?</h4>
                <p className="text-gray-600 mb-6">
                  We recommend calling ahead to ensure our spa specialists can give you their full attention 
                  during your visit.
                </p>
                <Button href="/contact" className="w-full">
                  Schedule Your Visit
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="xl">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Visit Us Today
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Experience the {COMPANY.name} difference in person. Our Blue Ridge and Blairsville 
              showrooms are ready to welcome you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Schedule Appointment
              </Button>
              <Button href="/services" variant="outline" size="lg">
                View Our Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}