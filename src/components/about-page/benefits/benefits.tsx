import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import OrderModal from "@/components/shared/order/order-modal";
import * as motion from "motion/react-client";

export default function Benefits() {
  const t = useTranslations("AboutPage.Benefits");
  const benefitsList = [t("item1"), t("item2"), t("item3"), t("item4")];

  return (
    <section className="pb-[180px] lg:pb-[192px]">
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
          className="absolute -z-10 top-[10px] right-[-235px] md:top-[-118px] md:left-[-162px]"
        >
          <Image
            width={728}
            height={728}
            src="/about-page-benefits-decor.webp"
            alt="wabout-page-benefits-decor"
            className="w-[546px] lg:w-[728px] h-auto select-none pointer-events-none"
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:ml-auto md:max-w-[500px] lg:max-w-[700px] xl:max-w-[1000px] mb-6 lg:mb-15 font-light font-manrope text-[36px] lg:text-[64px] leading-[120%] text-white uppercase md:text-right"
        >
          {t("title")}
        </motion.h2>
        <div className="flex flex-col gap-6 md:flex-row-reverse md:justify-between mb-6 rounded-[14px] bg-white/3 p-5 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[24px]">
          <div className="relative md:w-1/2 h-[155px] md:h-auto overflow-hidden rounded-[20px]">
            <Image
              src="/about-page-benefit-image.webp"
              alt="Benefit"
              fill
              className="object-cover"
            />
          </div>

          <ul className="flex flex-col gap-3 md:w-1/2">
            {benefitsList.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-5 px-5 py-4 lg:p-5 rounded-full bg-black"
              >
                <span className="mt-1 h-3.5 w-3.5 lg:w-4.5 lg:h-4.5 shrink-0 rounded-full bg-white" />
                <span className="font-montserrat text-[12px] font-light leading-[120%] text-white lg:text-[14px]">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center will-change-opacity transform-gpu"
        >
          <OrderModal buttonText={t("button")} />
          <div
            className={`hidden sm:flex flex-1 h-px from-[#FFFFFF] to-[#0A0704] bg-linear-to-r opacity-32`}
          ></div>
        </motion.div>
      </Container>
    </section>
  );
}
