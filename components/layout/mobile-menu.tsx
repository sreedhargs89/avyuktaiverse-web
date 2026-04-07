"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { NAV_LINKS } from "@/lib/constants";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="p-2 text-white/60 hover:text-white transition-colors"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col"
          style={{ background: "linear-gradient(160deg, #0c0a1d 0%, #110e28 100%)" }}>
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.05]">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              className="p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col gap-1 p-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-lg text-white/60 hover:text-white py-3 border-b border-white/[0.05] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="p-6 mt-auto">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-gradient block w-full text-center rounded-xl py-3.5 font-sans font-semibold"
            >
              <span className="relative z-10">Get in Touch</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
