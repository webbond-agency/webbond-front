import Container from "@/components/ui/container";
import GooeyWhiteButton from "@/components/ui/gooey-white-button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import FoundersModal from "./founders-modal";

export default function Founders() {
  const t = useTranslations("AboutPage.Founders");
  const fedorList = [t("fedorItem1"), t("fedorItem2"), t("fedorItem3")];
  const christinaList = [
    t("christinaItem1"),
    t("christinaItem2"),
    t("christinaItem3"),
  ];
  const fedorModalList = [
    t("fedorModalItem1"),
    t("fedorModalItem2"),
    t("fedorModalItem3"),
  ];
  const christinaModalList = [
    t("christinaModalItem1"),
    t("christinaModalItem2"),
    t("christinaModalItem3"),
  ];

  return (
    <section className="pb-[148px] lg:pb-[192px]">
      <Container>
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row-reverse mb-10 md:mb-0">
          <div className="relative w-full md:w-1/2 h-[302px] sm:h-[350px] md:h-auto">
            <Image
              src="/about-page-founders-fedor.jpg"
              alt="fedor"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2  md:py-6 xl:py-[49px] md:pr-8">
            <h2 className="mb-2 lg:mb-4 text-[14px] lg:text-[16px] font-manrope font-light uppercase leading-[120%] text-white">
              {t("fedorRole")}
            </h2>
            <h3 className="mb-4 lg:mb-8 text-[40px] lg:text-[64px] font-manrope font-light uppercase leading-[120%] text-white">
              {t("fedorName")}
            </h3>
            <p className="xl:max-w-[318px] mb-3 font-montserrat font-light text-[12px] lg:text-[14px] leading-[120%] text-white">
              {t("fedorDescription1")}
            </p>
            <p className="xl:max-w-[318px] mb-6 lg:mb-8 font-montserrat font-light text-[12px] lg:text-[14px] leading-[120%] text-white">
              {t("fedorDescription2")}
            </p>
            <div className="mb-6 lg:mb-8 p-4 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[24px] rounded-[14px]">
              <h4 className="mb-6 lg:mb-5 font-manrope text-[16px] lg:text-[20px] font-light uppercase leading-[120%] text-white">
                {t("fedorListTitle")}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {fedorList.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-5 px-5 py-4 md:px-4 md:py-3 rounded-full bg-black"
                  >
                    <span className="mt-1 h-3.5 w-3.5 shrink-0 rounded-full bg-white" />
                    <span className="font-montserrat text-[12px] font-light leading-[120%] text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <FoundersModal buttonText={t("fedorButton")} list={fedorModalList} />
          </div>
        </div>

        <div className="flex flex-col gap-10 md:gap-0 md:flex-row">
          <div className="relative w-full md:w-1/2 h-[302px] sm:h-[350px] md:h-auto">
            <Image
              src="/about-page-founders-christina.webp"
              alt="fedor"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2  md:py-6 xl:py-[49px] md:pl-8">
            <h2 className="mb-2 lg:mb-4 text-[14px] lg:text-[16px] font-manrope font-light uppercase leading-[120%] text-white">
              {t("christinaRole")}
            </h2>
            <h3 className="mb-4 lg:mb-8 text-[40px] lg:text-[64px] font-manrope font-light uppercase leading-[120%] text-white">
              {t("christinaName")}
            </h3>
            <p className="xl:max-w-[318px] mb-3 font-montserrat font-light text-[12px] lg:text-[14px] leading-[120%] text-white">
              {t("christinaDescription1")}
            </p>
            <p className="xl:max-w-[318px] mb-6 lg:mb-8 font-montserrat font-light text-[12px] lg:text-[14px] leading-[120%] text-white">
              {t("christinaDescription2")}
            </p>
            <div className="mb-6 lg:mb-8 p-4 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[24px] rounded-[14px]">
              <h4 className="mb-6 lg:mb-5 font-manrope text-[16px] lg:text-[20px] font-light uppercase leading-[120%] text-white">
                {t("christinaListTitle")}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {christinaList.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-5 px-5 py-4 md:px-4 md:py-3 rounded-full bg-black"
                  >
                    <span className="mt-1 h-3.5 w-3.5 shrink-0 rounded-full bg-white" />
                    <span className="font-montserrat text-[12px] font-light leading-[120%] text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <GooeyWhiteButton
              text={t("christinaButton")}
              centerText
              className="text-center w-full md:w-[313px] text-[14px] font-montserrat font-light text-black"
              height={52}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
