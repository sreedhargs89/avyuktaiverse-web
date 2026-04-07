import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { COMPANY, FOUNDER } from "@/lib/constants";
import { Lightbulb, Rocket, Shield, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "The story, people, and values behind Avyukt AIverse — built for durability, not speed.",
};

const heroGrad = "linear-gradient(160deg, #0c0a1d 0%, #151030 40%, #1a103a 100%)";
const darkGrad = "linear-gradient(160deg, #0a0818 0%, #110e28 100%)";

const values = [
  { Icon: Lightbulb, color: "#818cf8", bg: "rgba(129,140,248,0.08)", borderColor: "rgba(129,140,248,0.15)", title: "Clarity over cleverness", description: "We say what we mean. In our work, in our communication, and in how we represent what AI can and cannot do." },
  { Icon: Rocket, color: "#f59e0b", bg: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.15)", title: "Delivery over demos", description: "We measure our worth by what actually ships and works in production — not by what looks impressive in a presentation." },
  { Icon: Shield, color: "#34d399", bg: "rgba(52,211,153,0.08)", borderColor: "rgba(52,211,153,0.15)", title: "Responsibility with technology", description: "AI is powerful. Applying it carelessly causes real harm. We take that seriously, and it shapes every engagement decision we make." },
  { Icon: Clock, color: "#c084fc", bg: "rgba(192,132,252,0.08)", borderColor: "rgba(192,132,252,0.15)", title: "Long-term thinking", description: "We are building a company designed to last. That means making decisions we can stand behind a decade from now, not just this quarter." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: heroGrad }}>
        <div className="hero-shape w-[380px] h-[380px]"
          style={{ background: "#c084fc", opacity: 0.08, top: "-80px", right: "-60px", animation: "float-slow 9s ease-in-out infinite" }} />
        <div className="hero-shape w-[260px] h-[260px]"
          style={{ background: "#6366f1", opacity: 0.07, bottom: "-60px", left: "30%", animation: "float 7s ease-in-out infinite" }} />

        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <Badge variant="pulse" className="mb-6">About</Badge>
            <h1 className="font-serif font-bold text-white mb-5" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
              Built for{" "}<span className="gradient-text italic">durability</span>, not speed.
            </h1>
            <p className="text-lg text-white/50 leading-relaxed">
              We are a small company. We intend to grow carefully, with the kind of deliberate judgement we ask of our engineers.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative py-20 lg:py-28" style={{ background: darkGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container narrow>
          <SectionHeading eyebrow="Our Story" title="Why Avyukt AIverse exists." dark />
          <div className="space-y-5 text-white/55 leading-relaxed text-lg">
            <p>Avyukt AIverse was started because we saw a consistent gap between what AI promises and what organisations actually need.</p>
            <p>The noise around AI is significant. Most of it is not useful to engineering leaders trying to ship reliable, valuable software under real constraints. There is a great deal of enthusiasm, a great deal of tooling, and not nearly enough experienced judgement about where AI actually belongs — and where it does not.</p>
            <p>We built this company to be useful in the places where hype is not enough. Where the problem is complex, the stakes are real, and the people involved need to actually know what they are doing.</p>
            <p>Our reputation will be built on the quality of our work, not the size of our marketing. That is a conscious choice, and we are comfortable with the pace it implies.</p>
          </div>
        </Container>
      </section>

      <section className="relative py-20 lg:py-28" style={{ background: heroGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <SectionHeading eyebrow="Our Values" title="What we actually believe." subtitle="These are not aspirations. They are filters we use to make decisions." dark />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value, i) => (
              <div key={value.title} className="glass-card p-7 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="icon-container w-12 h-12 mb-5"
                  style={{ background: value.bg, border: `1px solid ${value.borderColor}` }}>
                  <value.Icon size={22} style={{ color: value.color }} />
                </div>
                <h3 className="font-sans font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/45 leading-relaxed text-[15px]">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-20 lg:py-28" style={{ background: darkGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <SectionHeading eyebrow="The Team" title="Who we are." dark />
          <div className="max-w-lg gradient-border-card reveal">
            <div className="gradient-border-card-inner p-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.2)" }}>
                  <User size={22} style={{ color: "#818cf8" }} />
                </div>
                <div>
                  <p className="font-sans font-semibold text-white text-base">{FOUNDER.name}</p>
                  <p className="text-sm mb-3 gradient-text font-medium">{FOUNDER.role}</p>
                  <p className="text-white/50 leading-relaxed text-[15px]">{FOUNDER.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-16" style={{ background: heroGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container narrow>
          <p className="text-xs font-sans font-semibold uppercase tracking-widest mb-6" style={{ color: "#818cf8" }}>Company Details</p>
          <dl className="space-y-3 text-sm">
            {[["Legal name", COMPANY.legalName], ["Country", "India"], ["Website", COMPANY.domain], ["Contact", COMPANY.email]].map(([label, value]) => (
              <div key={label} className="flex gap-4">
                <dt className="w-28 text-white/25 flex-shrink-0">{label}</dt>
                <dd className="text-white/70 font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
