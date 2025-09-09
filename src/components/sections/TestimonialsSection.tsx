'use client';

import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { clsx } from 'clsx';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
  spa?: string;
  year?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Deborah B.',
    location: 'Blairsville, GA',
    content: 'We followed our friends recommendation, and used the internet to help us choose Spa and Deck Creations, and are glad we did! Our new spa is much better than our old one. It is easier to clean and get the water in and out. We use it for our back pain, family time, and therapy.',
    rating: 5
  },
  {
    id: '2',
    name: 'John C.',
    location: 'Blue Ridge, GA',
    content: 'We liked the owners of Sundance Spas of Blue Ridge, and Spa and Deck Creations, so we bought our Sundance Marin. We like it better than our old spa, because of the seating, and the ozone generator. We use it for therapy, pain relief and relaxation. This is the best Spa Ever!!',
    rating: 5,
    spa: 'Sundance Marin'
  },
  {
    id: '3',
    name: 'Monica B.',
    location: 'Morganton, GA',
    content: 'We have a Sundance Altamar, and have it outside on our porch. We chose Spa and Deck Creations, inc. to be our dealer because they are very nice people, and because of the quality of the spa. Also because it has the best warranty. We use it for fun, improved sleep, pain relief, family time, therapy and fun. It helps all over!',
    rating: 5,
    spa: 'Sundance Altamar'
  },
  {
    id: '4',
    name: 'Mike B.',
    location: 'Blue Ridge, GA',
    content: 'We chose a Nordic Insider, as our first experience with hot tub ownership. We chose Spa and Deck Creations for our local service company because we always prefer to do business with local businesses, and because we use this spa for our cabin rental. The service we have received, the assistance with problems, the convenience of help and their promptness have been excellent. Keep up the good work!',
    rating: 5,
    spa: 'Nordic Insider'
  },
  {
    id: '5',
    name: 'John and Marion R.',
    location: 'Blue Ridge, GA',
    content: 'We purchased our Marin Spa in Oct 2005 from Spa and Deck Creations, after 2 years of dreaming about it. We love it and use it almost everyday. We use the moments fragrances and just relax the work day away. Thanks, Jill for all your help.',
    rating: 5,
    spa: 'Marin Spa',
    year: '2005'
  },
  {
    id: '6',
    name: 'Carol T.',
    location: 'Blue Ridge, GA',
    content: 'My new Majestic Spa by Sundance Spas is so wonderful! Joints, muscle aches, sore feet were all massaged until we were totally relaxed. Slept great, felt great, all night long! One of the best investments we have ever made!',
    rating: 5,
    spa: 'Sundance Majestic'
  },
  {
    id: '7',
    name: 'Betty & George C.',
    location: 'Hiawassee, GA',
    content: 'We previously owned a Sundance spa, and we got a new Altamar. We like the upgraded filtration system and the Sunpurity Mineral Purifier. No foaming, ever. It is outside on our screened in porch surrounded by garden and forest. We use it for fun and relaxation, as well as pain relief.',
    rating: 5,
    spa: 'Sundance Altamar'
  },
  {
    id: '8',
    name: 'Aileen & Mike G.',
    location: 'North Georgia',
    content: 'We have a Sundance Caprio, and bought it in May of 2005. We really like our new spa, as compared to our older one, it is deeper, and easier to clean, and keep the water regulated. The staff at Spa and Deck Creations gives us friendly service, and knowledgeable. They service what they sell. We use it almost daily and can\'t begin to enumerate how it has added to our enjoyment of life.',
    rating: 5,
    spa: 'Sundance Caprio',
    year: '2005'
  },
  {
    id: '9',
    name: 'Florence F.',
    location: 'Blairsville, GA',
    content: 'My new spa is so much better than my old one, it has better jets, they are stronger for me, I need help with my pain in my hip and back. I chose Spa and Deck Creations to be my dealer because of their convenient location in Union County.',
    rating: 5
  },
  {
    id: '10',
    name: 'Ranier A.',
    location: 'Hiawassee, GA',
    content: 'We got a good deal, great service and friendly treatment from Spa and Deck Creations. Our new spa is trouble free, and much easier to maintain than our other one. We use it for relaxation, improved sleep, pain relief, family time, and fun. We enjoy this unit thoroughly.',
    rating: 5
  }
];

interface TestimonialsSectionProps {
  className?: string;
  showTitle?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
}

export default function TestimonialsSection({
  className,
  showTitle = true,
  autoplay = true,
  autoplayInterval = 6000
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Set client-side flag to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
    setIsAutoPlaying(autoplay);
  }, [autoplay]);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isClient || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [isClient, isAutoPlaying, autoplayInterval]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className={clsx('py-16 bg-gradient-to-br from-blue-50 to-green-50', className)}>
      <Container>
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Our North Georgia Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 40 years, we&apos;ve been helping North Georgia families find the perfect spa solutions. 
              Here&apos;s what they have to say about their experience with Georgia Spa Company.
            </p>
          </div>
        )}

        <div className="relative">
          {/* Main testimonial display */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-blue-100 rounded-full -translate-x-10 -translate-y-10 opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-green-100 rounded-full translate-x-8 translate-y-8 opacity-50"></div>
              
              {/* Quote icon */}
              <div className="flex justify-center mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={clsx(
                      'w-5 h-5',
                      i < testimonials[currentIndex].rating 
                        ? 'text-yellow-400' 
                        : 'text-gray-300'
                    )}
                  />
                ))}
              </div>

              {/* Testimonial content */}
              <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 text-center italic min-h-[120px] flex items-center justify-center">
                <p>&ldquo;{testimonials[currentIndex].content}&rdquo;</p>
              </blockquote>

              {/* Customer info */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
                
                {testimonials[currentIndex].spa && (
                  <div className="mt-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {testimonials[currentIndex].spa}
                    </span>
                    {testimonials[currentIndex].year && (
                      <span className="inline-block ml-2 bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        Since {testimonials[currentIndex].year}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-200 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-200 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={clsx(
                  'w-3 h-3 rounded-full transition-all duration-200',
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress indicator */}
          {autoplay && isAutoPlaying && (
            <div className="flex justify-center mt-4">
              <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-100 ease-linear"
                  style={{
                    width: `${((Date.now() % autoplayInterval) / autoplayInterval) * 100}%`
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Satisfied Customers?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the same exceptional service and quality that has made us North Georgia&apos;s 
            trusted spa dealer for over 40 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get Your Free Quote
            </Button>
            <Button href="/locations" variant="outline" size="lg">
              Visit Our Showrooms
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}