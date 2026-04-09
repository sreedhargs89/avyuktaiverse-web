import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Activity, Terminal, Sparkles, Network } from "lucide-react";
import { ParticleField } from "@/components/ui/particle-field";
import { TypingText } from "@/components/ui/typing-text";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights | Avyukt AIverse®",
  description: "Perspectives on AI, engineering, and delivery from Avyukt AIverse®. Coming soon.",
};

export default function InsightsPage() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-12"
      style={{ background: "linear-gradient(160deg, #050410 0%, #0c0a1d 40%, #110e28 100%)" }}>
      
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.15) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(192,132,252,0.1) 0%, transparent 70%)" }} />

      <div className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)"
        }} />

      <Container className="relative z-10 flex flex-col items-center justify-center w-full">
        
        <div className="text-center mb-10 reveal">
          <Badge variant="pulse" className="mb-6 mx-auto">
            <Sparkles size={12} className="mr-1.5" />
            Coming Soon
          </Badge>
          <h1 className="font-serif font-bold text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            <span className="gradient-text italic">Insights</span>
          </h1>
          <p className="text-lg text-white/40 max-w-xl mx-auto">
            Deep perspectives on the intersection of AI, engineering practice, and reliable delivery.
          </p>
        </div>

        {/* The Interactive Terminal UI Card */}
        <div className="w-full max-w-3xl reveal" style={{ transitionDelay: "0.2s" }}>
          <div className="glass-card overflow-hidden shadow-2xl relative group" 
               style={{ 
                 boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.15)", 
                 border: "1px solid rgba(129, 140, 248, 0.2)",
                 transform: "translateY(0) scale(1)",
                 transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
               }}>
            
            {/* Terminal Header */}
            <div className="bg-black/40 backdrop-blur-md px-4 py-3 flex items-center border-b border-white/5 relative z-20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              </div>
              <div className="mx-auto flex items-center gap-2 text-white/30 text-xs font-mono tracking-widest uppercase">
                <Terminal size={12} /> root@avyukt-aiverse:~/insights
              </div>
            </div>

            {/* Glowing Accent Line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent absolute z-10 top-[45px] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Terminal Body */}
            <div className="p-8 md:p-12 relative z-10 bg-[#070513]/60 backdrop-blur-lg">
              <div className="font-mono text-sm md:text-base leading-relaxed mb-8">
                <div className="text-emerald-400 mb-3 flex items-center gap-2">
                  <span className="text-emerald-400/50">❯</span> ./generate_insights.sh --mode=deep-analysis
                </div>
                <div className="text-indigo-300/80 mb-6 flex items-center gap-2 h-6">
                  <Activity size={14} className="animate-pulse" />
                  <TypingText 
                    phrases={[
                      "Analyzing engineering bottlenecks...", 
                      "Synthesizing architecture patterns...", 
                      "Compiling AI adoption strategies...",
                      "Evaluating cloud ecosystems...",
                      "Awaiting final review protocol..."
                    ]} 
                    typingSpeed={40}
                    deletingSpeed={20}
                    pauseDuration={2500}
                  />
                </div>
              </div>
              
              {/* Core Content */}
              <div className="space-y-5 text-white/50 border-l-2 border-indigo-500/30 pl-5 mb-10 relative">
                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-indigo-500/10 border border-indigo-500/50 rounded flex items-center justify-center">
                  <Network size={10} className="text-indigo-400" />
                </div>
                <p className="font-sans text-lg text-white/80 pt-1">
                  We are preparing strictly considered perspectives for technology leaders.
                </p>
                <p className="font-sans text-sm md:text-base leading-relaxed">
                  When we have something genuinely worth saying, it will compile and execute here. We would rather write less and mean it, than publish frequently and say nothing useful. Our upcoming articles will bridge the gap between theoretical AI models and practical, grounded engineering delivery.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-white/5">
                <Link href="/contact" className="btn-gradient px-8 py-3.5 rounded-xl font-sans font-semibold text-sm inline-flex items-center justify-center gap-2 hover:scale-[1.02] shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-200">
                  Notify me when live
                </Link>
                <Link href="/capabilities" className="px-8 py-3.5 rounded-xl font-sans font-semibold text-sm inline-flex items-center justify-center text-white/50 border border-white/10 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-200">
                  View our capabilities
                </Link>
              </div>

            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
