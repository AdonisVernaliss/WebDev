def make_bricks(small, big, goal):
    return goal % 5 <= small and goal - (big * 5) <= small


print(make_bricks([6, 0, 11]))
