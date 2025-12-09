import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down' | 'fade' | 'scale';
  delay?: number;
  className?: string;
  threshold?: number;
}

export const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className,
  threshold = 0.1
}: ScrollRevealProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold, triggerOnce: true });

  const directionClasses = {
    left: 'translate-x-[-50px]',
    right: 'translate-x-[50px]',
    up: 'translate-y-[50px]',
    down: 'translate-y-[-50px]',
    fade: 'opacity-0',
    scale: 'scale-95 opacity-0',
  };

  const baseClasses = directionClasses[direction];

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
          : `${baseClasses} opacity-0`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

