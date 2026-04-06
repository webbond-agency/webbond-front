import { useTranslations } from "next-intl";
import Container from "@/components/ui/container";

export default function Disadvantages() {
  const t = useTranslations("BusinessModelPage.Disadvantages");
  const items = t.raw("items") as string[];

  return (
    <section className="pb-[148px] lg:pb-[175px]">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row-reverse md:justify-between md:items-end mb-6 lg:mb-12">
          <h2 className="font-manrope text-[36px] lg:text-[64px] leading-[120%] text-white font-light uppercase md:text-right">
            {t.rich("title", {
              gray: (chunks) => (
                <span className="text-[#818181]">{chunks}</span>
              ),
            })}
          </h2>

          <p className="md:max-w-[266px] md:mb-5 font-montserrat text-[14px] leading-[120%] text-white font-light">
            {t("descriptionOne")}
          </p>
        </div>
        <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-5 px-4 py-6 lg:px-8 lg:py-[42px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[32px] bg-[linear-gradient(96.69deg,_#0A0705_15.54%,_#450C0F_46.69%,_#0A0705_77.83%)] font-montserrat text-[20px] lg:text-[32px] font-light leading-[120%] uppercase text-white rounded-[12px]"
            >
              <p className="max-w-[236px]"> {item}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
