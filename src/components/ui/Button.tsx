import { cn } from '../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-primary-foreground hover:brightness-110 active:brightness-95 shadow-[0_8px_22px_-8px_color-mix(in_oklab,var(--color-primary)_55%,transparent)] hover:shadow-[0_8px_32px_-6px_color-mix(in_oklab,var(--color-primary)_70%,transparent)]',
  secondary:
    'bg-secondary text-secondary-foreground hover:bg-[oklch(20%_0.01_40)]',
  ghost:
    'text-foreground hover:bg-muted',
  outline:
    'border border-border bg-transparent text-foreground hover:bg-muted',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer';

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], fullWidth && 'w-full', className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
