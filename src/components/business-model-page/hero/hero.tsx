import Container from "@/components/ui/container";
import GooeyWhiteLink from "@/components/ui/gooey-white-link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import * as m from "motion/react-client";

export default function Hero() {
  const t = useTranslations("BusinessModelPage.Hero");
  const listItems = t.raw("listItems") as string[];

  return (
    <section className="relative pt-[64px] lg:pt-[102px] pb-[148px] lg:pb-[210px]">
      <div className="absolute top-[-960px] left-[-800px] xl:top-[-1060px] w-[1192px]">
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
        <m.div
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="absolute -z-20 top-[-70px] right-[-392px] md:top-[-408px] md:right-[-658px] w-[748px] md:w-[1496px] aspect-square mix-blend-hard-light"
        >
          <Image
            src="/business-model-page-hero-decor-top.webp"
            alt="business-model-hero-decor"
            width={1496}
            height={1496}
            className="select-none pointer-events-none"
          />
        </m.div>
        <m.div
          initial={{ opacity: 0, x: -100, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
          className="absolute -z-10 bottom-[-123px] left-[-552px] md:bottom-[-973px] md:left-[-1294px] w-[1141px] md:w-[2281px] aspect-square mix-blend-hard-light"
        >
          <Image
            src="/business-model-page-hero-decor-bottom.webp"
            alt="business-model-hero-decor"
            width={2281}
            height={2281}
            className="select-none pointer-events-none "
          />
        </m.div>
        <div className="mb-6 lg:mb-5 flex flex-col gap-6 md:flex-row md:justify-between">
          <h1 className="max-w-[320px] md:max-w-[440px] lg:max-w-[540px] xl:max-w-[788px] font-manrope text-[40px] lg:text-[64px] leading-[120%] text-white uppercase font-light">
            {t("title")}
          </h1>
          <div className="flex items-end relative aspect-[304/154] sm:aspect-none sm:h-[220px] md:h-auto md:w-[304px] p-4 lg:p-8 rounded-[14px] overflow-hidden bg-black">
            <Image
              src="/business-model-page-hero-image-one.webp"
              alt="business-model-hero-image"
              fill
              className="z-10 object-cover scale-145 lg:scale-115 object-[20px_-11px] lg:object-[-10px_-1px] mix-blend-hard-light"
            />
            <Image
              src="/business-model-page-hero-quote.svg"
              alt="business-model-hero-quote"
              width={80}
              height={54}
              className="z-20 absolute top-4 right-4 lg:top-8 lg:right-8"
            />
            <p className="relative z-20 max-w-[240px] font-manrope text-[16px] leading-[120%] text-black font-light uppercase">
              {t("descriptionOne")}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="md:w-[38%] lg:w-[46%] xl:w-[31.4%] p-4 lg:py-[29px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] bg-white/3 backdrop-blur-[24px] rounded-[14px]">
            <h2 className="mb-5 font-manrope text-[16px] lg:text-[20px] font-light uppercase leading-[120%] text-white">
              {t("subtitle")}
            </h2>
            <ul className="flex flex-col gap-3">
              {listItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-5 rounded-full bg-black px-5 py-4 md:px-4 md:py-3"
                >
                  <span className="mt-1 h-3.5 w-3.5 shrink-0 rounded-full bg-white" />
                  <span className="font-montserrat text-[12px] font-light leading-[120%] text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-5 md:flex-col  md:w-[19.2%]">
            <div className="relative w-1/2 md:w-full aspect-[150/80] md:flex-1 bg-white rounded-[14px] h-auto overflow-hidden">
              <Image
                src="/business-model-page-hero-image-two.webp"
                alt="business-model-hero-image"
                width={120}
                height={120}
                className="z-10 absolute top-[calc(50%-56px)] lg:top-[calc(50%-89px)] xl:top-[calc(50%-114px)] left-[calc(50%-60px)] lg:left-[calc(50%-91px)] xl:left-[calc(50%-114px)] w-30 lg:w-[228px] h-auto object-cover"
              />
            </div>
            <div className="flex items-center w-1/2 md:w-full p-4 lg:p-5 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] bg-white/3 backdrop-blur-[24px] rounded-[14px]">
              <p className="font-montserrat text-[10px] lg:text-[12px] leading-[120%] text-white">
                {t("descriptionTwo")}
              </p>
            </div>
          </div>

          <div className="relative h-[210px] md:h-auto md:w-[39.4%] lg:w-[31.4%] xl:w-[46%] rounded-[14px] overflow-hidden">
            <Image
              src="/business-model-page-hero-image-three.webp"
              alt="business-model-hero-image"
              fill
              className="object-cover"
            />
            <GooeyWhiteLink
              text={t("button")}
              href={"/"}
              linkType="external"
              className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 text-center w-[232px] text-[14px] font-montserrat font-light text-black"
              height={52}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
