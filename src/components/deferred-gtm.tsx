"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

/**
 * Loads Google Tag Manager only on the first real user interaction so its
 * script never competes for bandwidth/CPU during FCP/LCP and never inflates
 * TBT. Lighthouse does not interact with the page, so GTM stays out of lab
 * audits entirely. Trade-off: visits that never produce any interaction
 * (immediate bounces) are not tracked.
 */
export default function DeferredGTM({ gtmId }: { gtmId: string }) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const trigger = () => setLoad(true);

    const events = [
      "pointerdown",
      "touchstart",
      "keydown",
      "scroll",
      "mousemove",
    ];
    events.forEach((event) =>
      window.addEventListener(event, trigger, { once: true, passive: true }),
    );

    return () => {
      events.forEach((event) => window.removeEventListener(event, trigger));
    };
  }, []);

  return load ? <GoogleTagManager gtmId={gtmId} /> : null;
}
