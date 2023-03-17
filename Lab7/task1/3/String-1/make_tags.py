def make_tags(tag, word):
    return f'<{tag}>{word}</{tag}>'


print(make_tags('strong', 'Hello World!'))
