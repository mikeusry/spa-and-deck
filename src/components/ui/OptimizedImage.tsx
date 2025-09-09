'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { clsx } from 'clsx';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  showLoadingPlaceholder?: boolean;
  fallbackSrc?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  showLoadingPlaceholder = true,
  fallbackSrc,
  quality = 85,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(showLoadingPlaceholder);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Use fallback or generate a placeholder
  const displaySrc = hasError && fallbackSrc ? fallbackSrc : src;

  return (
    <div className="relative">
      {/* Loading placeholder */}
      {isLoading && showLoadingPlaceholder && (
        <div 
          className={clsx(
            'absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse',
            'bg-[length:400%_100%] bg-gradient-to-r',
            className
          )}
          style={{
            animation: 'shimmer 2s ease-in-out infinite',
            backgroundImage: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)'
          }}
        />
      )}
      
      <Image
        src={displaySrc}
        alt={alt}
        className={clsx(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        quality={quality}
        {...props}
      />
      
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -400% 0; }
          100% { background-position: 400% 0; }
        }
      `}</style>
    </div>
  );
}