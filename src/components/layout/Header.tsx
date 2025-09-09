'use client';

import { useState } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { COMPANY, NAVIGATION } from '@/lib/constants';
import type { HeaderProps } from '@/types/components';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Header({ 
  className, 
  fixed = false, 
  transparent = false, 
  showCTA = true 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerClasses = clsx(
    'border-b transition-all duration-200',
    {
      'fixed top-0 left-0 right-0 z-50': fixed,
      'bg-white/95 backdrop-blur-sm border-gray-200': !transparent,
      'bg-transparent border-transparent': transparent,
    },
    className
  );

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={headerClasses}>
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex-shrink-0">
              <img
                src="https://res.cloudinary.com/southland-organics/image/upload/h_48,q_auto,f_auto/Georgia%20Spa%20Company/GeorgiaSpaCompany-NewLogo_vsotmk"
                alt="Georgia Spa Company Logo"
                className="h-12 w-auto transition-transform duration-200 group-hover:scale-105"
                width="48"
                height="48"
                loading="eager"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {COMPANY.name}
              </div>
              <div className="text-sm text-gray-600 hidden lg:block">
                {COMPANY.tagline}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {showCTA && (
              <div className="hidden sm:block">
                <Button href="/contact" size="sm">
                  Get Quote
                </Button>
              </div>
            )}
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
              {showCTA && (
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <Button href="/contact" className="w-full" onClick={closeMobileMenu}>
                    Get Quote
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}