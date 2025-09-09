import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
    domains: ['res.cloudinary.com'], // Allow Cloudinary images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/southland-organics/**',
      }
    ],
    formats: ['image/webp', 'image/avif'],
    qualities: [50, 75, 85, 90, 95], // Add quality options for Next.js 16 compatibility
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  // Disable server-side features for static export
  experimental: {
    // Enable static generation optimizations
    optimizePackageImports: ['@headlessui/react', '@heroicons/react']
  }
};

export default nextConfig;
