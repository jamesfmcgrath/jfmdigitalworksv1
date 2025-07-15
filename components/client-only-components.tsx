'use client';

import dynamic from 'next/dynamic';

// Client-side only components
const PerformanceMonitor = dynamic(
  () => import('@/components/performance-monitor'),
  { ssr: false }
);

const ServiceWorkerRegistration = dynamic(
  () => import('@/components/service-worker-registration'),
  { ssr: false }
);

export default function ClientOnlyComponents() {
  return (
    <>
      <PerformanceMonitor />
      <ServiceWorkerRegistration />
    </>
  );
}
