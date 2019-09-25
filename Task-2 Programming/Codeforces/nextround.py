
n = int(input("Enter The No. of participants"))
x = []
add = 0
print("Enter the scores of each participants")
x = []
for i in range(n):
	y = int(input(""))
	x.append(y)
print("The Score List: ", x)
a = int(input("Enter The number of last person who advanced the round"))
for j in range(a):
	add = add + 1

if x[a-1] == x[a]:
	add = add + 1
	print(add)
else:
	print(add)
