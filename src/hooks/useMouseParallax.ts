import { useState, useEffect, useCallback } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface ParallaxValues {
  x: number;
  y: number;
  rotateX: number;
  rotateY: number;
}

export const useMouseParallax = (intensity: number = 1) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [parallax, setParallax] = useState<ParallaxValues>({ x: 0, y: 0, rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Calculate mouse position relative to viewport center (-1 to 1)
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    
    setMousePosition({ x, y });
    
    // Apply intensity multiplier for parallax effect
    setParallax({
      x: x * 30 * intensity,
      y: y * 30 * intensity,
      rotateX: y * 10 * intensity,
      rotateY: -x * 10 * intensity,
    });
  }, [intensity]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return { mousePosition, parallax };
};

export default useMouseParallax;
