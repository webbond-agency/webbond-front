'use client';
import { useIsMobile } from '@/hooks/use-mobile';
import BusinessContainer from './business-container';
import DesktopBusinessContainer from './desktop-bisines-container';

const BusinessWrapper = () => {
  const isMobile = useIsMobile();

  if (isMobile === undefined) return null;

  return (
    <section>
      {isMobile ? <BusinessContainer /> : <DesktopBusinessContainer />}
    </section>
  );
};

export default BusinessWrapper;
