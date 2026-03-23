import Services from "@/components/shared/services/services";
import { useTranslations } from "next-intl";

export default function ServicesMultipage() {
  const t = useTranslations("MultiPagePage.Services");

  const services = [
    {
      title: t("listTitleOne"),
      description: [{ text: t("listDescriptionOne") }],
    },
    {
      title: t("listTitleTwo"),
      description: [{ text: t("listDescriptionTwo") }],
    },
    {
      title: t("listTitleThree"),
      description: [{ text: t("listDescriptionThree") }],
    },
    {
      title: t("listTitleFour"),
      description: [{ text: t("listDescriptionFour") }],
    },
    {
      title: t("listTitleFive"),
      description: [{ text: t("listDescriptionFive") }],
    },
    {
      title: t("listTitleSix"),
      description: [{ text: t("listDescriptionSix") }],
    },
  ];

  return (
    <Services
      title={t("title")}
      description={t("description")}
      services={services}
    />
  );
}
