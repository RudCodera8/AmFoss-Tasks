import re
formation = input("Enter the formation")
one = re.search(r'\d*1111111\d*',formation)
zero = re.search(r'\d*0000000\d*',formation)

if(one or zero):
   print("YES")
else:
   print("No")
