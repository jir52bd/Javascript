//ES6 fat Arrow function

/*-normal function- */
function number(){
    return 10;
}

console.log('Normal function - ' + number());
/*-convart arrow function-*/

let arrowNumber = () => {
    return 20;
}

console.log('Arrow function - ' + arrowNumber());

/*-simlpest from of Arrow function -*/
let simplestArrowFunctionFrom = () => 'hello';

console.log('Simplest from of ArrowFunction - '+ simplestArrowFunctionFrom());

/*-paramiter pass in Arrow function -*/
let sum = (a, b) => a + b;

console.log(sum(10, 20));

/*-this কনফিউশন দূর করা এর ফাংশনের আরেকটা অন্যতম কাজ -*/
let javascript = {
    language: 'JavaScript',
    library: ['React', 'Vue', 'Angular'],
    printLibrary: function (){
        var self = this; // we catch language by keeping this in var 
        this.library.forEach(function(a){
            console.log(`${self.language} love ${a}`);
        });
    },
}

javascript.printLibrary();


/* in this case we use Arrow function to solve the confutin or var problem */


let php = {
    language: 'PHP',
    library: ['Laravel', 'CakePHP', 'Codeignator'],
    printLibrary: function(){
        this.library.forEach((a) => console.log(`${this.language} love ${a}`));
    }
}

php.printLibrary();

console.log('\n');

/* new key word will not work in arrow function 
 var person = (name) => {
    this.name = name;
 };
 var sakib = new Person("Sakib");
 */