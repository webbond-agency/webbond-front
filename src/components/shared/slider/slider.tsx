"use client";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { CaseWithLanguage } from "@/types/case";
import { urlForImage } from "@/lib/sanityClient";

interface CasesSliderProps {
  cases: CaseWithLanguage[];
}

const CasesSlider = ({ cases }: CasesSliderProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const normalizedCases =
    cases.length > 0 && cases.length < 3
      ? Array.from({ length: 3 }, (_, i) => cases[i % cases.length])
      : cases;

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        containScroll: "trimSnaps",
      }}
    >
      <div className="hidden sm:flex items-center justify-end gap-[24px] mb-[24px]">
        <CarouselPrevious
          iconSize={24}
          className="static translate-y-0 w-[36px] md:w-[44px] h-[36px] md:h-[44px] rounded-full border-2 border-white text-white transition-colors cursor-pointer"
        />
        <CarouselNext
          iconSize={24}
          className="static translate-y-0 w-[36px] md:w-[44px] h-[36px] md:h-[44px] rounded-full bg-white transition-colors cursor-pointer"
        />
      </div>
      <CarouselContent className="md:ml-0 md:gap-5">
        {normalizedCases.map((caseItem, idx) => {
          const imageUrl = caseItem.homepageImage
            ? urlForImage(caseItem.homepageImage).width(1000).height(1200).url()
            : caseItem.hero.image
              ? urlForImage(caseItem.hero.image).width(1000).height(1200).url()
              : "/placeholder-case.webp";

          const imageAlt =
            caseItem.homepageImage?.alt ||
            caseItem.hero.image?.alt ||
            caseItem.title;

          return (
            <CarouselItem
              key={`${caseItem.id}-${idx}`}
              className="basis-full max-w-[360px] sm:max-w-none sm:basis-1/2 md:basis-[290px] lg:basis-[380px] xl:basis-[495px] md:pl-0"
            >
              <Link href={`/cases/${caseItem.slug}`}>
                <div className="relative w-full md:w-[290px] lg:w-[380px] xl:w-[495px] min-h-[387px] md:min-h-[420px] xl:min-h-[600px] rounded-[20px] p-[16px] xl:p-[24px] flex flex-col group overflow-hidden will-change-transform transform-gpu">
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    quality={90}
                    sizes="(max-width: 1250px) 45vw, 500px"
                    className="object-cover rounded-[20px] transition-transform duration-500"
                  />
                  <div className="absolute top-[16px] xl:top-[24px] right-[16px] xl:right-[24px] z-10 w-[40px] md:w-[50px] xl:w-[60px] h-[40px] md:h-[50px] xl:h-[60px] rounded-full flex items-center justify-center bg-white transition-transform duration-300">
                    <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="scale-75 md:scale-90 xl:scale-100"
                    >
                      <path
                        d="M0.267909 16.9106C-0.0493966 17.1768 -0.0907846 17.6499 0.175467 17.9672C0.441718 18.2845 0.914785 18.3259 1.23209 18.0596L0.75 17.4851L0.267909 16.9106ZM20.7401 1.40374C20.7762 0.991106 20.4709 0.627332 20.0583 0.59123L13.334 0.0029296C12.9213 -0.0331722 12.5576 0.272071 12.5215 0.684708C12.4854 1.09735 12.7906 1.46112 13.2032 1.49722L19.1804 2.02016L18.6575 7.99732C18.6214 8.40996 18.9266 8.77373 19.3393 8.80984C19.7519 8.84594 20.1157 8.54069 20.1518 8.12806L20.7401 1.40374ZM0.75 17.4851L1.23209 18.0596L20.475 1.91291L19.9929 1.33838L19.5108 0.763843L0.267909 16.9106L0.75 17.4851Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="relative z-10 font-manrope font-light text-[20px] md:text-[24px] xl:text-[28px] leading-[120%] text-white uppercase mb-[12px] xl:mb-[18px] max-w-[191px]">
                    {caseItem.title}
                  </h2>
                  <p className="relative z-10 font-montserrat font-light text-[9px] md:text-[10px] leading-[120%] text-[#bdbdbd] max-w-[131px] xl:max-w-[191px] line-clamp-6">
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
                              className="font-montserrat font-light text-[10px] md:text-[12px] xl:text-[14px] text-white leading-[120%] px-[12px] md:px-[18px] xl:px-[24px] py-[8px] md:py-[12px] xl:py-[15px] rounded-[32px] backdrop-blur-xl bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] flex justify-between items-center safari-blur-fix"
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

      <div className="flex justify-center gap-[12px] mt-[18px] sm:hidden">
        <CarouselPrevious
          iconSize={24}
          className="static translate-y-0 w-[44px] h-[44px] rounded-full border-2 border-white text-white transition-colors cursor-pointer"
        />
        <CarouselNext
          iconSize={24}
          className="static translate-y-0 w-[44px] h-[44px] rounded-full bg-white transition-colors cursor-pointer"
        />
      </div>

      <div className="hidden sm:flex justify-center gap-[9px] mt-[44px]">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className="w-[23px] h-[23px] rounded-full border border-white flex items-center justify-center transition-all bg-transparent p-0 cursor-pointer active:scale-[0.9]"
            aria-label={`Go to slide ${index + 1}`}
            type="button"
          >
            {current === index + 1 && (
              <div className="w-[12px] h-[12px] bg-white rounded-full" />
            )}
          </button>
        ))}
      </div>
    </Carousel>
  );
};

export default CasesSlider;
