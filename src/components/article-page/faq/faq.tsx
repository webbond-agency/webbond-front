import QuestionsAndAnswersContainer from "@/components/shared/questions-and-answers/questions-and-answers-container";
import Container from "@/components/ui/container";
import { getTranslations } from "next-intl/server";

interface FaqProps {
  faq?: Array<{
    question: string;
    answer: string;
  }>;
}

export default async function Faq({ faq = [] }: FaqProps) {
  const t = await getTranslations("ArticlePage.Questions");

  const items = faq.map((item, index) => ({
    id: String(index + 1),
    question: item.question,
    answer: item.answer,
  }));

  if (!items.length) return null;

  return (
    <Container>
      <QuestionsAndAnswersContainer
        title={t("title")}
        items={items}
        seeMoreLabel={items.length > 5 ? t("seeMore") : undefined}
        className="mb-20 lg:mb-[192px]"
      />
    </Container>
  );
}
