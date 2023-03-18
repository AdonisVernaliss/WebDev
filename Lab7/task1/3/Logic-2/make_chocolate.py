def make_chocolate(small, big, goal):
    max_big_bars = goal // 5
    if big >= max_big_bars:
        rem_goal = goal - (max_big_bars * 5)
    else:
        rem_goal = goal - (big * 5)

    if rem_goal <= small:
        return rem_goal
    else:
        return -1


print(make_chocolate(7, 1, 10))
