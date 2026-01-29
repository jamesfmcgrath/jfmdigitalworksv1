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
  title: 'Fast Web Development for Growing Businesses | JFM Digital Works',
  description:
    'Secure, accessible web development with 100+ projects delivered. Drupal, React, WordPress expertise. WCAG compliance guaranteed. Based in Ireland, serving EU. Free discovery call.',
  keywords:
    'web developer Ireland, Drupal developer, accessibility audit, security audit, WCAG compliance, emergency web developer, web development Ireland, Drupal developer Ireland, fix drupal security issues Ireland, migrate drupal 7 to drupal 11, wordpress security audit Ireland',
  authors: [{ name: 'JFM Digital Works' }],
  creator: 'JFM Digital Works',
  publisher: 'JFM Digital Works',
  openGraph: {
    title: 'Fast Web Development | JFM Digital Works',
    description:
      '100+ projects delivered. Drupal, React, WordPress. WCAG compliance. Based in Ireland.',
    url: 'https://jfmdigitalworks.com',
    siteName: 'JFM Digital Works',
    locale: 'en_IE',
    type: 'website',
    images: [
      {
        url: '/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'JFM Digital Works - Fast Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fast Web Development | JFM Digital Works',
    description:
      '100+ projects delivered. Drupal, React, WordPress expertise.',
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
              '@type': 'ProfessionalService',
              name: 'JFM Digital Works',
              description:
                'Web development, security audits, and accessibility services for enterprise and government',
              url: 'https://jfmdigitalworks.com',
              telephone: '+353-87-399-9751',
              email: 'hello@jfmdigitalworks.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Westport',
                addressRegion: 'County Mayo',
                addressCountry: 'IE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 53.8008,
                longitude: -9.5218,
              },
              areaServed: [
                {
                  '@type': 'Country',
                  name: 'Ireland',
                },
                {
                  '@type': 'Country',
                  name: 'United Kingdom',
                },
                {
                  '@type': 'Place',
                  name: 'European Union',
                },
              ],
              priceRange: '€€€',
              knowsAbout: [
                'Drupal Development',
                'React Development',
                'WordPress Development',
                'Web Accessibility',
                'WCAG Compliance',
                'Web Security',
                'Platform Migration',
              ],
              sameAs: [
                'https://www.linkedin.com/in/james-mcgrath-web-development',
                'https://github.com/jamesfmcgrath',
              ],
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
