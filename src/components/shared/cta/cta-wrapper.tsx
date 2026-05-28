"use client";

import { useIsMobile } from "@/hooks/use-mobile";

import CtaContainer from "./cta-container";
import CtaDesktop from "./cta-desktop";

export type CtaWrapperProps = {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  className?: string;
  onButtonClick?: () => void;
};

const CtaWrapper = ({
  title,
  description,
  buttonText,
  className,
  onButtonClick,
}: CtaWrapperProps) => {
  const isMobile = useIsMobile();

  if (isMobile === undefined) return null;

  const commonProps = {
    title,
    description,
    buttonText,
    className,
    onButtonClick,
  };

  return isMobile ? (
    <CtaContainer {...commonProps} />
  ) : (
    <CtaDesktop {...commonProps} />
  );
};

export default CtaWrapper;
