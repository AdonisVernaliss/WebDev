def sleep_in(weekday, vacation):
    if not weekday or vacation:
        return True
    else:
        return False

print(sleep_in(False, True))