def not_string(str):
    if str.startswith("not"):
        return str
    else:
        return "not " + str


print(not_string('candy'))
