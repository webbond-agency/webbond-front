import Order from "@/components/shared/order/order";
import { useTranslations } from "next-intl";

export default function OrderLanding() {
  const t = useTranslations("LandingPage.Order");

  return (
    <>
      <Order image="/landing-page-order.webp" buttonText={t("button")} />
    </>
  );
}
