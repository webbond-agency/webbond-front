'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { REVIEWS_DATA } from './reviews-data';

const ReviewsSlider = () => {
  return (
    <Carousel>
      <CarouselContent className="-ml-4">
        {REVIEWS_DATA.map((reviewItem) => (
          <CarouselItem
            key={reviewItem.id}
            className="pl-4 md:pl-[20px] basis-full lg:basis-1/2"
          >
            <div className="relative w-full h-[160px] md:h-[300px] p-[20px] md:p-[34px] rounded-[6px] md:rounded-[12px] flex flex-col backdrop-blur-lg bg-white/3 shadow-[inset_2px_-1px_5px_-1px_rgba(255,255,255,0.12)] safari-blur-fix will-change-transform transform-gpu">
              <div className="flex gap-[28px] md:gap-[54px]">
                <Image
                  src={reviewItem.image}
                  alt={reviewItem.name}
                  width={58}
                  height={58}
                  quality={75}
                  className="object-cover rounded-full w-[58px] h-[58px] md:w-[112px] md:h-[112px]"
                />
                <div className="flex flex-col">
                  <div className="text-[20px] md:text-[36px] text-white font-manrope font-light leading-[120%] uppercase mb-[4px] md:mb-[12px]">
                    {reviewItem.name}
                  </div>
                  <div className="text-[12px] md:text-[24px] text-white font-manrope font-light leading-[120%] uppercase mb-[14px] md:mb-[33px]">
                    {reviewItem.position}
                  </div>
                  <div className="max-w-[194px] md:max-w-[362px] font-montserrat font-light text-[8px] md:text-[14px] leading-[120%] text-white">
                    {reviewItem.review}
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Custom Navigation Buttons */}
      <div className="flex justify-center gap-[12px] md:gap-[24px] mt-[24px] md:mt-[48px]">
        <CarouselPrevious
          iconSize={32}
          className="static translate-y-0 w-[44px] h-[44px] rounded-full border-2 bg-transparent border-white text-white transition-colors cursor-pointer"
        ></CarouselPrevious>
        <CarouselNext
          iconSize={32}
          className="static translate-y-0 w-[44px] h-[44px] rounded-full bg-white transition-colors cursor-pointer"
        ></CarouselNext>
      </div>
    </Carousel>
  );
};

export default ReviewsSlider;
