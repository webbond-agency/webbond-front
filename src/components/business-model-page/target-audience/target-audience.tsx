import { useTranslations } from "next-intl";
import Container from "@/components/ui/container";
import * as m from "motion/react-client";
import Image from "next/image";

type TargetAudienceItem = {
  title: string;
  description: string;
  imageDesk: string;
  imageMob: string;
};

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
      </Container>
      <div className="flex flex-col gap-5">
        {items.map((item, index) => (
          <m.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 + index * 0.08 }}
            className="group bg-white py-4 md:p-3 md:w-[calc(50%+24rem-20px)] lg:w-[calc(50%+32rem-32px)] xl:w-[calc(50%+40rem-32px)] md:mr-auto md:rounded-r-full"
          >
            <div
              className={`md:flex items-center justify-between md:gap-12 lg:gap-8 xl:gap-[126px] group-odd:flex-row group-even:flex-row-reverse`}
            >
              <div className="flex items-center justify-between gap-4 mb-4 md:mb-0 md:w-[55%]">
                <h3 className="max-w-[146px] md:max-w-[160px] lg:max-w-[421px] font-manrope text-[14px] lg:text-[20px] xl:text-[32px] font-light leading-[120%] uppercase text-black">
                  {item.title}
                </h3>
                <p className="max-w-[146px] md:max-w-[160px] lg:max-w-[192px] font-montserrat text-[8px] lg:text-[14px] font-light leading-[120%] text-black">
                  {item.description}
                </p>
              </div>
              <div className="md:hidden rounded-full overflow-hidden">
                <Image
                  src={item.imageMob}
                  alt=""
                  width={320}
                  height={64}
                  className="w-full h-[64px] object-cover"
                />
              </div>
              <div className="hidden md:block shrink-0">
                <Image
                  src={item.imageDesk}
                  alt=""
                  width={417}
                  height={104}
                  className="md:w-[320px] xl:w-[417px] h-auto object-cover"
                />
              </div>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
