import os
import subprocess

def create_svg_and_png():
    # 1. Standalone Emblem (ascend-logo.svg)
    # Exact geometric 3D emblem from the user photo
    emblem_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 560" width="600" height="560" fill="none">
  <defs>
    <!-- Wall Ambient Soft Shadow -->
    <filter id="wall-ambient-shadow" x="-30%" y="-30%" width="170%" height="170%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="16" result="blur1" />
      <feOffset in="blur1" dx="14" dy="24" result="offset1" />
      <feFlood flood-color="#051c24" flood-opacity="0.55" result="color1" />
      <feComposite in2="offset1" in="color1" operator="in" result="shadow1" />

      <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur2" />
      <feOffset in="blur2" dx="6" dy="10" result="offset2" />
      <feFlood flood-color="#020e12" flood-opacity="0.45" result="color2" />
      <feComposite in2="offset2" in="color2" operator="in" result="shadow2" />

      <feMerge>
        <feMergeNode in="shadow1" />
        <feMergeNode in="shadow2" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Front Face Polished Teal Gradient (Directly sampled from photo) -->
    <linearGradient id="teal-front-face" x1="120" y1="440" x2="480" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#006c75" />
      <stop offset="25%" stop-color="#008a94" />
      <stop offset="55%" stop-color="#0a9da8" />
      <stop offset="85%" stop-color="#14b8a6" />
      <stop offset="100%" stop-color="#2dd4bf" />
    </linearGradient>

    <!-- 3D Extruded Deep Shadow Wall (Right & Bottom Depth Planes) -->
    <linearGradient id="depth-side-gradient" x1="200" y1="50" x2="500" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#004d53" />
      <stop offset="45%" stop-color="#003136" />
      <stop offset="80%" stop-color="#001d20" />
      <stop offset="100%" stop-color="#001113" />
    </linearGradient>

    <!-- Under-Side Depth Gradient (Darkest Cavity) -->
    <linearGradient id="depth-bottom-gradient" x1="150" y1="200" x2="400" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#003b40" />
      <stop offset="100%" stop-color="#001517" />
    </linearGradient>

    <!-- Specular Edge Chamfer (Top & Left Glint) -->
    <linearGradient id="specular-edge" x1="120" y1="60" x2="460" y2="380" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
      <stop offset="30%" stop-color="#cffafe" stop-opacity="0.8" />
      <stop offset="70%" stop-color="#5eead4" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#0d9488" stop-opacity="0.15" />
    </linearGradient>

    <!-- Diagonal Glass Softbox Sheen -->
    <linearGradient id="gloss-softbox" x1="140" y1="40" x2="400" y2="440" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.4" />
      <stop offset="35%" stop-color="#ffffff" stop-opacity="0.12" />
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0.0" />
    </linearGradient>
  </defs>

  <!-- GRP WITH WALL SHADOW & 3D LAYERS -->
  <g filter="url(#wall-ambient-shadow)">
    <!-- LAYER 1: DEEP EXTRUSION SIDES (Offset +16px X, +24px Y) -->
    <g transform="translate(14, 20)" fill="url(#depth-side-gradient)">
      <!-- Top Ascending Spire Blade -->
      <path d="M 315 36 L 368 36 L 522 344 L 468 444 L 424 380 L 476 312 Z" />
      <!-- Left Main Slanted Leg -->
      <path d="M 276 96 L 328 96 L 152 384 L 100 384 Z" />
      <!-- Inner Parallel Diagonal Accent -->
      <path d="M 328 96 L 372 96 L 198 384 L 152 384 Z" />
      <!-- Central Diagonal Cross Connector -->
      <path d="M 276 96 L 328 96 L 428 350 L 376 350 Z" />
      <!-- Triangle Horizontal Mid-Crossbar -->
      <path d="M 138 348 L 432 348 L 452 384 L 118 384 Z" />
      <!-- Bottom Base Bar & Stepped Chevron -->
      <path d="M 100 436 L 408 436 L 448 496 L 400 496 L 376 464 L 100 464 Z" />
      <!-- Lower Right Angled Foot -->
      <path d="M 468 444 L 444 488 L 402 430 L 424 380 Z" />
    </g>

    <!-- LAYER 2: INTERMEDIATE BEVEL LEVEL (Offset +7px X, +10px Y) -->
    <g transform="translate(7, 10)" fill="url(#depth-bottom-gradient)">
      <path d="M 315 36 L 368 36 L 522 344 L 468 444 L 424 380 L 476 312 Z" />
      <path d="M 276 96 L 328 96 L 152 384 L 100 384 Z" />
      <path d="M 328 96 L 372 96 L 198 384 L 152 384 Z" />
      <path d="M 276 96 L 328 96 L 428 350 L 376 350 Z" />
      <path d="M 138 348 L 432 348 L 452 384 L 118 384 Z" />
      <path d="M 100 436 L 408 436 L 448 496 L 400 496 L 376 464 L 100 464 Z" />
      <path d="M 468 444 L 444 488 L 402 430 L 424 380 Z" />
    </g>

    <!-- LAYER 3: POLISHED METALLIC TEAL FRONT FACES (Zero Offset) -->
    <g stroke="url(#specular-edge)" stroke-width="2.5" stroke-linejoin="miter" stroke-miterlimit="6">
      <!-- Top Ascending Spire Blade -->
      <path
        d="M 315 36 L 368 36 L 522 344 L 468 444 L 424 380 L 476 312 Z"
        fill="url(#teal-front-face)"
      />
      <!-- Left Main Slanted Leg -->
      <path
        d="M 276 96 L 328 96 L 152 384 L 100 384 Z"
        fill="url(#teal-front-face)"
      />
      <!-- Inner Parallel Diagonal Accent -->
      <path
        d="M 328 96 L 372 96 L 198 384 L 152 384 Z"
        fill="url(#teal-front-face)"
      />
      <!-- Central Diagonal Cross Connector -->
      <path
        d="M 276 96 L 328 96 L 428 350 L 376 350 Z"
        fill="url(#teal-front-face)"
      />
      <!-- Triangle Horizontal Mid-Crossbar -->
      <path
        d="M 138 348 L 432 348 L 452 384 L 118 384 Z"
        fill="url(#teal-front-face)"
      />
      <!-- Bottom Base Bar & Stepped Chevron -->
      <path
        d="M 100 436 L 408 436 L 448 496 L 400 496 L 376 464 L 100 464 Z"
        fill="url(#teal-front-face)"
      />
      <!-- Lower Right Angled Foot -->
      <path
        d="M 468 444 L 444 488 L 402 430 L 424 380 Z"
        fill="url(#teal-front-face)"
      />
    </g>

    <!-- LAYER 4: SPECULAR SURFACE HIGHLIGHTS & GLOSS SHEEN -->
    <g pointer-events="none">
      <!-- Diagonal Softbox Reflection -->
      <path
        d="M 276 96 L 368 36 L 460 210 L 210 320 Z"
        fill="url(#gloss-softbox)"
        style="mix-blend-mode: screen;"
      />
      <!-- Apex Glint -->
      <circle cx="342" cy="36" r="4" fill="#ffffff" opacity="0.95" />
      <circle cx="468" cy="380" r="3.5" fill="#ffffff" opacity="0.85" />
      <circle cx="100" cy="384" r="3" fill="#ffffff" opacity="0.75" />
    </g>
  </g>
</svg>"""

    with open("public/images/ascend-logo.svg", "w", encoding="utf-8") as f:
        f.write(emblem_svg)
    print("Wrote public/images/ascend-logo.svg")

    # 2. Full Lockup (ascend-logo-full.svg)
    # Includes 3D Emblem + 3D ASCEND in navy + 3D CAREER in teal + baseline divider
    full_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 900" width="800" height="900" fill="none">
  <defs>
    <!-- Background Architectural Wall Lighting (Subtle studio gradient) -->
    <linearGradient id="wall-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5f6f7" />
      <stop offset="40%" stop-color="#eceef0" />
      <stop offset="80%" stop-color="#dfdfe2" />
      <stop offset="100%" stop-color="#cfd1d5" />
    </linearGradient>

    <!-- Wall Ambient Soft Shadow for Emblem -->
    <filter id="emblem-shadow" x="-30%" y="-30%" width="170%" height="170%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="14" result="blur1" />
      <feOffset in="blur1" dx="12" dy="20" result="offset1" />
      <feFlood flood-color="#051c24" flood-opacity="0.5" result="color1" />
      <feComposite in2="offset1" in="color1" operator="in" result="shadow1" />

      <feMerge>
        <feMergeNode in="shadow1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Front Face Polished Teal Gradient -->
    <linearGradient id="teal-front" x1="120" y1="440" x2="480" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#006c75" />
      <stop offset="25%" stop-color="#008a94" />
      <stop offset="55%" stop-color="#0a9da8" />
      <stop offset="85%" stop-color="#14b8a6" />
      <stop offset="100%" stop-color="#2dd4bf" />
    </linearGradient>

    <!-- Depth Gradient -->
    <linearGradient id="depth-grad" x1="200" y1="50" x2="500" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#004d53" />
      <stop offset="45%" stop-color="#003136" />
      <stop offset="100%" stop-color="#001417" />
    </linearGradient>

    <!-- Specular Edge Highlight -->
    <linearGradient id="specular-grad" x1="120" y1="60" x2="460" y2="380" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
      <stop offset="30%" stop-color="#cffafe" stop-opacity="0.8" />
      <stop offset="70%" stop-color="#5eead4" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#0d9488" stop-opacity="0.15" />
    </linearGradient>

    <!-- Navy 3D Face for ASCEND (Directly matching photo) -->
    <linearGradient id="navy-3d-face" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1f385c" />
      <stop offset="30%" stop-color="#162c4b" />
      <stop offset="70%" stop-color="#0f213a" />
      <stop offset="100%" stop-color="#0a172a" />
    </linearGradient>

    <!-- Navy 3D Specular Top Bevel -->
    <linearGradient id="navy-bevel" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6086b4" />
      <stop offset="50%" stop-color="#3b5d8a" />
      <stop offset="100%" stop-color="#6086b4" />
    </linearGradient>

    <!-- Teal 3D Face for CAREER -->
    <linearGradient id="career-teal-face" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14b8a6" />
      <stop offset="40%" stop-color="#008a94" />
      <stop offset="100%" stop-color="#006c75" />
    </linearGradient>

    <!-- Sparkle Diamond Glow -->
    <radialGradient id="sparkle-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
      <stop offset="40%" stop-color="#b2e7ed" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- BACKGROUND WALL -->
  <rect width="800" height="900" rx="20" fill="url(#wall-gradient)" />

  <!-- 1. THE 3D EMBLEM (Centered at top) -->
  <g transform="translate(140, 60) scale(0.86)" filter="url(#emblem-shadow)">
    <!-- 3D Extruded Sides -->
    <g transform="translate(12, 18)" fill="url(#depth-grad)">
      <path d="M 315 36 L 368 36 L 522 344 L 468 444 L 424 380 L 476 312 Z" />
      <path d="M 276 96 L 328 96 L 152 384 L 100 384 Z" />
      <path d="M 328 96 L 372 96 L 198 384 L 152 384 Z" />
      <path d="M 276 96 L 328 96 L 428 350 L 376 350 Z" />
      <path d="M 138 348 L 432 348 L 452 384 L 118 384 Z" />
      <path d="M 100 436 L 408 436 L 448 496 L 400 496 L 376 464 L 100 464 Z" />
      <path d="M 468 444 L 444 488 L 402 430 L 424 380 Z" />
    </g>

    <!-- Front Polished Faces -->
    <g stroke="url(#specular-grad)" stroke-width="2.5" stroke-linejoin="miter" stroke-miterlimit="6">
      <path d="M 315 36 L 368 36 L 522 344 L 468 444 L 424 380 L 476 312 Z" fill="url(#teal-front)" />
      <path d="M 276 96 L 328 96 L 152 384 L 100 384 Z" fill="url(#teal-front)" />
      <path d="M 328 96 L 372 96 L 198 384 L 152 384 Z" fill="url(#teal-front)" />
      <path d="M 276 96 L 328 96 L 428 350 L 376 350 Z" fill="url(#teal-front)" />
      <path d="M 138 348 L 432 348 L 452 384 L 118 384 Z" fill="url(#teal-front)" />
      <path d="M 100 436 L 408 436 L 448 496 L 400 496 L 376 464 L 100 464 Z" fill="url(#teal-front)" />
      <path d="M 468 444 L 444 488 L 402 430 L 424 380 Z" fill="url(#teal-front)" />
    </g>

    <!-- Glass Sheen -->
    <path
      d="M 276 96 L 368 36 L 460 210 L 210 320 Z"
      fill="#ffffff"
      opacity="0.25"
      style="mix-blend-mode: screen;"
    />
  </g>

  <!-- 2. 3D "ASCEND" LETTERING (Navy Metallic with Physical Bevel & Cast Shadow) -->
  <g id="ascend-text-group">
    <!-- Drop Shadow -->
    <text
      x="408"
      y="638"
      text-anchor="middle"
      fill="#03080f"
      opacity="0.45"
      font-family="'Plus Jakarta Sans', 'Arial Black', sans-serif"
      font-size="118"
      font-weight="900"
      letter-spacing="6"
    >ASCEND</text>

    <!-- 3D Extruded Depth Layers -->
    <text
      x="405"
      y="635"
      text-anchor="middle"
      fill="#050e1a"
      font-family="'Plus Jakarta Sans', 'Arial Black', sans-serif"
      font-size="118"
      font-weight="900"
      letter-spacing="6"
    >ASCEND</text>
    <text
      x="403"
      y="633"
      text-anchor="middle"
      fill="#09182b"
      font-family="'Plus Jakarta Sans', 'Arial Black', sans-serif"
      font-size="118"
      font-weight="900"
      letter-spacing="6"
    >ASCEND</text>
    <text
      x="401"
      y="631"
      text-anchor="middle"
      fill="#0f223d"
      font-family="'Plus Jakarta Sans', 'Arial Black', sans-serif"
      font-size="118"
      font-weight="900"
      letter-spacing="6"
    >ASCEND</text>

    <!-- Front Face -->
    <text
      x="400"
      y="630"
      text-anchor="middle"
      fill="url(#navy-3d-face)"
      stroke="url(#navy-bevel)"
      stroke-width="1.2"
      font-family="'Plus Jakarta Sans', 'Arial Black', sans-serif"
      font-size="118"
      font-weight="900"
      letter-spacing="6"
    >ASCEND</text>
  </g>

  <!-- 3. 3D "CAREER" LETTERING (Glossy Teal with 3D Depth) -->
  <g id="career-text-group">
    <!-- Cast Shadow -->
    <text
      x="405"
      y="746"
      text-anchor="middle"
      fill="#002126"
      opacity="0.5"
      font-family="'Plus Jakarta Sans', sans-serif"
      font-size="52"
      font-weight="800"
      letter-spacing="24"
    >CAREER</text>

    <!-- 3D Extruded Depth Layers -->
    <text
      x="403"
      y="744"
      text-anchor="middle"
      fill="#00353c"
      font-family="'Plus Jakarta Sans', sans-serif"
      font-size="52"
      font-weight="800"
      letter-spacing="24"
    >CAREER</text>
    <text
      x="401"
      y="742"
      text-anchor="middle"
      fill="#00535c"
      font-family="'Plus Jakarta Sans', sans-serif"
      font-size="52"
      font-weight="800"
      letter-spacing="24"
    >CAREER</text>

    <!-- Front Face -->
    <text
      x="400"
      y="740"
      text-anchor="middle"
      fill="url(#career-teal-face)"
      stroke="#5eead4"
      stroke-width="0.8"
      font-family="'Plus Jakarta Sans', sans-serif"
      font-size="52"
      font-weight="800"
      letter-spacing="24"
    >CAREER</text>
  </g>

  <!-- 4. ARCHITECTURAL BASELINE DIVIDER -->
  <line
    x1="120"
    y1="785"
    x2="680"
    y2="785"
    stroke="#162c4b"
    stroke-width="3"
    stroke-linecap="round"
  />

  <!-- 5. AMBIENT SPARKLE GLINT (Bottom Right from photo) -->
  <g transform="translate(670, 715)">
    <circle cx="0" cy="0" r="14" fill="url(#sparkle-glow)" />
    <path d="M 0 -12 L 2 -3 L 11 0 L 2 3 L 0 12 L -2 3 L -11 0 L -2 -3 Z" fill="#ffffff" opacity="0.9" />
  </g>
</svg>"""

    with open("public/images/ascend-logo-full.svg", "w", encoding="utf-8") as f:
        f.write(full_svg)
    print("Wrote public/images/ascend-logo-full.svg")

    # Also generate high-resolution PNGs
    try:
        subprocess.run(["convert", "-background", "none", "public/images/ascend-logo.svg", "public/images/ascend-logo.png"], check=True)
        print("Generated public/images/ascend-logo.png")
    except Exception as e:
        print(f"convert error on logo: {e}")

    try:
        subprocess.run(["convert", "public/images/ascend-logo-full.svg", "public/images/ascend-logo-full.png"], check=True)
        print("Generated public/images/ascend-logo-full.png")
    except Exception as e:
        print(f"convert error on full logo: {e}")

if __name__ == "__main__":
    create_svg_and_png()
