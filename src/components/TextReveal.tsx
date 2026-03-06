import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  revealDirection?: 'up' | 'left' | 'fade';
  twoColor?: boolean;
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  as: Component = 'p',
  revealDirection = 'up',
  twoColor = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Split text into words
  const words = text.split(' ');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const container = containerRef.current;
    if (!container) return;

    // Animate each word
    const wordElements = container.querySelectorAll('.word');
    
    const getInitialProps = () => {
      switch (revealDirection) {
        case 'up':
          return { y: 45, opacity: 0 };
        case 'left':
          return { x: -50, opacity: 0 };
        case 'fade':
          return { opacity: 0 };
        default:
          return { y: 45, opacity: 0 };
      }
    };

    gsap.fromTo(
      wordElements,
      getInitialProps(),
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: duration,
        stagger: 0.08,
        ease: 'power3.out',
        delay: delay,
      }
    );
  }, [isVisible, delay, duration, revealDirection]);

  const getTwoColorClass = (index: number) => {
    if (!twoColor) return '';
    // Every other word gets the primary color
    return index % 2 === 0 ? 'text-foreground dark:text-foreground' : 'text-primary dark:text-primary';
  };

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      <Component className="inline">
        {words.map((word, index) => (
          <span
            key={index}
            className={`word inline-block ${isVisible ? 'revealed' : ''} ${getTwoColorClass(index)}`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : revealDirection === 'up' ? 'translateY(45px)' : revealDirection === 'left' ? 'translateX(-50px)' : 'none',
            }}
          >
            {word}
            {index < words.length - 1 && '\u00A0'}
          </span>
        ))}
      </Component>
    </div>
  );
};

export default TextReveal;
