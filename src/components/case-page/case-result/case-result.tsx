import * as motion from "motion/react-client";

import { CaseWithLanguage } from "@/types/case";
import Image from "next/image";
import { urlForImage } from "@/lib/sanityClient";
import { getTranslations } from "next-intl/server";
import ResultClientCard from "./result-client-card";
import CustomPortableText from "./case-portable-text";

const CaseResult = async ({
  result,
}: {
  result: CaseWithLanguage["testimonial"];
}) => {
  const t = await getTranslations("CasePage.Result");

  const imageSourceDesktop = result?.imageDesktop?.asset
    ? result?.imageDesktop?.asset
    : result?.imageMobile?.asset
      ? result?.imageMobile?.asset
      : null;

  const imageSourceMobile = result?.imageMobile?.asset
    ? result?.imageMobile?.asset
    : result?.imageDesktop?.asset
      ? result?.imageDesktop?.asset
      : null;

  const imageUrlDesktop = imageSourceDesktop
    ? urlForImage(imageSourceDesktop)
        .width(1196)
        .height(382)
        .quality(90)
        .auto("format")
        .url()
    : "/placeholder-case.webp";

  const imageUrlMobile = imageSourceMobile
    ? urlForImage(imageSourceMobile)
        .width(1200)
        .height(450)
        .quality(90)
        .auto("format")
        .url()
    : "/placeholder-case.webp";

  const imageAltDesktop =
    result?.imageDesktop?.alt || result?.imageMobile?.alt || "Case image";
  const imageAltMobile =
    result?.imageMobile?.alt || result?.imageDesktop?.alt || "Case image";

  return (
    <div className="relative px-5 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-manrope text-[32px] xl:text-[40px] font-light uppercase text-white text-left leading-[120%] mb-[37px] md:mb-[58px] will-change-transform transform-gpu"
      >
        {t.rich("title")}
      </motion.h2>
      <div className="flex flex-col md:flex-row md:justify-between gap-5">
        <div className="flex flex-col gap-5 md:basis-1/2">
          <div className="relative flex justify-between items-center">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-0 left-0 w-px h-full origin-bottom"
              style={{
                backgroundImage: "linear-gradient(to top, white, #0A0704)",
                opacity: 0.32,
              }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CustomPortableText
                value={result?.description}
                paragraphClassName="pl-[20px] sm:max-w-[487px] font-montserrat font-light text-[14px] md:text-[18px] text-[#818181] leading-[120%] will-change-transform transform-gpu"
              />
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="sm:hidden will-change-[opacity,transform] w-full mx-auto h-30 relative rounded-[14px] overflow-hidden"
            >
              <Image
                src={imageUrlMobile}
                alt={imageAltMobile}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="hidden sm:block will-change-[opacity,transform] w-full mx-auto h-[191px] relative rounded-4xl overflow-hidden"
            >
              <Image
                src={imageUrlDesktop}
                alt={imageAltDesktop}
                fill
                sizes="(max-width: 1240px) 100vw, 598px"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="md:basis-1/2 basis-full "
        >
          <ResultClientCard result={result} />
        </motion.div>
      </div>
    </div>
  );
};

export default CaseResult;
