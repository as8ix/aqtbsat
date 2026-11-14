import cv2
import numpy as np
import base64

img_path = r"C:\Users\abdal_03\.gemini\antigravity\brain\88ff9356-29b4-4e25-938d-d31f81848bbd\.user_uploaded\media_1794620855148_8622d660.jpg"
img = cv2.imread(img_path)
h, w, c = img.shape

# Text bounding box without padding
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
_, binary = cv2.threshold(gray, 90, 255, cv2.THRESH_BINARY)
y_indices, x_indices = np.where(binary > 0)
ymin, ymax = y_indices.min(), y_indices.max()
xmin, xmax = x_indices.min(), x_indices.max()

pad = 12
ymin = max(0, ymin - pad)
ymax = min(h, ymax + pad)
xmin = max(0, xmin - pad)
xmax = min(w, xmax + pad)

crop = img[ymin:ymax, xmin:xmax].astype(np.float32)
# Background color vector: [31.6, 16.6, 7.6] (BGR)
bg_vec = np.array([31.6, 16.6, 7.6], dtype=np.float32)
# Foreground text color vector: [200.1, 222.0, 235.9] (BGR)
fg_vec = np.array([200.1, 222.0, 235.9], dtype=np.float32)

diff_vec = fg_vec - bg_vec
norm_sq = np.sum(diff_vec ** 2)

# Project each pixel color onto the direction from bg to fg
pixel_diff = crop - bg_vec
proj = np.sum(pixel_diff * diff_vec, axis=2) / norm_sq
alpha = np.clip(proj, 0.0, 1.0)

# Smooth slight threshold to clean pure background noise
alpha = np.where(alpha < 0.08, 0.0, (alpha - 0.08) / 0.92)
alpha = np.clip(alpha, 0.0, 1.0) * 255.0
alpha_uint8 = alpha.astype(np.uint8)

# 1. Cream color transparent PNG
res_cream = np.zeros((crop.shape[0], crop.shape[1], 4), dtype=np.uint8)
res_cream[:, :, 0] = int(fg_vec[0])
res_cream[:, :, 1] = int(fg_vec[1])
res_cream[:, :, 2] = int(fg_vec[2])
res_cream[:, :, 3] = alpha_uint8
cv2.imwrite("asheer_uploaded_transparent.png", res_cream)

# 2. Black mask for tinted rendering
res_mask = np.zeros((crop.shape[0], crop.shape[1], 4), dtype=np.uint8)
res_mask[:, :, 0] = 0
res_mask[:, :, 1] = 0
res_mask[:, :, 2] = 0
res_mask[:, :, 3] = alpha_uint8
cv2.imwrite("asheer_uploaded_mask.png", res_mask)

with open("asheer_uploaded_transparent.png", "rb") as f:
    b64_cream = base64.b64encode(f.read()).decode("utf-8")

with open("asheer_uploaded_mask.png", "rb") as f:
    b64_mask = base64.b64encode(f.read()).decode("utf-8")

with open("asheer_payload.js", "w", encoding="utf-8") as f:
    f.write(f'window.ASHEER_UPLOADED_CALLIGRAPHY_B64 = "data:image/png;base64,{b64_cream}";\n')
    f.write(f'window.ASHEER_UPLOADED_MASK_B64 = "data:image/png;base64,{b64_mask}";\n')
    f.write(f'window.ASHEER_ASPECT = {crop.shape[0]} / {crop.shape[1]};\n')
    f.write(f'window.ASHEER_CALLIGRAPHY_W = {crop.shape[1]};\n')
    f.write(f'window.ASHEER_CALLIGRAPHY_H = {crop.shape[0]};\n')

print(f"Generated asheer_payload.js successfully! W={crop.shape[1]}, H={crop.shape[0]}, Aspect={crop.shape[0]/crop.shape[1]:.4f}")

