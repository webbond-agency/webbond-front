'use client';

import { useTranslations } from 'next-intl';
import GooeyWhiteButton from './ui/gooey-white-button';
import { m } from 'framer-motion';
import Image from 'next/image';

interface SuccessContentProps {
  onClose: () => void;
}

const SuccessContent = ({ onClose }: SuccessContentProps) => {
  const t = useTranslations('SuccessModal');

  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative z-10 flex flex-col items-center w-full will-change-[opacity,transform] transform-gpu px-[20px] md:px-0"
    >
      <div className="absolute -z-10 bottom-0 left-[-750px] md:top-[-900px] md:left-[-650px] pointer-events-none select-none transform-gpu">
        <Image
          src="/feddback-modal-shadow.webp"
          alt="Feedback Modal Shadow"
          width={1200}
          height={1300}
          sizes="100vw"
          quality={60}
          className="max-w-none"
        />
      </div>

      <h2 className="text-center mb-[24px] xl:mb-[32px] font-manrope font-light text-[40px] xl:text-[64px] uppercase text-white leading-[120%]">
        {t('title')}
      </h2>
      <p className="text-center font-montserrat text-[12px] md:text-[14px] text-white mb-[48px] md:mb-[64px] max-w-[400px]">
        {t('description')}
      </p>

      <GooeyWhiteButton
        type="button"
        text={t('button')}
        onClick={onClose}
        className="w-full text-[14px] font-montserrat font-light text-black max-w-[310px] md:max-w-none"
        height={52}
        centerText
      />
    </m.div>
  );
};

export default SuccessContent;
