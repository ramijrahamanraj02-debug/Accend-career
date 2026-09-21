import subprocess
import os

# 1. Precise Standalone Emblem SVG with exact isometric Delta Loop ribbon
gemini_emblem_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 680" width="700" height="680" fill="none">
  <defs>
    <!-- Deep Realistic 3D Wall Drop Shadows (Multilayered for realistic contact and ambient spread) -->
    <filter id="wall-ambient-shadow-deep" x="-40%" y="-40%" width="180%" height="180%">
      <!-- Far soft ambient shadow -->
      <feGaussianBlur in="SourceAlpha" stdDeviation="22" result="blurFar" />
      <feOffset in="blurFar" dx="28" dy="38" result="offsetFar" />
      <feFlood flood-color="#02141a" flood-opacity="0.65" result="colorFar" />
      <feComposite in2="offsetFar" in="colorFar" operator="in" result="shadowFar" />

      <!-- Mid contact shadow -->
      <feGaussianBlur in="SourceAlpha" stdDeviation="9" result="blurMid" />
      <feOffset in="blurMid" dx="14" dy="18" result="offsetMid" />
      <feFlood flood-color="#010c10" flood-opacity="0.55" result="colorMid" />
      <feComposite in2="offsetMid" in="colorMid" operator="in" result="shadowMid" />

      <!-- Tight contact shadow under edges -->
      <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blurTight" />
      <feOffset in="blurTight" dx="4" dy="6" result="offsetTight" />
      <feFlood flood-color="#000709" flood-opacity="0.5" result="colorTight" />
      <feComposite in2="offsetTight" in="colorTight" operator="in" result="shadowTight" />

      <feMerge>
        <feMergeNode in="shadowFar" />
        <feMergeNode in="shadowMid" />
        <feMergeNode in="shadowTight" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Front Face Polished Cyan-Teal Metallic Lacquer Gradient -->
    <linearGradient id="gemini-front-lacquer" x1="120" y1="520" x2="520" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#006972" />
      <stop offset="25%" stop-color="#00838d" />
      <stop offset="50%" stop-color="#0b9aa6" />
      <stop offset="78%" stop-color="#14b8a6" />
      <stop offset="92%" stop-color="#2dd4bf" />
      <stop offset="100%" stop-color="#5eead4" />
    </linearGradient>

    <!-- 3D Extrusion Side Wall (Right & Bottom Depth Wall in Deep Shadow Teal) -->
    <linearGradient id="gemini-depth-wall" x1="180" y1="60" x2="580" y2="520" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#004c52" />
      <stop offset="35%" stop-color="#003136" />
      <stop offset="75%" stop-color="#001d20" />
      <stop offset="100%" stop-color="#000f12" />
    </linearGradient>

    <!-- Intermediate Bevel Shadow (Between Front Face and Rear Extrusion) -->
    <linearGradient id="gemini-bevel-wall" x1="150" y1="100" x2="520" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#005d64" />
      <stop offset="50%" stop-color="#003a3f" />
      <stop offset="100%" stop-color="#00181a" />
    </linearGradient>

    <!-- Top & Left Specular Edge Chamfer (Sharp Crisp Highlight) -->
    <linearGradient id="gemini-specular-edge" x1="100" y1="60" x2="550" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.98" />
      <stop offset="25%" stop-color="#d4fdff" stop-opacity="0.85" />
      <stop offset="60%" stop-color="#5eead4" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#00838d" stop-opacity="0.2" />
    </linearGradient>

    <!-- Glass Architectural Sheen (Diagonal Softbox Studio Glint) -->
    <linearGradient id="gemini-gloss-sheen" x1="160" y1="40" x2="480" y2="480" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45" />
      <stop offset="30%" stop-color="#ffffff" stop-opacity="0.12" />
      <stop offset="55%" stop-color="#ffffff" stop-opacity="0.0" />
    </linearGradient>

    <!-- Internal Reflection Band -->
    <linearGradient id="inner-ribbon-shine" x1="280" y1="160" x2="440" y2="400" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#cffafe" stop-opacity="0.6" />
      <stop offset="50%" stop-color="#14b8a6" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#004c52" stop-opacity="0.4" />
    </linearGradient>
  </defs>

  <!-- FILTERED 3D GEOMETRIC EMBLEM -->
  <g filter="url(#wall-ambient-shadow-deep)">

    <!-- LAYER 1: BASE DEEP 3D EXTRUSION SIDES (Offset X+18, Y+26) -->
    <g transform="translate(18, 26)" fill="url(#gemini-depth-wall)">
      <!-- Top Ascending Spire Blade & Right Wing -->
      <path d="M 370 42 L 432 42 L 610 388 L 546 502 L 496 428 L 556 348 Z" />
      <!-- Main Left Ascending Diagonal -->
      <path d="M 324 112 L 386 112 L 180 442 L 118 442 Z" />
      <!-- Inner Parallel Diagonal Accent Line -->
      <path d="M 386 112 L 438 112 L 234 442 L 180 442 Z" />
      <!-- Central Diagonal Cross Connector -->
      <path d="M 324 112 L 386 112 L 502 400 L 440 400 Z" />
      <!-- Inner Horizontal Crossbar -->
      <path d="M 166 398 L 508 398 L 532 442 L 140 442 Z" />
      <!-- Bottom Base Foundation Bar & Stepped Return -->
      <path d="M 118 502 L 476 502 L 522 572 L 466 572 L 438 534 L 118 534 Z" />
      <!-- Right Angled Chevron Return Foot -->
      <path d="M 546 502 L 518 554 L 468 486 L 496 428 Z" />
    </g>

    <!-- LAYER 2: INTERMEDIATE 3D BEVEL LEVEL (Offset X+9, Y+13) -->
    <g transform="translate(9, 13)" fill="url(#gemini-bevel-wall)">
      <!-- Top Ascending Spire Blade & Right Wing -->
      <path d="M 370 42 L 432 42 L 610 388 L 546 502 L 496 428 L 556 348 Z" />
      <!-- Main Left Ascending Diagonal -->
      <path d="M 324 112 L 386 112 L 180 442 L 118 442 Z" />
      <!-- Inner Parallel Diagonal Accent Line -->
      <path d="M 386 112 L 438 112 L 234 442 L 180 442 Z" />
      <!-- Central Diagonal Cross Connector -->
      <path d="M 324 112 L 386 112 L 502 400 L 440 400 Z" />
      <!-- Inner Horizontal Crossbar -->
      <path d="M 166 398 L 508 398 L 532 442 L 140 442 Z" />
      <!-- Bottom Base Foundation Bar & Stepped Return -->
      <path d="M 118 502 L 476 502 L 522 572 L 466 572 L 438 534 L 118 534 Z" />
      <!-- Right Angled Chevron Return Foot -->
      <path d="M 546 502 L 518 554 L 468 486 L 496 428 Z" />
    </g>

    <!-- LAYER 3: FRONT POLISHED METALLIC TEAL FACES (Zero Offset) -->
    <g stroke="url(#gemini-specular-edge)" stroke-width="2.5" stroke-linejoin="miter" stroke-miterlimit="6">
      <!-- Top Ascending Spire Blade & Right Wing -->
      <path
        d="M 370 42 L 432 42 L 610 388 L 546 502 L 496 428 L 556 348 Z"
        fill="url(#gemini-front-lacquer)"
      />
      <!-- Main Left Ascending Diagonal -->
      <path
        d="M 324 112 L 386 112 L 180 442 L 118 442 Z"
        fill="url(#gemini-front-lacquer)"
      />
      <!-- Inner Parallel Diagonal Accent Line -->
      <path
        d="M 386 112 L 438 112 L 234 442 L 180 442 Z"
        fill="url(#gemini-front-lacquer)"
      />
      <!-- Central Diagonal Cross Connector -->
      <path
        d="M 324 112 L 386 112 L 502 400 L 440 400 Z"
        fill="url(#gemini-front-lacquer)"
      />
      <!-- Inner Horizontal Crossbar -->
      <path
        d="M 166 398 L 508 398 L 532 442 L 140 442 Z"
        fill="url(#gemini-front-lacquer)"
      />
      <!-- Bottom Base Foundation Bar & Stepped Return -->
      <path
        d="M 118 502 L 476 502 L 522 572 L 466 572 L 438 534 L 118 534 Z"
        fill="url(#gemini-front-lacquer)"
      />
      <!-- Right Angled Chevron Return Foot -->
      <path
        d="M 546 502 L 518 554 L 468 486 L 496 428 Z"
        fill="url(#gemini-front-lacquer)"
      />
    </g>

    <!-- LAYER 4: GLASS SURFACE REFLECTION & APEX GLINTS -->
    <g pointer-events="none">
      <!-- Diagonal Gloss Softbox Sheen -->
      <path
        d="M 324 112 L 432 42 L 540 240 L 250 370 Z"
        fill="url(#gemini-gloss-sheen)"
        style="mix-blend-mode: screen;"
      />
      <!-- Inner Triangle Highlight Sheen -->
      <path
        d="M 386 112 L 438 112 L 340 320 L 290 320 Z"
        fill="url(#inner-ribbon-shine)"
      />
      <!-- Spire Apex Glint -->
      <circle cx="400" cy="42" r="4.5" fill="#ffffff" opacity="0.95" />
      <!-- Right Apex Glint -->
      <circle cx="546" cy="442" r="3.5" fill="#ffffff" opacity="0.9" />
      <!-- Bottom Left Apex Glint -->
      <circle cx="118" cy="442" r="3" fill="#ffffff" opacity="0.8" />
    </g>
  </g>
</svg>"""

with open("public/images/ascend-logo.svg", "w", encoding="utf-8") as f:
    f.write(gemini_emblem_svg)

# Also write to logo1.png and gemini-logo.png paths
with open("public/images/gemini-logo.svg", "w", encoding="utf-8") as f:
    f.write(gemini_emblem_svg)

# 2. Complete Wall Lockup: Emblem + 3D Navy ASCEND + 3D Teal CAREER + Diamond Sparkle
gemini_wall_lockup_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1000" width="900" height="1000" fill="none">
  <defs>
    <!-- Architectural Brushed Stone Wall Background -->
    <linearGradient id="arch-wall" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8f9fa" />
      <stop offset="35%" stop-color="#eeeff1" />
      <stop offset="70%" stop-color="#e2e4e8" />
      <stop offset="100%" stop-color="#d4d7dc" />
    </linearGradient>

    <!-- Wall Ambient Drop Shadow for Logo Mark -->
    <filter id="wall-mark-shadow" x="-30%" y="-30%" width="170%" height="170%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="16" result="b1" />
      <feOffset in="b1" dx="16" dy="24" result="o1" />
      <feFlood flood-color="#02141a" flood-opacity="0.55" result="c1" />
      <feComposite in2="o1" in="c1" operator="in" result="s1" />

      <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="b2" />
      <feOffset in="b2" dx="6" dy="10" result="o2" />
      <feFlood flood-color="#000a0d" flood-opacity="0.45" result="c2" />
      <feComposite in2="o2" in="c2" operator="in" result="s2" />

      <feMerge>
        <feMergeNode in="s1" />
        <feMergeNode in="s2" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Front Face Polished Teal Gradient -->
    <linearGradient id="wl-teal-front" x1="120" y1="520" x2="520" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#006972" />
      <stop offset="25%" stop-color="#00838d" />
      <stop offset="50%" stop-color="#0b9aa6" />
      <stop offset="78%" stop-color="#14b8a6" />
      <stop offset="92%" stop-color="#2dd4bf" />
      <stop offset="100%" stop-color="#5eead4" />
    </linearGradient>

    <!-- Extrusion Shadow Side Gradient -->
    <linearGradient id="wl-depth-side" x1="180" y1="60" x2="580" y2="520" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#004c52" />
      <stop offset="35%" stop-color="#003136" />
      <stop offset="75%" stop-color="#001d20" />
      <stop offset="100%" stop-color="#000f12" />
    </linearGradient>

    <!-- Specular Edge -->
    <linearGradient id="wl-specular" x1="100" y1="60" x2="550" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
      <stop offset="25%" stop-color="#d4fdff" stop-opacity="0.8" />
      <stop offset="60%" stop-color="#5eead4" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#00838d" stop-opacity="0.15" />
    </linearGradient>

    <!-- 3D Navy Face for ASCEND (Direct match with photo) -->
    <linearGradient id="wl-navy-face" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1f3b64" />
      <stop offset="35%" stop-color="#162e50" />
      <stop offset="75%" stop-color="#0f223d" />
      <stop offset="100%" stop-color="#09172a" />
    </linearGradient>

    <!-- 3D Navy Edge Highlight Bevel -->
    <linearGradient id="wl-navy-bevel" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#739ccd" />
      <stop offset="50%" stop-color="#41689b" />
      <stop offset="100%" stop-color="#739ccd" />
    </linearGradient>

    <!-- 3D Teal Face for CAREER -->
    <linearGradient id="wl-career-face" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14b8a6" />
      <stop offset="35%" stop-color="#008a94" />
      <stop offset="80%" stop-color="#006c75" />
      <stop offset="100%" stop-color="#004d53" />
    </linearGradient>

    <!-- Bottom Right Ambient Diamond Sparkle Flare -->
    <radialGradient id="wl-sparkle-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
      <stop offset="30%" stop-color="#cffafe" stop-opacity="0.6" />
      <stop offset="70%" stop-color="#a5f3fc" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.0" />
    </radialGradient>
  </defs>

  <!-- ARCHITECTURAL WALL BACKGROUND -->
  <rect width="900" height="1000" rx="24" fill="url(#arch-wall)" />

  <!-- 1. 3D DELTA EMBLEM (Top Centered) -->
  <g transform="translate(180, 50) scale(0.77)" filter="url(#wall-mark-shadow)">
    <!-- 3D Extrusion Depth -->
    <g transform="translate(16, 24)" fill="url(#wl-depth-side)">
      <path d="M 370 42 L 432 42 L 610 388 L 546 502 L 496 428 L 556 348 Z" />
      <path d="M 324 112 L 386 112 L 180 442 L 118 442 Z" />
      <path d="M 386 112 L 438 112 L 234 442 L 180 442 Z" />
      <path d="M 324 112 L 386 112 L 502 400 L 440 400 Z" />
      <path d="M 166 398 L 508 398 L 532 442 L 140 442 Z" />
      <path d="M 118 502 L 476 502 L 522 572 L 466 572 L 438 534 L 118 534 Z" />
      <path d="M 546 502 L 518 554 L 468 486 L 496 428 Z" />
    </g>

    <!-- Front Face -->
    <g stroke="url(#wl-specular)" stroke-width="2.5" stroke-linejoin="miter" stroke-miterlimit="6">
      <path d="M 370 42 L 432 42 L 610 388 L 546 502 L 496 428 L 556 348 Z" fill="url(#wl-teal-front)" />
      <path d="M 324 112 L 386 112 L 180 442 L 118 442 Z" fill="url(#wl-teal-front)" />
      <path d="M 386 112 L 438 112 L 234 442 L 180 442 Z" fill="url(#wl-teal-front)" />
      <path d="M 324 112 L 386 112 L 502 400 L 440 400 Z" fill="url(#wl-teal-front)" />
      <path d="M 166 398 L 508 398 L 532 442 L 140 442 Z" fill="url(#wl-teal-front)" />
      <path d="M 118 502 L 476 502 L 522 572 L 466 572 L 438 534 L 118 534 Z" fill="url(#wl-teal-front)" />
      <path d="M 546 502 L 518 554 L 468 486 L 496 428 Z" fill="url(#wl-teal-front)" />
    </g>

    <!-- Gloss Sheen -->
    <path
      d="M 324 112 L 432 42 L 540 240 L 250 370 Z"
      fill="#ffffff"
      opacity="0.28"
      style="mix-blend-mode: screen;"
    />
  </g>

  <!-- 2. 3D "ASCEND" LETTERING (Navy Metallic with physical depth) -->
  <g id="ascend-wordmark">
    <!-- Cast Shadow -->
    <text
      x="458"
      y="712"
      text-anchor="middle"
      fill="#030912"
      opacity="0.5"
      font-family="'Plus Jakarta Sans', 'Arial Black', sans-serif"
      font-size="134"
      font-weight="900"
      letter-spacing="6"
    >ASCEND</text>

    <!-- 3D Extrusions -->
    <text
      x="455"
      y="709"
      text-anchor="middle"
      fill="#050f1d"
      font-family="'Plus Jakarta Sans', 'Arial Black', sans-serif"
      font-size="134"
      font-weight="900"
      letter-spacing="6"
    >ASCEND</text>
    <text
      x="453"
      y="707"
      text-anchor="middle"
      fill="#09182b"
      font-family="'Plus Jakarta Sans', 'Arial Black', sans-serif"
      font-size="134"
      font-weight="900"
      letter-spacing="6"
    >ASCEND</text>
    <text
      x="451"
      y="705"
      text-anchor="middle"
      fill="#0f223d"
      font-family="'Plus Jakarta Sans', 'Arial Black', sans-serif"
      font-size="134"
      font-weight="900"
      letter-spacing="6"
    >ASCEND</text>

    <!-- Front Face -->
    <text
      x="450"
      y="704"
      text-anchor="middle"
      fill="url(#wl-navy-face)"
      stroke="url(#wl-navy-bevel)"
      stroke-width="1.4"
      font-family="'Plus Jakarta Sans', 'Arial Black', sans-serif"
      font-size="134"
      font-weight="900"
      letter-spacing="6"
    >ASCEND</text>
  </g>

  <!-- 3. 3D "CAREER" LETTERING (Polished Teal) -->
  <g id="career-wordmark">
    <!-- Cast Shadow -->
    <text
      x="456"
      y="832"
      text-anchor="middle"
      fill="#002126"
      opacity="0.5"
      font-family="'Plus Jakarta Sans', sans-serif"
      font-size="62"
      font-weight="800"
      letter-spacing="28"
    >CAREER</text>

    <!-- 3D Extrusion -->
    <text
      x="453"
      y="829"
      text-anchor="middle"
      fill="#00353c"
      font-family="'Plus Jakarta Sans', sans-serif"
      font-size="62"
      font-weight="800"
      letter-spacing="28"
    >CAREER</text>
    <text
      x="451"
      y="827"
      text-anchor="middle"
      fill="#00535c"
      font-family="'Plus Jakarta Sans', sans-serif"
      font-size="62"
      font-weight="800"
      letter-spacing="28"
    >CAREER</text>

    <!-- Front Face -->
    <text
      x="450"
      y="825"
      text-anchor="middle"
      fill="url(#wl-career-face)"
      stroke="#5eead4"
      stroke-width="1.0"
      font-family="'Plus Jakarta Sans', sans-serif"
      font-size="62"
      font-weight="800"
      letter-spacing="28"
    >CAREER</text>
  </g>

  <!-- 4. ARCHITECTURAL BASELINE DIVIDER -->
  <line
    x1="130"
    y1="875"
    x2="770"
    y2="875"
    stroke="#0f223d"
    stroke-width="3.5"
    stroke-linecap="round"
  />

  <!-- 5. AMBIENT SPARKLE DIAMOND (Exact match from bottom-right in user photo) -->
  <g transform="translate(760, 795)">
    <circle cx="0" cy="0" r="28" fill="url(#wl-sparkle-glow)" />
    <path d="M 0 -18 L 3.5 -4.5 L 17 0 L 3.5 4.5 L 0 18 L -3.5 4.5 L -17 0 L -3.5 -4.5 Z" fill="#ffffff" opacity="0.95" />
    <circle cx="0" cy="0" r="3" fill="#ffffff" />
  </g>
</svg>"""

with open("public/images/ascend-logo-full.svg", "w", encoding="utf-8") as f:
    f.write(gemini_wall_lockup_svg)

with open("public/images/gemini-logo-full.svg", "w", encoding="utf-8") as f:
    f.write(gemini_wall_lockup_svg)

print("Saved SVGs!")

# Convert to high-resolution PNGs using ImageMagick
try:
    subprocess.run(["convert", "-density", "200", "-background", "none", "public/images/ascend-logo.svg", "public/images/ascend-logo.png"], check=True)
    subprocess.run(["convert", "-density", "200", "-background", "none", "public/images/ascend-logo.svg", "public/images/logo1.png"], check=True)
    subprocess.run(["convert", "-density", "200", "-background", "none", "public/images/ascend-logo.svg", "public/images/gemini-logo.png"], check=True)
    print("Rendered emblem PNGs (ascend-logo.png, logo1.png, gemini-logo.png)")
except Exception as e:
    print("Emblem PNG convert error:", e)

try:
    subprocess.run(["convert", "-density", "200", "public/images/ascend-logo-full.svg", "public/images/ascend-logo-full.png"], check=True)
    subprocess.run(["convert", "-density", "200", "public/images/ascend-logo-full.svg", "public/images/gemini-logo-full.png"], check=True)
    print("Rendered full lockup PNGs (ascend-logo-full.png, gemini-logo-full.png)")
except Exception as e:
    print("Full lockup convert error:", e)

# Also copy into dist/images if dist exists
if os.path.exists("dist/images"):
    subprocess.run(["cp", "-r", "public/images/.", "dist/images/"], check=True)
    print("Copied images to dist/images/")

