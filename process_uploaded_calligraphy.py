import cv2
import numpy as np
import base64

# Path to the uploaded image
img_path = r"C:\Users\abdal_03\.gemini\antigravity\brain\88ff9356-29b4-4e25-938d-d31f81848bbd\.user_uploaded\media_1794620855148_8622d660.jpg"
img = cv2.imread(img_path)
h, w, c = img.shape
print(f"Loaded image size: {w}x{h}")

# The background is very dark navy (approx R~10, G~18, B~30)
# The text 'أشير' is cream/off-white (approx R~240, G~230, B~215)
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Find threshold between dark navy background and bright cream calligraphy
# Otsu thresholding or simple threshold
_, binary = cv2.threshold(gray, 100, 255, cv2.THRESH_BINARY)

# Find bounding box around the text
y_indices, x_indices = np.where(binary > 0)
ymin, ymax = y_indices.min(), y_indices.max()
xmin, xmax = x_indices.min(), x_indices.max()

print(f"Text bbox: x=[{xmin}, {xmax}], y=[{ymin}, {ymax}], w={xmax-xmin}, h={ymax-ymin}")

# Add padding around the text
pad = 20
ymin = max(0, ymin - pad)
ymax = min(h, ymax + pad)
xmin = max(0, xmin - pad)
xmax = min(w, xmax + pad)

crop_img = img[ymin:ymax, xmin:xmax]
crop_gray = gray[ymin:ymax, xmin:xmax]

# Create ultra-smooth alpha mask from the luminance
# We can normalize the background to alpha 0 and text to alpha 255
# Using smooth range to preserve anti-aliasing edges
bg_val = 30.0
fg_val = 150.0
alpha = np.clip((crop_gray.astype(np.float32) - bg_val) / (fg_val - bg_val), 0, 1) * 255
alpha = alpha.astype(np.uint8)

# 1. Clean transparent PNG with exact cream color
# Off-white color: #F5EFEB (235, 239, 245 in BGR)
result_cream = np.zeros((crop_img.shape[0], crop_img.shape[1], 4), dtype=np.uint8)
result_cream[:, :, 0] = 235  # B
result_cream[:, :, 1] = 239  # G
result_cream[:, :, 2] = 245  # R
result_cream[:, :, 3] = alpha

cv2.imwrite("asheer_transparent_cream.png", result_cream)

# 2. Pure Black/Alpha mask for Canvas drawTintedMask
result_mask = np.zeros((crop_img.shape[0], crop_img.shape[1], 4), dtype=np.uint8)
result_mask[:, :, 0] = 0
result_mask[:, :, 1] = 0
result_mask[:, :, 2] = 0
result_mask[:, :, 3] = alpha

cv2.imwrite("asheer_transparent_mask.png", result_mask)

# Convert to Base64
with open("asheer_transparent_mask.png", "rb") as f:
    b64_mask = base64.b64encode(f.read()).decode("utf-8")

with open("asheer_transparent_cream.png", "rb") as f:
    b64_cream = base64.b64encode(f.read()).decode("utf-8")

with open("asheer_exact_b64.txt", "w") as f:
    f.write(f"MASK:data:image/png;base64,{b64_mask}\nCREAM:data:image/png;base64,{b64_cream}\nWIDTH:{crop_img.shape[1]}\nHEIGHT:{crop_img.shape[0]}")

print("Processed calligraphy successfully!")

