import { cn } from '../../utils/cn';

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  tag?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}

export function SectionTitle({
  tag,
  title,
  description,
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {tag && (
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
