import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={twMerge(
        "mb-6 flex items-center gap-3.5 lg:mb-8",
        className,
      )}
    >
      <span
        className="size-2.5 shrink-0 rounded-full bg-[#939393]"
        aria-hidden
      />
      <p className="font-montserrat text-[20px] font-normal uppercase leading-[120%] text-white">
        {children}
      </p>
    </div>
  );
}
