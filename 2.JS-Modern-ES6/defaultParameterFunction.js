//default function parameter

function myFunc(x = 10){
    return x;
}

// if pass nothin in parameter it return x
console.log(myFunc());

//if pass undefine it return x
console.log(myFunc(undefined));

//if pass null it will return Null value

console.log(myFunc(null));
