import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
  blurIntensity?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const BlurReveal: React.FC<BlurRevealProps> = ({
  children,
  className = '',
  blurIntensity = 20,
  direction = 'up',
  delay = 0,
  duration = 0.2,
  threshold = 0.1,
  once = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [threshold, once]);

  useEffect(() => {
    if (!isVisible) return;

    const container = containerRef.current;
    if (!container) return;

    // Get initial transform based on direction
    const getInitialTransform = () => {
      switch (direction) {
        case 'up':
          return { y: 45, scale: 1 };
        case 'down':
          return { y: -45, scale: 1 };
        case 'left':
          return { x: 50, scale: 1 };
        case 'right':
          return { x: -50, scale: 1 };
        case 'scale':
          return { scale: 0.8 };
        default:
          return { y: 45, scale: 1 };
      }
    };

    gsap.fromTo(
      container,
      {
        ...getInitialTransform(),
        opacity: 0,
        filter: `blur(${blurIntensity}px)`,
      },
      {
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        duration: duration,
        ease: 'power3.out',
        delay: delay,
      }
    );
  }, [isVisible, blurIntensity, direction, delay, duration]);

  return (
    <div
      ref={containerRef}
      className={`blur-reveal-container ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : `blur(${blurIntensity}px)`,
        transform: isVisible
          ? 'none'
          : direction === 'up'
          ? 'translateY(45px)'
          : direction === 'down'
          ? 'translateY(-45px)'
          : direction === 'left'
          ? 'translateX(50px)'
          : direction === 'right'
          ? 'translateX(-50px)'
          : direction === 'scale'
          ? 'scale(0.8)'
          : 'translateY(45px)',
      }}
    >
      {children}
    </div>
  );
};

export default BlurReveal;
