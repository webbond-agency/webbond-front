'use client';

import React, { useRef, useEffect, useState, useId } from 'react';

interface MarqueeTextProps {
  text: string;
  className?: string;
  speed?: number; // Pixels per second
}

const MarqueeText: React.FC<MarqueeTextProps> = ({
  text,
  className = '',
  speed = 30,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [textWidth, setTextWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const id = useId().replace(/:/g, ''); // Generate a safe ID for the animation

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const checkOverflow = () => {
      if (containerRef.current && textRef.current) {
        const cWidth = containerRef.current.offsetWidth;
        const tWidth = textRef.current.offsetWidth;
        setContainerWidth(cWidth);
        setTextWidth(tWidth);
        setShouldAnimate(tWidth > cWidth);
      }
    };

    const observer = new ResizeObserver(checkOverflow);
    if (containerRef.current) observer.observe(containerRef.current);

    checkOverflow();
    return () => observer.disconnect();
  }, [text, mounted]);

  const gap = containerWidth > 0 ? Math.max(40, containerWidth * 0.2) : 40;
  const scrollDistance = textWidth + gap;
  const duration = scrollDistance / speed;

  const animationName = `marquee-${id}`;

  // Render a stable container that doesn't change structure after mount
  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap relative ${className}`}
      style={{
        maskImage: shouldAnimate
          ? 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          : 'none',
        WebkitMaskImage: shouldAnimate
          ? 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          : 'none',
      }}
    >
      <div
        className="inline-block"
        style={{
          display: 'inline-block',
          animation:
            shouldAnimate && mounted
              ? `${animationName} ${duration}s linear infinite`
              : 'none',
          willChange: 'transform',
        }}
      >
        <span ref={textRef} className="inline-block">
          {text}
        </span>
        {(shouldAnimate || !mounted) && (
          <span
            className="inline-block"
            style={{
              paddingLeft: `${gap}px`,
              visibility: shouldAnimate ? 'visible' : 'hidden',
            }}
          >
            {text}
          </span>
        )}
      </div>

      {shouldAnimate && mounted && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes ${animationName} {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${scrollDistance}px);
            }
          }
        `,
          }}
        />
      )}
    </div>
  );
};

export default MarqueeText;
