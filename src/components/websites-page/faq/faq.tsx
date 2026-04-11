import QuestionsAndAnswersContainer from "@/components/shared/questions-and-answers/questions-and-answers-container";
import Container from "@/components/ui/container";
import { QUESTIONS_DATA } from "@/components/shared/questions-and-answers/questions-data";
import { getTranslations } from "next-intl/server";

export default async function Faq() {
  const t = await getTranslations("WebSitesPage.Questions");

  const items = QUESTIONS_DATA.slice(0, 5).map(({ id }) => ({
    id,
    question: t(`q${id}.question`),
    answer: t(`q${id}.answer`),
  }));

  return (
    <Container>
      <QuestionsAndAnswersContainer
        title={t("title")}
        items={items}
        className="mb-[150px] lg:mb-[243px]"
      />
    </Container>
  );
}
