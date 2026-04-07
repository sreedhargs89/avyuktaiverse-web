import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-sans font-semibold transition-all duration-200 cursor-pointer",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        "disabled:opacity-50 disabled:pointer-events-none",
        variant === "primary" && "btn-gradient",
        variant === "secondary" && "bg-transparent text-white border border-white/20 hover:border-white/50 hover:bg-white/5 rounded-xl",
        variant === "ghost" && "bg-transparent text-accent border border-transparent hover:text-accent-dark",
        variant === "glow" && "bg-transparent text-accent border border-accent/40 hover:bg-accent/10 hover:border-accent hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] rounded-xl",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
