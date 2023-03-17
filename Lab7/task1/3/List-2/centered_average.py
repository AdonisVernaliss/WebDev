def centered_average(nums):
    nums.sort()
    return sum(nums[1:-1]) // (len(nums) - 2)


print(centered_average([1, 2, 3, 4, 100]))
