import CaseStudies from '@/components/case-studies';
import Contact from '@/components/contact';
import FinalCTA from '@/components/final-cta';
import Hero from '@/components/hero-home';
import Process from '@/components/process';
import Services from '@/components/services';

export const metadata = {
  title: 'Fast Web Development for Growing Businesses | JFM Digital Works',
  description:
    'Secure, accessible web development with 100+ projects delivered. Drupal, React, WordPress expertise. WCAG compliance guaranteed. Based in Ireland, serving EU. Free discovery call.',
};

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Skip to main content
      </a>
      <main id="main-content" role="main">
        <Hero />
        <CaseStudies />
        <Services />
        <Process />
        <FinalCTA />
        <Contact />
      </main>
    </>
  );
}
