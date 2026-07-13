import { useEffect, useRef, useState, Children, cloneElement, isValidElement } from 'react';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

function useInView<T extends HTMLElement>(margin = '-40px') {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // once: true
        }
      },
      { rootMargin: margin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [margin]);

  return { ref, isVisible };
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className,
  distance = 40,
}: RevealProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  const offset =
    direction === 'up'
      ? { x: '0', y: `${distance}px` }
      : direction === 'down'
      ? { x: '0', y: `-${distance}px` }
      : direction === 'left'
      ? { x: `${distance}px`, y: '0' }
      : { x: `-${distance}px`, y: '0' };

  return (
    <div
      ref={ref}
      className={`reveal${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={
        {
          '--reveal-x': offset.x,
          '--reveal-y': offset.y,
          '--reveal-duration': `${duration}s`,
          '--reveal-delay': `${delay}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const staggerStep = 0.08;

  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, index) => {
        if (!isValidElement(child)) return child;
        const itemDelay = delay + index * staggerStep;
        return cloneElement(child as React.ReactElement<{ __isVisible?: boolean; __delay?: number }>, {
          __isVisible: isVisible,
          __delay: itemDelay,
        });
      })}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  __isVisible,
  __delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  __isVisible?: boolean;
  __delay?: number;
}) {
  return (
    <div
      className={`reveal${__isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={
        {
          '--reveal-y': '24px',
          '--reveal-duration': '0.5s',
          '--reveal-delay': `${__delay}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
