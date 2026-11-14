# Update links in index.html (Home)
with open('index.html', 'r', encoding='utf-8') as f:
    home_content = f.read()

home_content = home_content.replace('href="index.html"', 'href="editor.html"')
home_content = home_content.replace('href="index.html?', 'href="editor.html?')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(home_content)

print('Updated index.html (Home) links to editor.html')

# Update links in editor.html (Studio Editor)
with open('editor.html', 'r', encoding='utf-8') as f:
    editor_content = f.read()

editor_content = editor_content.replace('href="home.html"', 'href="index.html"')

with open('editor.html', 'w', encoding='utf-8') as f:
    f.write(editor_content)

print('Updated editor.html links back to index.html')

