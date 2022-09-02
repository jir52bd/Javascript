//Ternary Operator

var age = 18;
var type;
if(age >= 18){
    type = 'Adult';
}else{
    type = 'Child';
}

//using ternary
var exam = (age >= 18) ? 'Adult - from ternary' : 'Child - from ternary'

console.log(type);
console.log(exam);

//shorter from condition checking if tru or false

var a = 5;

//var condition = (a >= 5) ? true : false;
var condition = a >= 5;

console.log(condition);
