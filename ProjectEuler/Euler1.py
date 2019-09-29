x = 0
n = int(input("Enter the limit"))
for i in range (n):
	if(i % 3 == 0 or i % 5 == 0):
		x = x + i 
print(x)
