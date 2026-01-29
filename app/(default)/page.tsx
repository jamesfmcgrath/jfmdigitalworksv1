export const metadata = {
  title: 'JFM Digital Works – Modern Drupal Solutions for Enterprise & Government',
  description:
    'Award-winning Drupal developer with 25 years experience. Modern Drupal 8-11 architectures, WCAG compliance, government-grade security, AI-accelerated delivery. Gold Winner 2025 dotCOMM Awards.',
  keywords:
    'Drupal developer Ireland, enterprise Drupal solutions, Drupal security audit, WCAG accessibility consultant, Drupal 11 migration, modern Drupal architecture, Drupal consultant, government Drupal, LocalGov Drupal, Drupal accessibility',
};

// Server-side components - use regular imports for better performance
import AwardsBanner from '@/components/awards-banner';
import CaseStudies from '@/components/case-studies';
import Contact from '@/components/contact';
import Hero from '@/components/hero-home';
import HowWeWork from '@/components/how-we-work';
import Services from '@/components/services';

// Client-only components - direct import to avoid preload warnings
import ClientOnlyComponents from '@/components/client-only-components';

export default function Home() {
  return (
    <>
      <Hero />
      <AwardsBanner />
      <Services />
      <CaseStudies />
      <HowWeWork />
      <Contact />
      <ClientOnlyComponents />
    </>
  );
}
