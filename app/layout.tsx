import './css/style.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Fira_Code, Inter } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://jfmdigitalworks.com'),
  title: 'JFM Digital Works – LocalGov Drupal Specialist for Irish & UK Councils',
  description:
    'Award-winning LocalGov Drupal specialist serving Irish and UK local authorities. WCAG 2.1 AA compliant government websites. Gold Winner 2025 dotCOMM Awards.',
  keywords:
    'LocalGov Drupal, Drupal accessibility consultant, LocalGov Drupal Ireland, Drupal consultant UK, WCAG compliance, government websites, local authority websites, Drupal migration, accessibility audit, Irish councils, UK councils',
  authors: [{ name: 'JFM Digital Works' }],
  creator: 'JFM Digital Works',
  publisher: 'JFM Digital Works',
  openGraph: {
    title: 'JFM Digital Works – LocalGov Drupal Specialist for Irish & UK Councils',
    description:
      'Award-winning LocalGov Drupal specialist serving Irish and UK local authorities. WCAG 2.1 AA compliant government websites. Gold Winner 2025 dotCOMM Awards.',
    url: 'https://jfmdigitalworks.com',
    siteName: 'JFM Digital Works',
    locale: 'en_IE',
    type: 'website',
    images: [
      {
        url: '/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'JFM Digital Works - LocalGov Drupal Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JFM Digital Works – LocalGov Drupal Specialist for Irish & UK Councils',
    description:
      'Award-winning LocalGov Drupal specialist serving Irish and UK local authorities. WCAG 2.1 AA compliant government websites.',
    images: ['/images/og-preview.png'],
  },
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
  alternates: {
    canonical: 'https://jfmdigitalworks.com',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <head>
        <meta name="theme-color" content="#6366f1" />
        <meta name="color-scheme" content="light dark" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="JFM Digital Works" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/android-chrome-512x512.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/images/android-chrome-512x512.png"
        />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <link rel="preconnect" href="https://api.web3forms.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'JFM Digital Works',
              description:
                'Award-winning LocalGov Drupal specialist serving Irish and UK local authorities. WCAG 2.1 AA compliant government websites.',
              url: 'https://jfmdigitalworks.com',
              logo: 'https://jfmdigitalworks.com/images/logo-192.png',
              foundingDate: '2024',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IE',
                addressRegion: 'Ireland',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'info@jfmdigitalworks.com',
                contactType: 'Customer Service',
                availableLanguage: 'English',
              },
              sameAs: ['https://github.com/jamesfmcgrath'],
              offers: {
                '@type': 'Offer',
                category: 'LocalGov Drupal Services',
                description:
                  'LocalGov Drupal implementation, migration, accessibility audits, and ongoing support for government websites',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} bg-gray-100 font-inter tracking-tight text-gray-800 antialiased`}
      >
        <Suspense fallback={<div className="min-h-screen bg-gray-100" />}>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </Suspense>

        <Analytics />
        <SpeedInsights />
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
