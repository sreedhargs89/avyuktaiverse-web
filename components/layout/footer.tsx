import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "linear-gradient(160deg, #06040f 0%, #0c0a1d 100%)" }}>
      <div className="glow-line" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/[0.05]">
          <div className="md:col-span-2 reveal">
            <div className="mb-5"><Logo /></div>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm mb-5">{COMPANY.description}</p>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm">{COMPANY.tagline}</p>
          </div>

          <div className="reveal">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-white/25 mb-4">Navigation</p>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-white/40 hover:text-white transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Contact</Link>
            </nav>
          </div>

          <div className="reveal">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-white/25 mb-4">Contact</p>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200">
                <Mail size={14} style={{ color: "#818cf8" }} />
                {COMPANY.email}
              </a>
              <a href={`mailto:${COMPANY.supportEmail}`} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200">
                <Mail size={14} style={{ color: "#818cf8" }} />
                {COMPANY.supportEmail}
              </a>
              {COMPANY.linkedin ? (
                <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200">
                  <ExternalLink size={14} style={{ color: "#818cf8" }} />
                  LinkedIn
                </a>
              ) : null}
              <a href={`tel:${COMPANY.phone.replace(/[-+ \s]/g, '')}`} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200">
                <Phone size={14} style={{ color: "#818cf8" }} />
                {COMPANY.phone}
              </a>
              <span className="flex items-start gap-2 text-sm text-white/30 leading-snug">
                <MapPin size={14} style={{ color: "#818cf8", opacity: 0.5, marginTop: "2px", flexShrink: 0 }} />
                {COMPANY.address}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-white/20">&copy; {year} {COMPANY.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
