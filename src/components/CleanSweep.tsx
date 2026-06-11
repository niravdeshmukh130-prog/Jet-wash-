"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SIGNATURE SECTION — the scroll-driven clean.
 * A full-viewport grimy surface is pinned; as you scroll, a lance line
 * sweeps across and the clean surface is revealed behind it via clip-path.
 * GPU-only properties (clip-path, transform, opacity). Reduced-motion users
 * see a static side-by-side comparison instead.
 */
export default function CleanSweep() {
  const wrap = useRef<HTMLDivElement>(null);
  const clean = useRef<HTMLDivElement>(null);
  const lance = useRef<HTMLDivElement>(null);
  const pct = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const state = { p: 0 };
      gsap.to(state, {
        p: 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: "+=160%",
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
        onUpdate: () => {
          const p = state.p;
          const edge = -15 + p * 130; // -15% → 115%
          if (clean.current) {
            clean.current.style.clipPath = `polygon(0 0, ${edge}% 0, ${edge - 12}% 100%, 0 100%)`;
          }
          if (lance.current) {
            lance.current.style.left = `${edge - 6}%`;
            lance.current.style.opacity = p > 0.02 && p < 0.98 ? "1" : "0";
          }
          if (pct.current) {
            pct.current.textContent = `${Math.round(Math.min(1, Math.max(0, p)) * 100)}%`;
          }
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <section id="results" aria-label="Scroll-driven cleaning demonstration">
      <div ref={wrap} className="relative h-svh overflow-hidden bg-grime">
        {/* Dirty base */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/surfaces/paving-dirty.svg)" }}
        />
        {/* Clean reveal */}
        <div
          ref={clean}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/surfaces/paving-clean.svg)",
            clipPath: "polygon(0 0, -15% 0, -27% 100%, 0 100%)",
          }}
        />
        {/* Lance line + spray */}
        <div
          ref={lance}
          className="pointer-events-none absolute inset-y-0 w-24 opacity-0 transition-opacity duration-200 motion-reduce:hidden"
          style={{ transform: "skewX(-11deg)" }}
          aria-hidden
        >
          <div className="absolute inset-y-0 left-1/2 w-[4px] -translate-x-1/2 bg-jet shadow-[0_0_24px_6px_rgba(12,134,196,0.55)]" />
          <div className="absolute inset-y-0 left-1/2 w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>

        {/* Static fallback split for reduced motion */}
        <div
          className="absolute inset-0 hidden motion-reduce:block"
          aria-hidden
          style={{
            backgroundImage: "url(/surfaces/paving-clean.svg)",
            backgroundSize: "cover",
            clipPath: "polygon(55% 0, 100% 0, 100% 100%, 45% 100%)",
          }}
        />

        {/* Overlay copy */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full bg-gradient-to-t from-ink/90 to-transparent px-5 pb-10 pt-32 md:px-8">
            <div className="mx-auto flex max-w-wrap flex-wrap items-end justify-between gap-6">
              <div>
                <p className="ticket ticket--light mb-4">The difference, live</p>
                <h2 className="h-display text-concrete text-[clamp(2rem,5.5vw,4rem)]">
                  This is what your
                  <br />
                  surface remembers.
                </h2>
              </div>
              <div className="text-right">
                <span
                  ref={pct}
                  className="block font-display text-6xl text-jet md:text-8xl"
                >
                  0%
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-concrete/60">
                  Restored — keep scrolling
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
