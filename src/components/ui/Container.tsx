import { cn } from '../../utils/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'article' | 'header' | 'footer';
}

export function Container({
  as: Tag = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn('w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
