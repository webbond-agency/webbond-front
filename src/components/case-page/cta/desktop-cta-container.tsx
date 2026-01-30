import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CtaActions } from "./cta-action";
import * as motion from "motion/react-client";

const DesktopCtaContainer = async () => {
  const t = await getTranslations("CasePage.Cta");

  return (
    <div className="hidden md:block relative px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -10 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute max-w-none top-[-9%] left-[-663px] -translate-y-1/2 origin-top-left pointer-events-none select-none mix-blend-hard-light -z-10"
      >
        <Image
          src="/case-page-decor.webp"
          alt="case-page-decor"
          width={1159}
          height={1155}
          sizes="(max-width: 1280px) 33vw, 1159px"
          quality={80}
          className="pointer-events-none mix-blend-hard-light select-none"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
        className="will-change-opacity"
      >
        <Image
          src="/case-page-shadow-desktop.webp"
          alt="case-page-shadow-desktop"
          width={938}
          height={912}
          sizes="33vw"
          quality={80}
          className="absolute bottom-[-50px] right-[-384px] max-w-none pointer-events-none -z-30 blur-md select-none"
        />
      </motion.div>
      <div className="flex flex-col max-w-[841px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-manrope text-[48px] xl:text-[64px] font-light uppercase text-white text-center leading-[120%] mb-[60px] will-change-transform transform-gpu"
        >
          {t.rich("title", {
            gray: (chunks) => <span className="text-[#999]">{chunks}</span>,
          })}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-between items-center will-change-opacity"
        >
          <div className="relative h-[88px] flex justify-between items-center">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-0 left-0 w-[2px] h-[88px] origin-bottom"
            >
              <Image
                src="/hero-mobile-description-vetical-lie.png"
                alt="hero-mobile-description-vetical-lie"
                width={2}
                height={81}
                className="w-full h-full"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pl-[20px] max-w-[350px] font-montserrat font-light text-[20px] text-white leading-[120%] will-change-transform transform-gpu"
            >
              {t("description")}
            </motion.p>
          </div>
          <div className="flex items-center justify-center rounded-[37px] w-[121px] py-[9px] px-[14px] backdrop-blur-md bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] safari-blur-fix">
            <Image
              src="/mobile-title-banner.png"
              alt="mobile-title-banner badge"
              width={93}
              height={50}
              quality={80}
            />
          </div>
          <CtaActions
            width={236}
            height={52}
            buttonText={t("button")}
            className="text-[14px] text-center font-montserrat font-light text-black"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default DesktopCtaContainer;
