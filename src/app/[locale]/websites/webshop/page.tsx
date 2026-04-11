import Hero from "@/components/webshop-page/hero/hero";
import Faq from "@/components/webshop-page/faq/faq";
import Cta from "@/components/webshop-page/cta/cta";
import ContactsContainer from "@/components/contacts/contacts-container";
import OrderWebshop from "@/components/webshop-page/order-webshop/order-webshop";
import ServicesWebshop from "@/components/webshop-page/services-webshop/services-webshop";
import Packages from "@/components/webshop-page/packages/packages";
import Cases from "@/components/webshop-page/cases/cases";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getTranslations } from "next-intl/server";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { CaseWithLanguage } from "@/types/case";
import { casesBySiteTypeQuery } from "@/lib/queries";

export default async function WebshopPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Breadcrumbs");

  const webshopCases = await fetchSanityData<CaseWithLanguage[]>(
    casesBySiteTypeQuery,
    {
      lang: locale,
      siteType: "webshop",
    },
  );

  const breadcrumbSteps = [
    { label: `${t("home")}`, href: `/` },
    { label: t("websites"), href: `/websites` },
    { label: t("webshop") },
  ];

  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px] overflow-y-clip">
      <Hero />
      <Breadcrumbs steps={breadcrumbSteps} className="py-10 lg:pt-0 lg:pb-20" />
      <Packages />
      <Cases cases={webshopCases} />
      <ServicesWebshop />
      <OrderWebshop />
      <Faq />
      <Cta />
      <ContactsContainer />
    </div>
  );
}
