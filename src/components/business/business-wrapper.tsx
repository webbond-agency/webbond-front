"use client";

import { useTranslations } from "next-intl";

import CtaWrapper from "@/components/shared/cta/cta-wrapper";

const BusinessWrapper = () => {
  const t = useTranslations("Business");

  return (
    <CtaWrapper
      title={t.rich("title", {
        gray: (chunks) => <span className="text-[#999]">{chunks}</span>,
      })}
      description={t("description")}
      buttonText={t("button")}
    />
  );
};

export default BusinessWrapper;
