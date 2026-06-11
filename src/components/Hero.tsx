"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { BUSINESS, waLink } from "@/lib/site";
import MagneticButton from "./MagneticButton";

/**
 * Hero thesis: the clean line. The headline itself is split by the
 * signature diagonal — grimy on one side, washed on the other.
 */
export default function Hero() {
  const reduced = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-ink text-concrete"
    >
      {/* Split background: dirty paving left of the line, clean right */}
      <div className="absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url(/surfaces/paving-dirty.svg)" }}
        />
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/surfaces/paving-clean.svg)",
            clipPath: "polygon(68% 0, 100% 0, 100% 100%, 48% 100%)",
          }}
          initial={
            reduced
              ? false
              : { clipPath: "polygon(120% 0, 100% 0, 100% 100%, 140% 100%)" }
          }
          animate={{ clipPath: "polygon(68% 0, 100% 0, 100% 100%, 48% 100%)" }}
          transition={{ duration: 1.1, delay: 1.5, ease }}
        />
        {/* The clean line itself */}
        <motion.div
          className="absolute inset-y-0 w-[3px] bg-jet"
          style={{ left: "58%", transform: "skewX(-11deg)" }}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.4 }}
        />
        {/* Legibility wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      </div>

      <div className="relative mx-auto w-full max-w-wrap px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <motion.p
          className="ticket ticket--light mb-6"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6, ease }}
        >
          Residential &amp; commercial — {BUSINESS.serviceArea}
        </motion.p>

        <h1 className="h-display max-w-5xl text-[clamp(2.8rem,9vw,7rem)]">
          {["Years of grime.", "Gone in a day."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduced ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 1.7 + i * 0.12, duration: 0.8, ease }}
              >
                {i === 1 ? <span className="text-jet">{line}</span> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-6 max-w-xl text-lg text-concrete/75 md:text-xl"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.7, ease }}
        >
          Driveways, patios, render, roofs and commercial premises — deep
          cleaned by a professional team with the right kit for every surface.
          Fixed price agreed before we start.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.25, duration: 0.7, ease }}
        >
          <MagneticButton href="#contact" variant="amber">
            Book your free quote
          </MagneticButton>
          <MagneticButton
            href={waLink("Hi Jet Wash Team — quick quote please. I'll send photos.")}
            variant="outline"
            className="text-concrete"
          >
            <MessageCircle size={16} /> WhatsApp now
          </MagneticButton>
        </motion.div>

        <motion.a
          href="#results"
          className="mt-16 hidden items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-concrete/50 transition-colors hover:text-concrete md:inline-flex"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
          <ArrowDown size={14} className="animate-bounce" /> Watch a surface
          come back
        </motion.a>
      </div>
    </section>
  );
}
