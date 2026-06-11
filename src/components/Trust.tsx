"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ShieldCheck, Wrench, Leaf, BadgeCheck } from "lucide-react";
import { STATS } from "@/lib/site";
import Reveal from "./Reveal";

const PROOF = [
  {
    icon: ShieldCheck,
    title: "Fully insured",
    body: "Public liability cover on every job, residential or commercial. Documentation available on request.",
  },
  {
    icon: Wrench,
    title: "Professional kit",
    body: "Commercial pressure systems, rotary flat-surface cleaners and soft-wash equipment — not hire-shop machines.",
  },
  {
    icon: Leaf,
    title: "Safe procedures",
    body: "Surface-matched pressure, drain protection and biocides applied responsibly around plants and pets.",
  },
  {
    icon: BadgeCheck,
    title: "Fixed-price promise",
    body: "The price we quote is the price you pay. Confirmed in writing before any work begins.",
  },
] as const;

export default function Trust() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section id="trust" className="bg-concrete py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-5 md:px-8">
        <Reveal>
          <p className="ticket mb-4">Why people book us</p>
          <h2 className="h-display max-w-3xl text-[clamp(2rem,5.5vw,4rem)]">
            Trust is the only
            <br />
            thing we don&rsquo;t wash away.
          </h2>
        </Reveal>

        {/* Stats strip */}
        <div
          ref={ref}
          className="mt-14 grid grid-cols-2 gap-px border-2 border-ink bg-ink md:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="bg-concrete p-6 md:p-8">
              <span className="block font-display text-4xl text-jet md:text-5xl">
                {inView ? (
                  <CountUp end={s.value} duration={1.6} suffix={s.suffix} />
                ) : (
                  `0${s.suffix}`
                )}
              </span>
              <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink/60">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="h-full border-t-2 border-ink pt-5">
                <p.icon size={22} className="text-jet" />
                <h3 className="mt-3 font-display text-lg uppercase">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
