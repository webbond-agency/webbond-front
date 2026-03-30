import Order from "@/components/shared/order/order";
import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";

export default function Cases() {
  const t = useTranslations("AboutPage.Cases");

  return (
    <section className="pb-[148px] lg:pb-[192px]">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-6 lg:mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-3 lg:mb-4 text-[36px] lg:text-[64px] font-manrope font-light uppercase leading-[120%] text-white"
            >
              {t("title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="md:max-w-[300px] lg:max-w-[647px] font-manrope text-[16px] font-light leading-[120%] text-white lg:text-[20px] uppercase"
            >
              {t("descriptionLeft")}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex gap-5 md:max-w-[300px] lg:max-w-[392px]"
          >
            <div className="w-[2px] h-auto bg-[linear-gradient(0deg,_#ffffff_0%,_#0a0704_100%)] opacity-32 rounded-full" />
            <p className="font-montserrat text-[14px] font-light leading-[120%] text-white lg:text-[18px]">
              {t.rich("descriptionRight", {
                gray: (chunks) => (
                  <span className="text-[#818181]">{chunks}</span>
                ),
              })}
            </p>
          </motion.div>
        </div>
        <Order
          image="/about-page-cases-image.webp"
          buttonText={t("button")}
          link="/#cases"
        />
      </Container>
    </section>
  );
}
