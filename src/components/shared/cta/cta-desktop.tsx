"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import { m } from "framer-motion";

import GooeyWhiteButton from "@/components/ui/gooey-white-button";
import { cn } from "@/lib/utils";

const FeedbackModal = dynamic(() => import("@/components/feedback-modal"), {
  ssr: false,
});

type CtaDesktopProps = {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  className?: string;
  onButtonClick?: () => void;
};

const CtaDesktop = ({
  title,
  description,
  buttonText,
  className,
  onButtonClick,
}: CtaDesktopProps) => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const handleClick = onButtonClick ?? (() => setIsFeedbackOpen(true));

  return (
    <section className={cn("relative pb-[176px]", className)}>
      <m.div
        initial={{ opacity: 0, x: -100, rotate: 5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 10 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -z-10 max-w-none top-[-180px] left-[-230px] xl:left-[-170px] origin-top-left pointer-events-none select-none will-change-transform transform-gpu"
      >
        <Image
          src="/Business-phone.png"
          alt="business-left-decor"
          width={500}
          height={700}
          sizes="(max-width: 1280px) 33vw, 500px"
          quality={80}
          className="scale-[1.1] object-contain"
        />
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
        className="will-change-opacity"
      >
        <Image
          src="/busines-desktop-decor.webp"
          alt="business-desktop-decor"
          width={1600}
          height={1600}
          sizes="(max-width: 1600px) 100vw, 1600px"
          quality={100}
          className="absolute top-[-500px] right-[-900px] 2xl:right-[-1000px] max-w-none pointer-events-none -z-10 contrast-110 saturate-170"
        />
        <Image
          src="/desktop-busines-shadow-ellipse-for-decor.webp"
          alt="business-desktop-shadow"
          width={1300}
          height={900}
          sizes="(max-width: 1300px) 100vw, 1300px"
          quality={40}
          className="absolute bottom-[-400px] right-[-800px] max-w-none pointer-events-none -z-10 blur-md"
        />
        <Image
          src="/desktop-busines-radial-light-shadow.webp"
          alt="business-desktop-radial-light-shadow"
          width={1380}
          height={1340}
          sizes="33vw"
          quality={80}
          className="absolute bottom-[-350px] right-[-900px] max-w-none pointer-events-none -z-30 blur-md"
        />
      </m.div>
      <div className="flex flex-col max-w-[841px] mx-auto">
        <m.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-manrope text-[48px] xl:text-[64px] font-light uppercase text-white text-center leading-[120%] mb-[60px] will-change-transform transform-gpu"
        >
          {title}
        </m.h2>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-between items-center will-change-opacity"
        >
          <div className="relative flex">
            <m.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-[2px] h-auto bg-[linear-gradient(0deg,_#ffffff_0%,_#0a0704_100%)] opacity-32 rounded-full"
            />

            <m.p
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pl-[20px] max-w-[350px] font-montserrat font-light text-[14px] text-white leading-[120%] will-change-transform transform-gpu"
            >
              {description}
            </m.p>
          </div>
          <div className="flex items-center justify-center rounded-[37px] w-[121px] py-[9px] px-[14px] backdrop-blur-md bg-white/3 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] safari-blur-fix">
            <Image
              src="/mobile-title-banner.png"
              alt="mobile-title-banner badge"
              width={93}
              height={50}
              quality={80}
            />
          </div>
          <GooeyWhiteButton
            text={buttonText}
            onClick={handleClick}
            className="text-[14px] text-center font-montserrat font-light text-black"
            width={256}
            height={52}
          />
        </m.div>
      </div>
      {!onButtonClick && (
        <FeedbackModal
          isOpen={isFeedbackOpen}
          onOpenChange={setIsFeedbackOpen}
        />
      )}
    </section>
  );
};

export default CtaDesktop;
