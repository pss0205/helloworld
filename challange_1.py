a,b = 0,1

for i in range(100000):
    print(a%10)
    a,b = b,a+b
    