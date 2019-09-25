n = int(input("Enter no of rows and columns"))
print("Enter The Matrix")
arr = [] 
for i in range(0,n):   
 arr.append([int(j) for j in input().split()])  
d1 = 0
d2 = 0
for i in range(0, n): 
    d1 = d1 + arr[i][i] 
    d2 = d2 + arr[i][n - i - 1]  
print("The Diagonal Difference is ", abs(d1 - d2))
 
