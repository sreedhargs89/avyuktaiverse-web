import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className} aria-label="Avyukt AIverse® — Home">
      <span className="font-serif text-xl font-medium text-white tracking-tight">
        Avyukt
      </span>
      <span className="font-sans text-xl font-light text-accent ml-0.5">
        AIverse
      </span>
    </Link>
  );
}
