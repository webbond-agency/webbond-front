import { CaseWithLanguage } from "@/types/case";
import CasePreview from "./case-result";

const CaseResultContainer = ({
  result,
}: {
  result: CaseWithLanguage["testimonial"];
}) => {
  return (
    <section className="pt-[148px]">
      {result && <CasePreview result={result} />}
    </section>
  );
};

export default CaseResultContainer;
