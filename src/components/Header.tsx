"use client";

import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { BUSINESS, WA_DEFAULT } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  ["Results", "#results"],
  ["Services", "#services"],
  ["Why us", "#trust"],
  ["Process", "#process"],
  ["Contact", "#contact"],
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-ink text-concrete shadow-lg"
          : "bg-transparent text-concrete"
      )}
    >
      <div className="mx-auto flex h-16 max-w-wrap items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" className="font-display text-xl uppercase tracking-tight md:text-2xl">
          Jet Wash <span className="text-jet">Team</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs uppercase tracking-[0.16em] opacity-80 transition-opacity hover:opacity-100"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${BUSINESS.phoneE164}`}
            className="hidden items-center gap-2 font-mono text-sm md:flex"
            aria-label={`Call ${BUSINESS.phoneDisplay}`}
          >
            <Phone size={15} className="text-jet" />
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-amber px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:bg-[#ffb71f] sm:block"
          >
            Free quote
          </a>
          <button
            className="p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-concrete/10 bg-ink px-5 pb-8 pt-4 lg:hidden"
          aria-label="Mobile"
        >
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b border-concrete/10 py-4 font-display text-2xl uppercase"
            >
              {label}
            </a>
          ))}
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block bg-amber py-4 text-center font-mono text-sm font-medium uppercase tracking-[0.12em] text-ink"
          >
            Get a free quote
          </a>
        </nav>
      )}
    </header>
  );
}
