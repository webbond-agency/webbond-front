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

const TeamSlider = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-4 pl-[20px] sm:pl-[40px]">
        {TEAM_DATA.map((teamItem) => (
          <CarouselItem
            key={teamItem.id}
            className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="relative w-full max-w-[389px] h-[398px] p-[16px] rounded-[12px] flex flex-col backdrop-blur-md bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] will-change-transform transform-gpu">
              <Image
                src={teamItem.image}
                alt={teamItem.name}
                fill
                quality={80}
                className="object-contain rounded-[13px]"
              />
              <div className="mt-auto flex flex-col gap-[6px] relative z-10">
                <div className="px-[24px] w-fit flex items-center justify-center h-[47px] rounded-[32px] border border-white backdrop-blur-sm  bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] font-manrope font-light text-[14px] leading-[120%] text-white uppercase safari-blur-fix">
                  {teamItem.position}
                </div>
                <div className="px-[24px] w-fit flex items-center justify-center h-[47px] rounded-[32px] bg-white font-manrope font-light text-[14px] leading-[120%] text-black uppercase">
                  {teamItem.name} {teamItem.lastName}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Custom Navigation Buttons */}
      <div className="flex justify-center lg:justify-end gap-[12px] mt-[24px] mb-[40px]">
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
  );
};

export default TeamSlider;
