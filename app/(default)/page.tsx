export const metadata = {
  title: 'JFM Digital Works – Secure, Accessible Web Solutions',
  description:
    'JFM Digital Works is a modern web consultancy creating cloud-native, accessible, and secure digital experiences for clients in Ireland and the EU.',
};

import CaseStudies from '@/components/case-studies';
import Contact from '@/components/contact';
import Hero from '@/components/hero-home';
import Services from '@/components/services';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <Contact />
    </>
  );
}
