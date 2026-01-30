'use client';
import Image from 'next/image';
import GooeyWhiteButton from '../ui/gooey-white-button';
import CasesSlider from './cases-slider';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { CaseWithLanguage } from '@/types/case';

const FeedbackModal = dynamic(() => import('@/components/feedback-modal'), {
  ssr: false,
});

interface CasesContainerProps {
  cases: CaseWithLanguage[];
}

const CasesContainer = ({ cases }: CasesContainerProps) => {
  const t = useTranslations('Cases');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <section className="px-[20px] sm:px-[40px] relative z-10 pt-[148px]">
      <Image
        src="/cases-radial-shadow.webp"
        alt="cases-red-decor-right"
        width={580}
        height={611}
        sizes="(max-width: 768px) 100vw, 580px"
        quality={100}
        className="h-auto max-w-none absolute top-[-180px] left-[-70px] right-0 pointer-events-none -z-10"
      />
      <h2 className="relative z-10 ml-auto max-w-[275px] sm:max-w-[400px] mb-[24px] text-[40px] sm:text-[48px] font-manrope font-light uppercase text-right text-white leading-[120%]">
        {t.rich('title', {
          gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
        })}
      </h2>
      <p className="font-monserat text-[14px] sm:text-[16px] font-light text-white leading-[120%] max-w-[186px] sm:max-w-[300px] mb-[32px]">
        {t('subtitle')}
      </p>
      <CasesSlider cases={cases} />
      <GooeyWhiteButton
        text={t('button')}
        onClick={() => setIsFeedbackOpen(true)}
        className="mx-auto text-center w-full text-[14px] font-montserrat font-light text-black"
        height={52}
      />
      <FeedbackModal isOpen={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
      <Image
        src="/case-red-decor-left.png"
        alt="case-red-decor-left"
        width={692}
        height={850}
        sizes="(max-width: 768px) 100vw, 692px"
        quality={100}
        className="h-auto max-w-none absolute bottom-[-510px] left-[-470px] scale-[1.65] pointer-events-none contrast-125 saturate-150 z-20 opacity-85"
      />
    </section>
  );
};

export default CasesContainer;
