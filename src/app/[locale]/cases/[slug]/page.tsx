import CasePreviewContainer from "@/components/case-page/case-preview/case-preview-container";
import CaseResultContainer from "@/components/case-page/case-result/case-result-container";
import CtaWrapper from "@/components/case-page/cta/cta-wrapper";
import CaseHeroContainer from "@/components/case-page/hero/case-hero-container";
import CaseServicesContainer from "@/components/case-page/services/case-services-container";
import ContactsContainer from "@/components/contacts/contacts-container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { caseBySlugQuery } from "@/lib/queries";
import { CaseWithLanguage } from "@/types/case";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { getTranslations } from "next-intl/server";

const CasesDynamicPage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) => {
  const { slug, locale } = await params;
  const t = await getTranslations("Breadcrumbs");

  const currentCase = await fetchSanityData<CaseWithLanguage>(caseBySlugQuery, {
    lang: locale,
    slug: slug,
  });

  const breadcrumbSteps = [
    { label: `${t("home")}`, href: `/` },
    { label: currentCase.title },
  ];

  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px] overflow-y-clip max-w-[1340px] mx-auto">
      {currentCase?.hero && <CaseHeroContainer currentCase={currentCase} />}
      <Breadcrumbs steps={breadcrumbSteps} className="px-[20px] sm:px-[32px]" />
      {currentCase?.services && (
        <CaseServicesContainer services={currentCase?.services} />
      )}
      {currentCase?.imageBlock && (
        <CasePreviewContainer imageBlock={currentCase?.imageBlock} />
      )}
      {currentCase?.testimonial && (
        <CaseResultContainer result={currentCase?.testimonial} />
      )}
      <CtaWrapper />
      <ContactsContainer />
    </div>
  );
};

export default CasesDynamicPage;
