n = int(input())
arr = list(map(int, input().split()))
max_score = max(arr)
runner_up_score = -101
for score in arr:
    if score != max_score and score > runner_up_score:
        runner_up_score = score
print(runner_up_score)
