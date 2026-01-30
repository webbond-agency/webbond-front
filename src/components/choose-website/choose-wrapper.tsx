'use client';
import { useIsMobile } from '@/hooks/use-mobile';
import ChooseWebsiteContainer from './choose-website-container';
import DesktopChooseWebsiteContainer from './desktop-choose-website-container';

const ChooseWrapper = () => {
  const isMobile = useIsMobile();

  if (isMobile === undefined) return null;

  return (
    <section>
      {isMobile ? (
        <ChooseWebsiteContainer />
      ) : (
        <DesktopChooseWebsiteContainer />
      )}
    </section>
  );
};

export default ChooseWrapper;
