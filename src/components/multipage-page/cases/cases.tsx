"use client";

import CasesSlider from "@/components/shared/slider/slider";
import Container from "@/components/ui/container";
import { CaseWithLanguage } from "@/types/case";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
import Image from "next/image";

interface CasesProps {
  cases: CaseWithLanguage[];
}

export default function Cases({ cases }: CasesProps) {
  const t = useTranslations("MultiPagePage.Cases");

  return (
    <section className="pb-[148px]">
      <Container className="relative">
        <div className="absolute top-[-46px] left-[-496px] lg:top-[136px] lg:left-[-608px] w-[965px] h-[965px] lg:w-[1160px] lg:h-[1160px] mix-blend-hard-light">
          <Image
            src="/landing-page-cases-decor.webp"
            alt="cases-bg"
            fill
            className="object-cover"
          />
        </div>
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
