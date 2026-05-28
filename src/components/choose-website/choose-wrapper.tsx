'use client';
import { useIsMobile } from '@/hooks/use-mobile';
import ChooseWebsiteContainer from './choose-website-container';
import DesktopChooseWebsiteContainer from './desktop-choose-website-container';

const ChooseWrapper = () => {
  const isMobile = useIsMobile();

  // Mobile-first SSR so content is in the HTML and doesn't all mount after hydration.
  return (
    <section>
      {isMobile === false ? (
        <DesktopChooseWebsiteContainer />
      ) : (
        <ChooseWebsiteContainer />
      )}
    </section>
  );
};

export default ChooseWrapper;
