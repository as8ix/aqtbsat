"""
Generate an ultra-crisp, high-fidelity SVG icon for the Topbar Brand and Favicon
representing 'أشير' Concept 2:
- Geometric Citation Diamond (45 deg rotated square with inner double quotation marks and center indicator)
- Modern Kufic typography 'أشير'
- Luxury emerald and warm gold palette
"""

brand_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 50" width="180" height="50">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4AF37"/>
      <stop offset="50%" stop-color="#F3E5AB"/>
      <stop offset="100%" stop-color="#AA7C11"/>
    </linearGradient>
  </defs>

  <!-- Diamond citation emblem -->
  <g transform="translate(155, 25)">
    <!-- Outer diamond -->
    <rect x="-14" y="-14" width="28" height="28" rx="5" transform="rotate(45)" fill="none" stroke="url(#goldGrad)" stroke-width="2.2"/>
    <!-- Quotation marks inside -->
    <path d="M-5,-4 L-1,-4 L-3.5,3 L-7,3 Z" fill="url(#goldGrad)"/>
    <path d="M2,-4 L6,-4 L3.5,3 L0,3 Z" fill="url(#goldGrad)"/>
    <circle cx="0" cy="8.5" r="1.5" fill="url(#goldGrad)"/>
  </g>

  <!-- Wordmark 'أشير' in Arabic Kufic -->
  <g fill="#F5F1E8">
    <!-- Alif (أ) -->
    <rect x="122" y="10" width="4" height="24" rx="2"/>
    <circle cx="124" cy="5.5" r="2" fill="url(#goldGrad)"/>

    <!-- Sheen Teeth (ش) & Baseline -->
    <rect x="70" y="30" width="46" height="4" rx="1.5"/>
    <rect x="110" y="20" width="3.5" height="12" rx="1.5"/>
    <rect x="100" y="20" width="3.5" height="12" rx="1.5"/>
    <rect x="90" y="20" width="3.5" height="12" rx="1.5"/>

    <!-- Sheen Dots -->
    <rect x="100" y="10" width="3.5" height="3.5" rx="0.8" transform="rotate(45 101.7 11.7)" fill="url(#goldGrad)"/>
    <rect x="94" y="14" width="3.5" height="3.5" rx="0.8" transform="rotate(45 95.7 15.7)" fill="url(#goldGrad)"/>
    <rect x="106" y="14" width="3.5" height="3.5" rx="0.8" transform="rotate(45 107.7 15.7)" fill="url(#goldGrad)"/>

    <!-- Ya Dots (ي) -->
    <circle cx="82" cy="38" r="1.6" fill="url(#goldGrad)"/>
    <circle cx="87" cy="38" r="1.6" fill="url(#goldGrad)"/>

    <!-- Ra (ر) -->
    <path d="M74,30 C74,30 72,36 67,40 C62,44 54,44 50,43.5 C56,41 60,37 62,32 C63,30 64,30 64,30 Z"/>
  </g>

  <!-- English Subtitle: ASHEER STUDIO -->
  <text x="78" y="48" font-family="'Thmanyah Sans', system-ui, sans-serif" font-size="6.5" font-weight="700" letter-spacing="2.5" text-anchor="middle" fill="#9CB0A6">ASHEER STUDIO</text>
</svg>'''

with open("brand_logo.svg", "w", encoding="utf-8") as f:
    f.write(brand_svg)

print("brand_logo.svg created")

