import OrderModal from "@/components/webshop-page/packages/order-modal";
import Container from "@/components/ui/container";
import Image from "next/image";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

export default function Packages() {
  const t = useTranslations("WebshopPage.Packages");

  const included = [
    t("included.itemOne"),
    t("included.itemTwo"),
    t("included.itemThree"),
    t("included.itemFour"),
    t("included.itemFive"),
    t("included.itemSix"),
    t("included.itemSeven"),
    t("included.itemEight"),
    t("included.itemNine"),
    t("included.itemTen"),
    t("included.itemEleven"),
    t("included.itemTwelve"),
  ];

  const benefits = [
    t("benefits.itemOne"),
    t("benefits.itemTwo"),
    t("benefits.itemThree"),
    t("benefits.itemFour"),
    t("benefits.itemFive"),
  ];

  return (
    <section className="pb-[148px]">
      <Container className="relative">
        <div className="lg:hidden absolute -z-10 top-[-433px] left-[-313px] w-[580px] h-[611px]">
          <Image
            src="/landing-page-packages-shadow-top-mob.webp"
            alt="packages-bg"
            fill
            className="object-cover"
          />
        </div>
        <div className="lg:hidden absolute -z-10 top-[562px] right-[-368px] w-[580px] h-[611px]">
          <Image
            src="/landing-page-packages-shadow-bottom-mob.webp"
            alt="packages-bg"
            fill
            className="object-cover"
          />
        </div>
        <div className="hidden lg:block absolute -z-10 top-[-815px] right-[-529px] w-[1305px] h-[1376px]">
          <Image
            src="/landing-page-packages-shadow-desk.webp"
            alt="packages-bg"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 md:flex-row-reverse justify-between items-end mb-10 lg:mb-[75px]">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="md:max-w-[400px] lg:max-w-[864px] font-manrope text-[36px] lg:text-[64px] leading-[120%] text-white uppercase font-light text-right"
          >
            {t.rich("title", {
              gray: (chunks) => (
                <span className="text-[#818181]">{chunks}</span>
              ),
            })}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-[191px] md:max-w-[280px] font-montserrat text-[12px] lg:text-[14px] font-light leading-[120%] text-white text-right md:text-left"
          >
            {t("description")}
          </motion.p>
        </div>

        <div className="relative w-full mx-auto">
          <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden rounded-[12px] backdrop-blur-[32px] bg-black">
            <div className="absolute top-7 sm:top-[-440px] left-[-260px] sm:left-[-390px] w-[907px] sm:w-[1907px] h-[907px] sm:h-[1907px] mix-blend-hard-light">
              <Image
                src="/landing-page-packages-decor-mob.webp"
                alt="packages-bg"
                fill
                className="sm:hidden object-cover"
              />
              <Image
                src="/landing-page-packages-decor-desk.webp"
                alt="packages-bg"
                fill
                className="hidden sm:block object-cover"
              />
            </div>
          </div>
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[12px] px-5 py-6 lg:px-8 lg:py-10 bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
            <div className="relative">
              <h3 className="mb-3 lg:mb-4 font-manrope text-[16px] lg:text-[24px] leading-[120%] text-white md:text-center uppercase font-light">
                {t("cardTitle")}
              </h3>
              <p className="md:text-center">
                <span className="font-manrope text-[36px] lg:text-[60px] leading-[120%] text-white uppercase font-light">
                  75.000kr
                </span>{" "}
                <span className="font-manrope text-[36px] lg:text-[60px] leading-[120%] text-[#818181] uppercase font-light">
                  (10.000€)
                </span>
              </p>
              <p className="mb-6 lg:mb-8 font-montserrat text-[10px] lg:text-[14px] font-light leading-[120%] text-[#818181] md:text-center">
                {t("pdv")}
              </p>
              <div className="mb-6 lg:mb-8 p-4 lg:p-5 bg-white/3 backdrop-blur-[10px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.32)] rounded-[12px]">
                <h4 className="mb-4 font-manrope text-[16px] lg:text-[24px] leading-[120%] text-white uppercase font-light">
                  {t("subtitleIncluded")}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-3.5 mb-6 lg:mb-8">
                  {included.map((text, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 font-montserrat text-[10px] lg:text-[14px] font-light leading-[120%] text-white"
                    >
                      <div className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 shrink-0 mt-0.5 bg-white rounded-full" />
                      <p className="font-montserrat text-[12px] lg:text-[14px] font-light leading-[120%] text-white">
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
                <h4 className="mb-4 font-manrope text-[16px] lg:text-[24px] leading-[120%] text-white uppercase font-light">
                  {t("subtitleBenefits")}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-3.5 mb-6 lg:mb-8">
                  {benefits.map((text, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 font-montserrat text-[10px] lg:text-[14px] font-light leading-[120%] text-white"
                    >
                      <div className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 shrink-0 mt-0.5 bg-white rounded-full" />
                      <p className="font-montserrat text-[12px] lg:text-[14px] font-light leading-[120%] text-white">
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative z-20">
              <div className="flex flex-row-reverse items-center">
                <OrderModal buttonText={t("button")} />
                <div
                  className={`hidden md:flex flex-1 h-px from-[#FFFFFF] to-[#0A0704] bg-linear-to-l`}
                ></div>
              </div>
              <p className="w-fit max-w-[200px] lg:max-w-full mx-auto md:ml-auto md:mr-16 lg:mr-23 mt-3 lg:mt-4 font-montserrat text-[8px] lg:text-[10px] font-light leading-[120%] text-white text-center">
                {t("price")}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
