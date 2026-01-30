import { CaseWithLanguage } from "@/types/case";
import CasePreview from "./case-preview";

const CasePreviewContainer = ({
  imageBlock,
}: {
  imageBlock: CaseWithLanguage["imageBlock"];
}) => {
  return (
    <section>{imageBlock && <CasePreview imageBlock={imageBlock} />}</section>
  );
};

export default CasePreviewContainer;
