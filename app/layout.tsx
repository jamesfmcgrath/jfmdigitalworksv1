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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="light dark" />
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
