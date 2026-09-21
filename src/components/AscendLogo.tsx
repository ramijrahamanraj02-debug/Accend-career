import React from 'react';

interface AscendLogoProps {
  className?: string;
  size?: number | string;
  showGlow?: boolean;
  variant?: 'metallic-3d' | 'flat' | 'neon';
  useImage?: boolean;
}

/**
 * AscendLogoMark:
 * Ultra-faithful recreation of the 3D wall-mounted Ascend Career emblem
 * from the user's uploaded photo:
 * - Geometric isometric delta ribbon in signature metallic teal (#00828A / #0d9488)
 * - 3D extrusion sides in dark shadow teal with multi-layer depth (#003136)
 * - Top-edge specular highlights (#5eead4 / #a5f3fc) and beveled chamfers
 * - Diagonal high-gloss lacquer reflection across the front face
 * - Realistic soft drop-shadow cast onto the mounting surface
 */
export const AscendLogoMark: React.FC<AscendLogoProps> = ({
  className = 'w-10 h-10',
  showGlow = true,
  useImage = false
}) => {
  if (useImage) {
    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
        {showGlow && (
          <div className="absolute inset-0 rounded-full bg-[#00828A]/25 blur-lg -z-10 scale-125 pointer-events-none" />
        )}
        <img
          src="/images/logo1.png"
          alt="Ascend Career 3D Emblem"
          className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(0,18,24,0.55)]"
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      {showGlow && (
        <div className="absolute inset-0 rounded-full bg-[#00828A]/20 blur-lg -z-10 scale-125 pointer-events-none" />
      )}
      <img
        src="/images/ascend-logo.svg"
        alt="Ascend Career Logo"
        className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(0,18,24,0.55)]"
        onError={(e) => {
          // Fallback if SVG fails for any reason
          e.currentTarget.src = '/images/logo1.png';
        }}
      />
    </div>
  );
};

/**
 * AscendBrandBlock:
 * The primary brand signature combining the 3D Ascend Logo mark
 * with the exact ASCEND CAREER typography:
 * - "ASCEND" in bold 3D navy-metallic
 * - "CAREER" in polished 3D signature teal (#00828A)
 * - "ELEVATE TODAY, ACHIEVE TOMORROW" sub-tagline
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
      {/* 3D LOGO EMBLEM */}
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

      {/* TYPOGRAPHY MATCHING WALL PHOTO */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-black tracking-tight text-white group-hover:text-[#E5FE40] transition-colors ${
              isLarge ? 'text-2xl sm:text-3xl' : isHeader ? 'text-xl sm:text-2xl' : 'text-lg'
            }`}
          >
            ASCEND
          </span>
          <span
            className={`font-black tracking-tight text-[#00828A] group-hover:text-[#2dd4bf] transition-colors ${
              isLarge ? 'text-2xl sm:text-3xl' : isHeader ? 'text-xl sm:text-2xl' : 'text-lg'
            }`}
            style={{
              textShadow: '0 2px 8px rgba(0, 130, 138, 0.4)'
            }}
          >
            CAREER
          </span>
        </div>

        <span
          className={`font-mono font-bold tracking-[0.22em] uppercase text-[#8A8A8A] group-hover:text-white transition-colors mt-1 block whitespace-nowrap ${
            isLarge ? 'text-xs' : 'text-[9px]'
          }`}
        >
          {tagline}
        </span>
      </div>
    </div>
  );
};

/**
 * Ascend3DWallDisplay:
 * Full-scale photorealistic recreation of the wall-mounted 3D logo installation
 * from the user's uploaded photograph:
 * - Architectural off-white / brushed stone wall background
 * - Dimensional 3D teal triangle emblem with beveled sides & cast drop shadow
 * - Bold 3D navy metallic 'ASCEND' lettering with brushed face
 * - 3D metallic teal 'CAREER' lettering with wide tracking
 * - Thin architectural divider baseline
 * - Interactive subtle 3D tilt perspective
 */
export const Ascend3DWallDisplay: React.FC<{
  className?: string;
  interactive?: boolean;
  size?: 'sm' | 'md' | 'lg';
}> = ({ className = '', interactive = true, size = 'md' }) => {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12; // tilt angle
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x: y, y: x });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scaleClasses = {
    sm: 'p-6 max-w-sm',
    md: 'p-8 sm:p-10 max-w-md',
    lg: 'p-10 sm:p-14 max-w-xl'
  }[size];

  const markSizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-36 h-36 sm:w-44 sm:h-44',
    lg: 'w-48 h-48 sm:w-56 sm:h-56'
  }[size];

  const ascendTextClasses = {
    sm: 'text-3xl sm:text-4xl',
    md: 'text-4xl sm:text-5xl lg:text-6xl',
    lg: 'text-5xl sm:text-6xl lg:text-7xl'
  }[size];

  const careerTextClasses = {
    sm: 'text-sm sm:text-base tracking-[0.3em]',
    md: 'text-base sm:text-lg lg:text-xl tracking-[0.38em]',
    lg: 'text-lg sm:text-xl lg:text-2xl tracking-[0.42em]'
  }[size];

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px'
      }}
      className={`relative inline-block select-none ${className}`}
    >
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out'
        }}
        className={`relative rounded-xl border border-[#2a2a2a] bg-gradient-to-br from-[#EAEAEA] via-[#DFDFDF] to-[#CFCFCF] text-center overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] ${scaleClasses}`}
      >
        {/* Architectural Wall Ambient Lighting & Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.7),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_90%,rgba(0,0,0,0.15),transparent_60%)] pointer-events-none" />

        {/* Corner Studio Lighting Glint */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 opacity-60">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00828A]" />
          <span className="text-[9px] font-mono tracking-widest text-[#555555] uppercase">
            PHYSICAL HEADQUARTERS // 3D INSTALLATION
          </span>
        </div>

        {/* 1. THE 3D EMBLEM */}
        <div className="relative z-10 flex justify-center items-center my-4 sm:my-6">
          <AscendLogoMark className={markSizeClasses} showGlow={false} />
        </div>

        {/* 2. THE 3D 'ASCEND' WORDMARK */}
        <div className="relative z-10 mt-2 sm:mt-4">
          <h2
            className={`font-black tracking-tight text-[#0F223D] leading-none uppercase ${ascendTextClasses}`}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textShadow: `
                1px 1px 0px #09172A,
                2px 2px 0px #09172A,
                3px 3px 0px #06101D,
                4px 4px 0px #040A13,
                5px 6px 12px rgba(6, 16, 29, 0.45),
                0 0 1px rgba(255, 255, 255, 0.6)
              `
            }}
          >
            ASCEND
          </h2>

          {/* 3. THE 3D 'CAREER' WORDMARK */}
          <div className="mt-1 sm:mt-2">
            <span
              className={`font-black uppercase text-[#00828A] block leading-none ${careerTextClasses}`}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textShadow: `
                  1px 1px 0px #00565C,
                  2px 2px 0px #003F44,
                  3px 3px 0px #002B2E,
                  4px 5px 10px rgba(0, 43, 46, 0.4)
                `
              }}
            >
              CAREER
            </span>
          </div>

          {/* 4. BASELINE DIVIDER ACCENT */}
          <div className="w-4/5 mx-auto h-[2.5px] mt-4 sm:mt-5 bg-[#0F223D]/80 rounded-full" />
        </div>

        {/* Ambient Diamond Sparkle Glint (Bottom-Right from uploaded photo) */}
        <div className="absolute bottom-10 right-8 sm:right-12 pointer-events-none opacity-80 z-20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" fill="#ffffff" fillOpacity="0.85" />
            <circle cx="12" cy="12" r="8" fill="#cffafe" fillOpacity="0.3" filter="blur(4px)" />
          </svg>
        </div>

        {/* Bottom Tagline */}
        <div className="relative z-10 mt-3 sm:mt-4">
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#555555] uppercase">
            ELEVATE TODAY, ACHIEVE TOMORROW
          </span>
        </div>
      </div>
    </div>
  );
};

/**
 * AscendOfficialWallLockup:
 * Vertical lockup matching the exact wall display in the uploaded photo
 */
export const AscendOfficialWallLockup: React.FC<{ className?: string; lightBg?: boolean }> = ({
  className = '',
  lightBg = false
}) => {
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      <AscendLogoMark className="w-16 h-16 sm:w-20 sm:h-20" />
      <div className="mt-3">
        <div
          className={`text-2xl sm:text-3xl font-black tracking-wider leading-none ${
            lightBg ? 'text-[#0F223D]' : 'text-white'
          }`}
          style={lightBg ? {
            textShadow: '2px 2px 0px #09172A, 4px 5px 10px rgba(9, 23, 42, 0.35)'
          } : undefined}
        >
          ASCEND
        </div>
        <div
          className="text-sm sm:text-base font-extrabold tracking-[0.38em] uppercase mt-1 leading-none text-[#00828A]"
          style={{
            textShadow: '1px 1px 0px #004247, 2px 3px 6px rgba(0, 130, 138, 0.3)'
          }}
        >
          CAREER
        </div>
      </div>
      <div
        className={`w-32 h-[2px] my-3 ${
          lightBg ? 'bg-[#00828A]/60' : 'bg-[#00828A]/80'
        }`}
      />
      <div className="text-[10px] tracking-[0.25em] font-mono font-bold text-[#8A8A8A] uppercase">
        ELEVATE TODAY, ACHIEVE TOMORROW
      </div>
    </div>
  );
};

/**
 * AscendUploadedLogo:
 * Direct render component for the uploaded 3D logo
 */
export const AscendUploadedLogo: React.FC<{
  className?: string;
  variant?: 'mark' | 'full' | 'wall';
  lightBg?: boolean;
}> = ({ className = 'w-12 h-12', variant = 'mark', lightBg = false }) => {
  if (variant === 'wall') {
    return <Ascend3DWallDisplay className={className} size="sm" />;
  }

  if (variant === 'full') {
    return <AscendOfficialWallLockup className={className} lightBg={lightBg} />;
  }

  return <AscendLogoMark className={className} />;
};


