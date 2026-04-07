import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "muted" | "dark" | "pulse" | "amber" | "green";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
}

const styles: Record<BadgeVariant, string> = {
  default: "bg-accent/10 text-accent border border-accent/20",
  muted:   "bg-white/[0.06] text-white/50 border border-white/10",
  dark:    "bg-white/[0.06] text-white/70 border border-white/15",
  pulse:   "bg-accent/10 text-accent border border-accent/20",
  amber:   "bg-gold/10 text-gold border border-gold/20",
  green:   "bg-green/10 text-green border border-green/20",
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-sans font-semibold uppercase tracking-wider",
        styles[variant],
        variant === "pulse" && "[animation:pulse-badge_2.5s_ease-in-out_infinite]",
        className
      )}
    >
      {children}
    </span>
  );
}
