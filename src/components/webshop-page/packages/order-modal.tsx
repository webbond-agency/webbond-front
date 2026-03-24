"use client";

import { useState } from "react";
import GooeyWhiteButton from "@/components/ui/gooey-white-button";
import dynamic from "next/dynamic";

const FeedbackModal = dynamic(() => import("@/components/feedback-modal"), {
  ssr: false,
});

interface OrderModalProps {
  buttonText: string;
  onButtonClick?: () => void;
}

export default function OrderModal({
  buttonText,
  onButtonClick,
}: OrderModalProps) {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <>
      <GooeyWhiteButton
        text={buttonText}
        onClick={() => setIsFeedbackOpen(true)}
        className="text-center w-full md:w-[313px] lg:w-[526px] text-[14px] font-montserrat font-light text-black"
        height={52}
        centerText
      />
      {!onButtonClick && (
        <FeedbackModal
          isOpen={isFeedbackOpen}
          onOpenChange={setIsFeedbackOpen}
        />
      )}
    </>
  );
}
