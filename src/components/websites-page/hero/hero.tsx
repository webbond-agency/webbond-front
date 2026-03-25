import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "@/components/ui/container";
import HeroGlobe from "@/components/websites-page/hero/hero-globe";
import HeroModal from "@/components/about-page/hero/hero-modal";

export default function Hero() {
  const t = useTranslations("WebSitesPage.Hero");

  return (
    <section className="relative pt-[97px] lg:pt-[166px] pb-[129px] lg:pb-[227px]">
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
        <div className="absolute -z-10 top-[-125px] left-[-812px] lg:top-[-155px] lg:left-[-633px] w-[1238px] aspect-square mix-blend-hard-light">
          <Image
            width={1238}
            height={1238}
            src="/webpages-hero-decor.webp"
            alt="webpages-hero-decor"
            sizes="1238px"
            className="select-none pointer-events-none"
          />
        </div>
        <h1 className="md:max-w-[440px] lg:max-w-[660px] mb-2.5 lg:mb-[15px] font-manrope text-[40px] lg:text-[64px] leading-[120%] text-white uppercase font-light">
          {t("title")}
        </h1>
        <div className="flex items-center justify-center w-[67px] lg:w-[121px] mb-6 lg:mb-20 rounded-full py-[5px] px-[8px] backdrop-blur-sm bg-white/3 shadow-[inset_2px_-1px_5px_-1px_rgba(255,255,255,0.12)] safari-blur-fix">
          <Image
            src="/mobile-title-banner.png"
            alt="mobile-title-banner badge"
            width={103}
            height={56}
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-6 md:flex-row-reverse md:justify-between md:items-end">
          {" "}
          <div className="flex gap-5 md:max-w-[300px] lg:max-w-[523px]">
            <div className="w-[2px] h-auto bg-[linear-gradient(0deg,_#ffffff_0%,_#0a0704_100%)] opacity-32 rounded-full" />
            <p className="font-montserrat text-[14px] lg:text-[18px] font-light text-white leading-[120%]">
              {t("description")}
            </p>
          </div>
          <HeroModal buttonText={t("button")} />
        </div>
      </Container>
      <HeroGlobe />
    </section>
  );
}
