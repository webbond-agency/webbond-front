import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
import Image from "next/image";

export default function Values() {
  const t = useTranslations("AboutPage.Values");
  const values = [
    { title: t("card1Title"), description: t("card1Description") },
    { title: t("card2Title"), description: t("card2Description") },
    { title: t("card3Title"), description: t("card3Description") },
    { title: t("card4Title"), description: t("card4Description") },
  ];

  return (
    <section className="pb-[148px] lg:pb-[192px]">
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.11 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
          className="absolute -z-10 top-[-290px] sm:top-[-450px] lg:top-[-438px] right-[-892px] lg:right-[-1071px] w-[1387px] lg:w-[1849px] h-[1387px] lg:h-[1849px] mix-blend-hard-light"
        >
          <Image
            src="/about-page-values-decor.webp"
            alt="about-page-values-decor"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="flex items-center justify-between gap-8 mb-8 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[36px] lg:text-[64px] font-manrope font-light uppercase leading-[120%] text-white"
          >
            {t("title")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center w-[121px] rounded-full py-[5px] px-[8px] backdrop-blur-sm bg-white/3 shadow-[inset_2px_-1px_5px_-1px_rgba(255,255,255,0.12)] safari-blur-fix"
          >
            <Image
              src="/mobile-title-banner.png"
              alt="mobile-title-banner badge"
              width={103}
              height={56}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
        <ul className="flex flex-col gap-3 lg:gap-5 sm:flex-row sm:flex-wrap">
          {values.map((item) => (
            <li
              key={item.title}
              className="sm:w-[calc(50%-6px)] lg:w-[calc(25%-15px)] odd:bg-[linear-gradient(96.69deg,_#0A0705_15.54%,_#450C0F_46.69%,_#0A0705_77.83%)] rounded-[14px] bg-white/3 p-5 lg:p-6 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[24px]"
            >
              <h3 className="mb-4 font-manrope text-[16px] font-light uppercase leading-[120%] text-white lg:text-[20px]">
                {item.title}
              </h3>
              <p className="font-montserrat text-[12px] font-light leading-[120%] text-white lg:text-[14px]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
