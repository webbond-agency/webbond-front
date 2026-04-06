import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";
import * as m from "motion/react-client";

export default function Comparison() {
  const t = useTranslations("BusinessModelPage.Comparison");
  const columnSubtitles = t.raw("columnSubtitles") as string[];
  const rows = t.raw("rows") as string[][];

  const columns = columnSubtitles.map((subtitle, colIndex) => ({
    subtitle,
    items: rows.map((row) => row[colIndex]),
  }));

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

        <div className="flex gap-3">
          {columns.map((column) => (
            <div key={column.subtitle} className="w-1/3 flex flex-col gap-6">
              <h3 className="min-h-[42px] lg:min-h-[58px] flex items-center justify-center font-manrope text-[12px] font-light uppercase leading-[120%] text-white lg:text-[24px] text-center">
                {column.subtitle}
              </h3>
              <ul className="flex-1 flex flex-col gap-4 lg:p-6 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[32px] bg-white/3 px-2 py-4 rounded-[12px]">
                {column.items.map((line) => (
                  <li
                    key={`${column.subtitle}-${line}`}
                    className="flex items-center justify-center lg:justify-start h-6 font-montserrat text-[8px] lg:text-[14px] font-light leading-[133%] text-white text-center lg:text-left"
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
