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

  const commonProps = {
    title,
    description,
    buttonText,
    className,
    onButtonClick,
  };

  // Mobile-first SSR so content is in the HTML and doesn't mount only after hydration.
  return isMobile === false ? (
    <CtaDesktop {...commonProps} />
  ) : (
    <CtaContainer {...commonProps} />
  );
};

export default CtaWrapper;
