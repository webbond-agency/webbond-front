import * as m from "motion/react-client";
import { useTranslations } from "next-intl";

export default function WarrantyList() {
  const t = useTranslations("BusinessModelPage.Warranty");
  const items = [0, 1, 2, 3] as const;

  return (
    <>
      {/* List for mobile */}
      <m.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.6 },
          },
        }}
        className="md:hidden flex flex-col gap-4 w-full relative z-30 mb-[28px]"
      >
        {items.map((item, index) => (
          <m.li
            key={item}
            variants={{
              hidden: { opacity: 0, x: index % 2 === 0 ? -15 : 15 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative flex items-center ${
              index % 2 === 1 ? "justify-end" : ""
            } w-full h-[109px] px-[20px] rounded-[12px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden`}
          >
            <p
              className={`w-full ${
                index === 0
                  ? "max-w-[183px] sm:max-w-[169px]"
                  : index === 1 || index === 3
                    ? "max-w-[191px] sm:max-w-[194px]"
                    : "max-w-[210px] sm:max-w-full"
              } text-white wrap-break-word`}
            >
              <span className="block font-manrope text-[16px] font-light uppercase leading-[120%] mb-3">
                {t(`listItems.${item}`)}
              </span>
            </p>
            <div
              className={`absolute ${
                index === 0
                  ? "top-[-15px] right-[17px] z-30"
                  : index === 1 || index === 3
                    ? "top-[-25px] left-0 z-0"
                    : "top-[-20px] right-0 z-0"
              } font-montserrat font-semibold text-[145px] leading-[120%] pointer-events-none select-none bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent`}
            >
              {index + 1}
            </div>
          </m.li>
        ))}
      </m.ul>

      {/* List for desktop */}
      <m.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.8 },
          },
        }}
        className="hidden md:flex flex-wrap md:flex-nowrap justify-end gap-[12px] xl:gap-[20px] relative z-30 md:mb-[68px]"
      >
        {items.map((item, index) => (
          <li
            key={item}
            className={`relative md:w-1/4 md:h-[112px] p-4 xl:p-5 rounded-[12px] backdrop-blur-sm bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] overflow-hidden safari-blur-fix will-change-transform transform-gpu ${
              index === 1 ? "flex items-end" : ""
            }`}
          >
            <m.p
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-[169px] sm:max-w-[184px]"
            >
              <span className="block mb-[12px] lg:mb-[20px] font-manrope font-light text-[16px] lg:text-[20px] text-white leading-[120%] uppercase">
                {t(`listItems.${item}`)}
              </span>
            </m.p>
            <m.div
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.8,
                  y: index % 2 === 0 ? 20 : -20,
                },
                show: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-[-27px] lg:bottom-[-42px] right-[10px] lg:right-[15px] font-montserrat font-semibold text-[100px] md:text-[120px] lg:text-[145px] leading-[120%] pointer-events-none select-none z-0 bg-linear-to-b from-white/25 to-white/0 bg-clip-text text-transparent"
            >
              {index + 1}
            </m.div>
          </li>
        ))}
      </m.ul>
    </>
  );
}
