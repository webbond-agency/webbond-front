'use client';
import { useIsMobile } from '@/hooks/use-mobile';
import DesktopServicesContainer from './desktop-services-container';
import ServicesContainer from './services-container';

const ServicesWrapper = () => {
  const isMobile = useIsMobile();

  // Mobile-first SSR: render content on the server (undefined | true -> mobile)
  // so it's in the HTML for SEO and doesn't all mount at once after hydration.
  return (
    <section>
      {isMobile === false ? <DesktopServicesContainer /> : <ServicesContainer />}
    </section>
  );
};

export default ServicesWrapper;
