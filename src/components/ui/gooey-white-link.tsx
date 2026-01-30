"use client";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { m, Variants } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

const circleVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 5 },
};

interface GooeyWhiteLinkProps {
  text?: string;
  className?: string;
  href: string;
  icon?: React.ReactNode;
  width?: number;
  height?: number;
  target?: string;
}

const MotionLink = m(Link);

const GooeyWhiteLink = ({
  text,
  className,
  href,
  width: initialWidth,
  height = 52,
  icon,
  target,
}: GooeyWhiteLinkProps) => {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const [width, setWidth] = useState(initialWidth || 236);

  const isExternal = href.startsWith("http") || href.startsWith("//");

  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer nofollow" }
    : {};

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          setWidth(entry.contentRect.width);
        }
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const radius = height / 2;
  const bridgeWidth = height * 1.327;
  const mainBodyRight = width - bridgeWidth;
  const circleX = width - radius;
  const circleY = radius;

  const pathData = `
    M${mainBodyRight} 0
    C${mainBodyRight + 7.356} 0 ${mainBodyRight + 13.997} 3.0548 ${mainBodyRight + 18.727} 7.96463
    C${mainBodyRight + 20.194} 9.48763 ${mainBodyRight + 22.806} 9.48763 ${mainBodyRight + 24.273} 7.96463
    C${mainBodyRight + 29.003} 3.0548 ${mainBodyRight + 35.644} 0 ${circleX} 0
    C${width - radius + 14.359} 0 ${width} 11.6406 ${width} ${radius}
    C${width} ${height - 11.6406} ${width - radius + 14.359} ${height} ${circleX} ${height}
    C${mainBodyRight + 35.644} ${height} ${mainBodyRight + 29.003} ${height - 3.0552} ${mainBodyRight + 24.274} ${height - 7.9653}
    C${mainBodyRight + 22.807} ${height - 9.4884} ${mainBodyRight + 20.193} ${height - 9.4884} ${mainBodyRight + 18.726} ${height - 7.9653}
    C${mainBodyRight + 13.997} ${height - 3.0552} ${mainBodyRight + 7.356} ${height} ${mainBodyRight} ${height}
    H${radius}
    C${radius - 14.3594} ${height} 0 ${height - 11.6406} 0 ${radius}
    C0 11.6406 ${radius - 14.3594} 0 ${radius} 0
    H${mainBodyRight}Z
  `;

  return (
    <MotionLink
      ref={containerRef}
      href={href}
      {...externalProps}
      {...(target && { target })}
      initial="initial"
      whileHover="hover"
      className={cn(
        "group relative inline-flex items-center overflow-visible bg-transparent transition-all will-change-transform active:scale-95 no-underline decoration-transparent",
        className
      )}
      style={{ width: initialWidth || "100%", height }}
    >
      {/* SVG Background */}
      <svg
        className="pointer-events-none absolute inset-0 z-0"
        width={width}
        height={height}
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter
            id="goo-filter-white"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12"
            />
          </filter>
        </defs>
        <g filter="url(#goo-filter-white)">
          <path d={pathData} fill="white" />
          <m.circle
            cx={circleX}
            cy={circleY}
            r={radius}
            fill="white"
            variants={circleVariants}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </g>
      </svg>

      {/* Content Layer */}
      <div className="relative z-10 flex h-full w-full items-center pointer-events-none">
        <span className="flex-1 leading-none flex items-center pl-9 text-black">
          {text}
        </span>
        <div
          style={{ width: height }}
          className="flex shrink-0 items-center justify-center text-black"
        >
          {icon || (
            <m.svg
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
              variants={circleVariants}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <path
                d="M0.267909 16.9106C-0.0493966 17.1768 -0.0907846 17.6499 0.175467 17.9672C0.441718 18.2845 0.914785 18.3259 1.23209 18.0596L0.75 17.4851L0.267909 16.9106ZM20.7401 1.40374C20.7762 0.991106 20.4709 0.627332 20.0583 0.59123L13.334 0.0029296C12.9213 -0.0331722 12.5576 0.272071 12.5215 0.684708C12.4854 1.09735 12.7906 1.46112 13.2032 1.49722L19.1804 2.02016L18.6575 7.99732C18.6214 8.40996 18.9266 8.77373 19.3393 8.80984C19.7519 8.84594 20.1157 8.54069 20.1518 8.12806L20.7401 1.40374ZM0.75 17.4851L1.23209 18.0596L20.475 1.91291L19.9929 1.33838L19.5108 0.763843L0.267909 16.9106L0.75 17.4851Z"
                fill="currentColor"
              />
            </m.svg>
          )}
        </div>
      </div>
    </MotionLink>
  );
};

export default GooeyWhiteLink;
