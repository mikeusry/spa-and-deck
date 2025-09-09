'use client';

import { forwardRef } from 'react';
import { clsx } from 'clsx';
import type { SectionProps } from '@/types/components';

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, background = 'default', padding = 'lg', fullWidth = false, ...props }, ref) => {
    const baseStyles = fullWidth ? 'w-full' : '';
    
    const backgrounds = {
      default: 'bg-white',
      muted: 'bg-gray-50',
      gradient: 'mountain-gradient',
      primary: 'bg-blue-50',
      secondary: 'bg-green-50'
    };

    const paddings = {
      none: '',
      sm: 'py-8',
      md: 'py-12',
      lg: 'py-16',
      xl: 'py-24'
    };

    const classes = clsx(
      baseStyles,
      backgrounds[background],
      paddings[padding],
      className
    );

    return (
      <section ref={ref} className={classes} {...props}>
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;