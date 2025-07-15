export const metadata = {
  title: 'JFM Digital Works – Secure, Accessible Web Solutions',
  description:
    'JFM Digital Works is a modern web consultancy creating cloud-native, accessible, and secure digital experiences for clients in Ireland and the EU.',
};

// Server-side components - use regular imports for better performance
import CaseStudies from '@/components/case-studies';
import Contact from '@/components/contact';
import Hero from '@/components/hero-home';
import Services from '@/components/services';

// Client-only components - direct import to avoid preload warnings
import ClientOnlyComponents from '@/components/client-only-components';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <Contact />
      <ClientOnlyComponents />
    </>
  );
}
