import { useTranslations } from "next-intl";

import CtaWrapper from "@/components/shared/cta/cta-wrapper";

export default function Cta() {
  const t = useTranslations("BusinessModelPage.Cta");

  return (
    <CtaWrapper
      title={t("title")}
      description={t("description")}
      buttonText={t("button")}
      className="pt-0 pb-25 md:pb-[273px]"
    />
  );
}

