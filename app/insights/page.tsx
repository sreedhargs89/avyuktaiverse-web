import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { PenLine } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights",
  description: "Perspectives on AI, engineering, and delivery from Avyukt AIverse. Coming soon.",
};

export default function InsightsPage() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center"
      style={{ background: "linear-gradient(160deg, #0c0a1d 0%, #151030 40%, #1a103a 100%)" }}>
      <div className="hero-shape w-[420px] h-[420px]"
        style={{ background: "#6366f1", opacity: 0.08, top: "-100px", right: "-80px", animation: "float 8s ease-in-out infinite" }} />
      <div className="hero-shape w-[200px] h-[200px]"
        style={{ background: "#c084fc", opacity: 0.05, bottom: "-40px", left: "20%", animation: "float-slow 9s ease-in-out infinite" }} />

      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />

      <Container narrow className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <Badge variant="muted">
            <PenLine size={12} className="mr-1.5" />
            Coming Soon
          </Badge>
        </div>
        <h1 className="font-serif font-bold text-white mb-5" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
          <span className="gradient-text">Insights</span>
        </h1>
        <p className="text-lg text-white/50 leading-relaxed max-w-xl mb-4">
          We are preparing considered perspectives on AI, engineering practice, and delivery. When we have something worth saying, it will appear here.
        </p>
        <p className="text-white/30 leading-relaxed max-w-xl">
          We would rather write less and mean it, than publish frequently and say nothing useful.
        </p>
      </Container>
    </section>
  );
}
