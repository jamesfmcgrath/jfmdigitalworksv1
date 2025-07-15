import './css/style.css';

import { Fira_Code, Inter } from 'next/font/google';
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
  preload: false,
});

export const metadata = {
  metadataBase: new URL('https://jfmdigitalworks.com'),
  title: 'JFM Digital Works – Secure, Accessible Web Solutions',
  description:
    'JFM Digital Works is a modern web consultancy creating cloud-native, accessible, and secure digital experiences for clients in Ireland and the EU.',
  keywords:
    'web development, accessibility, performance, security, React, TypeScript, Drupal, Ireland, EU',
  authors: [{ name: 'JFM Digital Works' }],
  creator: 'JFM Digital Works',
  publisher: 'JFM Digital Works',
  openGraph: {
    title: 'JFM Digital Works – Secure, Accessible Web Solutions',
    description:
      'JFM Digital Works is a modern web consultancy creating cloud-native, accessible, and secure digital experiences for clients in Ireland and the EU.',
    url: 'https://jfmdigitalworks.com',
    siteName: 'JFM Digital Works',
    locale: 'en_IE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JFM Digital Works – Secure, Accessible Web Solutions',
    description:
      'JFM Digital Works is a modern web consultancy creating cloud-native, accessible, and secure digital experiences for clients in Ireland and the EU.',
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
        <link rel="apple-touch-icon" href="/images/logo-192.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/logo-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/logo-512.png" />
        <meta name="msapplication-TileImage" content="/images/logo-512.png" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <link rel="preconnect" href="https://api.web3forms.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} bg-gray-100 font-inter tracking-tight text-gray-800 antialiased`}
      >
        <Suspense fallback={<div className="min-h-screen bg-gray-100" />}>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </Suspense>
      </body>
    </html>
  );
}
