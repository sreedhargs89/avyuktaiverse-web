import { cn } from "@/lib/utils";

type SectionVariant = "dark" | "darker" | "darkest" | "light" | "light-alt";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: SectionVariant;
  /** @deprecated use variant instead */
  alt?: boolean;
  id?: string;
}

const variants: Record<SectionVariant, string> = {
  dark:        "section-hero",
  darker:      "section-dark",
  darkest:     "section-alt",
  light:       "section-light",
  "light-alt": "section-light-alt",
};

export function Section({ children, className, variant, alt, id }: SectionProps) {
  const resolved = variant ?? (alt ? "light-alt" : "dark");
  return (
    <section
      id={id}
      className={cn("py-20 lg:py-28", variants[resolved], className)}
    >
      {children}
    </section>
  );
}
