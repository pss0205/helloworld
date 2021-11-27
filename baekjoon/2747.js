const fs = require('fs');
const n = parseInt(fs.readFileSync('/dev/stdin').toString());
function fibo(n)
{
    let curr = 0;
    let next = 1;
    let temp;
    for(let i = 0; i < n; i++)
    {
        temp = curr;
        curr = next;
        next = next + temp;
    }
    return curr;
    
}
console.log(fibo(n));