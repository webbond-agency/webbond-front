import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("BusinessModelPage.Hero");

  return (
    <section className="pt-[64px] lg:pt-[102px] pb-[148px] lg:pb-[210px]">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
          {" "}
          <h1 className="md:max-w-[640px] lg:max-w-[1044px] mb-2.5 lg:mb-[15px] font-manrope text-[40px] lg:text-[64px] leading-[120%] text-white uppercase font-light">
            {t("title")}
          </h1>
        </div>
      </Container>
    </section>
  );
}
