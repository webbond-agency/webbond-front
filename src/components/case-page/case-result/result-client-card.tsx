import { urlForImage } from "@/lib/sanityClient";
import { CaseWithLanguage } from "@/types/case";
import Image from "next/image";

const ResultClientCard = ({
  result,
}: {
  result: CaseWithLanguage["testimonial"];
}) => {
  const imageSource = result?.clientPhoto?.asset
    ? result?.clientPhoto?.asset
    : null;

  const imageUrl = imageSource
    ? urlForImage(imageSource).width(224).auto("format").url()
    : "/placeholder-case.webp";
  const imageAlt = result?.clientPhoto?.alt || "Client photo";

  return (
    <div className="relative w-full min-h-[120px] h-full p-5 md:p-9 rounded-[6px] md:rounded-[12px] flex flex-col backdrop-blur-lg bg-white/3 shadow-[inset_2px_-1px_5px_-1px_rgba(255,255,255,0.12)] safari-blur-fix will-change-transform transform-gpu">
      <div className="flex gap-[28px] md:gap-[54px]">
        <div className="relative overflow-hidden rounded-full w-[58px] h-[58px] md:w-[112px] md:h-[112px] shrink-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-[20px] md:text-[36px] text-white font-manrope font-light leading-[120%] uppercase mb-[4px] md:mb-[12px]">
            {result?.clientName}
          </div>
          <div className="text-[12px] md:text-[24px] text-white font-manrope font-light leading-[120%] uppercase mb-[14px] md:mb-[33px]">
            {result?.clientPosition}
          </div>
          <div className="md:max-w-[362px] font-montserrat font-light text-[8px] md:text-[14px] leading-[120%] text-white">
            {result?.testimonialText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultClientCard;
