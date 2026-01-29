export const metadata = {
  title: 'JFM Digital Works – LocalGov Drupal Specialist for Irish & UK Councils',
  description:
    'Award-winning LocalGov Drupal specialist serving Irish and UK local authorities. WCAG 2.1 AA compliant government websites. Gold Winner 2025 dotCOMM Awards.',
  keywords:
    'LocalGov Drupal, Drupal accessibility consultant, LocalGov Drupal Ireland, Drupal consultant UK, WCAG compliance, government websites, local authority websites, Drupal migration, accessibility audit',
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
