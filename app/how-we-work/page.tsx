import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/home/cta-banner";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work",
  description: "Our approach: understand the problem first, align on outcomes, deliver with ownership, and evolve honestly.",
};

const heroGrad = "var(--gradient-hero)";
const darkGrad = "var(--gradient-dark)";

const steps = [
  { number: "01", color: "#CCFF00", bg: "rgba(204,255,0,0.10)", title: "Understand", description: "We take time to understand your context, constraints, and actual challenge before we suggest anything. This means asking questions that may feel slow at first, but produce clarity that saves significant time later. We do not start with a solution." },
  { number: "02", color: "#f59e0b", bg: "rgba(245,158,11,0.08)", title: "Align", description: "We agree on what good looks like: outcomes, ways of working, communication rhythms, and how we will measure progress together. Alignment is not a formality — it is the foundation that makes everything else work." },
  { number: "03", color: "#34d399", bg: "rgba(52,211,153,0.08)", title: "Deliver", description: "We show up with ownership. We integrate with your teams, adapt to your environment, and deliver with care. If something is not working, we say so early. We do not wait for a retrospective to surface a problem." },
  { number: "04", color: "#7EA5FF", bg: "rgba(126,165,255,0.10)", title: "Evolve", description: "We stay honest about what is working and what is not. We adjust without drama. Engagements that earn trust tend to grow — not because we push for it, but because the work demonstrates value over time." },
];

const expectations = [
  "Transparent communication, including when things are difficult",
  "Engineers who take responsibility, not just direction",
  "No vanity metrics or status theatre",
  "Honest assessments of risk, scope, and timeline",
  "A long-term orientation, even in short engagements",
  "Knowledge transfer built into how we work, not added at the end",
];

export default function HowWeWorkPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: heroGrad }}>
        <div className="hero-shape w-[400px] h-[400px]"
          style={{ background: "#1B3A4B", opacity: 0.1, top: "-80px", right: "-60px", animation: "float 8s ease-in-out infinite" }} />
        <div className="hero-shape w-[220px] h-[220px]"
          style={{ background: "#34d399", opacity: 0.05, bottom: "-50px", left: "25%", animation: "float-slow 7s ease-in-out infinite" }} />

        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <Badge variant="pulse" className="mb-6">How We Work</Badge>
            <h1 className="font-serif font-bold text-white mb-5" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
              We start with the{" "}<span className="gradient-text italic">problem</span>, not the proposal.
            </h1>
            <p className="text-lg text-white/50 leading-relaxed">
              Our operating model is simple by design. No proprietary frameworks, no engagement theatre. Just a clear and honest way of working that produces better outcomes.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative py-20 lg:py-28" style={{ background: darkGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <SectionHeading eyebrow="Our Process" title="Four things we do, in order." dark />

          {/* Timeline layout */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-[39px] top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(180deg, rgba(204,255,0,0.40) 0%, rgba(126,165,255,0.20) 50%, rgba(74,222,128,0.10) 100%)" }} />

            <div className="flex flex-col gap-8">
              {steps.map((step, i) => (
                <div key={step.number} className="flex gap-6 lg:gap-8 reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{ background: step.bg, border: `1px solid ${step.color}25` }}>
                      <span className="font-serif text-xl font-bold" style={{ color: step.color }}>{step.number}</span>
                    </div>
                  </div>
                  <div className="glass-card p-6 lg:p-8 flex-1">
                    <h3 className="font-sans font-semibold text-white text-lg mb-3">{step.title}</h3>
                    <p className="text-white/50 leading-relaxed text-[15px]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-20 lg:py-28" style={{ background: heroGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <div className="max-w-3xl">
            <SectionHeading eyebrow="What to Expect" title="What working with us actually looks like." dark />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expectations.map((item, i) => (
                <div key={item} className="glass-card p-5 flex items-start gap-3 reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#CCFF00", opacity: 0.6 }} />
                  <span className="text-white/55 leading-relaxed text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner title="Ready to start a conversation?" subtitle="We would rather have an honest thirty-minute conversation than spend three weeks on a proposal that misses the point." />
    </>
  );
}
