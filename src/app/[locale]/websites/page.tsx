import Hero from "@/components/websites-page/hero/hero";
import Container from "@/components/ui/container";
import Landing from "@/components/websites-page/landing/landing";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getTranslations } from "next-intl/server";
import Multipage from "@/components/websites-page/multipage/multipage";

export default async function WebSitesPage() {
  const t = await getTranslations("Breadcrumbs");

  const breadcrumbSteps = [
    { label: `${t("home")}`, href: `/` },
    { label: t("websites") },
  ];
  return (
    <div className="pt-15 sm:pt-20 md:pt-[110px] max-w-[1340px] mx-auto">
      <Hero />
      <Container>
        <Breadcrumbs
          steps={breadcrumbSteps}
          className="py-10 lg:pt-0 lg:pb-20"
        />
      </Container>
      <Landing />
      <Multipage />
    </div>
  );
}
