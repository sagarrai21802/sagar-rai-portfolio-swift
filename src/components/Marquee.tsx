import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right';
  speed?: number;
  pauseOnHover?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  className = '',
  direction = 'left',
  speed = 50,
  pauseOnHover = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstCloneRef = useRef<HTMLDivElement>(null);
  const secondCloneRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const firstClone = firstCloneRef.current;
    const secondClone = secondCloneRef.current;

    if (!container || !firstClone || !secondClone) return;

    // Calculate the width of one set of items
    const containerWidth = container.scrollWidth / 2;

    // Create the animation
    const xPosition = direction === 'left' ? -containerWidth : containerWidth;

    animationRef.current = gsap.to([firstClone, secondClone], {
      x: xPosition,
      duration: containerWidth / speed,
      ease: 'none',
      repeat: -1,
      paused: isPaused,
      modifiers: {
        // Make it seamless
        x: gsap.utils.unitize((x: number) => {
          const mod = gsap.utils.unitize((val: number) => {
            const w = container.scrollWidth / 2;
            return ((val % w) + w) % w - w;
          });
          return mod(x);
        }),
      },
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [direction, speed, isPaused]);

  useEffect(() => {
    if (animationRef.current) {
      if (isPaused) {
        animationRef.current.pause();
      } else {
        animationRef.current.play();
      }
    }
  }, [isPaused]);

  return (
    <div
      className={`marquee-container overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div ref={containerRef} className="marquee-content inline-flex whitespace-nowrap">
        {children}
      </div>
      <div ref={firstCloneRef} className="marquee-content inline-flex whitespace-nowrap absolute top-0 left-full">
        {children}
      </div>
      <div ref={secondCloneRef} className="marquee-content inline-flex whitespace-nowrap absolute top-0 left-full">
        {children}
      </div>
    </div>
  );
};

// Simple marquee item component for logos
interface MarqueeItemProps {
  children: React.ReactNode;
  className?: string;
}

export const MarqueeItem: React.FC<MarqueeItemProps> = ({ children, className = '' }) => (
  <div className={`marquee-item inline-flex items-center justify-center mx-8 ${className}`}>
    {children}
  </div>
);

export default Marquee;
