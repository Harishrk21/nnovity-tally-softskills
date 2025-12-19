import { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxSection = ({ children, speed = 0.5, className = '' }: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate parallax offset
      const yPos = -(scrolled - elementTop + windowHeight) * speed;
      element.style.transform = `translateY(${yPos}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`parallax ${className}`} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

