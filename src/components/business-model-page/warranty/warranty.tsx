import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";
import WarrantyList from "./warranty-list";
import Image from "next/image";
import * as m from "motion/react-client";

export default function Warranty() {
  const t = useTranslations("BusinessModelPage.Warranty");
  return (
    <section className="pb-[148px] lg:pb-[218px]">
      <Container className="relative">
        <m.div
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.4 }}
          className="absolute -z-10 top-[-36px] right-[-119px] lg:right-[-359px] xl:right-[-194px] lg:top-[-164px] w-[364px] h-[364px] lg:w-[728px] lg:h-[728px]"
        >
          <Image
            src="/business-model-page-warranty-decor.webp"
            alt="Warranty"
            fill
            className="object-cover"
          />
        </m.div>
        <h2 className="mb-6 lg:mb-16 font-manrope text-[36px] lg:text-[76px] leading-[120%] text-white font-light uppercase">
          {t.rich("title", {
            gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
          })}
        </h2>
        <WarrantyList />
      </Container>
    </section>
  );
}
