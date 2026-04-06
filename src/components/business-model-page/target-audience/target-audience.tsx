import { useTranslations } from "next-intl";
import Container from "@/components/ui/container";
import * as m from "motion/react-client";

type TargetAudienceItem = { title: string; description: string };

export default function TargetAudience() {
  const t = useTranslations("BusinessModelPage.TargetAudience");
  const items = t.raw("items") as TargetAudienceItem[];

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

        <div className="flex flex-col gap-5">
          {items.map((item, index) => (
            <m.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 + index * 0.08 }}
              className=""
            >
              <h3 className="mb-3 font-manrope text-[20px] lg:text-[32px] font-light leading-[120%] uppercase text-white">
                {item.title}
              </h3>
              <p className="font-montserrat text-[14px] lg:text-[16px] font-light leading-[133%] text-white/90">
                {item.description}
              </p>
            </m.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
