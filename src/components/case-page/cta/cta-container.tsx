import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CtaActions } from "./cta-action";
import * as motion from "motion/react-client";

const CtaContainer = async () => {
  const t = await getTranslations("CasePage.Cta");

  return (
    <div className="md:hidden relative px-5 sm:px-8 lg:pt-[303px] lg:pb-[148px] ">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 0.9, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute max-w-none top-[-3%] opacity-40 right-[-752px] -translate-y-1/2 origin-top-left pointer-events-none select-none contrast-125 saturate-150 brightness-110 -z-10"
      >
        <Image
          src="/case-page-decor-mobile.webp"
          alt="case-page-decor-mobile"
          width={1257}
          height={1258}
          sizes="(max-width: 768px) 100vw, 1257px"
          quality={80}
          className="min-w-[1257px] min-h-[1258px] pointer-events-none select-none"
        />
      </motion.div>

      <div className="relative mb-8 ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[267px] sm:max-w-[360px] font-manrope text-[36px] sm:text-[48px] font-light uppercase text-white leading-[120%] will-change-transform"
        >
          {t.rich("title")}
        </motion.h2>
      </div>

      <div className="relative mb-[52px] ">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-[37px] w-[84px] py-[6px] px-[9px] backdrop-blur-[32px] bg-white/3 shadow-[inset:3px_-1px_9px_-1px_rgba(255,255,255,0.12)] safari-blur-fix"
        >
          <Image
            src="/mobile-title-banner.png"
            alt="mobile-title-banner badge"
            width={64}
            height={34}
            quality={80}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="ml-auto pr-[20px] max-w-[202px] sm:max-w-[300px]  md:max-w-[350px] font-montserrat font-light text-[14px] sm:text-[16px] text-white leading-[120%] will-change-transform"
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-0 right-0 w-[2px] h-[51px] origin-bottom"
        >
          <Image
            src="/hero-mobile-description-vetical-lie.png"
            alt="vertical line"
            width={2}
            height={51}
            className="w-full h-full"
          />
        </motion.div>
      </div>

      <CtaActions
        height={52}
        buttonText={t("button")}
        className="mx-auto max-w-[400px] text-center w-full text-[14px] font-montserrat font-light text-black"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1 }}
        className="will-change-opacity"
      >
        <Image
          src="/case-page-shadow-mobile.webp"
          alt="case-page-shadow-mobile.webp"
          width={696}
          height={826}
          quality={100}
          className="absolute w-[696px] h-[826px] top-[128px] left-[-467px] max-w-none pointer-events-none -z-20 blur-[120px] safari-blur-fix select-none"
        />
        <Image
          src="/case-page-black-shadow-mobile.webp"
          alt="case-page-black-shadow-mobile"
          width={370}
          height={290}
          quality={100}
          className="absolute w-[370px] h-[290px] top-[180px] left-[450px] max-w-none pointer-events-none -z-20 blur-md select-none"
        />
      </motion.div>
    </div>
  );
};

export default CtaContainer;
