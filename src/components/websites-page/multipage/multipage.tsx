import SiteTypeSection from "@/components/shared/site-type-section/site-type-section";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Multipage() {
  const t = useTranslations("WebSitesPage.Multipage");

  const list = [
    t("listOne"),
    t("listTwo"),
    t("listThree"),
    t("listFour"),
    t("listFive"),
  ];

  return (
    <div className="relative">
      <div className="absolute -z-10 top-[20px] left-[-195px] lg:top-[190px] lg:right-[-480px] w-[1136px] ">
        <Image
          width={1136}
          height={1053}
          src="/websites-multipage-shadow.webp"
          alt="websites-multipage-shadow"
          sizes="1136px"
          className="select-none pointer-events-none"
        />
      </div>
      <SiteTypeSection
        title={t.rich("title", {
          gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
        })}
        description={t("description")}
        imageUrl={"/websites-multipage.webp"}
        imageAlt="Landing page"
        list={list}
        buttonText={t("button")}
        href="/websites/multipage"
        subtitle={t("subtitle")}
        variant="right"
      />
    </div>
  );
}
