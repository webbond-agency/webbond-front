'use client';
import { Suspense, useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

export default function SplineGlobe({
  isVisible = true,
}: {
  isVisible?: boolean;
}) {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const [isSplineReady, setIsSplineReady] = useState(false);
  const splineRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // States for lifecycle management
  const [isInViewport, setIsInViewport] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [isIdle, setIsIdle] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  // Тайм-аут бездействия: 1 минута.
  const IDLE_TIMEOUT = 1 * 60 * 1000;
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const ignoreWakeupUntilRef = useRef<number>(0);

  // 1. Задержка первичной загрузки Spline для LCP (только один раз)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadSpline(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // 2. IntersectionObserver: Следим за попаданием в зону видимости
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 3. Page Visibility API: Паузим, если вкладка не активна
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(document.visibilityState === 'visible');
    };

    window.addEventListener('visibilitychange', handleVisibilityChange);
    return () =>
      window.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // 4. Логика отслеживания бездействия пользователя
  useEffect(() => {
    if (!shouldLoadSpline) return;

    const onActivity = () => {
      if (isIdle) {
        if (Date.now() < ignoreWakeupUntilRef.current) return;
        setIsIdle(false);
      }

      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      idleTimerRef.current = setTimeout(() => {
        setIsIdle(true);
        ignoreWakeupUntilRef.current = Date.now() + 1000;
      }, IDLE_TIMEOUT);
    };

    onActivity();

    let lastCall = 0;
    const throttledHandler = () => {
      const now = Date.now();
      if (now - lastCall > 500) {
        lastCall = now;
        onActivity();
      }
    };

    const events = [
      'mousemove',
      'mousedown',
      'keydown',
      'touchstart',
      'scroll',
      'wheel',
    ];
    events.forEach((event) =>
      window.addEventListener(event, throttledHandler, {
        capture: true,
        passive: true,
      }),
    );

    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      events.forEach((event) =>
        window.removeEventListener(event, throttledHandler, { capture: true }),
      );
    };
  }, [shouldLoadSpline, isIdle]);

  // 5. Управление жизненным циклом (первичная активация)
  useEffect(() => {
    if (!shouldLoadSpline) return;

    if (isVisible && isInViewport && isPageVisible && !isIdle) {
      setIsActivated(true);
    }
  }, [isVisible, isInViewport, isPageVisible, isIdle, shouldLoadSpline]);

  // 6. Управление паузой Spline (если он смонтирован)
  useEffect(() => {
    if (!splineRef.current) return;

    const shouldPause = !isVisible || !isInViewport || !isPageVisible || isIdle;

    try {
      if (shouldPause) {
        splineRef.current.setPaused(true);
      } else {
        splineRef.current.setPaused(false);
      }
    } catch (e) {
      console.warn('Spline setPaused failed:', e);
    }
  }, [isVisible, isInViewport, isPageVisible, isIdle, isSplineReady]);

  const handleOnLoad = (splineApp: any) => {
    splineRef.current = splineApp;
    // Small delay to ensure the canvas has actually rendered the first frame
    // and the layout is stable before fading it in.
    setTimeout(() => {
      setIsSplineReady(true);
    }, 200);
  };

  // Заглушка показывается, пока Spline не готов или не должен быть активен
  const showPlaceholder = !isSplineReady || isIdle || !isPageVisible;
  const shouldHideAll = !isVisible || !isInViewport;

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {/* Заглушка для Мобильных устройств */}
      <div
        className={`absolute right-[40%] top-[50px] w-[360px] h-[813px] transition-opacity duration-1000 md:hidden ${
          !showPlaceholder ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{ display: shouldHideAll ? 'none' : undefined }}
      >
        <Image
          src="/mobile-globus.webp"
          alt="Globe placeholder"
          width={360}
          height={813}
          quality={80}
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 360px, 100vw"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Заглушка для Десктопа */}
      <div
        className={`absolute inset-0 top-[45px] w-full h-full transition-opacity duration-1000 hidden md:flex items-center justify-center ${
          !showPlaceholder ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{ display: shouldHideAll ? 'none' : undefined }}
      >
        <div className="relative w-[83%] h-[83%]">
          <Image
            src="/desktop-globus.webp"
            alt="Globe placeholder desktop"
            fill
            quality={100}
            priority
            fetchPriority="high"
            sizes="(max-width: 1280px) 100vw, 1500px"
            className="object-contain object-center"
          />
        </div>
      </div>

      {isActivated && (
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            isSplineReady && !showPlaceholder ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            maskImage: 'radial-gradient(circle, black 50%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(circle, black 50%, transparent 100%)',
            display: shouldHideAll ? 'none' : 'block',
          }}
        >
          <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
            <Spline
              scene="https://prod.spline.design/S6FngPEV2SNfSBPp/scene.splinecode"
              onLoad={handleOnLoad}
            />
          </Suspense>
        </div>
      )}

      {/* Затемнение (Watermark Cover) */}
      <div className="absolute bottom-[16px] right-[16px] w-[140px] h-[36px] bg-[#0c0c0c] z-50 pointer-events-none" />
    </div>
  );
}
