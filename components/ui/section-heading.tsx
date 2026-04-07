import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
  gradient?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
  dark,
  gradient,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 reveal", center && "text-center", className)}>
      {eyebrow && (
        <p className={cn(
          "text-xs font-sans font-semibold uppercase tracking-widest mb-3",
          "text-accent"
        )}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn(
        "text-3xl lg:text-4xl font-serif font-medium",
        gradient ? "gradient-text" : dark ? "text-white" : "text-brand"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg max-w-2xl",
          dark ? "text-white/45" : "text-body-text"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
