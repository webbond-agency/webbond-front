'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { useAnimate, m } from 'framer-motion';
import { WEBSITE_TYPES_MOCK } from './choose-website-mock';
import GooeyWhiteButton from '../ui/gooey-white-button';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

const FeedbackModal = dynamic(() => import('@/components/feedback-modal'), {
  ssr: false,
});

const DesktopChooseWebsiteContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scope, animate] = useAnimate();
  const isAnimatingRef = useRef(false);
  const t = useTranslations('ChooseWebsite');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const activeContent = WEBSITE_TYPES_MOCK[activeIndex];

  const handleToggle = async (index: number) => {
    if (index === activeIndex || isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    // Animate out content
    await animate(
      '.animate-content',
      { opacity: 0, y: 10 },
      { duration: 0.3, ease: 'easeInOut' },
    );

    setActiveIndex(index);

    // Animate in content
    await animate(
      '.animate-content',
      { opacity: 1, y: 0 },
      { duration: 0.3, ease: 'easeInOut' },
    );

    isAnimatingRef.current = false;
  };

  return (
    <section ref={scope} className="relative">
      <div className="mb-[40px] lg:mb-[30px] xl:mb-[55px]">
        <h2 className="max-w-[990px] font-manrope font-light text-[42px] lg:text-[48px] xl:text-[64px] leading-[120%] text-white uppercase">
          {t.rich('title', {
            gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
          })}
        </h2>
        <p className="font-montserrat font-light text-[12px] lg:text-[13px] xl:text-[14px] lg:mt-[-40px] xl:mt-[-70px] leading-[120%] text-white max-w-[343px] ml-auto">
          {t('subtitle')}
        </p>
      </div>

      <ul className="flex gap-[10px] xl:gap-[20px] mb-[40px] lg:mb-[35px] xl:mb-[55px]">
        {WEBSITE_TYPES_MOCK.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <li
              key={item.id}
              onClick={() => handleToggle(index)}
              className={`font-manrope font-light text-[16px] lg:text-[18px] xl:text-[24px] uppercase leading-[120%] rounded-[56px] flex items-center justify-center w-full h-[60px] lg:h-[64px] xl:h-[83px] backdrop-blur-sm shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] cursor-pointer transition-all duration-300 ease-in-out active:scale-[0.95] safari-blur-fix ${
                isActive ? 'bg-white text-[#0a0705]' : 'bg-white/3 text-white'
              }`}
            >
              <span>{t(`types.${item.id}.label`)}</span>
            </li>
          );
        })}
      </ul>

      <div className="relative min-h-[500px] lg:min-h-[530px] xl:min-h-[646px] mb-[44px]">
        <div className="flex flex-col lg:flex-row gap-[15px] xl:gap-[20px]">
          {/* Phone Card - Static Container */}
          <div className="relative w-full lg:w-[320px] xl:w-[392px] h-[450px] bg-white/6 lg:h-[530px] xl:h-[646px] rounded-[14px] shrink-0 overflow-hidden lg:overflow-visible">
            <div className="animate-content w-full h-full will-change-opacity will-change-transform transform-gpu">
              <p className="absolute z-10 top-[24px] lg:top-[24px] xl:top-[32px] right-[20px] lg:right-[20px] xl:right-[27px] max-w-[150px] xl:max-w-[189px] leading-[120%] font-montserrat font-light text-[12px] xl:text-[14px] text-white">
                {t(`types.${activeContent.id}.description`)}
              </p>
              {/* Dark Corner Shadow Overlay */}
              <div className="rounded-[14px] absolute w-[490px] h-[490px] left-0 bottom-0 bg-[radial-gradient(circle_at_0%_100%,rgba(0,0,0,0.9)_0%,transparent_60%)] z-20 pointer-events-none" />

              <div className="relative w-full h-full rounded-[14px]">
                <Image
                  src={activeContent.fonImageDesktop}
                  alt="choosefon"
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 320px, 392px"
                  quality={80}
                  className="object-cover rounded-[14px]"
                />
                <div className="absolute inset-0 pointer-events-none" />
                <Image
                  src={activeContent.phoneImage}
                  alt="choosefon"
                  width={500}
                  height={946}
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 400px, 500px"
                  quality={80}
                  className="absolute top-[120px] lg:top-[130px] xl:top-[160px] left-[50px] lg:left-[55px] xl:left-[70px] select-none pointer-events-none max-w-none h-auto w-[400px] lg:w-[400px] xl:w-[500px] origin-top-left z-10"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[15px] xl:gap-[20px] w-full">
            <div className="flex flex-col md:flex-row gap-[15px] xl:gap-[20px]">
              {/* First Info Card - Static Container */}
              <div className="flex-1 xl:flex-503 w-full rounded-[14px] py-[20px] px-[18px] xl:py-[28px] xl:px-[24px] bg-white/3 backdrop-blur-sm shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
                <div className="animate-content h-full flex flex-col will-change-opacity will-change-transform transform-gpu">
                  <h2 className="mb-[20px] xl:mb-[35px] font-manrope font-light text-[22px] lg:text-[24px] xl:text-[32px] text-white uppercase leading-[120%]">
                    {t(`types.${activeContent.id}.firstSection.title`)}
                  </h2>
                  <ul className="flex flex-col gap-[10px] xl:gap-[12px] mt-auto">
                    {['0', '1', '2'].map((key) => (
                      <li
                        className="relative w-full min-h-[50px] xl:min-h-[61px] py-[10px] xl:py-[15px] pl-[44px] xl:pl-[60px] pr-[20px] rounded-[40px] bg-[#0a0705] flex items-center font-montserrat font-light text-[12px] xl:text-[14px] text-white leading-[120%] before:content-[''] before:absolute before:left-[16px] xl:before:left-[24px] before:w-[14px] xl:before:w-[18px] before:h-[14px] xl:before:h-[18px] before:bg-white before:rounded-full"
                        key={`list-1-${key}`}
                      >
                        <span className="w-full xl:w-[290px]">
                          {t(
                            `types.${activeContent.id}.firstSection.items.${key}`,
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Second Info Card - Static Container */}
              <div className="flex-1 xl:flex-341 w-full rounded-[14px] py-[20px] px-[18px] xl:py-[28px] xl:px-[24px] bg-white/3 backdrop-blur-sm shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
                <div className="animate-content h-full flex flex-col will-change-opacity will-change-transform transform-gpu">
                  <h2 className="mb-[20px] xl:mb-[35px] font-manrope font-light text-[22px] lg:text-[24px] xl:text-[32px] text-white uppercase leading-[120%]">
                    {t(`types.${activeContent.id}.secondSection.title`)}
                  </h2>
                  <ul className="flex flex-col gap-[10px] xl:gap-[12px] mt-auto">
                    {['0', '1', '2'].map((key) => (
                      <li
                        className="relative w-full min-h-[50px] xl:min-h-[61px] py-[10px] xl:py-[15px] pl-[44px] xl:pl-[60px] pr-[20px] rounded-[40px] bg-[#0a0705] flex items-center font-montserrat font-light text-[12px] xl:text-[14px] text-white leading-[120%] before:content-[''] before:absolute before:left-[16px] xl:before:left-[24px] before:w-[14px] xl:before:w-[18px] before:h-[14px] xl:before:h-[18px] before:bg-white before:rounded-full"
                        key={`list-2-${key}`}
                      >
                        {t(
                          `types.${activeContent.id}.secondSection.items.${key}`,
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Banner - Static Container */}
            <div className="relative w-full lg:w-[480px] xl:w-[600px] h-[200px] lg:h-[240px] xl:h-[298px] rounded-[14px] overflow-hidden ml-auto">
              <m.div className="animate-content w-full h-full relative will-change-transform transform-gpu">
                <Image
                  src={activeContent.bannerImage}
                  alt="choosebanner"
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 480px, 600px"
                  quality={75}
                  className="object-cover"
                />
              </m.div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center rounded-[37px] w-[121px] py-[9px] px-[14px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
          <Image
            src="/mobile-title-banner.png"
            alt="mobile-title-banner badge"
            width={93}
            height={50}
            quality={80}
          />
        </div>
        <div className="flex-1 h-px bg-linear-to-r from-[#FFFFFF] to-[#0A0704]"></div>
        <GooeyWhiteButton
          text={t('buttonStart')}
          onClick={() => setIsFeedbackOpen(true)}
          width={267}
          height={52}
          className="mx-auto text-center w-[267px] lg:w-[220px] h-[52px] lg:h-[48px] text-[14px] font-montserrat font-light text-black"
        />
      </div>
      <div className="animate-content absolute bottom-[50px] left-[-80px] -z-20 w-[600px] h-[600px] pointer-events-none select-none will-change-transform transform-gpu">
        <Image
          src={activeContent.fonImageDesktop}
          alt="shadow-decoration"
          fill
          quality={60}
          className="blur-[120px] opacity-20 object-contain brightness-50 contrast-125"
        />
      </div>

      <Image
        src="/decor-chosse-desktop.webp"
        alt="decor-chosse-desktop"
        width={1150}
        height={1150}
        quality={100}
        sizes="(max-width: 1280px) 800px, 1150px"
        className="absolute bottom-[130px] lg:bottom-[-70px] xl:bottom-[15px] left-[-250px] lg:left-[50px] xl:left-[115px] -z-10 max-w-none lg:w-[1050px] lg:h-[1050px] xl:w-[1150px] xl:h-[1150px] pointer-events-none select-none"
      />
      <FeedbackModal isOpen={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
    </section>
  );
};

export default DesktopChooseWebsiteContainer;
