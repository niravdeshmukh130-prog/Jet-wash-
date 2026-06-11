"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

/** Subtle magnetic hover — desktop pointer only, no-ops on touch. */
export default function MagneticButton({
  href,
  children,
  variant = "amber",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "amber" | "ink" | "outline" | "jet";
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const styles = {
    amber: "bg-amber text-ink hover:bg-[#ffb71f]",
    ink: "bg-ink text-concrete hover:bg-black",
    jet: "bg-jet text-white hover:bg-jet-deep",
    outline:
      "border-2 border-current text-current hover:bg-ink hover:text-concrete hover:border-ink",
  }[variant];

  return (
    <a
      ref={ref}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 px-7 py-3 font-mono text-sm font-medium uppercase tracking-[0.12em] transition-[background-color,color,transform] duration-200 will-change-transform",
        styles,
        className
      )}
    >
      {children}
    </a>
  );
}
