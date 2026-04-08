import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";

export default function Steps() {
  const t = useTranslations("BusinessModelPage.Steps");
  return (
    <section className="pb-[148px] lg:pb-[192px]">
      <Container>
        <h2 className="font-manrope text-[36px] lg:text-[64px] leading-[120%] text-white font-light uppercase">
          {t("title")}
        </h2>
      </Container>
    </section>
  );
}
