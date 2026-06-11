"use client";

import { useEffect, useState } from "react";

/**
 * Loading wipe: a jet-blue sheet sweeps the screen clean on first paint.
 * Pure CSS animation — zero JS work on the main thread, fast perceived load.
 */
export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] motion-reduce:hidden"
    >
      <div className="preload-ink absolute inset-0 bg-ink" />
      <div className="preload-jet absolute inset-0 bg-jet" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="preload-word font-display text-3xl uppercase tracking-tight text-concrete">
          Jet Wash Team
        </span>
      </div>
      <style jsx>{`
        .preload-word {
          animation: word 0.5s ease-out both;
        }
        .preload-jet {
          clip-path: polygon(0 0, 0 0, -20% 100%, -20% 100%);
          animation: sweep 0.7s cubic-bezier(0.7, 0, 0.2, 1) 0.55s both;
        }
        .preload-ink {
          animation: lift 0.45s cubic-bezier(0.7, 0, 0.2, 1) 0.95s both;
        }
        @keyframes word {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes sweep {
          to { clip-path: polygon(0 0, 140% 0, 120% 100%, -20% 100%); }
        }
        @keyframes lift {
          to { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
