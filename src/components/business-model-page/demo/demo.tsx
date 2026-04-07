import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";

export default function Demo() {
  const t = useTranslations("BusinessModelPage.demo");

  return (
    <section>
      <Container>
        <h2>{t("title")}</h2>
      </Container>
    </section>
  );
}
