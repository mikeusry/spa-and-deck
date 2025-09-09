'use client';

import { clsx } from 'clsx';
import type { LoadingSpinnerProps } from '@/types/components';

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary', 
  className 
}: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2', 
    lg: 'w-8 h-8 border-3'
  };

  const colors = {
    primary: 'border-blue-600 border-t-transparent',
    secondary: 'border-green-600 border-t-transparent',
    current: 'border-current border-t-transparent'
  };

  const classes = clsx(
    'rounded-full animate-spin',
    sizes[size],
    colors[color],
    className
  );

  return (
    <div className={classes} role="status" aria-label="Loading">
      <span className="sr-only">Loading...</span>
    </div>
  );
}