import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/[0.04]"
      style={{ background: "rgba(12, 10, 29, 0.8)" }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-white/50 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="btn-gradient inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-sans font-semibold"
            >
              <span className="relative z-10">Get in Touch</span>
            </Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
