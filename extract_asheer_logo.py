import cv2
import numpy as np

img = cv2.imread("card_box.jpg")
mask = cv2.imread("card_box_dark.png", cv2.IMREAD_GRAYSCALE)

# Find contours of connected dark components
num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(mask)
# Filter components that are near the horizontal center and of reasonable size
h, w = mask.shape
print(f"Components found: {num_labels}")
valid_components = []
for i in range(1, num_labels):
    x, y, cw, ch, area = stats[i]
    if area > 100:
        valid_components.append((x, y, cw, ch, area, centroids[i]))
        print(f"Comp {i}: bbox=({x}, {y}, {cw}, {ch}), area={area}, center=({centroids[i][0]:.1f}, {centroids[i][1]:.1f})")

# bounding box enclosing all valid components near center
if valid_components:
    xs = [c[0] for c in valid_components]
    ys = [c[1] for c in valid_components]
    rights = [c[0] + c[2] for c in valid_components]
    bottoms = [c[1] + c[3] for c in valid_components]
    min_x, max_x = min(xs), max(rights)
    min_y, max_y = min(ys), max(bottoms)
    print(f"Overall logo bounding box in card_box: x=[{min_x}, {max_x}], y=[{min_y}, {max_y}]")
    logo_crop = img[min_y:max_y, min_x:max_x]
    cv2.imwrite("asheer_logo_clean.png", logo_crop)
