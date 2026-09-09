import React from 'react';

interface TrackVisual3DProps {
  iconType: string;
  className?: string;
  isHovered?: boolean;
  highlightItaly?: boolean;
}

export const TrackVisual3D: React.FC<TrackVisual3DProps> = ({
  iconType,
  className = 'w-16 h-16',
  isHovered = false,
  highlightItaly = false
}) => {
  // Shared gradient & filter definitions
  const defs = (
    <defs>
      <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2dd4bf" />
        <stop offset="100%" stopColor="#0d9488" />
      </linearGradient>
      <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="50%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <filter id="tealGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  );

  switch (iconType) {
    case 'counselling':
      // 3D Compass / Guiding Person
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          {defs}
          {/* Outer Ring with 3D bevel */}
          <circle cx="50" cy="50" r="42" stroke="#1e293b" strokeWidth="4" />
          <circle cx="50" cy="50" r="39" stroke="url(#tealGrad)" strokeWidth="2.5" opacity="0.8" />
          <circle cx="50" cy="50" r="33" fill="#0b1329" stroke="#334155" strokeWidth="1" />
          {/* Compass Dial Ticks */}
          <line x1="50" y1="18" x2="50" y2="24" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="76" x2="50" y2="82" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18" y1="50" x2="24" y2="50" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="76" y1="50" x2="82" y2="50" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
          {/* 3D Compass Needle */}
          <g
            className="transition-transform duration-700 ease-out"
            style={{
              transform: isHovered ? 'rotate(35deg)' : 'rotate(0deg)',
              transformOrigin: '50px 50px'
            }}
          >
            {/* North Point (Teal) */}
            <polygon points="50,22 56,50 50,45" fill="url(#tealGrad)" filter="url(#tealGlow)" />
            <polygon points="50,22 44,50 50,45" fill="#14b8a6" />
            {/* South Point (Slate) */}
            <polygon points="50,78 56,50 50,55" fill="#475569" />
            <polygon points="50,78 44,50 50,55" fill="#334155" />
            {/* Center Pivot */}
            <circle cx="50" cy="50" r="4.5" fill="#ffffff" stroke="#0d9488" strokeWidth="2" />
          </g>
          {/* Floating Person Guide Silhouette Accent */}
          <circle cx="72" cy="28" r="4" fill="#38bdf8" opacity="0.8" />
          <path d="M66 38 C66 33, 78 33, 78 38" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        </svg>
      );

    case 'roadmap':
      // 3D Isometric Roadmap / Milestone Path
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          {defs}
          {/* Isometric Ground Grid */}
          <path d="M15 65 L50 45 L85 65 L50 85 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
          {/* Winding 3D Road */}
          <path
            d="M20 70 Q 38 52 50 60 T 80 40"
            stroke="#1e293b"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M20 70 Q 38 52 50 60 T 80 40"
            stroke="url(#tealGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M20 70 Q 38 52 50 60 T 80 40"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          {/* Milestone Node 1 */}
          <g transform="translate(24, 62)">
            <circle cx="0" cy="0" r="4.5" fill="#0f172a" stroke="#2dd4bf" strokeWidth="2" />
            <circle cx="0" cy="0" r="2" fill="#2dd4bf" />
          </g>
          {/* Milestone Node 2 */}
          <g transform="translate(50, 56)">
            <circle cx="0" cy="0" r="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="0" cy="0" r="2.5" fill="#38bdf8" />
          </g>
          {/* Target Flag at top (Node 3) */}
          <g transform="translate(78, 36)">
            <line x1="0" y1="0" x2="0" y2="-18" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
            <polygon points="0,-18 12,-13 0,-8" fill="url(#tealGrad)" />
            <circle cx="0" cy="0" r="3" fill="#ffffff" />
          </g>
        </svg>
      );

    case 'stream':
      // 3D Branching Pathway (Science, Commerce, Humanities Fork)
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          {defs}
          {/* Trunk */}
          <line x1="50" y1="85" x2="50" y2="55" stroke="url(#tealGrad)" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="85" r="4.5" fill="#0f172a" stroke="#2dd4bf" strokeWidth="2" />
          {/* Convergence Node */}
          <circle cx="50" cy="55" r="6" fill="url(#tealGrad)" filter="url(#tealGlow)" />
          {/* Left Branch (Science / Tech) */}
          <path d="M50 55 C45 42, 28 42, 24 25" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          <circle cx="24" cy="25" r="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <path d="M21 25 L27 25 M24 22 L24 28" stroke="#38bdf8" strokeWidth="1.5" />
          {/* Middle Branch (Management / Commerce) */}
          <line x1="50" y1="55" x2="50" y2="20" stroke="#2dd4bf" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="20" r="5.5" fill="#0f172a" stroke="#2dd4bf" strokeWidth="2" />
          <circle cx="50" cy="20" r="2.5" fill="#2dd4bf" />
          {/* Right Branch (Humanities / Design) */}
          <path d="M50 55 C55 42, 72 42, 76 25" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" />
          <circle cx="76" cy="25" r="5" fill="#0f172a" stroke="#a78bfa" strokeWidth="2" />
          <polygon points="76,22 79,27 73,27" fill="#a78bfa" />
        </svg>
      );

    case 'course-college':
      // 3D University Facade & Academic Book
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          {defs}
          {/* Pediment (Triangle Roof) */}
          <polygon points="50,22 18,36 82,36" fill="url(#metalGrad)" stroke="#334155" strokeWidth="1.5" />
          <polygon points="50,26 24,37 76,37" fill="#1e293b" />
          <circle cx="50" cy="31" r="2.5" fill="#2dd4bf" />
          {/* Entablature beam */}
          <rect x="20" y="36" width="60" height="4" fill="url(#tealGrad)" rx="1" />
          {/* Pillars */}
          <rect x="25" y="40" width="6" height="26" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="1" />
          <rect x="39" y="40" width="6" height="26" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="1" />
          <rect x="55" y="40" width="6" height="26" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="1" />
          <rect x="69" y="40" width="6" height="26" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="1" />
          {/* Base Platform */}
          <rect x="16" y="66" width="68" height="5" fill="#0f172a" stroke="#1e293b" strokeWidth="1" rx="1.5" />
          <rect x="12" y="71" width="76" height="5" fill="#1e293b" rx="1" />
          {/* Graduation Cap Hovering */}
          <g
            className="transition-transform duration-500"
            style={{
              transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
              transformOrigin: '50px 20px'
            }}
          >
            <polygon points="50,12 68,18 50,24 32,18" fill="url(#tealGrad)" />
            <path d="M40 21 L40 26 C40 29 60 29 60 26 L60 21" fill="#0d9488" />
            <line x1="68" y1="18" x2="71" y2="24" stroke="#fbbf24" strokeWidth="1.5" />
          </g>
        </svg>
      );

    case 'career-change':
      // 3D Directional Pivot Arrows / Transformation Cycle
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          {defs}
          {/* Rotating Loop Orbit */}
          <circle cx="50" cy="50" r="34" stroke="#1e293b" strokeWidth="5" strokeDasharray="8 6" />
          {/* Sweeping Arc 1 (Teal) */}
          <path
            d="M50 16 A34 34 0 0 1 84 50"
            stroke="url(#tealGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            filter="url(#tealGlow)"
          />
          <polygon points="84,46 92,54 80,56" fill="#2dd4bf" />
          {/* Sweeping Arc 2 (Cyan) */}
          <path
            d="M50 84 A34 34 0 0 1 16 50"
            stroke="url(#cyanGrad)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <polygon points="16,54 8,46 20,44" fill="#38bdf8" />
          {/* Center Shift Badge */}
          <circle cx="50" cy="50" r="14" fill="#0f172a" stroke="#334155" strokeWidth="2" />
          <path d="M43 50 L57 50 M51 44 L57 50 L51 56" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'psychometric':
      // 3D Cognitive Brain & Calibration Nodes
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          {defs}
          {/* Brain Contour Glow */}
          <g filter="url(#tealGlow)" opacity="0.6">
            <path
              d="M36 34 C30 34, 25 40, 26 48 C22 52, 23 60, 28 64 C28 72, 38 74, 46 72 C46 64, 46 42, 46 34 C42 34, 38 34, 36 34 Z"
              stroke="#2dd4bf"
              strokeWidth="2"
            />
            <path
              d="M64 34 C70 34, 75 40, 74 48 C78 52, 77 60, 72 64 C72 72, 62 74, 54 72 C54 64, 54 42, 54 34 C58 34, 62 34, 64 34 Z"
              stroke="#38bdf8"
              strokeWidth="2"
            />
          </g>
          {/* Brain Left Hemisphere */}
          <path
            d="M36 34 C30 34, 25 40, 26 48 C22 52, 23 60, 28 64 C28 72, 38 74, 46 72 C46 64, 46 42, 46 34 C42 34, 38 34, 36 34 Z"
            fill="#0f172a"
            stroke="#2dd4bf"
            strokeWidth="2.5"
          />
          {/* Brain Right Hemisphere */}
          <path
            d="M64 34 C70 34, 75 40, 74 48 C78 52, 77 60, 72 64 C72 72, 62 74, 54 72 C54 64, 54 42, 54 34 C58 34, 62 34, 64 34 Z"
            fill="#0f172a"
            stroke="#38bdf8"
            strokeWidth="2.5"
          />
          {/* Neural Synapse Nodes & Interconnects */}
          <line x1="34" y1="46" x2="44" y2="52" stroke="#2dd4bf" strokeWidth="1.5" />
          <line x1="44" y1="52" x2="36" y2="62" stroke="#2dd4bf" strokeWidth="1.5" />
          <line x1="56" y1="52" x2="66" y2="46" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="56" y1="52" x2="64" y2="62" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="34" cy="46" r="3" fill="#2dd4bf" />
          <circle cx="44" cy="52" r="3.5" fill="#ffffff" />
          <circle cx="36" cy="62" r="3" fill="#2dd4bf" />
          <circle cx="66" cy="46" r="3" fill="#38bdf8" />
          <circle cx="56" cy="52" r="3.5" fill="#ffffff" />
          <circle cx="64" cy="62" r="3" fill="#38bdf8" />
          {/* Central Diagnostic Pulse */}
          <circle cx="50" cy="52" r="2" fill="#2dd4bf" />
        </svg>
      );

    case 'skill-dev':
      // 3D Laptop & Stack of Books / Terminal
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          {defs}
          {/* Books Stack Base */}
          <rect x="22" y="70" width="56" height="7" rx="2" fill="#1e293b" stroke="#334155" strokeWidth="1" />
          <rect x="25" y="72" width="6" height="3" fill="#2dd4bf" rx="0.5" />
          {/* Laptop Base */}
          <polygon points="18,66 82,66 88,70 12,70" fill="url(#metalGrad)" stroke="#475569" strokeWidth="1" />
          <rect x="42" y="66.5" width="16" height="2" fill="#64748b" rx="0.5" />
          {/* Laptop Screen */}
          <rect x="24" y="26" width="52" height="38" rx="3" fill="#0b1120" stroke="#475569" strokeWidth="2" />
          {/* Screen Content / Code Lines */}
          <rect x="28" y="30" width="44" height="30" fill="#0f172a" rx="1.5" />
          <rect x="32" y="35" width="14" height="2.5" fill="#2dd4bf" rx="0.5" />
          <rect x="48" y="35" width="18" height="2.5" fill="#38bdf8" rx="0.5" />
          <rect x="36" y="41" width="28" height="2" fill="#94a3b8" rx="0.5" />
          <rect x="36" y="46" width="20" height="2" fill="#94a3b8" rx="0.5" />
          <rect x="32" y="52" width="12" height="2.5" fill="#a78bfa" rx="0.5" />
          {/* Terminal Prompt Cursor */}
          <rect x="46" y="52" width="3" height="3" fill="#2dd4bf" />
        </svg>
      );

    case 'placement':
      // 3D Corporate Briefcase with Verified Check Badge
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          {defs}
          {/* Handle */}
          <path d="M38 32 C38 25, 62 25, 62 32" stroke="#64748b" strokeWidth="3" fill="none" />
          <path d="M40 32 C40 28, 60 28, 60 32" stroke="url(#tealGrad)" strokeWidth="1.5" fill="none" />
          {/* Main Case Body */}
          <rect x="18" y="32" width="64" height="44" rx="6" fill="url(#metalGrad)" stroke="#334155" strokeWidth="2" />
          {/* Metallic Corner Protectors */}
          <path d="M18 42 L24 32" stroke="#64748b" strokeWidth="1.5" />
          <path d="M82 42 L76 32" stroke="#64748b" strokeWidth="1.5" />
          {/* Leather Accent Straps */}
          <line x1="32" y1="32" x2="32" y2="76" stroke="#0f172a" strokeWidth="3" />
          <line x1="32" y1="32" x2="32" y2="76" stroke="#334155" strokeWidth="1" />
          <line x1="68" y1="32" x2="68" y2="76" stroke="#0f172a" strokeWidth="3" />
          <line x1="68" y1="32" x2="68" y2="76" stroke="#334155" strokeWidth="1" />
          {/* Center Lock Latches */}
          <rect x="46" y="50" width="8" height="6" rx="1.5" fill="url(#tealGrad)" stroke="#ffffff" strokeWidth="0.5" />
          {/* Verified Placement Badge */}
          <g
            className="transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.15) translate(4px, -2px)' : 'scale(1)',
              transformOrigin: '72px 34px'
            }}
          >
            <circle cx="72" cy="34" r="9" fill="#0f172a" stroke="#2dd4bf" strokeWidth="2" />
            <circle cx="72" cy="34" r="7" fill="url(#tealGrad)" />
            <path d="M68 34 L71 37 L76 31" stroke="#0b1120" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );

    case 'study-abroad':
      // 3D Globe with Lat/Long + Orbiting Plane + Glowing Italy Pin Marker
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          {defs}
          {/* Outer Atmosphere Glow */}
          <circle cx="50" cy="50" r="38" fill="#0d9488" opacity="0.1" filter="url(#tealGlow)" />
          {/* Globe Sphere */}
          <circle cx="50" cy="50" r="34" fill="#0b132b" stroke="#1e293b" strokeWidth="2" />
          <circle cx="50" cy="50" r="34" stroke="url(#tealGrad)" strokeWidth="1.5" opacity="0.8" />
          {/* Latitude Lines */}
          <ellipse cx="50" cy="50" rx="34" ry="14" stroke="#1e3a5f" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="16" y1="50" x2="84" y2="50" stroke="#2dd4bf" strokeWidth="1" opacity="0.6" />
          {/* Longitude Meridians */}
          <ellipse cx="50" cy="50" rx="16" ry="34" stroke="#1e3a5f" strokeWidth="1.2" />
          <line x1="50" y1="16" x2="50" y2="84" stroke="#1e3a5f" strokeWidth="1" />

          {/* Continents Outline Accent */}
          {/* Europe / Med / Italy Outline */}
          <path
            d="M44 32 C48 30, 56 31, 58 35 C56 40, 52 43, 50 46 C48 45, 45 42, 44 38 Z"
            fill="#1e293b"
            stroke="#334155"
            strokeWidth="1"
            opacity="0.9"
          />

          {/* Glowing Italy Pin Marker (Special for Study Abroad Track 09) */}
          <g transform="translate(52, 38)">
            {/* Animated Pulsing Radar Rings */}
            <circle cx="0" cy="0" r="8" stroke="#2dd4bf" strokeWidth="1" opacity="0.8" className="animate-ping" />
            <circle cx="0" cy="0" r="4.5" fill="#14b8a6" stroke="#ffffff" strokeWidth="1.2" filter="url(#tealGlow)" />
            <circle cx="0" cy="0" r="2" fill="#ffffff" />
            {/* IT Floating Callout Tag */}
            <g transform="translate(6, -8)">
              <rect x="0" y="0" width="16" height="10" rx="2.5" fill="#0f172a" stroke="#2dd4bf" strokeWidth="1" />
              <text x="8" y="7.5" fill="#2dd4bf" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                IT
              </text>
            </g>
          </g>

          {/* Orbiting Airplane Arc */}
          <path
            d="M20 62 C26 78, 68 84, 82 56"
            stroke="url(#cyanGrad)"
            strokeWidth="1.8"
            strokeDasharray="4 3"
            strokeLinecap="round"
          />
          {/* Airplane Silhouette */}
          <g
            className="transition-transform duration-700"
            style={{
              transform: isHovered ? 'translate(84px, 52px) rotate(15deg)' : 'translate(80px, 56px) rotate(5deg)',
              transformOrigin: '0 0'
            }}
          >
            <polygon points="0,0 8,-4 6,0 12,2 5,2 3,5 0,0" fill="#ffffff" stroke="#0284c7" strokeWidth="0.5" />
          </g>
        </svg>
      );

    case 'study-india':
      // 3D Indian Architecture / Central University Dome & Laurel
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          {defs}
          {/* Saffron & Teal Ambient Rings */}
          <circle cx="50" cy="50" r="38" stroke="#1e293b" strokeWidth="2" />
          <circle cx="50" cy="50" r="36" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.6" />
          {/* Indian Heritage Central Dome (Chatri style) */}
          <path
            d="M32 44 C32 30, 50 20, 50 18 C50 20, 68 30, 68 44 Z"
            fill="#0f172a"
            stroke="#fbbf24"
            strokeWidth="2"
          />
          {/* Kalash Pinnacle finial */}
          <line x1="50" y1="18" x2="50" y2="12" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
          <circle cx="50" cy="12" r="1.5" fill="#ffffff" />
          {/* Pillars & Archway */}
          <rect x="30" y="44" width="40" height="4" fill="#334155" rx="1" />
          <rect x="34" y="48" width="6" height="22" fill="#1e293b" stroke="#334155" strokeWidth="1" />
          <rect x="60" y="48" width="6" height="22" fill="#1e293b" stroke="#334155" strokeWidth="1" />
          {/* Central Arch */}
          <path d="M40 70 L40 56 C40 50, 60 50, 60 56 L60 70 Z" fill="#0b1120" stroke="url(#tealGrad)" strokeWidth="1.5" />
          {/* Base Steps */}
          <rect x="22" y="70" width="56" height="4" fill="#1e293b" rx="1" />
          <rect x="18" y="74" width="64" height="4" fill="#0f172a" stroke="#334155" strokeWidth="1" rx="1" />
          {/* Ashoka Chakra Motif Accent */}
          <circle cx="50" cy="36" r="4" fill="#0b1120" stroke="#2dd4bf" strokeWidth="1.5" />
          <circle cx="50" cy="36" r="1" fill="#2dd4bf" />
        </svg>
      );

    case 'school-college':
      // 3D Campus Academy, Cohort & Flagpole
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          {defs}
          {/* Campus Main Hall */}
          <polygon points="50,22 22,38 78,38" fill="url(#metalGrad)" stroke="#334155" strokeWidth="1.5" />
          <rect x="26" y="38" width="48" height="28" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
          {/* Clock Tower Center */}
          <rect x="44" y="24" width="12" height="14" fill="#1e293b" stroke="#475569" strokeWidth="1" />
          <circle cx="50" cy="30" r="3" fill="#0f172a" stroke="#2dd4bf" strokeWidth="1.2" />
          {/* Windows Grid */}
          <rect x="30" y="42" width="6" height="8" rx="1" fill="#1e293b" stroke="#2dd4bf" strokeWidth="1" />
          <rect x="40" y="42" width="6" height="8" rx="1" fill="#1e293b" stroke="#2dd4bf" strokeWidth="1" />
          <rect x="54" y="42" width="6" height="8" rx="1" fill="#1e293b" stroke="#2dd4bf" strokeWidth="1" />
          <rect x="64" y="42" width="6" height="8" rx="1" fill="#1e293b" stroke="#2dd4bf" strokeWidth="1" />
          {/* Campus Entrance Portal */}
          <path d="M45 66 L45 56 C45 53 55 53 55 56 L55 66 Z" fill="#2dd4bf" opacity="0.9" />
          {/* Flagpole & Banner */}
          <line x1="50" y1="24" x2="50" y2="12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          <polygon points="50,13 62,17 50,21" fill="url(#tealGrad)" />
          {/* Cohort Student Silhouettes at front */}
          <circle cx="34" cy="74" r="3" fill="#38bdf8" />
          <path d="M30 82 C30 78, 38 78, 38 82" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="50" cy="73" r="3.5" fill="#2dd4bf" />
          <path d="M45 82 C45 77, 55 77, 55 82" stroke="#2dd4bf" strokeWidth="1.5" />
          <circle cx="66" cy="74" r="3" fill="#38bdf8" />
          <path d="M62 82 C62 78, 70 78, 70 82" stroke="#38bdf8" strokeWidth="1.5" />
        </svg>
      );

    case 'corporate-hr':
      // 3D Corporate Skyscraper & Executive Collaboration Team
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          {defs}
          {/* Left Tower */}
          <rect x="22" y="38" width="20" height="42" rx="2" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
          <rect x="26" y="44" width="4" height="4" fill="#38bdf8" opacity="0.6" rx="0.5" />
          <rect x="34" y="44" width="4" height="4" fill="#38bdf8" opacity="0.6" rx="0.5" />
          <rect x="26" y="52" width="4" height="4" fill="#38bdf8" opacity="0.6" rx="0.5" />
          <rect x="34" y="52" width="4" height="4" fill="#38bdf8" opacity="0.6" rx="0.5" />
          <rect x="26" y="60" width="4" height="4" fill="#38bdf8" opacity="0.6" rx="0.5" />
          <rect x="34" y="60" width="4" height="4" fill="#38bdf8" opacity="0.6" rx="0.5" />
          {/* Center Main High-Rise Headquarters */}
          <rect x="40" y="20" width="28" height="60" rx="3" fill="url(#metalGrad)" stroke="#475569" strokeWidth="2" />
          {/* Angled Roof Spires */}
          <line x1="54" y1="20" x2="54" y2="10" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
          <circle cx="54" cy="10" r="1.5" fill="#ffffff" />
          {/* Glass Facade Windows */}
          <rect x="46" y="26" width="6" height="5" fill="#2dd4bf" opacity="0.8" rx="0.5" />
          <rect x="56" y="26" width="6" height="5" fill="#2dd4bf" opacity="0.8" rx="0.5" />
          <rect x="46" y="35" width="6" height="5" fill="#2dd4bf" opacity="0.8" rx="0.5" />
          <rect x="56" y="35" width="6" height="5" fill="#2dd4bf" opacity="0.8" rx="0.5" />
          <rect x="46" y="44" width="6" height="5" fill="#2dd4bf" opacity="0.8" rx="0.5" />
          <rect x="56" y="44" width="6" height="5" fill="#2dd4bf" opacity="0.8" rx="0.5" />
          {/* Right Tower */}
          <rect x="66" y="44" width="16" height="36" rx="2" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
          <rect x="71" y="50" width="6" height="4" fill="#38bdf8" opacity="0.5" rx="0.5" />
          <rect x="71" y="58" width="6" height="4" fill="#38bdf8" opacity="0.5" rx="0.5" />
          {/* Executive Collaborative Ring in Foreground */}
          <ellipse cx="50" cy="78" rx="36" ry="6" fill="#0b1120" stroke="#1e293b" strokeWidth="1.5" />
          {/* Partner Nodes */}
          <circle cx="28" cy="78" r="3" fill="#2dd4bf" />
          <circle cx="50" cy="80" r="3.5" fill="#38bdf8" />
          <circle cx="72" cy="78" r="3" fill="#2dd4bf" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          {defs}
          <circle cx="50" cy="50" r="36" fill="#0f172a" stroke="url(#tealGrad)" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="16" fill="url(#tealGrad)" opacity="0.8" />
        </svg>
      );
  }
};
