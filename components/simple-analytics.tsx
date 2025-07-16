'use client';

import { useEffect } from 'react';

interface SimpleAnalyticsProps {
  domain?: string;
  respectDoNotTrack?: boolean;
  ignorePages?: string[];
  euMode?: boolean;
}

export default function SimpleAnalytics({
  domain = 'jfmdigitalworks.com',
  respectDoNotTrack = true,
  ignorePages = ['/admin', '/dev', '/test'],
  euMode = true, // Enable EU Mode for GDPR compliance
}: SimpleAnalyticsProps) {
  useEffect(() => {
    // Only load in production
    if (process.env.NODE_ENV !== 'production') {
      console.log('Simple Analytics: Not loading in development mode');
      return;
    }

    // Respect Do Not Track setting
    if (respectDoNotTrack && navigator.doNotTrack === '1') {
      console.log('Simple Analytics: Respecting Do Not Track setting');
      return;
    }

    // Check if current page should be ignored
    const currentPath = window.location.pathname;
    if (ignorePages.some((ignorePage) => currentPath.startsWith(ignorePage))) {
      console.log('Simple Analytics: Ignoring page:', currentPath);
      return;
    }

    // Initialize Simple Analytics if not already loaded
    if (typeof window !== 'undefined' && !window.sa_event) {
      // The script is already loaded via the script tag in layout.tsx
      // This is just for any additional client-side configuration

      // Custom event tracking function
      window.sa_event =
        window.sa_event ||
        function (...args: any[]) {
          if (window.sa_event?.q) {
            window.sa_event.q.push(args);
          }
        };

      // Initialize the queue
      window.sa_event.q = window.sa_event.q || [];

      console.log('Simple Analytics: Initialized for domain:', domain);

      if (euMode) {
        console.log('Simple Analytics: EU Mode enabled for GDPR compliance');
      }
    }
  }, [domain, respectDoNotTrack, ignorePages]);

  // Track custom events
  const trackEvent = (event: string, metadata?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.sa_event) {
      window.sa_event(event, metadata);
    }
  };

  // Track conversion events
  const trackConversion = (value?: number, currency?: string) => {
    if (typeof window !== 'undefined' && window.sa_event) {
      window.sa_event('conversion', { value, currency });
    }
  };

  // Expose tracking functions to parent components
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.trackEvent = trackEvent;
      window.trackConversion = trackConversion;
    }
  }, []);

  return null; // This component doesn't render anything
}

// Type declarations for window object
declare global {
  interface Window {
    sa_event: any;
    trackEvent: (event: string, metadata?: Record<string, any>) => void;
    trackConversion: (value?: number, currency?: string) => void;
  }
}
