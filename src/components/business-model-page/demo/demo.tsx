import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";
import * as m from "motion/react-client";
import Image from "next/image";
import GooeyWhiteLink from "@/components/ui/gooey-white-link";

export default function Demo() {
  const t = useTranslations("BusinessModelPage.Demo");
  const listItems = t.raw("listItems") as string[];

  return (
    <section className="pb-[148px] lg:pb-[238px]">
      <Container>
        <div className="flex flex-col md:flex-row-reverse gap-6 lg:gap-8 mb-6 lg:mb-8">
          <div className="relative flex flex-col justify-between md:w-[calc(50%-12px)] lg:w-[calc(50%-16px)]">
            <div className="absolute -z-10 top-[-97px] md:top-[-62px] lg:top-[-55px] left-[-60px] md:left-[-240px] lg:left-[-350px] w-[402px] h-[338px] lg:w-[710px] lg:h-[698px]">
              <Image
                src="/business-model-page-demo-decor-mob.webp"
                alt="Demo"
                fill
                className="lg:hidden object-cover"
              />
              <Image
                src="/business-model-page-demo-decor.webp"
                alt="Demo"
                fill
                className="hidden lg:block object-cover"
              />
            </div>
            <m.h2
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-[220px] md:max-w-none xl:max-w-[342px] lg:ml-auto mb-6 md:mb-4 lg:mb-12 font-manrope text-[36px] lg:text-[42px] xl:text-[64px] leading-[120%] text-white font-light uppercase md:text-right"
            >
              {t.rich("title", {
                gray: (chunks) => (
                  <span className="text-[#818181]">{chunks}</span>
                ),
              })}
            </m.h2>
            <ul className="flex flex-col gap-3 md:gap-2.5 lg:gap-3 rounded-[14px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] bg-white/3 backdrop-blur-[24px] p-4 md:p-3 lg:p-5">
              {listItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-5 px-4 py-3 lg:px-5 lg:py-5 rounded-full bg-black"
                >
                  <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-white" />
                  <span className="font-montserrat text-[12px] lg:text-[14px] font-light leading-[120%] text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative md:w-[calc(50%-12px)] lg:w-[calc(50%-16px)] rounded-[11px] overflow-hidden">
            <Image
              src="/business-model-page-demo-image.webp"
              alt="Demo"
              width={320}
              height={238}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="hidden md:flex items-center justify-center w-[67px] md:w-[121px] rounded-full py-[5px] px-[8px] backdrop-blur-sm bg-white/3 shadow-[inset_2px_-1px_5px_-1px_rgba(255,255,255,0.12)] safari-blur-fix">
            <Image
              src="/mobile-title-banner.png"
              alt="mobile-title-banner badge"
              width={103}
              height={56}
              className="w-full h-auto"
            />
          </div>
          <div
            className={`hidden sm:flex flex-1 h-px from-[#FFFFFF] to-[#0A0704] bg-linear-to-r opacity-32`}
          ></div>
          <GooeyWhiteLink
            text={t("button")}
            href={"/"}
            linkType="external"
            className="text-center w-full md:w-[277px] text-[14px] font-montserrat font-light text-black"
            height={52}
          />
        </div>
      </Container>
    </section>
  );
}
