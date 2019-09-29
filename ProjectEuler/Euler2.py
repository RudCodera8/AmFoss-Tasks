n = int(input("Enter the limit"))
a = 1; b = 2
s = 0
while (a <= n):
    t = a
    a = b
    b += t
    if (t % 2 == 0):
      s+= t
print(s)
