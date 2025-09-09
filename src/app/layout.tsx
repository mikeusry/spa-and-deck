import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "../styles/hubspot-forms.css";
import { COMPANY, SEO } from '@/lib/constants';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Improve font loading performance
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false, // Only load when needed
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO.siteUrl),
  title: {
    default: COMPANY.name,
    template: `%s | ${COMPANY.name}`
  },
  description: SEO.description,
  keywords: SEO.keywords.join(', '),
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SEO.siteUrl,
    siteName: SEO.siteName,
    title: COMPANY.name,
    description: SEO.description,
    images: [
      {
        url: SEO.image,
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} - ${COMPANY.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: SEO.twitterHandle,
    creator: SEO.twitterHandle,
    title: COMPANY.name,
    description: SEO.description,
    images: [SEO.image],
  },
  alternates: {
    canonical: SEO.siteUrl,
  },
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Performance Optimizations - Preload Critical Resources */}
        <link 
          rel="preload" 
          href="https://res.cloudinary.com/southland-organics/image/upload/c_fill,w_1920,h_800,q_auto,f_webp,dpr_auto/Georgia%20Spa%20Company/hot-tub-lifestyle/HSS-2024-Highlife-Grandee" 
          as="image" 
          type="image/webp"
        />
        <link 
          rel="preload" 
          href="https://res.cloudinary.com/southland-organics/image/upload/h_48,q_auto,f_auto/Georgia%20Spa%20Company/GeorgiaSpaCompany-NewLogo_vsotmk" 
          as="image"
        />
        
        {/* DNS Prefetch for External Domains */}
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect to High-Priority Origins */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W7BV1LX1N2" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W7BV1LX1N2');
          `}
        </Script>
        
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
