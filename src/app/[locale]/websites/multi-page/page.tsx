import Hero from "@/components/multipage-page/hero/hero";
import Faq from "@/components/multipage-page/faq/faq";
import Cta from "@/components/multipage-page/cta/cta";
import OrderMultipage from "@/components/multipage-page/order-multipage/order-multipage";
import ContactsContainer from "@/components/contacts/contacts-container";
import ServicesMultipage from "@/components/multipage-page/services-multipage/services-multipage";
import Packages from "@/components/multipage-page/packages/packages";
import Cases from "@/components/multipage-page/cases/cases";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getTranslations } from "next-intl/server";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { CaseWithLanguage } from "@/types/case";
import { casesBySiteTypeQuery } from "@/lib/queries";

export default async function MultiPagePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Breadcrumbs");
  const multiPageCases = await fetchSanityData<CaseWithLanguage[]>(
    casesBySiteTypeQuery,
    {
      lang: locale,
      siteType: "website",
    },
  );

  const breadcrumbSteps = [
    { label: `${t("home")}`, href: `/` },
    { label: t("websites"), href: `/websites` },
    { label: t("multipage") },
  ];

  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px] overflow-y-clip">
      <Hero />
      <Breadcrumbs steps={breadcrumbSteps} className="py-10 lg:pt-0 lg:pb-20" />
      <Packages />
      <Cases cases={multiPageCases} />
      <ServicesMultipage />
      <OrderMultipage />
      <Faq />
      <Cta />
      <ContactsContainer />
    </div>
  );
}
