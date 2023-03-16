binary_number = input()
decimal_number = 0

for i, digit in enumerate(binary_number[::-1]):
    decimal_number += int(digit) * 2 ** i

print(decimal_number)
