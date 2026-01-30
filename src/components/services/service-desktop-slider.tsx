'use client';
import { useRef, useState, useEffect } from 'react';
import { servicesData } from './services-data';
import Image from 'next/image';
import GlassGooeyButton from '../ui/glass-gooey-button';
import { m, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import MarqueeText from '../ui/marquee-text';
import { cn } from '@/lib/utils';

const ServiceDesktopSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const isAnimatingRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewport, setViewport] = useState<'xl' | 'lg' | 'md'>('xl');
  const t = useTranslations('Services');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setViewport('xl');
      else if (window.innerWidth >= 1024) setViewport('lg');
      else setViewport('md');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [viewport]);

  const getSlideStyles = (index: number, activeIndex: number) => {
    const total = servicesData.length;
    let diff = (index - activeIndex) % total;
    if (diff < -total / 2) diff += total;
    if (diff > total / 2) diff -= total;

    const xOffset =
      viewport === 'xl' ? '73%' : viewport === 'lg' ? '55%' : '45%';

    if (diff === 0) {
      return {
        x: '0%',
        y: '0%',
        zIndex: 40,
        scale: 1,
        opacity: 1,
      };
    } else if (diff === -1 || (activeIndex === 0 && index === total - 1)) {
      return {
        x: `-${xOffset}`,
        y: viewport === 'md' ? '10%' : '14%',
        zIndex: 20,
        scale: 1,
        opacity: 1,
      };
    } else if (diff === 1 || (activeIndex === total - 1 && index === 0)) {
      return {
        x: xOffset,
        y: viewport === 'md' ? '10%' : '14%',
        zIndex: 20,
        scale: 1,
        opacity: 1,
      };
    } else {
      return {
        x: '0%',
        y: '0%',
        zIndex: 5,
        scale: 1,
        opacity: 0,
      };
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % servicesData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + servicesData.length) % servicesData.length,
    );
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[400px] md:min-h-[450px] xl:min-h-[500px]">
      <div
        ref={containerRef}
        className="relative w-full h-[350px] md:h-[400px] xl:h-[450px] flex items-center justify-center"
      >
        <div className="absolute left-[50px] lg:left-[150px] xl:left-[200px] top-[-60px] md:top-[-90px] flex items-center justify-center z-10 pointer-events-none ">
          <Image
            src="/ellipse-shadow-slider.webp"
            alt="slider-shadow"
            width={800}
            height={430}
            quality={60}
            sizes="(max-width: 1024px) 600px, 800px"
            className="select-none pointer-events-none w-[600px] md:w-[800px]"
          />
        </div>

        {servicesData.map((service, index) => (
          <m.div
            key={service.id}
            className={`absolute left-0 right-0 mx-auto pointer-events-none slide-${index}`}
            animate={getSlideStyles(index, activeIndex)}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
              maxWidth: '520px',
              width: '100%',
            }}
          >
            <div
              onClick={() => {
                const total = servicesData.length;
                let diff = (index - activeIndex) % total;
                if (diff < -total / 2) diff += total;
                if (diff > total / 2) diff -= total;

                if (diff === -1 || (activeIndex === 0 && index === total - 1)) {
                  handlePrev();
                } else if (
                  diff === 1 ||
                  (activeIndex === total - 1 && index === 0)
                ) {
                  handleNext();
                }
              }}
              className={cn(
                'mx-auto w-[320px] md:w-[380px] lg:w-[420px] xl:w-[450px] relative pt-[12px] md:pt-[16px] pr-[10px] pb-[12px] md:pb-[16px] pl-[18px] md:pl-[24px] flex gap-4 md:gap-6',
                index === activeIndex ? 'backdrop-blur-xl' : 'backdrop-blur-sm',
                'bg-white/3 rounded-[20px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden pointer-events-auto cursor-pointer',
              )}
            >
              <div className="flex flex-col h-full w-[110px] md:w-[150px] lg:w-[170px] xl:w-[189px] shrink-0">
                <MarqueeText
                  text={t(`items.${service.id}.title`)}
                  className="font-manrope font-light text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] leading-[120%] text-white uppercase mb-[8px] md:mb-[12px] w-full"
                />
                <p className="font-montserrat font-light text-[10px] md:text-[11px] xl:text-[12px] leading-[120%] text-[#bebebe] mb-[12px] md:mb-[16px]">
                  {t(`items.${service.id}.description`)}
                </p>
                <MarqueeText
                  text={t(`items.${service.id}.price`)}
                  className="font-montserrat font-light text-[12px] md:text-[14px] text-white uppercase mb-[12px] md:mb-[16px] w-full"
                />
                <div className="mt-auto">
                  <GlassGooeyButton
                    text={t('seeMore')}
                    width={149}
                    height={43}
                    blur="36px"
                    boxShadow="inset 3px -1px 11px -1px rgba(255, 255, 255, 0.12)"
                    className="relative z-10 text-white text-[10px] md:text-[12px] font-montserrat font-light leading-[167%] cursor-pointer w-[110px] md:w-[149px] h-[32px] md:h-[43px]"
                  />
                </div>
              </div>
              <div className="relative rounded-[6px] w-full min-h-full bg-[linear-gradient(168deg,#e63b44_0%,#1b0000_100%)]">
                <div className="relative overflow-hidden w-full h-full rounded-[6px]">
                  <Image
                    src={service.imageDesktop}
                    alt="services-slider-image"
                    width={450}
                    height={450}
                    sizes="(max-width: 1024px) 300px, 450px"
                    quality={80}
                    className="absolute max-w-none h-auto right-[-100px] md:right-[-145px] bottom-[-100px] md:bottom-[-135px] w-[300px] md:w-[450px]"
                  />
                </div>
              </div>
              <Image
                src={service.imageMobile}
                alt="services-slider-image"
                width={540}
                height={200}
                sizes="(max-width: 1024px) 400px, 540px"
                quality={80}
                className="absolute left-[20px] md:left-[30px] bottom-[-200px] md:bottom-[-260px] max-w-none pointer-events-none w-[400px] md:w-[540px]"
              />
            </div>
          </m.div>
        ))}
      </div>

      <div className="absolute bottom-[20px] md:bottom-[40px] xl:bottom-[54px] left-[50%] translate-x-[-50%] flex justify-center gap-[24px] z-50">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-[36px] md:w-[44px] h-[36px] md:h-[44px] rounded-full border-2 border-white text-white transition-colors hover:bg-white/10 cursor-pointer"
        >
          <ChevronLeft size={24} className="md:w-[32px] md:h-[32px]" />
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-[36px] md:w-[44px] h-[36px] md:h-[44px] rounded-full bg-white text-black transition-colors hover:bg-gray-200 cursor-pointer"
        >
          <ChevronRight size={24} className="md:w-[32px] md:h-[32px]" />
        </button>
      </div>
    </section>
  );
};

export default ServiceDesktopSlider;
