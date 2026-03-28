export default function PriceLine({ value }: { value: string }) {
  const idx = value.indexOf("(");
  if (idx === -1) {
    return (
      <p className="font-manrope text-[36px] font-light uppercase leading-[120%] text-white lg:text-[60px]">
        {value}
      </p>
    );
  }
  return (
    <p>
      <span className="font-manrope text-[36px] font-light uppercase leading-[120%] text-white lg:text-[60px]">
        {value.slice(0, idx).trim()}
      </span>{" "}
      <span className="font-manrope text-[36px] font-light uppercase leading-[120%] text-[#818181] lg:text-[60px]">
        {value.slice(idx)}
      </span>
    </p>
  );
}
