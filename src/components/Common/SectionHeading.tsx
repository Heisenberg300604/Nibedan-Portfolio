import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading = ({
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) => {
  return (
    <div 
      className={cn(
        'mb-12 space-y-2',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;