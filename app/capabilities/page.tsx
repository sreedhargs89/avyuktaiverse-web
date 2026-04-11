import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/home/cta-banner";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Advanced engineering, AI/Cloud integration, and strategic advisory. Building adaptable, high-ROI systems.",
};

const heroGrad = "var(--gradient-hero)";
const darkGrad = "var(--gradient-dark)";

const engineeringCapabilities = [
  { label: "Refactor & Re-architect", desc: "Modernize legacy systems using cloud-native services. We transform rigid monolithic architectures into scalable, AI-ready microservices.", color: "#CCFF00" },
  { label: "Product Development", desc: "From concept to execution. We engineer reliable new products and services heavily integrated with modern data streams and AI workflows.", color: "#7EA5FF" },
  { label: "Flawless Integration", desc: "A sound strategy depends on execution. We orchestrate the integration of complex applications, APIs, and storage between on-premises and cloud environments.", color: "#34d399" },
];

const teamStrengths = [
  { label: "Advanced Engineers", desc: "Professionals who possess not just specialized knowledge, but the ability to grasp front-line industry needs and respond efficiently.", color: "#CCFF00" },
  { label: "Extensive Solutions", desc: "Providing multi-domain support across finance, technology, manufacturing, and logistics. Our adaptable expertise spans modern cloud infrastructure, robotics, and AI.", color: "#7EA5FF" },
  { label: "Strategic Partnerships", desc: "We act as your true technology partner, delivering services rooted in strong corporate ethics, reliability, and human-to-human connection.", color: "#34d399" },
];

export default function CapabilitiesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: heroGrad }}>
        <div className="hero-shape w-[420px] h-[420px]"
          style={{ background: "#1B3A4B", opacity: 0.1, top: "-100px", right: "-80px", animation: "float 7s ease-in-out infinite" }} />
        <div className="hero-shape w-[260px] h-[260px]"
          style={{ background: "#7EA5FF", opacity: 0.06, bottom: "-60px", left: "20%", animation: "float-slow 9s ease-in-out infinite" }} />

        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="pulse" className="mb-6">Capabilities</Badge>
              <h1 className="font-serif font-bold text-white mb-5" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
                Engineering for a{" "}<span className="gradient-text italic">shifting landscape.</span>
              </h1>
              <p className="text-lg text-white/50 leading-relaxed max-w-lg">
                We deliver advanced engineering, seamless cloud integration, and the strategic foresight needed to keep your business adaptable and highly competitive.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl"
                  style={{ background: "radial-gradient(circle, rgba(204,255,0,0.10) 0%, transparent 70%)", transform: "scale(1.2)", filter: "blur(25px)" }} />
                <Image src="/section-bg.png" alt="" width={400} height={400} loading="eager" className="relative rounded-2xl" style={{ filter: "brightness(0.85) contrast(1.1)", opacity: 0.7 }} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Engineering & Integration Section */}
      <section className="relative py-20 lg:py-28" id="engineering" style={{ background: darkGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <div className="max-w-3xl mb-12">
            <Badge variant="default" className="mb-6">Core Offering</Badge>
            <SectionHeading title="Engineering & Integration" subtitle="Reliable capability. Thoughtful execution." dark />
            <div className="space-y-5 text-white/55 leading-relaxed">
              <p>With deep cloud engineering experience and strong alliance partnerships, we steer clients through complex IT transformations. We offer robust engineering capabilities specifically designed to handle the scale and velocity of modern AI tools.</p>
              <p>Because your AI application is only as good as the infrastructure beneath it, we emphasize flawless integration between legacy on-premises architecture, new cloud services, and next-generation data storage.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {engineeringCapabilities.map((item, i) => (
              <div key={item.label} className="glass-card p-6 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-8 h-1 rounded-full mb-5" style={{ background: item.color }} />
                <h4 className="font-sans font-semibold text-white mb-3 text-sm">{item.label}</h4>
                <p className="text-[14px] text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pillars / Philosophy Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden" id="philosophy" style={{ background: heroGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <Badge variant="amber" className="mb-6">Architecture Principles</Badge>
              <h2 className="text-3xl lg:text-4xl font-serif font-medium text-white mb-6 leading-tight">
                Built to Adapt, <br /><span className="gradient-text italic">Governed for Value.</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-8 text-lg">
                Traditionally, systems were built to last. But business is undergoing continuous transformation—and IT must respond fluidly.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 size={20} className="text-amber-400 opacity-80" /></div>
                  <div>
                    <h4 className="text-white font-sans font-semibold mb-2">Build for Adaptability</h4>
                    <p className="text-white/45 text-sm leading-relaxed">We promote loose coupling in your cloud and AI choices. Avoiding vendor lock-in ensures your infrastructure remains agile enough to pivot during unexpected market changes or global shifts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 size={20} className="text-emerald-400 opacity-80" /></div>
                  <div>
                    <h4 className="text-white font-sans font-semibold mb-2">Cost & Compliance Forensics</h4>
                    <p className="text-white/45 text-sm leading-relaxed">Adopting cloud and AI services is primarily driven by ease-of-use and ROI. We thoroughly analyze long-term predictive costs (TCO) and mandate strict governance and security boundaries before writing a single line of code.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 size={20} className="text-[#CCFF00] opacity-80" /></div>
                  <div>
                    <h4 className="text-white font-sans font-semibold mb-2">AI Center of Excellence (AICoE)</h4>
                    <p className="text-white/45 text-sm leading-relaxed">The evolution of technology demands a team of strategists from IT, business, and vendor sides. We help you establish an AICoE—a long-term operational framework ensuring you move continuously from driving costs to driving business value.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal hidden lg:block" style={{ transitionDelay: "0.2s" }}>
              <div className="gradient-border-card">
                <div className="gradient-border-card-inner p-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center relative shadow-[0_0_40px_rgba(204,255,0,0.22)]" style={{ background: "rgba(204,255,0,0.08)", border: "1px solid rgba(204,255,0,0.25)" }}>
                    <Image src="/ai-art.png" alt="Excellence" width={80} height={80} className="rounded-full opacity-80" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4">The Best-Fitting IT Solution</h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    Our process involves deep consultation, pragmatic design, strict quality assurance, and flawless execution to yield a solution uniquely fitted to your business objective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Team / Professionalism Section */}
      <section className="relative py-20 lg:py-28 border-t border-white/[0.05]" id="team" style={{ background: darkGrad }}>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <Badge variant="muted" className="mb-6">The AvyuktAIverse Difference</Badge>
            <h2 className="text-3xl lg:text-4xl font-serif font-medium text-white mb-6">
              Experienced. Professional. <span className="gradient-text italic">Partners.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              We face our customers&apos; management and technology issues head-on. We are more than just contractors; we are partners providing solutions based on human capability and precise technological application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamStrengths.map((item, i) => (
              <div key={item.label} className="glass-card p-8 reveal flex flex-col text-center items-center" style={{ transitionDelay: `${i * 0.15}s` }}>
                 <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ background: `rgba(255,255,255,0.03)`, border: `1px solid ${item.color}40` }}>
                    <div className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: item.color, color: item.color }} />
                 </div>
                 <h4 className="font-sans font-semibold text-white mb-3">{item.label}</h4>
                 <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner title="Let's talk about your situation." subtitle="Contact our specialized team today to learn how our engineering capability and strategic alignment can drive your business forward." />
    </>
  );
}
