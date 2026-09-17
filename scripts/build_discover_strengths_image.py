import os
import subprocess

def generate_svg():
    svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <!-- Daylight Golden Sky Gradient -->
    <linearGradient id="daylight-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#7fa1c3" />
      <stop offset="30%" stop-color="#a4bfd8" />
      <stop offset="60%" stop-color="#d6e4f0" />
      <stop offset="85%" stop-color="#faeedb" />
      <stop offset="100%" stop-color="#fff8eb" />
    </linearGradient>

    <!-- Warm Golden Sun Haze -->
    <radialGradient id="sun-flare" cx="88%" cy="12%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="25%" stop-color="#fef08a" stop-opacity="0.8" />
      <stop offset="60%" stop-color="#fed7aa" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </radialGradient>

    <!-- Lawn & Terraced Estate Greens -->
    <linearGradient id="estate-lawn" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b6942" />
      <stop offset="40%" stop-color="#4d8255" />
      <stop offset="80%" stop-color="#38633f" />
      <stop offset="100%" stop-color="#2a4d30" />
    </linearGradient>

    <!-- Stone Pavement & Terraces -->
    <linearGradient id="sandstone-ground" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#eae4d8" />
      <stop offset="40%" stop-color="#ded6c6" />
      <stop offset="80%" stop-color="#cec4b2" />
      <stop offset="100%" stop-color="#b8ad98" />
    </linearGradient>

    <!-- Brass & Gold for Armillary and Plaques -->
    <linearGradient id="gold-metal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fffbeb" />
      <stop offset="20%" stop-color="#fde047" />
      <stop offset="50%" stop-color="#d97706" />
      <stop offset="80%" stop-color="#92400e" />
      <stop offset="100%" stop-color="#451a03" />
    </linearGradient>

    <!-- Relief Engraving Carved Stone Shadow -->
    <linearGradient id="carved-stone-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#44392e" />
      <stop offset="25%" stop-color="#735f4c" />
      <stop offset="65%" stop-color="#9a8570" />
      <stop offset="90%" stop-color="#cbbbae" />
      <stop offset="100%" stop-color="#efe9e2" />
    </linearGradient>

    <!-- Holographic Dome Glass -->
    <radialGradient id="dome-glass" cx="45%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85" />
      <stop offset="35%" stop-color="#bae6fd" stop-opacity="0.5" />
      <stop offset="70%" stop-color="#0284c7" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.6" />
    </radialGradient>

    <!-- Glowing Blue Neuron Cyan -->
    <radialGradient id="neuron-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="30%" stop-color="#67e8f9" />
      <stop offset="70%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#1e3a8a" />
    </radialGradient>
  </defs>

  <!-- 1. SKY & DISTANT CLASSICAL CAMPUS HORIZON -->
  <rect x="0" y="0" width="1920" height="380" fill="url(#daylight-sky)" />
  <rect x="0" y="0" width="1920" height="380" fill="url(#sun-flare)" />

  <!-- Neoclassical Colonnade Campus Buildings (Background) -->
  <g fill="#dfd7c8" stroke="#b8ad9c" stroke-width="1.5" opacity="0.9">
    <!-- Left Neoclassical Hall -->
    <polygon points="260,110 420,110 340,65" fill="#cfc5b4" />
    <rect x="270" y="110" width="140" height="70" />
    <line x1="290" y1="110" x2="290" y2="180" stroke="#948777" stroke-width="4" />
    <line x1="315" y1="110" x2="315" y2="180" stroke="#948777" stroke-width="4" />
    <line x1="340" y1="110" x2="340" y2="180" stroke="#948777" stroke-width="4" />
    <line x1="365" y1="110" x2="365" y2="180" stroke="#948777" stroke-width="4" />
    <line x1="390" y1="110" x2="390" y2="180" stroke="#948777" stroke-width="4" />

    <!-- Right Neoclassical Hall (Grand Library) -->
    <polygon points="1540,115 1780,115 1660,60" fill="#cfc5b4" />
    <rect x="1550" y="115" width="220" height="85" />
    <line x1="1580" y1="115" x2="1580" y2="200" stroke="#948777" stroke-width="5" />
    <line x1="1610" y1="115" x2="1610" y2="200" stroke="#948777" stroke-width="5" />
    <line x1="1640" y1="115" x2="1640" y2="200" stroke="#948777" stroke-width="5" />
    <line x1="1670" y1="115" x2="1670" y2="200" stroke="#948777" stroke-width="5" />
    <line x1="1700" y1="115" x2="1700" y2="200" stroke="#948777" stroke-width="5" />
    <line x1="1730" y1="115" x2="1730" y2="200" stroke="#948777" stroke-width="5" />
  </g>

  <!-- Distant Cypress & Park Trees -->
  <g fill="#2d5236" opacity="0.95">
    <polygon points="1200,60 1215,160 1185,160" />
    <polygon points="1225,50 1242,165 1208,165" />
    <polygon points="1460,70 1475,170 1445,170" />
    <circle cx="100" cy="170" r="60" />
    <circle cx="160" cy="155" r="70" />
    <circle cx="230" cy="165" r="55" />
    <circle cx="480" cy="170" r="50" />
    <circle cx="560" cy="160" r="65" />
    <circle cx="1320" cy="170" r="60" />
    <circle cx="1400" cy="150" r="70" />
    <circle cx="1840" cy="160" r="80" />
  </g>

  <!-- 2. TERRACED ESTATE GARDENS & AMPHITHEATER STEPS -->
  <rect x="0" y="190" width="1920" height="890" fill="url(#estate-lawn)" />

  <!-- Sandstone Terrace Pathways -->
  <polygon points="400,280 1520,280 1920,500 0,500" fill="url(#sandstone-ground)" opacity="0.75" />
  <ellipse cx="960" cy="270" rx="350" ry="80" fill="#ded4c0" stroke="#b3a58e" stroke-width="6" />
  <ellipse cx="960" cy="265" rx="300" ry="65" fill="#e8dfce" stroke="#b3a58e" stroke-width="4" />

  <!-- Curved Semicircular Sandstone Garden Wall behind Astrolabe -->
  <path d="M 680 250 Q 960 190 1240 250 L 1240 200 Q 960 140 680 200 Z" fill="#cfc2ac" stroke="#9f907b" stroke-width="3" />
  <!-- Brain Profile Engravings on Curved Stone Wall -->
  <g fill="#94836f" opacity="0.8">
    <ellipse cx="780" cy="215" rx="18" ry="14" />
    <ellipse cx="1140" cy="215" rx="18" ry="14" />
  </g>

  <!-- 3. GOLDEN BRASS ARMILLARY SPHERE / ASTROLABE (Center-Back Monument) -->
  <g id="celestial-armillary" transform="translate(960, 160) scale(1.15)">
    <!-- Ornate Stone Pedestal -->
    <rect x="-40" y="80" width="80" height="35" rx="4" fill="#a89a84" stroke="#7e705c" stroke-width="2" />
    <rect x="-60" y="110" width="120" height="15" rx="3" fill="#8f806a" />
    <!-- Stand -->
    <path d="M -15 80 L -8 20 L 8 20 L 15 80 Z" fill="url(#gold-metal)" />

    <!-- Outer Meridian Ring -->
    <circle cx="0" cy="-20" r="110" fill="none" stroke="url(#gold-metal)" stroke-width="12" />
    <circle cx="0" cy="-20" r="105" fill="none" stroke="#fffbeb" stroke-width="2" opacity="0.6" />

    <!-- Tilted Equatorial & Zodiac Rings -->
    <ellipse cx="0" cy="-20" rx="100" ry="38" transform="rotate(-30 0 -20)" fill="none" stroke="url(#gold-metal)" stroke-width="10" />
    <ellipse cx="0" cy="-20" rx="95" ry="32" transform="rotate(35 0 -20)" fill="none" stroke="url(#gold-metal)" stroke-width="8" />
    <ellipse cx="0" cy="-20" rx="85" ry="25" transform="rotate(85 0 -20)" fill="none" stroke="url(#gold-metal)" stroke-width="7" />

    <!-- Central World Terrestrial Sphere -->
    <circle cx="0" cy="-20" r="32" fill="#0284c7" stroke="url(#gold-metal)" stroke-width="4" />
    <ellipse cx="0" cy="-20" rx="30" ry="10" fill="none" stroke="#fde047" stroke-width="2" />
    <line x1="0" y1="-52" x2="0" y2="12" stroke="#fde047" stroke-width="2" />

    <!-- Golden Axle Spear passing through Center -->
    <line x1="-100" y1="-95" x2="100" y2="55" stroke="url(#gold-metal)" stroke-width="6" />
    <polygon points="-110,-102 -95,-102 -90,-88" fill="#fde047" />
  </g>

  <!-- 4. TOP-RIGHT: INTERESTS AND SKILLS MATRIX HUB (Geodesic Holographic Dome) -->
  <g id="geodesic-skills-dome" transform="translate(1380, 310)">
    <!-- Circular Elevated Plinth & Terraced Walkway -->
    <ellipse cx="0" cy="70" rx="280" ry="85" fill="#ded4c0" stroke="#b0a088" stroke-width="6" />
    <ellipse cx="0" cy="65" rx="250" ry="75" fill="#efe7d8" stroke="#0284c7" stroke-width="3" />
    <ellipse cx="0" cy="60" rx="220" ry="65" fill="#0f172a" />

    <!-- Holographic Panoramic Curved Blue Data Screens Inside Dome -->
    <!-- Screen 1: Bar Charts & Progress Curves -->
    <path d="M -170 30 Q -80 -40 0 -40 L 0 45 Q -80 40 -170 85 Z" fill="#0284c7" fill-opacity="0.5" stroke="#38bdf8" stroke-width="2" />
    <g fill="#38bdf8" opacity="0.9">
      <rect x="-150" y="25" width="10" height="25" />
      <rect x="-135" y="15" width="10" height="35" />
      <rect x="-120" y="5" width="10" height="45" />
      <rect x="-105" y="-5" width="10" height="55" />
      <rect x="-90" y="-20" width="10" height="70" />
      <rect x="-75" y="-10" width="10" height="60" />
      <circle cx="-135" cy="5" r="4" fill="#ffffff" />
      <circle cx="-90" cy="-20" r="5" fill="#ffffff" />
    </g>

    <!-- Screen 2: Central Cognitive Spider Web / Radar Matrix -->
    <path d="M 0 -40 Q 90 -40 180 30 L 180 85 Q 90 40 0 45 Z" fill="#0284c7" fill-opacity="0.5" stroke="#38bdf8" stroke-width="2" />
    <g stroke="#ffffff" stroke-width="1.5" fill="none" opacity="0.8">
      <circle cx="80" cy="15" r="30" />
      <circle cx="80" cy="15" r="18" />
      <circle cx="80" cy="15" r="8" />
      <polygon points="80,-10 102,8 96,38 64,38 58,8" fill="#38bdf8" fill-opacity="0.4" stroke="#38bdf8" stroke-width="2" />
    </g>

    <!-- Center Holo Console -->
    <ellipse cx="0" cy="35" rx="35" ry="12" fill="#38bdf8" stroke="#ffffff" stroke-width="2" />
    <line x1="0" y1="35" x2="0" y2="55" stroke="#64748b" stroke-width="6" />

    <!-- Scientists / Analysts in White Lab Coats Inside -->
    <g fill="#ffffff">
      <!-- Analyst 1 -->
      <circle cx="-110" cy="20" r="7" fill="#f8fafc" />
      <rect x="-115" y="27" width="10" height="26" rx="2" fill="#f8fafc" />
      <line x1="-110" y1="53" x2="-114" y2="72" stroke="#334155" stroke-width="3" />
      <line x1="-106" y1="53" x2="-102" y2="72" stroke="#334155" stroke-width="3" />

      <!-- Analyst 2 at Center Console -->
      <circle cx="-25" cy="15" r="7" fill="#f8fafc" />
      <rect x="-30" y="22" width="10" height="26" rx="2" fill="#f8fafc" />
      <line x1="-25" y1="48" x2="-28" y2="68" stroke="#334155" stroke-width="3" />
      <line x1="-21" y1="48" x2="-18" y2="68" stroke="#334155" stroke-width="3" />

      <!-- Analyst 3 -->
      <circle cx="120" cy="18" r="7" fill="#f8fafc" />
      <rect x="115" y="25" width="10" height="26" rx="2" fill="#f8fafc" />
    </g>

    <!-- Transparent Geodesic Glass Dome Outer Shell -->
    <path d="M -230 65 Q -230 -140 0 -140 Q 230 -140 230 65 Z" fill="url(#dome-glass)" stroke="#e0f2fe" stroke-width="4" />
    <!-- Geodesic Triangle Facet Struts -->
    <g stroke="#ffffff" stroke-width="1.5" fill="none" opacity="0.6">
      <path d="M 0 -140 L -70 -70 L 70 -70 Z" />
      <path d="M -70 -70 L -150 -10 L 0 -10 Z" />
      <path d="M 70 -70 L 0 -10 L 150 -10 Z" />
      <path d="M -150 -10 L -210 50 L -90 50 Z" />
      <path d="M 0 -10 L -90 50 L 90 50 Z" />
      <path d="M 150 -10 L 90 50 L 210 50 Z" />
    </g>

    <!-- Plaque on Dome -->
    <rect x="-140" y="-175" width="280" height="42" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5" />
    <text x="0" y="-150" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="16" fill="#ffffff" text-anchor="middle" letter-spacing="1">Interests and Skills</text>
    <text x="0" y="-134" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="13" fill="#38bdf8" text-anchor="middle" letter-spacing="2">Matrix hub</text>
  </g>

  <!-- 5. CENTER: NEURO-COGNITIVE ASSESSMENT PAVILION & GLOWING NEURON -->
  <g id="neuro-cognitive-pavilion" transform="translate(680, 410)">
    <!-- Paved Terrace Base -->
    <polygon points="-280,100 80,40 180,110 -180,170" fill="#ded4c0" stroke="#b0a088" stroke-width="3" />

    <!-- Timber & Glass Conservatory (Greenhouse Style) -->
    <!-- Building 1 (Front Hall) -->
    <polygon points="-250,50 -120,-10 -120,70 -250,130" fill="#854d0e" opacity="0.8" />
    <polygon points="-120,-10 60,30 60,110 -120,70" fill="#a16207" opacity="0.6" />
    <!-- Glass Gable Roof -->
    <polygon points="-250,50 -185,-5 -120,-10" fill="#e0f2fe" fill-opacity="0.8" stroke="#713f12" stroke-width="3" />
    <polygon points="-185,-5 0,35 60,30 -120,-10" fill="#bae6fd" fill-opacity="0.6" stroke="#713f12" stroke-width="3" />
    <!-- Glass Panes Grids -->
    <g stroke="#713f12" stroke-width="2" opacity="0.7">
      <line x1="-220" y1="32" x2="-220" y2="115" />
      <line x1="-185" y1="18" x2="-185" y2="100" />
      <line x1="-150" y1="5" x2="-150" y2="85" />
      <line x1="-70" y1="10" x2="-70" y2="85" />
      <line x1="-20" y1="20" x2="-20" y2="95" />
      <line x1="25" y1="27" x2="25" y2="105" />
    </g>

    <!-- Signboard: Neuro-Cognitive Assessment Pavilion -->
    <rect x="-190" y="-55" width="220" height="38" rx="4" fill="#0f172a" stroke="#d97706" stroke-width="2" />
    <text x="-80" y="-38" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="13" fill="#ffffff" text-anchor="middle">Neuro-Cognitive</text>
    <text x="-80" y="-23" font-family="'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="11" fill="#fde047" text-anchor="middle" letter-spacing="1">Assessment Pavilion</text>

    <!-- GLOWING BLUE NEURON SCULPTURE (Right in Front of Pavilion) -->
    <g transform="translate(140, 110)">
      <!-- Stone Circular Plinth with Concentric Rings -->
      <ellipse cx="0" cy="40" rx="80" ry="26" fill="#ded4c0" stroke="#b0a088" stroke-width="4" />
      <ellipse cx="0" cy="36" rx="65" ry="20" fill="#efe7d8" stroke="#0284c7" stroke-width="2" />

      <!-- Neuron Core Soma -->
      <circle cx="0" cy="-10" r="28" fill="url(#neuron-glow)" stroke="#ffffff" stroke-width="3" />
      <!-- Glowing Blue Synaptic Sparks on Nucleus -->
      <circle cx="-6" cy="-15" r="4" fill="#ffffff" />
      <circle cx="8" cy="-8" r="3" fill="#ffffff" />

      <!-- Radiating Branching Dendrites & Axons -->
      <g stroke="#0284c7" stroke-width="7" stroke-linecap="round" fill="none">
        <!-- Dendrite 1 (Top Left) -->
        <path d="M -15 -25 Q -40 -60 -70 -75" />
        <path d="M -40 -60 Q -30 -85 -35 -110" stroke-width="4" />
        <path d="M -55 -70 Q -85 -75 -105 -65" stroke-width="4" />

        <!-- Dendrite 2 (Top Right) -->
        <path d="M 15 -25 Q 45 -55 80 -70" />
        <path d="M 45 -55 Q 55 -85 70 -105" stroke-width="4" />
        <path d="M 65 -65 Q 95 -60 115 -45" stroke-width="4" />

        <!-- Dendrite 3 (Bottom Left) -->
        <path d="M -20 0 Q -50 15 -75 30" />
        <path d="M -50 15 Q -65 35 -70 55" stroke-width="4" />

        <!-- Dendrite 4 (Bottom Right) -->
        <path d="M 20 0 Q 55 15 80 30" />
        <path d="M 55 15 Q 75 35 85 55" stroke-width="4" />

        <!-- Long Central Axon Stem (Downwards to Pedestal) -->
        <path d="M 0 18 L -5 38" stroke-width="8" stroke="#1e3a8a" />
        <path d="M 0 18 L 5 38" stroke-width="8" stroke="#0284c7" />
      </g>

      <!-- Synaptic Buttons (Glowing Cyan Spheres at Tips) -->
      <g fill="#38bdf8" stroke="#ffffff" stroke-width="1.5">
        <circle cx="-70" cy="-75" r="6" />
        <circle cx="-35" cy="-110" r="5" />
        <circle cx="-105" cy="-65" r="5" />
        <circle cx="80" cy="-70" r="6" />
        <circle cx="70" cy="-105" r="5" />
        <circle cx="115" cy="-45" r="5" />
        <circle cx="-75" cy="30" r="5" />
        <circle cx="-70" cy="55" r="5" />
        <circle cx="80" cy="30" r="5" />
        <circle cx="85" cy="55" r="5" />
      </g>
    </g>
  </g>

  <!-- 6. MID-RIGHT: SKILL ASSESSMENT CENTER (Cutaway Workshop) -->
  <g id="skill-assessment-center" transform="translate(1330, 520)">
    <!-- Room Concrete Walls (Open Cutaway) -->
    <polygon points="-240,40 -60,-40 -60,110 -240,190" fill="#94a3b8" stroke="#64748b" stroke-width="3" />
    <polygon points="-60,-40 180,40 180,190 -60,110" fill="#cbd5e1" stroke="#94a3b8" stroke-width="3" />
    <polygon points="-240,190 -60,110 180,190 0,270" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="3" />

    <!-- Signboard -->
    <rect x="-160" y="-70" width="220" height="34" rx="4" fill="#0f172a" stroke="#94a3b8" stroke-width="2" />
    <text x="-50" y="-48" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="14" fill="#ffffff" text-anchor="middle" letter-spacing="1">Skill Assessment Center</text>

    <!-- Inside Workshop: Wooden Heavy Workbench with Vise & Lathe -->
    <polygon points="-110,80 10,25 60,45 -60,100" fill="#b45309" stroke="#78350f" stroke-width="2" />
    <rect x="-105" y="95" width="14" height="40" fill="#78350f" />
    <rect x="45" y="45" width="14" height="40" fill="#78350f" />
    <!-- Vise / Lathe Machine on Bench -->
    <rect x="-40" y="30" width="35" height="25" rx="3" fill="#334155" stroke="#0284c7" stroke-width="2" />
    <circle cx="-25" cy="42" r="6" fill="#94a3b8" />

    <!-- Precision Machine / 3D Diagnostic Printer Station (Left Wall) -->
    <rect x="-210" y="60" width="55" height="85" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect x="-200" y="75" width="35" height="35" fill="#38bdf8" fill-opacity="0.3" stroke="#e0f2fe" stroke-width="1.5" />
    <line x1="-185" y1="75" x2="-185" y2="100" stroke="#ffffff" stroke-width="2" />

    <!-- Wall Tool Rack with Hanging Wrenches, Hammers, Calipers -->
    <rect x="-40" y="-15" width="140" height="50" fill="#78350f" opacity="0.6" stroke="#451a03" stroke-width="2" />
    <g stroke="#e2e8f0" stroke-width="2.5" stroke-linecap="round">
      <line x1="-25" y1="-5" x2="-25" y2="25" />
      <line x1="-10" y1="-5" x2="-10" y2="25" />
      <line x1="5" y1="-5" x2="5" y2="25" />
      <line x1="20" y1="-5" x2="20" y2="25" />
      <line x1="35" y1="-5" x2="35" y2="25" />
      <line x1="50" y1="-5" x2="50" y2="25" />
      <line x1="65" y1="-5" x2="65" y2="25" />
      <line x1="80" y1="-5" x2="80" y2="25" />
    </g>
  </g>

  <!-- 7. FAR-RIGHT: WORKPLACE ENVIRONMENT & WORKSTYLE CENTER -->
  <g id="workplace-center" transform="translate(1700, 520)">
    <!-- Room Concrete Walls (Open Office Cutaway) -->
    <polygon points="-160,30 0,-30 0,110 -160,170" fill="#cbd5e1" stroke="#94a3b8" stroke-width="3" />
    <polygon points="0,-30 180,30 180,170 0,110" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="3" />
    <polygon points="-160,170 0,110 180,170 20,230" fill="#f8fafc" />

    <!-- Signboard -->
    <rect x="-140" y="-75" width="240" height="42" rx="4" fill="#0f172a" stroke="#94a3b8" stroke-width="2" />
    <text x="-20" y="-55" font-family="'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="12" fill="#ffffff" text-anchor="middle">Workplace Environment</text>
    <text x="-20" y="-40" font-family="'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="11" fill="#38bdf8" text-anchor="middle">&amp; Workstyle Center</text>

    <!-- Executive Modern Desks & Dual Monitors -->
    <rect x="-70" y="90" width="70" height="35" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2" />
    <rect x="-60" y="65" width="24" height="20" rx="2" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <rect x="-32" y="65" width="24" height="20" rx="2" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />

    <!-- Psychologists & Evaluators in Consultation -->
    <circle cx="-15" cy="50" r="7" fill="#f8fafc" />
    <rect x="-20" y="58" width="10" height="24" fill="#f8fafc" />
    <circle cx="45" cy="55" r="7" fill="#f8fafc" />
    <rect x="40" y="63" width="10" height="24" fill="#334155" />

    <!-- Behavioral Performance Posters on Wall -->
    <rect x="25" y="-10" width="45" height="35" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <line x1="30" y1="15" x2="60" y2="0" stroke="#0284c7" stroke-width="2" />
    <rect x="80" y="-10" width="45" height="35" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect x="85" y="0" width="8" height="18" fill="#4ade80" />
    <rect x="98" y="-5" width="8" height="23" fill="#4ade80" />
    <rect x="111" y="8" width="8" height="10" fill="#4ade80" />
  </g>

  <!-- 8. LEFT WING: MULTI-STORY CAREER & APTITUDE INSTITUTE -->
  <g id="aptitude-institute-building" transform="translate(160, 420)">
    <!-- Multi-Story Modern Sandstone & Glass Complex -->
    <polygon points="-160,160 80,40 80,380 -160,500" fill="#ded4c0" stroke="#b0a088" stroke-width="3" />
    <polygon points="80,40 220,100 220,440 80,380" fill="#cec2ac" stroke="#9e907a" stroke-width="3" />

    <!-- Glass Facade & Gold Carved Pictograms -->
    <!-- Floor 3 -->
    <rect x="-130" y="160" width="80" height="70" fill="#38bdf8" fill-opacity="0.2" stroke="#d97706" stroke-width="3" />
    <!-- Scales of Justice (Values / Ethics) -->
    <g transform="translate(-90, 195) scale(0.9)" stroke="#d97706" stroke-width="3" fill="none">
      <line x1="0" y1="-20" x2="0" y2="15" stroke-width="4" />
      <line x1="-25" y1="-15" x2="25" y2="-15" />
      <polygon points="-25,-15 -35,5 -15,5" fill="#d97706" />
      <polygon points="25,-15 15,5 35,5" fill="#d97706" />
    </g>

    <!-- Handshake (Collaboration & Interpersonal) -->
    <rect x="-30" y="125" width="80" height="70" fill="#38bdf8" fill-opacity="0.2" stroke="#d97706" stroke-width="3" />
    <g transform="translate(10, 160) scale(0.9)" fill="#d97706">
      <rect x="-20" y="-8" width="16" height="16" rx="3" transform="rotate(30 -12 0)" />
      <rect x="4" y="-8" width="16" height="16" rx="3" transform="rotate(-30 12 0)" />
      <circle cx="0" cy="0" r="6" />
    </g>

    <!-- Floor 2 -->
    <rect x="-130" y="270" width="80" height="70" fill="#38bdf8" fill-opacity="0.2" stroke="#d97706" stroke-width="3" />
    <!-- Scales of Justice icon repeated -->
    <g transform="translate(-90, 305) scale(0.9)" stroke="#d97706" stroke-width="3" fill="none">
      <line x1="0" y1="-20" x2="0" y2="15" stroke-width="4" />
      <line x1="-25" y1="-15" x2="25" y2="-15" />
      <polygon points="-25,-15 -35,5 -15,5" fill="#d97706" />
      <polygon points="25,-15 15,5 35,5" fill="#d97706" />
    </g>

    <rect x="-30" y="235" width="80" height="70" fill="#38bdf8" fill-opacity="0.2" stroke="#d97706" stroke-width="3" />
    <!-- Handshake repeated -->
    <g transform="translate(10, 270) scale(0.9)" fill="#d97706">
      <rect x="-20" y="-8" width="16" height="16" rx="3" transform="rotate(30 -12 0)" />
      <rect x="4" y="-8" width="16" height="16" rx="3" transform="rotate(-30 12 0)" />
      <circle cx="0" cy="0" r="6" />
    </g>

    <!-- Right Wall Engraved Gold Pillars -->
    <g fill="#d97706" opacity="0.85">
      <rect x="100" y="160" width="22" height="90" rx="3" />
      <rect x="135" y="175" width="22" height="90" rx="3" />
      <rect x="170" y="190" width="22" height="90" rx="3" />
    </g>

    <!-- Ground Level Consultation Desk Outside -->
    <polygon points="120,380 180,360 210,375 150,400" fill="#b45309" />
    <!-- Counselor standing at desk talking with student -->
    <circle cx="160" cy="335" r="7" fill="#f8fafc" />
    <rect x="155" y="342" width="10" height="24" fill="#1e293b" />
    <circle cx="205" cy="350" r="6" fill="#f8fafc" />
    <rect x="201" y="356" width="9" height="22" fill="#0284c7" />

    <!-- TOP-LEFT BLACK FLOATING BADGE -->
    <g transform="translate(-100, -320)">
      <rect x="0" y="0" width="260" height="150" rx="10" fill="#0f172a" fill-opacity="0.92" stroke="#334155" stroke-width="2.5" />
      <g font-family="'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="15" fill="#ffffff">
        <circle cx="25" cy="30" r="4" fill="#ffffff" />
        <text x="40" y="35">Aptitude Profiling</text>

        <circle cx="25" cy="58" r="4" fill="#ffffff" />
        <text x="40" y="63">Technical skill values</text>

        <circle cx="25" cy="86" r="4" fill="#ffffff" />
        <text x="40" y="91">Skill assessment</text>

        <circle cx="25" cy="114" r="4" fill="#ffffff" />
        <text x="40" y="119">Values alignment</text>

        <circle cx="25" cy="142" r="4" fill="#ffffff" />
        <text x="40" y="147">Personalised pathway</text>
      </g>
    </g>
  </g>

  <!-- 9. FOREGROUND GRAND SANDSTONE BALUSTRADE OVERLOOK -->
  <polygon points="0,750 1920,750 1920,1080 0,1080" fill="url(#sandstone-ground)" />
  <!-- Beveled Balustrade Coping Stone Edge -->
  <rect x="0" y="745" width="1920" height="25" fill="#efe9e0" stroke="#a3937d" stroke-width="3" />

  <!-- 10. CENTER ENGRAVED RELIEF BRONZE / STONE TABLET -->
  <!-- "DISCOVER YOUR STRENGTHS" -->
  <g id="discover-your-strengths-tablet" transform="translate(960, 855)">
    <!-- Outer Inset Bevel Frame -->
    <rect x="-420" y="-95" width="840" height="270" rx="12" fill="#544738" stroke="#362c21" stroke-width="6" />
    <rect x="-405" y="-80" width="810" height="240" rx="8" fill="#8f7d6a" stroke="#d5c7b5" stroke-width="4" />
    <rect x="-395" y="-70" width="790" height="220" rx="4" fill="#3c3124" />

    <!-- Stone Inner Plate Texture -->
    <rect x="-390" y="-65" width="780" height="210" rx="2" fill="#756453" />

    <!-- 3D CARVED RELIEF SHADOWS & HIGHLIGHTS FOR "DISCOVER YOUR STRENGTHS" -->
    <!-- Line 1: DISCOVER -->
    <text x="0" y="10" font-family="'Cinzel', 'Times New Roman', 'Georgia', serif" font-weight="900" font-size="78" fill="#261e16" text-anchor="middle" letter-spacing="10">DISCOVER</text>
    <text x="0" y="6" font-family="'Cinzel', 'Times New Roman', 'Georgia', serif" font-weight="900" font-size="78" fill="#4d3e30" text-anchor="middle" letter-spacing="10">DISCOVER</text>
    <text x="0" y="2" font-family="'Cinzel', 'Times New Roman', 'Georgia', serif" font-weight="900" font-size="78" fill="#eae3d8" text-anchor="middle" letter-spacing="10">DISCOVER</text>

    <!-- Line 2: YOUR -->
    <text x="0" y="52" font-family="'Cinzel', 'Times New Roman', 'Georgia', serif" font-weight="900" font-size="44" fill="#261e16" text-anchor="middle" letter-spacing="8">YOUR</text>
    <text x="0" y="49" font-family="'Cinzel', 'Times New Roman', 'Georgia', serif" font-weight="900" font-size="44" fill="#eae3d8" text-anchor="middle" letter-spacing="8">YOUR</text>

    <!-- Line 3: STRENGTHS -->
    <text x="0" y="118" font-family="'Cinzel', 'Times New Roman', 'Georgia', serif" font-weight="900" font-size="78" fill="#261e16" text-anchor="middle" letter-spacing="10">STRENGTHS</text>
    <text x="0" y="114" font-family="'Cinzel', 'Times New Roman', 'Georgia', serif" font-weight="900" font-size="78" fill="#4d3e30" text-anchor="middle" letter-spacing="10">STRENGTHS</text>
    <text x="0" y="110" font-family="'Cinzel', 'Times New Roman', 'Georgia', serif" font-weight="900" font-size="78" fill="#eae3d8" text-anchor="middle" letter-spacing="10">STRENGTHS</text>
  </g>

  <!-- 11. LEFT BRONZE PLAQUE & FOREGROUND DIAGNOSTIC ARTIFACTS -->
  <g id="left-plaque-career-guidance" transform="translate(280, 770)">
    <!-- Bronze Plaque -->
    <rect x="-240" y="0" width="460" height="95" rx="6" fill="#8f7d6a" stroke="#d5c7b5" stroke-width="3" />
    <rect x="-235" y="5" width="450" height="85" rx="4" fill="#544738" />
    <text x="-10" y="30" font-family="'Cinzel', 'Times New Roman', serif" font-weight="900" font-size="22" fill="#fde047" text-anchor="middle" letter-spacing="4">CAREER GUIDANCE</text>
    <g font-family="'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="12" fill="#eae3d8">
      <text x="-215" y="55">• Aptitude Profiling</text>
      <text x="-215" y="75">• Technical profiling &amp; values</text>
      <text x="25" y="55">• Technical skill assessment</text>
      <text x="25" y="75">• Personalized career pathway</text>
    </g>

    <!-- Digital E-Reader Tablet with Screen Diagnostics -->
    <g transform="translate(-160, 95) rotate(-10)">
      <rect x="0" y="0" width="140" height="190" rx="10" fill="#e2e8f0" stroke="#94a3b8" stroke-width="4" />
      <rect x="12" y="14" width="116" height="162" rx="4" fill="#ffffff" />
      <!-- Text Lines on E-Reader -->
      <g fill="#64748b">
        <rect x="24" y="28" width="92" height="6" rx="2" />
        <rect x="24" y="42" width="75" height="5" rx="2" />
        <rect x="24" y="54" width="85" height="5" rx="2" />
        <rect x="24" y="66" width="90" height="5" rx="2" />
        <rect x="24" y="78" width="60" height="5" rx="2" />
        <line x1="24" y1="100" x2="116" y2="100" stroke="#cbd5e1" stroke-width="1.5" />
        <!-- Miniature Radar Chart on Tablet -->
        <circle cx="70" cy="135" r="22" fill="none" stroke="#0284c7" stroke-width="1.5" />
        <polygon points="70,118 85,130 80,148 58,144 55,128" fill="#38bdf8" fill-opacity="0.5" stroke="#0284c7" stroke-width="2" />
      </g>
    </g>

    <!-- Leatherbound Embossed Journal Notebook -->
    <g transform="translate(15, 120) rotate(5)">
      <rect x="0" y="0" width="95" height="135" rx="6" fill="#451a03" stroke="#78350f" stroke-width="3" />
      <circle cx="47" cy="67" r="20" fill="none" stroke="#fde047" stroke-width="2" />
      <circle cx="47" cy="67" r="14" fill="#fde047" opacity="0.4" />
      <!-- Gold Ribbon Bookmark -->
      <line x1="47" y1="0" x2="47" y2="155" stroke="#fde047" stroke-width="5" />
    </g>

    <!-- Polished Brass Pocket Compass -->
    <g transform="translate(140, 160)">
      <circle cx="35" cy="35" r="34" fill="#ca8a04" stroke="#78350f" stroke-width="4" />
      <circle cx="35" cy="35" r="28" fill="#fef9c3" stroke="#eab308" stroke-width="2" />
      <!-- Compass Rose & Needle -->
      <polygon points="35,12 41,35 35,32 29,35" fill="#dc2626" />
      <polygon points="35,58 41,35 35,38 29,35" fill="#475569" />
      <circle cx="35" cy="35" r="5" fill="#78350f" />
    </g>
  </g>

  <!-- 12. RIGHT BRONZE PLAQUE & OPEN "CAREER TRANSFORMATION GUIDE" BOOK -->
  <g id="right-plaque-aptitude-assessment" transform="translate(1640, 770)">
    <!-- Bronze Plaque -->
    <rect x="-240" y="0" width="460" height="95" rx="6" fill="#8f7d6a" stroke="#d5c7b5" stroke-width="3" />
    <rect x="-235" y="5" width="450" height="85" rx="4" fill="#544738" />
    <text x="-10" y="30" font-family="'Cinzel', 'Times New Roman', serif" font-weight="900" font-size="22" fill="#fde047" text-anchor="middle" letter-spacing="4">APTITUDE ASSESSMENT</text>
    <g font-family="'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="12" fill="#eae3d8">
      <text x="-220" y="55">• Technical skills assessment</text>
      <text x="-220" y="75">• Values alignment matrix</text>
      <text x="25" y="55">• Emotional intelligence quotient</text>
      <text x="25" y="75">• Personalized cognitive report</text>
    </g>

    <!-- Magnificently Rendered Open Hardcover Book: "CAREER TRANSFORMATION GUIDE" -->
    <g transform="translate(-160, 105)">
      <!-- Golden Hardcover Binding Border -->
      <path d="M -15 15 Q 170 0 190 18 L 190 195 Q 170 180 -15 195 Z" fill="#92400e" stroke="#fde047" stroke-width="5" />
      <path d="M 190 18 Q 210 0 395 15 L 395 195 Q 210 180 190 195 Z" fill="#92400e" stroke="#fde047" stroke-width="5" />

      <!-- Thick White/Beige Parchment Pages -->
      <path d="M 0 20 Q 170 8 185 24 L 185 190 Q 170 176 0 190 Z" fill="#fffbeb" stroke="#d5c7b5" stroke-width="2" />
      <path d="M 195 24 Q 210 8 380 20 L 380 190 Q 210 176 195 190 Z" fill="#fffbeb" stroke="#d5c7b5" stroke-width="2" />

      <!-- Spine Center Depression -->
      <line x1="190" y1="20" x2="190" y2="194" stroke="#78350f" stroke-width="4" />

      <!-- Left Page: Career Transformation Guide Heading & Gaussian Distribution Bell Curve -->
      <text x="90" y="45" font-family="'Cinzel', 'Times New Roman', serif" font-weight="900" font-size="12" fill="#78350f" text-anchor="middle">Career Transformation Guide</text>
      <!-- Normal Distribution Bell Curve Diagram -->
      <path d="M 25 130 Q 70 130 90 70 Q 110 130 155 130" fill="none" stroke="#d97706" stroke-width="3" />
      <line x1="90" y1="70" x2="90" y2="135" stroke="#0284c7" stroke-width="2" stroke-dasharray="4 2" />
      <line x1="20" y1="135" x2="160" y2="135" stroke="#78350f" stroke-width="2" />
      <!-- Small text bullets -->
      <rect x="25" y="150" width="130" height="5" rx="1" fill="#a8a29e" />
      <rect x="25" y="162" width="110" height="5" rx="1" fill="#a8a29e" />

      <!-- Right Page: Dual Circular Sunburst Pie Charts -->
      <!-- Pie Chart 1 (Skill Weights) -->
      <g transform="translate(255, 75)">
        <circle cx="0" cy="0" r="28" fill="#fde047" stroke="#b45309" stroke-width="2" />
        <path d="M 0 0 L 0 -28 A 28 28 0 0 1 24 14 Z" fill="#d97706" />
        <path d="M 0 0 L 24 14 A 28 28 0 0 1 -20 20 Z" fill="#b45309" />
        <circle cx="0" cy="0" r="10" fill="#fffbeb" />
      </g>

      <!-- Pie Chart 2 (Aptitude Factors) -->
      <g transform="translate(325, 75)">
        <circle cx="0" cy="0" r="24" fill="#38bdf8" stroke="#0284c7" stroke-width="2" />
        <path d="M 0 0 L 0 -24 A 24 24 0 0 1 20 12 Z" fill="#0284c7" />
        <circle cx="0" cy="0" r="8" fill="#fffbeb" />
      </g>

      <!-- Diagram Wireframe Box & Text -->
      <rect x="220" y="125" width="140" height="35" rx="3" fill="none" stroke="#78350f" stroke-width="1.5" />
      <line x1="230" y1="142" x2="350" y2="142" stroke="#d97706" stroke-width="1.5" />
      <rect x="220" y="170" width="140" height="5" rx="1" fill="#a8a29e" />
    </g>
  </g>
</svg>"""

    svg_path = "public/images/discover-your-strengths-assessment.svg"
    os.makedirs("public/images", exist_ok=True)
    with open(svg_path, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"Generated {svg_path}")

if __name__ == "__main__":
    generate_svg()
