answer_correct = int(input())
answer_student = int(input())

if (str(answer_correct) == str(answer_correct)[::-1]) & (len(str(answer_correct)) == 4):
    if answer_student == 1:
        print("YES")
    else:
        print("NO")
else:
    if answer_student != 1:
        print("YES")
    else:
        print("NO")
