import OrderModal from "@/components/landing-page/packages/order-modal";
import Container from "@/components/ui/container";
import Image from "next/image";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

export default function Packages() {
  const t = useTranslations("MultiPagePage.Packages");

  const packages = [
    {
      title: t("listOne.title"),
      subtitleOne: t("listOne.subtitleOne"),
      priceKr: "37.500kr",
      priceEur: "(5000€)",
      listOne: [
        t("listOne.listOne.itemOne"),
        t("listOne.listOne.itemTwo"),
        t("listOne.listOne.itemThree"),
        t("listOne.listOne.itemFour"),
        t("listOne.listOne.itemFive"),
        t("listOne.listOne.itemSix"),
        t("listOne.listOne.itemSeven"),
        t("listOne.listOne.itemEight"),
      ],
      subtitleTwo: t("listOne.subtitleTwo"),
      listTwo: [
        t("listOne.listTwo.itemOne"),
        t("listOne.listTwo.itemTwo"),
        t("listOne.listTwo.itemThree"),
        t("listOne.listTwo.itemFour"),
      ],
    },
    {
      title: t("listTwo.title"),
      subtitleOne: t("listTwo.subtitleOne"),
      priceKr: "60.000kr",
      priceEur: "(8000€)",
      listOne: [
        t("listTwo.listOne.itemOne"),
        t("listTwo.listOne.itemTwo"),
        t("listTwo.listOne.itemThree"),
        t("listTwo.listOne.itemFour"),
        t("listTwo.listOne.itemFive"),
        t("listTwo.listOne.itemSix"),
        t("listTwo.listOne.itemSeven"),
        t("listTwo.listOne.itemEight"),
        t("listTwo.listOne.itemNine"),
      ],
      subtitleTwo: t("listTwo.subtitleTwo"),
      listTwo: [
        t("listTwo.listTwo.itemOne"),
        t("listTwo.listTwo.itemTwo"),
        t("listTwo.listTwo.itemThree"),
        t("listTwo.listTwo.itemFour"),
        t("listTwo.listTwo.itemFive"),
      ],
    },
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
            className="max-w-[191px] md:max-w-[211px] font-montserrat text-[12px] lg:text-[14px] font-light leading-[120%] text-white text-right md:text-left"
          >
            {t("description")}
          </motion.p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row lg:gap-8">
          {packages.map((item, index) => (
            <div key={index} className="relative md:w-1/2">
              {index === 1 ? (
                <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden rounded-[12px] backdrop-blur-[32px] bg-black">
                  <div className="absolute top-[-110px] sm:top-[-450px] left-[-260px] sm:left-[-600px] w-[907px] sm:w-[1907px] h-[907px] sm:h-[1907px] mix-blend-hard-light">
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
                      className="sm:block hidden object-cover"
                    />
                  </div>
                </div>
              ) : null}
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[12px] px-5 py-6 lg:px-8 lg:py-10 bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]">
                <div className="relative">
                  <h3 className="mb-3 lg:mb-4 font-manrope text-[16px] lg:text-[24px] leading-[120%] text-white uppercase font-light">
                    {item.title}
                  </h3>
                  <p className="">
                    <span className="font-manrope text-[36px] lg:text-[60px] leading-[120%] text-white uppercase font-light">
                      {item.priceKr}
                    </span>{" "}
                    <span className="font-manrope text-[36px] lg:text-[60px] leading-[120%] text-[#818181] uppercase font-light">
                      {item.priceEur}
                    </span>
                  </p>
                  <p className="mb-6 lg:mb-8 font-montserrat text-[10px] lg:text-[14px] font-light leading-[120%] text-[#818181]">
                    {t("pdv")}
                  </p>
                  <div className="mb-6 lg:mb-8 p-4 lg:p-5 bg-white/3 backdrop-blur-[10px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.32)] rounded-[12px]">
                    <h4 className="mb-4 font-manrope text-[16px] lg:text-[24px] leading-[120%] text-white uppercase font-light">
                      {item.subtitleOne}
                    </h4>
                    <ul className="flex flex-col gap-3 lg:gap-3.5 mb-6 lg:mb-8">
                      {item.listOne.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 font-montserrat text-[10px] lg:text-[14px] font-light leading-[120%] text-white"
                        >
                          <div className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 shrink-0 bg-white rounded-full" />
                          <p className="font-montserrat text-[12px] lg:text-[14px] font-light leading-[120%] text-white">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <h4 className="mb-4 font-manrope text-[16px] lg:text-[24px] leading-[120%] text-white uppercase font-light">
                      {item.subtitleTwo}
                    </h4>
                    <ul className="flex flex-col gap-3 lg:gap-3.5 mb-6 lg:mb-8">
                      {item.listTwo.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 font-montserrat text-[10px] lg:text-[14px] font-light leading-[120%] text-white"
                        >
                          <div className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 shrink-0 bg-white rounded-full" />
                          <p className="font-montserrat text-[12px] lg:text-[14px] font-light leading-[120%] text-white">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative z-20">
                  <OrderModal buttonText={t("button")} />
                  <p className="max-w-[200px] lg:max-w-full mx-auto mt-3 lg:mt-4 font-montserrat text-[8px] lg:text-[10px] font-light leading-[120%] text-white text-center">
                    {t("price")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
