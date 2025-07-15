export const metadata = {
  title: 'JFM Digital Works – Secure, Accessible Web Solutions',
  description:
    'JFM Digital Works is a modern web consultancy creating cloud-native, accessible, and secure digital experiences for clients in Ireland and the EU.',
};

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Server-side components
import Hero from '@/components/hero-home';

// Client-side components with dynamic loading
const Services = dynamic(() => import('@/components/services'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const CaseStudies = dynamic(() => import('@/components/case-studies'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const Contact = dynamic(() => import('@/components/contact'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const ClientOnlyComponents = dynamic(() => import('@/components/client-only-components'), {
  loading: () => null,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <CaseStudies />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <Contact />
      </Suspense>
      <ClientOnlyComponents />
    </>
  );
}
