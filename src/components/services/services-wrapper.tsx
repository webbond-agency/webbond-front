'use client';
import { useIsMobile } from '@/hooks/use-mobile';
import DesktopServicesContainer from './desktop-services-container';
import ServicesContainer from './services-container';

const ServicesWrapper = () => {
  const isMobile = useIsMobile();

  if (isMobile === undefined) return null;

  return (
    <section>
      {isMobile ? <ServicesContainer /> : <DesktopServicesContainer />}
    </section>
  );
};

export default ServicesWrapper;
