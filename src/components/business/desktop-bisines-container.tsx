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

const DesktopBisinesContainer = () => {
  const t = useTranslations('Business');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <section className="relative pt-[303px] pb-[176px]">
      <m.div
        initial={{ opacity: 0, x: -100, rotate: 5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 10 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute max-w-none top-1/2 left-[-210px] -translate-y-1/2 origin-top-left pointer-events-none select-none z-10 will-change-transform transform-gpu"
      >
        <Image
          src="/Business-phone.png"
          alt="business-left-decor"
          width={500}
          height={700}
          sizes="(max-width: 1280px) 33vw, 500px"
          quality={80}
          className="scale-[1.1] object-contain"
        />
      </m.div>
      {/* decor elements */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
        className="will-change-opacity"
      >
        {/* right decor */}
        <Image
          src="/busines-desktop-decor.webp"
          alt="business-desktop-decor"
          width={1600}
          height={1600}
          sizes="(max-width: 1600px) 100vw, 1600px"
          quality={100}
          className="absolute top-[-150px] right-[-900px] 2xl:right-[-1000px] max-w-none pointer-events-none -z-10 contrast-110 saturate-170"
        />
        {/* shadow dark on decor */}
        <Image
          src="/desktop-busines-shadow-ellipse-for-decor.webp"
          alt="business-desktop-shadow"
          width={1300}
          height={900}
          sizes="(max-width: 1300px) 100vw, 1300px"
          quality={40}
          className="absolute bottom-[-550px] right-[-900px] max-w-none pointer-events-none -z-10 blur-md"
        />
        {/* radial light shadow */}
        <Image
          src="/desktop-busines-radial-light-shadow.webp"
          alt="business-desktop-radial-light-shadow"
          width={1380}
          height={1340}
          sizes="33vw"
          quality={80}
          className="absolute bottom-[-350px] right-[-900px] max-w-none pointer-events-none -z-30 blur-md"
        />
      </m.div>
      <div className="flex flex-col max-w-[841px] mx-auto">
        <m.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-manrope text-[48px] xl:text-[64px] font-light uppercase text-white text-center leading-[120%] mb-[60px] will-change-transform transform-gpu"
        >
          {t.rich('title', {
            gray: (chunks) => <span className="text-[#999]">{chunks}</span>,
          })}
        </m.h2>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-between items-center will-change-opacity"
        >
          <div className="relative">
            <m.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-0 left-0 w-[2px] h-[81px] origin-bottom"
            >
              <Image
                src="/hero-mobile-description-vetical-lie.png"
                alt="hero-mobile-description-vetical-lie"
                width={2}
                height={81}
                className="w-full h-full"
              />
            </m.div>
            <m.p
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pl-[20px] max-w-[350px] font-montserrat font-light text-[20px] text-white leading-[120%] will-change-transform transform-gpu"
            >
              {t('description')}
            </m.p>
          </div>
          <div className="flex items-center justify-center rounded-[37px] w-[121px] py-[9px] px-[14px] backdrop-blur-md bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] safari-blur-fix">
            <Image
              src="/mobile-title-banner.png"
              alt="mobile-title-banner badge"
              width={93}
              height={50}
              quality={80}
            />
          </div>
          <GooeyWhiteButton
            text={t('button')}
            onClick={() => setIsFeedbackOpen(true)}
            className="text-[14px] text-center font-montserrat font-light text-black"
            width={236}
            height={52}
          />
        </m.div>
      </div>
      <FeedbackModal isOpen={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
    </section>
  );
};

export default DesktopBisinesContainer;
