import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";
import * as m from "motion/react-client";

export default function Price() {
  const t = useTranslations("BusinessModelPage.Price");
  const listItems = t.raw("listItems") as string[];

  return (
    <section className="pb-[148px] lg:pb-[192px]">
      <Container>
        <div className="p-5 rounded-[12px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] bg-white/3 backdrop-blur-[24px]">
          <div className="flex flex-col md:flex-row gap-3 md:justify-between mb-6 lg:mb-8">
            <h2 className="font-manrope text-[16px] lg:text-[32px] leading-[120%] text-white font-light uppercase">
              {t("title")}
            </h2>
            <p className="font-montserrat text-[10px] lg:text-[14px] leading-[120%] text-white font-light">
              {t("note")}
            </p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row mb-6 lg:mb-5">
            <div className="flex gap-3 items-center w-[185px] md:w-[calc(50%-12px)]">
              <p className="font-montserrat text-[12px] lg:text-[14px] leading-[120%] text-white font-light">
                {t("fromLabel")}
              </p>
              <div className="flex flex-col md:flex-row gap-1">
                <p className="font-manrope text-[32px] lg:text-[44px] xl:text-[60px] leading-[120%] text-white font-light uppercase">
                  {t("fromPrice")}
                </p>
                <p className="font-manrope text-[32px] lg:text-[44px] xl:text-[60px] leading-[120%] text-[#818181] font-light uppercase">
                  {t("fromEur")}
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center w-[197px] md:w-[calc(50%-12px)] ">
              <p className="font-montserrat text-[12px] lg:text-[14px] leading-[120%] text-white font-light">
                {t("toLabel")}
              </p>
              <div className="flex flex-col md:flex-row gap-1">
                <p className="font-manrope text-[32px] lg:text-[44px] xl:text-[60px] leading-[120%] text-white font-light uppercase">
                  {t("toPrice")}
                </p>
                <p className="font-manrope text-[32px] lg:text-[44px] xl:text-[60px] leading-[120%] text-[#818181] font-light uppercase">
                  {t("toEur")}
                </p>
              </div>
            </div>
          </div>

          <m.ul
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4 md:flex-row md:flex-wrap"
          >
            {listItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-5 md:w-[calc(50%-8px)] px-4 py-3 lg:px-5 lg:py-4 rounded-full bg-black"
              >
                <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-white" />
                <span className="font-montserrat text-[12px] lg:text-[14px] font-light leading-[120%] text-white">
                  {item}
                </span>
              </li>
            ))}
          </m.ul>
        </div>
      </Container>
    </section>
  );
}
