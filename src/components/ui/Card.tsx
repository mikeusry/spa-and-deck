'use client';

import { forwardRef } from 'react';
import { clsx } from 'clsx';
import type { CardProps } from '@/types/components';

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, variant = 'default', padding = 'md', hover = false, ...props }, ref) => {
    const baseStyles = 'rounded-lg border transition-all duration-200';
    
    const variants = {
      default: 'bg-white border-gray-200 shadow-sm',
      elevated: 'bg-white border-gray-200 shadow-lg',
      outlined: 'bg-transparent border-gray-300',
      glass: 'spa-card border-white/20'
    };

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10'
    };

    const hoverStyles = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';

    const classes = clsx(
      baseStyles,
      variants[variant],
      paddings[padding],
      hoverStyles,
      className
    );

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;