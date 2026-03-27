import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Container from "@/components/ui/container";
import HeroGlobe from "@/components/websites-page/hero/hero-globe";

export default async function Hero() {
  const t = await getTranslations("BlogPage.Hero");

  return (
    <section className="relative pt-[72px] lg:pt-[84px] pb-[55px] lg:pb-20">
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
        <div className="relative flex gap-5 md:max-w-[300px] lg:max-w-[397px] overflow-visible">
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
      </Container>
      <HeroGlobe />
    </section>
  );
}
