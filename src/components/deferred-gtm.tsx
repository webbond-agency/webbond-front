"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

/**
 * Loads Google Tag Manager outside the critical render path so its script
 * doesn't compete for bandwidth/CPU during FCP/LCP. It mounts on the first
 * user interaction, or — for visitors who never interact — shortly after the
 * page has fully loaded and gone idle, so analytics still fires reliably.
 */
export default function DeferredGTM({ gtmId }: { gtmId: string }) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setLoad(true);
    };

    const events = ["pointerdown", "touchstart", "keydown", "scroll"];
    events.forEach((event) =>
      window.addEventListener(event, trigger, { once: true, passive: true }),
    );

    // Fallback for non-interacting visitors: load once the page is idle.
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => void;
    };
    const onIdle = () => {
      if (typeof w.requestIdleCallback === "function") {
        w.requestIdleCallback(trigger, { timeout: 4000 });
      } else {
        setTimeout(trigger, 3000);
      }
    };
    if (document.readyState === "complete") {
      onIdle();
    } else {
      window.addEventListener("load", onIdle, { once: true });
    }

    return () => {
      events.forEach((event) => window.removeEventListener(event, trigger));
      window.removeEventListener("load", onIdle);
    };
  }, []);

  return load ? <GoogleTagManager gtmId={gtmId} /> : null;
}
