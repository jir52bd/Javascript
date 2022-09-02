//recursion in javascript

const rootResult = document.querySelector('.root');

function printf(e)
{
    rootResult.innerHTML = e;
}

let total = 0;
function sum(n){
    if(n === 0)
        return 0;
    else
        return n+sum(n -1);
}

for(let i = 1; i <= 100; i++)
{
    total += i;
}

printf("Sum = " + sum(10000));

console.log("hello");