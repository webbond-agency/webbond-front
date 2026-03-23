import OrderModal from "@/components/landing-page/packages/order-modal";
import Container from "@/components/ui/container";
import { useTranslations } from "next-intl";

export default function Packages() {
  const t = useTranslations("LandingPage.Packages");

  const packages = [
    {
      title: t("listOne.title"),
      subtitleOne: t("listOne.subtitleOne"),
      priceKr: "18.750kr",
      priceEur: "(2500€)",
      listOne: [
        t("listOne.listOne.itemOne"),
        t("listOne.listOne.itemTwo"),
        t("listOne.listOne.itemThree"),
        t("listOne.listOne.itemFour"),
        t("listOne.listOne.itemFive"),
      ],
      subtitleTwo: t("listOne.subtitleTwo"),
      listTwo: [
        t("listOne.listTwo.itemOne"),
        t("listOne.listTwo.itemTwo"),
        t("listOne.listTwo.itemThree"),
      ],
    },
    {
      title: t("listTwo.title"),
      subtitleOne: t("listTwo.subtitleOne"),
      priceKr: "26.250kr",
      priceEur: "(3500€)",
      listOne: [
        t("listTwo.listOne.itemOne"),
        t("listTwo.listOne.itemTwo"),
        t("listTwo.listOne.itemThree"),
        t("listTwo.listOne.itemFour"),
        t("listTwo.listOne.itemFive"),
        t("listTwo.listOne.itemSix"),
      ],
      subtitleTwo: t("listTwo.subtitleTwo"),
      listTwo: [
        t("listTwo.listTwo.itemOne"),
        t("listTwo.listTwo.itemTwo"),
        t("listTwo.listTwo.itemThree"),
        t("listTwo.listTwo.itemFour"),
      ],
    },
  ];

  return (
    <section className="pb-[148px]">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row-reverse justify-between items-end mb-10 lg:mb-[75px]">
          <h2 className="md:max-w-[400px] lg:max-w-[864px] font-manrope text-[36px] lg:text-[64px] leading-[120%] text-white uppercase font-light text-right">
            {t.rich("title", {
              gray: (chunks) => (
                <span className="text-[#818181]">{chunks}</span>
              ),
            })}
          </h2>
          <p className="max-w-[191px] md:max-w-[211px] font-montserrat text-[12px] lg:text-[14px] font-light leading-[120%] text-white text-right md:text-left">
            {t("description")}
          </p>
        </div>
        <ul className="flex flex-col gap-6 md:flex-row lg:gap-8">
          {packages.map((item, index) => (
            <li
              key={index}
              className="flex flex-col justify-between md:w-1/2 px-5 py-6 lg:px-8 lg:py-10 rounded-[12px] bg-white/3 backdrop-blur-[32px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)]"
            >
              <div>
                {" "}
                <h3 className="mb-3 lg:mb-4 font-manrope text-[16px] lg:text-[24px] leading-[120%] text-white uppercase font-light">
                  {item.title}
                </h3>
                <p className="">
                  <span className="font-manrope text-[36px] lg:text-[60px] leading-[120%] text-white uppercase font-light">
                    {item.priceKr}
                  </span>{" "}
                  <span className="font-manrope text-[36px] lg:text-[60px] leading-[120%] text-[#818181] uppercase font-light">
                    {item.priceEur}
                  </span>
                </p>
                <p className="mb-6 lg:mb-8 font-montserrat text-[10px] lg:text-[14px] font-light leading-[120%] text-white">
                  {t("pdv")}
                </p>
                <div className="mb-6 lg:mb-8 p-4 lg:p-5 bg-white/3 backdrop-blur-[32px] shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] rounded-[12px]">
                  <h4 className="mb-4 font-manrope text-[16px] lg:text-[24px] leading-[120%] text-white uppercase font-light">
                    {item.subtitleOne}
                  </h4>
                  <ul className="flex flex-col gap-3 lg:gap-3.5 mb-6 lg:mb-8">
                    {item.listOne.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 font-montserrat text-[10px] lg:text-[14px] font-light leading-[120%] text-white"
                      >
                        <div className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 shrink-0 bg-white rounded-full" />
                        <p className="font-montserrat text-[12px] lg:text-[14px] font-light leading-[120%] text-white">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <h4 className="mb-4 font-manrope text-[16px] lg:text-[24px] leading-[120%] text-white uppercase font-light">
                    {item.subtitleTwo}
                  </h4>
                  <ul className="flex flex-col gap-3 lg:gap-3.5 mb-6 lg:mb-8">
                    {item.listTwo.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 font-montserrat text-[10px] lg:text-[14px] font-light leading-[120%] text-white"
                      >
                        <div className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 shrink-0 bg-white rounded-full" />
                        <p className="font-montserrat text-[12px] lg:text-[14px] font-light leading-[120%] text-white">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <OrderModal buttonText={t("button")} />
                <p className="max-w-[200px] lg:max-w-full mx-auto mt-3 lg:mt-4 font-montserrat text-[8px] lg:text-[10px] font-light leading-[120%] text-white text-center">
                  {t("price")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
