import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'premium';
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  const styles = {
    default: 'bg-primary/15 text-primary border border-primary/20',
    outline: 'border border-border text-muted-foreground bg-transparent',
    premium:
      'bg-gradient-to-r from-primary/20 to-accent/20 text-accent border border-primary/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
