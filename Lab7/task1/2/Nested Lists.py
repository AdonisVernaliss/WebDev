n = int(input())

marks_dict = {}

for i in range(n):
    student_info = input().split()
    name = student_info[0]
    marks = list(map(float, student_info[1:]))
    marks_dict[name] = marks

query_name = input()

if query_name in marks_dict:
    avg_mark = sum(marks_dict[query_name]) / len(marks_dict[query_name])
    print("{:.2f}".format(avg_mark)) 
