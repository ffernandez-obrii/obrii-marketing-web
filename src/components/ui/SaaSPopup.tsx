"use client";

import { useState } from "react";

export function SaaSPopup() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-xs animate-in slide-in-from-right-8 fade-in duration-500">
      <div className="relative rounded-xl border border-indigo-500/30 bg-zinc-900/95 p-5 shadow-2xl backdrop-blur-md">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-3 top-3 text-zinc-400 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <h3 className="mb-2 text-sm font-bold text-white">🚀 Obrii App (Beta)</h3>
        <p className="mb-4 text-xs text-zinc-300 leading-relaxed">
          Ya puedes medir el fit cultural, detectar riesgo de burnout temprano y evaluar competencias técnicas.
        </p>
        
        <a
          href="https://app.obriiconsulting.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-lg bg-primary px-4 py-2 text-center text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
        >
          Probar plataforma
        </a>
      </div>
    </div>
  );
}
