"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { CaseWithLanguage } from "@/types/case";
import { urlForImage } from "@/lib/sanityClient";

interface CasesSliderProps {
  cases: CaseWithLanguage[];
}

const CasesSlider = ({ cases }: CasesSliderProps) => {
  return (
    <Carousel>
      <CarouselContent>
        {cases.map((caseItem) => {
          const imageUrl = caseItem.homepageImage
            ? urlForImage(caseItem.homepageImage).width(860).height(747).url()
            : caseItem.hero.image
              ? urlForImage(caseItem.hero.image).width(860).height(747).url()
              : "/placeholder-case.webp";

          const imageAlt =
            caseItem.homepageImage?.alt ||
            caseItem.hero.image?.alt ||
            caseItem.title;

          return (
            <CarouselItem key={caseItem.id} className="basis-full sm:basis-1/2">
              <Link href={`/cases/${caseItem.slug}`}>
                <div className="relative w-full max-w-[430px] min-h-[387px] rounded-[13px] p-[15px] flex flex-col">
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    quality={80}
                    className="object-cover rounded-[13px]"
                    sizes="(max-width: 768px) 100vw, 430px"
                  />
                  <div className="absolute top-[15px] right-[15px] z-10 w-[52px] h-[52px] rounded-full flex items-center justify-center bg-white">
                    <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.267909 16.9106C-0.0493966 17.1768 -0.0907846 17.6499 0.175467 17.9672C0.441718 18.2845 0.914785 18.3259 1.23209 18.0596L0.75 17.4851L0.267909 16.9106ZM20.7401 1.40374C20.7762 0.991106 20.4709 0.627332 20.0583 0.59123L13.334 0.0029296C12.9213 -0.0331722 12.5576 0.272071 12.5215 0.684708C12.4854 1.09735 12.7906 1.46112 13.2032 1.49722L19.1804 2.02016L18.6575 7.99732C18.6214 8.40996 18.9266 8.77373 19.3393 8.80984C19.7519 8.84594 20.1157 8.54069 20.1518 8.12806L20.7401 1.40374ZM0.75 17.4851L1.23209 18.0596L20.475 1.91291L19.9929 1.33838L19.5108 0.763843L0.267909 16.9106L0.75 17.4851Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="relative z-10 font-manrope font-light text-[18px] leading-[120%] text-white uppercase mb-[12px] max-w-[125px]">
                    {caseItem.title}
                  </h2>
                  <p className="relative z-10 font-montserrat font-light text-[8px] leading-[120%] text-[#bdbdbd] max-w-[122px] line-clamp-3">
                    {caseItem.hero.description}
                  </p>
                  {caseItem.hero.tags &&
                    Array.isArray(caseItem.hero.tags) &&
                    caseItem.hero.tags.length > 0 && (
                      <ul className="relative z-10 mt-auto flex gap-1 flex-wrap">
                        {caseItem.hero.tags.map((tag, index) => {
                          const tagText =
                            typeof tag === "string"
                              ? tag
                              : (tag as { text?: string })?.text || "";
                          if (!tagText) return null;
                          return (
                            <li
                              className="font-montserrat font-light text-[10px] lg:text-[14px] text-white leading-[120%] px-[15px] lg:px-[17px] py-[10px] lg:py-[12px] rounded-[21px] backdrop-blur-xl bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] flex justify-between items-center safari-blur-fix"
                              key={index}
                            >
                              {tagText}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                </div>
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {/* Custom Navigation Buttons */}
      <div className="flex justify-center lg:justify-end gap-[12px] mt-[18px] mb-[38px]">
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

export default CasesSlider;
