a, b, c, d = map(int, input().split())


def minn(a, b, c, d):
    return min(min(min(a, b), c), d)


print(minn(a, b, c, d))
