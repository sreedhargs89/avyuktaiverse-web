import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { TechTicker } from "@/components/ui/tech-ticker";

const offerings = [
  {
    number: "01",
    badge: "Primary Offering" as const,
    badgeVariant: "default" as const,
    title: "AI-Enabled Talent & Capability Extension",
    description:
      "We embed skilled engineers, architects, and delivery professionals directly into your teams. These are not contractors filling seats — they are problem solvers who understand your context, take ownership of outcomes, and apply AI thoughtfully to improve the quality and pace of what you build.",
    href: "/capabilities#talent-extension",
    accent: "#818cf8",
  },
  {
    number: "02",
    badge: "Supporting Offering" as const,
    badgeVariant: "amber" as const,
    title: "AI Coaching & Adoption",
    description:
      "As a natural extension of our delivery work, we help software engineers, architects, and technical leaders build genuine AI fluency. Applied, practical, and experience-driven — not a training programme.",
    href: "/capabilities#coaching",
    accent: "#f59e0b",
  },
];

export function WhatWeDo() {
  return (
    <section className="relative py-20 lg:py-28" style={{ background: "linear-gradient(160deg, #0c0a1d 0%, #151030 40%, #1a103a 100%)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Practical capability. Thoughtful delivery."
          subtitle="We operate across two areas, with a clear primary focus."
          dark gradient
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {offerings.map((item, i) => (
            <div key={item.title} className="gradient-border-card reveal"
              style={{
                transitionDelay: `${i * 0.12}s`,
                "--glow-color": `${item.accent}40`,
              } as React.CSSProperties}>
              <div className="gradient-border-card-inner p-8 flex flex-col gap-5">
                <div className="flex items-start justify-between">
                  <Badge variant={item.badgeVariant}>{item.badge}</Badge>
                  <span className="font-serif text-5xl font-bold text-white/[0.05] leading-none select-none">{item.number}</span>
                </div>
                <h3 className="text-xl font-sans font-semibold text-white leading-snug">{item.title}</h3>
                <p className="text-white/50 leading-relaxed flex-1 text-[15px]">{item.description}</p>
                <Link href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-accent hover:text-white transition-colors group">
                  Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack ticker */}
        <div className="mt-16 reveal" style={{ transitionDelay: "0.3s" }}>
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-white/20 mb-4 text-center">Technology Landscape</p>
          <TechTicker />
        </div>
      </Container>
    </section>
  );
}
