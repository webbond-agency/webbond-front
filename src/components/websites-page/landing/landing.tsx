import SiteTypeSection from "@/components/shared/site-type-section/site-type-section";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Landing() {
  const t = useTranslations("WebSitesPage.Landing");

  const list = [t("listOne"), t("listTwo"), t("listThree"), t("listFour")];

  return (
    <div className="relative">
      <div className="absolute -z-10 top-[260px] right-[-775px] lg:top-[190px] lg:right-[-480px] w-[1136px] ">
        <Image
          width={1136}
          height={1053}
          src="/websites-landing-shadow.webp"
          alt="websites-landing-shadow"
          sizes="1136px"
          className="select-none pointer-events-none"
        />
      </div>
      <SiteTypeSection
        title={t.rich("title", {
          gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
        })}
        description={t("description")}
        imageUrl={"/websites-landing.webp"}
        imageAlt="Landing page"
        list={list}
        buttonText={t("button")}
        href="/websites/landing"
        subtitle={t("subtitle")}
        variant="left"
      />
    </div>
  );
}
