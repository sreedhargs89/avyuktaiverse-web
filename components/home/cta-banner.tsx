import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ArrowRight, Sparkles } from "lucide-react";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  label?: string;
  href?: string;
}

export function CtaBanner({
  title = "Have a challenge worth solving?",
  subtitle = "We do not use sales scripts. If the problem is real and the conversation is honest, we would like to hear from you.",
  label = "Start a conversation",
  href = "/contact",
}: CtaBannerProps) {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "linear-gradient(160deg, #0c0a1d 0%, #151030 40%, #1a103a 100%)" }}
    >
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)" }} />

      <div className="hero-shape w-[500px] h-[500px]"
        style={{ background: "#6366f1", opacity: 0.1, bottom: "-200px", right: "-150px", animation: "float-slow 10s ease-in-out infinite" }} />
      <div className="hero-shape w-[280px] h-[280px]"
        style={{ background: "#c084fc", opacity: 0.07, top: "-80px", left: "30%", animation: "float 8s ease-in-out infinite" }} />

      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />

      <Container className="relative z-10">
        <div className="max-w-2xl reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: "rgba(129,140,248,0.08)", border: "1px solid rgba(129,140,248,0.15)" }}>
            <Sparkles size={14} style={{ color: "#818cf8" }} />
            <span className="text-xs font-sans font-semibold uppercase tracking-wider" style={{ color: "#818cf8" }}>Ready to talk?</span>
          </div>

          <h2 className="font-serif font-bold text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
            {title}
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">{subtitle}</p>
          <Link href={href}
            className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl font-sans font-semibold">
            <span className="relative z-10 inline-flex items-center gap-2">
              {label} <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
