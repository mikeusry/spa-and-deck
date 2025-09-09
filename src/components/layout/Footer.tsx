'use client';

import Link from 'next/link';
import { clsx } from 'clsx';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { COMPANY, LOCATIONS, NAVIGATION, SOCIAL_LINKS } from '@/lib/constants';
import type { FooterProps } from '@/types/components';
import Container from '@/components/ui/Container';

export default function Footer({ 
  className, 
  showSocialLinks = true, 
  compact = false 
}: FooterProps) {
  const footerClasses = clsx(
    'bg-gray-900 text-white',
    className
  );

  const currentYear = new Date().getFullYear();

  if (compact) {
    return (
      <footer className={footerClasses}>
        <Container>
          <div className="py-8 text-center">
            <p className="text-gray-400">
              © {currentYear} {COMPANY.name}. All rights reserved. | Serving North Georgia for {COMPANY.established}.
            </p>
          </div>
        </Container>
      </footer>
    );
  }

  return (
    <footer className={footerClasses}>
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="text-xl font-bold">{COMPANY.name}</div>
                <div className="text-gray-400 text-sm">{COMPANY.tagline}</div>
              </div>
              <p className="text-gray-400 mb-6">
                {COMPANY.description}
              </p>
              
              {showSocialLinks && (
                <div className="flex space-x-4">
                  <a href={SOCIAL_LINKS.facebook} className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href={SOCIAL_LINKS.instagram} className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href={SOCIAL_LINKS.x} className="text-gray-400 hover:text-white transition-colors" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {NAVIGATION.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-6">Our Locations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.values(LOCATIONS).map((location) => (
                  <div key={location.name} className="space-y-3">
                    <h4 className="font-semibold text-blue-400">{location.name}</h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-start space-x-2">
                        <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <div>{location.address.street}</div>
                          <div>{location.address.city}, {location.address.state} {location.address.zip}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                        <a href={`tel:${location.phone}`} className="hover:text-white transition-colors">
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <EnvelopeIcon className="w-4 h-4 flex-shrink-0" />
                        <a href={`mailto:${location.email}`} className="hover:text-white transition-colors">
                          {location.email}
                        </a>
                      </div>
                      <div className="flex items-start space-x-2">
                        <ClockIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <div>{location.hours.weekday}</div>
                          <div>{location.hours.saturday}</div>
                          <div>{location.hours.sunday}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {COMPANY.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Proudly serving North Georgia for {COMPANY.established} • Formerly {COMPANY.formerName}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}