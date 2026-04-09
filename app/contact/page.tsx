import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/ui/contact-form";
import { Badge } from "@/components/ui/badge";
import { COMPANY } from "@/lib/constants";
import { Mail, ExternalLink, Clock, Shield, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Avyukt AIverse®. No sales scripts — just a straightforward conversation about your engineering challenges.",
};

const heroGrad = "linear-gradient(160deg, #0c0a1d 0%, #151030 40%, #1a103a 100%)";
const darkGrad = "linear-gradient(160deg, #0a0818 0%, #110e28 100%)";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: heroGrad }}>
        <div className="hero-shape w-[380px] h-[380px]"
          style={{ background: "#6366f1", opacity: 0.1, top: "-80px", right: "-60px", animation: "float 7s ease-in-out infinite" }} />
        <div className="hero-shape w-[220px] h-[220px]"
          style={{ background: "#34d399", opacity: 0.05, bottom: "-50px", left: "30%", animation: "float-slow 8s ease-in-out infinite" }} />

        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <Badge variant="pulse" className="mb-6">Contact</Badge>
            <h1 className="font-serif font-bold text-white mb-5" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
              Let&apos;s have a{" "}<span className="gradient-text italic">real conversation.</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed">
              Please share your contact details and a brief outline of your business requirement or engineering challenge. We review every submission thoroughly to plan and ensure our very first conversation is highly productive. No sales scripts. No pressure.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative py-20 lg:py-28" style={{ background: darkGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 reveal">
              <h2 className="text-2xl font-serif font-bold text-white mb-8">Send us a message</h2>
              <ContactForm />
            </div>

            <div className="lg:pt-10 flex flex-col gap-5 reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Mail size={15} style={{ color: "#818cf8" }} />
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest" style={{ color: "#818cf8" }}>Direct Email</p>
                </div>
                <div className="flex flex-col gap-2">
                  <a href={`mailto:${COMPANY.email}`} className="text-white/60 hover:text-white transition-colors text-sm break-all">{COMPANY.email}</a>
                  <a href={`mailto:${COMPANY.supportEmail}`} className="text-white/60 hover:text-white transition-colors text-sm break-all">{COMPANY.supportEmail} <span className="text-white/40">(Support)</span></a>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Phone size={15} style={{ color: "#818cf8" }} />
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest" style={{ color: "#818cf8" }}>Phone</p>
                </div>
                <a href={`tel:${COMPANY.phone.replace(/[-+ \s]/g, '')}`} className="text-white/60 hover:text-white transition-colors text-sm">{COMPANY.phone}</a>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={15} style={{ color: "#818cf8" }} />
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest" style={{ color: "#818cf8" }}>Location</p>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  <strong className="block text-white/80 font-medium mb-1 font-sans">{COMPANY.legalName}</strong>
                  {COMPANY.address}
                </p>
              </div>

              {COMPANY.linkedin && (
                <div className="glass-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ExternalLink size={15} style={{ color: "#818cf8" }} />
                    <p className="text-xs font-sans font-semibold uppercase tracking-widest" style={{ color: "#818cf8" }}>LinkedIn</p>
                  </div>
                  <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">Avyukt AIverse®</a>
                </div>
              )}

              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={15} style={{ color: "#818cf8" }} />
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest" style={{ color: "#818cf8" }}>Response Time</p>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">We respond to all enquiries within one business day.</p>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={15} style={{ color: "#818cf8" }} />
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest" style={{ color: "#818cf8" }}>Honest Assessment</p>
                </div>
                <p className="text-sm text-white/45 leading-relaxed">We do not take every enquiry. If we are not the right fit for your situation, we will say so honestly and quickly.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
