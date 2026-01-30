'use client';
import { cn } from '@/lib/utils';
import { m, Variants } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';

const circleVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 5 },
};

interface GooeyWhiteButtonProps {
  text?: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  width?: number; // Optional now, will be used as initial/min width
  height?: number;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  centerText?: boolean;
}

const GooeyWhiteButton = ({
  text,
  className,
  icon,
  onClick,
  width: initialWidth,
  height = 52,
  type = 'button',
  disabled = false,
  isLoading = false,
  loadingText,
  centerText = false,
}: GooeyWhiteButtonProps) => {
  const containerRef = useRef<HTMLButtonElement>(null);
  const [width, setWidth] = useState(initialWidth || 236);

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
  const bridgeWidth = height * 1.327; // Пропорция из оригинала (69/52)
  const mainBodyRight = width - bridgeWidth;
  const circleX = width - radius;
  const circleY = radius;

  // Рассчитываем путь для SVG маски
  // Основано на оригинальном пути, где:
  // bridgeWidth = 69 (236 - 167)
  // radius = 26 (52 / 2)
  const pathData = `
    M${mainBodyRight} 0
    C${mainBodyRight + 7.356} 0 ${mainBodyRight + 13.997} 3.0548 ${
    mainBodyRight + 18.727
  } 7.96463
    C${mainBodyRight + 20.194} 9.48763 ${mainBodyRight + 22.806} 9.48763 ${
    mainBodyRight + 24.273
  } 7.96463
    C${mainBodyRight + 29.003} 3.0548 ${mainBodyRight + 35.644} 0 ${circleX} 0
    C${width - radius + 14.359} 0 ${width} 11.6406 ${width} ${radius}
    C${width} ${height - 11.6406} ${
    width - radius + 14.359
  } ${height} ${circleX} ${height}
    C${mainBodyRight + 35.644} ${height} ${mainBodyRight + 29.003} ${
    height - 3.0552
  } ${mainBodyRight + 24.274} ${height - 7.9653}
    C${mainBodyRight + 22.807} ${height - 9.4884} ${mainBodyRight + 20.193} ${
    height - 9.4884
  } ${mainBodyRight + 18.726} ${height - 7.9653}
    C${mainBodyRight + 13.997} ${height - 3.0552} ${
    mainBodyRight + 7.356
  } ${height} ${mainBodyRight} ${height}
    H${radius}
    C${radius - 14.3594} ${height} 0 ${height - 11.6406} 0 ${radius}
    C0 11.6406 ${radius - 14.3594} 0 ${radius} 0
    H${mainBodyRight}Z
  `;

  return (
    <m.button
      ref={containerRef}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      initial="initial"
      whileHover={disabled || isLoading ? 'initial' : 'hover'}
      className={cn(
        'group relative flex cursor-pointer items-center overflow-visible bg-transparent transition-all will-change-transform',
        !disabled && !isLoading && 'active:scale-95',
        (disabled || isLoading) &&
          'cursor-not-allowed opacity-50 grayscale-[0.5]',
        className,
      )}
      style={{ width: initialWidth || '100%', height }}
    >
      {/* Динамический фон отрисованный напрямую в SVG с поддержкой Gooey эффекта */}
      <svg
        className="pointer-events-none absolute inset-0 z-0"
        width={width}
        height={height}
        style={{ overflow: 'visible' }}
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
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        </g>
      </svg>

      {/* Слой контента */}
      <div className="relative z-10 flex h-full w-full items-center">
        {centerText && <div style={{ width: height }} className="shrink-0" />}
        <span
          className={cn(
            'flex-1 leading-none flex items-center',
            centerText ? 'justify-center' : 'pl-6',
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {loadingText || text}
            </>
          ) : (
            text
          )}
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
              xmlns="http://www.w3.org/2000/svg"
              variants={circleVariants}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <path
                d="M0.267909 16.9106C-0.0493966 17.1768 -0.0907846 17.6499 0.175467 17.9672C0.441718 18.2845 0.914785 18.3259 1.23209 18.0596L0.75 17.4851L0.267909 16.9106ZM20.7401 1.40374C20.7762 0.991106 20.4709 0.627332 20.0583 0.59123L13.334 0.0029296C12.9213 -0.0331722 12.5576 0.272071 12.5215 0.684708C12.4854 1.09735 12.7906 1.46112 13.2032 1.49722L19.1804 2.02016L18.6575 7.99732C18.6214 8.40996 18.9266 8.77373 19.3393 8.80984C19.7519 8.84594 20.1157 8.54069 20.1518 8.12806L20.7401 1.40374ZM0.75 17.4851L1.23209 18.0596L20.475 1.91291L19.9929 1.33838L19.5108 0.763843L0.267909 16.9106L0.75 17.4851Z"
                fill="currentColor"
              />
            </m.svg>
          )}
        </div>
      </div>
    </m.button>
  );
};

export default GooeyWhiteButton;
