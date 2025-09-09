import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true // Required for static export
  },
  // Disable server-side features for static export
  experimental: {
    // Enable static generation optimizations
    optimizePackageImports: ['@headlessui/react', '@heroicons/react']
  }
};

export default nextConfig;
