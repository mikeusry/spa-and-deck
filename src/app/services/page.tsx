import type { Metadata } from 'next';
import { COMPANY, SERVICES, PRODUCTS } from '@/lib/constants';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: `Hot Tub Installation & Service North Georgia | ${COMPANY.name} Blue Ridge`,
  description: `Professional hot tub services in North Georgia: installation, repair, maintenance & water care. Authorized Hot Spring & Caldera service center. Blue Ridge & Blairsville locations. Call (706) 632-1833.`,
  keywords: 'hot tub installation North Georgia, spa repair Blue Ridge GA, hot tub service Blairsville GA, spa maintenance North Georgia, Hot Spring service center, Caldera repair Georgia, spa chemicals Blue Ridge, hot tub cover replacement',
};

export default function ServicesPage() {
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
          <Breadcrumbs 
            items={[{ label: 'Services' }]}
            className="text-gray-300"
          />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Hot Tub & Spa Services North Georgia
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              From premium spa sales to expert maintenance, we provide comprehensive spa solutions 
              for North Georgia homeowners. Your trusted partner for over {COMPANY.established}.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(SERVICES).map(([key, service]) => (
              <Card key={key} className="h-full" hover>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Premium Products */}
      <Section background="muted" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Premium Spa Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As an authorized dealer for industry-leading manufacturers, we offer the finest 
              spa and wellness products available in North Georgia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(PRODUCTS).map(([key, product]) => (
              <Card key={key} className="h-full">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Available Collections:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.categories.map((category) => (
                        <span 
                          key={category}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Service Process */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600">
              We make spa ownership simple with our comprehensive approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Consultation</h3>
              <p className="text-gray-600">
                Personalized assessment of your needs, space, and preferences
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Selection</h3>
              <p className="text-gray-600">
                Choose from our premium selection of spas and wellness products
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Installation</h3>
              <p className="text-gray-600">
                Professional delivery and installation by our experienced team
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Care</h3>
              <p className="text-gray-600">
                Maintenance, service, and support for years of enjoyment
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Areas */}
      <Section background="primary" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Serving North Georgia
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We proudly serve the North Georgia mountains from our Blue Ridge and Blairsville locations. 
              Our service area includes Hiawassee, Young Harris, Dahlonega, Helen, Cleveland, and surrounding communities.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-gray-600 mb-4">
                <strong>Service Radius:</strong> 50 miles from both Blue Ridge and Blairsville showrooms
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="xl">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation or visit one of our North Georgia showrooms 
              to see our premium spa collection in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Schedule Free Consultation
              </Button>
              <Button href="/locations" variant="outline" size="lg">
                Visit Our Showrooms
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
            "@type": "Service",
            "name": "Hot Tub and Spa Services North Georgia",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Georgia Spa Company",
              "image": "https://res.cloudinary.com/southland-organics/image/upload/Georgia%20Spa%20Company/GeorgiaSpaCompany-NewLogo_vsotmk",
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
              ]
            },
            "description": "Complete hot tub and spa services including sales, installation, maintenance, repair, and water care for North Georgia.",
            "serviceType": [
              "Hot Tub Sales",
              "Spa Installation", 
              "Hot Tub Repair",
              "Spa Maintenance",
              "Water Care Services",
              "Spa Chemicals",
              "Hot Tub Covers"
            ],
            "areaServed": [
              "Blue Ridge, GA",
              "Blairsville, GA", 
              "Hiawassee, GA",
              "Young Harris, GA",
              "Dahlonega, GA",
              "Helen, GA"
            ],
            "brand": [
              {
                "@type": "Brand",
                "name": "Hot Spring Spas"
              },
              {
                "@type": "Brand", 
                "name": "Caldera Spas"
              },
              {
                "@type": "Brand",
                "name": "Endless Pools"
              }
            ]
          })
        }}
      />
    </>
  );
}