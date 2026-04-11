import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Container from "@/components/ui/container";
import HeroGlobe from "@/components/websites-page/hero/hero-globe";
import HeroModal from "@/components/about-page/hero/hero-modal";

export default async function Hero() {
  const t = await getTranslations("PricePage.Hero");

  return (
    <section className="relative pt-[72px] lg:pt-[84px] pb-25 lg:pb-[115px]">
      <div className="absolute top-[-960px] left-[-800px] xl:top-[-1060px] w-[1192px] ">
        <Image
          width={1192}
          height={1205}
          src="/case-hero-shadow.webp"
          alt="case-hero-shadow"
          sizes="(max-width: 1280px) 33vw, 1192px"
          className="select-none pointer-events-none"
        />
      </div>

      <Container className="relative">
        <div className="absolute -z-10 top-[-125px] left-[-822px] lg:top-[-115px] lg:left-[-633px] w-[1238px] aspect-square mix-blend-hard-light">
          <Image
            width={1238}
            height={1238}
            src="/webpages-hero-decor.webp"
            alt="webpages-hero-decor"
            sizes="1238px"
            className="select-none pointer-events-none"
          />
        </div>
        <p className="mb-3 font-manrope text-[14px] lg:text-[16px] leading-[120%] text-white uppercase font-light">
          {t("subtitle")}
        </p>
        <h1 className="md:max-w-[640px] lg:max-w-[1044px] mb-2.5 lg:mb-[15px] font-manrope text-[40px] lg:text-[64px] leading-[120%] text-white uppercase font-light">
          {t("title")}
        </h1>
        <div className="flex items-center justify-center w-[67px] lg:w-[121px] mb-6 lg:mb-10 rounded-full py-[5px] px-[8px] backdrop-blur-sm bg-white/3 shadow-[inset_2px_-1px_5px_-1px_rgba(255,255,255,0.12)] safari-blur-fix">
          <Image
            src="/mobile-title-banner.png"
            alt="mobile-title-banner badge"
            width={103}
            height={56}
            className="w-full h-auto"
          />
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-end mt-6 md:mt-2">
          <div>
            <div className="mb-6 md:mb-16 relative flex gap-5 md:max-w-[300px] lg:max-w-[397px] overflow-visible">
              <Image
                src="/about-page-hero-radial-shadow.webp"
                alt="about-hero-decor"
                width={486}
                height={123}
                className="absolute top-[-17px] left-0 -z-10 w-[486px] h-[123px]"
              />
              <div className="w-[2px] h-auto bg-[linear-gradient(0deg,_#ffffff_0%,_#0a0704_100%)] opacity-32 rounded-full" />
              <p className="font-montserrat text-[14px] lg:text-[18px] font-light text-white leading-[120%]">
                {t.rich("description", {
                  gray: (chunks) => (
                    <span className="text-[#818181]">{chunks}</span>
                  ),
                })}
              </p>
            </div>
            <HeroModal buttonText={t("button")} />
          </div>
          <div className="md:max-w-[335px]">
            <div className="flex items-center md:justify-end gap-4 mb-5 md:mb-6">
              <div className="rounded-full bg-white w-5 h-5 shrink-0" />
              <h2 className="font-manrope text-[14px] lg:text-[16px] leading-[120%] text-white uppercase font-light">
                {t("list.title")}
              </h2>
            </div>
            <ul className="flex flex-col gap-3 md:gap-4">
              <li className="font-montserrat text-[12px] lg:text-[14px] leading-[120%] text-white shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[32px] bg-white/3 rounded-[12px] p-4">
                {t("list.listItemOne")}
              </li>
              <li className="font-montserrat text-[12px] lg:text-[14px] leading-[120%] text-white shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[32px] bg-white/3 rounded-[12px] p-4">
                {t("list.listItemTwo")}
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <HeroGlobe />
    </section>
  );
}
