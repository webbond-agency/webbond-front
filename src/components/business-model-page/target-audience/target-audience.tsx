import { useTranslations } from "next-intl";
import Container from "@/components/ui/container";
import * as m from "motion/react-client";

export default function AargetAudience() {
  const t = useTranslations("BusinessModelPage.TargetAudience");

  return (
    <section className="pb-[148px] lg:pb-[197px]">
      <Container>
        <m.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6 lg:mb-12 font-manrope text-[36px] lg:text-[64px] leading-[120%] text-white font-light uppercase lg:text-right"
        >
          {t.rich("title", {
            gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
          })}
        </m.h2>
      </Container>
    </section>
  );
}
