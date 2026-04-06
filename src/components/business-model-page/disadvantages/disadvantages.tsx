import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "@/components/ui/container";
import * as m from "motion/react-client";

type DisadvantageItem = { text: string; image: string };

export default function Disadvantages() {
  const t = useTranslations("BusinessModelPage.Disadvantages");
  const items = t.raw("items") as DisadvantageItem[];

  return (
    <section className="pb-[148px] lg:pb-[175px]">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row-reverse md:justify-between md:items-end mb-6 lg:mb-12">
          <m.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-manrope text-[36px] lg:text-[64px] leading-[120%] text-white font-light uppercase md:text-right"
          >
            {t.rich("title", {
              gray: (chunks) => (
                <span className="text-[#818181]">{chunks}</span>
              ),
            })}
          </m.h2>

          <m.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="md:max-w-[266px] md:mb-5 font-montserrat text-[14px] leading-[120%] text-white font-light"
          >
            {t("descriptionOne")}
          </m.p>
        </div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-5 sm:flex-row mb-6 lg:mb-7"
        >
          <div className="flex flex-col gap-5 sm:w-[65.4%]">
            {" "}
            <div className="relative flex items-center gap-5 px-4 py-6 lg:px-8 lg:py-[42px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[32px] bg-[linear-gradient(96.69deg,_#0A0705_15.54%,_#450C0F_46.69%,_#0A0705_77.83%)] font-montserrat text-[20px] lg:text-[32px] font-light leading-[120%] uppercase text-white rounded-[12px] overflow-hidden">
              <div className="absolute top-3 top-[-22px] right-[-76px] lg:right-[-100px] w-[192px] lg:w-[378px] aspect-[192/134] h-auto">
                <Image
                  src={items[0].image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <p className="max-w-[236px] lg:max-w-[400px] xl:max-w-full">
                {items[0].text}
              </p>
            </div>
            <div className="relative flex items-center gap-5 px-4 py-6 lg:px-8 lg:py-[42px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[32px] bg-[linear-gradient(96.69deg,_#0A0705_15.54%,_#450C0F_46.69%,_#0A0705_77.83%)] font-montserrat text-[20px] lg:text-[32px] font-light leading-[120%] uppercase text-white rounded-[12px] overflow-hidden">
              <div className="absolute -top-6 lg:top-[-100px] right-[-60px] lg:right-[-102px] w-[222px] lg:w-[417px] aspect-[222/180] h-auto">
                <Image
                  src={items[1].image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <p className="max-w-[236px] lg:max-w-[400px] xl:max-w-full">
                {items[1].text}
              </p>
            </div>
          </div>
          <div className="sm:w-[33%] relative flex items-center sm:items-start gap-5 px-4 py-6 lg:px-8 lg:py-[42px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[32px] bg-[linear-gradient(96.69deg,_#0A0705_15.54%,_#450C0F_46.69%,_#0A0705_77.83%)] sm:bg-[linear-gradient(134.02deg,_#0A0705_8.07%,_#450C0F_44.64%,_#0A0705_81.22%)] font-montserrat text-[20px] lg:text-[32px] font-light leading-[120%] uppercase text-white rounded-[12px] overflow-hidden">
            <div className="absolute -top-2 sm:top-auto sm:bottom-[-45px] lg:bottom-[-100px] right-[-86px] lg:right-[-162px] w-[212px] lg:w-[430px] aspect-[212/148] h-auto">
              <Image
                src={items[2].image}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <p className="max-w-[236px] lg:max-w-[400px] xl:max-w-full">
              {items[2].text}
            </p>
          </div>
        </m.div>

        <div className="flex gap-6 lg:gap-9 items-center">
          <m.div
            initial={{ opacity: 0, x: -130 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className={`relative flex flex-1 h-px from-[#FFFFFF] to-[#0A0704] bg-linear-to-l`}
          >
            <div className="absolute -top-2 -right-2 rounded-full size-4 bg-[#565656]" />
          </m.div>
          <m.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-[243px] lg:max-w-[439px] font-montserrat text-[14px] leading-[120%] text-white font-light"
          >
            {t("descriptionTwo")}
          </m.p>
        </div>
      </Container>
    </section>
  );
}
