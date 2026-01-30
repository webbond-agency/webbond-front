'use client';
import dynamic from 'next/dynamic';

import { useIsMobile } from '@/hooks/use-mobile';

const HeroDesktop = dynamic(() => import('./hero-desktop'), { ssr: true });
const HeroMobile = dynamic(() => import('./hero-mobile'), { ssr: true });

const HeroContainer = () => {
  const isMobile = useIsMobile();

  if (isMobile === undefined) return <div className="min-h-screen" />;

  return <section>{isMobile ? <HeroMobile /> : <HeroDesktop />}</section>;
};

export default HeroContainer;
