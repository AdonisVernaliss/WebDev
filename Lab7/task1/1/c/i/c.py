from math import sqrt

a = int(input())
b = int(input())

for i in range(a, b + 1):
    if sqrt(i) % 1 == 0:
        print(i, end=' ')
