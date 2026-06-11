"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Reveal from "./Reveal";

/**
 * Before/after proof. Ships with the procedural surface pair as
 * placeholders — replace the `before`/`after` paths with real job
 * photography (export pairs from the team's reels) for production.
 * Files go in /public/results/.
 */
const COMPARISONS = [
  {
    label: "Driveway restoration",
    sub: "Block paving — clean, re-sand, seal",
    before: "/surfaces/paving-dirty.svg",
    after: "/surfaces/paving-clean.svg",
  },
  {
    label: "Patio deep clean",
    sub: "Indian sandstone — soft pressure",
    before: "/surfaces/paving-dirty.svg",
    after: "/surfaces/paving-clean.svg",
  },
] as const;

export default function BeforeAfter() {
  return (
    <section className="bg-concrete py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-5 md:px-8">
        <Reveal>
          <p className="ticket mb-4">Before / after</p>
          <h2 className="h-display max-w-3xl text-[clamp(2rem,5.5vw,4rem)]">
            Drag the line.
            <br />
            Judge for yourself.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {COMPARISONS.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.1}>
              <figure>
                <div className="overflow-hidden border-2 border-ink">
                  <ReactCompareSlider
                    position={45}
                    itemOne={
                      <ReactCompareSliderImage
                        src={c.before}
                        alt={`${c.label} — before cleaning`}
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={c.after}
                        alt={`${c.label} — after cleaning`}
                      />
                    }
                    style={{ aspectRatio: "16 / 11", width: "100%" }}
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <span className="font-display text-xl uppercase">
                    {c.label}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-ink/60">
                    {c.sub}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 max-w-xl text-ink/60">
            Every job is photographed before and after. Real, unedited results
            from real jobs — see dozens more on our Instagram below.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
