'use client';
import Image from 'next/image';
import ServicesSlider from './services-slider';
import GooeyWhiteButton from '../ui/gooey-white-button';
import { m } from 'framer-motion';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const FeedbackModal = dynamic(() => import('@/components/feedback-modal'), {
  ssr: false,
});

const ServicesContainer = () => {
  const t = useTranslations('Services');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <section className="px-[20px] sm:px-[40px] pb-[148px]">
      <h2 className="font-light font-manrope text-[40px] sm:text-[48px] leading-[120%] text-white uppercase max-w-[260px] sm:max-w-[400px]">
        {t('title')}
      </h2>
      <div className="relative mt-[32px] mb-[37px]">
        <div className="absolute bottom-0 left-[-48px] flex flex-row items-center transform rotate-90 text-[20px] sm:text-[24px] uppercase font-montserrat text-white before:content-[''] before:w-[10px] before:h-[10px] before:bg-[#939393] before:rounded-full before:mr-[14px]">
          {t('verticalText')}
        </div>
        <div className="ml-auto max-w-[310px] sm:max-w-[400px] font-manrope font-light uppercase text-[20px] sm:text-[24px] leading-[120%] text-right text-white">
          {t('subtitle')}
        </div>
      </div>
      <div className="relative -mx-[20px] h-[155px]">
        <m.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute left-[-48px] sm:left-1/2 sm:-translate-x-1/2 max-w-none w-[616px] h-[155px] will-change-transform"
        >
          <Image
            src="/services-text-removebg-preview.png"
            alt="services-container-title-banner"
            width={616}
            height={155}
            sizes="(max-width: 768px) 100vw, 616px"
            quality={80}
            className="w-full h-full"
          />
        </m.div>

        <Image
          src="/services-shadow.webp"
          alt="services-shadow"
          width={700}
          height={824}
          sizes="(max-width: 768px) 100vw, 700px"
          quality={100}
          className="absolute left-[-200px] top-[-100px] max-w-none pointer-events-none select-none"
        />
      </div>
      <ServicesSlider />
      <GooeyWhiteButton
        text={t('button')}
        onClick={() => setIsFeedbackOpen(true)}
        className="mx-auto text-center w-full text-[14px] font-montserrat font-light text-black"
        height={52}
      />
      <FeedbackModal isOpen={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
    </section>
  );
};

export default ServicesContainer;
