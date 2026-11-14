import cv2

files = [
    r"C:\Users\abdal_03\.gemini\antigravity\brain\88ff9356-29b4-4e25-938d-d31f81848bbd\.user_uploaded\media_1794530612004_416aed8f.jpg",
    r"C:\Users\abdal_03\.gemini\antigravity\brain\88ff9356-29b4-4e25-938d-d31f81848bbd\.user_uploaded\media_1794530612004_47e118d4.jpg",
    r"C:\Users\abdal_03\.gemini\antigravity\brain\88ff9356-29b4-4e25-938d-d31f81848bbd\.user_uploaded\media_1794530612015_e55d76ab.jpg",
    r"C:\Users\abdal_03\.gemini\antigravity\brain\88ff9356-29b4-4e25-938d-d31f81848bbd\.user_uploaded\media_1794530612016_5e1842c0.jpg"
]

for idx, p in enumerate(files):
    img = cv2.imread(p)
    cv2.imwrite(f"template_thumb_{idx+1}.jpg", img)
    print(f"Template {idx+1} size: {img.shape}")

