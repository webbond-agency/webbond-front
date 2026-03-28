type PriceLineProps = {
  from: string;
  amount: string;
};

export default function PriceLine({ from, amount }: PriceLineProps) {
  const idx = amount.indexOf("(");

  const amountNodes =
    idx === -1 ? (
      <span className="font-manrope text-[36px] font-light uppercase leading-[120%] text-white lg:text-[60px]">
        {amount}
      </span>
    ) : (
      <>
        <span className="font-manrope text-[36px] font-light uppercase leading-[120%] text-white md:text-[32px] lg:text-[42px] xl:text-[58px] shrink-0">
          {amount.slice(0, idx).trim()}
        </span>{" "}
        <span className="font-manrope text-[36px] font-light uppercase leading-[120%] text-[#818181] md:text-[32px] lg:text-[42px] xl:text-[58px]">
          {amount.slice(idx)}
        </span>
      </>
    );

  return (
    <div className="flex gap-x-2 gap-y-1 lg:gap-x-3">
      <span className="block mt-6 md:mt-5 lg:mt-6 xl:mt-10.5 font-montserrat text-[12px] lg:text-[18px] font-light leading-[120%] text-white">
        {from}
      </span>
      <p className="flex flex-wrap gap-x-1">{amountNodes}</p>
    </div>
  );
}
