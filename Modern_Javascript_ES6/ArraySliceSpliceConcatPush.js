//Array slice
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

/*
    array.slice(start, end)
 */

let result = numbers.slice(-3, 6);

console.log(result);

/*
    array.splice(index, howmany, item1, ...., itemX)
 */

let spliceResult = numbers.splice(1, 2, 9, 10, 11, 12);

console.log(numbers); //splice change main array
console.log(spliceResult);

/*
[ 6 ]
[
  1, 9, 10, 11, 12,
  4, 5,  6,  7,  8 
]
[ 2, 3 ]

*/

//array.concat()
let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10]

/*
    array1.concat(array2, array3, ..., arrayX)
 */

let ab = a.concat(b);

console.log(a);// concat doesn't change main array

console.log(ab);

/*
    output:
    [ 1, 2, 3, 4, 5 ]  
    [
    1, 2, 3, 4,  5,  
    6, 7, 8, 9, 10   
    ]
 */

// array.push()

let n = [10, 20, 30, 40, 50, 60];

let pushResult = n.push(100, 200);

console.log(pushResult);
console.log(n); // push change main array

/*
  output:
  8
[
  10, 20,  30,  40,
  50, 60, 100, 200
]
 */




