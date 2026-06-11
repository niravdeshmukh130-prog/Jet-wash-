"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS } from "@/lib/site";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const line = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (line.current) line.current.style.height = "100%";
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        line.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.5,
          },
        }
      );
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="bg-ink py-24 text-concrete md:py-32">
      <div className="mx-auto max-w-wrap px-5 md:px-8">
        <Reveal>
          <p className="ticket ticket--light mb-4">How a job runs</p>
          <h2 className="h-display max-w-3xl text-[clamp(2rem,5.5vw,4rem)]">
            Six steps. No surprises.
          </h2>
        </Reveal>

        <div ref={wrap} className="relative mt-16 pl-8 md:pl-12">
          {/* Progress rail */}
          <div className="absolute left-1.5 top-0 h-full w-px bg-concrete/15 md:left-2.5" />
          <div
            ref={line}
            className="absolute left-1.5 top-0 w-px bg-jet md:left-2.5"
            style={{ height: "0%" }}
          />

          <ol className="space-y-12">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.04}>
                <li className="relative">
                  <span className="absolute -left-[2.05rem] top-1.5 block h-3 w-3 rotate-45 border border-jet bg-ink md:-left-[3.05rem]" />
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                    <span className="w-20 shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-jet">
                      Step {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl uppercase">
                        {p.step}
                      </h3>
                      <p className="mt-1 max-w-xl text-sm leading-relaxed text-concrete/65">
                        {p.detail}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
