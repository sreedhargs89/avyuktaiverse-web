import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden flex-1 flex items-center py-32"
      style={{ background: "var(--gradient-hero)" }}>
      <div className="hero-shape w-[300px] h-[300px]"
        style={{ background: "#1B3A4B", opacity: 0.18, top: "-80px", right: "-60px", animation: "float 8s ease-in-out infinite" }} />
      <Container narrow className="relative z-10">
        <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-4" style={{ color: "#CCFF00" }}>404</p>
        <h1 className="text-4xl font-serif font-bold text-white mb-4">Page not found.</h1>
        <p className="text-white/45 leading-relaxed mb-8">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="btn-gradient inline-flex items-center px-6 py-3 rounded-xl font-sans font-semibold text-sm">
          <span className="relative z-10">Back to home</span>
        </Link>
      </Container>
    </section>
  );
}
