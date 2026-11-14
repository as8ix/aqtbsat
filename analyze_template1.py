import cv2
import numpy as np

img = cv2.imread(r"C:\Users\abdal_03\.gemini\antigravity\brain\88ff9356-29b4-4e25-938d-d31f81848bbd\.user_uploaded\media_1794622335264_c6e764ab.jpg")
h, w, c = img.shape
print(f"Template 1 loaded: {w}x{h}")

# Analyze colors:
# Card color sample (around x=w/2, y=h/2):
card_sample = img[int(h*0.3):int(h*0.4), int(w*0.3):int(w*0.4)].mean(axis=(0,1))
print("Card color BGR:", card_sample)
# Convert to Hex (BGR -> RGB)
card_hex = f"#{int(card_sample[2]):02X}{int(card_sample[1]):02X}{int(card_sample[0]):02X}"
print("Card Hex:", card_hex)

# Outer margin background (bottom corners)
bg_sample = img[int(h*0.95):int(h*0.98), 10:40].mean(axis=(0,1))
bg_hex = f"#{int(bg_sample[2]):02X}{int(bg_sample[1]):02X}{int(bg_sample[0]):02X}"
print("Outer background Hex:", bg_hex)
