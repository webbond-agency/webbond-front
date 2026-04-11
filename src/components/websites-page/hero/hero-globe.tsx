"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

import SplineGlobe from "@/components/ui/spline-globe";

export default function HeroGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0 });

  return (
    <div
      ref={containerRef}
      className="w-[1213px] h-[758px] absolute -z-10 top-[-246px] md:top-[-318px] right-[-593px] md:right-[-440px] lg:scale-[1.0] xl:scale-[1.4] pointer-events-none"
    >
      <SplineGlobe isVisible={isInView} />
    </div>
  );
}

