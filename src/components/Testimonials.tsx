"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { TESTIMONIALS } from "@/lib/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-jet py-24 text-white md:py-32">
      <div className="mx-auto max-w-wrap px-5 md:px-8">
        <Reveal>
          <p className="ticket ticket--light mb-4">In their words</p>
          <h2 className="h-display max-w-3xl text-[clamp(2rem,5.5vw,4rem)]">
            What the kerb-side
            <br />
            verdict sounds like.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            autoplay={{ delay: 5500, disableOnInteraction: true }}
            pagination={{ clickable: true }}
            a11y={{ enabled: true }}
            className="mt-14 !pb-12"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name} className="!h-auto">
                <figure className="flex h-full flex-col border border-white/25 bg-white/5 p-8 backdrop-blur-sm">
                  <Quote size={22} className="text-amber" />
                  <blockquote className="mt-4 text-lg leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/20 pt-4">
                    <span className="font-display uppercase">{t.name}</span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">
                      {t.job}
                    </span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
