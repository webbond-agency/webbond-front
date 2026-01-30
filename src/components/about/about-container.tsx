'use client';
import Image from 'next/image';
import GooeyWhiteButton from '../ui/gooey-white-button';
import { useTranslations } from 'next-intl';
import { m } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const FeedbackModal = dynamic(() => import('@/components/feedback-modal'), {
  ssr: false,
});

const AboutContainer = () => {
  const t = useTranslations('About');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <section className="relative z-20 px-[20px] sm:px-[40px] pt-[150px] pb-[68px]">
      <m.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-[28px] text-[40px] sm:text-[48px] font-manrope font-light uppercase text-white leading-[120%] will-change-transform"
      >
        {t('title')}
      </m.h2>
      <div className="relative pl-[20px]">
        <m.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 w-[2px] h-[88px] origin-bottom"
        >
          <Image
            src="/hero-mobile-description-vetical-lie.png"
            alt="hero-mobile-description-vetical-lie"
            width={2}
            height={88}
            className="w-full h-full"
          />
        </m.div>

        <m.p
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="font-monserat text-base sm:text-lg text-white leading-[120%] mb-[66px] max-w-[275px] sm:max-w-[400px] will-change-transform"
        >
          {t.rich('description', {
            gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
          })}
        </m.p>
      </div>
      <m.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative font-manrope text-[20px] font-light uppercase text-white leading-[120%] ml-auto mb-[58px] max-w-[171px] after:content-[''] after:block after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[-36px] after:w-[20px] after:h-[20px] after:bg-white after:rounded-full after:z-20 will-change-transform"
      >
        {t('resultsTitle')}
      </m.p>
      <m.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.6 },
          },
        }}
        className="flex flex-col gap-4 w-full relative z-30 mb-[28px]"
      >
        <m.li
          variants={{
            hidden: { opacity: 0, x: -15 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative flex items-center w-full h-[109px] px-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden"
        >
          <p className="w-full max-w-[183px] font-manrope font-light text-white leading-[120%] wrap-break-word">
            <span className="block font-light uppercase text-base mb-3">
              {t('growthTitle')}
            </span>
            <span className="block text-[10px] leading-[120%] text-white">
              {t('growthDesc')}
            </span>
          </p>
          <div className="absolute top-[-15px] right-[17px] font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none z-30 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent">
            1
          </div>
        </m.li>
        <m.li
          variants={{
            hidden: { opacity: 0, x: 15 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative flex items-center justify-end w-full h-[109px] px-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden"
        >
          <p className="w-full max-w-[191px] font-manrope font-light text-base text-white leading-[120%] uppercase wrap-break-word">
            <span className="block font-light uppercase text-base mb-3">
              {t('visibilityTitle')}
            </span>
            <span className="block text-[10px] leading-[120%] text-white">
              {t('visibilityDesc')}
            </span>
          </p>
          <div className="absolute top-[-25px] left-0 font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none z-0 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent">
            2
          </div>
        </m.li>
        <m.li
          variants={{
            hidden: { opacity: 0, x: -15 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative flex items-center w-full h-[109px] px-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden"
        >
          <p className="w-full max-w-[210px] font-manrope font-light text-base text-white leading-[120%] uppercase wrap-break-word">
            <span className="block font-light uppercase text-base mb-3">
              {t('efficiencyTitle')}
            </span>
            <span className="block text-[10px] leading-[120%] text-white">
              {t('efficiencyDesc')}
            </span>
          </p>
          <div className="absolute top-[-20px] right-0 font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none z-0 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent">
            3
          </div>
        </m.li>
      </m.ul>
      <GooeyWhiteButton
        text={t('button')}
        onClick={() => setIsFeedbackOpen(true)}
        className="mx-auto relative z-30 text-center w-full text-[14px] font-montserrat font-light text-black"
        height={52}
      />
      <FeedbackModal isOpen={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        <Image
          src="/about-radial-shadow.png"
          alt="about-radial-shadow"
          width={1158}
          height={1131}
          sizes="(max-width: 768px) 100vw, 1158px"
          quality={100}
          className="absolute top-[30%] left-[-840px] h-auto max-w-none z-20 pointer-events-none"
        />
        <Image
          src="/about-red-decor-right.webp"
          alt="about-red-decor-right"
          width={1300}
          height={1300}
          sizes="(max-width: 768px) 100vw, 1300px"
          quality={100}
          className="absolute top-[150px] right-[-840px] h-auto max-w-none z-20 pointer-events-none contrast-125 saturate-150"
        />
      </m.div>
    </section>
  );
};

export default AboutContainer;
