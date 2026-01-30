'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import GooeyWhiteButton from '../ui/gooey-white-button';
import HeroSlider from './hero-slider';
import SplineGlobe from '../ui/spline-globe';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const FeedbackModal = dynamic(() => import('@/components/feedback-modal'), {
  ssr: false,
});

const HeroDesktop = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0 });
  const t = useTranslations('Hero');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <section
      ref={containerRef}
      className="pt-[96px] lg:pt-[45px] xl:pt-[96px] pb-[93px] lg:pb-[40px] xl:pb-[93px] relative"
    >
      <div className="absolute top-[-140px] lg:top-[-100px] xl:top-[-150px] right-1/2 translate-x-1/2 scale-[1.2] lg:scale-[1.0] xl:scale-[1.2] w-full h-full pointer-events-none">
        <SplineGlobe isVisible={isInView} />
      </div>
      <div className="flex justify-between relative">
        <div className="flex flex-col">
          <p className="font-light font-manrope text-[16px] leading-[120%] text-white uppercase mb-[12px] lg:mb-[6px] xl:mb-[12px]">
            {t('subtitle')}
          </p>
          <div className="flex">
            <h1 className="max-w-[624px] lg:max-w-[500px] xl:max-w-[624px] min-h-[154px] lg:min-h-[120px] xl:min-h-[154px] font-manrope text-[64px] lg:text-[48px] xl:text-[64px] leading-[120%] text-white uppercase font-light mb-[42px] lg:mb-[20px] xl:mb-[42px]">
              {t('title')}
            </h1>
            <div className="flex items-center justify-center mt-auto mb-[50px] lg:mb-[25px] xl:mb-[50px] ml-[23px] rounded-[37px] w-[121px] h-fit py-[9px] px-[14px] backdrop-blur-sm bg-white/3 shadow-[inset_2px_-1px_5px_-1px_rgba(255,255,255,0.12)] safari-blur-fix">
              <Image
                src="/mobile-title-banner.png"
                alt="mobile-title-banner badge"
                width={93}
                height={50}
              />
            </div>
          </div>
          <GooeyWhiteButton
            text={t('button')}
            onClick={() => setIsFeedbackOpen(true)}
            className="text-center w-full text-[14px] font-montserrat font-light text-black"
            width={313}
            height={52}
          />
        </div>

        <p className="mt-[35px] lg:mt-[15px] xl:mt-[35px] max-w-[235px] text-[14px] leading-[120%] font-light font-montserrat text-right text-white">
          {t('description')}
        </p>
        <div className="absolute right-[-20px] bottom-[60px] lg:bottom-[30px] xl:bottom-[60px] transform rotate-90 text-[20px] leading-[120%] uppercase font-montserrat text-white before:content-[''] before:w-[10px] before:h-[10px] before:bg-[#939393] before:rounded-full before:absolute before:bottom-0 before:translate-x-[50%] before:left-[-50%] before:-translate-y-[50%]">
          {t('verticalText')}
        </div>
      </div>
      <div className="relative flex">
        <p className="absolute top-[100px] lg:top-[90px] xl:top-[100px] left-[-48px] transform max-w-[112px] -rotate-90 text-[14px] uppercase font-light font-manrope text-[#9a9a9a]">
          {t('digitalAgency')}
        </p>
        <div className="relative pl-[20px] max-w-[290px] md:mr-[20px] lg:mr-0 lg:max-w-[330px] ml-0 lg:ml-[70px] xl:ml-[157px] mt-auto mb-[23px] lg:mb-[15px] xl:mb-[23px]">
          <Image
            src="/hero-mobile-description-vetical-lie.png"
            alt="hero-mobile-description-vetical-lie"
            width={2}
            height={88}
            className="absolute bottom-[-5px] left-0 w-[2px] h-[97px]"
          />
          <p className="font-montserrat font-light text-[18px] leading-[120%] text-white">
            {t.rich('mainDescription', {
              gray: (chunks) => (
                <span className="text-[#818181]">{chunks}</span>
              ),
            })}
          </p>
        </div>
        <HeroSlider />
      </div>
      <FeedbackModal isOpen={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
    </section>
  );
};

export default HeroDesktop;
