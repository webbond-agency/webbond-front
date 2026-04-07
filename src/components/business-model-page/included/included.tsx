import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";
import Package from "./package";
import Image from "next/image";
import * as m from "motion/react-client";

export default function Included() {
  const t = useTranslations("BusinessModelPage.included");
  const sections = t.raw("sections") as { title: string; items: string[] }[];
  const firstSection = sections[0];
  const secondSection = sections[1];
  const thirdSection = sections[2];

  return (
    <section className="pb-[148px] lg:pb-[192px]">
      <Container className="relative">
        <div className="-z-10 absolute top-[295px] lg:top-[-402px] right-[-437px] lg:right-[-612px] w-[924px] h-[940px] lg:w-[1849px] lg:h-[1906px] mix-blend-hard-light">
          <Image
            src="/business-model-page-included-decor.webp"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="-z-10 lg:hidden absolute bottom-[-85px] lg:top-[-502px] left-[-378px] lg:left-[-612px] w-[609px] h-[578px] lg:w-[1218px] lg:h-[1155px]">
          <Image
            src="/business-model-page-included-shadow-mob.webp"
            alt="Background"
            fill
            className="-z-10 object-cover"
          />
        </div>
        <div className="-z-10 lg:block hidden absolute bottom-[-85px] lg:bottom-[-488px] left-[-378px] lg:left-[-773px] w-[609px] h-[578px] lg:w-[1218px] lg:h-[1155px]">
          <Image
            src="/business-model-page-included-shadow.webp"
            alt="Background"
            fill
            className="-z-10 object-cover"
          />
        </div>
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mb-6 lg:mb-[75px] font-manrope text-[36px] lg:text-[64px] leading-[120%] text-white font-light uppercase md:text-right"
        >
          {t.rich("title", {
            gray: (chunks) => <span className="text-[#818181]">{chunks}</span>,
          })}
        </m.h2>
        <div className="flex flex-col gap-6 lg:gap-8">
          <Package
            uniqueKey="first"
            title={firstSection?.title}
            list={firstSection?.items}
            image="/business-model-page-included-image-one.webp"
            imageHeight={252}
          />
          <Package
            uniqueKey="second"
            title={secondSection?.title}
            list={secondSection?.items}
            image="/business-model-page-included-image-two.webp"
            imageHeight={252}
            isImageRight={false}
          />
          <Package
            uniqueKey="third"
            title={thirdSection?.title}
            list={thirdSection?.items}
            image="/business-model-page-included-image-three.webp"
            imageHeight={252}
          />
        </div>
      </Container>
    </section>
  );
}
