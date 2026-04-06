import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";
import * as m from "motion/react-client";

type ComparisonColumn = { subtitle: string; items: string[] };

export default function Comparison() {
  const t = useTranslations("BusinessModelPage.Comparison");
  const columns = t.raw("columns") as ComparisonColumn[];

  return (
    <section className="pb-[148px] lg:pb-[192px]">
      <Container>
        <m.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6 lg:mb-[75px] font-manrope text-[36px] lg:text-[64px] leading-[120%] text-white font-light uppercase"
        >
          {t.rich("title", {
            gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
          })}
        </m.h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-4 lg:gap-6">
          {columns.map((column) => (
            <div
              key={column.subtitle}
              className="flex flex-col gap-4 rounded-[12px] px-4 py-6 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[32px] bg-[linear-gradient(180deg,_#0A0705_0%,_#1a0a0c_50%,_#0A0705_100%)] lg:px-5 lg:py-8"
            >
              <h3 className="font-manrope text-[16px] font-light uppercase leading-[120%] text-white lg:text-[18px]">
                {column.subtitle}
              </h3>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {column.items.map((line) => (
                  <li
                    key={`${column.subtitle}-${line}`}
                    className="font-montserrat text-[13px] font-light leading-[133%] text-white lg:text-[14px]"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
