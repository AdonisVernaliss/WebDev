def sum67(nums):
    sum = 0
    found6 = False
    for num in nums:
        if num == 6:
            found6 = True
        elif num == 7 and found6:
            found6 = False
        elif not found6:
            sum += num
    return sum


print(sum67([1, 2, 3, 4, 5]))
