x = input()

reverse_x = x[::-1]

while reverse_x.startswith('0'):
    reverse_x = reverse_x[1:]

print(reverse_x)
