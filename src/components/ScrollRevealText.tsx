import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({
  text,
  className = '',
  as: Component = 'h2',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll('.reveal-word');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'bottom 60%',
        scrub: 0.5,
      }
    });

    tl.fromTo(
      words,
      {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        y: 35,
      },
      {
        clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
        y: 0,
        stagger: 0.08,
        ease: 'power1.out',
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === el) t.kill();
      });
    };
  }, []);

  const words = text.split(' ');

  return (
    <Component ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="reveal-word inline-block mr-[0.25em]"
          style={{
            display: 'inline-block',
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
            transform: 'translateY(35px)',
            willChange: 'transform, clip-path',
          }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
};

export default ScrollRevealText;
