"use client";

import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { BUSINESS, SERVICES, waLink } from "@/lib/site";
import Reveal from "./Reveal";

/**
 * Quote form — no backend required. Submitting composes a structured
 * WhatsApp message and opens the chat, which matches exactly how the
 * business already takes enquiries.
 */
export default function QuoteSection() {
  const [service, setService] = useState(SERVICES[0].title);
  const [name, setName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [notes, setNotes] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = [
      `Hi Jet Wash Team — free quote request from your website.`,
      `Name: ${name || "—"}`,
      `Postcode: ${postcode || "—"}`,
      `Service: ${service}`,
      notes ? `Details: ${notes}` : "",
      `I can send photos of the area.`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full border-2 border-ink bg-concrete px-4 py-3 text-sm placeholder:text-ink/40 focus:border-jet";

  return (
    <section id="contact" className="bg-concrete py-24 md:py-32">
      <div className="mx-auto grid max-w-wrap gap-14 px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <p className="ticket mb-4">Free quote — no obligation</p>
          <h2 className="h-display text-[clamp(2rem,5.5vw,4rem)]">
            Photos in.
            <br />
            Fixed price out.
          </h2>
          <p className="mt-6 max-w-md text-ink/65">
            Most quotes are done same day from a couple of WhatsApp photos. No
            pushy site visits unless the job needs one.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={`tel:${BUSINESS.phoneE164}`}
              className="flex items-center gap-4 group"
            >
              <span className="flex h-12 w-12 items-center justify-center border-2 border-ink transition-colors group-hover:bg-ink group-hover:text-concrete">
                <Phone size={18} />
              </span>
              <div>
                <span className="block font-display text-2xl">
                  {BUSINESS.phoneDisplay}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
                  Call or WhatsApp
                </span>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center border-2 border-ink">
                <MapPin size={18} />
              </span>
              <div>
                <span className="block font-display text-xl uppercase">
                  Nationwide UK
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
                  Residential &amp; commercial
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center border-2 border-ink">
                <Clock size={18} />
              </span>
              <div>
                <span className="block font-display text-xl uppercase">
                  Mon–Sat, 8am–6pm
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
                  WhatsApp answered evenings too
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={submit}
            className="border-2 border-ink bg-white p-7 md:p-10"
            aria-label="Free quote request"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em]">
                  Your name
                </span>
                <input
                  className={field}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Smith"
                  autoComplete="name"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em]">
                  Postcode
                </span>
                <input
                  className={field}
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="SW1A 1AA"
                  autoComplete="postal-code"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em]">
                What needs cleaning?
              </span>
              <select
                className={field}
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                {SERVICES.map((s) => (
                  <option key={s.slug}>{s.title}</option>
                ))}
                <option>Something else</option>
              </select>
            </label>
            <label className="mt-5 block">
              <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em]">
                Anything useful (size, surface, access)
              </span>
              <textarea
                className={field}
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Approx. 40m² block paving driveway, quite mossy…"
              />
            </label>
            <button
              type="submit"
              className="mt-7 flex min-h-12 w-full items-center justify-center gap-2 bg-amber px-7 py-4 font-mono text-sm font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:bg-[#ffb71f]"
            >
              <MessageCircle size={16} /> Send quote request on WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-ink/50">
              Opens WhatsApp with your details pre-filled — nothing is stored
              on this site.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
