// Cloudinary integration for optimized image delivery
import { INTEGRATIONS } from './constants';

export interface CloudinaryTransformOptions {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'scale' | 'crop';
  gravity?: 'auto' | 'center' | 'north' | 'south' | 'east' | 'west' | 'face';
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  blur?: number;
  brightness?: number;
  contrast?: number;
  saturation?: number;
}

export class CloudinaryHelper {
  private cloudName: string;
  private baseUrl: string;

  constructor() {
    this.cloudName = INTEGRATIONS.cloudinary.cloudName || '';
    this.baseUrl = `https://res.cloudinary.com/${this.cloudName}`;
    
    if (!this.cloudName) {
      console.warn('Cloudinary cloud name not configured. Using fallback URLs.');
    }
  }

  /**
   * Generate optimized image URL with transformations
   */
  getImageUrl(publicId: string, options: CloudinaryTransformOptions = {}): string {
    if (!this.cloudName) {
      // Fallback to local images if Cloudinary not configured
      return `/images/${publicId}`;
    }

    const transformations: string[] = [];

    // Dimension transformations
    if (options.width || options.height) {
      const dimensions = [
        options.width ? `w_${options.width}` : '',
        options.height ? `h_${options.height}` : '',
        options.crop ? `c_${options.crop}` : 'c_fill'
      ].filter(Boolean).join(',');
      transformations.push(dimensions);
    }

    // Quality and format
    if (options.quality) {
      transformations.push(`q_${options.quality}`);
    } else {
      transformations.push('q_auto');
    }

    if (options.format) {
      transformations.push(`f_${options.format}`);
    } else {
      transformations.push('f_auto');
    }

    // Gravity for cropping
    if (options.gravity) {
      transformations.push(`g_${options.gravity}`);
    }

    // Effects
    if (options.blur) transformations.push(`e_blur:${options.blur}`);
    if (options.brightness) transformations.push(`e_brightness:${options.brightness}`);
    if (options.contrast) transformations.push(`e_contrast:${options.contrast}`);
    if (options.saturation) transformations.push(`e_saturation:${options.saturation}`);

    const transformString = transformations.join(',');
    return `${this.baseUrl}/image/upload/${transformString}/${publicId}`;
  }

  /**
   * Generate responsive image URLs for different breakpoints
   */
  getResponsiveUrls(publicId: string, baseOptions: CloudinaryTransformOptions = {}): {
    mobile: string;
    tablet: string;
    desktop: string;
    xl: string;
  } {
    return {
      mobile: this.getImageUrl(publicId, { ...baseOptions, width: 480 }),
      tablet: this.getImageUrl(publicId, { ...baseOptions, width: 768 }),
      desktop: this.getImageUrl(publicId, { ...baseOptions, width: 1200 }),
      xl: this.getImageUrl(publicId, { ...baseOptions, width: 1920 })
    };
  }

  /**
   * Generate image URLs optimized for common use cases
   */
  getHeroImage(publicId: string, options: Partial<CloudinaryTransformOptions> = {}): string {
    return this.getImageUrl(publicId, {
      width: 1920,
      height: 1080,
      crop: 'fill',
      gravity: 'auto',
      quality: 'auto',
      format: 'auto',
      ...options
    });
  }

  getThumbnail(publicId: string, options: Partial<CloudinaryTransformOptions> = {}): string {
    return this.getImageUrl(publicId, {
      width: 300,
      height: 200,
      crop: 'fill',
      gravity: 'auto',
      quality: 'auto',
      format: 'auto',
      ...options
    });
  }

  getProductImage(publicId: string, options: Partial<CloudinaryTransformOptions> = {}): string {
    return this.getImageUrl(publicId, {
      width: 600,
      height: 400,
      crop: 'fill',
      gravity: 'center',
      quality: 'auto',
      format: 'auto',
      ...options
    });
  }

  /**
   * Generate srcset string for responsive images
   */
  generateSrcSet(publicId: string, baseOptions: CloudinaryTransformOptions = {}): string {
    const widths = [480, 768, 1024, 1200, 1920];
    
    return widths.map(width => {
      const url = this.getImageUrl(publicId, { ...baseOptions, width });
      return `${url} ${width}w`;
    }).join(', ');
  }

  /**
   * Get sizes attribute for responsive images
   */
  static getCommonSizes(): string {
    return '(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw';
  }

  /**
   * Generate video URL (if using Cloudinary for video)
   */
  getVideoUrl(publicId: string, options: {
    width?: number;
    height?: number;
    quality?: 'auto' | number;
    format?: 'auto' | 'mp4' | 'webm';
  } = {}): string {
    if (!this.cloudName) {
      return `/videos/${publicId}`;
    }

    const transformations: string[] = [];

    if (options.width || options.height) {
      const dimensions = [
        options.width ? `w_${options.width}` : '',
        options.height ? `h_${options.height}` : '',
      ].filter(Boolean).join(',');
      transformations.push(dimensions);
    }

    if (options.quality) {
      transformations.push(`q_${options.quality}`);
    } else {
      transformations.push('q_auto');
    }

    if (options.format) {
      transformations.push(`f_${options.format}`);
    } else {
      transformations.push('f_auto');
    }

    const transformString = transformations.join(',');
    return `${this.baseUrl}/video/upload/${transformString}/${publicId}`;
  }
}

// Export singleton instance
export const cloudinary = new CloudinaryHelper();

// Common image presets for the spa website
export const ImagePresets = {
  hero: (publicId: string) => cloudinary.getHeroImage(publicId),
  thumbnail: (publicId: string) => cloudinary.getThumbnail(publicId),
  product: (publicId: string) => cloudinary.getProductImage(publicId),
  gallery: (publicId: string) => cloudinary.getImageUrl(publicId, {
    width: 800,
    height: 600,
    crop: 'fill',
    gravity: 'auto',
    quality: 'auto'
  }),
  avatar: (publicId: string) => cloudinary.getImageUrl(publicId, {
    width: 150,
    height: 150,
    crop: 'fill',
    gravity: 'face',
    quality: 'auto'
  })
} as const;

export default cloudinary;