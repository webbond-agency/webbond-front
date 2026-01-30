"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import GooeyWhiteButton from "@/components/ui/gooey-white-button";

const FeedbackModal = dynamic(() => import("@/components/feedback-modal"), {
  ssr: false,
});

export function CtaActions({
  buttonText,
  className,
  width,
  height = 52,
}: {
  buttonText: string;
  className: string;
  width?: number;
  height?: number;
}) {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <>
      <GooeyWhiteButton
        text={buttonText}
        onClick={() => setIsFeedbackOpen(true)}
        className={className}
        height={height}
        {...(width && { width })}
      />
      <FeedbackModal isOpen={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
    </>
  );
}
