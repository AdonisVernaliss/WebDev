def no_teen_sum(a, b, c):
    def fix_teen(n):
        if n in [13, 14, 17, 18, 19]:
            return 0
        else:
            return n

    return fix_teen(a) + fix_teen(b) + fix_teen(c)


print(no_teen_sum(15, 16, 20))
