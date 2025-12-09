import { useState, useEffect, useRef, ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

export const LazyImage = ({ src, alt, className, placeholder, ...props }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = imgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && placeholder && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 animate-pulse"
          style={{ backgroundImage: `url(${placeholder})`, backgroundSize: 'cover' }}
        />
      )}
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "transition-opacity duration-500 w-full h-full object-cover",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />
    </div>
  );
};

