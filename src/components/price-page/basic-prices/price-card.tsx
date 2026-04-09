import GooeyWhiteLink from "@/components/ui/gooey-white-link";
import Image from "next/image";

import PriceCardHeadingAnimated from "./price-card-heading-animated";

export type PriceCardProps = {
  name: string;
  priceFrom: string;
  priceAmount: string;
  description: string;
  button: string;
  href: string;
  premiumDecor: boolean;
  fullWidth?: boolean;
  /** У сітці (grid) — на всю ширину комірки; у flex-рядку — md:w-1/2 */
  gridCell?: boolean;
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
  gridCell,
}: PriceCardProps) {
  const widthClass =
    fullWidth || gridCell ? "relative w-full" : "relative md:w-1/2";

  return (
    <div className={widthClass}>
      {premiumDecor ? (
        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden rounded-[12px] bg-black backdrop-blur-[32px]">
          <div className="absolute -z-10 top-0 right-0 w-[213px] h-[154px] lg:w-[590px] lg:h-[337px]">
            <Image
              src="/price-page-card-shadow-mob.webp"
              alt="price-page-card-shadow"
              className="object-cover lg:hidden"
              fill
            />
            <Image
              src="/price-page-card-shadow-desk.webp"
              alt="price-page-card-shadow"
              fill
              className="object-cover hidden lg:block"
            />
          </div>
          <div className="absolute top-[-70px] left-[-260px] h-[907px] w-[907px] mix-blend-hard-light sm:top-[-450px] sm:left-[-600px] sm:h-[1907px] sm:w-[1907px]">
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
        <PriceCardHeadingAnimated
          name={name}
          priceFrom={priceFrom}
          priceAmount={priceAmount}
          fullWidth={fullWidth}
        />
        <div
          className={`mt-6 px-4 lg:mt-8 lg:px-5 py-4 lg:py-8  rounded-[12px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.32)] backdrop-blur-[10px]`}
        >
          <p
            className={`font-manrope text-[16px] font-light uppercase leading-[120%] text-white lg:text-[24px] ${
              fullWidth ? "md:text-center" : ""
            }`}
          >
            {description}
          </p>
        </div>
        <div
          className={`relative z-20 mt-6 lg:mt-8 ${
            fullWidth
              ? "md:flex md:justify-end w-full md:w-[312px] lg:w-[400px] xl:w-[526px] ml-auto"
              : ""
          }`}
        >
          <GooeyWhiteLink
            href={href}
            text={button}
            className="w-full font-montserrat text-[14px] font-light text-black"
            height={52}
            centerText
          />
        </div>
      </div>
    </div>
  );
}
