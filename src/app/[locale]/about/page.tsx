import Hero from "@/components/about-page/hero/hero";
import Faq from "@/components/about-page/faq/faq";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getTranslations } from "next-intl/server";
import Cases from "@/components/about-page/cases/cases";
import Benefits from "@/components/about-page/benefits/benefits";

export default async function AboutPage() {
  const t = await getTranslations("Breadcrumbs");

  const breadcrumbSteps = [
    { label: `${t("home")}`, href: `/` },
    { label: t("about") },
  ];

  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px]">
      <Hero />
      <Breadcrumbs steps={breadcrumbSteps} className="py-10 lg:pt-0 lg:pb-20" />
      <Benefits />
      <Cases />
      <Faq />
    </div>
  );
}
