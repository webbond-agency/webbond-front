import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";
import WarrantyList from "./warranty-list";

export default function Warranty() {
  const t = useTranslations("BusinessModelPage.Warranty");
  return (
    <section className="pb-[148px] lg:pb-[218px]">
      <Container>
        <h2 className="mb-6 lg:mb-16 font-manrope text-[36px] lg:text-[76px] leading-[120%] text-white font-light uppercase">
          {t.rich("title", {
            gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
          })}
        </h2>
        <WarrantyList />
      </Container>
    </section>
  );
}
