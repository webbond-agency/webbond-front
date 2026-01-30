'use client';

import { useEffect, useRef } from 'react';
import { m, useInView, useAnimate } from 'framer-motion';
import Image from 'next/image';
import GlassGooeyButton from '../ui/glass-gooey-button';
import { HERO_SLIDER_DATA } from './hero-slider-data';

const HeroSlider = () => {
  const [scope, animate] = useAnimate();
  const currentIndexRef = useRef(0);
  const isInView = useInView(scope);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current || !isInView) return;

      const prevIndex = currentIndexRef.current;
      const nextIndex = (prevIndex + 1) % HERO_SLIDER_DATA.length;

      // Animate out previous slide
      animate(
        `.slide-${prevIndex}`,
        { opacity: 0, pointerEvents: 'none' },
        { duration: 0.8, ease: 'easeInOut' },
      );

      // Animate in next slide
      animate(
        `.slide-${nextIndex}`,
        { opacity: 1, pointerEvents: 'auto' },
        { duration: 0.8, ease: 'easeInOut' },
      );

      currentIndexRef.current = nextIndex;
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView, animate]);

  return (
    <div
      ref={scope}
      className="w-full relative flex mt-auto ml-auto max-w-[474px] rounded-[20px] py-[16px] pr-[16px] pl-[24px] backdrop-blur-sm bg-white/3 shadow-[inset_2px_-1px_6px_-1px_rgba(255,255,255,0.12)] min-h-[313px] safari-blur-fix"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
    >
      {HERO_SLIDER_DATA.map((slide, index) => {
        const isInitial = index === 0;
        return (
          <m.div
            key={slide.id}
            initial={false}
            style={{
              opacity: isInitial ? 1 : 0,
              pointerEvents: isInitial ? 'auto' : 'none',
            }}
            className={`absolute inset-0 flex p-[16px] pl-[24px] slide-${index} will-change-[opacity] transform-gpu`}
          >
            <div className="flex flex-col z-10">
              <h2 className="mb-[18px] max-w-[170px] font-manrope font-light text-[28px] leading-[120%] text-white uppercase">
                {slide.title}
              </h2>
              <p className="max-w-[147px] font-montserrat font-light text-[10px] leading-[120%] text-[#888]">
                {slide.description}
              </p>
              <GlassGooeyButton
                text="Se mere"
                width={149}
                height={42}
                className="text-white text-[12px] font-montserrat font-light leading-[167%] mt-auto cursor-pointer"
              />
            </div>
            <div className="relative ml-auto rounded-[10px] w-full max-w-[204px] h-[281px] bg-[linear-gradient(168deg,#e63b44_0%,#1b0000_100%)]">
              <div className="relative overflow-hidden w-full h-full rounded-[10px]">
                <Image
                  src={slide.imageDesktop}
                  alt={slide.title}
                  width={408}
                  height={562}
                  sizes="(max-width: 768px) 100vw, 204px"
                  priority={index === 0}
                  quality={80}
                  className="absolute right-0 bottom-0"
                />
              </div>
            </div>
            <Image
              src={slide.imageMobile}
              alt={slide.title}
              width={470}
              height={314}
              sizes="(max-width: 768px) 100vw, 235px"
              priority={index === 0}
              quality={80}
              className="absolute left-[100px] bottom-0 scale-[0.8] origin-bottom-left"
            />
          </m.div>
        );
      })}
    </div>
  );
};

export default HeroSlider;
