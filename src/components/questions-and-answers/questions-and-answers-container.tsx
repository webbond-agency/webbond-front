'use client';
import QuestionsAccordion from './questions-accordion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const QuestionsAndAnswersContainer = () => {
  const t = useTranslations('Questions');

  return (
    <section className="relative px-[20px] sm:px-[40px] md:px-0 pt-[148px] md:pt-[178px] lg:pt-[100px] xl:pt-[178px]">
      {/* questions-shadow left */}
      <Image
        src="/questions-shadow.webp"
        alt="questions-shadow"
        width={1582}
        height={1477}
        sizes="(max-width: 1582px) 100vw, 1582px"
        quality={100}
        priority
        className="absolute top-[-120px] left-[-440px] max-w-none -z-10 pointer-events-none opacity-60 transform-gpu"
      />
      {/* radial shadow right*/}
      <Image
        src="/desktop-questions-shadow.webp"
        alt="questions-desktop-radial-shadow"
        width={1500}
        height={1466}
        sizes="(max-width: 1500px) 100vw, 1500px"
        quality={80}
        className="hidden md:block absolute bottom-[-300px] right-[-400px] max-w-none -z-20 pointer-events-none opacity-70 transform-gpu"
      />
      <h2 className="max-w-[240px] sm:max-w-[400px] md:max-w-full mb-[48px] lg:mb-[24px] xl:mb-[48px] font-manrope font-light text-[40px] sm:text-[52px] md:text-[64px] lg:text-[48px] xl:text-[64px] leading-[120%] text-white uppercase [text-shadow:4px_3px_9px_rgba(255,0,166,0.2)]">
        {t('title')}
      </h2>
      <QuestionsAccordion />
      <Image
        src="/questions-red-decor.webp"
        alt="questions-right-decor"
        width={898}
        height={388}
        sizes="(max-width: 898px) 100vw, 898px"
        quality={75}
        className="absolute bottom-[-60px] left-[-100px] max-w-none -z-20 pointer-events-none opacity-80 transform-gpu"
      />
    </section>
  );
};

export default QuestionsAndAnswersContainer;
