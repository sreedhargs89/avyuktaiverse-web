import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "AI-enabled talent extension, coaching, and adoption for engineering teams. Grounded, practical, and outcome-focused.",
};

const heroGrad = "linear-gradient(160deg, #0c0a1d 0%, #151030 40%, #1a103a 100%)";
const darkGrad = "linear-gradient(160deg, #0a0818 0%, #110e28 100%)";

const roles = [
  { label: "Engineers & Developers", desc: "Experienced full-stack and backend engineers who ship working software and take ownership of what they build.", color: "#818cf8" },
  { label: "Solution Architects", desc: "Architects who design for real constraints — not theoretical ideals — and communicate clearly with both engineering and business teams.", color: "#c084fc" },
  { label: "Delivery Leaders", desc: "Delivery professionals who keep projects honest, teams aligned, and stakeholders informed — without bureaucracy.", color: "#34d399" },
];

export default function CapabilitiesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: heroGrad }}>
        <div className="hero-shape w-[420px] h-[420px]"
          style={{ background: "#6366f1", opacity: 0.1, top: "-100px", right: "-80px", animation: "float 7s ease-in-out infinite" }} />
        <div className="hero-shape w-[260px] h-[260px]"
          style={{ background: "#c084fc", opacity: 0.06, bottom: "-60px", left: "20%", animation: "float-slow 9s ease-in-out infinite" }} />

        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="pulse" className="mb-6">Capabilities</Badge>
              <h1 className="font-serif font-bold text-white mb-5" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
                What we bring to{" "}<span className="gradient-text italic">your teams.</span>
              </h1>
              <p className="text-lg text-white/50 leading-relaxed">
                Capabilities at Avyukt AIverse are defined by what we can actually do — and the outcomes we take responsibility for.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl"
                  style={{ background: "radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 70%)", transform: "scale(1.2)", filter: "blur(25px)" }} />
                <Image src="/section-bg.png" alt="" width={400} height={400} loading="eager" className="relative rounded-2xl" style={{ filter: "brightness(0.85) contrast(1.1)", opacity: 0.7 }} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-20 lg:py-28" id="talent-extension" style={{ background: darkGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <div className="max-w-3xl">
            <Badge variant="default" className="mb-6">Primary Offering</Badge>
            <SectionHeading title="AI-Enabled Talent & Capability Extension" subtitle="We work inside your teams, not alongside them as observers." dark />
            <div className="space-y-5 text-white/55 leading-relaxed mb-12">
              <p>We embed skilled engineers, architects, and delivery professionals directly into your teams. These are not contractors filling seats. They are problem solvers who learn your context, take ownership of outcomes, and apply AI thoughtfully to improve the quality and pace of what you build.</p>
              <p>Each engagement begins with understanding — not with proposals. We spend time learning your architecture, your constraints, your team dynamics, and what success actually looks like for your organisation. Only then do we commit to how we can help.</p>
              <p>AI enters the picture where it genuinely improves delivery: in code review, in design verification, in automated quality checks, in surfacing risks early. It does not replace engineering judgement. It extends the capacity of engineers who already have good judgement.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {roles.map((item, i) => (
                <div key={item.label} className="glass-card p-6 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="w-8 h-1 rounded-full mb-4" style={{ background: item.color }} />
                  <h4 className="font-sans font-semibold text-white mb-2 text-sm">{item.label}</h4>
                  <p className="text-[13px] text-white/45 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-20 lg:py-28" id="coaching" style={{ background: heroGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-6">Supporting Offering</Badge>
            <SectionHeading title="AI Coaching & Adoption" subtitle="Helping technical professionals work better with AI — in the context of real work." dark />
            <div className="space-y-5 text-white/55 leading-relaxed">
              <p>As an extension of our delivery work, we help software engineers, architects, and technical leaders build genuine AI fluency. Not through certification programmes or generic workshops. Through applied coaching, grounded in the work your teams are actually doing.</p>
              <p>AI fluency is not about knowing the tools. It is about knowing when to use them, when not to, how to verify their outputs, and how to maintain engineering integrity while benefiting from what AI offers. That takes experience and honest guidance — not slides.</p>
              <p>This offering exists because we encounter it naturally in our delivery engagements. When we see teams struggling with AI adoption, we help. When we see engineers unsure about where AI fits into their practice, we work alongside them to figure it out.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-16 lg:py-20" style={{ background: darkGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <div className="max-w-2xl gradient-border-card reveal">
            <div className="gradient-border-card-inner p-8">
              <Badge variant="muted" className="mb-5">Future Direction</Badge>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">Fully Managed Solutions</h2>
              <p className="text-white/45 leading-relaxed">Over time, the patterns and insights we gain from real delivery engagements will inform purpose-built solutions for recurring problems we encounter in the field. This is a future direction — not a current offering. When it arrives, it will be grounded in actual experience, not speculation.</p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner title="Let's talk about your situation." subtitle="We start every conversation by listening. Tell us what you are dealing with, and we will tell you honestly whether we can help." />
    </>
  );
}
