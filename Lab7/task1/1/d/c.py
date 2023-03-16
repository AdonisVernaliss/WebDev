n = int(input())
a = list(map(int, input().split()))

count = 0

for x in a:
    if x > 0:
        count += 1

print(count)
