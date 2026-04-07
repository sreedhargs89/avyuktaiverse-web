import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroClient } from "@/components/home/hero-client";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0c0a1d 0%, #151030 40%, #1a103a 100%)",
        paddingTop: "clamp(6rem, 12vh, 10rem)",
        paddingBottom: "clamp(5rem, 10vh, 8rem)",
      }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.12, mixBlendMode: "screen" }}
          priority
        />
      </div>

      {/* Floating shapes — indigo, violet, cyan */}
      <div className="hero-shape w-[600px] h-[600px]"
        style={{ background: "#6366f1", opacity: 0.12, top: "-200px", right: "-150px", animation: "float 7s ease-in-out infinite" }} />
      <div className="hero-shape w-[400px] h-[400px]"
        style={{ background: "#c084fc", opacity: 0.08, bottom: "-100px", left: "-100px", animation: "float-slow 9s ease-in-out infinite" }} />
      <div className="hero-shape w-[260px] h-[260px]"
        style={{ background: "#22d3ee", opacity: 0.06, top: "45%", left: "60%", animation: "float-reverse 6s ease-in-out infinite" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />

      {/* Particle field (client component) */}
      <HeroClient />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <div className="mb-6">
              <Badge variant="pulse">
                <Sparkles size={12} className="mr-1.5" />
                AI-Enabled Capability Extension
              </Badge>
            </div>

            <h1 className="font-serif font-bold text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(2.6rem, 6.5vw, 4.2rem)" }}>
              Engineering capability,{" "}
              <span className="gradient-text italic">extended intelligently.</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/55 leading-relaxed max-w-xl mb-10">
              We work alongside your engineering teams — as architects, engineers,
              and delivery leads — bringing AI-enabled capability where you need it
              most. No hype. No shortcuts. Just people who know what they are doing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link href="/capabilities"
                className="btn-gradient inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-sans font-semibold">
                <span className="relative z-10 inline-flex items-center gap-2">
                  See Our Capabilities <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/[0.04] text-white border border-white/15 rounded-xl font-sans font-medium hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300">
                Get in Touch
              </Link>
            </div>

            {/* Stat strip — animated */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
              {[
                { value: "3", label: "Engagement Models" },
                { value: "AI", label: "Enabled Delivery" },
                { value: "Trust", label: "First Approach" },
              ].map((stat, i) => (
                <div key={stat.label}
                  className={i > 0 ? "sm:pl-8 sm:ml-8 sm:border-l sm:border-white/10" : ""}>
                  <p className="font-serif text-2xl font-bold text-white stat-glow">{stat.value}</p>
                  <p className="text-xs text-white/35 font-sans uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl"
                style={{
                  background: "radial-gradient(circle, rgba(129,140,248,0.15) 0%, transparent 70%)",
                  transform: "scale(1.3)",
                  filter: "blur(30px)",
                }} />
              <Image
                src="/ai-art.png"
                alt="AI-enabled engineering collaboration"
                width={480}
                height={480}
                className="relative z-10 rounded-2xl"
                style={{ filter: "brightness(0.9) contrast(1.1)" }}
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
