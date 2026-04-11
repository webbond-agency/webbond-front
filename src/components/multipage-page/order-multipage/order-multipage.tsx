import Order from "@/components/shared/order/order";
import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";

export default function OrderMultipage() {
  const t = useTranslations("MultiPagePage.Order");

  return (
    <>
      <section className="pb-[148px]">
        <Container>
          <Order image="/multipage-page-order.webp" buttonText={t("button")} />
        </Container>
      </section>
    </>
  );
}
