import { Droplets } from "lucide-react";
import { SERVICES, waLink } from "@/lib/site";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-ink py-24 text-concrete md:py-32">
      <div className="mx-auto max-w-wrap px-5 md:px-8">
        <Reveal>
          <p className="ticket ticket--light mb-4">What we clean</p>
          <h2 className="h-display max-w-3xl text-[clamp(2rem,5.5vw,4rem)]">
            Every surface has a<br />
            <span className="text-jet">correct</span> way to clean it.
          </h2>
          <p className="mt-6 max-w-xl text-concrete/65">
            Wrong pressure ruins render, scars sandstone and blasts the sand
            out of block paving. We match method to material — that&rsquo;s the
            difference between a wash and a restoration.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px bg-concrete/15 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <a
                href={waLink(`Hi Jet Wash Team — free quote for ${s.title.toLowerCase()} please.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-4 bg-ink p-7 transition-colors duration-300 hover:bg-[#1b252c] md:p-9"
              >
                <Droplets
                  size={22}
                  className="text-jet transition-transform duration-300 group-hover:-rotate-12"
                />
                <h3 className="font-display text-2xl uppercase leading-none">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-concrete/65">
                  {s.blurb}
                </p>
                <p className="mt-auto border-l-2 border-jet pl-3 text-sm text-concrete/85">
                  {s.payoff}
                </p>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Quote this →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
