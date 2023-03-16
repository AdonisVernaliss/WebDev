import math

AB = int(input())
BC = int(input())

angle_rad = math.atan2(AB, BC)

angle_deg = round(math.degrees(angle_rad))

print(str(angle_deg) + "°")
