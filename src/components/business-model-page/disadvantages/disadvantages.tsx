import { useTranslations } from "next-intl";
import Container from "@/components/ui/container";

export default function Disadvantages() {
  const t = useTranslations("BusinessModelPage.Disadvantages");

  return (
    <section className="pb-[148px] lg:pb-[175px]">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row-reverse md:justify-between md:items-end">
          <h2 className="font-manrope text-[36px] lg:text-[64px] leading-[120%] text-white font-light uppercase md:text-right">
            {t.rich("title", {
              gray: (chunks) => (
                <span className="text-[#818181]">{chunks}</span>
              ),
            })}
          </h2>
          <p className="md:max-w-[266px] md:mb-5 font-montserrat text-[14px] leading-[120%] text-white font-light">
            {t("descriptionOne")}
          </p>
        </div>
      </Container>
    </section>
  );
}
