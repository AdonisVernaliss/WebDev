def sum13(nums):
    if len(nums) == 0:
        return 0
    else:
        sum = 0
        i = 0
        while i < len(nums):
            if nums[i] == 13:
                i += 2
            else:
                sum += nums[i]
                i += 1
        return sum


print(sum13([1, 2, 3, 4, 100]))
