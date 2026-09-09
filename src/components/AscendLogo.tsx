import React from 'react';

interface AscendLogoProps {
  className?: string;
  size?: number | string;
  showGlow?: boolean;
}

/**
 * AscendOfficialDocumentLogo:
 * Exact recreation of the official logo in the uploaded document wall:
 * - Geometric isometric ribbon triangle / Delta 'A' in signature teal
 * - Interlocking geometric planes with crisp mitered angles
 * - Exact official typography: ASCEND CAREER with "ELEVATE TODAY, ACHIEVE TOMORROW"
 */
export const AscendLogoMark: React.FC<AscendLogoProps> = ({
  className = 'w-10 h-10',
  showGlow = true
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      {showGlow && (
        <div className="absolute inset-0 rounded-full bg-teal-400/25 blur-md -z-10 scale-110 pointer-events-none" />
      )}
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,130,138,0.4)]"
      >
        <defs>
          {/* Official Brand Signature Teal Gradient */}
          <linearGradient id="ascend-brand-grad" x1="24" y1="216" x2="216" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#007a82" />
            <stop offset="45%" stopColor="#008b8b" />
            <stop offset="85%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>

          {/* Isometric Depth Accent */}
          <linearGradient id="ascend-depth-grad" x1="120" y1="16" x2="220" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="60%" stopColor="#00828A" />
            <stop offset="100%" stopColor="#042f2e" />
          </linearGradient>
        </defs>

        {/* 
          Official Ascend Geometric Delta Emblem
          Matches the uploaded document photo with high-precision ribbon paths:
          - Top-right descending wing blade with lower chevron tail
          - Main equilateral triangle with parallel diagonal inner stripe
          - Inner upward triangle aperture
          - Horizontal base crossbar
          - Lower foundation bar running parallel with bottom-right join
        */}
        <g strokeLinejoin="miter" strokeMiterlimit="6">
          {/* Top-Right Descending Wing Blade (starts high, descends at 60deg) */}
          <path
            d="M 124 16 L 146 16 L 218 166 L 194 216 L 176 186 L 198 152 Z"
            fill="url(#ascend-depth-grad)"
          />

          {/* Main Outer Triangle Left Leg */}
          <path
            d="M 108 44 L 128 44 L 48 178 L 28 178 Z"
            fill="url(#ascend-brand-grad)"
          />

          {/* Inner Parallel Diagonal Stripe */}
          <path
            d="M 128 44 L 148 44 L 68 178 L 48 178 Z"
            fill="url(#ascend-brand-grad)"
          />

          {/* Inner Upward Triangle Centerpiece */}
          <polygon
            points="128,96 162,162 94,162"
            fill="url(#ascend-brand-grad)"
          />

          {/* Triangle Base Crossbar */}
          <path
            d="M 46 162 L 178 162 L 188 178 L 36 178 Z"
            fill="url(#ascend-brand-grad)"
          />

          {/* Bottom Right Chevron / Lightning Tip */}
          <path
            d="M 194 216 L 184 234 L 166 204 L 176 186 Z"
            fill="url(#ascend-depth-grad)"
          />

          {/* Bottom Horizontal Foundation Bar */}
          <path
            d="M 28 206 L 166 206 L 184 234 L 164 234 L 152 220 L 28 220 Z"
            fill="url(#ascend-brand-grad)"
          />
        </g>
      </svg>
    </div>
  );
};

/**
 * AscendBrandBlock:
 * Puts the official 3D Ascend Logo mark directly to the LEFT SIDE of the exact text:
 * ASCEND
 * CAREER
 * Guide • Train • Place • Grow (or full Go Global)
 */
interface AscendBrandBlockProps {
  onClick?: () => void;
  variant?: 'header' | 'footer' | 'large';
  tagline?: string;
  className?: string;
}

export const AscendBrandBlock: React.FC<AscendBrandBlockProps> = ({
  onClick,
  variant = 'header',
  tagline = 'ELEVATE TODAY, ACHIEVE TOMORROW',
  className = ''
}) => {
  const isHeader = variant === 'header';
  const isLarge = variant === 'large';

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3.5 select-none group text-left ${onClick ? 'cursor-pointer' : ''} ${className}`}
      id="ascend-brand-unit"
    >
      {/* 3D LOGO EMBLEM ON THE LEFT SIDE */}
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <AscendLogoMark
          className={
            isLarge
              ? 'w-14 h-14 sm:w-16 sm:h-16'
              : isHeader
              ? 'w-11 h-11 sm:w-12 sm:h-12'
              : 'w-10 h-10'
          }
        />
      </div>

      {/* WRITING ON THE RIGHT SIDE */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-black tracking-tight text-white group-hover:text-teal-300 transition-colors ${
              isLarge ? 'text-2xl sm:text-3xl' : isHeader ? 'text-xl sm:text-2xl' : 'text-lg'
            }`}
          >
            ASCEND
          </span>
          <span
            className={`font-black tracking-tight text-teal-400 ${
              isLarge ? 'text-2xl sm:text-3xl' : isHeader ? 'text-xl sm:text-2xl' : 'text-lg'
            }`}
          >
            CAREER
          </span>
        </div>

        <span
          className={`font-semibold tracking-[0.18em] uppercase text-slate-400 mt-1 block whitespace-nowrap ${
            isLarge ? 'text-xs' : 'text-[10px]'
          }`}
        >
          {tagline}
        </span>
      </div>
    </div>
  );
};

/**
 * AscendOfficialWallLockup:
 * Vertical lockup matching the exact wall display in the uploaded document image:
 * Logo mark on top, "ASCEND CAREER", divider line, "ELEVATE TODAY, ACHIEVE TOMORROW"
 */
export const AscendOfficialWallLockup: React.FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      <AscendLogoMark className="w-16 h-16 sm:w-20 sm:h-20" />
      <div className="mt-3">
        <div className="text-2xl sm:text-3xl font-black text-white tracking-wider leading-none">
          ASCEND
        </div>
        <div className="text-sm sm:text-base font-bold text-teal-400 tracking-[0.3em] uppercase mt-1 leading-none">
          CAREER
        </div>
      </div>
      <div className="w-24 h-[1px] bg-slate-700 my-2" />
      <div className="text-[10px] tracking-[0.25em] font-semibold text-slate-400 uppercase">
        ELEVATE TODAY, ACHIEVE TOMORROW
      </div>
    </div>
  );
};

