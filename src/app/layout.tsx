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
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W7BV1LX1N2" />
        <Script id="google-analytics">
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
