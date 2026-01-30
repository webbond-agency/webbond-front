import { CaseWithLanguage } from "@/types/case";
import CaseServices from "./case-services";

const CaseServicesContainer = ({
  services,
}: {
  services: CaseWithLanguage["services"];
}) => {
  return (
    <section className="pt-10 lg:pt-20 pb-[90px] lg:pb-[148px]">
      {services && services?.length && <CaseServices services={services} />}
    </section>
  );
};

export default CaseServicesContainer;
