import Hero from "@/components/landing-page/hero/hero";
import Faq from "@/components/landing-page/faq/faq";
import Cta from "@/components/landing-page/cta/cta";
import OrderLanding from "@/components/landing-page/order-landing/order-landing";
import ContactsContainer from "@/components/contacts/contacts-container";
import ServicesLanding from "@/components/landing-page/services-landing/services-landing";
import Packages from "@/components/landing-page/packages/packages";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getTranslations } from "next-intl/server";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { CaseWithLanguage } from "@/types/case";
import { casesBySiteTypeQuery } from "@/lib/queries";
import Cases from "@/components/landing-page/cases/cases";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Breadcrumbs");

  const landingCases = await fetchSanityData<CaseWithLanguage>(
    casesBySiteTypeQuery,
    {
      lang: locale,
      siteType: "landing",
    },
  );

  console.log(landingCases);

  const breadcrumbSteps = [
    { label: `${t("home")}`, href: `/` },
    { label: t("websites"), href: `/websites` },
    { label: t("landing") },
  ];

  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px]">
      <Hero />
      <Breadcrumbs steps={breadcrumbSteps} className="py-10 lg:pt-0 lg:pb-20" />
      <Packages />
      <Cases cases={landingCases} />
      <ServicesLanding />
      <OrderLanding />
      <Faq />
      <Cta />
      <ContactsContainer />
    </div>
  );
}
