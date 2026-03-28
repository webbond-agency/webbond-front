import GooeyWhiteLink from "@/components/ui/gooey-white-link";
import Image from "next/image";

import PriceLine from "./price-line";

export type PriceCardProps = {
  name: string;
  priceFrom: string;
  priceAmount: string;
  description: string;
  button: string;
  href: string;
  premiumDecor: boolean;
  fullWidth?: boolean;
};

export default function PriceCard({
  name,
  priceFrom,
  priceAmount,
  description,
  button,
  href,
  premiumDecor,
  fullWidth,
}: PriceCardProps) {
  return (
    <div className={fullWidth ? "relative w-full" : "relative md:w-1/2"}>
      {premiumDecor ? (
        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden rounded-[12px] bg-black backdrop-blur-[32px]">
          <div className="absolute top-[-110px] left-[-260px] h-[907px] w-[907px] mix-blend-hard-light sm:top-[-450px] sm:left-[-600px] sm:h-[1907px] sm:w-[1907px]">
            <Image
              src="/landing-page-packages-decor-mob.webp"
              alt=""
              fill
              className="object-cover sm:hidden"
            />
            <Image
              src="/landing-page-packages-decor-desk.webp"
              alt=""
              fill
              className="hidden object-cover sm:block"
            />
          </div>
        </div>
      ) : null}
      <div className="relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[12px] bg-white/3 px-5 py-6 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] lg:px-8 lg:py-10">
        <div className={fullWidth ? "md:text-center" : ""}>
          <h3
            className={`mb-3 font-manrope text-[16px] font-light uppercase leading-[120%] text-white lg:mb-4 lg:text-[24px] ${
              fullWidth ? "md:mx-auto md:max-w-4xl" : ""
            }`}
          >
            {name}
          </h3>
          <div className={fullWidth ? "md:flex md:justify-center" : ""}>
            <PriceLine from={priceFrom} amount={priceAmount} />
          </div>
        </div>
        <div
          className={`mt-6 p-4 lg:mt-8 lg:p-5 ${
            fullWidth ? "md:mx-auto md:max-w-4xl" : ""
          } rounded-[12px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.32)] backdrop-blur-[10px]`}
        >
          <p
            className={`font-montserrat text-[11px] font-light uppercase leading-[120%] text-white lg:text-[14px] ${
              fullWidth ? "md:text-center" : ""
            }`}
          >
            {description}
          </p>
        </div>
        <div
          className={`relative z-20 mt-6 lg:mt-8 ${
            fullWidth ? "md:flex md:justify-end" : ""
          }`}
        >
          <GooeyWhiteLink
            href={href}
            text={button}
            className="w-full font-montserrat text-[14px] font-light text-black md:max-w-md"
            height={52}
          />
        </div>
      </div>
    </div>
  );
}
