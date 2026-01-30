'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { TEAM_DATA } from './team-data';
import GooeyWhiteButton from '../ui/gooey-white-button';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const FeedbackModal = dynamic(() => import('@/components/feedback-modal'), {
  ssr: false,
});

const DesktopTeamContainer = () => {
  const t = useTranslations('Team');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <section className="relative pb-[191px]">
      <Image
        src="/desktop-team-title.webp"
        alt="team-text-desktop"
        width={2500}
        height={800}
        sizes="100vw"
        quality={75}
        className="w-[103%] max-w-none absolute top-[120px] lg:top-[60px] xl:top-[100px] left-0 right-0 mx-auto select-none pointer-events-none"
      />
      {/* radial shadow right*/}
      <Image
        src="/team-desktop-radial-shadow.webp"
        alt="team-desktop-radial-shadow"
        width={1300}
        height={1200}
        sizes="100vw"
        quality={100}
        className="absolute bottom-[-600px] right-[-800px] max-w-none -z-20 pointer-events-none blur-3xl"
      />
      <Carousel>
        <div className="flex items-center mb-[60px] lg:mb-[80px] xl:mb-[132px]">
          <h2 className="max-w-[300px] lg:max-w-[375px] relative text-[45px] lg:text-[56px] xl:text-[64px] font-manrope font-light uppercase text-white leading-[120%] before:content-[''] before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[-30px] md:before:right-[-46px] before:w-[12px] md:before:w-[20px] before:h-[12px] md:before:h-[20px] before:bg-white before:rounded-full">
            {t('title')}
          </h2>
          <GooeyWhiteButton
            text={t('buttonAbout')}
            onClick={() => setIsFeedbackOpen(true)}
            width={236}
            height={52}
            className="ml-[80px] lg:ml-[84px] text-center w-[160px] md:w-[200px] lg:w-[220px] xl:w-[236px] h-[40px] md:h-[44px] lg:h-[48px] xl:h-[52px] text-[12px] md:text-[14px] font-montserrat font-light text-black"
          />
          {/* Custom Navigation Buttons */}
          <div className="flex ml-auto gap-[12px] md:gap-[24px]">
            <CarouselPrevious
              iconSize={24}
              className="static translate-y-0 w-[36px] md:w-[44px] h-[36px] md:h-[44px] rounded-full border-2 border-white text-white transition-colors cursor-pointer"
            ></CarouselPrevious>
            <CarouselNext
              iconSize={24}
              className="static translate-y-0 w-[36px] md:w-[44px] h-[36px] md:h-[44px] rounded-full bg-white transition-colors cursor-pointer"
            ></CarouselNext>
          </div>
        </div>
        <div>
          <CarouselContent className="-ml-4 pl-[20px]">
            {TEAM_DATA.map((teamItem) => (
              <CarouselItem
                key={teamItem.id}
                className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/4"
              >
                <div className="relative w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px] xl:max-w-[389px] h-[280px] md:h-[300px] lg:h-[330px] xl:h-[398px] p-[10px] md:p-[12px] xl:p-[16px] rounded-[12px] flex flex-col backdrop-blur-md bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] safari-blur-fix will-change-transform transform-gpu">
                  <Image
                    src={teamItem.image}
                    alt={teamItem.name}
                    fill
                    quality={80}
                    className="object-contain rounded-[13px]"
                  />
                  <div className="mt-auto flex flex-col gap-[4px] md:gap-[6px] relative z-10">
                    <div className="px-[12px] md:px-[18px] xl:px-[24px] w-fit flex items-center justify-center h-[32px] md:h-[36px] lg:h-[40px] xl:h-[47px] rounded-[32px] border border-white backdrop-blur-sm md:backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] font-manrope font-light text-[10px] md:text-[12px] xl:text-[14px] leading-[120%] text-white uppercase">
                      {teamItem.position}
                    </div>
                    <div className="px-[12px] md:px-[18px] xl:px-[24px] w-fit flex items-center justify-center h-[32px] md:h-[36px] lg:h-[40px] xl:h-[47px] rounded-[32px] bg-white font-manrope font-light text-[10px] md:text-[12px] xl:text-[14px] leading-[120%] text-black uppercase">
                      {teamItem.name} {teamItem.lastName}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
      <FeedbackModal isOpen={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
    </section>
  );
};

export default DesktopTeamContainer;
