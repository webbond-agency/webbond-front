'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { servicesData } from './services-data';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import MarqueeText from '../ui/marquee-text';

const ServicesSlider = () => {
  const t = useTranslations('Services');
  return (
    <section className="mt-[-97px] mb-[36px]">
      <Carousel>
        <CarouselContent>
          {servicesData.map((service) => (
            <CarouselItem key={service.id} className="basis-full sm:basis-1/2">
              <div className="relative pt-[6px] pr-[6px] pb-[14px] pl-[16px] flex gap-3 backdrop-blur-sm bg-white/3 rounded-[13px] shadow-[inset_2px_-1px_6px_-1px_rgba(255,255,255,0.12)] overflow-hidden safari-blur-fix will-change-transform transform-gpu">
                <div className="mt-[10px]">
                  <MarqueeText
                    text={t(`items.${service.id}.title`)}
                    className="font-manrope font-light text-[20px] leading-[120%] text-white uppercase mb-[12px] w-[122px]"
                  />
                  <p className="font-montserrat font-light text-[8px] leading-[120%] text-[#bebebe] max-w-[122px] mb-[15px]">
                    {t(`items.${service.id}.description`)}
                  </p>
                  <MarqueeText
                    text={t(`items.${service.id}.price`)}
                    className="font-montserrat font-light text-[9px] text-white uppercase mb-[23px] w-[122px]"
                  />
                  <button className="group relative z-10 w-[127px] h-[34px] active:scale-95 transition-transform">
                    <Image
                      src="/btn-test.png"
                      alt="services-slider-button"
                      width={127}
                      height={34}
                      className="w-full h-full relative z-0"
                    />
                    <div className="absolute inset-0 z-10 flex items-center">
                      {/* Спейсер слева для центрирования относительно тела кнопки (не считая кружка) */}
                      <span className="flex-1 text-center font-montserrat text-[12px] font-light text-white leading-none">
                        {t('seeMore')}
                      </span>
                      {/* Область для иконки справа (34px - это высота/диаметр кружка) */}
                      <div className="w-[34px] flex shrink-0 items-center justify-center">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 21 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.267909 16.9106C-0.0493966 17.1768 -0.0907846 17.6499 0.175467 17.9672C0.441718 18.2845 0.914785 18.3259 1.23209 18.0596L0.75 17.4851L0.267909 16.9106ZM20.7401 1.40374C20.7762 0.991106 20.4709 0.627332 20.0583 0.59123L13.334 0.0029296C12.9213 -0.0331722 12.5576 0.272071 12.5215 0.684708C12.4854 1.09735 12.7906 1.46112 13.2032 1.49722L19.1804 2.02016L18.6575 7.99732C18.6214 8.40996 18.9266 8.77373 19.3393 8.80984C19.7519 8.84594 20.1157 8.54069 20.1518 8.12806L20.7401 1.40374ZM0.75 17.4851L1.23209 18.0596L20.475 1.91291L19.9929 1.33838L19.5108 0.763843L0.267909 16.9106L0.75 17.4851Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="relative rounded-[6px] w-full h-[165px] bg-[linear-gradient(168deg,#e63b44_0%,#1b0000_100%)]">
                  <div className="relative overflow-hidden w-full h-full rounded-[6px]">
                    <Image
                      src={service.imageDesktop}
                      alt="services-slider-image"
                      width={370}
                      height={489}
                      sizes="(max-width: 768px) 100vw, 370px"
                      quality={80}
                      className="absolute max-w-none w-[370px] h-auto right-[-120px] bottom-[-63%]"
                    />
                  </div>
                </div>
                <Image
                  src={service.imageMobile}
                  alt="services-slider-image"
                  width={375}
                  height={241}
                  sizes="(max-width: 768px) 100vw, 380px"
                  quality={80}
                  className="absolute left-[13px] bottom-[-165px] max-w-none"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Custom Navigation Buttons */}
        <div className="flex justify-center lg:justify-end gap-[12px] mt-[18px]">
          <CarouselPrevious
            iconSize={32}
            className="static translate-y-0 w-[44px] h-[44px] rounded-full border-2 border-white text-white transition-colors cursor-pointer"
          ></CarouselPrevious>
          <CarouselNext
            iconSize={32}
            className="static translate-y-0 w-[44px] h-[44px] rounded-full bg-white transition-colors cursor-pointer"
          ></CarouselNext>
        </div>
      </Carousel>
    </section>
  );
};

export default ServicesSlider;
