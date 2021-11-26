n = int(input())
curr = 0
next = 1
for i in range(n):
    curr,next = next, curr+next
    
print(curr)
