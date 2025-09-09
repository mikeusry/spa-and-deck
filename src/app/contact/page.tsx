import type { Metadata } from 'next';
import { COMPANY, LOCATIONS, CONTACT_INFO } from '@/lib/constants';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import HubSpotForm from '@/components/forms/HubSpotForm';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: `Contact ${COMPANY.name} | Hot Tub Dealer Blue Ridge & Blairsville GA`,
  description: `Contact ${COMPANY.name} in Blue Ridge or Blairsville for hot tub sales, spa service, and consultation. Visit our North Georgia showrooms or call (706) 632-1833 for Blue Ridge, (706) 745-0630 for Blairsville.`,
  keywords: 'contact Georgia Spa Company, hot tub dealer contact, Blue Ridge spa showroom, Blairsville hot tub store, North Georgia spa consultation',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/southland-organics/image/upload/c_fill,w_1920,h_600,q_auto,f_auto/Georgia%20Spa%20Company/hot-tub-lifestyle/Lifestyle_NoPeople')`
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Contact {COMPANY.name}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready to enhance your North Georgia home with a premium spa? Our team is here to help. 
              Contact us for expert consultation, service, or to schedule a showroom visit.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Options */}
      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center" hover>
              <PhoneIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our spa experts for immediate assistance.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="font-semibold text-gray-900">General Inquiries</p>
                  <a href={`tel:${CONTACT_INFO.general.phone}`} className="text-blue-600 hover:text-blue-700">
                    {CONTACT_INFO.general.phone}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="text-center" hover>
              <EnvelopeIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us a detailed message and we&apos;ll respond within 24 hours.
              </p>
              <a 
                href={`mailto:${CONTACT_INFO.general.email}`}
                className="inline-block text-green-600 hover:text-green-700 font-semibold"
              >
                {CONTACT_INFO.general.email}
              </a>
            </Card>

            <Card className="text-center" hover>
              <ChatBubbleLeftRightIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule Consultation</h3>
              <p className="text-gray-600 mb-4">
                Book a free consultation at one of our showrooms or at your home.
              </p>
              <Button href="#contact-form" variant="outline" size="sm">
                Schedule Now
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section background="muted" padding="xl" id="contact-form">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Get Your Free Quote
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and one of our spa experts will contact you within 24 hours.
              </p>
            </div>

            <Card>
              <div className="p-8">
                <HubSpotForm
                  portalId={process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || '2107798'}
                  formId={process.env.NEXT_PUBLIC_HUBSPOT_GENERAL_FORM_ID || '2724a357-2167-415e-8ce8-2746ec6b5052'}
                  className="hubspot-form"
                />
                
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Prefer to contact us directly?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button href={`tel:${CONTACT_INFO.general.phone}`}>
                      Call {CONTACT_INFO.general.phone}
                    </Button>
                    <Button href={`mailto:${CONTACT_INFO.general.email}`} variant="outline">
                      Email Us
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Location Contact Cards */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Visit Our Showrooms
            </h2>
            <p className="text-xl text-gray-600">
              Experience our premium spa collection in person at either of our North Georgia locations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(LOCATIONS).map(([key, location]) => (
              <Card key={key}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{location.name}</h3>
                  <p className="text-blue-600">Now {COMPANY.name}</p>
                </div>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <div className="text-gray-600">
                      <div>{location.address.street}</div>
                      <div>{location.address.city}, {location.address.state} {location.address.zip}</div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <a 
                      href={`tel:${location.phone}`}
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-3">
                    <EnvelopeIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <a 
                      href={`mailto:${location.email}`}
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {location.email}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-3">
                    <ClockIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div className="text-gray-600">
                      <div>{location.hours.weekday}</div>
                      <div>{location.hours.saturday}</div>
                      <div className="text-red-600">{location.hours.sunday}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 flex gap-4">
                  <Button 
                    href={`tel:${location.phone}`}
                    size="sm"
                    className="flex-1"
                  >
                    Call
                  </Button>
                  <Button 
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${location.address.street}, ${location.address.city}, ${location.address.state} ${location.address.zip}`)}`}
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                    external
                  >
                    Directions
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="primary" padding="xl">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Common Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Do I need an appointment?</h3>
                <p className="text-gray-600 text-sm">
                  While walk-ins are welcome, we recommend scheduling to ensure our experts can provide full attention.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Do you offer financing?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we offer various financing options to make your dream spa affordable.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">What&apos;s your service area?</h3>
                <p className="text-gray-600 text-sm">
                  We serve within 50 miles of both Blue Ridge and Blairsville, covering all of North Georgia.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">What brands do you service?</h3>
                <p className="text-gray-600 text-sm">
                  We service all major spa brands including Hot Spring, Caldera, and many others. Our certified technicians are trained on multiple systems.
                </p>
              </div>
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
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do I need an appointment?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "While walk-ins are welcome, we recommend scheduling to ensure our experts can provide full attention."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer financing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer various financing options to make your dream spa affordable."
                }
              },
              {
                "@type": "Question", 
                "name": "What's your service area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve within 50 miles of both Blue Ridge and Blairsville, covering all of North Georgia."
                }
              },
              {
                "@type": "Question",
                "name": "What brands do you service?", 
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We service all major spa brands including Hot Spring, Caldera, and many others. Our certified technicians are trained on multiple systems."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}