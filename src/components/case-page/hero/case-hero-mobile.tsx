import Image from "next/image";
import * as motion from "motion/react-client";

import { CaseWithLanguage } from "@/types/case";
import { urlForImage } from "@/lib/sanityClient";

const CaseHeroMobile = ({ currentCase }: { currentCase: CaseWithLanguage }) => {
  const { title, hero, homepageImage } = currentCase;

  const imageSource = hero?.image?.asset
    ? hero.image
    : homepageImage?.asset
      ? homepageImage
      : null;

  const imageUrl = imageSource
    ? urlForImage(imageSource)
        .width(1200) // .height(1242)
        .quality(90)
        .auto("format")
        .url()
    : "/placeholder-case.webp";

  const imageAlt = hero.image?.alt || homepageImage?.alt || title;

  return (
    <div className="md:hidden pb-25 relative">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-x-0 h-[414px] top-[-60px] sm:top-[-80px] will-change-[opacity,transform] w-full mx-auto max-w-[560px] lg:max-w-[680px] xl:max-w-[728px] rounded-b-[14px] overflow-hidden"
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={360}
          height={414}
          sizes="(max-width: 640px) 100vw, 560px"
          priority
          className="w-full h-full min-h-[414px] object-cover"
        />
      </motion.div>
      <div className="px-5 sm:px-10 pt-[394px]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col relative gap-[18px] max-w-[320px] lg:max-w-[320px] xl:max-w-[327px] z-10">
            <h1 className=" font-manrope text-[36px] leading-[120%] text-white uppercase font-light">
              {title}
            </h1>
            <p className="text-[10px] leading-[120%] font-light font-montserrat text-left text-[#bdbdbd]">
              {hero.description}
            </p>
          </div>
          {hero.tags && Array.isArray(hero.tags) && hero.tags.length > 0 && (
            <ul className="relative z-10 mt-auto flex gap-1.5 flex-wrap max-w-[360px] sm:max-w-[460px] lg:max-w-[380px] xl:max-w-[404px]">
              {hero.tags.map((tag, index) => {
                const tagText =
                  typeof tag === "string"
                    ? tag
                    : (tag as { text?: string })?.text || "";
                if (!tagText) return null;
                return (
                  <li
                    className="font-montserrat font-light text-[10px] lg:text-[14px] text-white leading-[120%] px-[15px] lg:px-[17px] py-[10px] lg:py-3 rounded-[21px] backdrop-blur-xl bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] flex justify-between items-center safari-blur-fix"
                    key={index}
                  >
                    {tagText}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 20 }}
          whileInView={{ opacity: 1, x: 0, rotate: 12 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
          className="-z-10 absolute w-[893px] top-[-141px] sm:top-[-161px] left-[50%] translate-x-[-210px] pointer-events-none select-none will-change-[opacity,transform]"
        >
          <Image
            src="/case-hero-decor.webp"
            alt="case-page-hero-decor"
            width={893}
            height={911}
            sizes="(max-width: 1280px) 100vw, 893px"
            // quality={80}
            className="pointer-events-none contrast-125 saturate-150 select-none transparent"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CaseHeroMobile;
