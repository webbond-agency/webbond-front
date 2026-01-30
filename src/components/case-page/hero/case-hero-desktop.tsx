import Image from "next/image";

import { CaseWithLanguage } from "@/types/case";
import { urlForImage } from "@/lib/sanityClient";
import * as motion from "motion/react-client";

const CaseHeroDesktop = ({
  currentCase,
}: {
  currentCase: CaseWithLanguage;
}) => {
  const { title, hero, homepageImage } = currentCase;

  const imageSource = hero?.image?.asset
    ? hero.image
    : homepageImage?.asset
      ? homepageImage
      : null;

  const imageUrl = imageSource
    ? urlForImage(imageSource)
        .width(1456)
        // .height(1186)
        .quality(90)
        .auto("format")
        .url()
    : "/placeholder-case.webp";

  const imageAlt = hero.image?.alt || homepageImage?.alt || title;

  return (
    <div className="hidden md:block pt-[45px] xl:pt-[87px] pb-[93px] lg:pb-[150px] relative px-[20px] sm:px-[32px]">
      <div className="flex flex-col gap-[110px] relative z-10">
        <div className="flex flex-col relative gap-[18px] max-w-[320px] lg:max-w-[320px] xl:max-w-[327px] z-10">
          <h1 className=" font-manrope text-[36px] lg:text-[40px] leading-[120%] text-white uppercase font-light">
            {title}
          </h1>

          <p className="text-[10px] leading-[120%] font-light font-montserrat text-left text-[#bdbdbd]">
            {hero.description}
          </p>
        </div>
        {hero.tags && Array.isArray(hero.tags) && hero.tags.length > 0 && (
          <ul className="relative z-10 mt-auto flex gap-1.5 flex-wrap max-w-[320px] lg:max-w-[380px] xl:max-w-[404px]   max-w-[404px]">
            {hero.tags.map((tag, index) => {
              const tagText =
                typeof tag === "string"
                  ? tag
                  : (tag as { text?: string })?.text || "";
              if (!tagText) return null;
              return (
                <li
                  className="font-montserrat font-light text-[9px] lg:text-[14px] text-white leading-[120%] px-[15px] lg:px-[24px] py-[10px] lg:py-[15px] rounded-[32px] backdrop-blur-xl bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] flex justify-between items-center safari-blur-fix"
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
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-[-70px] translate-y-0.5 left-[425px] lg:left-[552px] will-change-[opacity,transform] w-full max-w-[568px] lg:max-w-[728px] xl:h-[539px]"
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={728}
          height={593}
          sizes="(max-width: 768px) 100vw, 728px"
          priority
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute top-[-960px] left-[-990px] w-[1192px] ">
        <Image
          width={1192}
          height={1205}
          src="/case-hero-shadow.webp"
          alt="case-hero-shadow"
          sizes="(max-width: 1280px) 33vw, 1192px"
          className="select-none pointer-events-none"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 10 }}
        whileInView={{ opacity: 1, x: 0, rotate: -5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
        className="-z-10 absolute w-[1100px] lg:w-[1400px] top-[-371px] left-[60px] lg:top-[-468px] lg:left-[92px] pointer-events-none select-none will-change-[opacity,transform] "
      >
        <Image
          src="/case-hero-decor.webp"
          alt="case-page-hero-decor"
          width={1400}
          height={1404}
          sizes="(max-width: 1280px) 33vw, 1400px"
          quality={80}
          className="pointer-events-none contrast-150 saturate-150 select-none"
        />
      </motion.div>
    </div>
  );
};

export default CaseHeroDesktop;
