import SiteTypeSection from "@/components/ui/site-type-section";
import { useTranslations } from "next-intl";

export default function Landing() {
  const t = useTranslations("WebSitesPage.Multipage");

  const list = [
    t("listOne"),
    t("listTwo"),
    t("listThree"),
    t("listFour"),
    t("listFive"),
  ];

  return (
    <SiteTypeSection
      title={t.rich("title", {
        gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
      })}
      description={t("description")}
      imageUrl={"/websites-multipage.webp"}
      imageAlt="Landing page"
      list={list}
      buttonText={t("button")}
      subtitle={t("subtitle")}
      variant="right"
    />
  );
}
