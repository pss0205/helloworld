#include  <stdio.h>

int main()
{
    int curr = 0;
    int next = 1;

    for(int i = 0; i<=10; i++)
    {
        int sub;
        sub = next;
        next = curr + next;
        curr = sub;
        printf("%d %d \n" , curr, next);

    }
}