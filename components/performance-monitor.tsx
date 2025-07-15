'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Core Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Track First Contentful Paint (FCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (
            entry.entryType === 'paint' &&
            entry.name === 'first-contentful-paint'
          ) {
            console.log('FCP:', entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });

      // Track Largest Contentful Paint (LCP)
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('LCP:', entry.startTime);
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // Track Cumulative Layout Shift (CLS)
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as any;
          if (!layoutShiftEntry.hadRecentInput) {
            console.log('CLS:', layoutShiftEntry.value);
          }
        }
      }).observe({ entryTypes: ['layout-shift'] });

      // Track First Input Delay (FID)
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const firstInputEntry = entry as any;
          console.log(
            'FID:',
            firstInputEntry.processingStart - firstInputEntry.startTime
          );
        }
      }).observe({ entryTypes: ['first-input'] });

      // Track page load time
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log('Page Load Time:', loadTime);
      });
    }
  }, []);

  return null;
}
