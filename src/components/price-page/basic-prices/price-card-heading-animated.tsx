import * as motion from "motion/react-client";

const viewport = { once: true, margin: "0px 0px -48px 0px" as const };

const transition = (delay: number) => ({
  duration: 1,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
  delay,
});

type PriceCardHeadingAnimatedProps = {
  name: string;
  priceFrom: string;
  priceAmount: string;
  fullWidth?: boolean;
};

export default function PriceCardHeadingAnimated({
  name,
  priceFrom,
  priceAmount,
  fullWidth,
}: PriceCardHeadingAnimatedProps) {
  const idx = priceAmount.indexOf("(");
  const mainPart = idx === -1 ? priceAmount : priceAmount.slice(0, idx).trim();
  const parenPart = idx === -1 ? null : priceAmount.slice(idx);

  return (
    <div
      className={`flex flex-col justify-between flex-1${fullWidth ? "md:text-center" : ""}`}
    >
      <motion.h3
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={transition(0)}
        className="mb-3 font-manrope text-[20px] font-light uppercase leading-[120%] text-white lg:mb-4 lg:text-[32px]"
      >
        {name}
      </motion.h3>
      <div className={fullWidth ? "md:flex md:justify-center" : ""}>
        <div className="flex gap-x-2 gap-y-1 lg:gap-x-3">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={transition(0.08)}
            className="mt-6 block font-montserrat text-[12px] font-light leading-[120%] text-white md:mt-5 lg:mt-6 lg:text-[18px] xl:mt-10.5"
          >
            {priceFrom}
          </motion.span>
          <p className="flex flex-wrap gap-x-1">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={transition(0.16)}
              className="shrink-0 font-manrope text-[36px] font-light uppercase leading-[120%] text-white md:text-[32px] lg:text-[42px] xl:text-[58px]"
            >
              {mainPart}
            </motion.span>
            {parenPart ? (
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={transition(0.24)}
                className="font-manrope text-[36px] font-light uppercase leading-[120%] text-[#818181] md:text-[32px] lg:text-[42px] xl:text-[58px]"
              >
                {parenPart}
              </motion.span>
            ) : null}
          </p>
        </div>
      </div>
    </div>
  );
}
