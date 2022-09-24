//destructuring 

var User = {
    name: 'JavaScript',
    library: ['React','Vue','Angular'],
    rating: {
        react: 1,
        vue: 2
    }

}

const {name: title, rating : rating} = User;

console.log(title);
console.log(rating.react);

//array destructuring 

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var [a, b] = numbers;

console.log(a, b);

// select or expected value

var [, a, , , , b] = numbers;
console.log(numbers);

//swaping 

var x = 20;
var y = 30;

//old way 

var temp = x;
x = y;
y = temp;

console.log(x, y);

//destructuring way
[y, x] = [x, y];

console.log(x, y);



