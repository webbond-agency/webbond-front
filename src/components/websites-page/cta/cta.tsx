"use client";

import { useTranslations } from "next-intl";

import CtaWrapper from "@/components/shared/cta/cta-wrapper";
import Container from "@/components/ui/container";

export default function Cta() {
  const t = useTranslations("WebSitesPage.Cta");

  return (
    <Container>
      <CtaWrapper
        title={t("title")}
        description={t("description")}
        buttonText={t("button")}
        className="pt-0 pb-25 lg:pb-[273px]"
      />
    </Container>
  );
}
