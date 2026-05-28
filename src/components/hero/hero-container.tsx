'use client';
import dynamic from 'next/dynamic';

import { useIsMobile } from '@/hooks/use-mobile';

const HeroDesktop = dynamic(() => import('./hero-desktop'), { ssr: true });
const HeroMobile = dynamic(() => import('./hero-mobile'), { ssr: true });

const HeroContainer = () => {
  const isMobile = useIsMobile();

  // SSR and first client paint render the mobile hero so the LCP content
  // (H1 + static globe) is present in the initial HTML. Desktop swaps in
  // after hydration. undefined | true -> mobile, false -> desktop.
  return (
    <section>{isMobile === false ? <HeroDesktop /> : <HeroMobile />}</section>
  );
};

export default HeroContainer;
