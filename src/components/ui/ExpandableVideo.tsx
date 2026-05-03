'use client';

import { useState } from 'react';

interface ExpandableVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  className?: string;
}

export function ExpandableVideo({ className, ...props }: ExpandableVideoProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <video
        {...props}
        className={`${className} cursor-pointer transition-opacity hover:opacity-90`}
        onClick={() => setIsExpanded(true)}
      />

      {isExpanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        >
          <div className="relative w-full max-w-5xl">
            <button
              className="absolute -top-12 right-0 text-white hover:text-zinc-300"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              aria-label="Cerrar video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <video
              {...props}
              className="h-auto w-full rounded-xl border border-zinc-800 shadow-2xl"
              controls
              autoPlay
              muted={false}
            />
          </div>
        </div>
      )}
    </>
  );
}
