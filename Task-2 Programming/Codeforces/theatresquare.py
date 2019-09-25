n = int(input("Enter the width of the rectangle "))
m = int(input("Enter the length of the rectangle"))
a = int(input("Enter the side of the flagstone"))
if(n%a == 0):
	i = n/a
else:
	i = int(n/a + 1)

if(m %a == 0):
	j = m/a
else:
	j = int(m/a + 1)
k = i * j
print(k)



