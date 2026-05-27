"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "obrii_popup_closed_at";
const COOLDOWN_MS = 15 * 60 * 1000; // 15 minutos

export function SaaSPopup() {
  // Inicia oculto para evitar hydration mismatch (servidor = null, cliente = null)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showPopup = () => {
      try {
        const closedAt = localStorage.getItem(STORAGE_KEY);

        if (!closedAt) {
          return true;
        }

        const elapsed = Date.now() - Number(closedAt);

        if (elapsed >= COOLDOWN_MS) {
          localStorage.removeItem(STORAGE_KEY);
          return true;
        }

        return false;
      } catch {
        return true;
      }
    };

    const id = window.setTimeout(() => {
      if (showPopup()) {
        setIsVisible(true);
      }
    }, 0);

    return () => window.clearTimeout(id);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // silenciar errores de localStorage
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm animate-in slide-in-from-right-8 fade-in duration-500">
      <div className="relative rounded-xl border border-indigo-500/30 bg-zinc-900/95 p-7 shadow-2xl backdrop-blur-md">
        <button
          onClick={handleClose}
          className="absolute right-3.5 top-3.5 text-zinc-400 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
        
        <h3 className="mb-3 text-base font-bold text-white">🚀 Obrii App (Beta)</h3>
        <p className="mb-5 text-sm text-zinc-300 leading-relaxed">
          Ya puedes medir el fit cultural, detectar riesgo de burnout temprano y evaluar competencias técnicas.
        </p>
        
        <a
          href="https://app.obriiconsulting.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
        >
          Probar plataforma
        </a>
      </div>
    </div>
  );
}
