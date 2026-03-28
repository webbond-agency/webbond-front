import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

export default function AdditionalServices() {
  const t = useTranslations("PricePage.AdditionalServices");

  return (
    <section className="pb-20 lg:pb-30">
      <Container>
        <div className="mb-10 flex flex-col gap-6 md:mb-[58px] md:flex-row md:items-center md:justify-between lg:mb-[75px]">
          <motion.h2
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-manrope text-[36px] font-light uppercase leading-[120%] text-white lg:text-[64px]"
          >
            {t.rich("title", {
              gray: (chunks) => (
                <span className="text-[#818181]">{chunks}</span>
              ),
            })}
          </motion.h2>
          <p className="md:max-w-[211px] font-montserrat text-[14px] font-light leading-[120%] text-white">
            {t("description")}
          </p>
        </div>
      </Container>
    </section>
  );
}
