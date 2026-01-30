'use client';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { QUESTIONS_DATA } from './questions-data';
import { useTranslations } from 'next-intl';

const QuestionsAccordion = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations('Questions');

  // Show first 5 items
  const firstFive = QUESTIONS_DATA.slice(0, 5);
  // Rest of the items
  const remaining = QUESTIONS_DATA.slice(5);

  return (
    <div className="flex flex-col gap-4">
      <Accordion
        type="single"
        collapsible
        className="relative z-10 flex flex-col gap-4"
      >
        {firstFive.map(({ id }) => (
          <AccordionItem
            key={id}
            value={`question-${id}`}
            className="border-none rounded-[50px] bg-[rgba(18,18,18,0.26)] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] transform-gpu will-change-transform"
          >
            <AccordionTrigger className="h-[96px] cursor-pointer items-center group px-[32px] py-[31px] text-[14px] md:text-[20px] text-white font-montserrat font-light leading-[120%]">
              <span className="pr-4 text-left leading-snug">
                {t(`q${id}.question`)}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-[12px] md:text-[20px] text-white/70 lg:px-10 lg:pb-8">
              {t(`q${id}.answer`)}
            </AccordionContent>
          </AccordionItem>
        ))}

        {isExpanded &&
          remaining.map(({ id }) => (
            <AccordionItem
              key={id}
              value={`question-${id}`}
              className="border-none rounded-[50px] backdrop-blur-sm bg-[rgba(18,18,18,0.26)] shadow-[inset_0_4px_13px_0_rgba(255,255,255,0.25)] transform-gpu will-change-transform"
            >
              <AccordionTrigger className="h-[96px] cursor-pointer items-center group px-[32px] py-[31px] text-[14px] md:text-[20px] text-white font-montserrat font-light leading-[120%]">
                <span className="pr-4 text-left leading-snug">
                  {t(`q${id}.question`)}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-[12px] md:text-[16px] text-white/70 lg:px-10 lg:pb-8">
                {t(`q${id}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>

      {!isExpanded && (
        <div
          onClick={() => setIsExpanded(true)}
          className="h-[96px] flex items-center justify-between px-[32px] py-[31px] rounded-[50px] bg-white cursor-pointer group"
        >
          <span className="text-[14px] text-black font-montserrat font-light leading-[120%] uppercase">
            {t('seeMore')}
          </span>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[32px] h-[32px] shrink-0"
          >
            <path
              d="M16 0L17.0748 14.9252L32 16L17.0748 17.0748L16 32L14.9252 17.0748L0 16L14.9252 14.9252L16 0Z"
              fill="black"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default QuestionsAccordion;
