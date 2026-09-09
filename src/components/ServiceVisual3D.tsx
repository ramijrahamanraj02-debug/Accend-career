import React from 'react';

interface ServiceVisual3DProps {
  verticalId: string;
  isHovered?: boolean;
  className?: string;
}

/**
 * High-fidelity 3D visual objects custom-crafted for the 7 Ascend Career verticals:
 * 01 — Career Guidance & Assessment: 3D compass + career roadmap
 * 02 — Skill Development: 3D laptop + books + AI symbol
 * 03 — Jobs & Placement: 3D briefcase + professional + office
 * 04 — Study Abroad: 3D globe + airplane + university
 * 05 — Study in India: 3D Indian university/campus + graduation cap
 * 06 — School & College Programs: 3D campus + students
 * 07 — Corporate Training & HR: 3D corporate building + people/network
 */
export const ServiceVisual3D: React.FC<ServiceVisual3DProps> = ({
  verticalId,
  isHovered = false,
  className = 'w-full h-36'
}) => {
  switch (verticalId) {
    // 01 — Career Guidance & Assessment: 3D compass + career roadmap
    case 'career-guidance':
      return (
        <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
          <svg viewBox="0 0 240 140" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="compass-outer" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="50%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
              <linearGradient id="compass-rim" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="50%" stopColor="#0d9488" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
              <linearGradient id="roadmap-grad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#0f766e" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
              <filter id="glow-teal" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background 3D Perspective Road / Path */}
            <path
              d="M 20 125 L 90 90 L 140 70 L 220 50"
              stroke="#334155"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray="4 8"
            />
            {/* Glowing Career Roadmap Active Ribbon */}
            <path
              d="M 20 125 Q 90 95 135 75 T 220 48"
              stroke="url(#roadmap-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#glow-teal)"
              className={isHovered ? 'animate-pulse' : ''}
            />

            {/* Roadmap Waypoint Milestones */}
            <circle cx="30" cy="120" r="4" fill="#2dd4bf" />
            <circle cx="95" cy="88" r="5" fill="#5eead4" stroke="#0f172a" strokeWidth="2" />
            <circle cx="150" cy="68" r="6" fill="#14b8a6" stroke="#0f172a" strokeWidth="2" />
            <circle cx="215" cy="48" r="7" fill="#2dd4bf" filter="url(#glow-teal)" />

            {/* 3D Compass Body (Elevated Isometric Layer) */}
            <g transform={isHovered ? 'translate(95, 62) scale(1.05)' : 'translate(95, 65)'} style={{ transition: 'transform 0.4s ease' }}>
              {/* Compass Shadow */}
              <ellipse cx="0" cy="35" rx="36" ry="12" fill="#000000" opacity="0.45" />

              {/* Outer Rim 3D Bevel */}
              <ellipse cx="0" cy="0" rx="38" ry="34" fill="url(#compass-outer)" stroke="url(#compass-rim)" strokeWidth="2.5" />
              <ellipse cx="0" cy="0" rx="32" ry="28" fill="#090d16" stroke="#1e293b" strokeWidth="1" />

              {/* Cardinal Markings */}
              <line x1="0" y1="-26" x2="0" y2="-21" stroke="#2dd4bf" strokeWidth="2" />
              <line x1="0" y1="21" x2="0" y2="26" stroke="#64748b" strokeWidth="1.5" />
              <line x1="-28" y1="0" x2="-23" y2="0" stroke="#64748b" strokeWidth="1.5" />
              <line x1="23" y1="0" x2="28" y2="0" stroke="#64748b" strokeWidth="1.5" />

              {/* North / South Needle with Rotation */}
              <g transform={isHovered ? 'rotate(32)' : 'rotate(-18)'} style={{ transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                {/* North Pointer (Teal with specular highlight) */}
                <polygon points="0,-24 5,-2 0,0 -5,-2" fill="#2dd4bf" />
                <polygon points="0,-24 0,0 5,-2" fill="#14b8a6" />
                {/* South Pointer (Slate) */}
                <polygon points="0,24 4,2 0,0 -4,2" fill="#64748b" />
                <polygon points="0,24 0,0 4,2" fill="#475569" />
                {/* Center Pivot Gem */}
                <circle cx="0" cy="0" r="4.5" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="1.5" fill="#0d9488" />
              </g>

              {/* Floating North Star / Target */}
              <circle cx="0" cy="-36" r="2.5" fill="#5eead4" filter="url(#glow-teal)" />
            </g>
          </svg>
        </div>
      );

    // 02 — Skill Development: 3D laptop + books + AI symbol
    case 'skill-development':
      return (
        <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
          <svg viewBox="0 0 240 140" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="laptop-screen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
              <linearGradient id="book-spine-1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0d9488" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
              <linearGradient id="book-spine-2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>

            {/* Base Shadow */}
            <ellipse cx="120" cy="118" rx="80" ry="14" fill="#000000" opacity="0.4" />

            {/* Stacked 3D Books on Left */}
            <g transform={isHovered ? 'translate(32, 72) rotate(-3)' : 'translate(32, 75)'} style={{ transition: 'transform 0.4s ease' }}>
              {/* Bottom Book */}
              <path d="M 0 30 L 48 30 L 44 42 L -4 42 Z" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <path d="M -4 42 L 44 42 L 42 46 L -6 46 Z" fill="url(#book-spine-2)" />
              {/* Top Book */}
              <path d="M 2 16 L 46 16 L 42 26 L -2 26 Z" fill="#1e293b" stroke="#0d9488" strokeWidth="1" />
              <path d="M -2 26 L 42 26 L 40 30 L -4 30 Z" fill="url(#book-spine-1)" />
              {/* Bookmark ribbon */}
              <path d="M 32 26 L 36 34 L 32 32 L 28 34 Z" fill="#2dd4bf" />
            </g>

            {/* 3D Open Laptop */}
            <g transform={isHovered ? 'translate(95, 38) scale(1.03)' : 'translate(95, 42)'} style={{ transition: 'transform 0.4s ease' }}>
              {/* Laptop Screen Display */}
              <polygon points="12,10 78,10 72,58 6,58" fill="url(#laptop-screen)" stroke="#475569" strokeWidth="1.5" />
              {/* Screen Bevel Inner Glow */}
              <polygon points="14,12 76,12 70,56 8,56" fill="#020617" />

              {/* Code lines on screen */}
              <line x1="16" y1="20" x2="38" y2="20" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
              <line x1="42" y1="20" x2="56" y2="20" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
              <line x1="20" y1="28" x2="64" y2="28" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="20" y1="36" x2="52" y2="36" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="16" y1="44" x2="40" y2="44" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />

              {/* Floating AI Neural Symbol (sparkling above the laptop) */}
              <g transform="translate(42, 34)">
                <circle cx="0" cy="0" r="9" fill="#14b8a6" fillOpacity="0.25" stroke="#2dd4bf" strokeWidth="1.2" />
                <path d="M -4 -2 L 0 -5 L 4 -2 L 3 3 L -3 3 Z" fill="#5eead4" />
                <circle cx="0" cy="-5" r="1.5" fill="#ffffff" />
                <circle cx="-4" cy="-2" r="1.5" fill="#ffffff" />
                <circle cx="4" cy="-2" r="1.5" fill="#ffffff" />
                <circle cx="3" cy="3" r="1.5" fill="#ffffff" />
                <circle cx="-3" cy="3" r="1.5" fill="#ffffff" />
              </g>

              {/* Laptop Keyboard Base (Isometric projection) */}
              <polygon points="6,58 72,58 84,76 -6,76" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
              {/* Trackpad */}
              <polygon points="30,68 50,68 52,73 28,73" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
            </g>

            {/* Floating Sparkle Elements */}
            <g transform={isHovered ? 'translate(195, 45) rotate(15)' : 'translate(195, 48)'}>
              <polygon points="0,-8 2,-2 8,0 2,2 0,8 -2,2 -8,0 -2,-2" fill="#2dd4bf" />
            </g>
          </svg>
        </div>
      );

    // 03 — Jobs & Placement: 3D briefcase + professional + office
    case 'jobs-placement':
      return (
        <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
          <svg viewBox="0 0 240 140" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="briefcase-body" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="office-glass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0f766e" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#020617" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Background Office Skyline silhouette */}
            <g opacity="0.6">
              <rect x="145" y="32" width="28" height="70" fill="#1e293b" rx="2" stroke="#334155" strokeWidth="1" />
              <rect x="178" y="18" width="34" height="84" fill="#0f172a" rx="2" stroke="#334155" strokeWidth="1" />
              {/* Office Windows */}
              <line x1="152" y1="42" x2="166" y2="42" stroke="#2dd4bf" strokeWidth="1.5" strokeOpacity="0.7" />
              <line x1="152" y1="52" x2="166" y2="52" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.7" />
              <line x1="152" y1="62" x2="166" y2="62" stroke="#64748b" strokeWidth="1.5" />
              <line x1="186" y1="28" x2="204" y2="28" stroke="#2dd4bf" strokeWidth="1.5" strokeOpacity="0.9" />
              <line x1="186" y1="38" x2="204" y2="38" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.8" />
              <line x1="186" y1="48" x2="204" y2="48" stroke="#2dd4bf" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="186" y1="58" x2="204" y2="58" stroke="#64748b" strokeWidth="1.5" />
            </g>

            {/* Base Drop Shadow */}
            <ellipse cx="95" cy="116" rx="55" ry="12" fill="#000000" opacity="0.45" />

            {/* 3D Executive Briefcase */}
            <g transform={isHovered ? 'translate(60, 48) scale(1.04)' : 'translate(60, 52)'} style={{ transition: 'transform 0.4s ease' }}>
              {/* Briefcase Handle */}
              <path d="M 26 8 C 26 0, 44 0, 44 8" stroke="#2dd4bf" strokeWidth="3" fill="none" strokeLinecap="round" />

              {/* Main Body */}
              <rect x="6" y="8" width="58" height="46" rx="6" fill="url(#briefcase-body)" stroke="#334155" strokeWidth="1.5" />
              {/* Top Flap Section */}
              <path d="M 6 12 L 6 28 L 35 34 L 64 28 L 64 12 Z" fill="#334155" stroke="#475569" strokeWidth="1" />
              {/* Metallic Brass/Teal Clasps */}
              <rect x="18" y="24" width="6" height="8" rx="1.5" fill="#2dd4bf" />
              <rect x="46" y="24" width="6" height="8" rx="1.5" fill="#2dd4bf" />

              {/* Professional Verified Check Badge */}
              <g transform="translate(35, 42)">
                <circle cx="0" cy="0" r="8" fill="#0f766e" stroke="#2dd4bf" strokeWidth="1.5" />
                <path d="M -3 0 L -1 3 L 4 -2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>
            </g>
          </svg>
        </div>
      );

    // 04 — Study Abroad: 3D globe + airplane + university
    case 'study-abroad':
      return (
        <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
          <svg viewBox="0 0 240 140" className="w-full h-full" fill="none">
            <defs>
              <radialGradient id="mini-globe-grad" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#0d9488" />
                <stop offset="50%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </radialGradient>
              <linearGradient id="orbit-trail" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
                <stop offset="60%" stopColor="#2dd4bf" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#5eead4" />
              </linearGradient>
            </defs>

            {/* Neoclassical University Silhouette on Left */}
            <g opacity="0.6" transform="translate(18, 55)">
              <polygon points="25,5 5,18 45,18" fill="#1e293b" stroke="#334155" strokeWidth="1" />
              <rect x="8" y="18" width="5" height="28" fill="#334155" />
              <rect x="18" y="18" width="5" height="28" fill="#334155" />
              <rect x="28" y="18" width="5" height="28" fill="#334155" />
              <rect x="38" y="18" width="5" height="28" fill="#334155" />
              <rect x="4" y="44" width="43" height="5" fill="#475569" />
            </g>

            {/* 3D Globe with Latitude/Longitude */}
            <g transform={isHovered ? 'translate(130, 68) scale(1.06)' : 'translate(130, 70)'} style={{ transition: 'transform 0.5s ease' }}>
              {/* Globe Shadow */}
              <ellipse cx="0" cy="42" rx="34" ry="10" fill="#000000" opacity="0.45" />

              {/* Sphere */}
              <circle cx="0" cy="0" r="34" fill="url(#mini-globe-grad)" stroke="#2dd4bf" strokeWidth="1.8" />

              {/* Latitudes & Longitudes */}
              <ellipse cx="0" cy="0" rx="34" ry="14" stroke="#2dd4bf" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="3 3" />
              <ellipse cx="0" cy="0" rx="14" ry="34" stroke="#2dd4bf" strokeWidth="0.8" strokeOpacity="0.4" />
              <line x1="-34" y1="0" x2="34" y2="0" stroke="#2dd4bf" strokeWidth="1" strokeOpacity="0.5" />

              {/* Mini Continent Blobs */}
              <path d="M -16 -12 Q -8 -20 2 -14 Q 10 -8 4 -2 Q -4 4 -14 -2 Z" fill="#2dd4bf" fillOpacity="0.6" />
              <path d="M 6 8 Q 16 4 20 12 Q 14 22 4 18 Z" fill="#14b8a6" fillOpacity="0.6" />

              {/* Orbital Flight Arc */}
              <path
                d="M -50 20 C -45 -35, 45 -45, 55 10"
                stroke="url(#orbit-trail)"
                strokeWidth="2.5"
                strokeDasharray="4 3"
                className={isHovered ? 'animate-pulse' : ''}
              />

              {/* Jetliner Airplane Traveling on Orbit */}
              <g transform="translate(38, -24) rotate(42)">
                <path d="M 0 -10 L 4 0 L 14 4 L 4 5 L 4 11 L 8 13 L 0 13 L -8 13 L -4 11 L -4 5 L -14 4 L -4 0 Z" fill="#ffffff" />
                <circle cx="0" cy="-3" r="1.5" fill="#2dd4bf" />
              </g>
            </g>
          </svg>
        </div>
      );

    // 05 — Study in India: 3D Indian university/campus + graduation cap
    case 'study-in-india':
      return (
        <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
          <svg viewBox="0 0 240 140" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="dome-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#0f766e" />
              </linearGradient>
            </defs>

            {/* Campus Lawn Drop Shadow */}
            <ellipse cx="120" cy="115" rx="75" ry="12" fill="#000000" opacity="0.4" />

            {/* Campus Architectural Facade (Stately Indian University Central Block) */}
            <g transform={isHovered ? 'translate(70, 36) scale(1.03)' : 'translate(70, 40)'} style={{ transition: 'transform 0.4s ease' }}>
              {/* Center Heritage Dome */}
              <path d="M 40 28 C 40 10, 60 10, 60 28 Z" fill="url(#dome-grad)" stroke="#5eead4" strokeWidth="1" />
              <line x1="50" y1="5" x2="50" y2="14" stroke="#5eead4" strokeWidth="2" />
              <circle cx="50" cy="5" r="2" fill="#ffffff" />

              {/* Central Block */}
              <rect x="28" y="28" width="44" height="42" fill="#1e293b" stroke="#334155" strokeWidth="1.2" />
              {/* Grand Arch Doorway */}
              <path d="M 42 70 L 42 50 C 42 44, 58 44, 58 50 L 58 70 Z" fill="#090d16" stroke="#2dd4bf" strokeWidth="1.5" />

              {/* Left Wing */}
              <rect x="0" y="38" width="28" height="32" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <rect x="6" y="44" width="6" height="10" rx="1" fill="#38bdf8" fillOpacity="0.7" />
              <rect x="16" y="44" width="6" height="10" rx="1" fill="#38bdf8" fillOpacity="0.7" />

              {/* Right Wing */}
              <rect x="72" y="38" width="28" height="32" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <rect x="78" y="44" width="6" height="10" rx="1" fill="#38bdf8" fillOpacity="0.7" />
              <rect x="88" y="44" width="6" height="10" rx="1" fill="#38bdf8" fillOpacity="0.7" />

              {/* Base Steps Plinth */}
              <rect x="-8" y="70" width="116" height="6" rx="2" fill="#334155" />
            </g>

            {/* 3D Floating Graduation Cap (Mortarboard) */}
            <g transform={isHovered ? 'translate(182, 38) rotate(-12) scale(1.1)' : 'translate(180, 44) rotate(-6)'} style={{ transition: 'transform 0.45s ease' }}>
              <ellipse cx="0" cy="12" rx="14" ry="4" fill="#000000" opacity="0.3" />
              {/* Cap Skull Cap */}
              <path d="M -9 2 L -9 9 C -9 14, 9 14, 9 9 L 9 2 Z" fill="#0d9488" />
              {/* Diamond Top */}
              <polygon points="0,-10 24,0 0,10 -24,0" fill="#0f172a" stroke="#2dd4bf" strokeWidth="1.8" />
              {/* Center button */}
              <circle cx="0" cy="0" r="2.5" fill="#f8fafc" />
              {/* Tassel */}
              <path d="M 0 0 C 8 2, 14 8, 16 16" stroke="#f59e0b" strokeWidth="1.8" fill="none" />
              <circle cx="16" cy="16" r="2" fill="#f59e0b" />
            </g>
          </svg>
        </div>
      );

    // 06 — School & College Programs: 3D campus + students
    case 'school-college-programs':
      return (
        <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
          <svg viewBox="0 0 240 140" className="w-full h-full" fill="none">
            {/* Campus Hall Backdrop */}
            <g transform="translate(45, 30)">
              {/* School Clock Tower */}
              <polygon points="75,0 55,14 95,14" fill="#14b8a6" stroke="#2dd4bf" strokeWidth="1" />
              <rect x="62" y="14" width="26" height="34" fill="#1e293b" stroke="#334155" strokeWidth="1" />
              {/* Clock Face */}
              <circle cx="75" cy="26" r="6" fill="#090d16" stroke="#2dd4bf" strokeWidth="1" />
              <line x1="75" y1="26" x2="75" y2="23" stroke="#ffffff" strokeWidth="1" />
              <line x1="75" y1="26" x2="77" y2="26" stroke="#2dd4bf" strokeWidth="1" />

              {/* Main Hall Wings */}
              <rect x="20" y="40" width="110" height="38" fill="#0f172a" stroke="#334155" strokeWidth="1.2" />
              {/* Windows Matrix */}
              <rect x="30" y="48" width="8" height="12" fill="#38bdf8" fillOpacity="0.7" rx="1" />
              <rect x="44" y="48" width="8" height="12" fill="#38bdf8" fillOpacity="0.7" rx="1" />
              <rect x="98" y="48" width="8" height="12" fill="#38bdf8" fillOpacity="0.7" rx="1" />
              <rect x="112" y="48" width="8" height="12" fill="#38bdf8" fillOpacity="0.7" rx="1" />
            </g>

            {/* 3D Student Cohort in Foreground */}
            <g transform={isHovered ? 'translate(100, 88) scale(1.05)' : 'translate(100, 92)'} style={{ transition: 'transform 0.4s ease' }}>
              {/* Student 1 (Left) */}
              <g transform="translate(-32, 0)">
                <circle cx="0" cy="-14" r="7" fill="#38bdf8" stroke="#0f172a" strokeWidth="1.5" />
                <path d="M -9 8 C -9 -2, 9 -2, 9 8 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.2" />
              </g>

              {/* Student 2 (Center Leader) */}
              <g transform="translate(0, -6)">
                <circle cx="0" cy="-15" r="8" fill="#2dd4bf" stroke="#0f172a" strokeWidth="1.5" />
                <path d="M -11 10 C -11 -3, 11 -3, 11 10 Z" fill="#0d9488" stroke="#5eead4" strokeWidth="1.2" />
                {/* Backpack / Book */}
                <rect x="-4" y="2" width="8" height="8" rx="1" fill="#f8fafc" />
              </g>

              {/* Student 3 (Right) */}
              <g transform="translate(32, 0)">
                <circle cx="0" cy="-14" r="7" fill="#818cf8" stroke="#0f172a" strokeWidth="1.5" />
                <path d="M -9 8 C -9 -2, 9 -2, 9 8 Z" fill="#1e293b" stroke="#818cf8" strokeWidth="1.2" />
              </g>
            </g>
          </svg>
        </div>
      );

    // 07 — Corporate Training & HR: 3D corporate building + people/network
    case 'corporate-training':
      return (
        <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
          <svg viewBox="0 0 240 140" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="corp-tower-1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="corp-tower-2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0f766e" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
            </defs>

            {/* Corporate Glass Towers */}
            <g transform={isHovered ? 'translate(65, 24) scale(1.02)' : 'translate(65, 26)'} style={{ transition: 'transform 0.4s ease' }}>
              {/* Secondary Tower */}
              <rect x="0" y="30" width="38" height="66" fill="url(#corp-tower-1)" stroke="#334155" strokeWidth="1.2" rx="3" />
              {/* Primary Modern Highrise */}
              <rect x="30" y="10" width="46" height="86" fill="url(#corp-tower-2)" stroke="#2dd4bf" strokeWidth="1.5" rx="4" />

              {/* Diagonal Architectural Glass Facets */}
              <line x1="32" y1="20" x2="74" y2="44" stroke="#2dd4bf" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="32" y1="44" x2="74" y2="68" stroke="#2dd4bf" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="32" y1="68" x2="74" y2="92" stroke="#2dd4bf" strokeWidth="1" strokeOpacity="0.4" />
            </g>

            {/* 3D Interconnected HR / Team Network Nodes */}
            <g transform={isHovered ? 'translate(140, 68) scale(1.06)' : 'translate(140, 70)'} style={{ transition: 'transform 0.4s ease' }}>
              {/* Connecting Data Network Mesh */}
              <line x1="0" y1="0" x2="35" y2="-20" stroke="#2dd4bf" strokeWidth="1.8" strokeDasharray="3 2" />
              <line x1="0" y1="0" x2="40" y2="24" stroke="#2dd4bf" strokeWidth="1.8" strokeDasharray="3 2" />
              <line x1="35" y1="-20" x2="40" y2="24" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.6" />

              {/* Central HR Lead Node */}
              <circle cx="0" cy="0" r="13" fill="#0f172a" stroke="#2dd4bf" strokeWidth="2" />
              <circle cx="0" cy="-4" r="4" fill="#2dd4bf" />
              <path d="M -6 7 C -6 2, 6 2, 6 7" stroke="#2dd4bf" strokeWidth="1.5" fill="none" />

              {/* Network Node 2 */}
              <circle cx="35" cy="-20" r="9" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.8" />
              <circle cx="35" cy="-22" r="3" fill="#38bdf8" />
              <path d="M 31 -14 C 31 -17, 39 -17, 39 -14" stroke="#38bdf8" strokeWidth="1.2" fill="none" />

              {/* Network Node 3 */}
              <circle cx="40" cy="24" r="9" fill="#0f172a" stroke="#818cf8" strokeWidth="1.8" />
              <circle cx="40" cy="22" r="3" fill="#818cf8" />
              <path d="M 36 30 C 36 27, 44 27, 44 30" stroke="#818cf8" strokeWidth="1.2" fill="none" />
            </g>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
