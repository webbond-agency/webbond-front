import Container from "@/components/ui/container";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function Steps() {
  const t = useTranslations("BusinessModelPage.Steps");
  const locale = useLocale();

  return (
    <section className="pb-[218px] lg:pb-[384px]">
      <Container>
        <h2 className="mb-6 lg:mb-16 font-manrope text-[36px] lg:text-[64px] leading-[120%] text-white font-light uppercase">
          {t.rich("title", {
            gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
          })}
        </h2>
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
      </Container>
    </section>
  );
}
