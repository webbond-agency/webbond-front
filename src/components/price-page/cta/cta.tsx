import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";
import CTAModal from "./cta-modal";
import * as m from "motion/react-client";

export default function Cta() {
  const t = useTranslations("PricePage.Cta");

  return (
    <section className="pb-[148px] lg:pb-[192px]">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between p-5 lg:p-6 rounded-[12px] bg-[linear-gradient(96.69deg,_#0A0705_15.54%,_#450C0F_46.69%,_#0A0705_77.83%)] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[32px] bg-white/3 p-4">
          <div>
            <m.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="mb-4 font-manrope text-[24px] lg:text-[32px] font-light uppercase text-white leading-[120%]"
            >
              {t("title")}
            </m.h2>
            <m.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
              className="md:max-w-[304px] font-montserrat font-light text-[12px] lg:text-[14px] text-white leading-[120%]"
            >
              {t("description")}
            </m.p>
          </div>
          <div>
            <m.p
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
              className="md:max-w-[350px] mb-4 lg:mb-5 font-montserrat font-light text-[12px] lg:text-[14px] text-white leading-[120%]"
            >
              {t("question")}
            </m.p>
            <CTAModal buttonText={t("button")} />
          </div>
        </div>
      </Container>
    </section>
  );
}
