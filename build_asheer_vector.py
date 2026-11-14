"""
Generate high precision SVG vector logo for Asheer (أشير) Editorial Studio based on Concept 2:
- Geometric quotation mark citation diamond / frame
- Minimalist Kufic calligraphy 'أشير'
- Underneath: 'ASHEER STUDIO' in clean luxury serif / geometric sans
"""
import base64

svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120" width="100%" height="100%">
  <defs>
    <linearGradient id="asheerGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C5A059"/>
      <stop offset="50%" stop-color="#DFBA73"/>
      <stop offset="100%" stop-color="#A8843E"/>
    </linearGradient>
  </defs>

  <!-- Citation diamond icon (Emblem on the right in RTL or left) -->
  <g transform="translate(258, 52)">
    <!-- Outer rotated diamond / citation mark -->
    <rect x="-24" y="-24" width="48" height="48" rx="8" transform="rotate(45)" fill="none" stroke="currentColor" stroke-width="3" opacity="0.9" />
    <!-- Inner quotation accents -->
    <path d="M-8,-6 L-2,-6 L-6,4 L-11,4 Z" fill="currentColor" opacity="0.95" />
    <path d="M4,-6 L10,-6 L6,4 L1,4 Z" fill="currentColor" opacity="0.95" />
    <circle cx="0" cy="14" r="2.5" fill="currentColor" />
  </g>

  <!-- Wordmark 'أشير' in Geometric Editorial Kufic -->
  <!-- Clean geometric vector path for 'أشير' -->
  <g fill="currentColor">
    <!-- Alif (أ) with Hamza -->
    <rect x="210" y="24" width="7" height="48" rx="3.5" />
    <path d="M213.5,12 C210,12 208,14.5 208,17 C210,17 212,16 215,16 C218,16 219,18 217,20 L210,20 L210,22 L220,22 C220.5,16 217.5,12 213.5,12 Z" />

    <!-- Sheen (ش) Teeth & Dots -->
    <!-- Base horizontal connector connecting to Ya (ي) and Ra (ر) -->
    <rect x="115" y="65" width="85" height="7" rx="3" />
    <!-- 3 vertical teeth for Sheen -->
    <rect x="190" y="44" width="7" height="24" rx="3" />
    <rect x="174" y="44" width="7" height="24" rx="3" />
    <rect x="158" y="44" width="7" height="24" rx="3" />
    <!-- 3 Diamond Dots for Sheen -->
    <g transform="translate(177.5, 30)">
      <!-- Top dot -->
      <rect x="-3" y="-12" width="6" height="6" rx="1.5" transform="rotate(45)" />
      <!-- Left dot -->
      <rect x="-8.5" y="-5.5" width="6" height="6" rx="1.5" transform="rotate(45)" />
      <!-- Right dot -->
      <rect x="2.5" y="-5.5" width="6" height="6" rx="1.5" transform="rotate(45)" />
    </g>

    <!-- Ya (ي) two dots underneath baseline -->
    <g transform="translate(144, 82)">
      <rect x="-6" y="-3" width="5.5" height="5.5" rx="1.5" transform="rotate(45)" />
      <rect x="4" y="-3" width="5.5" height="5.5" rx="1.5" transform="rotate(45)" />
    </g>

    <!-- Ra (ر) descending terminal curve -->
    <path d="M122,65 C122,65 118,78 108,86 C98,94 84,97 76,96 C74.5,95.8 74.2,93.5 75.8,93 C85,90 94,84 99,75 C102,70 103,65 103,65 Z" />
  </g>

  <!-- Subtitle: ASHEER STUDIO -->
  <text x="160" y="108" font-family="'Thmanyah Sans', 'Montserrat', 'Cinzel', system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="4" text-anchor="middle" fill="currentColor" opacity="0.82">ASHEER STUDIO</text>
</svg>'''

with open("asheer_logo.svg", "w", encoding="utf-8") as f:
    f.write(svg_content)

print("asheer_logo.svg written successfully!")

