import Hero from "@/components/price-page/hero/hero";
import Faq from "@/components/price-page/faq/faq";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getTranslations } from "next-intl/server";

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
      <Faq />
    </div>
  );
}
