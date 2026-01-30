import * as motion from "motion/react-client";

import { CaseWithLanguage } from "@/types/case";
import Image from "next/image";
import { urlForImage } from "@/lib/sanityClient";
import GooeyWhiteLink from "@/components/ui/gooey-white-link";

const CasePreview = ({
  imageBlock,
}: {
  imageBlock: CaseWithLanguage["imageBlock"];
}) => {
  const imageSourceDesktop = imageBlock?.imageDesktop?.asset
    ? imageBlock?.imageDesktop?.asset
    : imageBlock?.imageMobile?.asset
      ? imageBlock?.imageMobile?.asset
      : null;

  const imageSourceMobile = imageBlock?.imageMobile?.asset
    ? imageBlock?.imageMobile?.asset
    : imageBlock?.imageDesktop?.asset
      ? imageBlock?.imageDesktop?.asset
      : null;

  const imageUrlDesktop = imageSourceDesktop
    ? urlForImage(imageSourceDesktop)
        .width(2432)
        .height(956)
        .quality(85)
        .auto("format")
        .url()
    : "/placeholder-case.webp";

  const imageUrlMobile = imageSourceMobile
    ? urlForImage(imageSourceMobile)
        .width(1200)
        // .height(1270)
        .quality(90)
        .auto("format")
        .url()
    : "/placeholder-case.webp";

  const imageAltDesktop =
    imageBlock?.imageDesktop?.alt ||
    imageBlock?.imageMobile?.alt ||
    "Case image";
  const imageAltMobile =
    imageBlock?.imageMobile?.alt ||
    imageBlock?.imageDesktop?.alt ||
    "Case image";

  return (
    <div className="relative px-5 sm:px-8">
      <>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="sm:hidden will-change-[opacity,transform] w-full max-w-[1340px] mx-auto h-[635px] relative rounded-4xl overflow-hidden mb-5"
        >
          <Image
            src={imageUrlMobile}
            alt={imageAltMobile}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
            // quality={80}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hidden sm:block will-change-[opacity,transform] w-full max-w-[1340px] mx-auto h-[478px] relative rounded-4xl overflow-hidden mb-6"
        >
          <Image
            src={imageUrlDesktop}
            alt={imageAltDesktop}
            fill
            sizes="(max-width: 1216px) 100vw, 1216px"
            className="object-cover"
          />
        </motion.div>
      </>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex items-center will-change-opacity transform-gpu"
      >
        <GooeyWhiteLink
          height={52}
          text={imageBlock?.button.text || "Open website"}
          href={imageBlock?.button.link || "/"}
          target="_blank"
          className="relative z-30 text-center w-full sm:max-w-[350px] lg:w-[236px] h-[48px] lg:h-[52px] text-[14px] font-montserrat font-light text-black"
        />

        <div className="hidden sm:flex flex-1 h-px bg-linear-to-r from-[#FFFFFF] to-[#0A0704]"></div>
      </motion.div>
    </div>
  );
};

export default CasePreview;
