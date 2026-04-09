import SiteTypeSection from "@/components/shared/site-type-section/site-type-section";
import { useTranslations } from "next-intl";

export default function Webshop() {
  const t = useTranslations("WebSitesPage.Webshop");

  const list = [t("listOne"), t("listTwo"), t("listThree"), t("listFour")];

  return (
    <SiteTypeSection
      title={t.rich("title", {
        gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
      })}
      description={t("description")}
      imageUrl={"/websites-webshop.webp"}
      imageAlt="Landing page"
      list={list}
      buttonText={t("button")}
      href="/websites/webshop"
      subtitle={t("subtitle")}
      variant="left"
    />
  );
}
