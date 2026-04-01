"use client";

import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import GooeyWhiteButton from "@/components/ui/gooey-white-button";
import { XIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import GooeyWhiteLink from "@/components/ui/gooey-white-link";

interface FoundersModalProps {
  buttonText: string;
  list: string[];
}

export default function FoundersModal({
  buttonText,
  list,
}: FoundersModalProps) {
  const [isFoundersOpen, setIsFoundersOpen] = useState(false);

  const t = useTranslations("AboutPage.Founders");
  return (
    <>
      <GooeyWhiteButton
        text={buttonText}
        onClick={() => setIsFoundersOpen(true)}
        centerText
        className="text-center w-full md:w-[313px] text-[14px] font-montserrat font-light text-black"
        height={52}
      />
      <Dialog open={isFoundersOpen} onOpenChange={setIsFoundersOpen}>
        <DialogTitle className="sr-only">Founders modal</DialogTitle>
        <DialogContent
          showCloseButton={false}
          className="w-[90%] md:w-full md:max-w-[740px] lg:max-w-[1000px] xl:max-w-[1160px] p-[20px] md:p-[30px] lg:p-[40px] [@media(max-height:800px)]:p-[40px] rounded-[12px] border-none max-h-[90vh] overflow-hidden"
        >
          <DialogClose className="z-10 absolute right-[32px] top-[32px] ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-white cursor-pointer">
            <XIcon className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="relative w-full h-full">
            <div className="absolute -top-5 -left-5 md:top-[-30px] md:left-[-30px] lg:-top-10 lg:-left-10 w-[622px] h-[395px]">
              <Image
                src="/about-page-founders-modal-shadow-top.webp"
                alt="fedor"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 md:tbottom[-30px] md:left-[-30px] lg:-bottom-10 lg:-left-10 w-[1084px] h-[232px]">
              <Image
                src="/about-page-founders-modal-shadow-bottom.webp"
                alt="fedor"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative max-h-[calc(90vh-40px)] overflow-y-auto pr-1 md:pr-2">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:hidden">
                  <p className="mb-2 lg:mb-4 text-[14px] lg:text-[16px] font-manrope font-light uppercase leading-[120%] text-white">
                    {t("fedorRole")}
                  </p>
                  <p className="mb-4 lg:mb-8 text-[40px] lg:text-[64px] font-manrope font-light uppercase leading-[120%] text-white">
                    {t("fedorName")}
                  </p>
                </div>
                <div className="relative w-full md:w-1/2 h-[320px] sm:h-[350px] md:h-auto rounded-[12px] overflow-hidden">
                  <Image
                    src="/about-page-founders-fedor.jpg"
                    alt="fedor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="hidden md:block">
                    <p className="mb-2 lg:mb-4 text-[14px] lg:text-[16px] font-manrope font-light uppercase leading-[120%] text-white">
                      {t("fedorRole")}
                    </p>
                    <p className="mb-4 lg:mb-8 text-[40px] lg:text-[64px] font-manrope font-light uppercase leading-[120%] text-white">
                      {t("fedorName")}
                    </p>
                  </div>
                  <p className="mb-3 font-montserrat font-light text-[12px] lg:text-[14px] leading-[120%] text-white">
                    {t("fedorModalIntro")}
                  </p>
                  <p className="mb-6 font-montserrat font-light text-[12px] lg:text-[14px] leading-[120%] text-white">
                    {t("fedorModalBio")}
                  </p>
                  <ul className="flex flex-col gap-2.5 p-4 mb-6 shadow-[inset_3px_-1px_9px_-1px_rgba(255,255,255,0.12)] backdrop-blur-[24px] rounded-[14px]">
                    {list.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-5 py-4 md:px-4 md:py-3 rounded-full bg-black"
                      >
                        <span className="mt-1 h-3.5 w-3.5 shrink-0 rounded-full bg-white" />
                        <span className="font-montserrat text-[12px] font-light leading-[120%] text-white">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mb-6 font-montserrat font-light text-[12px] lg:text-[14px] leading-[120%] text-white">
                    {t("fedorModalOutro")}
                  </p>
                  <GooeyWhiteLink
                    text={t("foundersModalLinkedinButton")}
                    href="https://www.linkedin.com"
                    linkType="external"
                    className="text-center w-full md:w-[313px] text-[14px] font-montserrat font-light text-black"
                    height={52}
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
