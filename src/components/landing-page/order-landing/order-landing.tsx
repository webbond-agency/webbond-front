import Order from "@/components/shared/order/order";
import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";

export default function OrderLanding() {
  const t = useTranslations("LandingPage.Order");

  return (
    <>
      <section className="pb-[148px]">
        <Container>
          <Order image="/landing-page-order-n.webp" buttonText={t("button")} />
        </Container>
      </section>
    </>
  );
}
