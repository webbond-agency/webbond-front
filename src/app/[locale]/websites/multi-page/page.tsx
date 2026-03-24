import Hero from "@/components/multipage-page/hero/hero";
import Faq from "@/components/multipage-page/faq/faq";
import Cta from "@/components/multipage-page/cta/cta";
import OrderMultipage from "@/components/multipage-page/order-multipage/order-multipage";
import ContactsContainer from "@/components/contacts/contacts-container";
import ServicesMultipage from "@/components/multipage-page/services-multipage/services-multipage";
import Packages from "@/components/multipage-page/packages/packages";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getTranslations } from "next-intl/server";

export default async function MultiPagePage() {
  const t = await getTranslations("Breadcrumbs");

  const breadcrumbSteps = [
    { label: `${t("home")}`, href: `/` },
    { label: t("websites"), href: `/websites` },
    { label: t("multipage") },
  ];

  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px]">
      <Hero />
      <Breadcrumbs steps={breadcrumbSteps} className="py-10 lg:pt-0 lg:pb-20" />
      <Packages />
      <ServicesMultipage />
      <OrderMultipage />
      <Faq />
      <Cta />
      <ContactsContainer />
    </div>
  );
}
