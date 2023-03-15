import math

a = int(input())
b = int(input())

if a <= 1000 and b <= 1000:
    c = math.sqrt(a**2 + b**2)
    print(c)
else:
    print("no more than 1000")
