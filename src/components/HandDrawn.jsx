import React from 'react';

// ==============================================================
// HAND-DRAWN SVG DOODLES (INK-BLACK #1A1A1A)
// ==============================================================

// 1. Squiggly Underline
export function DoodleUnderline({ className = "w-full h-4", strokeColor = "#1A1A1A" }) {
  return (
    <svg
      className={`doodle-underline ${className}`}
      viewBox="0 0 220 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M3 12.5C38 5.2 74 15.8 112 9.4C149 3.1 183 14.2 217 7.5"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 2. Curved Pointer Arrow (Pointing toward iOS Mail or Flip Card)
export function DoodleArrow({ className = "w-14 h-12", strokeColor = "#1A1A1A", flip = false }) {
  return (
    <svg
      className={`doodle-arrow ${className} ${flip ? 'scale-x-[-1]' : ''}`}
      viewBox="0 0 80 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 10C28 12 52 24 62 52"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M49 46L63 54L68 39"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 3. Hand-Drawn Circle / Loop
export function DoodleCircle({ className = "", strokeColor = "#1A1A1A" }) {
  return (
    <svg
      className={`doodle-circle ${className}`}
      viewBox="0 0 140 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M22 14C55 4 126 6 132 29C138 52 62 56 26 49C-4 43 4 15 44 11"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 4. Little Sparkle / Asterisk Cluster (Next to section titles)
export function DoodleSparkle({ className = "w-6 h-6", strokeColor = "#1A1A1A" }) {
  return (
    <svg
      className={`doodle-sparkle ${className}`}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 4V32M6 18H30M9.5 9.5L26.5 26.5M26.5 9.5L9.5 26.5"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 5. Rough Index-Card Divider Line
export function DoodleDivider({ className = "w-full h-3", strokeColor = "#1A1A1A" }) {
  return (
    <svg
      className={`doodle-divider ${className}`}
      viewBox="0 0 600 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M2 7C150 3 310 10 450 5C510 3 560 8 598 6"
        stroke={strokeColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="1 0"
      />
    </svg>
  );
}

// ==============================================================
// ADDITIONAL TACTILE ACCESSORIES
// ==============================================================

// Hand-drawn double loop underline
export function DoubleSwoop({ className = "w-full h-4 text-orange-500" }) {
  return (
    <svg
      viewBox="0 0 200 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M3 12C45 4 105 5 197 10"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M12 14C55 8 115 9 188 13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
    </svg>
  );
}

// Metal paper clip SVG
export function PaperClip({ className = "w-7 h-12 text-[#78716C]" }) {
  return (
    <svg viewBox="0 0 32 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M10 20V46C10 52 14 56 19 56C24 56 28 52 28 46V14C28 7 22 2 15 2C8 2 2 7 2 14V48"
        stroke="#1C1917"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M10 20V46C10 52 14 56 19 56C24 56 28 52 28 46V14C28 7 22 2 15 2C8 2 2 7 2 14V48"
        stroke="#A8A29E"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Sparkle Star
export function Sparkle({ className = "w-5 h-5 text-amber-500" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 2C12.5 7 15 9.5 20 10C15 10.5 12.5 13 12 18C11.5 13 9 10.5 4 10C9 9.5 11.5 7 12 2Z" />
    </svg>
  );
}

// Clean GitHub SVG Icon
export function GithubIcon({ className = "w-4 h-4", size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

// Tactile Rubber Stamp badge with optional hand-drawn circle overlay
export function TactileStamp({ label, count, sublabel = "verified build", color = "orange" }) {
  const colorMap = {
    orange: "border-orange-600 text-orange-700 bg-orange-50/70",
    green: "border-emerald-700 text-emerald-800 bg-emerald-50/70",
    blue: "border-blue-700 text-blue-800 bg-blue-50/70",
    red: "border-rose-700 text-rose-800 bg-rose-50/70",
  };

  return (
    <div className={`relative inline-flex flex-col items-center justify-center p-2.5 border-2 border-dashed rounded-md transform rotate-[-2deg] select-none shadow-sm ${colorMap[color] || colorMap.orange}`}>
      <span className="font-mono text-[10px] tracking-widest uppercase font-black opacity-85 leading-tight">
        {label}
      </span>
      <span className="font-mono text-base font-black tracking-tight leading-none mt-0.5 relative z-10">
        {count}
      </span>
      <span className="text-[9px] font-hand font-bold text-ink opacity-70 mt-0.5">
        {sublabel}
      </span>
    </div>
  );
}
