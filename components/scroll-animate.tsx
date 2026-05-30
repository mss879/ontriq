'use client';

import { useRef, useEffect, useState, ReactNode, CSSProperties } from 'react';

interface ScrollAnimateProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  style?: CSSProperties;
}

/**
 * SEO-safe scroll animation wrapper.
 * 
 * Unlike Framer Motion's initial={{ opacity: 0 }}, this component renders
 * content at FULL OPACITY in the server HTML so Googlebot can see it.
 * Animations only apply after client-side hydration.
 */
export function ScrollAnimate({ children, className = '', delay = 0, direction = 'up', style }: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if already in viewport (above-the-fold content)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      setMounted(true);
      return;
    }

    setMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay * 1000);
          } else {
            setIsVisible(true);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (!mounted || isVisible) return 'translateY(0) translateX(0)';
    switch (direction) {
      case 'left': return 'translateX(-20px)';
      case 'right': return 'translateX(20px)';
      default: return 'translateY(20px)';
    }
  };

  const animStyle: CSSProperties = mounted
    ? {
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
        ...style,
      }
    : { ...style }; // SSR: no opacity/transform styles → content is visible

  return (
    <div ref={ref} className={className} style={animStyle}>
      {children}
    </div>
  );
}
