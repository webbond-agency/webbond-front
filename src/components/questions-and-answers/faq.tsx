import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";

import { QUESTIONS_DATA } from "@/components/shared/questions-and-answers/questions-data";

const QuestionsAndAnswersContainer = dynamic(
  () =>
    import(
      "@/components/shared/questions-and-answers/questions-and-answers-container"
    ),
  { ssr: true }
);

export default async function Faq() {
  const tQuestions = await getTranslations("Questions");

  const questionsItems = QUESTIONS_DATA.map(({ id }) => ({
    id,
    question: tQuestions(`q${id}.question`),
    answer: tQuestions(`q${id}.answer`),
  }));

  return (
    <QuestionsAndAnswersContainer
      title={tQuestions("title")}
      items={questionsItems}
      seeMoreLabel={tQuestions("seeMore")}
      showBottomDecor
      className="px-[20px] sm:px-[40px] md:px-0 pt-[148px] md:pt-[178px] lg:pt-[100px] xl:pt-[178px]"
    />
  );
}

