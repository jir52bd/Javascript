var numbers = [1, 2, 3, 4];

var newNumbers = [numbers[0], numbers[1], numbers[2], 5, 6, 7];

console.log(newNumbers);

var spreadNumbers = [...numbers, 5, 6, 7];

console.log(spreadNumbers);

var a = [...numbers, 2,3]; // exact copy of numbers array [...numbers]

console.log(a);

var joinArray = [...numbers, ...newNumbers];

console.log(joinArray);

//object array

var obj1 = {
    x: 1,
    y: 2
}

var obj2 = {
    a: 3,
    b: 4
}

console.log({
    ...obj1,
    ...obj2
});

/*
    Output:
    [ 1, 2, 3, 5, 6, 7 ]
[
  1, 2, 3, 4,       
  5, 6, 7
]
[ 1, 2, 3, 4, 2, 3 ]
[
  1, 2, 3, 4, 1,    
  2, 3, 5, 6, 7     
]
{ x: 1, y: 2, a: 3, b: 4 }
 */
