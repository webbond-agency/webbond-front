import Image from "next/image";
import type { CSSProperties } from "react";

type PackageProps = {
  title?: string;
  list?: string[];
  image?: string;
  isImageRight?: boolean;
  imageHeight?: number;
};

export default function Package({
  title,
  list = [],
  image,
  isImageRight = true,
  imageHeight = 180,
}: PackageProps) {
  return (
    <div className="rounded-[14px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] bg-white/3 backdrop-blur-[24px] p-4 lg:p-5">
      <div
        className={`flex flex-col gap-6 md:justify-between md:gap-8 ${
          isImageRight ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="flex-1">
          {title ? (
            <h3 className="mb-5 lg:mb-6 font-manrope text-[16px] lg:text-[32px] leading-[120%] font-light uppercase text-white">
              {title}
            </h3>
          ) : null}

          <ul className="flex flex-col gap-3">
            {list.map((item) => (
              <li
                key={item}
                className="flex items-center gap-5 px-4 py-3 md:px-5 md:py-4 rounded-full bg-black"
              >
                <span className="mt-1 h-3.5 w-3.5 shrink-0 rounded-full bg-white" />
                <span className="font-montserrat text-[12px] lg:text-[14px] font-light leading-[120%] text-white">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {image ? (
          <div
            className="relative w-full md:w-[calc(50%-12px)] h-[var(--mobile-image-height)] md:h-auto shrink-0 rounded-[20px] overflow-hidden"
            style={
              { "--mobile-image-height": `${imageHeight}px` } as CSSProperties
            }
          >
            <Image
              src={image}
              alt={title ?? "Package image"}
              fill
              className=" object-cover rounded-[20px]"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
