"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import { m } from "framer-motion";

import GooeyWhiteButton from "@/components/ui/gooey-white-button";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const FeedbackModal = dynamic(() => import("@/components/feedback-modal"), {
  ssr: false,
});

type CtaContainerProps = {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  className?: string;
  onButtonClick?: () => void;
};

const CtaContainer = ({
  title,
  description,
  buttonText,
  className,
  onButtonClick,
}: CtaContainerProps) => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const handleClick = onButtonClick ?? (() => setIsFeedbackOpen(true));

  return (
    <section className={cn("relative pt-0 pb-[148px]", className)}>
      <Container>
        <m.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-[437px] will-change-transform"
        >
          <Image
            src="/Business-phone.png"
            alt="business-left-decor"
            width={320}
            height={437}
            sizes="(max-width: 768px) 100vw, 320px"
            quality={80}
            className="object-contain pointer-events-none"
          />
        </m.div>
        <div className="relative z-10">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sm:max-w-[450px] font-manrope text-[40px] sm:text-[48px] font-light uppercase text-white leading-[120%] mb-[32px] will-change-transform"
          >
            {title}
          </m.h2>
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute right-0 -top-15 flex items-center justify-center rounded-[37px] w-[84px] py-[6px] px-[9px] backdrop-blur-[32px] bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] safari-blur-fix"
          >
            <Image
              src="/mobile-title-banner.png"
              alt="mobile-title-banner badge"
              width={64}
              height={34}
              quality={80}
            />
          </m.div>
        </div>
        <div className="relative z-10 flex mb-[44px]">
          <m.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="ml-auto pr-[20px] sm:max-w-[350px] font-montserrat font-light text-[14px] sm:text-[16px] text-white leading-[120%] will-change-transform"
          >
            {description}
          </m.p>

          <m.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-[2px] h-auto bg-[linear-gradient(0deg,_#ffffff_0%,_#0a0704_100%)] opacity-32 rounded-full"
          />
        </div>
        <GooeyWhiteButton
          text={buttonText}
          onClick={handleClick}
          className="mx-auto text-center w-full text-[14px] font-montserrat font-light text-black"
          height={52}
        />
        {!onButtonClick && (
          <FeedbackModal
            isOpen={isFeedbackOpen}
            onOpenChange={setIsFeedbackOpen}
          />
        )}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="will-change-opacity"
        >
          <Image
            src="/business-right-decor.png"
            alt="business-right-decor"
            width={1257}
            height={1257}
            sizes="(max-width: 768px) 100vw, 1257px"
            quality={100}
            className="absolute top-[-30px] right-[-750px] max-w-none pointer-events-none -z-20 contrast-125 saturate-150"
          />
          <Image
            src="/business-shadow.webp"
            alt="business-shadow"
            width={520}
            height={1637}
            sizes="(max-width: 768px) 100vw, 520px"
            quality={100}
            className="absolute w-[520px] h-[1637px] top-[150px] left-0 max-w-none pointer-events-none -z-20"
          />
        </m.div>
      </Container>
    </section>
  );
};

export default CtaContainer;
