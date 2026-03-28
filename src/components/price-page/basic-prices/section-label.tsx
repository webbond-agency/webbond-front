import type { ReactNode } from "react";

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span
        className="size-2 shrink-0 rounded-full bg-[#565656]"
        aria-hidden
      />
      <p className="font-manrope text-[12px] font-light uppercase leading-[120%] text-[#818181] lg:text-[14px]">
        {children}
      </p>
    </div>
  );
}
