import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-baseline group ${className ?? ""}`}
      aria-label="AvyuktAIverse® — Home"
    >
      <span className="font-serif text-xl font-medium text-white tracking-tight transition-colors duration-300 group-hover:text-[var(--color-accent,#CCFF00)]">
        Avyukt
      </span>
      <span className="font-sans text-xl font-light text-accent tracking-tight">
        AIverse
      </span>
      <span
        aria-hidden="true"
        className="font-sans text-[9px] font-medium text-accent/70 ml-0.5 -translate-y-2 select-none"
      >
        ®
      </span>
    </Link>
  );
}
