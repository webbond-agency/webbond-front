import Hero from "@/components/landing-page/hero/hero";
import Faq from "@/components/landing-page/faq/faq";
import Cta from "@/components/landing-page/cta/cta";
import OrderLanding from "@/components/landing-page/order-landing/order-landing";
import ContactsContainer from "@/components/contacts/contacts-container";
import ServicesLanding from "@/components/landing-page/services-landing/services-landing";
import Packages from "@/components/landing-page/packages/packages";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getTranslations } from "next-intl/server";

export default async function LandingPage() {
  const t = await getTranslations("Breadcrumbs");

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
      <ServicesLanding />
      <OrderLanding />
      <Faq />
      <Cta />
      <ContactsContainer />
    </div>
  );
}
