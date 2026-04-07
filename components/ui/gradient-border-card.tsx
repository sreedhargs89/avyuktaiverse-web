import { cn } from "@/lib/utils";

interface GradientBorderCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GradientBorderCard({
  children,
  className,
  glowColor = "rgba(99, 102, 241, 0.4)",
}: GradientBorderCardProps) {
  return (
    <div className={cn("gradient-border-card", className)}
      style={{ "--glow-color": glowColor } as React.CSSProperties}>
      <div className="gradient-border-card-inner">
        {children}
      </div>
    </div>
  );
}
