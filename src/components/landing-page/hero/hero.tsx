import Container from "@/components/ui/container";
import Image from "next/image";
import { useTranslations } from "next-intl";
import * as m from "motion/react-client";
import HeroModal from "@/components/about-page/hero/hero-modal";

export default function Hero() {
  const t = useTranslations("LandingPage.Hero");

  return (
    <section className="relative pt-18 sm:pt-[52px] md:pt-[50px] pb-30 lg:pb-[105px]">
      <div className="hidden lg:block absolute top-[-960px] left-[-800px] xl:top-[-1060px] w-[1192px] ">
        <Image
          width={1192}
          height={1205}
          src="/case-hero-shadow.webp"
          alt="landing-hero-shadow"
          sizes="(max-width: 1280px) 33vw, 1192px"
          priority
          fetchPriority="high"
          className="select-none pointer-events-none"
        />
      </div>
      <div className="lg:hidden absolute top-[-280px] left-[-849px] w-[1128px]">
        <Image
          width={1128}
          height={1131}
          src="/landing-hero-shadow-mobile.webp"
          alt="landing-hero-shadow"
          sizes="(max-width: 1280px) 33vw, 1128px"
          priority
          fetchPriority="high"
          className="select-none pointer-events-none"
        />
      </div>

      <Container className="relative">
        <m.div
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
          className="absolute -z-10 top-[-418px] right-[-1090px] md:top-[-645px] lg:top-[-555px] md:right-[-435px] lg:right-[-335px] xl:right-[-248px] w-[1632px] md:w-[1454px] aspect-square mix-blend-hard-light"
        >
          <Image
            width={1632}
            height={1632}
            src="/landing-hero-decor.webp"
            alt="landing-hero-decor"
            sizes="1632px"
            priority
            fetchPriority="high"
            className="select-none pointer-events-none w-[1632px] md:w-[1454px] h-auto"
          />
        </m.div>

        <p className="mb-3 font-manrope text-[14px] lg:text-[16px] leading-[120%] text-white uppercase font-light">
          {t("description")}
        </p>
        <h1 className="md:max-w-[440px] lg:max-w-[660px] mb-2.5 lg:mb-3 font-manrope text-[40px] lg:text-[64px] leading-[120%] text-white uppercase font-light">
          {t("title")}
        </h1>
        <div className="flex items-center justify-center w-[67px] lg:w-[121px] mb-4 lg:-mb-4 rounded-full py-[5px] px-[8px] backdrop-blur-sm bg-white/3 shadow-[inset_2px_-1px_5px_-1px_rgba(255,255,255,0.12)] safari-blur-fix">
          <Image
            src="/mobile-title-banner.png"
            alt="mobile-title-banner badge"
            width={103}
            height={56}
            priority
            fetchPriority="high"
            className="w-full h-auto"
          />
        </div>
        <div className="flex items-center gap-4 ml-auto w-fit mb-5 lg:mb-12 f">
          <div className="rounded-full bg-white w-5 h-5 shrink-0" />
          <h2 className="max-w-[144px] md:max-w-full font-manrope text-[14px] lg:text-[16px] leading-[120%] text-white uppercase font-light">
            {t("subtitle")}
          </h2>
        </div>

        {/* List for mobile */}
        <m.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.6 },
            },
          }}
          className="md:hidden flex flex-col gap-4 w-full relative z-30 mb-[28px]"
        >
          <m.li
            variants={{
              hidden: { opacity: 0, x: -15 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex items-center w-full h-[109px] px-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden"
          >
            <p className="w-full max-w-[183px] sm:max-w-full text-white wrap-break-word">
              <span className="block font-manrope text-[16px] font-light uppercase leading-[120%] mb-3">
                {t("listTitleOne")}
              </span>
              <span className="block font-montserrat text-[10px] font-light leading-[120%] text-white">
                {t("listDescriptionOne")}
              </span>
            </p>
            <div className="absolute top-[-15px] right-[17px] font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none z-30 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent">
              1
            </div>
          </m.li>
          <m.li
            variants={{
              hidden: { opacity: 0, x: 15 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex items-center justify-end w-full h-[109px] px-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden"
          >
            <p className="w-full max-w-[191px] sm:max-w-fit text-white wrap-break-word">
              <span className="block font-manrope text-[16px] font-light uppercase leading-[120%] mb-3">
                {t("listTitleTwo")}
              </span>
              <span className="block font-montserrat text-[10px] font-light leading-[120%] text-white">
                {t("listDescriptionTwo")}
              </span>
            </p>
            <div className="absolute top-[-25px] left-0 font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none z-0 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent">
              2
            </div>
          </m.li>
          <m.li
            variants={{
              hidden: { opacity: 0, x: -15 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex items-center w-full h-[109px] px-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden"
          >
            <p className="w-full max-w-[210px] sm:max-w-full text-white wrap-break-word">
              <span className="block font-manrope text-[16px] font-light uppercase leading-[120%] mb-3">
                {t("listTitleThree")}
              </span>
              <span className="block font-montserrat text-[10px] font-light leading-[120%] text-white">
                {t("listDescriptionThree")}
              </span>
            </p>
            <div className="absolute top-[-20px] right-0 font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none z-0 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent">
              3
            </div>
          </m.li>
        </m.ul>

        {/* List for desktop */}
        <m.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.8 },
            },
          }}
          className="hidden md:flex flex-wrap md:flex-nowrap justify-end gap-[12px] xl:gap-[20px] relative z-30 md:mb-[68px]"
        >
          <li className="relative md:w-1/3 md:h-[170px] p-4 xl:p-5 rounded-[12px] backdrop-blur-sm bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden safari-blur-fix will-change-transform transform-gpu">
            <m.p
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <span className="block mb-[12px] lg:mb-[20px] font-manrope font-light text-[16px] lg:text-[24px] text-white leading-[120%] uppercase">
                {t("listTitleOne")}
              </span>
              <span className="block max-w-[200px] xl:max-w-[285px] font-montserrat text-[10px] lg:text-[14px] leading-[120%]">
                {t("listDescriptionOne")}
              </span>
            </m.p>
            <m.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                show: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-[-35px] lg:bottom-[-45px] right-[15px] lg:right-[25px] font-montserrat font-semibold text-[100px] md:text-[120px] lg:text-[145px] leading-[120%] pointer-events-none select-none z-30 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent"
            >
              1
            </m.div>
          </li>
          <li className="flex items-end relative md:w-1/3 md:h-[170px] p-4 xl:p-5 rounded-[12px] backdrop-blur-sm bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden safari-blur-fix will-change-transform transform-gpu">
            <m.p
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <span className="block max-w-[200px] mb-[12px] lg:mb-[20px] font-manrope font-light text-[16px] lg:text-[24px] text-white leading-[120%] uppercase">
                {t("listTitleTwo")}
              </span>
              <span className="block max-w-[213px] xl:max-w-[285px] font-montserrat text-[10px] lg:text-[14px] leading-[120%]">
                {t("listDescriptionTwo")}
              </span>
            </m.p>
            <m.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: -20 },
                show: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-[-50px] lg:top-[-65px] right-[15px] lg:right-[25px] font-montserrat font-semibold text-[100px] md:text-[120px] lg:text-[145px] leading-[120%] pointer-events-none select-none z-0 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent"
            >
              2
            </m.div>
          </li>
          <li className="relative md:w-1/3 md:h-[170px] p-4 xl:p-5 rounded-[12px] backdrop-blur-sm bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden safari-blur-fix will-change-transform transform-gpu">
            <m.p
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <span className="block mb-[12px] lg:mb-[20px] font-manrope font-light text-[16px] lg:text-[24px] text-white leading-[120%] uppercase">
                {t("listTitleThree")}
              </span>
              <span className="block max-w-[193px] xl:max-w-[237px] font-montserrat text-[10px] lg:text-[14px] leading-[120%]">
                {t("listDescriptionThree")}
              </span>
            </m.p>
            <m.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                show: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-[-35px] lg:bottom-[-50px] right-[10px] lg:right-[15px] font-montserrat font-semibold text-[100px] md:text-[120px] lg:text-[145px] leading-[120%] pointer-events-none select-none z-0 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent"
            >
              3
            </m.div>
          </li>
        </m.ul>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`flex items-center will-change-opacity transform-gpu`}
        >
          <HeroModal buttonText={t("button")} />
          <div
            className={`hidden sm:flex flex-1 h-px from-[#FFFFFF] to-[#0A0704] bg-linear-to-r opacity-32`}
          ></div>
        </m.div>
      </Container>
    </section>
  );
}
