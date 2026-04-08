import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import HeroModal from "@/components/about-page/hero/hero-modal";

export default function CtaFirst() {
  const t = useTranslations("BusinessModelPage.CtaFirst");
  const listItems = t.raw("listItems") as string[];

  return (
    <section className="pb-[148px] lg:pb-[290px]">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center mb-8 lg:mb-16">
          <h2 className="max-w-[300px] sm:max-w-[400px] lg:max-w-[699px] font-manrope text-[36px] lg:text-[64px] leading-[120%] text-white font-light uppercase">
            {t("title")}
          </h2>
          <div className="flex md:flex-col gap-6 items-center justify-between">
            <div className="flex items-center justify-center w-[121px] rounded-full py-[5px] px-[8px] backdrop-blur-sm bg-white/3 shadow-[inset_2px_-1px_5px_-1px_rgba(255,255,255,0.12)] safari-blur-fix">
              <Image
                src="/mobile-title-banner.png"
                alt="mobile-title-banner badge"
                width={103}
                height={56}
                className="w-full h-auto"
              />
            </div>
            <div className="flex gap-5 max-w-[106px]">
              <div className="w-[2px] h-auto bg-[linear-gradient(0deg,_#ffffff_0%,_#0a0704_100%)] opacity-32 rounded-full" />
              <p className="font-montserrat text-[14px] font-light text-white leading-[120%]">
                {t("badge")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row-reverse md:justify-between md:items-center mb-4 lg:mb-8">
          <HeroModal buttonText={t("button")} />
          <h3 className="font-manrope text-[20px] lg:text-[24px] leading-[120%] text-white font-light uppercase">
            {t("subtitle")}
          </h3>
        </div>

        <ul className="flex flex-col md:flex-row gap-3 lg:gap-5">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="md:w-[calc(50%-6px)] lg:w-[calc(50%-10px)] px-5 py-5.5 lg:p-9 rounded-[12px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] bg-white/3 backdrop-blur-[24px] font-manrope text-[16px] lg:text-[20px] font-light text-white leading-[120%] bg-[linear-gradient(96.69deg,_#0A0705_15.54%,_#450C0F_46.69%,_#0A0705_77.83%)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
