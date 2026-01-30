'use client';
import Image from 'next/image';
import ReviewsSlider from './reviews-slider';
import SkobkiUI from './skobki-ui';
import SkobkiDesktop from './skobki-desktop';
import { useTranslations } from 'next-intl';
import { m } from 'framer-motion';

const ReviewsContainer = () => {
  const t = useTranslations('Reviews');

  return (
    <section className="relative px-[20px] sm:px-[40px] md:px-0 pt-[148px] md:pt-0 overflow-visible">
      {/* decor elements (shadows) - static */}
      <div className="pointer-events-none select-none">
        {/* center decor */}
        <Image
          src="/review-desktop-centr-decor.webp"
          alt="review-desktop-centr-decor"
          width={1500}
          height={1500}
          sizes="(max-width: 1500px) 100vw, 1500px"
          quality={80}
          className="hidden md:block absolute max-w-none top-[-260px] lg:top-[-360px] xl:top-[-300px] left-[50%] translate-x-[-50%] contrast-125 saturate-150 -z-30"
        />
        {/* shadow on center decor */}
        <Image
          src="/review-desktop-shadow-on.webp"
          alt="review-desktop-shadow-on"
          width={1000}
          height={800}
          sizes="(max-width: 1150px) 100vw, 1150px"
          quality={100}
          className="hidden md:block absolute w-[1150px] top-[230px] left-0 h-auto max-w-none -z-20"
        />
        <Image
          src="/reviews-shadow.webp"
          alt="reviews-shadow"
          width={1176}
          height={1106}
          sizes="(max-width: 768px) 100vw, 1176px"
          quality={100}
          className="md:hidden absolute max-w-none top-[-80px] right-[-680px] -z-20"
        />
      </div>

      <div className="md:flex md:justify-between md:mb-[75px] lg:mb-[40px] xl:mb-[75px]">
        <m.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className=" md:order-1 max-w-[407px] md:max-w-full md:text-right lg:max-w-[700px] xl:max-w-full mb-[24px] md:mb-0 md:mt-[-10px] font-manrope font-light text-[40px] sm:text-[52px] md:text-[64px] lg:text-[48px] xl:text-[64px] leading-[120%] text-white uppercase will-change-[opacity,transform] transform-gpu"
        >
          {t('title')}
        </m.h2>
        <m.p
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="md:order-0 max-w-[191px] font-montserrat font-light text-[14px] sm:text-[16px] leading-[120%] text-white mb-[44px] md:mb-0 will-change-[opacity,transform] transform-gpu"
        >
          {t('subtitle')}
        </m.p>
      </div>

      <ReviewsSlider />

      {/* Brackets (bottom/side decor) - static */}
      <div className="pointer-events-none select-none">
        <SkobkiUI className="md:hidden absolute top-[308px] right-[-40px] -z-10" />
        <SkobkiDesktop className="hidden md:block absolute lg:top-[308px] xl:top-[370px] right-[-30px] -z-10" />
      </div>
    </section>
  );
};

export default ReviewsContainer;
