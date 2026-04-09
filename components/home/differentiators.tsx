import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Scale, Rocket, TrendingUp, Cpu } from "lucide-react";

const points = [
  {
    Icon: Scale,
    color: "#818cf8",
    bg: "rgba(129,140,248,0.10)",
    borderColor: "rgba(129,140,248,0.15)",
    title: "Judgement over hype",
    description: "We evaluate every AI application on its actual merit. If it adds genuine value, we use it. If it adds noise, we do not.",
  },
  {
    Icon: Rocket,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.10)",
    borderColor: "rgba(245,158,11,0.15)",
    title: "Delivery over demos",
    description: "Our measure of success is what ships and works, not what looks impressive in a slide. We take responsibility for real outcomes.",
  },
  {
    Icon: TrendingUp,
    color: "#34d399",
    bg: "rgba(52,211,153,0.10)",
    borderColor: "rgba(52,211,153,0.15)",
    title: "Long-term orientation",
    description: "We build engagements designed to transfer capability and knowledge, not to create dependency. The goal is your team becoming stronger.",
  },
  {
    Icon: Cpu,
    color: "#c084fc",
    bg: "rgba(192,132,252,0.10)",
    borderColor: "rgba(192,132,252,0.15)",
    title: "AI as enabler, not answer",
    description: "AI is a powerful tool in the hands of skilled practitioners. We never substitute it for engineering judgement or accountability.",
  },
];

export function Differentiators() {
  return (
    <section className="relative py-20 lg:py-28" style={{ background: "linear-gradient(160deg, #0a0818 0%, #110e28 100%)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <Container>
        <SectionHeading eyebrow="Why Avyukt AIverse®" title="Built on clarity, not cleverness." dark />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {points.map((point, i) => (
            <div key={point.title} className="glass-card p-7 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="icon-container w-12 h-12 mb-5"
                style={{ background: point.bg, border: `1px solid ${point.borderColor}` }}>
                <point.Icon size={22} style={{ color: point.color }} />
              </div>
              <h3 className="font-sans font-semibold text-white mb-2.5">{point.title}</h3>
              <p className="text-white/50 leading-relaxed text-[15px]">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
