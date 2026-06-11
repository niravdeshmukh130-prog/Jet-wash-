import { Instagram, Phone } from "lucide-react";
import { BUSINESS, SERVICES, WA_DEFAULT } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-concrete">
      {/* Final CTA band */}
      <div className="border-b border-concrete/10 px-5 py-16 md:px-8">
        <div className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-8">
          <h2 className="h-display text-[clamp(1.8rem,4.5vw,3.2rem)]">
            Your surface won&rsquo;t
            <br />
            clean itself.
          </h2>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center bg-amber px-8 py-4 font-mono text-sm font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:bg-[#ffb71f]"
          >
            Get your free quote
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-wrap gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-2xl uppercase">
            Jet Wash <span className="text-jet">Team</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-concrete/55">
            {BUSINESS.tagline}
          </p>
          <div className="mt-5 flex gap-4">
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center border border-concrete/25 transition-colors hover:border-jet hover:text-jet"
            >
              <Instagram size={16} />
            </a>
            <a
              href={`tel:${BUSINESS.phoneE164}`}
              aria-label="Call us"
              className="flex h-10 w-10 items-center justify-center border border-concrete/25 transition-colors hover:border-jet hover:text-jet"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        <nav aria-label="Services">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-concrete/45">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a href="#services" className="text-concrete/70 hover:text-concrete">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-concrete/45">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-concrete/70">
            <li>
              <a href={`tel:${BUSINESS.phoneE164}`} className="hover:text-concrete">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>{BUSINESS.serviceArea}</li>
            <li>Free quotes — same day where possible</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-concrete/10 px-5 py-5 md:px-8">
        <p className="mx-auto max-w-wrap font-mono text-[11px] uppercase tracking-[0.16em] text-concrete/35">
          © {new Date().getFullYear()} {BUSINESS.legalName}
        </p>
      </div>
    </footer>
  );
}
