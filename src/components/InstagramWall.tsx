"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Instagram } from "lucide-react";
import { BUSINESS, INSTAGRAM_POSTS } from "@/lib/site";
import Reveal from "./Reveal";

/**
 * Real Instagram content via the official permanent embed endpoint
 * (/p/{shortcode}/embed/captioned). Iframes are lazy-mounted only when
 * the section scrolls into view, so they cost nothing on initial load.
 */
function Embed({ code }: { code: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative overflow-hidden border-2 border-ink bg-white">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-jet-mist">
          <span className="font-mono text-xs uppercase tracking-widest text-jet">
            Loading…
          </span>
        </div>
      )}
      <iframe
        src={`https://www.instagram.com/p/${code}/embed/captioned/`}
        title={`Jet Wash Team transformation — Instagram post ${code}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className="h-[480px] w-full md:h-[540px]"
        allow="encrypted-media"
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
    </div>
  );
}

export default function InstagramWall() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "400px" });

  return (
    <section ref={ref} className="bg-concrete py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-5 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="ticket mb-4">Live from the vans</p>
              <h2 className="h-display max-w-3xl text-[clamp(2rem,5.5vw,4rem)]">
                Real jobs. Posted
                <br />
                the day we did them.
              </h2>
            </div>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-jet hover:underline"
            >
              <Instagram size={16} /> @jetwashteam
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {inView &&
            INSTAGRAM_POSTS.map((code, i) => (
              <Reveal key={code} delay={(i % 3) * 0.08}>
                <Embed code={code} />
              </Reveal>
            ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 border-2 border-ink px-8 py-3 font-mono text-sm uppercase tracking-[0.12em] transition-colors hover:bg-ink hover:text-concrete"
            >
              See more transformations <Instagram size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
