n = int(input())
power_of_two = 1
while power_of_two < n:
    power_of_two *= 2
if power_of_two == n:
    print("YES")
else:
    print("NO")
