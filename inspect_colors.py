import cv2
import numpy as np

img = cv2.imread(r"C:\Users\abdal_03\.gemini\antigravity\brain\88ff9356-29b4-4e25-938d-d31f81848bbd\.user_uploaded\media_1794620855148_8622d660.jpg")
h, w, _ = img.shape
# Background sample around corner (0,0)
bg_color = img[10:30, 10:30].mean(axis=(0,1))
print("Background color (BGR):", bg_color)

# Text sample
# Text is near center
text_color = img[350:370, 500:520].mean(axis=(0,1))
print("Text color (BGR):", text_color)

# Let's inspect the cropped mask
mask = cv2.imread("asheer_transparent_mask.png", cv2.IMREAD_UNCHANGED)
print("Mask shape:", mask.shape)

