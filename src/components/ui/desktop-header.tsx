'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { navItems } from '@/components/header/navigate-data';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import LocaleSwitcher from '@/components/header/lang-switch';
import dynamic from 'next/dynamic';

const FeedbackModal = dynamic(() => import('@/components/feedback-modal'), {
  ssr: false,
});

interface DesktopHeaderProps {
  className?: string;
}

export default function DesktopHeader({ className }: DesktopHeaderProps) {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const t = useTranslations();
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1216);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Функция генерации пути SVG в зависимости от ширины
  const getPath = (w: number) => {
    const baseW = 1216;
    const d = w - baseW;
    return `M${887 + d} 0C${894.331 + d} 8.69412e-07 ${901.046 + d} 2.63053 ${
      906.256 + d
    } 6.99805C${908.101 + d} 8.54399 ${910.897 + d} 8.54393 ${
      912.742 + d
    } 6.998C${917.952 + d} 2.63022 ${924.669 + d} 0 ${932 + d} 0H${1186 + d}C${
      1202.57 + d
    } 0 ${1216 + d} 13.4315 ${1216 + d} 30C${1216 + d} 46.5685 ${
      1202.57 + d
    } 60 ${1186 + d} 60H${932 + d}C${924.669 + d} 60 ${917.953 + d} 57.3692 ${
      912.743 + d
    } 53.0013C${910.898 + d} 51.4552 ${908.102 + d} 51.4552 ${
      906.257 + d
    } 53.0013C${901.047 + d} 57.3692 ${894.331 + d} 60 ${
      887 + d
    } 60H30C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 1.18786e-07 30 0H${
      887 + d
    }Z`;
  };

  const currentPath = getPath(width);
  const circleCx = 932 + (width - 1216);
  const leftSectionWidth = 887 + (width - 1216);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={containerRef}
        initial="initial"
        whileHover="hover"
        className={cn(
          'relative w-full max-w-[1276px] h-[60px] mx-auto',
          className,
        )}
      >
        {/* SVG определения для масок и фильтров */}
        <svg className="pointer-events-none absolute h-0 w-0">
          <defs>
            {/* Общий Gooey фильтр для создания формы маски */}
            <filter id="header-goo-filter">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="1"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12"
              />
            </filter>

            {/* Фильтр для внутренней светлой тени (Highlight) */}
            <filter
              id="header-inner-highlight"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              {/* 1. Генерируем маску основной формы */}
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="1"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12"
                result="goo"
              />

              {/* 2. Эмуляция spread -0.5px */}
              <feMorphology
                radius="0.5"
                operator="erode"
                in="goo"
                result="eroded"
              />

              {/* 3. Создаем 'дырку' в заполнении (инверсия) */}
              <feFlood floodColor="white" result="flood" />
              <feComposite
                in="flood"
                in2="eroded"
                operator="out"
                result="hole"
              />

              {/* 4. Размываем края дырки и смещаем */}
              <feGaussianBlur in="hole" stdDeviation="3" result="blurHole" />
              <feOffset in="blurHole" dx="3" dy="-1" result="offset" />

              {/* 5. Обрезаем результат по изначальной форме (чтобы тень была только внутри) */}
              <feComposite
                in="offset"
                in2="goo"
                operator="in"
                result="shadow"
              />

              {/* 6. Применяем цвет и прозрачность (белый 0.12) */}
              <feColorMatrix
                in="shadow"
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"
              />
            </filter>

            <mask
              id="header-mask-dynamic"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={width + 50}
              height="100" // Увеличил высоту для маски
            >
              <g filter="url(#header-goo-filter)">
                <path d={currentPath} fill="white" />
                <m.circle cx={circleCx} cy="30" r="30" fill="white" />
              </g>
            </mask>

            {/* Градиент для бордера - очень тёмный бордовый как на фото */}
            <linearGradient
              id="header-border-gradient-v2"
              x1="0"
              y1="30"
              x2={width}
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A0E0E" stopOpacity="0.6" />
              <stop offset="1" stopColor="#4A0E0E" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* 1. Слой с Backdrop Blur и основным заполнением */}
        <div
          className="absolute inset-y-0 left-0 right-[-20px] z-10"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            maskImage: 'url(#header-mask-dynamic)',
            WebkitMaskImage: 'url(#header-mask-dynamic)',
          }}
        />

        {/* 2. Слой с Внутренней светлой тенью (Highlight Overlay) */}
        <svg
          className="pointer-events-none absolute left-0 top-0 overflow-visible z-1"
          width="1250"
          height="60"
        >
          <g filter="url(#header-inner-highlight)">
            <path d={currentPath} fill="white" />
            <m.circle cx={circleCx} cy="30" r="30" fill="white" />
          </g>
        </svg>

        {/* 3. Слой с градиентным бордером (1px) - тёмный бордовый */}
        <svg
          className="pointer-events-none absolute left-0 top-0 z-20 overflow-visible"
          width={width + 50}
          height="60"
        >
          <path
            d={currentPath}
            fill="none"
            stroke="url(#header-border-gradient-v2)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Слой контента */}
        <div className="relative z-10 flex h-full w-full items-center pl-[26px] pr-[12px]">
          {/* Левая часть (Динамическая ширина - тянется, на XL фиксированная как раньше) */}
          <div
            className="flex items-center justify-start lg:pr-[20px] xl:pr-[40px]"
            style={{ width: `${leftSectionWidth}px` }}
          >
            <Link href="/#hero" className="shrink-0">
              <Image
                src="/desktop-logo.svg"
                alt="Logo"
                width={244}
                height={14}
                className="w-[234px] h-[14px] xl:w-[244px] xl:h-[14px]"
              />
            </Link>
            {/* Nav */}
            <nav className="flex items-center ml-[30px] mr-[20px] lg:ml-auto lg:mr-0 lg:gap-4 xl:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.titleKey}
                  href={`/${item.href}`}
                  className="font-montserrat text-[12px] xl:text-[16px] text-white transition-[color, scale] duration-300 ease-in-out hover:text-red-400 hover:scale-105 uppercase leading-[120%] whitespace-nowrap"
                >
                  {t(item.titleKey)}
                </Link>
              ))}
            </nav>
            {/* Language switch */}
            <div className="flex items-center justify-start gap-[16px] lg:gap-[16px] xl:gap-[32px] lg:ml-[20px] xl:ml-[54px]">
              <div className="h-6 w-px bg-white/10" />
              <LocaleSwitcher triggerClassName="font-montserrat text-[16px] font-medium text-white hover:text-white gap-2 leading-[125%] uppercase" />
            </div>
          </div>

          {/* Правая часть (Фиксированная ширина относительно правого края - сдвигается вместе с вырезом) */}
          <div
            onClick={() => setIsFeedbackOpen(true)}
            className="flex items-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer shrink-0 ml-auto"
          >
            <span className="font-montserrat text-[12px] xl:text-[14px] text-white uppercase leading-[143%] mr-[45px]">
              BOOK EN KONSULTATION
            </span>
            <m.div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white">
              <svg width="14" height="14" viewBox="0 0 21 19" fill="none">
                <path
                  d="M0.267909 16.9106C-0.0493966 17.1768 -0.0907846 17.6499 0.175467 17.9672C0.441718 18.2845 0.914785 18.3259 1.23209 18.0596L0.75 17.4851L0.267909 16.9106ZM20.7401 1.40374C20.7762 0.991106 20.4709 0.627332 20.0583 0.59123L13.334 0.0029296C12.9213 -0.0331722 12.5576 0.272071 12.5215 0.684708C12.4854 1.09735 12.7906 1.46112 13.2032 1.49722L19.1804 2.02016L18.6575 7.99732C18.6214 8.40996 18.9266 8.77373 19.3393 8.80984C19.7519 8.84594 20.1157 8.54069 20.1518 8.12806L20.7401 1.40374ZM0.75 17.4851L1.23209 18.0596L20.475 1.91291L19.9929 1.33838L19.5108 0.763843L0.267909 16.9106L0.75 17.4851Z"
                  fill="#0B0B0B"
                />
              </svg>
            </m.div>
          </div>
        </div>
      </m.div>
      <FeedbackModal isOpen={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
    </LazyMotion>
  );
}
