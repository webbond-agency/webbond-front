"use client";
import SplineGlobe from "@/components/ui/spline-globe";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0 });

  return (
    <section
      ref={containerRef}
      className="pt-[97px] lg:pt-[166px] pb-[129px] lg:pb-[227px]"
    >
      {/* <div className="absolute top-[-140px] lg:top-[-100px] xl:top-[-150px] right-1/2 translate-x-1/2 scale-[1.2] lg:scale-[1.0] xl:scale-[1.2] w-full h-full pointer-events-none">
        <SplineGlobe isVisible={isInView} />
      </div> */}
    </section>
  );
}
