import Container from "@/components/ui/container";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import * as m from "motion/react-client";

export default function Steps() {
  const t = useTranslations("BusinessModelPage.Steps");
  const locale = useLocale();

  return (
    <section className="pb-[218px] lg:pb-[384px]">
      <Container className="relative">
        <m.div
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
          className="absolute -z-10 top-[104px] sm:top-[-250px] right-[-604px] lg:left-[-1204px] lg:-scale-x-100 lg:top-[-665px] w-[957px] h-[957px] lg:w-[1914px] lg:h-[1914px] mix-blend-hard-light"
        >
          <Image
            src="/business-model-page-steps-decor.webp"
            alt="steps-decor"
            fill
            className="object-cover"
          />
        </m.div>
        <m.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6 lg:mb-16 font-manrope text-[36px] lg:text-[64px] leading-[120%] text-white font-light uppercase"
        >
          {t.rich("title", {
            gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
          })}
        </m.h2>
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {" "}
          <Image
            src={
              locale === "da"
                ? "/business-model-page-steps-image-mob-da.webp"
                : "/business-model-page-steps-image-mob-en.webp"
            }
            alt="steps-image"
            width={320}
            height={645}
            className="sm:hidden w-full h-auto"
          />
          <Image
            src={
              locale === "da"
                ? "/business-model-page-steps-image-desk-da.webp"
                : "/business-model-page-steps-image-desk-en.webp"
            }
            alt="steps-image"
            width={1000}
            height={1000}
            className="hidden sm:block w-full h-auto"
          />
        </m.div>
      </Container>
    </section>
  );
}
