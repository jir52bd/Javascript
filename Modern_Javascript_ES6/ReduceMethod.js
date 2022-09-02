//reduce function 
var numbers = [1, 2, 3, 4, 5, 6, 7];

/*
    array.reduce(function(prevTotal, currentValue, currentIndex, arr), initialValue)
 */
var reduceResult = numbers.reduce(function(prevValue, currenytValue){
    return prevValue + currenytValue;
}, 0)

console.log(reduceResult);
