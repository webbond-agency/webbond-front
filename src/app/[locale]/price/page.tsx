import Hero from "@/components/price-page/hero/hero";
import Faq from "@/components/price-page/faq/faq";
import Cta from "@/components/price-page/cta/cta";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getTranslations } from "next-intl/server";
import BasicPrices from "@/components/price-page/basic-prices/basic-prices";

export default async function PricePage() {
  const t = await getTranslations("Breadcrumbs");

  const breadcrumbSteps = [
    { label: `${t("home")}`, href: `/` },
    { label: t("blog") },
  ];

  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px]">
      <Hero />
      <Breadcrumbs steps={breadcrumbSteps} className="py-10 lg:pt-0 lg:pb-20" />
      <BasicPrices />
      <Cta />
      <Faq />
    </div>
  );
}
