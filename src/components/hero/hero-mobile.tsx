'use client';
import { useTranslations } from 'next-intl';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import GooeyWhiteButton from '../ui/gooey-white-button';
import SplineGlobe from '../ui/spline-globe';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const FeedbackModal = dynamic(() => import('@/components/feedback-modal'), {
  ssr: false,
});

const HeroMobile = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0 });
  const t = useTranslations('Hero');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <section
      ref={containerRef}
      className="px-[20px] sm:px-[40px] pt-[45px] sm:pt-[80px] pb-[148px] relative overflow-hidden"
    >
      {/* Используем scale, чтобы "зумировать" сцену */}
      <div className="absolute top-[-110px] -right-[77%] w-[150%] h-[120%] z-0 pointer-events-none scale-[1.1] origin-top-right">
        <SplineGlobe isVisible={isInView} />
      </div>
      <div className="relative z-10">
        <p className="mb-[74px] max-w-[206px] sm:max-w-[300px] ml-auto text-[12px] sm:text-[14px] leading-[120%] font-light font-montserrat text-right text-white">
          {t('description')}
        </p>
        <p className="font-light font-manrope text-[14px] leading-[120%] text-white uppercase mb-[12px]">
          {t('subtitle')}
        </p>
        <div className="relative">
          <h1 className="max-w-[261px] sm:max-w-[450px] font-manrope text-[40px] sm:text-[48px] leading-[120%] text-white uppercase font-light">
            {t('title')}
          </h1>
          <div className="absolute bottom-[10px] right-[12px] flex items-center justify-center rounded-[20px] w-[67px] py-1 px-[7px] backdrop-blur-[17.71900749206543px] bg-white/3 shadow-[inset_2px_-1px_5px_-1px_rgba(255,255,255,0.12)] safari-blur-fix">
            <Image
              src="/mobile-title-banner.png"
              alt="mobile-title-banner badge"
              width={51}
              height={27}
            />
          </div>
        </div>
        <div className="relative mt-[80px] mb-[73px]">
          <p className="absolute top-[-10px] left-[-48px] transform max-w-[112px] -rotate-90 text-[14px] uppercase font-light font-manrope text-[#9a9a9a]">
            {t('digitalAgency')}
          </p>
          <div className="relative pl-[20px] max-w-[264px] ml-auto">
            <Image
              src="/hero-mobile-description-vetical-lie.png"
              alt="hero-mobile-description-vetical-lie"
              width={2}
              height={88}
              className="absolute bottom-[-5px] left-0 w-[2px] h-[97px]"
            />
            <p className="font-montserrat font-light text-[14px] sm:text-[16px] leading-[120%] text-white max-w-[244px] sm:max-w-[350px] ml-auto">
              {t.rich('mainDescription', {
                gray: (chunks) => (
                  <span className="text-[#818181]">{chunks}</span>
                ),
              })}
            </p>
          </div>
        </div>
        <GooeyWhiteButton
          text={t('button')}
          onClick={() => setIsFeedbackOpen(true)}
          className="mx-auto text-center w-full text-[14px] font-montserrat font-light text-black"
          height={52}
        />
      </div>
      <FeedbackModal isOpen={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
    </section>
  );
};

export default HeroMobile;
