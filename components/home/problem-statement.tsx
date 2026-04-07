import { Container } from "@/components/layout/container";

export function ProblemStatement() {
  return (
    <section className="relative py-20 lg:py-28" style={{ background: "linear-gradient(160deg, #0a0818 0%, #110e28 100%)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <Container narrow>
        <p className="text-xs font-sans font-semibold uppercase tracking-widest mb-8 reveal" style={{ color: "#818cf8" }}>
          The Challenge
        </p>

        <div className="reveal" style={{ transitionDelay: "0.1s" }}>
          <blockquote className="relative pl-8 mb-8" style={{ borderLeft: "2px solid rgba(129,140,248,0.4)" }}>
            <div className="absolute -left-3 -top-2 text-5xl font-serif opacity-10" style={{ color: "#818cf8" }}>&ldquo;</div>
            <p className="font-serif text-2xl lg:text-3xl text-white/90 leading-snug font-bold">
              Finding engineers who combine deep technical skill with thoughtful
              AI adoption is harder than it should be.
            </p>
          </blockquote>
        </div>

        <div className="pl-8 space-y-4 reveal" style={{ transitionDelay: "0.2s", borderLeft: "2px solid rgba(255,255,255,0.06)" }}>
          <p className="text-lg text-white/50 leading-relaxed">
            Most of what is on the market is either pure headcount with no real
            delivery ownership, or AI tooling presented as a substitute for
            engineering judgement.
          </p>
          <p className="text-lg text-white/50 leading-relaxed">
            Most organisations do not need another vendor. They need people who
            understand the problem, take ownership of outcomes, and apply AI where
            it genuinely helps — not everywhere, not automatically, and certainly
            not because it is trending.
          </p>
          <p className="text-xl font-semibold mt-6 gradient-text">
            That is what we do.
          </p>
        </div>
      </Container>
    </section>
  );
}
