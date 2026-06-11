"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WA_DEFAULT } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp us for a free quote"
      className={cn(
        "fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-4 pr-5 text-white shadow-xl transition-all duration-300 hover:scale-105",
        show ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
      )}
    >
      <MessageCircle size={20} />
      <span className="font-mono text-xs font-medium uppercase tracking-wide">
        Free quote
      </span>
    </a>
  );
}
