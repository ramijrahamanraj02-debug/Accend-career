import os
import subprocess

def generate_svg():
    svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <!-- Background Sky Gradient -->
    <linearGradient id="sky-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b4d66" />
      <stop offset="35%" stop-color="#5a6e87" />
      <stop offset="65%" stop-color="#8094a8" />
      <stop offset="85%" stop-color="#9eb1c2" />
      <stop offset="100%" stop-color="#b6c7d4" />
    </linearGradient>

    <!-- Campus Ground Ambient -->
    <linearGradient id="ground-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#232a35" />
      <stop offset="30%" stop-color="#1b212b" />
      <stop offset="70%" stop-color="#141a22" />
      <stop offset="100%" stop-color="#0e1218" />
    </linearGradient>

    <!-- Glowing Core Atmosphere -->
    <radialGradient id="central-beam" cx="50%" cy="38%" r="45%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
      <stop offset="15%" stop-color="#bbf2f6" stop-opacity="0.85" />
      <stop offset="35%" stop-color="#38bdf8" stop-opacity="0.5" />
      <stop offset="65%" stop-color="#0284c7" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="sphere-core" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="25%" stop-color="#fef08a" stop-opacity="0.9" />
      <stop offset="55%" stop-color="#38bdf8" stop-opacity="0.6" />
      <stop offset="85%" stop-color="#0284c7" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#0369a1" stop-opacity="0" />
    </radialGradient>

    <!-- Gold Metallic Ingot for STUDY IN INDIA -->
    <linearGradient id="gold-metal" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fffbeb" />
      <stop offset="20%" stop-color="#fde047" />
      <stop offset="45%" stop-color="#d97706" />
      <stop offset="75%" stop-color="#b45309" />
      <stop offset="90%" stop-color="#fde68a" />
      <stop offset="100%" stop-color="#78350f" />
    </linearGradient>

    <!-- Cyan Glow for DIRECT ADMISSIONS -->
    <linearGradient id="cyan-glow-text" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="30%" stop-color="#e0f2fe" />
      <stop offset="70%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>

    <!-- Platform Rim Inlay -->
    <linearGradient id="bronze-rim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#92400e" />
      <stop offset="25%" stop-color="#d97706" />
      <stop offset="50%" stop-color="#fef3c7" />
      <stop offset="75%" stop-color="#b45309" />
      <stop offset="100%" stop-color="#78350f" />
    </linearGradient>

    <!-- Glass Arch Glow -->
    <linearGradient id="arch-glow" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.1" />
      <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#e0f2fe" stop-opacity="0.95" />
    </linearGradient>

    <!-- Neon Green for Medical / Business -->
    <linearGradient id="neon-green" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4ade80" />
      <stop offset="100%" stop-color="#22c55e" />
    </linearGradient>

    <!-- Book Glow -->
    <radialGradient id="book-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.9" />
      <stop offset="40%" stop-color="#eab308" stop-opacity="0.6" />
      <stop offset="80%" stop-color="#ca8a04" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- 1. BACKGROUND SKY -->
  <rect x="0" y="0" width="1920" height="420" fill="url(#sky-grad)" />

  <!-- 2. CITY SKYLINE SILHOUETTES -->
  <!-- Left Skyline: Taj Mahal + Highrises -->
  <g opacity="0.45" fill="#475569">
    <!-- Far Left Skyscraper cluster -->
    <rect x="30" y="130" width="40" height="260" />
    <rect x="80" y="110" width="35" height="280" />
    <rect x="125" y="150" width="25" height="240" />

    <!-- Taj Mahal Iconic Dome and Minarets -->
    <!-- Left Minaret -->
    <rect x="175" y="160" width="8" height="230" />
    <polygon points="175,160 179,145 183,160" />
    <!-- Main Center Dome -->
    <path d="M 220 280 C 220 180, 240 100, 265 85 C 290 100, 310 180, 310 280 Z" />
    <rect x="263" y="60" width="4" height="25" />
    <!-- Flanking Domes -->
    <path d="M 195 240 C 195 180, 205 130, 218 120 C 231 130, 241 180, 241 240 Z" />
    <path d="M 289 240 C 289 180, 299 130, 312 120 C 325 130, 335 180, 335 240 Z" />
    <!-- Right Minaret -->
    <rect x="347" y="160" width="8" height="230" />
    <polygon points="347,160 351,145 355,160" />

    <!-- Additional Indian and Global Towers -->
    <rect x="375" y="100" width="45" height="290" />
    <polygon points="375,100 397,60 420,100" />
    <rect x="430" y="80" width="35" height="310" />
    <rect x="475" y="140" width="50" height="250" />
    <rect x="540" y="120" width="40" height="270" />
  </g>

  <!-- Right Skyline: Modern Futuristic Metropolis -->
  <g opacity="0.45" fill="#475569">
    <rect x="1350" y="140" width="50" height="250" />
    <rect x="1410" y="110" width="45" height="280" />
    <!-- Gherkin / Twisted Spire -->
    <path d="M 1480 340 C 1480 200, 1500 70, 1520 20 C 1540 70, 1560 200, 1560 340 Z" />
    <rect x="1575" y="130" width="40" height="260" />
    <rect x="1625" y="90" width="50" height="300" />
    <polygon points="1625,90 1650,45 1675,90" />
    <rect x="1690" y="120" width="45" height="270" />
    <rect x="1750" y="80" width="60" height="310" />
    <rect x="1830" y="130" width="55" height="260" />
  </g>

  <!-- 3. CAMPUS GROUND & ISOMETRIC SLATE BASE -->
  <rect x="0" y="320" width="1920" height="760" fill="url(#ground-grad)" />

  <!-- Perimeter Trees Landscape -->
  <g fill="#1e3a2f" opacity="0.8">
    <circle cx="120" cy="360" r="35" />
    <circle cx="160" cy="350" r="45" />
    <circle cx="210" cy="365" r="40" />
    <circle cx="380" cy="370" r="35" />
    <circle cx="430" cy="360" r="45" />
    <circle cx="580" cy="380" r="35" />
    <circle cx="1320" cy="370" r="40" />
    <circle cx="1400" cy="360" r="45" />
    <circle cx="1780" cy="370" r="45" />
    <circle cx="1840" cy="360" r="50" />
  </g>

  <!-- 4. RADIATING GLOWING CIRCUIT TRACKS & PATHWAYS -->
  <g stroke="#38bdf8" stroke-width="4" fill="none" opacity="0.6">
    <!-- To Medical Sciences (Left-Front) -->
    <path d="M 720 540 L 400 640 L 250 680" stroke-width="6" stroke="#38bdf8" />
    <circle cx="250" cy="680" r="8" fill="#38bdf8" />

    <!-- To Engineering Lab (Left-Back) -->
    <path d="M 760 480 L 520 420 L 450 400" stroke-width="5" stroke="#38bdf8" />

    <!-- To Technology Astronaut Pavilion (Right-Back) -->
    <path d="M 1160 480 L 1380 430 L 1480 410" stroke-width="5" stroke="#38bdf8" />

    <!-- To Management Studies (Right-Mid) -->
    <path d="M 1180 540 L 1520 590 L 1650 610" stroke-width="6" stroke="#38bdf8" />

    <!-- To Liberal Arts Open Book (Right-Front) -->
    <path d="M 1120 620 L 1450 720 L 1600 780" stroke-width="8" stroke="#38bdf8" />
    <circle cx="1600" cy="780" r="10" fill="#38bdf8" />

    <!-- Central Guidance Tracks -->
    <path d="M 960 620 L 960 760" stroke-width="8" stroke="#38bdf8" />
  </g>

  <!-- 5. CENTRAL PLATFORM & CONCENTRIC HIGH-TECH ISOMETRIC RINGS -->
  <ellipse cx="960" cy="520" rx="420" ry="180" fill="#131a26" stroke="#1e293b" stroke-width="8" />
  <!-- Outer Neon Blue Rim -->
  <ellipse cx="960" cy="520" rx="390" ry="165" fill="#182333" stroke="#0284c7" stroke-width="5" />
  <!-- Bronze Emblems Ring -->
  <ellipse cx="960" cy="520" rx="360" ry="150" fill="#1e293b" stroke="url(#bronze-rim)" stroke-width="18" />

  <!-- Heraldic Icons along the Ring -->
  <g fill="#fde047" opacity="0.9">
    <!-- Parliament / University Columns (Left) -->
    <rect x="740" y="525" width="28" height="18" rx="2" fill="#d97706" />
    <!-- Royal Crown (Bottom Left) -->
    <polygon points="840,590 847,575 855,590 862,575 870,590" fill="#fde047" />
    <!-- Royal Elephant (Right) -->
    <rect x="1140" y="525" width="30" height="18" rx="4" fill="#d97706" />
    <!-- Books Stack (Bottom Right) -->
    <rect x="1060" y="585" width="26" height="14" rx="2" fill="#fde047" />
  </g>

  <!-- Cyan Step Ring -->
  <ellipse cx="960" cy="510" rx="280" ry="110" fill="#0f172a" stroke="#38bdf8" stroke-width="6" />
  <ellipse cx="960" cy="505" rx="220" ry="85" fill="#0284c7" fill-opacity="0.3" stroke="#e0f2fe" stroke-width="3" />
  <ellipse cx="960" cy="500" rx="160" ry="60" fill="#ffffff" fill-opacity="0.2" />

  <!-- 6. THE CENTRAL ATOMIC & ORBITAL HOLOGRAPHIC SPHERE -->
  <!-- Ambient Beam Glow -->
  <ellipse cx="960" cy="380" rx="340" ry="340" fill="url(#central-beam)" />

  <!-- The Glowing Hologram Sphere -->
  <circle cx="960" cy="360" r="190" fill="url(#sphere-core)" />
  <circle cx="960" cy="360" r="185" fill="none" stroke="#e0f2fe" stroke-width="2" opacity="0.6" stroke-dasharray="10 6" />

  <!-- Orbital Rings Revolving Around the Core -->
  <g stroke="#ffffff" stroke-width="4" fill="none" opacity="0.9">
    <!-- Orbit 1 (Tilted Horizontal) -->
    <ellipse cx="960" cy="360" rx="170" ry="65" transform="rotate(-25 960 360)" stroke="#e0f2fe" stroke-width="6" />
    <!-- Orbit 2 (Tilted Opposite) -->
    <ellipse cx="960" cy="360" rx="170" ry="65" transform="rotate(35 960 360)" stroke="#bae6fd" stroke-width="6" />
    <!-- Orbit 3 (Steep Ellipse) -->
    <ellipse cx="960" cy="360" rx="165" ry="55" transform="rotate(85 960 360)" stroke="#7dd3fc" stroke-width="5" />
    <!-- Electron Particle Beads -->
    <circle cx="830" cy="310" r="8" fill="#ffffff" />
    <circle cx="1080" cy="410" r="9" fill="#fef08a" />
    <circle cx="930" cy="210" r="7" fill="#38bdf8" />
    <circle cx="1020" cy="490" r="7" fill="#ffffff" />
  </g>

  <!-- Intense Glowing Center Sun / Spark -->
  <circle cx="960" cy="360" r="28" fill="#ffffff" />
  <circle cx="960" cy="360" r="48" fill="#fef08a" opacity="0.8" />

  <!-- 7. LEFT WING: MEDICAL SCIENCES & LAB -->
  <!-- Back Laboratory: Chemistry & Engineering -->
  <g>
    <!-- Building Block -->
    <polygon points="350,380 560,340 560,450 350,490" fill="#2d3748" stroke="#4a5568" stroke-width="2" />
    <polygon points="350,380 430,320 640,300 560,340" fill="#4a5568" />
    <!-- Smokestacks / Tanks -->
    <rect x="390" y="300" width="16" height="40" fill="#cbd5e1" />
    <rect x="420" y="290" width="16" height="50" fill="#cbd5e1" />

    <!-- Neon Green Chemistry Flask Icon -->
    <g transform="translate(460, 200) scale(1.4)">
      <path d="M 20 10 L 20 30 L 5 60 A 5 5 0 0 0 10 68 L 50 68 A 5 5 0 0 0 55 60 L 40 30 L 40 10 Z" fill="none" stroke="#4ade80" stroke-width="4" />
      <path d="M 12 55 L 48 55" stroke="#4ade80" stroke-width="4" />
      <circle cx="25" cy="45" r="3" fill="#4ade80" />
      <circle cx="35" cy="40" r="2" fill="#4ade80" />
    </g>

    <!-- Neon Green Microscope Icon -->
    <g transform="translate(550, 190) scale(1.3)">
      <path d="M 30 10 L 45 35 M 35 20 A 18 18 0 1 1 20 45 L 10 45 M 10 55 L 50 55" fill="none" stroke="#7dd3fc" stroke-width="4" />
    </g>

    <!-- Glowing Engineering Arch -->
    <path d="M 550 490 C 550 390, 680 370, 680 460" fill="none" stroke="url(#arch-glow)" stroke-width="16" />
    <rect x="580" y="410" width="105" height="26" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
    <text x="632" y="427" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="11" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">ENGINEERING</text>
  </g>

  <!-- Front Building: Medical Sciences Institute -->
  <g>
    <!-- White Isometric Medical Building -->
    <polygon points="50,470 380,410 380,580 50,650" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="3" />
    <polygon points="50,470 120,400 450,370 380,410" fill="#f8fafc" />
    <!-- Pillars and Entrance -->
    <rect x="80" y="550" width="30" height="90" fill="#94a3b8" />
    <rect x="190" y="525" width="30" height="100" fill="#94a3b8" />
    <rect x="235" y="515" width="60" height="85" fill="#fef08a" opacity="0.9" /> <!-- Glow Entrance -->

    <!-- Neon Caduceus & Scalpel Emblem on Medical Building -->
    <g transform="translate(150, 360) scale(1.3)">
      <!-- Winged Staff (Caduceus) -->
      <line x1="60" y1="20" x2="60" y2="120" stroke="#fde047" stroke-width="5" />
      <circle cx="60" cy="15" r="7" fill="#fde047" />
      <!-- Wings -->
      <path d="M 60 35 C 30 15, 10 35, 15 50 C 35 45, 55 45, 60 50" fill="none" stroke="#fde047" stroke-width="4" />
      <path d="M 60 35 C 90 15, 110 35, 105 50 C 85 45, 65 45, 60 50" fill="none" stroke="#fde047" stroke-width="4" />
      <!-- Entwined Snakes -->
      <path d="M 40 60 C 80 70, 80 90, 40 100" fill="none" stroke="#fde047" stroke-width="4" />
      <path d="M 80 60 C 40 70, 40 90, 80 100" fill="none" stroke="#fde047" stroke-width="4" />
      <!-- Scalpel -->
      <line x1="15" y1="65" x2="45" y2="110" stroke="#ffffff" stroke-width="5" />
      <polygon points="12,65 18,60 28,75 22,80" fill="#38bdf8" />
    </g>

    <!-- Holographic Portal Arch: MEDICAL SCIENCES -->
    <path d="M 390 690 C 390 530, 560 510, 560 640" fill="none" stroke="url(#arch-glow)" stroke-width="22" />
    <!-- Arch Border Highlight -->
    <path d="M 390 690 C 390 530, 560 510, 560 640" fill="none" stroke="#ffffff" stroke-width="4" />
    <!-- Sign Plaque -->
    <rect x="390" y="585" width="160" height="32" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
    <text x="470" y="606" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="12" fill="#ffffff" text-anchor="middle" letter-spacing="2">MEDICAL SCIENCES</text>
  </g>

  <!-- 8. RIGHT WING: TECHNOLOGY, MANAGEMENT & LIBERAL ARTS -->
  <!-- Technology Astronaut & Robotics Complex -->
  <g>
    <!-- Base Platform -->
    <polygon points="1200,380 1480,350 1520,440 1240,470" fill="#334155" />
    <!-- Giant High-Tech Astronaut Helmet Dome -->
    <ellipse cx="1380" cy="270" rx="90" ry="95" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="6" />
    <!-- Tinted Visor with Golden Sky Reflection -->
    <ellipse cx="1380" cy="270" rx="65" ry="55" fill="#1e293b" stroke="#38bdf8" stroke-width="4" />
    <ellipse cx="1370" cy="260" rx="45" ry="30" fill="#fde047" opacity="0.35" />
    <!-- Hovering Cyan Atom over Helmet -->
    <g transform="translate(1480, 120) scale(1.2)">
      <circle cx="40" cy="40" r="8" fill="#38bdf8" />
      <ellipse cx="40" cy="40" rx="35" ry="12" fill="none" stroke="#38bdf8" stroke-width="3" transform="rotate(30 40 40)" />
      <ellipse cx="40" cy="40" rx="35" ry="12" fill="none" stroke="#38bdf8" stroke-width="3" transform="rotate(-30 40 40)" />
    </g>

    <!-- TECHNOLOGY Neon Signboard & Arch -->
    <path d="M 1240 480 C 1240 370, 1370 360, 1370 450" fill="none" stroke="url(#arch-glow)" stroke-width="16" />
    <rect x="1255" y="405" width="115" height="26" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
    <text x="1312" y="422" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="11" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">TECHNOLOGY</text>
  </g>

  <!-- Management Studies Corporate Building -->
  <g>
    <!-- Modern Glass Office Building -->
    <polygon points="1520,380 1850,340 1850,560 1520,600" fill="#1e293b" stroke="#334155" stroke-width="3" />
    <polygon points="1520,380 1600,320 1900,290 1850,340" fill="#334155" />
    <!-- Illuminated Window Grid -->
    <g fill="#fef08a" opacity="0.75">
      <rect x="1560" y="420" width="45" height="40" rx="2" />
      <rect x="1630" y="410" width="45" height="40" rx="2" />
      <rect x="1700" y="400" width="45" height="40" rx="2" />
      <rect x="1560" y="480" width="45" height="40" rx="2" />
      <rect x="1630" y="470" width="45" height="40" rx="2" />
      <rect x="1700" y="460" width="45" height="40" rx="2" />
    </g>

    <!-- Neon Green Stock Chart with Arrow on Top of Building -->
    <g transform="translate(1600, 180) scale(1.3)">
      <polyline points="0,70 25,50 50,60 75,30 100,10" fill="none" stroke="#4ade80" stroke-width="6" />
      <polygon points="90,5 110,10 100,28" fill="#4ade80" />
      <!-- Bar chart bars underneath -->
      <rect x="10" y="70" width="12" height="30" fill="#4ade80" opacity="0.4" />
      <rect x="35" y="55" width="12" height="45" fill="#4ade80" opacity="0.4" />
      <rect x="60" y="62" width="12" height="38" fill="#4ade80" opacity="0.4" />
      <rect x="85" y="32" width="12" height="68" fill="#4ade80" opacity="0.6" />
      <!-- Currency Sign -->
      <text x="110" y="75" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="28" fill="#4ade80">$</text>
    </g>

    <!-- Holographic Arch: MANAGEMENT STUDIES -->
    <path d="M 1370 630 C 1370 480, 1540 460, 1540 590" fill="none" stroke="url(#arch-glow)" stroke-width="20" />
    <path d="M 1370 630 C 1370 480, 1540 460, 1540 590" fill="none" stroke="#ffffff" stroke-width="3" />
    <rect x="1385" y="525" width="160" height="32" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
    <text x="1465" y="546" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="12" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">MANAGEMENT STUDIES</text>
  </g>

  <!-- Liberal Arts Giant Glowing Open Book Monument -->
  <g>
    <!-- Stone Pedestal -->
    <polygon points="1520,770 1780,690 1780,760 1520,840" fill="#334155" stroke="#475569" stroke-width="3" />
    <polygon points="1520,770 1590,720 1840,650 1780,690" fill="#475569" />

    <!-- Radiant Ambient Glow behind the Book -->
    <circle cx="1680" cy="650" r="140" fill="url(#book-glow)" />

    <!-- Giant Glowing Neon Open Book -->
    <g transform="translate(1550, 560) scale(1.4)">
      <!-- Left Page -->
      <path d="M 70 80 C 40 75, 15 65, 0 70 L 0 10 C 20 5, 45 15, 70 20 Z" fill="#fef08a" stroke="#eab308" stroke-width="4" opacity="0.9" />
      <line x1="12" y1="28" x2="58" y2="35" stroke="#ca8a04" stroke-width="3" />
      <line x1="12" y1="42" x2="58" y2="49" stroke="#ca8a04" stroke-width="3" />
      <line x1="12" y1="56" x2="58" y2="63" stroke="#ca8a04" stroke-width="3" />

      <!-- Right Page -->
      <path d="M 70 80 C 100 75, 125 65, 140 70 L 140 10 C 120 5, 95 15, 70 20 Z" fill="#fef08a" stroke="#eab308" stroke-width="4" opacity="0.9" />
      <line x1="82" y1="35" x2="128" y2="28" stroke="#ca8a04" stroke-width="3" />
      <line x1="82" y1="49" x2="128" y2="42" stroke="#ca8a04" stroke-width="3" />
      <line x1="82" y1="63" x2="128" y2="56" stroke="#ca8a04" stroke-width="3" />

      <!-- Book Spine -->
      <line x1="70" y1="20" x2="70" y2="80" stroke="#b45309" stroke-width="4" />
    </g>

    <!-- LIBERAL ARTS Signpost -->
    <rect x="1440" y="800" width="160" height="34" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
    <text x="1520" y="823" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="13" fill="#ffffff" text-anchor="middle" letter-spacing="2">LIBERAL ARTS</text>
  </g>

  <!-- 9. FOREGROUND DIRECT ADMISSIONS DESK WITH GRADUATION CAP -->
  <g>
    <!-- Curved Sleek Consultation Desk -->
    <ellipse cx="960" cy="735" rx="140" ry="38" fill="#1e293b" stroke="#38bdf8" stroke-width="4" />
    <polygon points="820,735 1100,735 1060,780 860,780" fill="#0f172a" />
    <!-- Desk Front Cyan Accent Bar -->
    <path d="M 860 770 Q 960 790 1060 770" stroke="#38bdf8" stroke-width="6" fill="none" />

    <!-- Digital Tablet & Admissions Scroll -->
    <rect x="880" y="720" width="38" height="24" rx="2" fill="#38bdf8" opacity="0.8" />
    <rect x="1010" y="718" width="30" height="28" rx="2" fill="#f8fafc" opacity="0.8" />

    <!-- Academic Mortarboard (Graduation Cap) in Center of Desk -->
    <g transform="translate(930, 680)">
      <!-- Diamond Top -->
      <polygon points="30,0 60,14 30,28 0,14" fill="#111827" stroke="#38bdf8" stroke-width="2" />
      <!-- Skull Cap Underneath -->
      <path d="M 12 18 Q 30 35 48 18" fill="#1f2937" />
      <!-- Cyan Hanging Tassel -->
      <line x1="30" y1="14" x2="48" y2="28" stroke="#38bdf8" stroke-width="2.5" />
      <circle cx="48" cy="28" r="3" fill="#38bdf8" />
    </g>
  </g>

  <!-- 10. FOREGROUND "STUDY IN INDIA DIRECT ADMISSIONS" 3D METALLIC EMBLEM PLATE -->
  <!-- Base Beveled Slate Plaque -->
  <g id="front-plaque">
    <!-- Outer Rim Glow -->
    <rect x="420" y="860" width="1080" height="180" rx="36" fill="#000000" opacity="0.75" />
    <!-- Main Metal Base Plate -->
    <rect x="440" y="870" width="1040" height="160" rx="28" fill="#111827" stroke="#374151" stroke-width="8" />
    <!-- Inner High-Tech Inset Frame with Cyan Highlight -->
    <rect x="455" y="885" width="1010" height="130" rx="20" fill="#090d14" stroke="#0284c7" stroke-width="4" />

    <!-- Ambient Glow beneath the Letters -->
    <ellipse cx="960" cy="930" rx="420" ry="30" fill="#d97706" opacity="0.25" />
    <ellipse cx="960" cy="980" rx="380" ry="25" fill="#0284c7" opacity="0.3" />

    <!-- LINE 1: "STUDY IN INDIA" (3D Extruded Golden Metallic Letters) -->
    <!-- Extruded Drop Shadows for 3D Relief -->
    <text x="960" y="942" font-family="'Segoe UI', Roboto, 'Montserrat', sans-serif" font-weight="900" font-size="54" fill="#451a03" text-anchor="middle" letter-spacing="6">STUDY IN INDIA</text>
    <text x="960" y="940" font-family="'Segoe UI', Roboto, 'Montserrat', sans-serif" font-weight="900" font-size="54" fill="#78350f" text-anchor="middle" letter-spacing="6">STUDY IN INDIA</text>
    <text x="960" y="937" font-family="'Segoe UI', Roboto, 'Montserrat', sans-serif" font-weight="900" font-size="54" fill="#b45309" text-anchor="middle" letter-spacing="6">STUDY IN INDIA</text>
    <!-- Face Gradient -->
    <text x="960" y="934" font-family="'Segoe UI', Roboto, 'Montserrat', sans-serif" font-weight="900" font-size="54" fill="url(#gold-metal)" text-anchor="middle" letter-spacing="6">STUDY IN INDIA</text>

    <!-- LINE 2: "DIRECT ADMISSIONS" (Futuristic Cyan Glow 3D Typography) -->
    <text x="960" y="1000" font-family="'Segoe UI', Roboto, 'Montserrat', sans-serif" font-weight="900" font-size="46" fill="#0369a1" text-anchor="middle" letter-spacing="7">DIRECT ADMISSIONS</text>
    <text x="960" y="997" font-family="'Segoe UI', Roboto, 'Montserrat', sans-serif" font-weight="900" font-size="46" fill="#0284c7" text-anchor="middle" letter-spacing="7">DIRECT ADMISSIONS</text>
    <text x="960" y="994" font-family="'Segoe UI', Roboto, 'Montserrat', sans-serif" font-weight="900" font-size="46" fill="url(#cyan-glow-text)" text-anchor="middle" letter-spacing="7">DIRECT ADMISSIONS</text>
  </g>
</svg>"""
    
    svg_path = "public/images/study-in-india-direct-admissions.svg"
    os.makedirs("public/images", exist_ok=True)
    with open(svg_path, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"Generated {svg_path}")

if __name__ == "__main__":
    generate_svg()
