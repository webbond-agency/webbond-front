import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";

export default function BasicPrices() {
  const t = useTranslations("PricePage.BasicPrices");

  return (
    <section className="pb-[148px] lg:pb-[192px]">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
          <div className="md:max-w-[211px]">
            <p className="mb-4 lg:mb-8 font-montserrat font-light text-[14px] text-white leading-[120%]">
              {t("descriptionOne")}
            </p>
            <p className="font-montserrat font-light text-[14px] text-white leading-[120%]">
              {t("descriptionTwo")}
            </p>
          </div>
          <h2 className="max-w-[624px] font-manrope text-[36px] lg:text-[64px] font-light uppercase text-white leading-[120%] md:text-right">
            {t.rich("title", {
              gray: (chunks) => (
                <span className="text-[#818181]">{chunks}</span>
              ),
            })}
          </h2>
        </div>
      </Container>
    </section>
  );
}
