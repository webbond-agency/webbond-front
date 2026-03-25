import CasesSlider from "@/components/cases/cases-slider";
import Container from "@/components/ui/container";
import * as motion from "motion/react-client";
import { CaseWithLanguage } from "@/types/case";
import { useTranslations } from "next-intl";

interface CasesProps {
  cases: CaseWithLanguage[];
}

export default function Cases({ cases }: CasesProps) {
  const t = useTranslations("LandingPage.Cases");

  return (
    <section>
      <Container>
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mb-10 lg:mb-12 font-manrope text-[36px] lg:text-[76px] leading-[120%] text-white uppercase font-light"
        >
          {t.rich("title", {
            gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
          })}
        </motion.h2>
        <CasesSlider cases={cases} />
      </Container>
    </section>
  );
}
