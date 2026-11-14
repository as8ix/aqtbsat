"""
Create a high-resolution crisp PNG (512x200) mask of Asheer logo from the geometric SVG concept 2
and convert it to Base64 so it can be directly embedded in app.js and used as ASHEER_LOGO_B64.
"""
import base64
import numpy as np
import cv2

# We can draw the logo at high resolution on a transparent 800x320 canvas
width, height = 800, 320
img = np.zeros((height, width, 4), dtype=np.uint8)

# Color is solid black mask (or white with alpha 255) for the mask engine
color = (0, 0, 0, 255)

# 1. Rotated Citation Diamond Emblem
cx, cy = 680, 140
d_size = 56
rect_pts = np.array([
    [-d_size, 0],
    [0, -d_size],
    [d_size, 0],
    [0, d_size]
], dtype=np.float32)

# draw diamond outline with thickness 8
pts = (rect_pts + [cx, cy]).astype(np.int32)
cv2.polylines(img, [pts], isClosed=True, color=color, thickness=9, lineType=cv2.LINE_AA)

# Quotation marks inside diamond
# Left quotation mark (in RTL, left mark)
q1 = np.array([
    [cx - 18, cy - 14],
    [cx - 4, cy - 14],
    [cx - 12, cy + 12],
    [cx - 24, cy + 12]
], dtype=np.int32)
cv2.fillPoly(img, [q1], color=color, lineType=cv2.LINE_AA)

# Right quotation mark
q2 = np.array([
    [cx + 8, cy - 14],
    [cx + 22, cy - 14],
    [cx + 14, cy + 12],
    [cx + 2, cy + 12]
], dtype=np.int32)
cv2.fillPoly(img, [q2], color=color, lineType=cv2.LINE_AA)

# Accent dot at bottom of diamond
cv2.circle(img, (cx, cy + 34), 6, color=color, thickness=-1, lineType=cv2.LINE_AA)

# 2. Geometric Typography 'أشير'
# Alif (أ)
alif_x = 550
alif_y1 = 60
alif_y2 = 185
cv2.line(img, (alif_x, alif_y1), (alif_x, alif_y2), color=color, thickness=18, lineType=cv2.LINE_AA)
# Hamza over Alif
hz_pts = np.array([
    [alif_x - 18, 38],
    [alif_x + 8, 34],
    [alif_x + 14, 46],
    [alif_x - 10, 52],
    [alif_x - 18, 56],
    [alif_x + 10, 56]
], dtype=np.int32)
cv2.polylines(img, [hz_pts], isClosed=False, color=color, thickness=6, lineType=cv2.LINE_AA)

# Baseline connector for 'شير'
base_y = 180
sh_start = 510
ra_end = 260
cv2.line(img, (sh_start, base_y), (ra_end, base_y), color=color, thickness=18, lineType=cv2.LINE_AA)

# Sheen teeth (3 teeth)
teeth_x = [495, 450, 405]
teeth_top = 120
for tx in teeth_x:
    cv2.line(img, (tx, teeth_top), (tx, base_y), color=color, thickness=16, lineType=cv2.LINE_AA)

# Sheen 3 dots (diamonds)
def draw_dot(x, y, s=14):
    dpts = np.array([[x, y-s], [x+s, y], [x, y+s], [x-s, y]], dtype=np.int32)
    cv2.fillPoly(img, [dpts], color=color, lineType=cv2.LINE_AA)

draw_dot(450, 65, 12)
draw_dot(425, 88, 12)
draw_dot(475, 88, 12)

# Ya (ي) 2 dots under baseline
draw_dot(345, 235, 12)
draw_dot(380, 235, 12)

# Ra (ر) swoosh descending gracefully
ra_pts = [
    (275, base_y),
    (265, 215),
    (240, 248),
    (195, 268),
    (145, 270)
]
for i in range(len(ra_pts)-1):
    cv2.line(img, ra_pts[i], ra_pts[i+1], color=color, thickness=18 - i*2, lineType=cv2.LINE_AA)

# Save mask PNG
cv2.imwrite("asheer_mask.png", img)

# Save Base64
with open("asheer_mask.png", "rb") as f:
    b64 = base64.b64encode(f.read()).decode("utf-8")

with open("asheer_b64.txt", "w") as f:
    f.write("data:image/png;base64," + b64)

print("asheer_mask.png and asheer_b64.txt generated successfully!")

