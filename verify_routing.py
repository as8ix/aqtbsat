with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()
assert 'editor.html?template=' in text
assert 'فتح المحرر المتقدم' in text

with open('editor.html', 'r', encoding='utf-8') as f:
    text2 = f.read()
assert 'href="index.html"' in text2
assert 'app.js' in text2

print('Routing structure verified 100%!')

