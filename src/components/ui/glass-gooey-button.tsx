'use client';

import { cn } from '@/lib/utils';
import { m, Variants } from 'framer-motion';

interface GlassGooeyButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  backgroundColor?: string;
  blur?: string;
  boxShadow?: string;
}

const containerVariants: Variants = {
  initial: {},
  hover: {},
};

const circleVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 2 },
};

const textVariants: Variants = {
  initial: { x: 0 },
  hover: { x: -2 },
};

export default function GlassGooeyButton({
  text = 'Se mere',
  className,
  onClick,
  width = 149,
  height = 42,
  backgroundColor = 'rgba(255, 255, 255, 0.03)',
  blur = '8px',
  boxShadow = 'inset 3px -1px 11px -1px rgba(255, 255, 255, 0.12)',
}: GlassGooeyButtonProps) {
  const radius = height / 2;
  const bridgeWidth = height * 1.357; // Пропорция из оригинала (57/42)
  const mainBodyRight = width - bridgeWidth;
  const circleX = width - radius;
  const circleY = radius;

  // Рассчитываем путь для SVG маски
  const pathData = `
    M${mainBodyRight} 0
    C${mainBodyRight + 5.8517} 0 ${mainBodyRight + 11.144} 2.3935 ${
    mainBodyRight + 14.952
  } 6.25484
    C${mainBodyRight + 16.539} 7.86386 ${mainBodyRight + 19.461} 7.86386 ${
    mainBodyRight + 21.048
  } 6.25484
    C${mainBodyRight + 24.856} 2.3935 ${mainBodyRight + 30.148} 0 ${circleX} 0
    C${width - radius + 11.598} 0 ${width} 9.40202 ${width} ${radius}
    C${width} ${height - 9.402} ${
    width - radius + 11.598
  } ${height} ${circleX} ${height}
    C${mainBodyRight + 30.148} ${height} ${mainBodyRight + 24.856} ${
    height - 2.3938
  } ${mainBodyRight + 21.048} ${height - 6.2553}
    C${mainBodyRight + 19.461} ${height - 7.8645} ${mainBodyRight + 16.539} ${
    height - 7.8645
  } ${mainBodyRight + 14.952} ${height - 6.2553}
    C${mainBodyRight + 11.144} ${height - 2.3938} ${
    mainBodyRight + 5.8518
  } ${height} ${mainBodyRight} ${height}
    H${radius}
    C${radius - 11.59798} ${height} 0 ${height - 9.402} 0 ${radius}
    C0 9.40202 ${radius - 11.59798} 0 ${radius} 0
    H${mainBodyRight}Z
  `;

  return (
    <m.button
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      variants={containerVariants}
      className={cn(
        'group relative flex cursor-pointer items-center overflow-visible bg-transparent transition-transform active:scale-95',
        className,
      )}
      style={{ width, height }}
    >
      {/* SVG определения для динамической Gooey маски */}
      <svg className="pointer-events-none absolute h-0 w-0">
        <defs>
          <filter id="glass-goo-filter">
            {/* Уменьшаем радиус размытия для более тонкой "шеи" */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
            {/* Увеличиваем контраст (25) и смещение (-12) для более резкого и тонкого перехода */}
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>

          <mask
            id="glass-goo-mask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={width + 20}
            height={height}
          >
            <g filter="url(#glass-goo-filter)">
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
          </mask>
        </defs>
      </svg>

      {/* Фон с эффектом стекла и Gooey маской */}
      <div
        className="absolute inset-y-0 left-0 right-[-10px] z-0"
        style={{
          backgroundColor: backgroundColor,
          backdropFilter: `blur(${blur})`,
          WebkitBackdropFilter: `blur(${blur})`,
          boxShadow: boxShadow,
          maskImage: 'url(#glass-goo-mask)',
          WebkitMaskImage: 'url(#glass-goo-mask)',
        }}
      />

      {/* Слой контента */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {/* Spacer to balance the icon area on the right */}
        <div className="shrink-0" />

        <m.span
          variants={textVariants}
          className="flex-1 text-center font-montserrat text-[12px] font-light leading-none"
        >
          {text}
        </m.span>

        <div
          style={{ width: height }}
          className="flex shrink-0 items-center justify-center pt-px"
        >
          <m.svg
            width="14"
            height="14"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={circleVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <path
              d="M0.267909 16.9106C-0.0493966 17.1768 -0.0907846 17.6499 0.175467 17.9672C0.441718 18.2845 0.914785 18.3259 1.23209 18.0596L0.75 17.4851L0.267909 16.9106ZM20.7401 1.40374C20.7762 0.991106 20.4709 0.627332 20.0583 0.59123L13.334 0.0029296C12.9213 -0.0331722 12.5576 0.272071 12.5215 0.684708C12.4854 1.09735 12.7906 1.46112 13.2032 1.49722L19.1804 2.02016L18.6575 7.99732C18.6214 8.40996 18.9266 8.77373 19.3393 8.80984C19.7519 8.84594 20.1157 8.54069 20.1518 8.12806L20.7401 1.40374ZM0.75 17.4851L1.23209 18.0596L20.475 1.91291L19.9929 1.33838L19.5108 0.763843L0.267909 16.9106L0.75 17.4851Z"
              fill="white"
            />
          </m.svg>
        </div>
      </div>
    </m.button>
  );
}
