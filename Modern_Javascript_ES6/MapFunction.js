/*
    map() works like a forloop
    map() doesn't change main array
 */

    let numbers = [10, 20, 30, 40, 50];

   let mapResult = numbers.map((num) => {
    return 2 * num;
   })

   console.log(numbers);
   console.log(mapResult);

   /*
    output:
    [ 10, 20, 30, 40, 50 ]
    [ 20, 40, 60, 80, 100 ]
    */