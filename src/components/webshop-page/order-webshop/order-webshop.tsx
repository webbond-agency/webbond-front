import Order from "@/components/shared/order/order";
import { useTranslations } from "next-intl";

export default function OrderMultipage() {
  const t = useTranslations("WebshopPage.Order");

  return (
    <>
      <Order image="/webshop-page-order.webp" buttonText={t("button")} />
    </>
  );
}
