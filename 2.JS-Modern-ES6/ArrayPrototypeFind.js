//Array.prototype.find()

var numbers = [1, 2, 3, 4, 5, 6, 7,8, 9,10];

/*
    Syntax 
    array.find(function(currentValue, Index, arr), thisValue);
*/

var result = numbers.find(function(currentValue){
    return currentValue > 5;
})

console.log(result);
//output : 6

/* another example of find */

class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    test(){
        console.log("Hello " + this.name + "\n" + "You are " + this.age);
    }

    exampleFunction(){
        let arr = [5, 10, 15, 20];
        arr.find(function(currentValue){
            (currentValue >= 20 ) ? this.test() : " ";
        }, this);
    }
}


let std = new Student("Rakib", 21);

std.exampleFunction();



