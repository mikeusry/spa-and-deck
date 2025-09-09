'use client';

import { forwardRef } from 'react';
import { clsx } from 'clsx';
import type { ContainerProps } from '@/types/components';

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, size = 'lg', center = true, padding = true, ...props }, ref) => {
    const baseStyles = center ? 'mx-auto' : '';
    
    const sizes = {
      sm: 'max-w-3xl',
      md: 'max-w-4xl', 
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full'
    };

    const paddingStyles = padding ? 'px-4 sm:px-6 lg:px-8' : '';

    const classes = clsx(
      baseStyles,
      sizes[size],
      paddingStyles,
      className
    );

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;