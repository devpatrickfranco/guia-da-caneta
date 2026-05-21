import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated';
  hover?: boolean;
}

const variantStyles = {
  default: 'bg-card border border-border',
  glass: 'card-glass',
  elevated: 'bg-surface-elevated border border-border shadow-lg',
};

export function Card({
  variant = 'default',
  hover = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 sm:p-8 transition-all duration-300',
        variantStyles[variant],
        hover && 'hover:translate-y-[-2px]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardIcon({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl mb-4',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <h3 className={cn('text-lg sm:text-xl font-bold text-card-foreground mb-2', className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cn('text-muted-foreground leading-relaxed text-sm sm:text-base', className)}>
      {children}
    </p>
  );
}
