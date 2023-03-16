def missing_char(str, n):
    before = str[:n]
    after = str[n + 1:]
    return before + after


print(missing_char("Hello", 2))
