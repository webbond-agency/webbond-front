'use client';
import Image from 'next/image';
import ShadowEllipseForIphone from './shadow-ellipse-for-iphone';
import GooeyWhiteButton from '../ui/gooey-white-button';
import WebsiteSelector from './website-selector';
import { useTranslations } from 'next-intl';
import { m } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const FeedbackModal = dynamic(() => import('@/components/feedback-modal'), {
  ssr: false,
});

const ChooseWebsiteContainer = () => {
  const t = useTranslations('ChooseWebsite');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <section className="relative px-[20px] sm:px-[40px] z-20">
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute inset-x-0 bottom-0 top-0 -z-10 pointer-events-none will-change-opacity"
      >
        <Image
          src="/fon-choose.png"
          alt="choose-website-banner"
          width={1000}
          height={1000}
          sizes="(max-width: 768px) 100vw, 1000px"
          quality={80}
          className="h-auto max-w-none w-[277.8vw] contrast-125 saturate-150 sm:hidden"
        />
      </m.div>
      <m.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-[22px] max-w-[320px] sm:max-w-[450px] font-manrope font-light text-[40px] sm:text-[48px] leading-[120%] text-white uppercase will-change-transform"
      >
        {t.rich('title', {
          gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
        })}
      </m.h2>
      <m.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        className="flex items-center mb-[22px] will-change-transform"
      >
        <div className="flex items-center justify-center rounded-[37px] w-[121px] py-[9px] px-[14px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] safari-blur-fix">
          <Image
            src="/mobile-title-banner.png"
            alt="mobile-title-banner badge"
            width={93}
            height={50}
            quality={80}
          />
        </div>
        <div className="font-montserrat font-light text-[12px] sm:text-[14px] leading-[120%] text-white text-right max-w-[173px] sm:max-w-[250px] ml-auto">
          {t('subtitle')}
        </div>
      </m.div>

      {/* website selector */}
      <m.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      >
        <WebsiteSelector />
      </m.div>

      <ShadowEllipseForIphone className="absolute bottom-[-320px] right-[-30px] w-full" />
      <GooeyWhiteButton
        text={t('buttonOrder')}
        onClick={() => setIsFeedbackOpen(true)}
        className="mx-auto text-center w-full text-[14px] font-montserrat font-light text-black"
        width={310}
        height={52}
      />
      <FeedbackModal isOpen={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
    </section>
  );
};

export default ChooseWebsiteContainer;
