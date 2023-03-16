binary_number = input()
decimal_number = 0

for i in range(len(binary_number)):
    digit = int(binary_number[i])
    decimal_number += digit * 2**(len(binary_number)-1-i)


print(decimal_number)
