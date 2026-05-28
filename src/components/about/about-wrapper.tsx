'use client';
import { useIsMobile } from '@/hooks/use-mobile';
import AboutContainer from './about-container';
import AboutDesktopContainer from './about-desktop-container';

const AboutWrapper = () => {
  const isMobile = useIsMobile();

  // Mobile-first SSR so content is in the HTML and doesn't all mount after hydration.
  return (
    <section>
      {isMobile === false ? <AboutDesktopContainer /> : <AboutContainer />}
    </section>
  );
};

export default AboutWrapper;
