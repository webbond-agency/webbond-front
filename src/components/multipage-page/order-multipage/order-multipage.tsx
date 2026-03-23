import Order from "@/components/shared/order/order";
import { useTranslations } from "next-intl";

export default function OrderMultipage() {
  const t = useTranslations("MultiPagePage.Order");

  return (
    <>
      <Order image="/multipage-page-order.webp" buttonText={t("button")} />
    </>
  );
}
